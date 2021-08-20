import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MyText from './MyText'

const MyButton = ({ Title, color }) => {
    return (
        <TouchableOpacity
            style={{
                alignSelf: 'center',
                backgroundColor: '#FFF',
                padding: 10,
                borderRadius: 20,
                width: "50%"
            }}
        >
            <MyText
                text={Title}
                fontSize={18}
                textAlign="center"
                color={color}
            />
        </TouchableOpacity>
    )
}

export default MyButton

const styles = StyleSheet.create({})
