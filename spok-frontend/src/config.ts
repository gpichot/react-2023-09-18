const config = {
  apiUrl: import.meta.env.VITE_API_URL,
};
console.log(import.meta.env);
export default config;

if (!config.apiUrl) {
  console.error("`VITE_API_URL` is not set");
}
