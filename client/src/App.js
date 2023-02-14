import { useEffect} from "react";
import { useSelector ,useDispatch} from "react-redux";
import AddSong from "./components/AddSong/index.js";
import Form from "./components/Form/index.js";
import { 
  StyledApp ,
  StyledContainer,
  StyledSongs,
} from "./style.js";
function App() {
  const {songs,loading}=useSelector(state=>state.songs);
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch({type:'getSongs'});
  }, []);
  console.log(songs)

  return (
    <StyledApp>
      <h1>Songs List</h1>
      <hr/>
      <StyledContainer>
       {
        loading?<p>Loading...</p>:(
          songs.map((song)=>{
            return <StyledSongs key={song.id}>
                <Form title={song.title} id={song.id}/>
            </StyledSongs>
          })
        )}
      </StyledContainer>
      <AddSong/>
    </StyledApp>
  );
}

export default App;
