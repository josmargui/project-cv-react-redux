import React from 'react'
import './tecnologies.scss'

const Tecnologies = ( {tecnologies} ) => {
    console.log(tecnologies.frontend);
    const front = tecnologies.frontend;
    const back = tecnologies.backend;
    const db = tecnologies.db;
    const tools = tecnologies.tools;
  return (
    <div>
        <div className='tecnologies-block-title'>
            <h2>Tecnologías</h2>
        </div> 
        <div className='tecnologies-block'> 
            <div className='tecnologies-block__item'>
                <h3>Frontend</h3>
                {tecnologies && front.map((fro) => {
                    return(
                        <p>{fro}</p>
                    );
                })
                }
            </div>
            <div className='tecnologies-block__item'>
                <h3>Backend</h3>
                {tecnologies && back.map((back) => {
                    return(
                        <p>{back}</p>
                    );
                })
                }
            </div>
            <div className='tecnologies-block__item'>
                <h3>Bases de Datos</h3>
                {tecnologies && db.map((db) => {
                    return(
                        <p>{db}</p>
                    );
                })
                }
            </div>
            <div className='tecnologies-block__item'>
                <h3>Herramientas</h3>
                {tecnologies && tools.map((tool) => {
                    return(
                        <p>{tool}</p>
                    );
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Tecnologies