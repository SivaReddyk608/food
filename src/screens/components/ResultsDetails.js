import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'

const ResultsDetails = ({result}) => {
    return (
        <View>
        <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.name}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginEnd: 10,
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginLeft: 15,
    },
    name: {
        fontWeight: 'bold',
        marginLeft: 15,
    }
})

export default ResultsDetails