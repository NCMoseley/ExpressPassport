const Authentication = require('./controllers/authentication.js');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { sesson: false });

module.exports = app => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ hi: 'success' });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
