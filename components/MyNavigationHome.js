import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const MyNavigationHome = (props) => {

  let [ food, setFood ] = useState('');

  const handleText = (text) => {
    setFood(text);
  }
  
  const addFood = () => {
    if(food != '') {
      props.navigation.navigate('Sub', {food: food});
    } else {
      alert('음식을 입력하시오');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.textStyle}>YOUR FOOD</Text>
      </View>
      <View style={styles.contentWrap}>
        <TextInput onChangeText={handleText}/>
        <Button title="ADD FOOD" onPress={addFood}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#ffa7ba',
      flex: 1
    },

    titleWrap: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    textStyle: {
      fontSize: 20
    },  

    contentWrap: {
      flex: 7,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
)

export default MyNavigationHome;