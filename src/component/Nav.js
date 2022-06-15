import React from 'react';



const Nav = () => {
    return (
        <div>
           <nav className='nav'>
           <span className='nav_logo'>JUAN PABLO</span><br></br>
           <span className='lastname'> MARTINEZ RIVERA</span>

               <div  className='nav_container'>                  
               </div>
               <div className='logo_linkedin'>
               {/* <a href="https://www.linkedin.com/in/juan-pablo-mart%C3%ADnez-rivera-b83aa1b2/" target="_blank">
                  <img src="../imagen/linkedin.png" alt="" />
               </a> */}
                   </div>
                     <div className='logo_github'>
                     </div>
                        <div className='email'>
                        </div>

                <div className="paragraph" >
                   <p>Hola soy  Juan Pablo </p>
                   <p>Soy un desarrollador </p>
                   <p>Web Full Stack</p>
                   <p>Ubicacion</p>
                   <p>Manizales- Caldas</p>
                   <p>Contactame</p>                   
               </div>

               {/* <p >
                   <span className='hello'>Hola soy  Juan Pablo </span><br></br>
                   <span className='developer'>Soy un desarrollador </span><br></br>
                   <span className='full'>Web Full Stack</span><br></br>
                   <span className='location'>Ubicacion</span><br></br>
                   <span className='city'>Manizales- Caldas</span><br></br>
                   <span className='contact'>Contactame</span><br></br>                   
               </p> */}

           </nav>
        </div>
    );
};

export default Nav;