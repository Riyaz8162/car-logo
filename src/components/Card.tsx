import { CardContent, CardMedia, Typography, Card } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredData, setUserId, showForm } from '../redux/reducer/formSlice';
import { useNavigate } from 'react-router-dom';
// interface CarLogoProps {
//     brandName: String;
//     brandLogo: String;
//     brandID:Number
// }

// const CarLogo: React.FC<CarLogoProps> = ({ brandName, brandLogo,brandID }) => {    
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const onClickCard =(brandID:Number) =>{
//       dispatch(setUserId(brandID));
//       dispatch(showForm())
//     }
    
//     return (
//         <Card  style={{margin:0,borderRadius:18,width:'19%',backgroundColor:'#fff'}}>
//             <CardMedia
//                 component="img"
//                 height="105"
//                 style={{backgroundColor:'#fff',imageResolution:'from-image'}}
//                 image={`${brandLogo}`}
//                 onClick={()=>onClickCard(brandID)}
//             />
//             <CardContent onClick={()=>navigate('Filter')} >
//                 <Typography variant="h4" component="h2" textAlign={"center"}>
//                     {brandName}
//                 </Typography>
//             </CardContent>

//         </Card>

//     )
// }


import { useContext } from 'react';
import CarContext from '../contextAPI/CarContext';

function ChildComponent() {
    const { carName, carLogo,carUserId } = useContext(CarContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickCard =(carUserId:Number) =>{
      dispatch(setUserId(carUserId));
      dispatch(showForm())
    }

    const filterScreen =() =>{
        dispatch(setFilteredData([]));
        navigate('Filter')
    }

    return (
        <Card  style={{margin:0,borderRadius:18,width:'19%',backgroundColor:'#fff'}}>
        <CardMedia
            component="img"
            height="105"
            style={{backgroundColor:'#fff'}}
            image={`${carLogo}`}
            onClick={()=>onClickCard(carUserId)}
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent onClick={()=>filterScreen()} >
            <Typography variant="h4" component="h2" textAlign={"center"}>
                {carName}
            </Typography>
        </CardContent>

    </Card>
    );
}
 export default ChildComponent;