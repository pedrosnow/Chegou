
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background: #fcc827;
    flex: 1;
    justify-content:space-between;
    align-items:center;
    padding:30px;
`;

export const InputArea = styled.View`
    width:100%;
    justify-content:space-around;
    align-items:center;
    margin-top:80px;
    margin-bottom:80px

`;

export const Buttom = styled.TouchableOpacity`
    background:#000;
    width:100%;
    height:50px;
    border-radius:100px;
    justify-content:center;
    align-items:center;
    margin-bottom:5px;

`;

export const TextButtom = styled.Text`
    color:#fff;
    justify-content:space-between;
    align-items:center;
`;

export const SingInput = styled.View`
    width: 100%;
    height:50px;
    background: #fff;
    border-radius:10px;
    margin-bottom:10px;
    align-items:center;
    justify-content:flex-start;
    padding-left:10px;
    flex-direction: row;
`;

export const Input = styled.TextInput`
    color: #fff;
    margin-left:10px
    width:80%;
`;


// Cadastro
export const AreaCadastro = styled.View`
    width:100%;
    align-items:center;
    justify-content:center;
    flex-direction: row;
    
`;

export const TextCadastro = styled.Text`
    font-size: 12px;
`;

export const TextTouch = styled.Text`
    font-weight: bold;
    font-size: 12px;
`;

export const AreaButton = styled.View`
    width:100%
    height:100px;
    align-items:center;
    
`;

export const ToucheCadastro = styled.TouchableOpacity`
    margin-left: 5px;

`;