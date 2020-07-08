import React from 'react'
import {View, Text, Image,StyleSheet} from 'react-native'

function Empty(props){
    return(
        <View style={style.container}>
            <Image style={style.image} source={props.image}></Image>
            <Text style = {style.text}> {props.text} </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    image:{
        flex: 1,
        width: 300,
        height: 200,
        marginVertical: 50,
    },
    text:{
        fontSize: 20
    }
})

export default Empty
