import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { namn, email, telefon, meddelande, gdprConsent } = body

    // Basic validation
    if (!namn || typeof namn !== 'string' || namn.trim().length < 2) {
      return NextResponse.json({ error: 'Ogiltigt namn.' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Ogiltig e-postadress.' }, { status: 400 })
    }
    if (!meddelande || typeof meddelande !== 'string' || meddelande.trim().length < 10) {
      return NextResponse.json(
        { error: 'Meddelandet är för kort (minst 10 tecken).' },
        { status: 400 }
      )
    }
    if (!gdprConsent) {
      return NextResponse.json(
        { error: 'Du måste godkänna integritetspolicyn för att skicka formuläret.' },
        { status: 400 }
      )
    }

    // -----------------------------------------------------------------------
    // TODO: Wire up email delivery here.  Do NOT log personal data (name,
    // email, message) to the console or unaudited log streams.  Instead,
    // forward the submission to one of the providers below and implement
    // production-grade structured logging that complies with the
    // data-retention policy (max 24 months).
    //
    // Example providers:
    //   • Resend       – https://resend.com          (npm install resend)
    //   • Nodemailer   – with SMTP / OAuth2
    //   • SendGrid     – https://sendgrid.com
    //
    // Example with Resend (uncomment and fill in env vars):
    //
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'noreply@projektgarantiab.se',
    //     to:   'info@projektgarantiab.se',
    //     subject: `Ny förfrågan från ${namn}`,
    //     text: `Namn: ${namn}\nE-post: ${email}\nTelefon: ${telefon ?? '–'}\n\n${meddelande}`,
    //   })
    // -----------------------------------------------------------------------

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Ett oväntat fel uppstod. Försök igen senare.' },
      { status: 500 }
    )
  }
}
