import { useState, useEffect } from 'react';
import Header from './Header';
import Minute from './Minute';
import Hourly from './Hourly';
import Daily from './Daily';
import Footer from './Footer';
import styles from './app.module.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const domainURL = import.meta.env.VITE_DOMAIN;
      const res = await fetch(`${domainURL}/api/weather`);
      const data = await res.json();

      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getWeather();
    }, 2000);
  }, []);

  return (
    <main className={styles.main}>
      <Header weatherData={weatherData} />
      <Hourly weatherData={weatherData} />
      <Minute weatherData={weatherData} />
      <Daily weatherData={weatherData} />
      <Footer />
    </main>
  );
}

export default App;
