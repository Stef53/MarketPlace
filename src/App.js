import React from "react";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="bg-info bg-gradient" style={{minHeight: 721}}>
      <Header />
      <AppRouter />
      <ToastContainer 
            position="top-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
    </div>
  );
}

export default App;
