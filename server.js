'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

const app = express();
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authEndpoint = (_, res) => {
    const user = {
        profile_name: "Dorian Satoshi Nakamoto",
        profile_pic: "https://foxbit.com.br/wp-content/uploads/2018/04/dorian_nakamoto.jpg",
        profile_id: 21000000,
        profile_stack: "hacker",
        bearer: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJydW5vIiwiaWF0IjoxNTE2MjM5MDIyfQ YDN0wJHLzyzmqdwycv4wgh-RMBwQR4C_0uehWmo_77ZrAB46YnPYmzJJ2Lb36GyyDXDwRP9Bt759hcVmUiGWEg"
    }

    res.json(user)
}

router.route('/auth').post(authEndpoint)


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api/v1', router)

app.listen(3000)
module.exports = app