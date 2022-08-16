import React from "react";
import { FaToolbox } from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement  } from "react-vertical-timeline-component";
import './experience.scss'
import 'react-vertical-timeline-component/style.min.css';

const Experience = ({ experience }) => {
    return(
        <div>
            <div>
                <h2><FaToolbox/> Experiencia</h2>
            </div>
            <VerticalTimeline>
                {experience && experience.map((exp) => {
                    return( 
                        <div className="experience-block">
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: '#153840', color: 'aquamarine', marginBlock:'35px' }}
                            contentArrowStyle={{ borderRight: '7px solid  #153840' }}
                            date={exp.date} dateClassName={"dateString" }iconStyle={{ background: '#153840', color: '#fff' }}
                            icon={<FaToolbox/>}>
                            <div className="experience-block__item">
                                <p>{exp.where}</p>
                                <p>{exp.date}</p>
                            </div>
                            <div className="experience-block__itemDescription">
                                <p>{exp.name}</p>
                                <p>{exp.description}</p>
                            </div>
                        </VerticalTimelineElement>
                        </div>
                        )})
                }
            </VerticalTimeline>
        </div>
    );

}

export default Experience;