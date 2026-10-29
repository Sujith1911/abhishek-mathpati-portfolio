import type { IncomingMessage, ServerResponse } from 'http';
import { Resend } from 'resend';

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  let rawBody = '';
  req.on('data', (chunk) => {
    rawBody += chunk;
  });

  req.on('end', async () => {
    try {
      const { name, email, message } = JSON.parse(rawBody || '{}');

      if (!name || !email || !message) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Name, email, and message are required fields.' }));
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid email address provided.' }));
        return;
      }

      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey || apiKey === 're_your_api_key_here' || apiKey.startsWith('re_your_')) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify({
            success: true,
            simulated: true,
            id: 'sim_' + Date.now(),
            message: 'Dispatch received in test mode. Set valid RESEND_API_KEY in .env for live transmission.',
          })
        );
        return;
      }

      const resend = new Resend(apiKey);
      const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
        to: process.env.CONTACT_NOTIFICATION_EMAIL || 'mythreie.dumpati@gmail.com',
        replyTo: email,
        subject: `New Archival Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; padding: 24px; border: 2px solid #141210; background: #faf9f5; color: #141210;">
            <h2 style="color: #8C3833; border-bottom: 2px solid #141210; padding-bottom: 8px; margin-top: 0; text-transform: uppercase;">The Daily Chronicle // Archival Dispatch</h2>
            <p><strong>Sender:</strong> ${name} &lt;${email}&gt;</p>
            <hr style="border: none; border-top: 1px solid #141210; margin: 16px 0;" />
            <p style="white-space: pre-wrap; line-height: 1.6; font-size: 15px;">${message}</p>
          </div>
        `,
      });

      if (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: error.message }));
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: true, id: data?.id }));
    } catch (err: any) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: err.message || 'Internal server error' }));
    }
  });
}

