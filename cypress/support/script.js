const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

afterEach(() => {
  if (this.currentTest.state === 'failed') {
    // If the test failed, send an email with SendGrid
    const msg = {
      to: 'shubprasain@hotmail.com', // Replace with recipient's email address
      from: 'shubprasain@amotek.be', // Replace with your email address
      subject: `Test Failed: ${this.currentTest.fullTitle()}`,
      text: 'One or more tests failed. Please check the test results for more details.',
      html: '<p>One or more tests failed. Please check the test results for more details.</p>',
    };
    sgMail.send(msg);
  }
});




