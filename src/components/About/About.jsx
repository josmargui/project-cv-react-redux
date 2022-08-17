import React from "react";
import { FaUser } from 'react-icons/fa';
import './about.scss'

const About = ({ hero }) =>{

    return(
        <div className="biography-block">
             {hero.map((informacion) => {
                return (
                    <div className="biography-block-title">
                        <h2> <FaUser /> Biografía breve </h2>
                        <p>
                            {informacion.info}
                        </p>
                    </div>
            )
            }
            
            )}
            
        </div>
    );
}

export default About 