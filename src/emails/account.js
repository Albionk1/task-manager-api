const { CourierClient } = require('@trycourier/courier')
const courier = CourierClient({
  authorizationToken: 'pk_prod_ZMFB1YPKAWM9AAQPAV8K7HGR1R24',
})
const sendWelcomeEmail = (email, name) => {
  courier.send({
    message: {
      to: {
        email,
      },
      template: 'YXJ19NF7N94M0KPYAN7HN0RHWJT9',
      data: {
        name,
      },
      routing: {
        method: 'single',
        channels: ['email'],
      },
    },
  })
}
const sendGoodByeEmail = (email, name) => {
  courier.send({
    message: {
      to: {
        email,
      },
      template: 'RWGHQ11W2Z4JESM7KEN0C4CSHBE6',
      data: {
        name,
      },
      routing: {
        method: 'single',
        channels: ['email'],
      },
    },
  })
}
module.exports = {
  sendWelcomeEmail,
  sendGoodByeEmail
}