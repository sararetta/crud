import React,{useState} from "react";
import { Button } from "../Button";
import { StyledAddSong, StyledAddSongInput } from "./style";
import { useDispatch} from "react-redux";
function AddSong({}) {
    const dispatch=useDispatch();
    const [value, setValue] = useState('')

  return (
    <StyledAddSong>
        <StyledAddSongInput>
            <input type={'text'} value={value} onChange={(e)=>{
                setValue(e.target.value)
            }}/>

        </StyledAddSongInput>
      <Button
        label={"Add Song"}
        onClick={() => {
          dispatch({ type: "createSong",title:value });
        }}
      />
    </StyledAddSong>
  );
}

export default AddSong;
