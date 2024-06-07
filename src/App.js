import logo from './logo.svg';
import './App.css';
import { AddStudent } from './components/AddStudent';
import { SearchStudent } from './components/SearchStudent';
import { StudentDelete } from './components/StudentDelete';
import { ViewStudent } from './components/ViewStudent';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={(<AddStudent />)}/>
      <Route path='/search'element={(<SearchStudent />)}/>
      <Route path='/delete'element={(<StudentDelete />)}/>
      <Route path='/viewall'element={(<ViewStudent />)}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
