import Footer from "./pages/Footer"
import Login from "./pages/Login"
import Students from "./pages/Students"
import ProfileCard from "./pages/ProfileCard"
import { useState } from "react"




const App = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        <Login />
        <footer>
          <Footer />
        </footer>
      </div>
      <div className="p-5">
        <Students name="Ram" age={20} />
        <Students name="Brij" age={22} />
      </div>
      <div>
        <ProfileCard name="Brij" role="Developer" image="https://i.pravatar.cc/100?img=12" isOnline={true} />
        <ProfileCard name="Mohan" role="Designer" image="https://i.pravatar.cc/100?img=12" isOnline={false} />
      </div>

      <div className="p-5">
        <button
          onClick={() => setShow(!show)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Show / Hide ProfileCard
        </button>


        {show ? (
          <div className="flex gap-4">
            <ProfileCard
              name="Brij"
              role="Developer"
              image="https://i.pravatar.cc/100?img=12"
              isOnline={true}
            />
            <ProfileCard
              name="Mohan"
              role="Designer"
              image="https://i.pravatar.cc/100?img=15"
              isOnline={false}
            />
          </div>
        ) : (
          <p className="text-red-500">Profiles are hidden</p>
        )}
      </div>


    </>
  )

}


export default App