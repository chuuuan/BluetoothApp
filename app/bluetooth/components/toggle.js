import React from 'react'
import {View, Text, Switch, StyleSheet} from 'react-native'

function Toggle(props){

    return(
        <View style = {style.container}>
            <Text style={style.text}>{props.value?'ON':'OFF'}</Text>
            <Switch 
                style={style.switch} 
                value={props.value} 
                onValueChange = {props.onValueChange}    
            ></Switch>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        paddingLeft: 20,
        paddingVertical: 25,
        flexDirection: 'row'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1  
    },
    switch:{
        width: 50,
        marginRight: 10,
    }
})

export default Toggle