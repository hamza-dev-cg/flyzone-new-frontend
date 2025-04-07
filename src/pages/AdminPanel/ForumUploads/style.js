import Styled from "styled-components";
const FormWrapper = Styled.div`
    background-color:${({ theme }) => theme.colors.whiteColor};
    width: 100%;
    padding: 24px;
    border-radius:12px;
    .textarea-height{
      min-height:200px;
      resize:none;
    }
  `

export default FormWrapper;
