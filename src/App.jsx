import { Outlet } from "react-router-dom";
import Header from "./components/header";


const App = () => {
 return(
       <>
          <header className="flex jutify-between items-center mb-7">
            <Header/>
          </header>

          <main>
            <Outlet/>
          </main>
       </>
  )

 }
export default App;
