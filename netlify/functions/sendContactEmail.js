import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function handler(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify('Payload required'),
    };
  }

  const requestBody = JSON.parse(event.body);
  const { name, email, subject, message, phone } = requestBody;

  const msg = {
    to: 'info@foxhoundgames.com', // Your recipient email address
    from: 'info@foxhoundgames.com', // Your verified sender email address
    subject: subject || 'Contact Form Submission',
    text: message || 'and easy to do anywhere, even with Node.js',
    html: `
      <h3>Name:</h3>
      <p>${name}</p>
      <h3>Email:</h3>
      <p>${email}</p>
      ${phone ? `<h3>Phone:</h3><p>${phone}</p>` : ''}
      <h3>Message:</h3>
      <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(
      'Error sending email:',
      error.response ? error.response.body : error
    );
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
}
