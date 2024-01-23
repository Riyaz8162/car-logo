import React from 'react';
import { Box, } from '@mui/material';
import { IRootState } from '../redux/store';
import {  useSelector } from 'react-redux';
import CarSearchForm from './CarSearchForm';
import ContextProvider from '../ContextAPI/ContextProvider';

const FilterScreen: React.FC = () => {
	const filteredData = useSelector((state: IRootState) => state.form.filteredData);
    
	return (
		filteredData.length === 0 ?
        <CarSearchForm/>
        :
		<Box>
			<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', backgroundColor: 'white' }}>
				<Box style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '96%', backgroundColor: '#efefef', gap: 18, height: '100%', marginTop: 10, marginBottom: 10, padding: 15, borderRadius: 10 }} >
					{filteredData.map((item:any, index:Number) => {
						return (
							<ContextProvider brandName={item.make} brandLogo={item.logo} brandID={item.id}/>
						)
					})
					}
				</Box>
			</Box>
			
		</Box>)
};

export default FilterScreen;