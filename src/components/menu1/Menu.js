
import "./menu.scss"
export default function Menu({menuOpen ,setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#portfolio">About me</a>
        </li >
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#carouselExampleIndicators">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#testimonials">Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#quali">Qualification</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#services">Services</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
            <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
