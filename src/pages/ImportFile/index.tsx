import React, {useState} from 'react';

import { Container } from './styles';

import { 
  Input, 
  InputContainer, 
  LabelInput, 
  Button,
  } from './../ListItems/styles';
import { sendFile } from '../../services/app';
  
const ImportFile: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  function handleSelectFile(event?: any) {
    setSelectedFile(event.target.files[0])
  }

  async function handleEnviar() {
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await sendFile(formData)
      if(response.status === 201)  { 
        window.location.href = "/list-items";
      } else {
        alert('ocorreu um erro');
      }
    } catch(error) {
      console.log(error)
      alert('ocorreu um erro');

    }
  }

  return (
  <Container>
    <InputContainer> 
        <LabelInput >Selecione o aquivo XLSX</LabelInput>
        <Input name={'arquivo'} type={'file'} onChange={handleSelectFile} />
      </InputContainer>
      <Button onClick={handleEnviar}>Enviar</Button>
  </Container>
  );
}

export default ImportFile;