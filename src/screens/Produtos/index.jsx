import React from 'react'
import { Image, View, Text } from 'react-native';
import BtnVotar from '../../Components/Voltar';
import OpcaoCategoria from '../../Components/OpcaoCategoria';

import {
    Container,
    AreaVoltarFavoritoPerfil,
    DesignerCirculo,
    DesignerCirculo1,
    DesignerCirculo2,
    AreaVoltarFavoritar,
    AreaPerfil,
    Perfil,
    AreaDadosPerfil,
    Nome,
    AreaCategoriaDistancia,
    Categoria,
    Distancia,
    AreaTempoPreco,
    Tempo,
    Preco,
    ScrollCategoria,
} from './style';

export default () => {

    return (

        <Container>
            <AreaVoltarFavoritoPerfil>
                <View style={{ paddingLeft: 35, paddingRight: 55 }}>
                    <AreaVoltarFavoritar>
                        <BtnVotar RotaName='TabNavigation' />
                    </AreaVoltarFavoritar>
                    <AreaPerfil>
                        <Perfil>
                            <Image style={{ width: 78, height: 74 }} source={require('../../../assets/acai.jpg')} />
                        </Perfil>
                        <AreaDadosPerfil>
                            <Nome>AçaíTeria</Nome>
                            <AreaCategoriaDistancia>
                                <Categoria>Açaí • </Categoria>
                                <Distancia>1km</Distancia>
                            </AreaCategoriaDistancia>
                            <AreaTempoPreco>
                                <Tempo>25 - 30 min • </Tempo>
                                <Preco>R$ 3,00</Preco>
                            </AreaTempoPreco>
                        </AreaDadosPerfil>
                    </AreaPerfil>
                </View>

                <DesignerCirculo ></DesignerCirculo>
                <DesignerCirculo1></DesignerCirculo1>
                <DesignerCirculo2></DesignerCirculo2>


            </AreaVoltarFavoritoPerfil>

            <ScrollCategoria horizontal={true} showsHorizontalScrollIndicator={false} >

                <OpcaoCategoria name={'Açaí'} select={"true"} />
                <OpcaoCategoria name={'Sorvetes'} />
                <OpcaoCategoria name={'Bebibas'} />


            </ScrollCategoria>




        </Container>
    )
}