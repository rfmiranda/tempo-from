import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  width: 100%;
  justify-content: space-between; 
`;

export const HeroDivLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroDivRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  letter-spacing: 3px;
  margin: 0;
`;

export const SubTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: lighter;
  font-size: 50px;
  letter-spacing: 1px;
  max-width: 600px;
  span {
    color: #F9B800;
  }
`;

export const HeroImg = styled.img``;