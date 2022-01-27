import React from 'react';

import { Container, ContentDiv } from './styles';

const Body: React.FC = ({children}) => {
  return (
  <Container >
    <ContentDiv>
      {children}
    </ContentDiv>
  </Container>
  );
}

export default Body;