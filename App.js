import React from 'react';
import {View, ScrollView} from 'react-native';
import Kotak from './src/components/Hero';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Kotak />
      </ScrollView>
    </View>
  );
};

export default App;
