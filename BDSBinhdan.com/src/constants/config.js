const config = {
    domain: process.env.REACT_APP_DOMAIN,
    apiUrl: process.env.REACT_APP_API_URL,
    cookieSecure: process.env.REACT_APP_COOKIE_SECURE === "1",
    publicPath: process.env.REACT_APP_DOMAIN
   
}

export default config;