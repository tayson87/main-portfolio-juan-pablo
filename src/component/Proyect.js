import React from 'react';
import Menu from './Menu';

const Proyect = () => {
    return (
        <div>
            <div className='project-main'>
            <Menu />
            <span className='title-project'> PROYECTOS</span>
            <span className='title-name'>JUAN PABLO</span>
            </div>
            <div className='app-time'>                
                <p className='title-time'>App Clima</p>
                <p className='description-time'>App del clima  se creo  consumiendo  una api 
                publica en donde la labor es consultar la temperatura  dependiendo  de  la ubicacion en la que se encuentra   se  usaron  tecnologias como Reac, JS, Css</p> 

                <button className='btn_time' onClick={'https://keen-allen-54f279.netlify.app/'}>Desplegar</button>
                            
                </div>

                {/* <div className='logojs'>   
                 <img src='../imagen/js.png' alt='' />  
                </div>  */}

               
        </div>

        
    );
};

export default Proyect;