import React from 'react';
import { RefreshControl } from 'react-native';



import {
    Container,
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




        </Container>

    )

}