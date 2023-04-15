import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

const App = () => (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/contact' element={<Contact/>} />
   </Routes>
 </BrowserRouter>
);

export default App;
