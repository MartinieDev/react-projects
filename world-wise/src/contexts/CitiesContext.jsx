import { createContext, useContext, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:9000';

const CitiesContext = createContext(); // create/initialize a context which returns a context object and is like an identifier

// Context provider component (it's a component cuz it returns jsx)
function CitiesProvider({ children }) {
  // Managing state
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  // Handling logic (effects,updates etc)
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
        return data;
      } catch (err) {
        console.log('error:', err);
        alert('There was an error loading data...');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
      return data;
    } catch (err) {
      console.log('error:', err);
      alert('There was an error loading data...');
    } finally {
      setIsLoading(false);
    }
  }

  // Provide value to all the components inside the provider using Context.Provider
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

// custom hook that enables us consume the value. Note we pass context object not the value
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error('CitiesContext was used outside the CitiesProvider');

  return context;
}

export { CitiesProvider, useCities };
