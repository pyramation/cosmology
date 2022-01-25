import styled from 'styled-components';
import css from '@styled-system/css';

export const TileContainer = styled.div`
  ${css({
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '130px 60px',
    width: '270px',
    height: '191px',
    borderRadius: '5px',
    overflow: 'hidden',
    cursor: 'pointer',
    margin: '20px 5px',
    font: 'hind',
    borderRadiusBottom: '5px'
  })}
`;

export const TileImg = styled.img`
  ${css({
    objectFit: 'cover',
    border: '1.3px solid #CBCBCB',
    borderRadius: '5px'
  })}
`;
export const TileImgContainer = styled.div`
  ${css({
    height: '130px',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#CBCBCB'
  })}
`;

export const TileContainerDesbox = styled.div`
  display: grid;
  grid-template-columns: 88% 12%;
  color: ${props => props.color || '#808080'};
  font-family: 'hind', sans-serif;
  border-bottom: 1.3px solid #cbcbcb;
  border-left: 1.3px solid #cbcbcb;
  border-right: 1.3px solid #cbcbcb;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  overflow: hidden;
  padding-left: 13px;
  padding-top: 10px;
  background-color: ${props => props.bgcolor || '#fcfcfc'};
`;

export const TileTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
export const TileTime = styled.p`
  font-size: 12px;
  padding-top: 4px;
  font-weight: 500;
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
  margin: 10px 5px;

  @media screen and (max-width: 834px) {
    height: 163px;
    width: 163px;
  }
`;

export const MediaTileImg = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 5px;
`;

export const MediaTileVideo = styled.video`
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const MediaTileTextbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 8px;
  background-color: ${props => props.bgcolor || '#FFFFFF'};
`;

export const MediaTileImgbox = styled.div`
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;
