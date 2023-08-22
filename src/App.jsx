import * as React from 'react';
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import Content from './Content';


function App(){
  return (
    <div>
      <Header/>
      <Employees/>
      <Footer/>
    </div>
  );
}

export default App;
