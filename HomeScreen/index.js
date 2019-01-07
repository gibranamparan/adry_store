import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './HomeScreen'
import { Card
        , CardItem
        , Container
        , Content
        , Body
        , Button
        , Header
        , Icon
        , Left
        , Right
        , Text
        , Title } from "native-base";
import { DrawerNavigator } from 'react-navigation'

const mainMenu = createDrawerNavigator({
    Home: {
        screen: HomeScreen
    }
})

export default mainMenu;