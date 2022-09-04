import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import FlyOutPage from './FlyoutPage';
import PageNotFound from './PageNotFound';
import ImageProcessing from "./ImageProcessing";
import ImageReview from "./ImageReview";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/FlyOutPage" element={<FlyOutPage />} /> 
      <Route path="/ImageProcessing" element={<ImageProcessing />} /> 
      <Route path="/ImageReview" element={<ImageReview />} /> 
      <Route path="*" element={<PageNotFound />} />   

    </Routes>
    </BrowserRouter>
  );
}

export default App;
