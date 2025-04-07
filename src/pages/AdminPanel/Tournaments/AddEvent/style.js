import Styled from "styled-components";
const AddEventWrapper = Styled.div`
  .event-box{
      background: #F9F9F9;
      padding: 20px;
      border-radius:8px;
      margin:16px 0;
      .info-box{
        h5{
          font-size:16px;
          font-weight:500;
          color:#1E1D1D;
          margin-bottom:16px;
        }
      }
  }
  .upload-box{
    border:1px dashed #2563EB;
    border-radius:4px;
    font-size:14px;
    background: #F9F9F9;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 8px;
    height: 253px;
    max-height: 253px;
    .choose-file{
      color:#2563EB;
      text-decoration:underline;
    }
  }
  .action-box{
    font-size:14px;
    color:#344054;
    font-weight:500;
    .text-underline{
      text-decoration:underline;
      cursor:pointer;
    }
  }
  .add-days{
    background:#fff;
    border:1px solid #D0D5DD;
    font-weight:500;
  }
  .clock-icon{
    position: absolute;
    right: 9px;
    top: 33px;
    color:#403E3E;
    font-size:12px

  }
  .add-section-button{
    border:1px solid #D0D5DD;
    font-weight:500;
    white-space:nowrap;
  }
  .add-divider{
    position:relative;
    display:flex;
    align-items:center;
  }
  .add-divider-left{
    width: 50%;
    background-color: #c0c0c0;
    height: 0.5px;
    margin-right: 11px;

  }
  .add-divider-right{
    width: 50%;
    background-color: #c0c0c0;
    height: 0.5px;
    margin-left: 11px;

  }

  `
  const InputWrapper = Styled.div`
        margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "16px")};
        width:100%;
        position: relative;
        label{
          font-size:14px;
          color:#403E3E;
          margin-bottom:4px;
        }
        input{
          font-size:12px;
          width:100%
        }
        textarea{
          resize:none;
          font-size:12px;
          color:#403E3E;
        }
        input::placeholder{
          font-size:12px;
        }

  `

export  {AddEventWrapper,InputWrapper};
