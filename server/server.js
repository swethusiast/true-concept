const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const middlewares = jsonServer.defaults();

const server = jsonServer.create();
const router = jsonServer.router('./server/db.json');
const userdb = JSON.parse(fs.readFileSync('./server/users.json', 'UTF-8'));

server.use(middlewares);

const SECRET_KEY = '123456789';
const expiresIn = '5h';

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      user => user.email === email && user.password === password
    ) !== -1
  );
}

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!isAuthenticated({ email, password })) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

server.use(router);

server.listen(3000, () => {
  console.log('Run Server');
});
