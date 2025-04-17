import Styled from "styled-components";
const OurPodcastWrpper = Styled.div`
    .our-podcast-main {
    background: linear-gradient(to right, #e4f0ff, #F2F7FE);
    padding: 2rem 1rem;
    }

    .our-podcast-main p {
    font-size: 16px;
    font-weight: 400;
    color:#535353;
    padding: 0 4rem;
    }

    .podcast-container{
    gap: 10px; 
    padding-inline: 2.5rem;
    }

    .podcast-video{
    width: 70%;
    }

    .podcast-video img {
    width: 100%;
    height:100%;
    object-fit: cover:
    }

    .comment-main{
    background-color:#FFFFFF;
    width:30%;
    border-radius: 9.74px;
    }

    .comment-header{
    border-bottom: 1px solid #E4E4E7;}
    
    .comment-icon{
    width: 10%;
    }

    .comment-title-main{
      width:90%;
    padding: 10px;

    .comment-title{
    font-size: 14px;
    font-weight: 500;}
    }
    .comment-paragraph{
    font-size: 12px;
    font-weight: 400;
    color: #111827;
    }

    .all-comments{
    height: 400px;
    overflow-y: scroll;
    margin-block: 20px;
    margin-inline: 8px;
    }
    .single-comment {
    padding: 6px;
    .profile-name{
    font-size: 17.05px;
    font-weight: 500;
    }

    .comment-time{
    font-size: 14.61px;
    font-weight: 400;
    color: #B4BBC6;
    }

    .comment-text{
     font-size: 14.61px;
    font-weight: 400;
    color: #272727;
    padding-top: 10px;
    }
    }

    .single-comment img{
    width: 41px;
    height: 41px;
    border-radius: 50%;
    }

    .comment-text-field{
    border-radius: 6.77px;
    border:2px solid  #B4BBC680;
    padding: 10px;
    margin: 8px;
    }

    .comment-text-field textarea {
    font-size: 17.42px;
    font-weight: 400;
    color: #9E9EA8;
    border:none;
    outline:none;
    }

    .comment-banner{
    background-color: #F8F8F8;
    border-radius: 4.84px;
    padding: 10px;
    }

      .comment-banner button{
      background-color: #BDBDBD;
      border-radius: 3.87px;
      font-size: 15.48px;
      font-weight: 500;
      border: none;
      padding: 10px;
      color: #ffffff;
      }

       .comment-banner button:hover{
      background-color: #0493FB;
      }

    .podcast-tiles{
    width: 100%;
    margin: 3rem 0rem 
    }

    .tile{
    width: 100%;
    padding-inline: 10px;}

    .tile img{
    width: 100%;
    }
   
@media (max-width: 1200px) {
 .podcast-video{
    width: 100%;
    }
  .comment-main{
    width:100%;
    }

    .podcast-tiles{
    width: 90%;
    margin: 1rem 0rem 
    }

     .tile{
    width: 50%;
    padding-inline: 10px;}

    
}

@media (max-width: 768px) {

   .podcast-container{
    padding-inline: 1rem;
    }

    .podcast-tiles{
    width: 100%;
    }

     .tile{
    width: 100%;
    padding-block: 10px;}

    
}
    
`;

export default OurPodcastWrpper;
