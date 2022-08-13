import React from "react";


const Education = ({ education }) => {
    return(
        <div>
        {education.map((study) => {

                return (
                    <div>
                        <p>
                            {study.name}
                        </p>
                        <p>
                            {study.date}
                        </p>
                        <p>
                            {study.where}
                        </p>
                    </div>
                );
            })
        }
        </div>
    );
}

export default Education;