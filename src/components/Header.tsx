import { useState } from 'react'
import  styles from './navbar.module.css';

function Navbar() {

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <div style={{display: 'flex', flexDirection: 'row',gap: 50,backgroundColor:'white'}}>
          {/* logo */}
          <h6  className={`${styles.logo}`}>Logo </h6>
          <h6  className={`${styles.logo}`}>Home </h6>
          <h6  className={`${styles.logo}`}>Services </h6>
          <h6  className={`${styles.logo}`}>Gallery </h6>
          <h6  className={`${styles.logo}`}>Contact Us </h6>
       </div>


      {/* </header> */}
    </div>
  );
}


export default Navbar;

;