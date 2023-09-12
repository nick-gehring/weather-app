import styles from './minute.module.css';

export default function Minute({ weatherData }) {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  function precipitationToLabel(precipitation) {
    const typeOfPrecipitation = [
      {
        label: 'None',
        min: 0.0,
        max: 0.1,
      },
      {
        label: 'Slight',
        min: 0.1,
        max: 2.0,
      },
      {
        label: 'Moderate',
        min: 2.0,
        max: 10.0,
      },
      {
        label: 'Heavy',
        min: 10.0,
        max: 50.0,
      },
      {
        label: 'Violent',
        min: 50.0,
        max: 1000,
      },
    ];

    // find the matching precipitation type
    let type = typeOfPrecipitation.find((type) => {
      console.log(type, precipitation);
      return precipitation >= type.min && precipitation < type.max;
    });

    return type.label;
  }

  return (
    <>
      {weatherData ? (
        <div className={styles.weatherTableWrap} tabindex="0">
          <table className={styles.weatherTable}>
            <thead className={styles.weatherTableHead}>
              <tr>
                <th className={styles.weatherTableCell}>Temp</th>
                <th className={styles.weatherTableCell}>Precip Amt</th>
                <th className={styles.weatherTableCell}>Time</th>
              </tr>
            </thead>
            <tbody className={styles.weatherTableBody}>
              {weatherData.minutely.map((minute, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.weatherTableCell}>
                      {new Date(minute.dt * 1000).toLocaleTimeString([], { hour12: false, hour: 'numeric' }) ===
                      new Date(weatherData.hourly[0].dt * 1000).toLocaleTimeString([], {
                        hour12: false,
                        hour: 'numeric',
                      })
                        ? Math.round(weatherData.hourly[0].temp)
                        : Math.round(weatherData.hourly[1].temp)}
                      &deg;
                    </td>
                    <td className={styles.weatherTableCell}>{precipitationToLabel(minute.precipitation)}</td>
                    <td className={styles.weatherTableCell}>
                      {new Date(minute.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={`${styles.weatherTableWrap} ${styles.loading}`}>
          <table className={styles.weatherTable}>
            <thead>
              <tr>
                <th className={styles.weatherTableCell}>Temp</th>
                <th className={styles.weatherTableCell}>
                  Rain<span className={styles.weatherPercent}>%</span>
                </th>
                <th className={styles.weatherTableCell}>Time</th>
              </tr>
            </thead>
            <tbody>
              {numbers.map((number, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.weatherTableCell}>60&deg;</td>
                    <td className={styles.weatherTableCell}>0%</td>
                    <td className={styles.weatherTableCell}>12pm</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
