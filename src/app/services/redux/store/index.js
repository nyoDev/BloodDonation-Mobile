import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from 'services/redux/reducer';



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  authenticationState: ['authenticationState'],
  userInfo: ['userInfo']
};


const rootReducer = combineReducers({
  reducer: persistReducer(persistConfig, reducer)
});

// const configureStore = () => {
//   return createStore(reducer);
// };


//export default configureStore;

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
