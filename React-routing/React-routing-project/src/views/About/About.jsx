import { Link } from 'react-router'

function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Page</h1>
      <p>Welcome to About page</p>
    </div>
  )
}

export default About
