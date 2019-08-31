import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux'; 
import login from './login';
import LoggedIn from './LoggedIn';
import { AsyncStorage, View } from 'react-native'
import Sample from './sample';
class RouterComponent extends Component {

    constructor(props){
        super(props)
        AsyncStorage.getItem('userId')
            .then((userToken) => {
            if(userToken){
                Actions.main();
            }
        })
    }

    render() {
        return (
            <Router {...sceneConfig}>
            <Scene>
                <Scene key = "root" navTransparent initial>
                    <Scene style = {{marginTop: 100}} key = "Login" component = {login} title = "" navTransparent initial/>
                </Scene>
                <Scene key = "main" navTransparent renderBackButton={()=><View />}>
                    <Scene key = "Sample" component = {Sample} title = "" navTransparent initial renderBackButton={()=><View />} />
                    <Scene key = "LoggedIn" component = {LoggedIn} title = "" navTransparent renderBackButton={()=><View />} />
                </Scene>
            </Scene>
            </Router>
        )
    }
}
var sceneConfig = {
    cardStyle: {
      backgroundColor: 'white'
    }
}

export default RouterComponent;