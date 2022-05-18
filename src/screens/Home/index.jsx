import React from 'react';
import { Image, StatusBar, RefreshControl } from 'react-native';
import Restaurante from '../Restaurante/index';


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

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


export default () => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    return (
        <Container refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

            <StatusBar backgroundColor="#fff" barStyle="dark-content" > </StatusBar>

            <AreaHeader showsVerticalScrollIndicator={false}>

                <Header>

                    <AreaSaudacaoNomeUsuario>
                        <Clima>BOM DIA</Clima>
                        <Nome>PEDRO HENRIQUE</Nome>
                    </AreaSaudacaoNomeUsuario>
                    <Image style={{ width: 50, height: 50 }} source={require('../../../assets/perfil.png')} ></Image>

                </Header>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <NomeCategoria style={{ color: "red" }} >Restaurante</NomeCategoria>
                    <NomeCategoria>Mercado</NomeCategoria>
                    <NomeCategoria>Bebidas</NomeCategoria>
                    <NomeCategoria>Farmacia</NomeCategoria>

                </ScrollView>



            </AreaHeader>


            <Restaurante />


        </Container>

    )

}