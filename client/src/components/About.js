import React from 'react';
import profile from '../assets/aniket_profile.jpg';
import Slide from 'react-reveal/Slide';
import ParticlesBg from "particles-bg";

const About = () => {
    return(
        <div className='container'>
            <h2>About the app!</h2>
            <h5>It is a simple application that fetches stories from Hackernews.</h5>
            <div className='center' style={{paddingTop:'40px'}}>
                <h2>Made with <i class="fas fa-heart" style={{color:'red'}}></i> by</h2>
                </div>
                <Slide bottom>
                <div style={{paddingLeft:'380px'}}>
      <div class="card" style={{width:300 }}>
        <div class="card-image">
          <img src={profile} alt='profile'/>
          <span class="card-title">Aniket Biswas</span>
        </div>
        <div class="card-content">
          <p>I make stuff when I am bored.</p>
        </div>
        <div class="card-action">
          <a href="https://github.com/aniketbiswas21"><i class="fab fa-github fa-lg" style={{color:'grey'}}></i></a>
          <a href='https://www.instagram.com/aniket.biswas/'><i class="fab fa-instagram fa-lg" style={{color:'grey'}}></i></a>
          <a href='https://www.facebook.com/aniket.biswas.75873/'><i class="fab fa-facebook fa-lg" style={{color:'grey'}}></i></a>
          <a href='https://twitter.com/Aniket__21'><i class="fab fa-twitter fa-lg" style={{color:'grey'}}></i></a>
        </div>
      </div>
      </div>
      </Slide>
      <ParticlesBg type="tadpole" bg={true} />
      </div>
           
    )
}

export default About
