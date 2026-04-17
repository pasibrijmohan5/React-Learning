import Footer from "./pages/Footer"
import Header from "./pages/Footer"
import Login from "./pages/Login"
import Students from "./pages/Students"
import ProfileCard from "./pages/ProfileCard"


const App = () => {
  return (
    <>
      <div>
        <Login />

        <header>
          <Header />
        </header>
        <footer>
          <Footer />
        </footer>
      </div>
      <div className="p-5">
        <Students name="Ram" age={20} />
        <Students name="Brij" age={22} />
      </div>
      <div>
        <ProfileCard name="Brij" role="Developer" image="https://i.pravatar.cc/100" />
      </div>



    </>
  )

}

export default App