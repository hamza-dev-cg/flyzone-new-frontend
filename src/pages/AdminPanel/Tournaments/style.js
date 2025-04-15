import Styled from "styled-components";
const TournamentsWrapper = Styled.div`
    .caption{
      font-size:16px;
      color:#475467;
      margin-bottom:24px;
      display: inline-block;
    }
    .tournament-box{
      background-color:#F7FAFE;
      padding:16px;
      border:1px solid #E5E5E5;
      border-radius:12px;
      width: 100%;
      display: block;
      margin-bottom:16px;
      img{
        width:100%;
        max-width:100%
      }
      h2{
        font-size:20px;
        margin-top:16px;
        margin-bottom:16px;
        color:#1E1D1D;
      }
      p{
        font-size:14px;
        color:#403E3E;
        margin-bottom:16px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        min-height:120px
      }
      button{
        width:100%;
      }
    }
    .trash-icon{
      width: 40px;
      height:40px;
      border:1px solid #E5E5E5;
      border-radius:8px;
      padding:8px;
      display: flex;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      color:#ff0000
    }
    .delete-icon{
      background-color:#fff;
      width: 32px;
      height: 32px;
      border-radius:50px;
      display:flex;
      align-items:center;
      justify-content:center;
      right:24px;
      top:32px;
      color:#ff0000
    }

  `;

export default TournamentsWrapper;
