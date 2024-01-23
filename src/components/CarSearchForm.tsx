import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Box,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../redux/store';
import { setFilteredData } from '../redux/reducer/formSlice';

const CarSearchForm = () => {
  const dispatch= useDispatch();
  const userDataIs = useSelector((state: IRootState) => state.form.userData);
  const [bodyType, setBodyType] = React.useState('Hatchpack');
  const [owner, setOwner] = React.useState('2');
  const [budget, setBudget] = React.useState('1L');
  const [fuelType, setFuelType] = React.useState('Petrol');
  const [location, setLocation] = React.useState('Chennai');
  const [transmiision, setTransmiision] = React.useState('Automatic');

  const handleChange = (event:any) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();        
    console.log("Check----",location,bodyType,owner,budget,fuelType,transmiision);
    
    // Handle form submission here
    const filteredCars = userDataIs.filter((car:any) =>{      
      return car.location === location &&
      car.bodyType === bodyType &&
      car.noOfowners === owner&&
      car.budget === budget &&
      car.fuleType === fuelType && 
      car.transmission === transmiision
    } 
  );
  dispatch(setFilteredData(filteredCars))
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" component="h1" gutterBottom>
        Car Search
      </Typography>
      <Box style={{flexDirection:'column',width:'90%',padding:20}}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={location}
          onChange={handleChange}
          label="Location"
        >
          <MenuItem value={'Chennai'}>Chennai</MenuItem>
          <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
          <MenuItem value={'Kerala'}>Kerala</MenuItem>
        </Select>
      </FormControl>
        <FormLabel component="legend">Body Type</FormLabel>
        <RadioGroup value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
          <FormControlLabel value="Hatchpack" control={<Radio />} label="Hatchpack" />
          <FormControlLabel value="Sedan" control={<Radio />} label="Sedan" />
          <FormControlLabel value="SUV" control={<Radio />} label="SUV" />
        </RadioGroup>

        <FormLabel component="legend">Owner</FormLabel>
        <RadioGroup value={owner} onChange={(e) => setOwner(e.target.value)}>
          <FormControlLabel value="1" control={<Radio />} label="1st Owner" />
          <FormControlLabel value="2" control={<Radio />} label="2nd Owner" />
          <FormControlLabel value="3" control={<Radio />} label="3rd Owner" />
        </RadioGroup>
        <FormLabel component="legend">Budget</FormLabel>
        <RadioGroup value={budget} onChange={(e) => setBudget(e.target.value)}>
          <FormControlLabel value="1L" control={<Radio />} label="Less than 1L" />
          <FormControlLabel value="3L" control={<Radio />} label="3L" />
          <FormControlLabel value="10L" control={<Radio />} label="More than 3L" />
        </RadioGroup>
        <FormLabel component="legend">Fuel Type</FormLabel>
        <RadioGroup value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
          <FormControlLabel value="Petrol" control={<Radio />} label="Petrol" />
          <FormControlLabel value="Diesel" control={<Radio />} label="Diesel" />
          <FormControlLabel value="CNG" control={<Radio />} label="CNG" />
        </RadioGroup>
        <FormLabel component="legend">Transmission</FormLabel>
        <RadioGroup value={transmiision} onChange={(e) => setTransmiision(e.target.value)}>
          <FormControlLabel value="Automatic" control={<Radio />} label="Automatic" />
          <FormControlLabel value="Manual" control={<Radio />} label="Manual" />

        </RadioGroup>
      </Box>

      <Button type="submit" variant="contained" color="primary" size="large" style={{marginLeft:20}}>
        Search
      </Button>
    </form>
  );
};

export default CarSearchForm;