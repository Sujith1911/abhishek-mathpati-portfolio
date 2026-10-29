import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { Resend } from 'resend'

function resendApiPlugin(): Plugin {
  let env: Record<string, string> = {}
  return {
    name: 'resend-api-plugin',
    configResolved(config) {
      env = loadEnv(config.mode, process.cwd(), '')
    },
    configureServer(server) {
      server.middlewares.use('/api/send', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }
        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })
        req.on('end', async () => {
          try {
            const { name, email, message } = JSON.parse(body || '{}')
            if (!name || !email || !message) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Name, email, and message are required fields.' }))
              return
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Invalid email address provided.' }))
              return
            }

            const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY
            if (!apiKey || apiKey === 're_your_api_key_here' || apiKey.startsWith('re_your_')) {
              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  success: true,
                  simulated: true,
                  id: 'sim_' + Date.now(),
                  message:
                    'Dispatch recorded in archive ledger (configure RESEND_API_KEY in .env for live transmission).',
                })
              )
              return
            }

            const resend = new Resend(apiKey)
            const { data, error } = await resend.emails.send({
              from: env.EMAIL_FROM || process.env.EMAIL_FROM || 'onboarding@resend.dev',
              to:
                env.CONTACT_NOTIFICATION_EMAIL ||
                process.env.CONTACT_NOTIFICATION_EMAIL ||
                'mythreie.dumpati@gmail.com',
              replyTo: email,
              subject: `New Archival Inquiry from ${name}`,
              text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            })

            if (error) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: error.message }))
              return
            }

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: true, id: data?.id }))
          } catch (err: any) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err.message || 'Internal server error' }))
          }
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), resendApiPlugin()],
})
