import React, {Component, Fragment}from 'react';
import error from '../assets/error-404-colour.svg';
import ParticlesBg from "particles-bg";

class NotFound extends Component{
  
    render(){
        return (
           <Fragment>
           <div className='center'>
           <h2 style={{color:'#C3BABA', fontWeight:'bold'}}>Page Not found</h2>
               <img src={error} height='50%' width='30%'/>
           </div>
           <ParticlesBg type="tadpole" bg={true} />
           </Fragment> 
        );
    };
 
}
export default NotFound;
