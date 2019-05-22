import React from 'react';
import { StyleSheet, Text, View , StatusBar,TextInput, Dimensions}  from 'react-native';

const {height, width} = Dimensions.get("window")

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>To Do App!</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title:{
    color: 'white',
    fontSize:30,
    marginTop:100,
    fontWeight:'200'
  },
  card:{
    backgroundColor:'white',
    flex:1,
    width: width - 50
  },
  input:{

  }
});
