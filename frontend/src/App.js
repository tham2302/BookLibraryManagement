import {Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Admin from './admin/Admin';
import AdminLogin from './admin/AdminLogin';
import AdminAdd from './admin/AddBook';



import Client from './client/Client';
import Product from './client/Product';
import Products from './client/Products';
import Cart from './client/Cart';

function App() {

  return (
    <div id="Main">
      <Routes>
        <Route path='/admin/*' element={<Admin><Admin /></Admin>} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/add' element={<AdminAdd />} />
        <Route path='/admin/add/:id' element={<AdminAdd />} />

        <Route path='/*' element={ <Client><Products /></Client>} />
        <Route path='/product/:id' element={<Client><Product /></Client>} />
        <Route path='/cart' element={<Client><Cart /></Client>} />
      </Routes>
    </div>
  );
}

export default App;
