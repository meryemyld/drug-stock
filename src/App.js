import React, {useState} from "react";
import Component1 from './Component1';
import { MyTable } from "./MyTable";
import Navbar1 from './Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'jquery/dist/jquery.min.js';
import { Button, Navbar } from 'reactstrap';
import { Col, Row, Container } from 'reactstrap';






function App() {

  let a={ id:"1", name:"meryem", surname:"yildiz", age:"24", mail:"meryemyld"}
  let b={ id:"2", name:"emre", surname:"tek", age:"28", mail:"emretek"}

  return (
    <div className="App">
      <Navbar1/>
      <br/><br/> 
      <Container>
      
      <br/> <br/> 
      
      <MyTable/>
      <br/> <br/> <br/> <br/> <br/> <br/> 
     
     
      
      </Container>
    </div>
  );
}

export default App;
