import { createContext } from "react";

const CarContext = createContext({
    carName: '',
    carLogo: '',
    carUserId:0
});

export default CarContext;