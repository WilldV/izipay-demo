const axios = require('axios')
const configuration = require("../config")

exports.tokenForm = async (req, res) => {
    try {
        const { data: { answer: { formToken } } } = await axios.post(`${configuration.izipayUri}/Charge/CreateToken`, {
            currency: "PEN",
            customer: {
                email: "sample@example.com",
                reference: "user_id"
            }
        }, {
            auth: {
                username: configuration.izipayUser,
                password: configuration.izipayPassword
            }
        });

        res.send({ formToken });
    } catch (error) {
        console.log(error);
        res.send({ error: error.message || "Something went wrong" })
    }
}

exports.pay = async (req, res) => {
    try {
        const { amount, cardToken } = req.body

        if (!amount || !cardToken) throw new Error("You have to send 'amount' and 'cardToken'")

        const { data } = await axios.post(`${configuration.izipayUri}/Charge/CreatePayment`, {
            amount: amount,
            currency: "PEN",
            paymentMethodToken: cardToken
        }, {
            auth: {
                username: configuration.izipayUser,
                password: configuration.izipayPassword
            }
        });

        res.send(data);
    } catch (error) {
        console.log(error);
        res.send({ error: error.message || "Something went wrong" })
    }
}