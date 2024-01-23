// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { showForm } from '../redux/reducer/formSlice';

// interface LogoProps {
//   model: string;
//   fields: Record<string, string>;
// }

// const Logo: React.FC<LogoProps> = ({ model, fields }) => {
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     dispatch(showForm({ model, fields }));
//   };

//   return <img src="logo.png" onClick={handleClick} alt="Logo" />;
// };

// export default Logo;

import React from 'react';
import { useDispatch } from 'react-redux';
import { showForm } from '../redux/reducer/formSlice';

interface LogoProps {
  model: string;
  fields: Record<string, string>;
}

const Logo: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    //dispatch(showForm({ model, fields }));
  };

  return <img src="logo.png" onClick={handleClick} alt="Logo" />;
};

export default Logo;