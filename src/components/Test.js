import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const Test = ({pharsing}) => {
  return (
    <ScrollView>
      <View>
        <Text>Test components</Text>
        <Text>{pharsing}</Text>
      </View>
    </ScrollView>
  );
};

export default Test;
