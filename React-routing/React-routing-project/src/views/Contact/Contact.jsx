import { Link } from 'react-router'

function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Page</h1>
      <p>Welcome to Contact Page</p>
    </div>
  )
}

export default Contact
