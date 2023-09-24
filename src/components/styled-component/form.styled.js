import styled from '@emotion/styled';

export const FormAddStyle = styled.form`
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: flex-end;
    `  
;

export const LabelStyle = styled.label`
    display: flex;
    gap: 20px;
`;

export const InputStyle = styled.input`
    padding: 10px;
    font-size: 20px;
    border: none;
    outline: transparent;
    background-color: beige;
    border-radius: 10px;

    &:focus,:hover {
    scale: 1.01;
    cursor: pointer;
    }

    &::placeholder {
        text-align: center;
        font-size: 15px;
    }
`;

export const ButtonStyle = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  background-color: beige;

    &:hover,:focus {
        scale: 1.1;
    }
`;