export function getImageSrc(forecast) {
  if (forecast.includes("Rain")) {
    return process.env.PUBLIC_URL + "/rain.png";
  } else {
    return process.env.PUBLIC_URL + "/cloud.png";
  }
}
