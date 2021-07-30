import React from 'react';
import { StyleSheet, View, Text, FlatList, ProgressBarAndroid } from 'react-native';
import ResultItem from './ResultItem';

const PriceResultList = (props) => {
    return (
      <View>
          <Text style={styles.title}>{props.title}</Text>
          <FlatList
           data = {props.results}
           keyExtractor = {(result) => result.id}
           renderItem = { ({item}) => {
               return <ResultItem result = {item} />
           }}
           horizontal={true}
           showsHorizontalScrollIndicator={false}
          />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
     title : {
         fontSize: 18,
         fontWeight: 'bold'
     }
  });


  export default PriceResultList