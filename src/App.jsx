import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Education from './components/Education';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/education' element={<Education/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
