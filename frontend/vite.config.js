export default {
  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 4173,
    allowedHosts: [
      "spine-concepts.com",
      "www.spine-concepts.com",
      "spine-concepts.onrender.com",
    ],
  },
};
