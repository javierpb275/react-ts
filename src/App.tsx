import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutComponent from "./components/Layout";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about">
          <Route index element={<AboutPage />} />
          <Route path=":number" element={<AboutPage />} />
        </Route>
        <Route path="layout" element={<LayoutComponent />}>
          <Route index element={<AboutPage />} />
          <Route path=":number" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
