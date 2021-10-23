import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import noteReducer from '../feature/note/note.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({noteReducer});

export type RootState = ReturnType<typeof appReducer>;

export default persistReducer(persistConfig, appReducer);
