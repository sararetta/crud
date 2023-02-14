import { call, put, takeEvery } from 'redux-saga/effects'
import { getSongs,updateSong,deleteSong,createSong } from './state.js';
function* fetchSongs() {
     try{ const songs = yield call(()=>fetch('https://crudaddis.onrender.com/songs'));
     const formatedSongs= yield songs.json();
     yield put(getSongs(formatedSongs.slice(0,5)));
    } catch (error) {
        console.log(error)
      }
   
}
function* fetchCreateSong(action) {
  try{ const songs = yield call(()=>fetch(`https://crudaddis.onrender.com/createSong`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: action.title,
    }),
  }));
  const formatedSongs= yield songs.json();
  yield put(createSong(formatedSongs));
 } catch (error) {
     console.log(error)
   }

}
function* fetchUpdateSong(action) {
  try{ const songs = yield call(()=>fetch(`https://crudaddis.onrender.com/songs/${action.id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: action.title
    }),
  }));
  const formatedSongs= yield songs.json();
  yield put(updateSong(formatedSongs));
 } catch (error) {
     console.log(error)
   }

}
function* fetchDeleteSong(action) {
  try{ const songs = yield call(()=>fetch(`https://crudaddis.onrender.com/songs/${action.id}`,{
    method: 'DELETE',
  }));
  const formatedSongs= yield songs.json();
  yield put(deleteSong(formatedSongs));
 } catch (error) {
     console.log(error)
   }

}

function* songSaga() {
  yield takeEvery("getSongs", fetchSongs);
  yield takeEvery("updateSong", fetchUpdateSong);
  yield takeEvery("deleteSong", fetchDeleteSong);
  yield takeEvery("createSong", fetchCreateSong);
  
}



export default songSaga;