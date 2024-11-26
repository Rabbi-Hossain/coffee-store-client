import { useLoaderData } from "react-router-dom"
import Coffee from "./components/Coffee"
import { useState } from "react"

function App() {

  const loadedUsers = useLoaderData()

  const [users, setUsers] = useState(loadedUsers)


  return (
    <>

      <h1>Coffee add project:{users.length}</h1>

      <div className="grid grid-cols-2 gap-6 mt-20 mx-10">
        {
          users.map(user => <Coffee key={user._id} users={users} setUsers={setUsers} user={user}></Coffee>)
        }
      </div>

    </>
  )
}

export default App
