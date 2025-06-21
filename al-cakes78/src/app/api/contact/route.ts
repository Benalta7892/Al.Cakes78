// app/api/contact/route.ts

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { objet, name, prenom, email, telephone, message } = body;

    const data = await resend.emails.send({
      from: `"${name} ${prenom}" <contact@resend.dev>`,
      to: process.env.CONTACT_EMAIL!,
      subject: `Al.Cakes78.com - ${objet}`,
      replyTo: email,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Prénom :</strong> ${prenom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
}
