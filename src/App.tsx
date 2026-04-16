import Footer from "./pages/Footer"
import Header from "./pages/Footer"
import Login from "./pages/Login"
import Students from "./pages/Students"


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

    </>
  )

}

export default App