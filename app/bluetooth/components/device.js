import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Separator from '../components/separator'

function Device(props) {

    return (
        <>
        <TouchableOpacity style={style.wrapper} onPress={props.onPress}>
            <View style={style.wrapperLeft}>
                <Image style={style.iconLeft} source={props.iconLeft} />
            </View>
            <View style={style.wrapperName}>
                <Text style={style.name}>{props.name}</Text>
            </View>
            <Image style={style.iconRight} source={props.iconRight}></Image>
        </TouchableOpacity>
        <Separator></Separator>
        </>
    )
}

const style = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
    },
    wrapperLeft: {
        marginLeft: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperName: {
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 15,

    },
    name: {

    },
    iconLeft: {
        width: 25,
        height: 25,
    },
    iconRight: {
        marginRight: 10,
        width: 25,
        height: 25,
    },

})

export default Device