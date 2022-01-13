module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6720cddbb4aa785b7fadf080f8ecbeac'),
  },
});
