import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/singin';
import DashboardPage from './pages/dashboard';
import CategoriesPage from './pages/categories';
import CategoriesPageCreate from './pages/categories/create';
import CategoriesPageEdit from './pages/categories/edit';




function App() {
  return (    
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={ <>Home</> } /> */}
        <Route path='signin' element={ <SigninPage /> } />
        <Route path='/' element={ <DashboardPage /> } />
        <Route path='/categories' element={ <CategoriesPage /> } />
        <Route path='/categories/create' element={ <CategoriesPageCreate /> } />
        <Route path='/categories/edit/:id' element={ <CategoriesPageEdit /> } />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
