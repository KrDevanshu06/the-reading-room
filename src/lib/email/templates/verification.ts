
export function verificationEmailTemplate(
  name: string,
  otp: string,
) {
  const safeName = name.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });

  return {
    subject: "Verify your email | The Reading Room",

    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;padding:32px;color:#292820">
        <h2>The Reading Room</h2>
        <p>Hello ${safeName},</p>
        <p>Use the verification code below to activate your account.</p>
        <div style="background:#f3f2ec;padding:24px;text-align:center;font-size:32px;font-weight:bold;letter-spacing:10px">
          ${otp}
        </div>
        <p>This code expires in 10 minutes.</p>
        <p>If you did not request this code, you can ignore this email.</p>
        <p>The Reading Room Team</p>
      </div>
    `,

    text: `Hello ${name}, your Reading Room verification code is ${otp}. It expires in 10 minutes.`,
  };
}
