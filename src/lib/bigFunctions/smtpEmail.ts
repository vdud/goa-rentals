import nodemailer from 'nodemailer';

export const sendEmail = async (to, subject, message) => {
	const transporter = nodemailer.createTransport({
		host: 'smtpout.secureserver.net',
		port: 465,
		secure: true,
		auth: {
			user: 'bookings@goarentals.in',
			pass: import.meta.env.VITE_SMTP_EMAIL_PASSWORD
		}
	});

	const mailOptions = {
		from: 'bookings@goarentals.in',
		to: to,
		subject: subject,
		text: message
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent:', info.messageId);
	} catch (error) {
		console.error('Error sending email:', error);
	}
};
