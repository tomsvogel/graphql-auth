import config from '../config/main';
import mailgun from 'mailgun-js';

mailgun({
  apiKey: config.mailgun_priv_key,
  domain: config.mailgun_domain
});

// Create and export function to send emails through Mailgun API
export function sendEmail(recipient, message) {
  const data = {
    from: 'Your Site <info@yourdomain.com>',
    to: recipient,
    subject: message.subject,
    text: message.text
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
}
