

import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
            }}
        >
            <View style={{ marginTop: 50 }}>
                <Image
                    style={{ width: 150, height: 100, resizeMode: "contain" }}
                    source={{
                        uri: "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png",
                    }}
                />
            </View>

        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})