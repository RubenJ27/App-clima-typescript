import { FormEvent, useEffect, useState } from "react";
import { getWeatherByCoords, getWeatherBySearch } from "./Api/fetchWaether";
import { SearchBox } from "./components/SearchBox";
import { WeatherContainer } from "./components/WeatherContainer"


function App() {

  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  // conect api data
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchedData(data);
      } catch (err) {
        setError('Por favor revise su conexion a internet 🌐');
      }
    });
  }, []);

  //Search
  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("");
    try {
      const data = await getWeatherBySearch(CITY);
      if (data === "404") {
        setError('No se encontro la ciudad 🗺️');
      }else if(data === "400"){
        setError('Por favor ingrese una ciidad 🗺️');
      }else{
        setFetchedData(data);
        console.log(data);
      }
    } catch (err) {
      setError('Por favor revise su conexion a internet 🌐');
    }
  };


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SearchBox handleSearch={handleSearch} />
      <WeatherContainer fetchedData={fetchedData} error={error} />
    </div>
  )
}

export default App
