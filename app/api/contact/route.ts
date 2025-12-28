import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, phone, service, urgency, address, message } = await request.json();

        // Validations (Basic)
        if (!name || !phone || !message) {
            return NextResponse.json(
                { error: 'Champs obligatoires manquants (Nom, Téléphone, Message)' },
                { status: 400 }
            );
        }

        // Configure Transporter
        // NOTE: For production, use environment variables: process.env.SMTP_HOST, etc.
        // For now, I will assume Gmail or a standard SMTP service. 
        // YOU MUST CONFIGURE THIS WITH YOUR ACTUAL CREDENTIALS.
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Or use 'host', 'port', etc. for other providers
            auth: {
                user: process.env.EMAIL_USER, // e.g., 'votre-email@gmail.com'
                pass: process.env.EMAIL_PASS, // App Password (not your login password)
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: email, // Allow replying to the client directly
            subject: `Nouvelle demande de contact: ${name} (${service || 'Général'})`,
            text: `
      Nouvelle demande reçue depuis le site web :
      
      Nom: ${name}
      Téléphone: ${phone}
      Email: ${email || 'Non renseigné'}
      Service: ${service || 'Non spécifié'}
      Urgence: ${urgency || 'Non spécifié'}
      Adresse: ${address || 'Non renseignée'}
      
      Message:
      ${message}
        `,
            html: `
      <h2>Nouvelle demande d'intervention</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p><strong>Email:</strong> ${email || 'Non renseigné'}</p>
      <p><strong>Service:</strong> ${service || 'Non spécifié'}</p>
      <p><strong>Urgence:</strong> ${urgency || 'Non spécifié'}</p>
      <p><strong>Adresse:</strong> ${address || 'Non renseignée'}</p>
      
      <h3>Message:</h3>
      <p style="white-space: pre-wrap;">${message}</p>
        `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email envoyé avec succès' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer ou nous appeler directement.' },
            { status: 500 }
        );
    }
}
