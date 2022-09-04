import React from 'react'
import './tecnologies.scss'
import { FaLaptopCode } from 'react-icons/fa';


const Tecnologies = ( {tecnologies} ) => {
    console.log(tecnologies.frontend);
    const front = tecnologies.frontend;
    const back = tecnologies.backend;
    const db = tecnologies.db;
    const tools = tecnologies.tools;
  return (
    <div>
        <div className='tecnologies-block-title'>
            <h2><span><FaLaptopCode/></span>Tecnologías</h2>
        </div> 
        <div className='tecnologies-block'> 
            <div className='tecnologies-block__item'>
                <h3>Frontend</h3>
                <div className='tecnologies-block_type'>
                    {tecnologies && front.map((fro) => {
                        return(
                                
                                <p>
                                    {fro}
                                </p>
                                
                            
                        );
                    })
                    }
                </div>
            </div>

            <div className='tecnologies-block__item'>
                <h3>Backend</h3>
                <div className='tecnologies-block_type'>
                    {tecnologies && back.map((back) => {
                        return(
                            <>
                                <p>
                                    {back}
                                </p>
                            </>
                        );
                    })
                    }
                </div>
            </div>
            <div className='tecnologies-block__item'>
                <h3>Bases de Datos</h3>
                <div className='tecnologies-block_type'>

                    {tecnologies && db.map((db) => {

                        return(
                            <>
                                <p>
                                    {db}
                                </p>
                            </>
                            
                        );
                    })
                    }
                </div>
            </div>
            <div className='tecnologies-block__item'>
                <h3>Herramientas</h3>
                <div className='tecnologies-block_type'>
                    {tecnologies && tools.map((tool) => {
                        return(
                            <>
                                <p>{tool}</p>
                            </>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tecnologies