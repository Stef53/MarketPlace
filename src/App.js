import React from "react";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";



function App() {


  return (
    <div className="bg-info bg-gradient" style={{minHeight: 721}}>
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
