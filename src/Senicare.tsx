import React from 'react';
import './Senicare.css';
import Auth from 'src/views/Auth';
import { Route, Routes } from 'react-router';

export default function Senicare() {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
    </Routes>
  );
}