import React from "react";
import { FaGraduationCap } from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import './education.scss'


const Education = ({ education }) => {
    return(
        <div>
            <div className="block-title">
                <h2><FaGraduationCap/> Formación</h2>
            </div>
            <VerticalTimeline>
            {education.map((study) => {
                
                    return (
                        <div>
                            <VerticalTimelineElement key={study.key} lineColor={ 'red' } className="vertical-timeline-element--work" 
                                contentStyle={{ background: '#153840', color: 'white', marginBlock:'35px' }}
                                contentArrowStyle={{ borderRight: '7px solid  #153840' }}
                                date={study.date} dateClassName={"dateString"}  iconStyle={{ background: '#153840', color: '#fff' }}
                                icon={<FaGraduationCap/>}>
                                <h3 className="vertical-timeline-element-title">
                                    {study.name}
                                </h3>
                                <p>
                                    {study.where}
                                </p>
                            </VerticalTimelineElement>
                        </div>
                    );
                    
                })
            }
            
            {/* <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FaGraduationCap />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FaGraduationCap />}
            /> */}
            </VerticalTimeline>
        </div>
    );
}

export default Education;