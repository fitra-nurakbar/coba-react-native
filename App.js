import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import Class from './src/components/Class';
import Test from './src/components/Test';

const App = () => {
  return (
    <ScrollView>
      <View>
        <View
          style={{
            width: 40,
            height: 40,
            margin: 10,
            display: 'flex',
            borderRadius: 20,
            borderColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <View style={{shadowColor: 'red', height: 50, alignItems: 'center'}}>
          <Text>Hello world</Text>
        </View>
        <View style={{borderColor: 'white', marginLeft: 5}}>
          <TextInput placeholder="Typing here..." />
        </View>
        <Image
          source={require('./src/img/logo.png')}
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            display: 'flex',
          }}
        />
        <Test pharsing={'Pharsing data'} />
        <Class />
      </View>
    </ScrollView>
  );
};

export default App;
