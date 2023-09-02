import styles from './header.module.css';
import Icon from './Icon';
import Loader from './Loader';

function Header({ weatherData }) {
  return (
    <>
      {weatherData ? (
        <header className={styles.weatherHeader}>
          <h1 className={styles.weatherCity}>Cuyahoga Falls</h1>
          <Icon
            iconObj={weatherData.current.weather[0].icon}
            className={styles.weatherIcon}
            condition={weatherData.current.weather[0].main}
          />
          <p className={styles.weatherTemp}>
            {Math.round(weatherData.current.temp)}
            <span className={styles.weatherTempDegree}>&deg;</span>
          </p>
          <p className={styles.weatherCondition}>{weatherData.current.weather[0].description}</p>
        </header>
      ) : (
        <header className={`${styles.weatherHeader} ${styles.loading}`}>
          <h1 className={styles.weatherCity}>Cuyahoga Falls</h1>
          <Loader className={styles.weatherIcon} />
          <p className={styles.weatherTemp}>
            60<span className={styles.weatherTempDegree}>&deg;</span>
          </p>
          <p className={styles.weatherCondition}>Partly Loaded</p>
        </header>
      )}
    </>
  );
}

export default Header;
