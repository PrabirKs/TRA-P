import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import SignUp from './component/authentication/Signup'
import "./index.css"
import Login from './component/authentication/Login'
import FormModal from './component/modal/FormModal'
import JobAddForm from './component/forms/JobAddForm'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<SignUp/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path='/add' element={<FormModal/>}/>
          <Route path='/form' element={<JobAddForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
