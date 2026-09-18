
import { Link } from 'react-router'

function NotFound() {
    const links = [
        { label: "Home", path: "/"},
        { label: "About", path: "/about"},
        { label: "Contact", path: "/contact"},
        { label: "Login", path: "/login"},
    ];
    
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <h1>Page Not Found</h1>
    </div>
  )
}

export default NotFound
