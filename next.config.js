module.exports = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
  },

  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_SIGNING_SECRET: process.env.STRIPE_SIGNING_SECRET,
  },
};
