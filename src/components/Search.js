import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "./api";
//is that a property? vvvv YES look App.js
function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  //onChange event handler
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  //from api.js
  //had an error
  // chatGPT fixed it
  //https://chatgpt.com/share/e6dd2daf-519a-48d0-a4bb-40d3785c2ca2
  const loadOptions = async (inputValue) => {
    //4. (look down)
    try {
      const response = await fetch(
        `${GEO_API_URL}&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const result = await response.json(); // Parse the response as JSON

      // Map the result to the format expected by AsyncPaginate
      const options = result.data.map((city) => ({
        value: `${city.id} ${city.latitude} ${city.longitude}`,
        label: `Blepeis: ${city.name}, ${city.countryCode}`, //the user can see this,in the dropdown
      }));

      // Return the options object
      return {
        options,
      };
    } catch (error) {
      console.error(error);
      return {
        options: [],
      };
    }
  };

  return (
    <>
      {" "}
      {/* <input 
                                                                                                                                                                                type="text"
                                                                                                                                                                                name="locationInput"
                                                                                                                                                                                placeholder="Search..."
                                                                                                                                                                                className="alert alert-primary"
                                                                                                                                                                              ></input>{" "} */}{" "}
      <AsyncPaginate
        placeholder="Search for a city"
        //every 600ms we send a request to the API
        //does it happen onChange?yes look below
        debounceTimeout={600}
        value={search} //1.
        onChange={handleOnChange} //2.
        loadOptions={loadOptions} //3. (look up)
      ></AsyncPaginate>{" "}
    </>
  );
}

export default Search;
