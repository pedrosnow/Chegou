import React from 'react';
import { Image, StatusBar, RefreshControl, TouchableOpacity, Text } from 'react-native';


import {
    Container,
    Header,
    Clima,
    Nome,
    AreaSaudacaoNomeUsuario,
    NomeCategoria,
    ScrollView,

    AreaHeader
} from './style';



export default () => {


    return (
        <Container >

            <StatusBar backgroundColor="#fff" barStyle="dark-content" > </StatusBar>

            <AreaHeader showsVerticalScrollIndicator={false}>

                <Header>

                    <AreaSaudacaoNomeUsuario>
                        <Clima>BOM DIA</Clima>
                        <Nome>PEDRO HENRIQUE</Nome>
                    </AreaSaudacaoNomeUsuario>
                    <Image style={{ width: 50, height: 50 }} source={require('../../../assets/perfil.png')} ></Image>

                </Header>

                


            </AreaHeader>

            
          
          
        </Container>

    )

}