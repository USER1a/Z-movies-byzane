window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  // If not specified, the onboarding will not allow a "default setup". The user will have to use the extension or set up a proxy themselves
  VITE_CORS_PROXY_URL: "|type=api|https://simple-proxy12.anderszame.workers.dev,https://proxy-yvkr.onrender.com",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTE1OWFlM2UyNDFjNjFjOWE2OTJiNDBmYjIwMTA2MSIsIm5iZiI6MTc2MzM1NjY4MC45NDEsInN1YiI6IjY5MWFiMDA4YWRmYjVkYTRkNDE3NWNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K0WJ1dzjJ9iEuk4NjAJlnqlU9z1_ZOiEB3_Q-Zs5mAw",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: null,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: true,

  // The backend URL to communicate with
  VITE_BACKEND_URL: "https://backend.xprime.tv/",

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: "",

  // M3U8 Proxy URL
  VITE_M3U8_PROXY_URL: "https://proxy-yvkr.onrender.com/",

  // App domain
  VITE_APP_DOMAIN: "https://z-movies-byzane.vercel.app",

  // Has onboarding
  VITE_HAS_ONBOARDING: "true",

  // Extension links
  VITE_ONBOARDING_CHROME_EXTENSION_INSTALL_LINK: "https://chromewebstore.google.com/detail/P-Stream-extension/hoffoikpiofojilgpofjhnkkamfnnhmm",
  VITE_ONBOARDING_FIREFOX_EXTENSION_INSTALL_LINK: "https://addons.mozilla.org/en-GB/firefox/addon/P-Stream-extension",

  // Allow autoplay
  VITE_ALLOW_AUTOPLAY: "true",
};
