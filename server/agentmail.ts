// AgentMail integration for sending contact form emails
import { AgentMailClient } from 'agentmail';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
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
  return { apiKey: connectionSettings.settings.api_key };
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
export async function getUncachableAgentMailClient() {
  const { apiKey } = await getCredentials();
  return new AgentMailClient({
    apiKey: apiKey
  });
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
    const client = await getUncachableAgentMailClient();
    
    // Create an inbox to send from
    const inbox = await client.inboxes.create({});
    const inboxId = inbox.inboxId;
    
    // Send the email to the business owner via inboxes.messages.send
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
