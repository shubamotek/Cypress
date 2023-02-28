const mailgun = require('mailgun-js')({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  });
  
  const data = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: 'Cypress tests failed',
    text: 'One or more Cypress tests failed.'
  };
  
  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });