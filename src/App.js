import React from "react";

// Disse import statements ville have været nødvendige hvis ikke jeg havde lavet en index.js med genveje
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

// istedet kan vi importere componenterne helt simpelt således:
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  //her sættes det hentede data fra API'en
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  //async og await er moderne måder at lave promises på
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    //denne konstant sættes for at fortælle app'en hvilke data og hvilket land den skal vise
    // det er hvilken "state" app'en er i
    const { data, country } = this.state;

    // nedenstående div er hvad der vises i react app'en
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
