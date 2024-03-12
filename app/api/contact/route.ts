import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  country: string;
  email: string;
  phone: string;
  message: string;
}

const contactMailer = (
  transporter: nodemailer.Transporter,
  name: string,
  country: string,
  email: string,
  phone: string,
  message: string,
) => {
  // setup email data
  let mailOptions = {
    from: `help@loreleielisabeth.com`,
    to: `help@loreleielisabeth.com`,
    subject: "New Contact Message!",
    html: `
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>New Contact Message</title>
        <style>
          /* Body styles */
          body {
            font-family: sans-serif;
            font-size: 22px;
            line-height: 1.3;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        </style>
      </head>
      <body>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Country: ${country}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      </body>
    </html>
    `,
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (!error) return Response.json({ message: info.messageId });
    else return Response.json({ message: error.message }, { status: 500 });
  });
};

export async function POST(request: Request) {
  const { name, country, email, phone, message }: ContactFormData =
    await request.json();

  let transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: `help@loreleielisabeth.com`,
      pass: `3099545689`,
    },
    connectionTimeout: 10000,
  });

  try {
    contactMailer(transporter, name, country, email, phone, message);
    return Response.json({ message: "Message sent successfully!" });
  } catch (error) {
    return Response.json(
      { message: (error as Error).message },
      {
        status: 500,
      },
    );
  }
}
