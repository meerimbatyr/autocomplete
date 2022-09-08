import React, { Component } from "react";

export default class AutoComplete extends Component {
  constructor(props) {
    super();
    this.state = {
      countries: props.listOfCountries,
      countryToSearch: "",
      countriesToShow: [],
    };
  }

  handleChange = (e) => {
    this.setState({ countryToSearch: e.target.value });
    setTimeout(() => this.filterCountries(), 200);
  };

  filterCountries = () => {
    const { countries, countryToSearch } = this.state;
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().startsWith(countryToSearch.toLowerCase().trim())
    );

    if (countryToSearch.length) {
      this.setState({ countriesToShow: filteredCountries });
    } else {
      this.setState({ countriesToShow: [] });
    }
  };

  handleClick = (country) => {
    this.setState({ countryToSearch: country });
    this.setState({ countriesToShow: [] });
  };
  render() {
    const { countryToSearch, countriesToShow } = this.state;

    return (
      <section>
        <input
          onChange={this.handleChange}
          type="text"
          name="countryToSearch"
          value={countryToSearch}
          placeholder="Type the name of country..."
        />
        <ul>
          {countriesToShow.map((country) => {
            let value = country.slice(0, countryToSearch.length);
            let value2 = country.slice(
              countryToSearch.length,
              country.length + 1
            );
            console.log(value, value2);
            return (
              <li onClick={() => this.handleClick(country)}>
                <span className="red">{value}</span>
                {value2}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
