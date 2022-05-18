import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background:#fff;
    margin-top:10px;


`;

export const Card = styled.View`
    width:80px;
    height:80px;
    border-radius: 10px;
    margin-right:10px;
    overflow:hidden;
`;

export const ListaLojas = styled.ScrollView`
    width: 100%;
    margin-top:20px
    

`;

export const AreaLoja = styled.View`
    width:100%;
    margin-bottom: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;

`;

export const AreaLogoInformacaoLoja = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;
    width:85%
`


export const AreaLogoLoja = styled.View`
    border-radius: 10px;
    overflow:hidden;
    width:70px;
    height:70px;
   

`;

export const AreaInformacaoLoja = styled.View`
    height:68px;
    margin-left: 10px
    margin-top: 5px
`;
export const NomeLoja = styled.Text`
    font-weight: bold;
`
export const AreaCategoriaDistancia = styled.View`
    display: flex;
    flex-direction: row;
`
export const Categoria = styled.Text`
    font-size: 12px
    color: grey;
    font-weight: normal;
    margin-right: 5px
`
export const Distancia = styled.Text`
    font-size: 12px
    color: grey;
    font-weight: normal; 
`

export const AreaTempoTaxaEntrega = styled.View`
    display: flex;
    flex-direction: row;
`
export const Tempo = styled.Text`
    font-size: 12px
    color: grey;
    font-weight: bold; 
    margin-right: 5px
`
export const TaxaEntrega = styled.Text`
    font-size: 12px
    color: grey;
    font-weight: normal; 
`


export const ScrollView = styled.ScrollView`
    margin-bottom: 20px;
`;


export const Click = styled.TouchableOpacity``;