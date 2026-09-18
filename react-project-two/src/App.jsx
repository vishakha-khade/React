import UserCard from "./components/UserCard.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import Shivaji from "./assets/shivaji.jpg"
import Prithvirajchauhan from "./assets/prithviraj.jpg"
import Maharanapratab from "./assets/maharana.png"

function App() {

  return (
    <div>
      
    <Header  title="Great Indian Warriors" />
    <div className="container">


      <div className="cards">

        <UserCard
          name="Chattraparti Shivaji Maharaj"
          desc="Great Maratha King"
          image={Shivaji} />

        <UserCard
          name="Prithviraj Chauhan"
          desc="Brave Indian King"
          image={Prithvirajchauhan} />

        <UserCard
          name="Maharana Pratap"
          desc="Great Rajput Warrior"
          image={Maharanapratab} />

      </div>

    </div>
    <Footer text= "© 2026 My First React App. All rights reserved."/>
    </div>
  )
}

export default App