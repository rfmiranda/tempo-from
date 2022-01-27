import React from 'react';

import {Container, Brand, LinkContainer, Link, ContentDiv} from './styles';
import logoImg from '../../assets/images/logo.png';


const Menu: React.FC = () => {
  return (
      <Container>
        <ContentDiv>
          <div>
            <a href='/'>
              <Brand src={logoImg}/> 
            </a>
          </div>
          
          <LinkContainer>
            <Link href='/'>Início</Link>
            <Link href='/list-items'>Visualização</Link>
            <Link href='/import-file'>Import de arquivo</Link>
          </LinkContainer>
        </ContentDiv>
      </Container>
  );
};

export default Menu;
