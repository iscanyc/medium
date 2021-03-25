const { accountSid, authToken, twilioNumber, myNumber } = require('./config')

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: myNumber,
        from: twilioNumber,
        body: 'Merhaba, bu bir deneme mesajıdır.',
    })
    .then(message => console.log(message.sid));
