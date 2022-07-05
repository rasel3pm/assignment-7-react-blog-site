
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/clients/Home/Home';
import OurTeam from './Components/clients/OurTeam/OurTeam';
import Contact from './Components/clients/Contact/Contact';
import SingleBlog from './Components/clients/Home/Blogs/SingleBlog';
import ClientDasbord from './Components/clients/ClientsDasbord/ClientDasbord';
import Register from './Components/clients/Common/Register/Register';
import Blogs from './Components/clients/Home/Blogs/Blogs';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ourteam" element={<OurTeam/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/clientsDasbord" element={<ClientDasbord/>}></Route>
        <Route path="/RegisterPa" element={<Register/>}></Route>
        <Route path="/sinPost" element={<Blogs/>}></Route>
        <Route path="/sinPost/:id" element={<SingleBlog/>}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
