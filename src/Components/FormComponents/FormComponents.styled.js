import styled from '@emotion/styled';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 5px;
`;

const InputType = styled.label`
  margin-bottom: 10px;
  &:hover,
  &:active {
    border-color: #7cb1ec;
  }
`;

const InputText = styled.p`
  margin-bottom: 5px;
`;

export { InputType, InputText, FormStyled };
