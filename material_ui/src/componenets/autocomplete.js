import { getOptionsFromChildren } from "@mui/base";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";

function AutoComplete() {
  const c_data = [
    { id: 1, title: "Kuldeep" },
    { id: 2, title: "Dhoni" },
    { id: 3, title: "Sachin" },
    { id: 4, title: "kohli" },
  ];
  const propdata = {
    options:c_data,
    getOptionLabel: (c_data)=>c_data.title
  };
  return (
    <div>
      <Autocomplete
        id="ac"
        {...propdata}
        sx={{ width: 300 }}
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="search oe write your name" variant="standard" />
        )}
      />
      <Autocomplete
        id="ac"
        {...propdata}
        sx={{ width: 300 }}
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="search oe write your name" variant="standard" />
        )}
      />
      <Autocomplete
        id="ac"
        {...propdata}
        sx={{ width: 300 }}
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} label="search oe write your name" variant="standard" />
        )}
      />
      <Autocomplete
        id="ac"
        {...propdata}
        sx={{ width: 300 }}
        includeInputInList
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="search oe write your name" variant="standard" />
        )}
        
      />
      <hr/>
      

      <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={c_data}
      autoHighlight
      getOptionLabel={(options) => options.title}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />


      
    </div>
  );
}
export default AutoComplete;
