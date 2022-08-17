import React from "react";
import './Hero.scss'
import { FaHome,FaEnvelope,FaLinkedin,FaMobileAlt, FaMapMarkerAlt, FaGithub,FaCalendarAlt } from 'react-icons/fa';

const Hero = ({ hero }) =>{

    return(
        <div className="header-block">
            <div className="header-block__item">
                <img src="../images/foto-cv.jpg" alt="Jose Antº"/>
                <h2>{hero.name}</h2>
                <h3>{hero.profession}</h3>
            </div>
            <div className ="personal-data-block">
                <div>
                    {/* <p><span><FaHome/></span>{hero.adress}</p> */}
                    <p><span><FaMobileAlt/></span>  {hero.phone}</p>
                    <p><span><FaEnvelope/></span>   {hero.email}</p>
                    <p><span> <FaMapMarkerAlt/>  </span>{hero.city}</p>

                    <p><span><FaLinkedin/> </span>  {hero.linkedin}</p>
                    <p><span><FaGithub/> </span>  {hero.gitHub}</p>
                    <p><span><FaCalendarAlt/></span>{hero.birthDate}</p>
                </div>
            </div>

        </div>
    );
}

export default Hero;