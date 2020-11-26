import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import DataContext from '../contexts/DataContext';

const MyNavigationSub = (props) => {

  const food = props.route.params.food;   // navigation에서 데이터 전달받기
  const value = useContext(DataContext);  // context로 데이터 전달받기

  return (
    <View style={styles.container}>
      <View style={styles.titleWrap}>
        <Text style={styles.textStyle}>MY FOOD</Text>
      </View>
      <View style={styles.contentWrap}>
        <Text>{food}</Text>
        <Text>{value.name} / {value.gender} / {value.age}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#ffffa7',
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


export default MyNavigationSub;