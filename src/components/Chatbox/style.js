import Styled from "styled-components";
const ChatBoxWrpper = Styled.div`
 width: 40%;
@media (max-width : 1000px) {
width: 100%;
margin-bottom: 8px

}
.send-box {
  background-color: #F5F5F5;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: end;
  margin-top: 20px;
}

.chat-box {
  min-height : 47.5vh;
  background: #FFFFFF;
  width: 100%;
  border-radius: 12px;
  padding: 13.6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
  .chat-empty{
  width: 120px;
  }
 
  .empty-chat-box{
  height: 100%;}

  .chat-title{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 2px !important;
    color: #101010
  }

   .chat-text{
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 40px !important;}
  }

  .tab{
  color: #8F9099 !important;
  }

  .login-button{

  background-color: #0771EF !important;}

  .active{
  color: #EFF0FA !important;}

  .nav-pills{
  display: flex;
  flex-direction: row;
    }


@media (max-width: 1000px) {
.nav-pills{
  display: flex;
  flex-direction: column;
  width: 100%;
    }
  .nav-link{
  width: 100%;}
  .tab{
  width: 100%;
  }
    }

.chat-header-tabs {
    background-color: #F5F5F5;
    border-radius: 10.99px;
    padding: 4px !important;
  }
  
  /* Chat body */
  .chat-body {
    /* flex-grow: 1; */
    overflow-y: auto;
    height: 345px;
    padding-right: 4px;
  }



  .message{
  background-color: #0771EF33;
  border-radius: 10px;
  }
   .message-icons{
   width:20px,
   height:20px;
   }
  /* Chat message bubble */
  .chat-message {
    border-radius: 10px;
    font-size: 14px;
    max-width: 80%;
    word-break: break-word;
  }
  
  /* Time label */
  .time {
    font-size: 12px;
    color: #888;
    margin: 0 6px;
  }
  
  /* Send area */
  .chat-box textarea {
    padding: 8px 12px;
    font-size: 14px;
    flex-grow: 1;
  }
  
  .chat-box textarea:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }
  
  .chat-box button {
  border: none;
    background: transparent
  }
  
  /* Placeholder avatar size consistency */
  .chat-box .react-avatar {
    flex-shrink: 0;
  }
  
  /* Scrollbar cleanup (optional) */
  .chat-body::-webkit-scrollbar {
    width: 6px;
  }
  .chat-body::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .select-width {
    min-width: 100px;
  }

.form-control {
  border: none;
  resize: none;
  background-color: transparent
  
}`;
export default ChatBoxWrpper;
