import Graph from "./Components/Graph";
import RightPanel from "./Components/RightPanel";
import Navbar from "./Components/Navbar";
import LeftPanel from "./Components/Leftpanel";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex ">
        <div className="w-[4%]">
          <LeftPanel />
        </div>
        <div className=" w-[96%] ">
          <Navbar />
          <div className="flex w-[100%]  ">
            <div className="w-[80%]">
              <div className="w-full">
                <Graph />
              </div>
              <div className="w-full">
                <Footer />
              </div>
            </div>
            <div className="w-[20%]">
              <RightPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
