import React, { Image } from 'react-native';
import styled from 'styled-components/native';



const Header = styled.View`
    width:100%;
    justify-content:space-around;
    flex-direction: row;
    align-items:center;
    overflow:hidden;
    padding: 0 13px;
    background:#fff;   
`;

const Clima = styled.Text`
    color:grey;
    font-size:14px;
    
`;

const Nome = styled.Text`
    color:#000;
    font-size:20px;
`;

const AreaSaudacaoNomeUsuario = styled.View`
    width:100%;
`;



export default () => (
    <Header>
        <AreaSaudacaoNomeUsuario>
            <Clima>BOM DIA</Clima>
            <Nome>PEDRO HENRIQUE</Nome>
        </AreaSaudacaoNomeUsuario>
        <Image style={{ width: 40, height: 40 }} source={require('../../assets/perfil.png')} ></Image>
    </Header>
)