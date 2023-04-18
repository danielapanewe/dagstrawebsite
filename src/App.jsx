import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Transformationdigital from './components/Transformationdigital/Transformationdigital';
import Videosurveillance from './components/Videosurveillance/Videosurveillance';
import Reseau from './components/Reseau/Reseau';
import Datamanagement from './components/Datamanagement/Datamanagement';
import Formation from './components/Formation/Formation';
import Realisation from './components/Realisation/Realisation';

const App = () => (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/Contact' element={<Contact/>} />
     <Route path='/Service/TransformationDigitale' element={<Transformationdigital/>} />
     <Route path='/Service/VideoSurveillance' element={<Videosurveillance/>} />
     <Route path='/Service/Reseau' element={<Reseau/>} />
     <Route path='/Service/DataManagement' element={<Datamanagement/>} />
     <Route path='/Service/Formation' element={<Formation/>} />
     <Route path='/Réalisations' element={<Realisation/>} />
   </Routes>
 </BrowserRouter>
);

export default App;
