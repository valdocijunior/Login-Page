import React from 'react'
import Button from '../button';
import { ButtonContainer, LoginButton } from '../button/style';
import { Container, ContainerSubtitle, InputContainer, InputText } from './style';

function LoginText() {
  return (
    <Container>
        Login._
        <ContainerSubtitle>
            Faça seu login e inicie sua jornada!
                <InputContainer>
                    <InputText type="email" placeholder='Usuário'></InputText>
                    <InputText type="password" placeholder='Senha'></InputText>
              </InputContainer>
              <Button></Button>
        </ContainerSubtitle>
    </Container>
  )
}

export default LoginText;
