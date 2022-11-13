import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions} from 'react-native';
import Swiper from 'react-native-web-swiper';
import styled from 'styled-components/native';
const Container = styled.ScrollView`
  background-color: ${props => props.theme.mainBgColor};
`;

const View = styled.View`
  flex: 1;
`;

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const Home: React.FC<StackScreenProps<any, 'Home'>> = () => {
  return (
    <Container>
      <Swiper
        loop
        timeout={3.5}
        controlsEnabled={false}
        containerStyle={{width: '100%', height: SCREEN_HEIGHT / 4}}>
        <View style={{backgroundColor: 'red'}}></View>
        <View style={{backgroundColor: 'blue'}}></View>
        <View style={{backgroundColor: 'red'}}></View>
        <View style={{backgroundColor: 'blue'}}></View>
      </Swiper>
    </Container>
  );
};

export default Home;
