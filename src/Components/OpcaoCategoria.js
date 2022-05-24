import React from 'react-native'

import styled from 'styled-components/native'

const TextCategoria = styled.Text``
const Container = styled.TouchableOpacity`

    background:#fcc827;
    width:100px;
    justify-content:center;
    align-items:center;
    border-radius: 10px
    margin-right: 5px;
    
`;

export default (props) => (


    <Container>
        <TextCategoria>{props.name}</TextCategoria>
    </Container>
)