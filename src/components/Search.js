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
        label: `Look: ${city.name}, ${city.countryCode}`, //the user can see this,in the dropdown
      }));

      //Loggin the object for debugging purposes
      console.log("Input:", inputValue);
      console.log("Options:", options);
      //I tried using template literals but it didnt work
      //then gpt replied
      //What it does: In this form, ${options} is a template literal.
      //It converts the options object to a string representation and
      //concatenates it with the string 'Options: '.
      //This is equivalent to calling options.toString().
      // This can sometimes lead to [object Object] being printed if the options variable is an object,
      //because JavaScript’s default string conversion for objects results in the string [object Object].

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
        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></input>{" "} */}{" "}
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
