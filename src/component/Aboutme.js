import React from 'react';
import Menu from './Menu';


const Aboutme = () => {
    return (
        <div>
            <div className='aboutme'>
              <Menu />  
                <span className='aboutme_name'>JUAN PABLO</span>                
            </div>

            {/* <div className='container-all'>

                <input type="radio" id='1' name='image-slide' />
                <input type="radio" id='2' name='image-slide' />
                <input type="radio" id='3' name='image-slide' />
                <input type="radio" id='4' name='image-slide' />
                <input type="radio" id='5' name='image-slide' />
                <input type="radio" id='6' name='image-slide' />
                <input type="radio" id='7' name='image-slide' />
                <input type="radio" id='8' name='image-slide' />
                <input type="radio" id='9' name='image-slide' />
                <input type="radio" id='10' name='image-slide' />
                <input type="radio" id='11' name='image-slide' /> */}

                <div className='slide'>
                <h1  className='title-medium'>QUIEN SOY </h1>
                <h2 className='title-down'>UBICACION</h2>
                <h2 className='title-down2'>CONTACTAME</h2>
                    <p className='slide_text'>
                        SOBRE MI
                        </p>

                     <p className='text-up'>
                        !Hola Soy Juan Pablo <br></br>
                        Gracias por visitar mi pagina web¡ <br></br>
                        </p>   
                     <p className='text-medium'>                        
                        Soy un desarrollador de Colombia interesado en el desarrollo de software
                        como  full stack developer.
                        Desarrollo mis habilidades como autodidacta en  plataformas
                        online como Academlo Bootcamp y youtube.<br></br> 
                        Mi curiosidad me permite aprender rapidamente nuevas tecnologias
                        Disfruto compartiendo mis conocimientos con otros soy  
                        muy  bueno para trabajar en equipo.
                        </p>  
                        <p className='text-down'>                            
                            Manizales-Caldas
                            </p> 
                            <div className='logolinkedin-about'>
                                </div>
                            <div className='logogithub-about'>
                                 </div>  
                            <div className='email-about'>
                                 </div> 

                <div className='item-slide1'>
                    <img src='../imagen/css-3.png' alt='' />
                </div>   

                <div className='item-slide2'>
                    <img src='../imagen/github-sign.png' alt='' />
                </div> 

                <div className='item-slide3'>
                    <img src='../imagen/heroku.png' alt='' />
                </div> 

                <div className='item-slide4'>
                    <img src='../imagen/html-5.png' alt='' />
                </div> 

                <div className='item-slide5'>
                    <img src='../imagen/js.png' alt='' />
                </div> 

                <div className='item-slide6'>
                    <img src='../imagen/mongodb.png' alt='' />
                </div> 

                <div className='item-slide7'>
                    <img src='../imagen/netlify.png' alt='' />
                </div> 

                <div className='item-slide8'>
                    <img src='../imagen/nodejs.png' alt='' />
                </div> 

                <div className='item-slide9'>
                    <img src='../imagen/react.png' alt='' />
                </div> 

                <div className='item-slide10'>
                    <img src='../imagen/postgre.png' alt='' />
                </div> 

                <div className='item-slide11'>
                    <img src='../imagen/postman.png' alt='' />
                </div> 

                </div> 

                {/* <div className='pagination'>

                    <label className='pagination-item' For='1'>
                        <img src='../imagen/css-3.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='2'>
                        <img src='../imagen/github-sign.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='3'>
                        <img src='../imagen/heroku.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='4'>
                        <img src='../imagen/html-5.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='5'>
                        <img src='../imagen/js.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='6'>
                        <img src='../imagen/mongodb.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='7'>
                        <img src='../imagen/netlify.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='8'>
                        <img src='../imagen/nodejs.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='9'>
                        <img src='../imagen/react.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='10'>
                        <img src='../imagen/postgre.png' alt='' />
                    </label>

                    <label className='pagination-item' htmlFor='11'>
                        <img src='../imagen/postman.png' alt='' />
                    </label>

                    </div> */}

            </div>    
          
    );
};

export default Aboutme;