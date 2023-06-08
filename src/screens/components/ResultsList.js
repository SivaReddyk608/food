import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from "react-navigation";
import ResultsDetails from "./ResultsDetails";

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length){
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ShowResults', {id: item.id})}>
                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 15,
    },
    container: {
        marginBottom: 50,
    }
})

export default withNavigation(ResultsList)