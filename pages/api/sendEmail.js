// Inside pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable
        pass: process.env.EMAIL_PASS // Use environment variable
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email', error);
        res.status(500).json({ success: false });
      } else {
        res.status(200).json({ success: true });
      }
    });
  } else {
    res.status(404).json({ error: 'This endpoint requires a POST request.' });
  }
};
