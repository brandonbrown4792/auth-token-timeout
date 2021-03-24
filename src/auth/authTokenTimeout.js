const INTERVAL = 1000; // 1 second interval between checks
const TIMEOUT = 30000; // 30 second timeout

function checkTime() {
  if (localStorage.getItem('auth-token')) {
    const authExpired = (Date.now() - parseInt(localStorage.getItem('auth-token-set-time'))) >= TIMEOUT;
    if (authExpired) {
      localStorage.removeItem('auth-token');
      localStorage.removeItem('auth-token-set-time');
    }
  }
}

// Set the auth token and the auth captured time
export function setAuthToken(authToken) {
  localStorage.setItem('auth-token', authToken);
  localStorage.setItem('auth-token-set-time', Date.now());
}

setInterval(checkTime, INTERVAL);
