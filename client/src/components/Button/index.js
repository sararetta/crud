import {StyledButton, StyledSecondaryButton,} from "./style.js";

export const Button = ({label, onClick}) => {

    return (
        <StyledButton onClick={onClick}>
            {label}
        </StyledButton>
    );
};

export const SecondaryButton = ({label, onClick}) => {
    return (
        <StyledSecondaryButton onClick={onClick}>
            {label}
        </StyledSecondaryButton>
    );
};
