import React, { useState, useEffect } from "react";
import { StyledForm, StyledTitle,StyledContainerAction } from "./style";
import { useDispatch } from "react-redux";
import { SecondaryButton } from "../Button";
function Form({ title,id }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setValue(title);
  }, []);

  return (
    <StyledForm>
      <StyledTitle>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </StyledTitle>
      <StyledContainerAction>
        <SecondaryButton
          label={"Edit"}
          onClick={() => {
            dispatch({ type: "updateSong", id: id,title:value });
          }}
        />
        <SecondaryButton
          label={"Delete"}
          onClick={() => {
            dispatch({ type: "deleteSong", id: id });
          }}
        />
      </StyledContainerAction>
    </StyledForm>
  );
}

export default Form;
