import { Box } from "@mui/material";
import ContextProvider from "../ContextAPI/ContextProvider";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";

const ContentView: React.FC = () => {
    const userDataIs = useSelector((state: IRootState) => state.form.userData);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', backgroundColor: 'white' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '96%', backgroundColor: '#efefef', gap: 18, height: '100%', marginTop: 10, marginBottom: 10, padding: 15, borderRadius: 10 }} >
                {userDataIs.map((item:any, index:number) => {
                    return (
                        <ContextProvider brandName={item.make} brandLogo={item.logo} brandID={item.id} />
                    )
                })
                }
            </Box>
        </Box>
    )
}
export default ContentView;