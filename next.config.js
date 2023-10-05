/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit",
    //DB_LOCAL_URI: "mongodb+srv://vinicius:<Vini13lagoa$>@bookit.w0fnpsv.mongodb.net/",
    DB_URI: "",
  },
};

module.exports = nextConfig;
