import React from 'react'
import {View, StyleSheet} from 'react-native'

function Separator(props){

    return(
        <View style = {style.separator}>
        </View>
    )
}

const style = StyleSheet.create({
    separator:{
        flex: 1,
        borderTopWidth: 1,
        marginRight: 10,
        marginLeft:20,
        borderColor: '#eceff1',
    },
})

export default Separator