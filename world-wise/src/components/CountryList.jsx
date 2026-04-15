import CityItem from './CityItem';
import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import Message from './Message';
import Spinner from './Spinner';

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  // const countries = cities.reduce((arr, curCity) => {
  //   if (!arr.map((cityObj) => cityObj.country).includes(curCity.country))
  //     return [...arr, { country: curCity.country, emoji: curCity.emoji }];
  //   else return arr;
  // }, []); // we place unique objects into the array

  // As we loop through cities array, we build a unique countries array
  const countries = cities.reduce((arr, curCity) => {
    const alreadyExists = arr.some(
      (cityObj) => cityObj.country === curCity.country,
    );

    if (alreadyExists) {
      return arr; // do nothing
    }

    return [...arr, { country: curCity.country, emoji: curCity.emoji }];
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
