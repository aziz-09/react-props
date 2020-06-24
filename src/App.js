import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile/profile';




const user = {
  fullname:"Jhon",
  bio:"Hello",
  profession:"Doctor",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4jafGrWtl7NSZik3H9pjjiWPETwayCy6PWg&usqp=CAU"
}

function App() {
  return (
    <div className="App">
<Profile x={user} />

    </div>
  );
}

export default App;
