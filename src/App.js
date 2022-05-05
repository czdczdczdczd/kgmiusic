import {BrowserRouter,Routes,Route} from "react-router-dom"
import Download from "./pages/Download";
import Home from "./pages/Home";
import TopList from "./pages/TopList";
import TS from "./pages/TS";
import Top from "./components/Top"
import Radio from "./pages/Radio";
import MV from "./pages/MV";
import Songs from "./pages/Songs";
import Singers from "./pages/Singers";
import Album from "./pages/Album";
import KG500 from "./pages/TopList/KG500"
import KGdj from "./pages/TopList/KGdj"
import KGhot from "./pages/TopList/KGhot"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Top />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/TopList" element={<TopList />}>
            <Route index element={<KG500 />}></Route>
            <Route path="KGdj" element={<KGdj />}></Route>
            <Route path="KGhot" element={<KGhot />}></Route>
          </Route>
          <Route path="/TS" element={<TS />}></Route>
          <Route path="/Download" element={<Download />}></Route>
          <Route path="/Radio" element={<Radio />}></Route>
          <Route path="/MV" element={<MV />}></Route>
          <Route path="/Singers" element={<Singers />}></Route>
          <Route path="/Songs" element={<Songs />}></Route>
          <Route path="/Album" element={<Album />}></Route>
        </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
