import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message, phone } = body;

    const msg = {
      to: 'info@foxhoundgames.com', // Your recipient email address
      from: 'noreply@foxhoundgames.com', // Your verified sender email address
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

    await sgMail.send(msg);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error(
      'Error sending email:',
      error.response ? error.response.body : error
    );
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
