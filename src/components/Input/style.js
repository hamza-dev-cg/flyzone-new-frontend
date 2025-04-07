import styled from 'styled-components';

const InputWrapper = styled.div`
input{
  height:42px;
  padding: 0 16px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "24px")};
}
label{
  color:${({ theme }) => theme.colors.grayColor};
}

`
export default InputWrapper;