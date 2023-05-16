import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./nav";
import { Error } from "./error";
import { Allgames } from "./allgames";
import { Shooters } from "./shooters";
import { Mmo } from "./mmo";
import { Mmorpg } from "./mmorpg";
import { Strategy } from "./strategy";
import { Sports } from "./sports";
import { Racing } from "./racing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Allgames />} />
          <Route path="shooters" element={<Shooters />} />
          <Route path="mmo" element={<Mmo />} />
          <Route path="mmorpg" element={<Mmorpg />} />
          <Route path="strategy" element={<Strategy />} />
          <Route path="sports" element={<Sports />} />
          <Route path="racing" element={<Racing />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
