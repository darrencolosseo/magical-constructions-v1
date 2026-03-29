import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, email, phone, suburb, service, message } = req.body

  const businessHtml = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0A0805; color: #EDE8DF; padding: 40px; border: 1px solid #C2A87A;">
      <h1 style="color: #C2A87A; font-size: 28px; font-weight: 300; margin-bottom: 8px;">New Quote Request</h1>
      <p style="color: rgba(237,232,223,0.5); font-size: 13px; margin-bottom: 32px;">Submitted via Magical Constructions website</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); color: rgba(237,232,223,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Name</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); font-size: 15px;">${name}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); color: rgba(237,232,223,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); font-size: 15px;">${email}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); color: rgba(237,232,223,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); font-size: 15px;">${phone || 'Not provided'}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); color: rgba(237,232,223,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Suburb</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); font-size: 15px;">${suburb || 'Not provided'}</td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); color: rgba(237,232,223,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Service</td><td style="padding: 12px 0; border-bottom: 1px solid rgba(194,168,122,0.15); font-size: 15px; color: #C2A87A;">${service || 'Not specified'}</td></tr>
        <tr><td style="padding: 12px 0; color: rgba(237,232,223,0.5); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top; padding-top: 16px;">Message</td><td style="padding: 12px 0; font-size: 15px; line-height: 1.7;">${message || 'No message provided'}</td></tr>
      </table>
    </div>
  `

  const customerHtml = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0A0805; color: #EDE8DF; padding: 40px; border: 1px solid #C2A87A;">
      <h1 style="color: #C2A87A; font-size: 28px; font-weight: 300; margin-bottom: 8px;">Thank you, ${name}.</h1>
      <p style="color: rgba(237,232,223,0.6); font-size: 15px; line-height: 1.8; margin-bottom: 32px;">We've received your request and will be in touch within 24 hours with a detailed, itemised proposal for your project.</p>
      <div style="border-top: 1px solid rgba(194,168,122,0.2); padding-top: 28px;">
        <p style="color: rgba(237,232,223,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 16px;">Your Request Summary</p>
        <p style="font-size: 14px; color: rgba(237,232,223,0.7); margin: 6px 0;"><strong style="color: #C2A87A;">Service:</strong> ${service || 'To be discussed'}</p>
        <p style="font-size: 14px; color: rgba(237,232,223,0.7); margin: 6px 0;"><strong style="color: #C2A87A;">Location:</strong> ${suburb || 'To be discussed'}</p>
        ${message ? `<p style="font-size: 14px; color: rgba(237,232,223,0.7); margin: 6px 0;"><strong style="color: #C2A87A;">Your note:</strong> ${message}</p>` : ''}
      </div>
      <div style="border-top: 1px solid rgba(194,168,122,0.1); padding-top: 28px; margin-top: 32px;">
        <p style="color: rgba(237,232,223,0.4); font-size: 13px; line-height: 1.7;">Any questions? Reach us at <a href="mailto:magicalconstructions@gmail.com" style="color: #C2A87A;">magicalconstructions@gmail.com</a> or call <a href="tel:0427731552" style="color: #C2A87A;">0427 731 552</a>.</p>
        <p style="color: rgba(194,168,122,0.6); font-size: 13px; font-style: italic; margin-top: 24px;">Magical Constructions &bull; Sydney, NSW</p>
      </div>
    </div>
  `

  try {
    // Notify business
    await resend.emails.send({
      from: 'Magical Constructions <onboarding@resend.dev>',
      to: ['magicalconstructions@gmail.com'],
      reply_to: email,
      subject: `New Quote: ${service || 'General'} — ${name} (${suburb || 'NSW'})`,
      html: businessHtml,
    })

    // Customer confirmation
    await resend.emails.send({
      from: 'Magical Constructions <onboarding@resend.dev>',
      to: [email],
      subject: 'Your quote request has been received',
      html: customerHtml,
    })

    res.status(200).json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
}
