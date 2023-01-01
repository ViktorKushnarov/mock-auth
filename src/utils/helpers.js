const SESSION_URL =
  "https://rdeevqhn22.execute-api.us-east-1.amazonaws.com/dev";


const MSEC_IN_HOUR = 3600000;


const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate);
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  let adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};



export {
  SESSION_URL,
  MSEC_IN_HOUR,
  retriveStoredToken,
  calculateRemainingTime,
}; 