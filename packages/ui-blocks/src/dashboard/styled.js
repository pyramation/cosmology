import styled from 'styled-components';

/* Project Page*/

export const DashboardContainer = styled.div``;
export const BelowTabHidden = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const AboveMobHidden = styled.div`
  @media screen and (min-width: 601px) {
    display: none;
  }
`;
export const OnlyDesktop = styled.div`
  @media screen and (max-width: 1112px) {
    display: none;
  }
`;
export const OnlyTab = styled.div`
  @media screen and (min-width: 1113px) {
    display: none;
  }
`;
export const TabContentHidden = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const LeftNav = styled.div`
  display: grid;
  min-height: 100vh;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 31% 59% 10%;
  border-right: 1px solid #ededf1;
  box-shadow: 0px 2.5px 5px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-family: 'Hind', sans-serif;
`;
export const LeftNavTop = styled.div`
  align-self: center;
  justify-self: center;
  text-align: center;
  border-bottom: 2px solid #cccccc;
  width: 85%;
`;
export const LeftNavMidbox = styled.div`
  display: grid;
  grid-template-columns: 15% 70%;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
  cursor: pointer;
  background-color: ${props => (props.blue ? '#EBF7FF' : 'white')};

  @media screen and (max-width: 834px) {
    grid-template-columns: 19% 65%;
  }
`;
export const LeftNavBottom = styled.div`
  display: grid;
  grid-template-columns: 15% 70%;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
  cursor: pointer;
`;
export const Main = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;

  @media screen and (max-width: 1112px) {
    grid-template-columns: 110px calc(100% - 110px);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr;
    margin-bottom: 25px;
  }
`;
export const MainSection = styled.div`
  padding-left: 25px;
  padding-right: 15px;
  background-color: #fcfcfc;
  height: 100%;
  padding-bottom: 20px;
  overflow: hidden;
  @media screen and (max-width: 834px) {
    margin-bottom: 25px;
  }
`;
export const MainSectionNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
  @media screen and (max-width: 1112px) {
    display: none;
  }
`;

export const MediaMainSectionNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
  @media screen and (max-width: 834px) {
    display: none;
  }
`;
export const MainSectionNav1 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  font-weight: 500;
`;
export const MainSectionNav2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
`;
export const MainSectionNav3 = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 704px;
  @media screen and (max-width: 1112px) {
    max-width: 500px;
  }
`;
/* TAB Main Section Nav*/

export const TabMainSectionNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;

  @media screen and (min-width: 1113px) {
    display: none;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const TabMainSectionNav1 = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  font-weight: 500;
`;
export const TabMainSectionNav2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
`;
export const TabMainSectionNav3 = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 704px;
  @media screen and (max-width: 1112px) {
    max-width: 500px;
  }
`;
export const MobileMainSectionNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
  @media screen and (min-width: 601px) {
    display: none;
  }
`;
export const MobileMainSectionNav1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
`;
export const MobileMainSectionNav3 = styled.div``;
export const MainSectionMain = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;

  @media screen and (max-width: 834px) {
    justify-content: center;
  }
`;

export const PaginationComp = styled.div`
  position: fixed;
  bottom: 30px;
  left: 50%;

  @media screen and (max-width: 1112px) {
    left: 37%;
  }
  @media screen and (max-width: 834px) {
    bottom: 80px;
    left: 95px;
  }
  @media screen and (max-width: 414px) {
    left: 47px;
  }
`;

export const SettingsSectionNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;

  @media screen and (max-width: 1112px) {
    grid-template-columns: 10% 10% 80%;
  }
`;

export const SettingsSectionNav1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-self: center;
  font-weight: 500;
`;

export const SettingsSectionNav2 = styled.div``;

export const SettingsMainSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

/*------------------Mobile View(Project Page)---------------------*/

/* Settings Page*/

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
  cursor: pointer;
  border: 1.2px solid ${props => (props.active ? '#CCCCCC' : 'white')};
  background-color: ${props => (props.active ? '#EBF7FF' : 'white')};
`;

export const SettingsContainer = styled.div`
  width: 100%;
  background-color: white;
  border: 1.5px solid #ededf1;
  border-radius: 5px;
  margin-top: 10px;
`;

export const SettingsTitle = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #c8c8c8;
`;

export const SettingsIcon_Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 20px;
  flex-wrap: wrap;

  @media screen and (max-width: 834px) {
    justify-content: space-evenly;
  }
`;

/* Profile Page */

export const LeftNav_Button = styled.button`
  width: 100%;
  height: 36px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  color: #888888;
`;
export const ProfileTopSection = styled.div`
  display: grid;
  grid-template-columns: 49.5% 49.5%;
  grid-column-gap: 1%;
  @media screen and (max-width: 834px) {
    grid-template-columns: 100%;
  }
`;
export const ProfileContent = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  line-height: 24px;
  font-family: 'Hind', sans-serif;
  text-align: 'center';
  @media screen and (max-width: 1112px) {
    padding-top: 8px;
  }

  @media screen and (max-width: 834px) {
    padding-top: 20px;
  }
`;

export const ProfileIcon_Box = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 16px;

  @media screen and (min-width: 834px) and (max-width: 1112px) {
    padding-right: 0px;
    padding-left: 0px;
  }

  @media screen and (max-width: 834px) {
    padding-left: 0px;
  }
`;

export const ProfileProjects = styled.div``;

export const ProfileIcon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
  font-weight: 400;

  @media screen and (max-width: 1112px) {
    margin: 0px 15px;
  }
`;
export const ProfileProjectsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #c8c8c8;
  }
`;
export const ProfileProjectsLeft = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProfileProject_Imgbox = styled.div`
  width: 90px;
  border-radius: 5px;
  overflow: hidden;
`;
export const ProfileImgBox = styled.div`
  width: 50px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-self: center;
  align-items: center;
`;
export const ProfileProjectImg = styled.img`
  object-fit: cover;
  border-radius: 5px;
`;
export const MemberTag = styled.div`
  background-color: #208fdf;
  border: 1px solid #1a72b2;
  padding: 2px 7px;
  border-radius: 5px;
  margin-right: 20px;
  min-width: 80px;
`;
export const ProfileMemberRight = styled.div`
  display: flex;
  flex-direction: row;
`;

/* Collaborators Page */

export const PlusButton = styled.button`
  font-size: 30px;
  border: 1.3px solid #c8c8c8;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  padding-top: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  color: #888888;
  font-weight: 400;
`;
export const CollaboratorContainer = styled.div`
  padding: 25px 20px;
`;

export const Underline = styled.span`
  text-decoration: underline;
`;

/* Media Page */

export const MediaSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;

  @media screen and (max-width: 834px) {
    display: flex;
    flex-direction: column;
  }
`;
export const MediaSectionLeft = styled.div`
  border-right: 1px solid #cccccc;
  height: 100%;
  padding-right: 20px;
  padding-top: 20px;
  @media screen and (max-width: 834px) {
    border: none;
  }
`;
export const MediaSectionLeftTop = styled.div`
  border: 2px dashed #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border-radius: 5px;
`;

export const MediaButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 10px;
  margin: 20px 0;
  width: 350px;

  @media screen and (max-width: 834px) {
    grid-template-columns: 153px 151px;
    justify-content: center;
  }
  @media screen and (max-width: 414px) {
    grid-template-columns: 50%;
    grid-row-gap: 10px;
  }
`;

export const MediaSectionRight = styled.div`
  @media screen and (max-width: 834px) {
    display: none;
  }
`;

export const MediaSectionRightTop = styled.div`
  margin: 20px 0px;
  margin-left: 20px;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 10px;
`;
export const MediaTile = styled.div`
  height: 180px;
  width: 180px;
  display: grid;
  grid-template-rows: 65% 35%;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 5px;
  overflow: hidden;
  font-weight: 450;
  margin: 10px 7px;
`;
export const MediaSectionLeftMid = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const MediaSectionLeftBot = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 414px) {
    justify-content: center;
    display: none;
  }
`;

export const MediaSectionRightBot = styled.div``;

export const MediaTileImg = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 5px;
`;
export const MediaTileVideo = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const MediaTileTextbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 8px;
`;

export const MediaTileImgbox = styled.div`
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DownloadButton = styled.div`
  height: 36px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  color: #888888;

  display: flex;
  justify-self: center;
  align-items: center;
`;

export const MobileMediaSectionLeftBot = styled.div`
  border: 1px solid #cccccc;
  margin: 10px 0px;
  border-radius: 5px;
  background-color: white;

  @media screen and (min-width: 414px) {
    display: none;
  }
`;
export const MobileMediaTileVideo = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
export const MobileMediaTileImgbox = styled.div`
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 0px;
  height: 65px;
`;
export const MobileMediaTileVidbox = styled.div`
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 69px;
  height: 61px;
`;
export const MobileMediaTileImg = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 5px;
  margin: 5px 0px;
`;
export const MobileMediaTileTextbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 7px;
`;
export const MobileMediaLeftBox = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 5px 10px;

  &:not(:last-child) {
    border-bottom: 1px solid #c8c8c8;
  }
`;

//////////////////////////////////
/* Mobile */

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

/* Settings Two Page */

export const SettingsTwoMain = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2%;

  @media screen and (max-width: 834px) {
    display: flex;
    flex-direction: column;
  }
`;
export const SettingsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  font-weight: 400;
`;
export const SettingsContentL = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SettingsContentTwo = styled.div`
  padding: 15px 20px;
`;
export const FaviconTop = styled.div`
  padding-top: 20px;

  @media screen and (min-width: 1112px) {
    display: grid;
    grid-template-columns: 125px calc(100% - 150px);
    grid-column-gap: 25px;
    padding-top: 20px;
  }
`;
export const FaviconTopbox = styled.div`
  display: grid;
  grid-template-columns: 125px calc(100% - 150px);
  grid-column-gap: 25px;
  padding-top: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #888888;

  @media screen and (min-width: 1112px) {
    border: none;
  }
`;

export const FaviconTextbox1 = styled.div`
  @media screen and (min-width: 1112px) {
    display: none;
  }
`;
export const FaviconTextbox2 = styled.div`
  border-bottom: 1px solid #888888;
  padding-bottom: 10px;

  @media screen and (max-width: 1112px) {
    display: none;
  }
`;
export const FaviconContent = styled.div`
  padding: 10px 15px;
`;
export const FaviconBottom = styled.div`
  display: grid;
  grid-template-columns: 125px calc(100% - 150px);
  grid-column-gap: 25px;
  padding-top: 20px;

  @media screen and (max-width: 1112px) {
    display: flex;
    flex-direction: column;
  }
`;
export const FaviconBottomrTop = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #888888;
`;
export const FaviconBottomrBot = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-row-gap: 10px;

  @media screen and (max-width: 1112px) {
    display: flex;
    flex-direction: column;
  }
`;
export const FaviconImgbox = styled.div`
  height: 125px;
  width: 125px;
  border-radius: 5px;
  overflow: hidden;
`;
export const FaviconImg = styled.img`
  background: cover;
`;
export const PublishedContainer = styled.div`
  padding: 20px 20px;
`;
export const ShareContainer = styled.div`
  padding: 20px 20px;
`;
export const LargeTile = styled.div`
  margin-top: 20px;
  border-radius: 5px;
  border: 1.5px solid #c8c8c8;
  overflow: hidden;
`;
export const LargeTileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  vertical-align: left;
`;
export const LargeTileText = styled.div`
  padding: 20px 10px;
`;
/////Left Nav////////

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

  @media screen and (min-width: 834px) {
    display: none;
  }

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
  @media screen and (min-width: 834px) {
    display: none;
  }
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

/* Public Profile Page*/

export const PublicProfileFormContainer = styled.div`
  max-width: 650px;
  min-height: 1500px;
  padding: 20px 20px;

  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const ProfileImgbox = styled.div`
  width: 50px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-self: center;
  align-items: center;
`;

export const RightIcon = styled.div`
  border: 0.5px solid #d9d9d9;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PulicProfileBox1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #cccccc;
`;
export const PublicProfileBox2 = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #cccccc;
`;

export const PublicProfileBox3 = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #cccccc;
`;
export const PublicProfileBox4 = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #cccccc;
`;
export const PublicProfileButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
export const PublicProfileBox5 = styled.div``;
export const PublicProfileBox6 = styled.div`
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-top: 30px;
`;
export const PublicProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;

  &:not(:last-child) {
    border-bottom: 1px solid #cccccc;
  }
`;
export const PublicProfileBoxl = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PublicProfileBoxr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ProfileProjectTextbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 15px;
  height: 55px;
`;

export const MarginSettingsPro1 = styled.div`
  margin-left: -30px;
  max-height: 100vh;
`;
export const MarginSettingsPro2 = styled.div`
  margin-left: -15px;
  max-height: 100vh;
`;

export const SettingsProContainer = styled.div`
  overflow: hidden;
`;

export const MainContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  background-color: white;
  min-height: 100vh;
  width: 460px;
  padding: 20px;
  transform: ${props =>
    props.firstcont ? props.firstcont : 'translate(600px,10px)'};
  transition: all 0.6s cubic-bezier(0.06, 0.88, 0.24, 0.99);
  box-shadow: 0px 10px 15px rgb(0 0 0 / 10%);
`;
export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  min-height: 100vh;
  width: 460px;
  padding: 20px;
  transform: ${props => (props.left ? props.left : 'translate(600px,10px)')};
  transition: all 0.4s cubic-bezier(0.06, 0.88, 0.24, 0.99);
  box-shadow: 0px 10px 15px rgb(0 0 0 / 10%);
`;
