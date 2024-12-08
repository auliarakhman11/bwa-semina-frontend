import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageSignin from './pages/singin'




function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <>Home</> } />
        <Route path='signin' element={ <PageSignin /> } />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
