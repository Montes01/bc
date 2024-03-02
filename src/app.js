const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const signingKey = require('./config/keys');
const validateToken = require('./routes/GetAuthentication');
const auth = require('../src/routes/getJwt');
const register = require('./routes/register');
const cors = require('cors');
const getUserInfo = require('./routes/getUserInfo');

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(cookieParser(signingKey.SIGNING_KEY_COOKIE));

// Middleware para imprimir las rutas registradas
app.use((req, res, next) => {
  console.log('Rutas registradas:', app._router.stack.map(layer => layer.route));
  next();
});

app.use('/register', register);
app.use('/auth', auth);
app.use('/readToken', validateToken);
app.use('/getInfo', getUserInfo);

let port = 3000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
