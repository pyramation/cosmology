import styled from 'styled-components';

export const BellNotification = styled.div`
  position: relative;
`;

export const RedTag = styled.span`
  position: absolute;
  height: 18px;
  min-width: 18px;
  background-color: #df2030;
  color: white;
  border: 1px solid #b21a26;
  font-family: 'Hind', sans-serif;
  border-radius: 5px;
  text-align: center;
  transform: translateX(-7px) translateY(-6px);
  line-height: 15px;
  font-size: 12px;
`;

export const ProfileNotification = styled.div`
  position: relative;
`;

export const GreenTag = styled.div`
  position: absolute;
  height: 9px;
  min-width: 9px;
  background-color: #19e6c3;
  border: 1px solid #14b89c;
  border-radius: 50%;
  transform: translateX(0px) translateY(1px);
`;
export const GreenTagLg = styled.div`
  position: absolute;
  height: 9px;
  min-width: 9px;
  background-color: #19e6c3;
  border: 1px solid #14b89c;
  border-radius: 50%;
  transform: translateX(3px) translateY(4px);
`;
export const ThumbnailStatus = styled.div`
  position: relative;
`;

export const ActiveTag = styled.span`
  position: absolute;
  padding: 4px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.06);
  z-index: 1;
`;
