import React from "react";
import { FaToolbox } from 'react-icons/fa'
import './experience.scss'
const Experience = ({ experience }) => {
    return(
        <div>
            <div>
                <h2><FaToolbox/> Experiencia</h2>
            </div>
            {experience && experience.map((exp) => {
                return( 
                    <div className="experience-block">
                        <div className="experience-block__item">
                            <p>{exp.where}</p>
                            <p>{exp.date}</p>
                        </div>
                        <div className="experience-block__itemDescription">
                            <p>{exp.name}</p>
                            <p>{exp.description}</p>
                        </div>
                        
                    </div>
                    )})
            }
        </div>
    );

}

export default Experience;