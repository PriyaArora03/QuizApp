import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';

const Questions = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
               <Text>Question/Answer</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});
export default Questions;