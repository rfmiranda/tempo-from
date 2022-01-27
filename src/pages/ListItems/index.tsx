import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getQuery, postQuery } from '../../services/app';

import { 
  Button, 
  Container, 
  Input, 
  InputContainer, 
  LabelEnderecoList, 
  LabelInput, 
  LabelList, 
  LabelNomeList, 
  LeftDiv, 
  ListContainer, 
  RightDiv } from './styles';

  const fields = [
    {
      name: 'nome',
      type: 'text',
      label: 'Nome'
    },
     {
      name: 'dataNascimento',
      type: 'text',
      label: 'Data de Nascimento'
    },
    {
      name: 'cep',
      type: 'text',
      label: 'CEP'
    }, 
    {
      name: 'endereco',
      type: 'text',
      label: 'Endereço'
    }, 
    {
      name: 'cidade',
      type: 'text',
      label: 'Cidade'
    }, 
    {
      name: 'estado',
      type: 'text',
      label: 'Estado'
    },  
  ];

const ListItems: React.FC = () => {

  const [values, setValues] = useState<any>({});
  const [lists, setLists] = useState<any[]>();

  async function getList() {
      const response = await getQuery('/list') ;
      setLists(response)
   }

  useEffect(() => {
    getList();
  }, []);

  function handleOnChange(text: string, name: string) {
    const v = values;
    v[name] = text;
  }

  async function handleButton() {
    const resp = await postQuery('/cadastrar', values);
    if(resp.status === 200)    {
      window.location.reload();
    } else {
      alert('erro');
    }
  }
   
  return (
  <Container>
    <LeftDiv>
      {
        fields.map( (field: any, index) => (
            <InputContainer key={index}> 
              <LabelInput >{field.label}</LabelInput>
              <Input name={field.name} value={values[field.name]} onChange={text => handleOnChange(text.currentTarget.value, field.name)} />
            </InputContainer>
        ))
      }
      <Button onClick={handleButton}>Incluir</Button>
    </LeftDiv>

    <RightDiv>
      {
        lists?.map((list: any, index) => (
          <ListContainer key={index}>
            <LabelNomeList>{list.nome}</LabelNomeList>
            <LabelList>Data de nascimento: {moment(list.dataNascimento).format('DD/MM/YYYY')}</LabelList>
            <LabelList marginTop={10}>Endereço: </LabelList>
            <LabelEnderecoList>{list.endereco} - {list.cidade} - {list.estado} - {list.cep}</LabelEnderecoList>
          </ListContainer>
        ))
      }
      
    </RightDiv>
  </Container>);
}

export default ListItems;