import React from 'react'
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Container, ScrollView, Card, ListaLojas, AreaLoja, AreaLogoLoja, AreaInformacaoLoja, NomeLoja, AreaCategoriaDistancia, Categoria, Distancia, AreaTempoTaxaEntrega, Tempo, TaxaEntrega, AreaLogoInformacaoLoja } from './style.js';
import { useNavigation } from '@react-navigation/native';

export default () => {

    var dados = [
        {'nome': "maria"},
        {'nome': "maria"},
        {'nome': "maria"}
    ]

    dados.forEach(element => {
        console.log(element.nome);
    });


    const navigation = useNavigation()

    const Produtos = () => {

        navigation.navigate('Produtos')

    }


    return (
        <Container>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>
            <Card>
                <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
            </Card>


            </ScrollView>

            <ListaLojas>

                <AreaLoja>
                    <AreaLogoInformacaoLoja onPress={Produtos} >
                        <AreaLogoLoja>
                            <Image style={{ width: 70, height: 70 }} source={require('../../../assets/acai.jpg')} />
                        </AreaLogoLoja>
                        <AreaInformacaoLoja>
                            <NomeLoja>AçaíTeria</NomeLoja>
                            <AreaCategoriaDistancia>
                                <Categoria>Fest Food </Categoria>
                                <Distancia>1km</Distancia>
                            </AreaCategoriaDistancia>
                            <AreaTempoTaxaEntrega>
                                <Tempo>15 - 25 min  • </Tempo>
                                <TaxaEntrega>R$ 3,00</TaxaEntrega>
                            </AreaTempoTaxaEntrega>
                        </AreaInformacaoLoja>
                    </AreaLogoInformacaoLoja>
                    <AntDesign style={{ marginRight: 10 }} name="hearto" size={24} color="black" />
                </AreaLoja>

                <AreaLoja>
                    <AreaLogoInformacaoLoja>
                        <AreaLogoLoja>
                            <Image style={{ width: 70, height: 70 }} source={require('../../../assets/hamburg.jpg')} />
                        </AreaLogoLoja>
                        <AreaInformacaoLoja>
                            <NomeLoja>Boca Cheia</NomeLoja>
                            <AreaCategoriaDistancia>
                                <Categoria>Fest Food </Categoria>
                                <Distancia>5km</Distancia>
                            </AreaCategoriaDistancia>
                            <AreaTempoTaxaEntrega>
                                <Tempo>15 - 30 min  • </Tempo>
                                <TaxaEntrega>R$ 10,00</TaxaEntrega>
                            </AreaTempoTaxaEntrega>
                        </AreaInformacaoLoja>
                    </AreaLogoInformacaoLoja>
                    <AntDesign style={{ marginRight: 10 }} name="hearto" size={24} color="black" />
                </AreaLoja>

                <AreaLoja>
                    <AreaLogoInformacaoLoja>
                        <AreaLogoLoja>
                            <Image style={{ width: 70, height: 70 }} source={require('../../../assets/pastel.jpg')} />
                        </AreaLogoLoja>
                        <AreaInformacaoLoja>
                            <NomeLoja>Pastel do Chef</NomeLoja>
                            <AreaCategoriaDistancia>
                                <Categoria>Fest Food </Categoria>
                                <Distancia>1km</Distancia>
                            </AreaCategoriaDistancia>
                            <AreaTempoTaxaEntrega>
                                <Tempo>10 - 20 min  • </Tempo>
                                <TaxaEntrega>Grátis</TaxaEntrega>
                            </AreaTempoTaxaEntrega>
                        </AreaInformacaoLoja>
                    </AreaLogoInformacaoLoja>
                    <AntDesign style={{ marginRight: 10 }} name="hearto" size={24} color="black" />
                </AreaLoja>

                <AreaLoja>
                    <AreaLogoInformacaoLoja>
                        <AreaLogoLoja>
                            <Image style={{ width: 70, height: 70 }} source={require('../../../assets/pizza.png')} />
                        </AreaLogoLoja>
                        <AreaInformacaoLoja>
                            <NomeLoja>Pizzaria Kidelicia</NomeLoja>
                            <AreaCategoriaDistancia>
                                <Categoria>Fest Food </Categoria>
                                <Distancia>2,5km</Distancia>
                            </AreaCategoriaDistancia>
                            <AreaTempoTaxaEntrega>
                                <Tempo>5 - 10 min  • </Tempo>
                                <TaxaEntrega>R$ 6,00</TaxaEntrega>
                            </AreaTempoTaxaEntrega>
                        </AreaInformacaoLoja>
                    </AreaLogoInformacaoLoja>
                    <AntDesign style={{ marginRight: 10 }} name="hearto" size={24} color="black" />
                </AreaLoja>

                <AreaLoja>
                    <AreaLogoInformacaoLoja>
                        <AreaLogoLoja>
                            <Image style={{ width: 70, height: 70 }} source={require('../../../assets/sorvete.png')} />
                        </AreaLogoLoja>
                        <AreaInformacaoLoja>
                            <NomeLoja>Sorveteria ice cream</NomeLoja>
                            <AreaCategoriaDistancia>
                                <Categoria>Fest Food </Categoria>
                                <Distancia>0,5km</Distancia>
                            </AreaCategoriaDistancia>
                            <AreaTempoTaxaEntrega>
                                <Tempo>10 - 25 min  • </Tempo>
                                <TaxaEntrega>Grátis</TaxaEntrega>
                            </AreaTempoTaxaEntrega>
                        </AreaInformacaoLoja>
                    </AreaLogoInformacaoLoja>
                    <AntDesign style={{ marginRight: 10 }} name="hearto" size={24} color="black" />
                </AreaLoja>



                <AreaLoja>
                    <AreaLogoInformacaoLoja>
                        <AreaLogoLoja>
                            <Image style={{ width: 70, height: 70 }} source={require('../../../assets/delicias.jpeg')} />
                        </AreaLogoLoja>
                        <AreaInformacaoLoja>
                            <NomeLoja>Delicia da Denya</NomeLoja>
                            <AreaCategoriaDistancia>
                                <Categoria>Fest Food </Categoria>
                                <Distancia>1km</Distancia>
                            </AreaCategoriaDistancia>
                            <AreaTempoTaxaEntrega>
                                <Tempo>15 - 25 min  • </Tempo>
                                <TaxaEntrega>R$ 3,00</TaxaEntrega>
                            </AreaTempoTaxaEntrega>
                        </AreaInformacaoLoja>
                    </AreaLogoInformacaoLoja>
                    <AntDesign style={{ marginRight: 10 }} name="hearto" size={24} color="black" />
                </AreaLoja>



            </ListaLojas>


        </Container>
    )
}
