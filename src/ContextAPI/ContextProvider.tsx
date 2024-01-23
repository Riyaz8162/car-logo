import CarComponent from '../components/Card'
import CarContext from './CarContext'


const  ContextProvider = ({ brandName, brandLogo,brandID }:any) => {
    return (
        <CarContext.Provider value={{ carName: brandName, carLogo: brandLogo,carUserId:brandID }}>
            <CarComponent />
        </CarContext.Provider>
    );
}

export default ContextProvider;