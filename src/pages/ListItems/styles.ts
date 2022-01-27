import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const LabelInput = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-left: 15px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  background: #FFFFFF;
  border: 1px solid #808026;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  height: 60px;
  padding: 0 15px 0 15px;
  font-size: 14px;
`;

export const LeftDiv = styled.div`
  padding: 20px;
  width: 100%;
`;

export const RightDiv = styled.div`
  padding: 20px;
  width: 100%;  
`;

export const Button = styled.button`
  border: none;
  background: #0055FE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  color: #ffffff;
  height: 60px;
  min-width: 200px;
`;

export const ListContainer = styled.div`
  background: rgba(155, 232, 12, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
`;

export const LabelNomeList = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
`;

interface LabelList {
  marginTop?: number;
}

export const LabelList = styled.span<LabelList>`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  ${ props => props.marginTop && `margin-top: ${props.marginTop}px;`}
`;

export const LabelEnderecoList = styled.span`
`;
