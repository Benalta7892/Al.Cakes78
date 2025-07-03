// app/api/contact/route.ts

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Gateau {
  gateau: string;
  taille: string;
  quantite: number;
  prix: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      objet,
      name,
      prenom,
      email,
      telephone,
      message,
      adress,
      codePostal,
      city,
      paiement,
      livraisonMode,
      gateaux,
      totalPrix,
      fraisLivraison,
      totalFinal,
    } = body;

    const isCommande = objet === "commande";

    const gateauxHtml =
      isCommande && Array.isArray(gateaux)
        ? gateaux
            .map(
              (g) => `
        <tr>
          <td>${g.gateau}</td>
          <td>${g.taille}</td>
          <td>${g.quantite}</td>
          <td>${g.prix.toFixed(2)} €</td>
        </tr>`
            )
            .join("")
        : "";

    const livraisonHtml =
      livraisonMode === "livraison"
        ? `
        <p><strong>Livraison :</strong> à l'adresse</p>
        <p><strong>Adresse :</strong> ${adress}, ${codePostal} ${city}</p>
        <p><strong>Frais de livraison :</strong> ${fraisLivraison?.toFixed(2)} €</p>
      `
        : `<p><strong>Retrait :</strong> Click and Collect</p>`;

    const html = `
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Prénom :</strong> ${prenom}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      ${
        isCommande
          ? `
        <hr />
        <h3>Détails de la commande :</h3>

        <table border="1" cellspacing="0" cellpadding="8">
          <thead>
            <tr>
              <th>Gâteau</th>
              <th>Taille</th>
              <th>Quantité</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            ${gateauxHtml}
            <tr>
              <td colspan="3"><strong>Sous-total</strong></td>
              <td><strong>${totalPrix?.toFixed(2)} €</strong></td>
            </tr>
          </tbody>
        </table>

        <br />
        ${livraisonHtml}
        <p><strong>Mode de paiement :</strong> ${paiement}</p>
        <p><strong>Total final :</strong> ${totalFinal?.toFixed(2)} €</p>
      `
          : ""
      }

      ${message ? `<p><strong>Message :</strong><br/>${message}</p>` : ""}
    `;

    const data = await resend.emails.send({
      from: `"${name} ${prenom}" <contact@resend.dev>`,
      to: process.env.CONTACT_EMAIL!,
      subject: `Al.Cakes78.com - ${objet}`,
      replyTo: email,
      html,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
}
