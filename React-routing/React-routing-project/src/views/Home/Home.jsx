import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <h1>Home Page</h1>
      <p>Welcome to Home page</p>
    </div>
  )
}

export default Home
