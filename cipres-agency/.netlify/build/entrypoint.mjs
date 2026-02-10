import './chunks/virtual_EPcy4nOy.mjs';
import { Resend } from 'resend';
import * as z from 'zod';
import { d as defineAction } from './chunks/server_0aDcHiHI.mjs';
import { A as ActionError } from './chunks/shared_CxlMxdNA.mjs';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}
const resend = new Resend(RESEND_API_KEY);
const resendEmail = process.env.RESEND_EMAIL;
const fromEmail = process.env.FROM_EMAIL;
if (!resendEmail || !fromEmail) {
  throw new Error("Missing FROM_EMAIL or RESEND_EMAIL");
}
const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(3, "First name is required").max(30, "First name must be at most 30 characters"),
      email: z.string().email("Invalid email address"),
      message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be at most 500 characters"),
      company: z.string().optional()
      // Honeypot field
    }),
    handler: async ({ name, email, message, company }, context) => {
      if (company) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Invalid submission detected"
        });
      }
      const { data, error } = await resend.emails.send({
        from: resendEmail,
        to: fromEmail,
        subject: `New Contact from ${name}`,
        html: `
              <h2>New Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
        text: `New Contact Message

Name: ${name}
Email: ${email}

Message:
${message}`
      });
      if (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send email. Please try again later."
        });
      }
      return { success: true, message: "Email sent successfully!", data: data.id };
    }
  })
};

export { server };
