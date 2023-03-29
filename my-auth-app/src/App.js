import React, { useState, useEffect } from 'react';
import './App.css';
import Auth from './Auth';
import firebase from './firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
