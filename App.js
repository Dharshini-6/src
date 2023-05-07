import Navbar from "./Navbar";
import Knowme from "./pages/knowme";
import Cv from "./pages/cv";
import Expertise from "./pages/expertise";
import Home from "./pages/home";
import Hom from "./pages/hom";

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/hom":
      component = <Hom/>
      break
    case "/expertise":
      component = <Expertise/>
      break
    case "/knowme":
      component = <Knowme/>
      break
    case "/cv":
      component = <Cv/>
      break          
  }
  return (
  <>
  <Navbar/>
  <div className="container">
  {component}
  </div>
  </>
  )
}
export default App