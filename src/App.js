import "./App.css";
import HomeComp from "./comp/HomeComp.js";
import PageOne from "./comp/PageOne.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import PageThree from "./comp/PageThree.js";
import PageFive from "./comp/PageFive.js";
import PageTwo from "./comp/PageTwo.js";

function App() {
  return (
    <>
      <div className="container-fluid">

    <HomeComp/>
    {/* <PageOne/> */}
    {/* <PageThree/> */}
    {/* <PageFive/> */}

    <PageTwo/>


    </div>
      
    </>
  );
}

export default App;
