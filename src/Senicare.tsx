import React, { useEffect } from 'react';
import './Senicare.css';
import Auth from 'src/views/Auth';
import { Route, Routes, useNavigate } from 'react-router';
import MainLayout from './layouts/MainLayout';

// component: // root path 컴포넌트 //
function Index() {                   // 마운트 됐을 때 - 경로 이동       
  
  // function: 네비게이터 함수 //
  const navigator = useNavigate();
  
  // effect: 마운트 시 경로 이동 ettect //
  useEffect(() => {
    // TODO: /auth로 경로 이동        
  }, []);                            // []생략 가능

  // render: Senicare 컴포넌트 렌더링 // 
  return (
    <></>
  );
}

// component: Senicare 컴포넌트 //
export default function Senicare() {

  // render: Senicare 컴포넌트 렌더링 //
  return (
    <Routes>
      <Route index element={<Index/>} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/cs' element={<MainLayout />} > 
        <Route index element={<>고객 리스트 보기</>} />
        <Route path='write' element={<>고객 등록</>} />
        <Route path='customNumber' element={<>고객 정보 보기</>} />
        <Route path=':customNumber/update' element={<>고객 정보 수정</>} />
      </Route>
      <Route path='/mm'>
        <Route index element={<MainLayout />} />
      </Route>
      <Route path='/hr'>
        <Route index element={<></>} />
        <Route path=':userId' element={<></>} />
        <Route path=':userId/update' element={<></>} />
        </Route>
    </Routes>
  );
}