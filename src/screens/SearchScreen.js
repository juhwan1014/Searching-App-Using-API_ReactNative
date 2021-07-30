import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput ,Text , ScrollView} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import SearchBar from '../components/SerachBar';
import yelp from '../api/yelp'
import PriceResultList from '../components/PriceResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [businesses, setBusinesses] = useState([])



    const filterByPrice = (price) => {
        return businesses.filter( business => {
               return business.price === price
        })
    }

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 30,
                term: term,
                location: 'vancouver'
            }
        });
        setBusinesses(response.data.businesses)
        console.log(businesses)
    }

    useEffect(() => {
        searchApi();
    }, [])
    console.log(businesses)
    return (
        <View>
            <ScrollView>
            <SearchBar term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi()} />
            {/* <Button title = "asdasdasd" onPress = {() => {
              
            }}/> */}
            <Text style={styles.text}>Search Results...</Text>
            <PriceResultList results ={businesses} />
            <Text> </Text>
            <Text> </Text>
            <Text style={styles.text}>Filter By Price...</Text>
            <PriceResultList results ={filterByPrice('$')} title = "Relatively Inexpensive"/>
            <PriceResultList results ={filterByPrice('$$')} title = "Average"/>
            <PriceResultList results ={filterByPrice('$$$')} title = "Somewhat expensive"/>
            <PriceResultList results ={filterByPrice('$$$$')} title = "Super expensive"/>
            
            </ScrollView>
        </View>
    );



}


const styles = StyleSheet.create({
    text: {
        padding: 40,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default SearchScreen;
