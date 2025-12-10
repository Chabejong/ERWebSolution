// AgentMail integration for sending contact form emails
// Reference: connection:conn_agentmail_01KC4K1P0W6A5P59R5G41MBNFX
import { AgentMailClient } from 'agentmail';

async function getApiKey(): Promise<string> {
  // First, try to get API key from environment variable (for production)
  if (process.env.AGENTMAIL_API_KEY) {
    console.log('Using AgentMail API key from environment variable');
    return process.env.AGENTMAIL_API_KEY;
  }

  // Fallback to connector approach (for development)
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken || !hostname) {
    throw new Error('AgentMail API key not found in environment variables and connector authentication failed');
  }

  const connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=agentmail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || !connectionSettings.settings.api_key) {
    throw new Error('AgentMail not connected');
  }
  return connectionSettings.settings.api_key;
}

// Get AgentMail client with proper configuration
async function getAgentMailClient(): Promise<AgentMailClient> {
  const apiKey = await getApiKey();
  return new AgentMailClient({
    apiKey: apiKey
  });
}

// Cache inbox ID to avoid hitting inbox creation limits
let cachedInboxId: string | null = null;

async function getOrCreateInbox(client: AgentMailClient): Promise<string> {
  if (cachedInboxId) {
    return cachedInboxId;
  }
  
  // Try to get existing inbox first
  try {
    const response = await client.inboxes.list();
    // Access inboxes array from response
    const inboxes = (response as any).inboxes || (response as any).data || (response as any).items;
    
    if (inboxes && Array.isArray(inboxes) && inboxes.length > 0) {
      const inboxId = inboxes[0].inboxId as string;
      cachedInboxId = inboxId;
      console.log('Using AgentMail inbox:', inboxId);
      return inboxId;
    }
  } catch (listError) {
    console.log('Could not list inboxes:', listError instanceof Error ? listError.message : listError);
  }
  
  // Only try to create if no existing inbox found
  const inbox = await client.inboxes.create({
    displayName: 'E&R Webservice Contact Form'
  });
  cachedInboxId = inbox.inboxId;
  console.log('Created new AgentMail inbox:', cachedInboxId);
  return cachedInboxId;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export async function sendContactFormEmail(data: ContactFormData): Promise<boolean> {
  try {
    const client = await getAgentMailClient();
    const inboxId = await getOrCreateInbox(client);
    
    // Send the email to the business owner
    await client.inboxes.messages.send(inboxId, {
      to: 'erwebservice@gmail.com',
      subject: `New Contact Form Submission from ${data.name}`,
      text: `
New contact form submission received:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}

Message:
${data.message}

---
This message was sent from the E&R Webservice contact form.
      `.trim(),
      html: `
<h2>New Contact Form Submission</h2>
<table style="border-collapse: collapse; width: 100%; max-width: 600px;">
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name</td>
    <td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
    <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
    <td style="padding: 8px; border: 1px solid #ddd;">${data.phone || 'Not provided'}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td>
    <td style="padding: 8px; border: 1px solid #ddd;">${data.company || 'Not provided'}</td>
  </tr>
</table>
<h3>Message:</h3>
<p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message.replace(/\n/g, '<br>')}</p>
<hr>
<p style="color: #666; font-size: 12px;">This message was sent from the E&R Webservice contact form.</p>
      `.trim()
    });
    
    console.log('Contact form email sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send contact form email:', error instanceof Error ? error.message : JSON.stringify(error));
    if (error instanceof Error && error.stack) {
      console.error('Stack trace:', error.stack);
    }
    return false;
  }
}
