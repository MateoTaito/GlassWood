import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { CartProvider } from "../context/CartContext";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <CartProvider>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        {/* Spacer to offset the fixed navbar height */}
        <div className='h-16 sm:h-20 lg:h-24' aria-hidden='true' />
        <main className='flex-grow'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;
