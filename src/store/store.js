
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from '../features/user/userSlice';
import TournamentReducer from '../features/tournaments/tournamentSlice';
import ForumReducer from '../features/forum/forumSlice';
import { userApi } from '../features/user/api';
import { TournamentApi } from '../features/tournaments/api';
import { ForumApi } from '../features/forum/api';
import { EventUploadApi } from '../features/EventUploads/api'
import registerMeatFishReducer from '../features/registerMeatFish/registerSlice';
import { RegisterMeatFishApi } from '../features/registerMeatFish/api';


const rootReducer = combineReducers({
  user: userReducer,
  tournament: TournamentReducer,
  forum: ForumReducer,
  registerMeatFish: registerMeatFishReducer,
  [userApi.reducerPath]: userApi.reducer,
  [TournamentApi.reducerPath]: TournamentApi.reducer,
  [ForumApi.reducerPath]: ForumApi.reducer,
  [EventUploadApi.reducerPath]: EventUploadApi.reducer,
  [RegisterMeatFishApi.reducerPath]: RegisterMeatFishApi.reducer,

});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(userApi.middleware).concat(TournamentApi.middleware).concat(ForumApi.middleware).concat(RegisterMeatFishApi.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
export default store;
