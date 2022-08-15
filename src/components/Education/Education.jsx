import React from "react";
import { FaGraduationCap } from 'react-icons/fa'

const Education = ({ education }) => {
    return(
        <div>
            <div>
                <h2><FaGraduationCap/> Formación</h2>
            </div>
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