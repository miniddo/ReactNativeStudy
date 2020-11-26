import React from 'react';
import persons from '../data/persons.json';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';


const FlatListComponet = () => {

  return (
    <View style={styles.container}>
      <View style={styles.titleWarp}>
        <Text style={styles.textStyle}>FlatListComponet</Text>
      </View>
      <View style={styles.contentWrap}>
        <FlatList 
          data={persons}
          renderItem={({item}) => <Item item={item}></Item>}
          keyExtractor={item => item.id}
        />
      </View>                                  
    </View>
  )
}

const Item = ({item}) => {
  return (
    // <View style={styles.itemViewStyle}>
    //   <Text style={styles.itemTextStyle}>{item.name} ({item.age})</Text>
    // </View>
    <TouchableOpacity style={styles.itemViewStyle} onPress={ () => { alert('up!') }}>
      <Text style={styles.itemTextStyle}>{item.name} ({item.age})</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#fff578',
      flex: 1,
      flexDirection: 'column'
    },

    titleWarp: {
      backgroundColor: 'black',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    contentWrap: {
      backgroundColor: '#fff578',
      flex: 8
    },

    textStyle: {
      fontSize: 20,
      color: 'white'
    },

    itemViewStyle: {
      backgroundColor: '#ff87a1',
      padding: 20,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    itemTextStyle: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold'
    }
  }
)

export default FlatListComponet;