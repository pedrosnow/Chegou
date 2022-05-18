import React, {useEffect} from 'react'
import {Container, LoadginIcon} from './styles';
import {Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default ()=> {
    
    const navigation = useNavigation();
    useEffect(()=>{
        const checkToken = async() => {
            const token = await AsyncStorage.getItem('token');
            if(token !== null){
                
            }else{
                navigation.navigate('Login');
            }

        }

        setTimeout(() => {
            checkToken();
        }, 2000);

        
    }, []);

    return (
        <Container>
             <Image style={{ width:250, height: 200, resizeMode: 'contain', marginTop: 260}} source={require('../../../assets/logo.png')} />
             <LoadginIcon size="large" color="red"    />
        </Container>
    )
}