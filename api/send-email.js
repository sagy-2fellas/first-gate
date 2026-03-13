export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, companyName, email, phone, message } = req.body;

  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service not configured" });
  }

  // Formatting message to replace newlines with <br> for HTML rendering
  const formattedMessage = message.replace(/\n/g, '<br/>');

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Enquiry — First Gate</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0D0D0D;font-family:Georgia,serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0D0D0D;padding:40px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0"
            style="background-color:#141414;border:1px solid #2a2a2a;max-width:600px;width:100%;">
            <!-- Header -->
            <tr>
              <td style="padding:40px 48px 32px;border-bottom:1px solid #BEAA6D30;">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b0299c443f8438ee7f3b53/74f7a3925_one_colour__gold_-removebg-preview.png"
                  alt="First Gate" height="48" style="display:block;" />
              </td>
            </tr>
            <!-- Title -->
            <tr>
              <td style="padding:36px 48px 24px;">
                <p style="margin:0 0 8px;color:#BEAA6D;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;font-family:Arial,sans-serif;">
                  New Website Enquiry
                </p>
                <h1 style="margin:0;color:#F5F3EF;font-size:24px;font-weight:300;line-height:1.3;">
                  You have received a new consultation request.
                </h1>
              </td>
            </tr>
            <!-- Divider -->
            <tr>
              <td style="padding:0 48px;">
                <div style="height:1px;background-color:#BEAA6D30;"></div>
              </td>
            </tr>
            <!-- Fields -->
            <tr>
              <td style="padding:32px 48px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding-bottom:24px;">
                      <p style="margin:0 0 4px;color:#F5F3EF50;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;font-family:Arial,sans-serif;">Full Name</p>
                      <p style="margin:0;color:#F5F3EF;font-size:16px;font-weight:400;">${fullName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:24px;">
                      <p style="margin:0 0 4px;color:#F5F3EF50;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;font-family:Arial,sans-serif;">Company</p>
                      <p style="margin:0;color:#F5F3EF;font-size:16px;font-weight:400;">${companyName || "N/A"}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:24px;">
                      <p style="margin:0 0 4px;color:#F5F3EF50;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;font-family:Arial,sans-serif;">Email</p>
                      <p style="margin:0;">
                        <a href="mailto:${email}" style="color:#BEAA6D;font-size:16px;text-decoration:none;">${email}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:32px;">
                      <p style="margin:0 0 4px;color:#F5F3EF50;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;font-family:Arial,sans-serif;">Phone</p>
                      <p style="margin:0;">
                        <a href="tel:${phone}" style="color:#BEAA6D;font-size:16px;text-decoration:none;">${phone || "N/A"}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-bottom:32px;">
                      <div style="height:1px;background-color:#2a2a2a;"></div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p style="margin:0 0 12px;color:#F5F3EF50;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;font-family:Arial,sans-serif;">Message</p>
                      <p style="margin:0;color:#F5F3EF;font-size:15px;line-height:1.8;opacity:0.8;">${formattedMessage}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:24px 48px 40px;border-top:1px solid #BEAA6D30;">
                <p style="margin:0;color:#F5F3EF30;font-size:11px;font-family:Arial,sans-serif;line-height:1.6;">
                  First Gate Enterprises SA &nbsp;·&nbsp; 15th Floor, The Towers, 2 Hertzog Boulevard, Cape Town
                  &nbsp;·&nbsp;
                  <a href="https://firstgate.co.za" style="color:#BEAA6D50;text-decoration:none;">firstgate.co.za</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "First Gate Website <onboarding@resend.dev>",
        to: "sagy@2fellasmedia.com",
        subject: `New enquiry from ${fullName}${companyName ? ` — ${companyName}` : ""}`,
        html: htmlContent, // Sending the HTML instead of plain text
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
