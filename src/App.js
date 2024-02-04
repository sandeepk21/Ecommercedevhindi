import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/Context";
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/category:id" Component={Category} />
          <Route path="/product:id" Component={SingleProduct} />
        </Routes>
        <Newsletter/>
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
