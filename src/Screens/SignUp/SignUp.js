import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import MyButton from '../../components/MyButton';
import MyText from '../../components/MyText'
import MyTextInput from '../../components/MyTextInput';
import { styles } from './SignUpStyle'

const SignUp = () => {


    const [email, setEmail] = useState('')

    const [name, setPassword] = useState('')

    const [image, setImage] = useState('')


    return (
        <KeyboardAvoidingView
            behavior="position"
            style={styles.container}
        >
            <View style={styles.box1}>
                <MyText
                    text="Sign Up"
                    fontSize={30}
                    margin={10}
                    fontFamily='Bold'
                />
                <Image style={styles.img} source={require('../../assets/gapsap.png')} />
            </View>
            <View style={styles.mainView}>
                <MyTextInput
                    Title="Your Email"
                    placeholder="Enter You Email"
                />
                <MyTextInput
                    Title="Password"
                    placeholder="Enter You Email"
                />
            </View>
            <View style={{ height: 30 }} />
            <MyButton Title="SignUp" color="green" />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 10
                }}>
                <View style={{ borderWidth: 1, width: '40%', marginTop: 15, borderColor: 'green' }} />
                <MyText text="OR"
                    style={{
                        marginHorizontal: 10,
                    }}
                />
                <View style={{ borderWidth: 1, width: '40%', marginTop: 15, borderColor: 'green' }} />
                <View />
            </View>
            <TouchableOpacity>
                <MyText
                    text="Already have an account? Sign In"
                    textAlign="center"
                    color="green"
                    style={{ marginVertical: 15 }}
                />
            </TouchableOpacity>
            <View style={{ height: 30 }} />
        </KeyboardAvoidingView>
    )
}

export default SignUp


