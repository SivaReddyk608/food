import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from './components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from './components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, errorMessage, searchApi] = useResults()

    const filterResultsByPrice = (price) => { // Added 'price' parameter here
        //price === $ || $$ || $$$
        return results.filter(result => {
            return result.price === price // Changed 'results.price' to 'result.price'
        })
    }
    return (
        <View style={{flex: 1}}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>Search Screen {errorMessage} Results </Text> : null}
            <ScrollView>
                <Text>We have found {results.length} Results</Text>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Bit Spender"  />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
export default SearchScreen
