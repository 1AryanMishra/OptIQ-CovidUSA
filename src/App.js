//importing UseEffect to fetch data on App Loaded
/*
importing CreateContext to Create a Context 
for Data Fetched and Share among other Components
*/
import { useEffect, useState, createContext } from 'react';

//Importing Axios 
import axios from 'axios';



//Import Header Component
import Header from './components/Header/Header';
//Importing Main Component
import Main from './components/Main/Main';

import './css/main.css';


//Creating and exporting DataContext
export const DataContext = createContext();



function App() {

  //Creating Refresh Feature variable
  const [refresh, setRefresh] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [statesData, setStatesData] = useState([]);

  useEffect(() => {
    //Country Data URL
    const countryDataURL = 'https://api.covidtracking.com/v1/us/current.json';

    //States Data URL
    const statesDataURL = 'https://api.covidtracking.com/v1/states/current.json';

    //Fetching Country Data
    axios.get(countryDataURL)
    //Creating Fullfilled Condition CallBack
    .then(res => {
      setCountryData(res.data[0]);
      
      //Fething States Data
      axios.get(statesDataURL)
      //Creating Fulfilled Condition CallBack
      .then(res => setStatesData(res.data))
      //Creating Error Condition CallBack
      .catch(err => console.log(`Some Error Occured while Fetching States Data! ${err}`))
    })
    //Creating Error Condition CallBack
    .catch(err => console.log(`Some Error Occurred while Fetching Country Data! ${err}`));
  }, [refresh])

  return (
    <div className="App">
      <Header/>
      <DataContext.Provider value={{refresh, setRefresh, countryData, statesData}}>
        <Main/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
