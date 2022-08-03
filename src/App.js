import Header from "./components/Header";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Slick from "./components/Slick";

function App() {
  return (
    <div className="w-screen box-border">
      <div className="flex flex-col max-w-[1200px] mx-auto justify-center"> 
        <div>
          < Header/>
        </div>
        <div>
          < Part1/>
        </div>
        <div>
          < Part2 />
        </div>
        <div>
          < Part3 />
        </div>
        <div>
          < Slick />
        </div>
      </div> 
    </div>
    
  );
}

export default App;
