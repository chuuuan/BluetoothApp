import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function BluetoothLayout(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.childern}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: '#f5fcff'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default BluetoothLayout