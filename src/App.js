import './App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import List from './pages/List';
import Update from './pages/Update';
import Write from './pages/Write';
import TodoContext from './todoContext';


function App() {
  return (
    <HashRouter>
      <TodoContext>
        <Routes>
          <Route path='/' element={<List />}></Route>
          <Route path='/write' element={<Write />}></Route>
          <Route path='/update' element={<Update />}></Route>
        </Routes>
      </TodoContext>
    </HashRouter>
  );
}

export default App;
