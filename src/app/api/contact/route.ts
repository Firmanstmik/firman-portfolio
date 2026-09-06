import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { SITE } from '@/data/site'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = schema.parse(body)

    if (!process.env.RESEND_API_KEY) {
      console.info('[contact]', data)
      return NextResponse.json({
        ok: true,
        mode: 'logged',
        message: 'Contact received. Configure RESEND_API_KEY for email delivery.',
      })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'FIRMANLABS <onboarding@resend.dev>',
      to: [SITE.email],
      replyTo: data.email,
      subject: `New inquiry from ${data.name}`,
      text: data.message,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }
}
