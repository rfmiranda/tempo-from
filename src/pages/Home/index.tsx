import React from 'react';

import { Container, HeroContainer, HeroDivLeft, HeroDivRight, HeroImg, SubTitle, Title } from './styles';
import velowImg from '../../assets/images/velow.png';

const Home: React.FC = () => {
  return (
    <Container>
      <HeroContainer>
        <HeroDivLeft>
          <Title>Desafio</Title>
          <SubTitle>Lista, <span>formulário</span> e importe de arquivo</SubTitle>
        </HeroDivLeft>

        <HeroDivRight>
          <HeroImg src={velowImg} alt='Velow Tempo Telecom' />
        </HeroDivRight>
      </HeroContainer>
    </Container>);
}

export default Home;