import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FirstScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Wellcome to Juhwan's simple app!</Text>
        <Text> If you want to search something, </Text>
           <Text>click the search button at the bottom</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 40
    }
  });