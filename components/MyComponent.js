import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

const MyComponent = () => {

  const [ value, setValue ] = useState("Strawberry");
  
  const onChangeValue = (text) => {
    // text && setValue(text)
    setValue(text)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>StrawBerry</Text>
      <Image source={require('../public/images/strawberry.png')} style={styles.images}/>
      <TextInput placeholder="딸기 이름을 입력하시오" onChangeText={onChangeValue}/>
      <Text style={styles.textStyle}>{value}</Text>
      <Button title="click me" onPress={() => alert('hello?')} color="red" />
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#fff578',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    textStyle: {
      fontSize: 20,
      padding: 10
    },

    textInputStyle: {
      height: 20,
      borderWidth: 1,
      borderColor: 'gray'
    },

    images: {
      width: 200,
      height: 200
    }
  }
)

export default MyComponent;