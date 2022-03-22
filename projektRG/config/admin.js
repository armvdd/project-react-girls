module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a9bd487982e1c5ddfedd3c9999fb0024'),
  },
});
