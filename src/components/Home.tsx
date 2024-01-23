import React, { useEffect } from 'react';
import Header from './Header'
import CarJson from '../mocks/car-list.json'
import { Box, Modal, } from '@mui/material';
import Form from './Form';
import { IRootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { hideForm, setUserData } from '../redux/reducer/formSlice';
import ContentView from './ContentView';

const HomePage: React.FC = () => {
	const dispatch = useDispatch();
	const visible = useSelector((state: IRootState) => state.form.visible);
    
	//Mouting first time
	useEffect(() => {
		dispatch(setUserData(CarJson))
	}, [])

	
	return (
		<Box style={{ background: 'red', alignContent: 'flex-start', alignSelf: '-moz-initial' }}>
			<Header />
			<ContentView />
			<Modal
				open={visible}
				onClose={() => dispatch(hideForm())}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Form />
				</Box>
			</Modal>
		</Box>)
};

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default HomePage;