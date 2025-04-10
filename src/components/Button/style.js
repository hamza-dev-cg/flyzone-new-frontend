import Styled from "styled-components";
import Button from "react-bootstrap/Button";
const ButtonWrapper = Styled(Button)`
    font-size: ${({ theme }) => theme.fonts.baseFontSize};
    width: ${(props) => (props.width ? props.width : "")};
    height: ${(props) => (props.height ? props.height : "")};
    font-weight:${({ theme }) => theme.fontWeight.semiBold};
    padding:6px 12px;
    border-radius:6px;
    &.btn-primary{
      background:${({ theme }) => theme.colors.primaryColor};

    }
    &.outlined{
      border:1px solid ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.primaryColor};
      background:transparent;
      &:hover{
        border:1px solid ${({ theme }) => theme.colors.primaryColor};
        color: ${({ theme }) => theme.colors.primaryColor};
        background-color:transparent ;
      }
    }
    &.text-button{
      background-color:transparent;
      border:none;
      color: ${({ theme }) => theme.colors.primaryColor};

    }
    &.icon-button{
      padding:6px;
      svg{
      font-size:30px;
    }
    }
   

  `

export default ButtonWrapper;
