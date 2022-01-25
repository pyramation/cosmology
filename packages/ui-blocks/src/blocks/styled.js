import styled from 'styled-components';

export const OnlyMobile = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
export const TabAndDesktop = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

/* History Block*/
export const HistoryBlockContainer = styled.div`
  display: grid;
  grid-template-columns: 3rem 80%;
  @media screen and (max-width: 600px) {
    margin-top: 5px;
  }
`;
export const ProfileProjectTextbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 15px;
  height: 55px;
  font-weight: 400;

  @media screen and (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const Underline = styled.span`
  text-decoration: underline;
`;
/* Members Block */
export const ProfileProjectsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  &:not(:nth-last-child(2)) {
    border-bottom: 1px solid #c8c8c8;
  }

  @media screen and (max-width: 600px) {
    display: ${props => (props.tabanddesktop ? 'none' : null)};
  }
`;
export const ProfileTeams_Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  &:not(:last-child) {
    border-bottom: 1px solid #c8c8c8;
  }

  @media screen and (max-width: 600px) {
    display: ${props => (props.tabanddesktop ? 'none' : null)};
  }
`;

export const ProfileProjectsLeft = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileProjects_Right = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileProject_Imgbox = styled.div`
  width: 90px;
  border-radius: 5px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    margin-right: 10px;
  }
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

/* Members Block Mobile View */

export const MobileProfileProjectsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  &:not(:last-child) {
    border-bottom: 1px solid #c8c8c8;
  }

  @media screen and (min-width: 601px) {
    display: ${props => (props.mobileonly ? 'none' : null)};
  }
`;

export const MobileProfileProjectsLeft = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MobileProfileProjects_Right = styled.div`
  display: flex;
  align-items: center;
`;
export const MobileProfileProject_Imgbox = styled.div`
  width: 90px;
  border-radius: 5px;
  overflow: hidden;
`;
export const MobileProfileMemberRight = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MobileProfileImgbox = styled.div`
  width: 50px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-self: center;
`;

export const MobileProfileProjectImg = styled.img`
  object-fit: cover;
  border-radius: 5px;
`;

export const MobileProfileProjectTextbox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  font-weight: 400;
`;

export const MobileMemberTag = styled.div`
  background-color: #208fdf;
  border: 1px solid #1a72b2;
  padding: 2px 5px;
  border-radius: 5px;
  margin-right: 20px;
  min-width: 80px;
  max-width: 80px;
`;
