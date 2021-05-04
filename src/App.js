import React from "react";
import './App.css'
import MainContentWithRoute from './components/route/route.component'
import Header from './components/header/header.component';
function App() {
  return (
    <div>
      <Header/>
      <MainContentWithRoute />
    </div>
  );
}

export default App;
