import React from 'react'
import {View, Text, Switch, StyleSheet} from 'react-native'

function Subtitle(props){

    return(
        <View style = {style.container}>
            <Text style={style.text}>{props.title}</Text>
            <View style={style.line}></View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center',
    },
    text:{
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'gray',
    },
    line:{
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 10,
        flex: 1,
        marginTop: 3,
        borderColor: '#eceff1'
    }
})

export default Subtitle