import React from 'react-native'
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AreaVoltar = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    background: rgba(75, 75, 75, 0.17);
    border-radius: 4px;
    display:flex;
    justify-content:center;
    align-items:center;
`



export default (props) => {

    const navigation = useNavigation()

    const Rota = (Nome) => {

        navigation.navigate(Nome)

    }

    return (
        <AreaVoltar onPress={() => Rota(props.RotaName)}>

            <AntDesign name="left" size={24} color="#818181" />

        </AreaVoltar>
    )
};