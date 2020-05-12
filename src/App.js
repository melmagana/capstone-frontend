import React from 'react';
import './App.css';
import RegisterLoginForm from './RegisterLoginForm'

function App() {
   console.log(process.env)
   return (
      <div className="App">
         Hello, World! 
         <RegisterLoginForm />
      </div>
   );
}

export default App;
