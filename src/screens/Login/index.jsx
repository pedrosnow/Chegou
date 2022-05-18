import React from 'react'
import {
    Container, 
    InputArea,
    Buttom,
    TextButtom,
    SingInput,
    Input,
    AreaCadastro,
    TextTouch,
    TextCadastro,
    AreaButton,
    ToucheCadastro,
} from './styles';
import {Image} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

export default ()=> {
    return (
        <Container>
            
            <Image style={{ width:220, height: 120, resizeMode: 'contain', marginTop: 50}} source={require('../../../assets/logo.png')} />

            <InputArea>

            <SingInput >
                <Entypo name="email" size={24} color="#000" />
                <Input
                    placeholder="E-mail" 
                    placeholderTextColor="#000" 
                />
            </SingInput>
            
            <SingInput>
                <FontAwesome5 name="key" size={24} color="#000" />
                <Input
                    placeholder="senha" 
                    placeholderTextColor="#000" 
                />
            </SingInput>

            </InputArea>

                <AreaButton>
                    
                    <Buttom>
                        <TextButtom>Entrar</TextButtom>      
                    </Buttom>


                    <AreaCadastro>
                        <TextCadastro>Ainda não tem</TextCadastro>
                        <ToucheCadastro>
                            <TextTouch>Cadastro?</TextTouch>
                        </ToucheCadastro>
                    </AreaCadastro>     

                </AreaButton>

            
        </Container>
    )
}