import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Products from './components/Products';
import Cart from './components/Cart';

const App = () => (
  <>
    <GlobalStyles />
    <div>
      <header>Learn React</header>
    </div>
    <Products />
    <Cart />
  </>
);

export default App;
