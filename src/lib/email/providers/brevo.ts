
import type {
  EmailMessage,
  EmailProvider,
} from "../email-provider";

export class BrevoProvider implements EmailProvider {
  async send(message: EmailMessage): Promise<void> {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.EMAIL_FROM_ADDRESS;
    const senderName =
      process.env.EMAIL_FROM_NAME ?? "The Reading Room";

    if (!apiKey || !senderEmail) {
      throw new Error("Brevo email configuration is missing.");
    }

    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: senderName,
            email: senderEmail,
          },
          to: [{ email: message.to }],
          subject: message.subject,
          htmlContent: message.html,
          textContent: message.text,
        }),
        signal: AbortSignal.timeout(15000),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const error = await response.text();

      console.error(
        "Brevo email delivery failed:",
        response.status,
        error.slice(0, 500),
      );

      throw new Error("Email delivery failed.");
    }
  }
}
