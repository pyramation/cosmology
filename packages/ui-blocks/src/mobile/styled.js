import styled, { keyframes } from 'styled-components';

/////////////// CREATE PROJECT ////////////////////

export const MobBotNav1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 12px 20px;
  background-color: #fcfcfc;
  border-top: 1px solid #cccccc;
  position: fixed;
  width: 100%;
  bottom: 0;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const CreateProjectContainer = styled.div`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.13);
  width: 100%;
  max-width: 414px;
  height: 385px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: white;
  padding: 20px 20px;
  position: absolute;
  bottom: 0;
  z-index: 30;
  transform: ${props => (props.down ? 'translateY(390px)' : 'translateX(0)')};
  transition: all 0.3s ease-out;
`;

export const CreateProjectTop = styled.div`
  display: flex;
  padding-bottom: 25px;
`;

export const CreateProjectMid = styled.div`
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  padding: 25px 0;
`;

export const CreateProjectBot = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 25px;
`;
//////////////////////////////////////////////////////////

export const MobBotNav2 = styled.div`
  padding: 12px 20px;
  background-color: #fcfcfc;
  border-top: 1px solid #cccccc;
  position: fixed;
  width: 100%;

  bottom: 0;
`;

/* Mobile View Left Nav*/

export const MobileLeftNavContainer = styled.div`
  display: grid;
  min-width: 331px;
  max-width: 80vw;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: minmax(238.7px, 238.7px) calc(100% - 310.7px) minmax(
      72px,
      72px
    );

  border-right: 1px solid #ededf1;
  box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Hind', sans-serif;
  border: '1px solid black';
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 20;
  transform: ${props => (props.left ? 'translateX(-332px)' : 'translateX(0)')};
  transition: all 0.3s ease-out;
  @media screen and (max-width: 414px) {
    min-width: 260px;
  }
`;

export const MobileLeftNavTop = styled.div`
  align-self: center;
  justify-self: center;
  text-align: center;
  border-bottom: 1px solid #cccccc;
  width: 85%;
`;
export const MobileLeftNavMidbox = styled.div`
  display: grid;
  grid-template-columns: 12% 73%;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#EBF7FF' : 'white')};
`;
export const MobileLeftNavBottom = styled.div`
  display: grid;
  grid-template-columns: 12% 73%;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
  cursor: pointer;
`;

export const LeftChevron = styled.div`
  position: absolute;
  top: 30px;
  left: 25px;
`;

///////////Right Animate ///////////

export const MobileRightNavContainer = styled.div`
  min-width: 331px;
  max-width: 80vw;
  height: 100%;
  border-left: 1px solid #ededf1;
  box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  z-index: 20;
  transform: ${props => (props.right ? 'translateX(332px)' : 'translateX(0)')};
  transition: all 0.3s ease-out;
  @media screen and (max-width: 414px) {
    min-width: 260px;
  }
`;
export const MobRightNavTop = styled.div`
  width: 85%;
  border-bottom: 1px solid #ededf1;
  display: flex;
  justify-content: flex-end;
  padding-top: 21px;
  padding-bottom: 20px;
  margin-left: 7.5%;
`;
export const MobRightNavMid = styled.div`
  width: 85%;
  border-bottom: 1px solid #ededf1;
  padding: 20px 15px;
  margin-left: 7.5%;
`;
export const MobileRightNavMidIcon = styled.div`
  display: flex;
`;
export const MobRightNavBot = styled.div`
  margin-top: 5px;
`;
export const MobRightNavBotbox = styled.div`
  padding: 13px 0px;
  padding-left: 7.5%;
`;
/* Items Info */

export const DownloadButton = styled.div`
  height: 36px;
  width: 100%;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  color: #888888;
  font-weight: 500;
  display: flex;
  justify-self: center;
  align-items: center;
`;

export const ItemsInfoBot = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

///////////////////////////////////////////
export const MobileMainSectionNav1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const MobileMainSectionNav3 = styled.div``;

export const MobileMainSectionNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
`;

// @media screen and (min-width: 834px) {
//   display:none;
// }
