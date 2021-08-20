import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyText = ({ text, fontSize, margin, fontFamily, textAlign, color }) => {

    const styles = StyleSheet.create({
        myTextStyle: {
            fontSize: fontSize,
            margin: margin,
            fontFamily: fontFamily,
            textAlign: textAlign,
            color: color
        }
    })

    return (
        <Text
            style={styles.myTextStyle}
        >
            {text}
        </Text>
    )
}

export default MyText


