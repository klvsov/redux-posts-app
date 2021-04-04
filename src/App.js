import React from 'react';

import { Posts } from './components/Posts/Posts';
import { AddPost } from './components/AddPost/AddPost';

const App = () => {
  return (
    <div className="App container mt-5">
      <AddPost />
      <hr style={{ color: '#fff' }} />
      <Posts />
    </div>
  );
};

export default App;
