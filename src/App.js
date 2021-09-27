import React from 'react';
import Header from './components/Header';
import CreatePosts from './components/Posts/CreatePosts';


function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <CreatePosts />
      </div>
      

    </div>
  );
}

export default App;
