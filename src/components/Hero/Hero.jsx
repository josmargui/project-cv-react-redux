import React from "react";
import './Hero.scss'
import { FaEnvelope,FaLinkedin,FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = ({ hero }) =>{

    return(
        <div className="header-block">
            <div>
                
                <h2>{hero.name}</h2>
                <h3>{hero.profession}</h3>
            </div>
            <div className ="personal-data-block">
                <p>{hero.adress}</p>
                <p><FaMapMarkerAlt/>{hero.city}</p>
                <p><FaEnvelope/>{hero.email}</p>
                <p>{hero.birthDate}</p>
            </div>

        </div>
    );
}

export default Hero;