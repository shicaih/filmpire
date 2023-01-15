import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

import x from './styles';

const App = () => {
  const Classes = x();
  console.log('placeholder');
  return (
    <div className={Classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={Classes.content}>
        <div className={Classes.toolBar} />
        <Routes>
          <Route path="/" element=<Movies /> />
          <Route path="/movies/:id" element=<MovieInformation /> />
          <Route path="/actors/:id" element=<Actors /> />
          <Route path="/profile/:id" element=<Profile /> />
        </Routes>
      </main>
    </div>
  );
};

export default App;
