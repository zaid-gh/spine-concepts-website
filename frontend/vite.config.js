export default {
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 4173,
    proxy: {
      "/api": {
        target: "http://spine-concepts.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 4173,
    allowedHosts: ["spine-concepts.com", "www.spine-concepts.com"],
  },
};
