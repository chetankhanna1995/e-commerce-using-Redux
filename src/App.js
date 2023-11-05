import Home from "./pages/Home";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./store/store";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App container-xl mx-16">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
