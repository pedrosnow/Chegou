import React from 'react'
import { StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    AreaVoltarFoto,
    AreaLoja

} from './style';

export default () => {

    const navigation = useNavigation()

    const Home = () => {

        navigation.navigate('TabNavigation')

    }


    return (

        <Container>

            <StatusBar backgroundColor="#fcc827" barStyle="dark-content" > </StatusBar>

            <AreaVoltarFoto>

            


            </AreaVoltarFoto>

            <AreaLoja>


            </AreaLoja>







        </Container>
    )
}