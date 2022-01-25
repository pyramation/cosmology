import styled from 'styled-components';

/* Tab Nav*/

export const TabNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Hind', sans-serif;
  border: '1px solid black';
  width: 110px;
  height: 100%;
  min-height: 100vh;
  box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.1);
`;
export const TabNavBox = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${props => (props.active ? '#EBF7FF' : 'white')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* Left Nav One*/
export const LeftNav = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 19vw;
  max-width: 20vw;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: minmax(238.7px, 238.7px) calc(100% - 310.7px) minmax(
      72px,
      72px
    );
  border-right: 1px solid #ededf1;
  box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.1);
  font: 'Hind', sans-serif;
  border: '1px solid black';

  @media screen and (max-width: 1112px) {
    min-width: 25vw;
  }
`;
export const LeftNavTop = styled.div`
  align-self: center;
  justify-self: center;
  text-align: center;
  border-bottom: 1px solid #cccccc;
  width: 85%;
`;
export const LeftNavMidbox = styled.div`
  display: grid;
  grid-template-columns: 12% 73%;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#EBF7FF' : 'white')};

  @media screen and (max-width: 1112px) {
    grid-template-columns: 18% 65%;
  }
`;
export const LeftNavBottom = styled.div`
  display: grid;
  grid-template-columns: 12% 73%;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
  cursor: pointer;

  @media screen and (max-width: 1112px) {
    grid-template-columns: 18% 65%;
  }
`;

/*Left Nav Two*/

export const NavTwoTop = styled.div`
  width: 85%;
  margin-left: 7.5%;
  margin-top: 30px;
`;
export const NavTwoTop_1 = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  justify-content: center;
  margin-left: 7.5%;
`;
export const NavTwoTop_2 = styled.div`
  margin-top: 20px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  padding: 20px 0;
`;
export const NavIcon_Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const NavTwoTop_3 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-top: 20px;
`;
export const NavTwoTop_Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavTwoTop_Right = styled.div``;
/* Left Nav Three */

export const LeftNav_Button = styled.button`
  width: 100%;
  height: 36px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  color: #888888;
`;
export const NavThreeTop = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 7.5%;
  border-bottom: 1px solid #cccccc;
`;
export const NavThreeTop_One = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const NavThreeTop_Two = styled.div``;
export const NavThreeTop_Three = styled.div`
  display: flex;
  margin: 25px 0;
`;
export const TopNavPhoto = styled.img`
  box-sizing: content-box;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid #c8c8c8;
  background-color: #c8c8c8;

  &:not(:last-child) {
    margin-right: -5px;
  }
`;
export const NavThreeTop_Four = styled.div``;

// Top Nav */

export const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  background-color: #fcfcfc;
  padding-bottom: 8px;
  border-bottom: 1px solid #c8c8c8;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const TopNavTwo = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  background-color: #fcfcfc;
  padding-bottom: 8px;
  border-bottom: 1px solid #c8c8c8;
  justify-content: space-between;
  align-items: center;
`;

export const MobTopNav = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  background-color: #fcfcfc;
  padding-bottom: 8px;
  border-bottom: 1px solid #c8c8c8;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 414px) {
    display: none;
  }
`;
export const TopNavLeft = styled.div`
  display: grid;
  grid-template-columns: 17% 5% 28%;
  @media screen and (max-width: 414px) {
    grid-template-columns: 15% 4% 28%;
  }
`;

export const MobTopNavLeft = styled.div`
  display: grid;
  grid-template-columns: 17% 4% 28%;
`;
export const TopNavLeft_Box = styled.div`
  border-right: 1px solid #c8c8c8;
  height: 35px;
  padding-right: 13px;
  padding-left: 10px;
`;
export const TopNavRight = styled.div`
  display: grid;
  grid-template-columns: 13px 35px 37px;
`;

export const MobTopNavRight = styled.div`
  display: grid;
  grid-template-columns: 14px 23px 35px;
`;
export const Border = styled.div`
  border-left: 1px solid #c8c8c8;
  width: 1px;
  padding: 0 10px;
`;
export const MarginTop = styled.div`
  margin-top: 10px;
`;
export const SettingsContainer = styled.div`
  width: 100%;
  background-color: white;
  border: 1.5px solid #ededf1;
  border-radius: 5px;
  margin-top: 10px;

  font-weight: 500;
`;
export const SettingsTitle = styled.div`
  padding: 15px 20px;
  border-bottom: 2px solid #c8c8c8;
`;
export const SettingsIcon_Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 20px;
  flex-wrap: wrap;
`;
export const SettingsIcon = styled.div`
  width: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  padding: 10px 5px 19px 5px;

  border-radius: 5px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
`;
export const Active = styled.div`
  border: 1.5px solid #cccccc;
  background-color: #ebf7ff;
`;
