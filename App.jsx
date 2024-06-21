import './App.css'
import ExaminationComponent from './components/ExaminationComponent'
// import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListExaminationComponent from './components/ListExaminationComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UserClaimComponent from './components/UserClaimComponent'
import LoginComponent from './components/LoginComponent'
import SelectExaminationComponent from './components/SelectExaminationComponent'
function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        {/* //http://localhost:3000 */}
        <Route path="/" element={<ListExaminationComponent/> }>
        {/* //http://localhost:3000/examinations */}
        </Route>
        <Route path="/examinations" element={<ListExaminationComponent/> }></Route>
        {/* //http://localhost:3000/add-examination */}
        <Route path="/add-examination" element={<ExaminationComponent/> }></Route>
        {/* //http://localhost:3000/user-claim */}
        <Route path="/user-claim" element={<UserClaimComponent/> }></Route>
        <Route path="/login" element={<LoginComponent/> }></Route>
        <Route path="/select-examination" element={<SelectExaminationComponent/> }></Route>
        

      </Routes>
      {/* <FooterComponent/> */}
    </BrowserRouter>
    </>
  )
}

export default App
