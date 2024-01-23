import React from 'react';
import {
    Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Card
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { hideForm, setUserData } from '../redux/reducer/formSlice';
import { IRootState } from '../redux/store';

const Form = () => {
  const dispatch = useDispatch();
  const userDataIs = useSelector((state: IRootState) => state.form.userData);
  const userIDIs = useSelector((state: IRootState) => state.form.userId);
  const [model, setModel] = React.useState('');
  const [color, setColor] = React.useState('');
  const [manufactureYear, setManufactureYear] = React.useState('');
  const [insurance, setInsurance] = React.useState('');
  const [insuranceValidUpto, setInsuranceValidUpto] = React.useState('');
  const [kms, setKms] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [noOfOwners, setNoOfOwners] = React.useState('');
  const [transmission, setTransmission] = React.useState('');
  const [externalFitments, setExternalFitments] = React.useState('');
  const [photo, setPhoto] = React.useState('');

  const handleSubmit = () => {
    const updatedUserData = userDataIs.map((user:any) =>
    user.id === userIDIs ? { ...user, 
        "model": model,
        "year": manufactureYear,
        "mileage": kms,
        "insurance": insurance,
        "location":location,
        "color":color,
        "noOfowners":noOfOwners,
        "transmission":transmission,
        "externalFitments":externalFitments,
    } : user
  );
   dispatch(setUserData(updatedUserData));
    dispatch(hideForm())
    // handle form submission here
    
  };

  return (
    <form  style={{justifyContent:'center',alignContent:'center',alignItems:'center'}} onSubmit={handleSubmit}>
     <Box   style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width:'100%',backgroundColor:'#efefef',gap:18,height:'100%',marginTop:10,marginBottom:10,padding:15,borderRadius:10}} >
     <Card   style={{margin:0,borderRadius:18,width:'44%',backgroundColor:'#fff',paddingTop:10}}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel >Model</InputLabel>
        <Input
          id="model-input"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="color-input">Color</InputLabel>
        <Input id="color-input" value={color} onChange={(e) => setColor(e.target.value)} />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="manufacture-year-input">Year of Manufacture</InputLabel>
        <Input id="manufacture-year-input" value={manufactureYear} onChange={(e) => setManufactureYear(e.target.value)} />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="insurance-input">Insurance</InputLabel>
        <Select
          id="insurance-input"
          value={insurance}
          onChange={(e) => setInsurance(e.target.value)}
        >
          <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
        </Select>
        <FormHelperText>Valid upto</FormHelperText>
        <Input id="insurance-valid-upto-input" value={insuranceValidUpto} onChange={(e) => setInsuranceValidUpto(e.target.value)} />
      </FormControl>
      </Card>
      <Card   style={{margin:0,borderRadius:18,width:'44%',backgroundColor:'#fff',paddingTop:10}}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="kms-input">Kms</InputLabel>
        <Input id="kms-input" value={kms} onChange={(e) => setKms(e.target.value)} />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="location-input">Location</InputLabel>
        <Input id="location-input" value={location} onChange={(e) => setLocation(e.target.value)} />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="no-of-owners-input">No of Owners</InputLabel>
        <Input id="no-of-owners-input" value={noOfOwners} onChange={(e) => setNoOfOwners(e.target.value)} />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="transmission-input">Transmission</InputLabel>
        <Select
          id="transmission-input"
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        >
          <MenuItem value={'manual'}>Manual</MenuItem>
          <MenuItem value={'automatic'}>Automatic</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel htmlFor="external-fitments-input">External Fitments</InputLabel>
        <Input id="external-fitments-input" value={externalFitments} onChange={(e) => setExternalFitments(e.target.value)} />
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <Input
          id="photo-input"
          type="file"
          value={photo}
          style={{paddingLeft:10}}
          //onChange={(e) => setPhoto(e.target.files[0])}
        />
      </FormControl>
      </Card>
      
      </Box>
      <Button onClick={()=> handleSubmit()}  type="submit" variant="contained" color="primary" style={{marginLeft:'40%',width:'15%'}}>
        Submit
      </Button>
    </form>
  );
};

export default Form;