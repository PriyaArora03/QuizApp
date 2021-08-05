import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
    {
        id: '1',
        name: 'Core Data',
    },
    {
        id: '2',
        name: 'Collection Views',
    },
    {
        id: '3',
        name: 'XCTest',
    },
    {
        id: '4',
        name: 'SwiftUI',
    },
    {
        id: '5',
        name: 'Combine',
    }
];

const Categories = ({ navigation }) => {

    const onPressCategory = (item) => {
        console.log("Button Pressed", item)
        navigation.navigate('Questions', {
            data: item
        })
    }

    const Item = ({ item }) => (
        <TouchableOpacity
            style={{ width: '100%' }}
            onPress={() => { onPressCategory(item) }}>
            <View
                style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Icon name="angle-right" size={28} color="black" />
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        if (item.empty) {
            return <View style={[styles.item]}>
            </View>
        }
        return (
            <Item title={item.name}
                item={item}
            />
        )
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <FlatList
                    style={styles.flatlist}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}>
                </FlatList>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    flatlist: {
        width: '98%',
        paddingHorizontal: '1%'
    },
    item: {
        margin: 4,
        height: 80,
        width: '100%',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft:10,
        width: '90%'
    }
});
export default Categories;