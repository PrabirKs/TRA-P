import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import SignUp from './component/authentication/Signup'
import "./index.css"
import Login from './component/authentication/Login'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
