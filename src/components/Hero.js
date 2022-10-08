import React from 'react';
import {Text, View, Image} from 'react-native';

export default function Hero() {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'white',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Hello world
      </Text>
      <Image
        source={require('../img/logo.png')}
        style={{
          width: 80,
          height: 80,
          display: 'flex',
          margin: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}
      />
    </View>
  );
}
