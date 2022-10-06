const API_KEY = "e00a78e1adf4a75d931dfc5a07b7a449";

export const getWeatherByCoords = async (
  LAT: number,
  LON: number
): Promise<any> => {
  const API_COORDS = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;
  const response = await fetch(API_COORDS);
  const data = await response.json();
  return data;
};

export const getWeatherBySearch =async (CITY: String): Promise<any> => {
  const API_CITY = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;
  const response = await fetch(API_CITY);
  const responseData = await response.json();
  
  return responseData;
}
