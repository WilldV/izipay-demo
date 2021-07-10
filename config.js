
require('dotenv').config()

const configuration = {
    izipayUser: process.env.IZIPAY_USER,
    izipayPassword: process.env.IZIPAY_PASSWORD,
    izipayUri: process.env.IZIPAY_URL
}

module.exports = configuration;