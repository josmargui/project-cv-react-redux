import React from "react";

const About = ({ hero }) =>{

    return(
        <div>
             {hero.map((informacion) => {
                return (
                    <div>
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