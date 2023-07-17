import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Route, Routes, useNavigate} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import {checkUserSession} from './store/user/user.action';
import {selectCurrentUser} from "./store/user/user.selector";

export const currencyFormatter = (number,locale,currency) => {
  return number?.toLocaleString(locale!=null?locale:"vn-VN", { style: 'currency', currency: currency!=null?currency:"VND" })
}

const App = () => {
  const navi = useNavigate()
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkUserSession());
  // }, []);

  useEffect(() => {
    navi("/")
  }, [currentUser]);


  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
