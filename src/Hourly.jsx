import styles from './hourly.module.css';
import Icon from './Icon';

export default function Hourly({ weatherData }) {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <>
      {weatherData ? (
        <div className={styles.hourWrap} tabindex="0">
          <div className={styles.hourWrapInner}>
            {weatherData.hourly.map((hour, index) => {
              return (
                <div key={index} className={styles.forecast}>
                  <Icon
                    iconObj={hour.weather[0].icon}
                    className={styles.weatherIcon}
                    condition={hour.weather[0].description}
                  />
                  <div className={styles.temp}>{Math.round(hour.temp)}&deg;</div>
                  <div className={styles.time}>
                    {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: 'numeric' })}
                  </div>
                  <div className={styles.precp}>{Math.round(hour.pop * 100)}%</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={styles.hourWrapLoading}>
          <div className={styles.hourWrapInner}>
            {numbers.map((number, index) => {
              return (
                <div key={index} className={styles.forecast}>
                  <div className={styles.iconLoading}></div>
                  <div className={styles.temp}>60&deg;</div>
                  <div className={styles.precp}>0%</div>
                  <div className={styles.time}>12pm</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
