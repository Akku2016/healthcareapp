import './Menu.css';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+ (menuOpen && "active")}>
        <ul onClick={()=>setMenuOpen(false)}>
            <li>
               <a href="#intro">Home</a>
        </li>
        <li>
               <a href="#about">about</a>
        </li>
        <li>
               <a href="#services">services</a>
        </li>
        <li>
               <a href="#doctors">doctors</a>
        </li>
        <li>
               <a href="#appointment">Appointment</a>
        </li>
        <li>
               <a href="#contact">Contact</a>
        </li>
        </ul>
    </div>
  )
}
