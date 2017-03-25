// console.log(process.env.EXAMPLE_APP_PASSPHRASE);

export default {
  // Secret key for JWT signing and encryption
  secret: process.env.EXAMPLE_APP_PASSPHRASE,
  // Database connection information
  database: process.env.EXAMPLE_APP_DATABASE_PATH,
  // Setting port for server
  port: 3001,
  // Configuring Mailgun API for sending transactional email
  mailgun_priv_key: process.env.EXAMPLE_APP_MAILGUN_API_KEY,
  // Configuring Mailgun domain for sending transactional email
  mailgun_domain: process.env.EXAMPLE_APP_MAILGUN_DOMAIN
};
