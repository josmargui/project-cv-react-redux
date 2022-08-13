import React from "react";

const Experience = ({ experience }) => {
    return(
        <div>
            {experience && experience.map((exp) => {
                return( 
                    <div>
                        <p>{exp.name}</p>
                        <p>{exp.date}</p>
                        <p>{exp.where}</p>
                        <p>{exp.description}</p>
                    </div>
                    )})
            }
        </div>
    );

}

export default Experience;