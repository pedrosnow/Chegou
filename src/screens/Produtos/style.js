
import styled from 'styled-components/native';



export const Container = styled.ScrollView`
    background:#fff;
    flex: 1;
`;



export const AreaVoltarFavoritoPerfil = styled.View`
    background: #F0F0F0;
    height: 215px;
    width:100%
    overflow:hidden;
    borderBottomRightRadius: 20px;
    borderBottomLeftRadius:20px;

`

export const AreaVoltarFavoritar = styled.View`
    z-index: 1;
    margin-top: 26px;
   
`

export const AreaPerfil = styled.View`
    overflow:hidden;
    z-index: 1;
    justify-content:flex-start;
    align-items:center;
    flex-direction:row;
    margin-top:40px
    width:100%
`

export const Perfil = styled.View`
    width:80px;
    height:80px;
    overflow:hidden;
    border-radius: 10px;
    border: 3px solid #000;    
`
export const AreaDadosPerfil = styled.View`
    width:100%;
    margin-left:10px
    margin-bottom: 10px;

`
export const Nome = styled.Text`

    font-weight:bold;
    font-size:22px;
    font-family: Roboto;

`
export const AreaCategoriaDistancia = styled.View`
    flex-direction: row;
`
export const Categoria = styled.Text``
export const Distancia = styled.Text``
export const AreaTempoPreco = styled.View`
    flex-direction: row;
`
export const Tempo = styled.Text``
export const Preco = styled.Text`
    font-weight:bold;
`


export const DesignerCirculo = styled.View`

    position: absolute;
    width: 260px;
    height: 260px;
    left: 180px;
    top: -56px;
    background: #EBEBEB;
    border-radius:200px;
`;

export const DesignerCirculo1 = styled.View`

    position: absolute;
    width: 192px;
    height: 192px;
    left: 231px;
    top: -36px;
    border-radius:100px;
    background: #F0F0F0;

`

export const DesignerCirculo2 = styled.View`
    position: absolute;
    width: 147px;
    height: 147px;
    left: 258px;
    top: -21px;
    border-radius:100px;
    background: #E7E7E7;
    
`