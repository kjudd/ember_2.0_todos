module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'style-src': "'self' 'unsafe-inline'",
      'connect-src': "'self' http://localhost:8080/api/v1"
    },
  };
};
