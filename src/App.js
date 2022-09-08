import "./App.css";
import AutoComplete from "./components/AutoComplete";
import { countryList } from "./countries";

function App() {
  return (
    <div className="App">
      <h1>React Autocomplete</h1>
      <h3>Start typing and Experience React Autocomplete!</h3>
      <AutoComplete listOfCountries={countryList} />
    </div>
  );
}

export default App;
