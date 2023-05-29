import {createStore,applyMiddleware,compose} from 'redux';
import {persistStore,persistReducer} from 'redux-persist/es';
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";



import rootReducer from './root-reducer';


const persistConfig={
    key:'root',
    storage,
    blacklist:['resume']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);
const composedEhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer,undefined,composedEhancers);
export const persistor = persistStore(store);



