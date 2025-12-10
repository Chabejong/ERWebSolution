// AgentMail integration for sending contact form emails

async function getApiKey() {
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

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export async function sendContactFormEmail(data: ContactFormData): Promise<boolean> {
  try {
    const apiKey = await getApiKey();
    
    // Use AgentMail's direct HTTP API to send emails (avoids inbox limit issues)
    const response = await fetch('https://api.agentmail.dev/v1/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`AgentMail API error: ${response.status} - ${error}`);
    }
    
    console.log('Contact form email sent successfully');
    return true;
  } catch (error) {
    console.error('Failed to send contact form email:', error instanceof Error ? error.message : JSON.stringify(error));
    return false;
  }
}
