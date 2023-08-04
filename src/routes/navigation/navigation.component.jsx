import {Fragment} from 'react';
import {Outlet} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {selectIsCartOpen} from '../../store/cart/cart.selector';
import {selectCurrentUser} from '../../store/user/user.selector';
import {signOutUserAsync} from '../../store/user/user.action';

import {ReactComponent as Logo} from '../../assets/logo.svg';

import {LogoContainer, NavigationContainer, NavLink, NavLinks,} from './navigation.styles';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

    const signOutUser = () => dispatch(signOutUserAsync());

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo className='logo'/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {currentUser ? (
                        <NavLink as='span' onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    )}
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
