import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import axios from 'axios';
import { TextButton } from 'react-native-material-buttons';
import { Actions } from 'react-native-router-flux';
import {Confirm} from './common';
const qs = require('querystring');

class LoggedIn extends Component {

    state = {
        showModal1: false,
        showModal2: false
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    componentDidMount() {
        AsyncStorage.getItem('userId')
            .then((userId) => {
            if(userId ? uId = userId : uId = "" );
        })
        AsyncStorage.getItem('password')
            .then((password) => {
            if(password ? pd = password : pd = "");
        })
    }
    onPressButton() {
        var requestBody = {
            userId: uId,
            password: pd,
            serviceName: "ProntoAuthentication",
            Submit22: "Login"
        }
        console.log(requestBody)
        //var parsedBody = JSON.stringify(requestBody);
    
        var config = {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        // request({
        //     url: 'http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.msftconnecttest.com/redirect',
        //     method: 'post',
        //     form: parsedBody
        // }, (body) => {
        //     console.log(body);
        // });
        axios.post( 'http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://www.msftconnecttest.com/redirect', qs.stringify(requestBody), config )
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
        });
        this.setState({showModal1: true})

    }
    onPressButtonLogout() {
        axios.get( 'http://phc.prontonetworks.com/cgi-bin/authlogout')
        .then((response) => {
            console.log(response);
        });
        this.setState({showModal2: true})
    }
    onPressButtonChangeId() {
        AsyncStorage.removeItem('userId');
        AsyncStorage.removeItem('password');
        Actions.root();
    }
    onAcceptLogin(){
        this.setState({showModal1: false})
    };
    onAcceptLogout(){
        this.setState({showModal2: false})
    };
render() {
    return (
        <View style = {{marginTop: 300, alignItems: 'center'}} >

        <TextButton 
            title = 'Login' 
            color = 'rgb(255, 255, 255)'
            shadeColor = 'rgb(44, 93, 85)'
            titleColor = 'rgba(44, 93, 85, 1)'
            borderRadius = {1}
            style = {{
                borderRadius: 8,
                borderWidth: 2,
                fontSize: 20,
                borderColor: 'rgb(40,40,40)',
                marginRight: 15,
            }}
            onPress = {this.onPressButton.bind(this)}
        />
        <Confirm
            visible = { this.state.showModal1 } 
            onAccept = { this.onAcceptLogin.bind(this) }
            >
            You have successfully logged in.
        </Confirm>
        <TextButton 
            title = 'Logout' 
            color = 'rgb(255, 255, 255)'
            shadeColor = 'rgb(44, 93, 85)'
            titleColor = 'rgba(44, 93, 85, 1)'
            borderRadius = {1}
            style = {{
                borderRadius: 8,
                borderWidth: 2,
                fontSize: 20,
                marginTop: 50,
                borderColor: 'rgb(40,40,40)',
                marginRight: 15,
            }}
            onPress = {this.onPressButtonLogout.bind(this)}
        />
        <Confirm
            visible = { this.state.showModal2 } 
            onAccept = { this.onAcceptLogout.bind(this) }
            >
            You have successfully logged Out.
        </Confirm>
        <TextButton 
            title = 'Change ID' 
            color = 'rgb(255, 255, 255)'
            shadeColor = 'rgb(44, 93, 85)'
            titleColor = 'rgba(44, 93, 85, 1)'
            borderRadius = {1}
            style = {{
                borderRadius: 8,
                borderWidth: 2,
                fontSize: 20,
                marginTop: 50,
                borderColor: 'rgb(40,40,40)',
                marginRight: 15,
                marginBottom: 30
            }}
            onPress = {this.onPressButtonChangeId.bind(this)}
        />
    </View>  
    )
}
}

export default LoggedIn;
