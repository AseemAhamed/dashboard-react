import Header from "./components/header";
import Sidebar from './components/sidebar';
import MainDash from "./components/maindash";
import "./App.css"




function App() {

  return (
    <div className="main-container">

      <div className="header-container">

        <Header/>

      </div>
      <div className="content-container">

 

          <Sidebar/>

          

            <MainDash/>


          
        

      </div>

    </div>
  )
}

export default App
