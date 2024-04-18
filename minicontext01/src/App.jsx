import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
   <h1>Mini Context </h1>
   <Login />
   <Profile />
 
    </UserContextProvider>
  )
}

export default App
