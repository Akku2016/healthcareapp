import  './topbar.css';
 
 

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (

    <div className={"top " + (menuOpen && "active")}>
          <div className="wrapper">
    <div className="topLeft">
    <i  className="logo fa-solid fa-hand-holding-medical  fa-beat"> <span className='logoDesc'>HealthCare</span></i>
    <div className="itemContainer">
         <i className=" icon fa-solid fa-phone fa-beat-fade"></i>
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
          <i className=" icon fa-solid fa-envelope"></i>
            <span>healthcare@gmail.com</span>
          </div>
    </div>
    
    <div className="topRight">
    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
           
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      
       
        </div>
    </div>
    </div>
    
    
  )
}
