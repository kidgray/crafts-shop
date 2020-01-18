/* Import the function for combining reducers from react-redux */
import { combineReducers } from 'redux';

/* Import persistReducer function from redux-persist library */
import { persistReducer } from 'redux-persist';

/* Import localStorage object from the browser */
import storage from 'redux-persist/lib/storage';

/* Import User Reducer */
import { userReducer } from './user/user.reducer';

/* Import Cart Reducer */
import { cartReducer } from './cart/cart.reducer';

/* Import Directory Reducer */
import { directoryReducer } from './directory/directory.reducer';

/* Import Shop Reducer */
import { shopReducer } from './shop/shop.reducer';

/* JSON object that represents the possible configurations that
redux-persist should use */
const persistConfig = {
    key: 'root',
    storage: storage,
    /* This property contains the names of the reducers
    that should be persisted. If you want to persist cart
    information, such as cart items, for example, you can list
    the cart reducer here */
    whitelist: ['cart']
};

/* Create the Base Root Reducer that will be passed into the persistReducer()
function along with persistConfig */
const rootReducerBase = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer,
    directory: directoryReducer
});


/* persistReducer() takes a persistConfig and Reducer, and returns a modified version
of the Reducer with the persistConfig applied to it */
export const rootReducer = persistReducer(persistConfig, rootReducerBase);