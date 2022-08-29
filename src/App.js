import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import FlyOutPage from './FlyoutPage';
import PageNotFound from './PageNotFound';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/FlyOutPage" element={<FlyOutPage />} /> 
      <Route path="*" element={<PageNotFound />} />   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
