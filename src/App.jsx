import Navbar from './components/navbar'
import Feed from './pages/feed';
import Map from './pages/map';
import Raccoon from './pages/raccoon';
import Inbox from './pages/inbox';
import Profile from './pages/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/raccoon' element={<Raccoon/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Navbar></Navbar>
    </>

  )
}

export default App
