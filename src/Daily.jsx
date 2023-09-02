import styles from './daily.module.css';
import Icon from './Icon';

export default function Daily({ weatherData }) {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <>
      {weatherData ? (
        <div className={styles.weatherTableWrap} tabindex="0">
          <table className={styles.weatherTable}>
            <thead className={styles.weatherTableHead}>
              <tr>
                <th className={styles.weatherTableCell}>Day</th>
                <th className={styles.weatherTableCell}>Cond</th>
                <th className={styles.weatherTableCell}>High</th>
                <th className={styles.weatherTableCell}>Low</th>
              </tr>
            </thead>
            <tbody className={styles.weatherTableBody}>
              {weatherData.daily.map((day, index) => {
                return (
                  <tr key={index}>
                    <td className={styles.weatherTableCell}>
                      {new Date(day.dt * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric' })}
                    </td>
                    <td className={styles.weatherTableCell}>
                      <Icon
                        iconObj={day.weather[0].icon}
                        className={styles.weatherIcon}
                        condition={day.weather[0].description}
                      />
                    </td>
                    <td className={styles.weatherTableCell}>{Math.round(day.temp.max)}&deg;</td>
                    <td className={styles.weatherTableCell}>{Math.round(day.temp.min)}&deg;</td>
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
                <th className={styles.weatherTableCell}>Day</th>
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
