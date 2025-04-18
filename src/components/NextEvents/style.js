import Styled from "styled-components";
const NextEventsWrpper = Styled.div`
.event-main{
width:33.33%;

}
.event-card {
 background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  position: relative;
  border: 0.8px solid #CACACA;
  padding: 10px;
}

.fly-logo{
position: absolute;
right: 10px;
bottom: 0px;
height: 100%;
padding-block: 14px;
}
.fly-logo img{
object-fit: cover;
height: 100%;

}

.event-buttons{
width:100%;
margin-top: 4px;
}
.event-image {
  width:150px;
object-fit: cover;
}
}

@media (max-width: 1000px) {
  .event-card {
   background-position: right;
  background-repeat: no-repeat;
  background-size: contain !important;
    }
  }

  @media (max-width: 550px) {
  .event-card {
   background-position: right;
  background-repeat: no-repeat;
  background-size: cover !important;
    }
  }
 

`;

export default NextEventsWrpper;
