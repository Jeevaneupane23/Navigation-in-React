import Links from "./Components/Links";
import useNavigationContext from "./hooks/custom-hooks-navigation";
import SideBar from "./Components/SideBar";
import HomePage from "./Pages/Home";
import ContactPage from "./Pages/Contact";
import AboutPage from "./Pages/About";
import Route from "./Components/Route";

function App() {

  return (
    <div className="flex gap-10">
    <SideBar/>

    <Route path='/'>
      <HomePage/>
    </Route>

    <Route path='/contact'>
      <ContactPage/>
    </Route>

    <Route path='/about'>
      <AboutPage/>
    </Route>
      
      
    </div>
  );
}

export default App;
