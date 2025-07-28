import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./components/authpages/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./components/authpages/Login";
import IsAuth from "./AuthRoutes/IsAuth";

import PageAccess from "./AuthRoutes/PagesAccess";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Menswallet from "./components/MensWallet/Menswallet";
import Ladieswallet from "./components/Ladieswallet/Ladieswallet";
import Bags from "./components/Bags/Bags";
import LadiesBags from "./components/LadiesBags/LadiesBags";
import Gifts from "./components/Gifts/Gift";
import CardsHolder from "./components/Cardsholder/CardsHolder";
import Keychain from "./components/Keychain/Keychain";

import Admin from "./AuthRoutes/Admin";
import Dashboard from "./components/Admin/Admin";
import Pagenotfound from "./components/Pagenotfound";
import AddProduct from "./components/Admin/AddProduct";
import Listedproducts from "./components/Admin/Listedproducts";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CheckoutPage from "./components/Ordercheckout/Checkout";
import AdminOrdersDashboard from "./components/Admin/OrderAllDeltails";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route element={<IsAuth />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PageAccess />}>
 <Route path="/" element={<><Navbar /> <Home /> </> } />
 <Route path="/mens" element={ <> <Menswallet /> </> }/>
 <Route path="/ladies" element={<><Ladieswallet /> </>  } />
 <Route path="/bags" element={ <> <Bags /> </> }/>
 <Route path="/ladiesbags" element={ <> <LadiesBags /> </>  } />
 <Route path="/gifts" element={ <><Gifts /> </> } />
 <Route path="/cardsholder" element={ <> <CardsHolder /> </>  } />
 <Route path="/keychain" element={<> <Keychain /> </> }/>


  <Route path="/product/:id" element={<><Navbar/>, <ProductDetail /> </> }/>
    <Route path="/checkout/:id" element={<><Navbar/>, <CheckoutPage /> </> }/>
 </Route>

 <Route element={<Admin />}>
<Route path="/admin" element={ <> <Dashboard />{" "} </> } />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/overview" element={<Dashboard />} />
          <Route path="/listedproduct" element={<Listedproducts />} />
           <Route path="/orders" element={<><AdminOrdersDashboard /> </> } />
        </Route>
        <Route path="*" element={<Pagenotfound />} />

      </Routes>
    </div>
  );
}

export default App;
