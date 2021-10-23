import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({});

export type RootState = ReturnType<typeof appReducer>;

export default persistReducer(persistConfig, appReducer);
