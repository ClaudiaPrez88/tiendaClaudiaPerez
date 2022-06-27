import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Logo() {
  return (
        <Col xs={12} md={4}> 
            <Link to='/'>
                 <img src='../img/logo.png' className='logo' alt='logo'></img>
            </Link>
            
        </Col> 
   
    
  )
}

export default Logo