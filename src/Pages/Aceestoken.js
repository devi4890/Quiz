import React, { useState } from 'react';
import Navbar from './Navbar';

const App = () => {
  const [access_token, setAccessToken] = useState(true); // or false based on your logic

  return (
    <div>
      <Navbar access_token={access_token} />
      {/* Other components and content */}
    </div>
  );
};

export default App;
