import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Basic Server-Side Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  // 2. Validate email syntax
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address provided.' });
  }

  // 3. Check for API key / development fallback
  if (!resend || !resendApiKey || resendApiKey === 're_your_api_key_here' || resendApiKey.startsWith('re_your_')) {
    return res.status(200).json({
      success: true,
      simulated: true,
      id: 'sim_' + Date.now(),
      message: 'Dispatch received in test mode. Configure a valid RESEND_API_KEY in .env for live transmission.',
    });
  }

  // 4. Dispatch via Resend
  try {
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
      console.error('[Resend Error]:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('[API Error]:', err);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`[Resend Server] listening on http://localhost:${PORT}`);
});

