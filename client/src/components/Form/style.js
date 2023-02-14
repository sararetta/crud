import styled from "@emotion/styled";

export const StyledForm = styled.div`
  padding: 40px;
  background-color: red;
  padding: 0 15px;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
`;
export const StyledTitle = styled.div`
  h2 {
    font-size: 20px;
    text-transform: capitalize;
    text-align: left;
  }
  input {
    padding: 15px;
    border: none;
    outline: none;
    font-size: 18px;
  }
`;
export const StyledContainerAction = styled.div`
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const StyledAddSongInput = styled.div`
  cursor: pointer;
  width: 70%;
  input {
    width: 90%;
    padding: 11px;
    border: 1px solid black;
    outline: none;
  }
`;
