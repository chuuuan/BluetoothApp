import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import Empty from '../components/empty'
import Toggle from '../components/toggle'
import Subtitle from '../components/subtitle'
import BluetoothSerial, { enable, disable } from 'react-native-bluetooth-serial-next'
import Device from '../components/device'

function BluetoothList(props) {

    const [list, setList] = useState([]);
    const [bolEnable, setBolEnable] = useState(false);

    const renderEmpty = () => <Empty text='No devices' image={require('../../assets/undraw_unboxing.png')}
    ></Empty>
    const renderItem = ({ item }) => {
        return <Device
            {...item}
            iconLeft={require('../../assets/computer.png')}
            iconRight={require('../../assets/setting.png')}>
        </Device>
    };

    useEffect(() => {

        async function init() {
            const enable = await BluetoothSerial.requestEnable();
            const list = await BluetoothSerial.list();
            setList(list)
            setBolEnable(enable)
            console.log(list)
        }

        init();

        return () => {
            async function remove() {
                BluetoothSerial.stopScanning();
                console.log('Scanner')
            }
            remove();
        }
    }, [])

    const enableBluetooth = async () => {
        try{
            await BluetoothSerial.requestEnable();
            const list = await BluetoothSerial.list();
            await BluetoothSerial.stopScanning();
            setBolEnable(true);
            setList(list);
        }catch(error){
            console.error(error);            
        }
    }

    const disableBluetooth = async () => {
        try {
            await BluetoothSerial.disable();
            await BluetoothSerial.stopScanning();
            setBolEnable(false);
            setList([]);
        } catch (error) {
            console.log(error);
        }

    }


    const toggleBluetooth = value => {
        if (value) {
            return enableBluetooth();
        }
        disableBluetooth();
    }


    return (
        <SafeAreaView>
            <Text style={style.text}>Bluetooth</Text>
            <Toggle value={bolEnable} onValueChange={toggleBluetooth} />
            <Subtitle title='Bluetooth List'></Subtitle>
            <FlatList
                data={list}
                ListEmptyComponent={renderEmpty}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    text: {
        marginTop: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
})


export default BluetoothList;