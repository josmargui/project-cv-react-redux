import React from "react";
import { FaUser } from 'react-icons/fa';

const About = ({ hero }) =>{

    return(
        <div>
             {hero.map((informacion) => {
                return (
                    <div>
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