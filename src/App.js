import React, { useState } from 'react';
import './App.css';
import Parent from './components/Parent';
import TextInput from './components/TextInput';
import BadParent from './components/BadParent';
import Student from './components/Student';
import Input from './components/Input';

function App() {
  return (
    <div>
      {/* <Parent /> */}
      {/* <Parent></Parent> */}
      <Input></Input>
      <BadParent></BadParent>
      <Student></Student>


    </div>
  );
}

export default App;