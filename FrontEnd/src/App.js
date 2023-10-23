import './App.css';
import Main from './component/Main'
import Profession from './component/Profession'
import JobSeeker from './component/JobSeeker'
import Recruitment from './component/Recruitment'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddForm from './component/Recruitment/add-form'


function App() {
  return (
    <Router>
    <Main />
    <Routes>
      <Route path='/' exact element = {<Profession />} />
      <Route path='/job-seeker' exact element = {<JobSeeker/>} />
      <Route path='/recruitment' exact element = {<Recruitment/>} />
      <Route path='/add-form' exact element = {<AddForm/>} />
    </Routes>
    </Router>
  );
}

export default App;
