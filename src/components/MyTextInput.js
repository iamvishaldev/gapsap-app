import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import MyText from './MyText'

const MyTextInput = ({ placeholder, text, Title, InputIcons }) => {
    return (
        <View
            style={{ marginVertical: 15 }}
        >
            <MyText
                text={Title}
                style={{ marginVertical: 10 }}
            />
            <View style={{
                backgroundColor: "#FFF",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                borderRadius: 10,
                borderWidth: 0,
            }}>
                {InputIcons}
                <TextInput
                    placeholder={placeholder}
                    style={{ paddingLeft: 10, width: '90%', color: 'black' }}
                />
            </View>
        </View>
    )
}

export default MyTextInput

const styles = StyleSheet.create({})
