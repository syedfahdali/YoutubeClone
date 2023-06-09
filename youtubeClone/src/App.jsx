import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/joy";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Feed />} />

          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
