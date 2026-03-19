export const SESSION_COOKIE_NAME = "admin_session";

const parseCookies = (cookieHeader = "") => {
  return cookieHeader
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((acc, part) => {
      const [key, ...rest] = part.split("=");
      acc[key] = decodeURIComponent(rest.join("=") || "");
      return acc;
    }, {});
};

export const isValidAdminEnv = () => {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD);
};

export const validateCredentials = (username, password) => {
  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
};

export const isAuthenticatedRequest = (req) => {
  const cookies = parseCookies(req.headers.cookie || "");
  return cookies[SESSION_COOKIE_NAME] === "ok";
};

export const setSessionCookie = (res) => {
  res.setHeader(
    "Set-Cookie",
    `${SESSION_COOKIE_NAME}=ok; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`
  );
};

export const clearSessionCookie = (res) => {
  res.setHeader(
    "Set-Cookie",
    `${SESSION_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
  );
};
