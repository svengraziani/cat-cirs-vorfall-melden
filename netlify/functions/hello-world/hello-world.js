
const nodemailer = require('nodemailer');

// Configure the SMTP transporter with your email provider's SMTP settings.
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email username
    pass: process.env.EMAIL_PASSWORD, // Your email password
  },
});

const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }


  try {
    const formData = typeof event.body === 'string' ? JSON.parse(event.body) : event.body; // Handle already parsed data

    // Compose the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sven@graziani.at',
      subject: 'New Form Submission',
      text: `You received a new form submission:\n\n${JSON.stringify(formData, null, 2)}`,
      html: `<p>You received a new form submission:</p><pre>${JSON.stringify(formData, null, 2)}</pre>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error: ${error.toString()}`,
    };
  }
};

module.exports = { handler };