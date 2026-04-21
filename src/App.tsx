import Footer from "./pages/Footer"
import Login from "./pages/Login"
import Students from "./pages/Students"
import ProfileCard from "./pages/ProfileCard"
import { useState } from "react"
import DataFetching from "./pages/DataFetching"




const App = () => {
  const [show, setShow] = useState(true);
  const users = [
    {
      id: 1,
      name: "Brij",
      role: "Developer",
      image: "https://i.pravatar.cc/100?img=12",
      isOnline: true,
    },
    {
      id: 2,
      name: "Mohan",
      role: "Designer",
      image: "https://i.pravatar.cc/100?img=15",
      isOnline: false,
    },
    {
      id: 3,
      name: "Ram",
      role: "Manager",
      image: "https://i.pravatar.cc/100?img=20",
      isOnline: true,
    },
  ];
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
          <div className="flex gap-4 flex-wrap">
            {users.map((user) => (
              <ProfileCard
                key={user.id}
                name={user.name}
                role={user.role}
                image={user.image}
                isOnline={user.isOnline}
              />
            ))}
          </div>
        ) : (
          <p className="text-red-500">Profiles are hidden</p>
        )}
      </div>
      <div>
        <DataFetching />
      </div>

    </>
  )

}


export default App