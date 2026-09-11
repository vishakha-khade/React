import UserCard from "./components/UserCard"
import Shivaji from "./assets/shivaji.jpg"
import Prithvirajchauhan from "./assets/prithviraj.jpg"
import Maharanapratab from "./assets/maharana.png"


function App() {


  return (
    <div className="container">
      <UserCard name="Shivaji Maharaj" desc="desc1" image={Shivaji} style={{
        "border-radius": "20px"
      }}/>
      <UserCard name="Prithvi Raj Chauhan" desc="desc2" image={Prithvirajchauhan}  style={{
        "border-radius": "20px"
      }}/>
      <UserCard name="Maharana Pratab" desc="desc3" image={Maharanapratab} style={{
        "border-radius": "20px"
      }}/>
    </div>
  )
}

export default App
