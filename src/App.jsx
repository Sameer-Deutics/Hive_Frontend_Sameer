import { BrowserRouter, Routes } from "react-router-dom";
import RoutesIndex from "./utils/routes/routesnew/Global/index";
// import Routers from "./routes/Routers";

// import Dash from "./components/Dash"

function App() {
  return (
    <>
      {/* <Routers/> */}

      <BrowserRouter>
      <RoutesIndex />
      
      </BrowserRouter>
      {/* <Dash/> */}
    </>
  );
}

export default App;
