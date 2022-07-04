import React from 'react';



const Nav = () => {
    return (
        <div className='font1'>
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

               < a className="btn-innav"
          href="https://www.linkedin.com/in/juan-pablo-mart%C3%ADnez-rivera-b83aa1b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bat3S5M5IQJmWtz30V9xvrQ%3D%3D"
        >
          IR
        </a>

        <a
          className="btn-gitnav"
          href="https://github.com/tayson87"
        >
          IR
        </a>

        <a
          className="btn-emailnav"
          href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
        >
          IR
        </a>

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