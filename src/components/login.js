import React, { Component } from 'react';
import { Image, View, AsyncStorage } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Actions } from 'react-native-router-flux';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {Confirm} from './common';
class Login extends Component {

    state = {
        username: "",
        password: "",
        showModal1: false,
        showModal3: false
    }

    onPressButton() {
        AsyncStorage.setItem('userId', this.state.username);
        AsyncStorage.setItem('password', this.state.password);
        if(this.state.username!= "" && this.state.password!="")
        Actions.main({username: this.props.username, password: this.props.password});
        else if(this.state.username == ""){
            this.setState({showModal1: true})
        }
        else if(this.state.password == "" ){
            this.setState({showModal3: true})
        }
    }

    onAcceptr(){
        this.setState({showModal1: false})
    };
    onAcceptp(){
        this.setState({showModal2: false})
    }

    render() {

        return(
            <View>
                <Image style = {styles.imageStyle}
                source = {require('../assets/login.png')} 
                />
                <Confirm
                    visible = { this.state.showModal1 } 
                    onAccept = { this.onAcceptr.bind(this) }
                >
                    Please enter the registration number.
                </Confirm>
                <Confirm
                    visible = { this.state.showModal3 } 
                    onAccept = { this.onAcceptp.bind(this) }
                >
                    Please enter the password.
                </Confirm>
                <View style = { { marginLeft: 130 ,marginRight: 130, marginTop: 90} } >
                        
                    <TextField 
                        style = {{ textAlign: 'center', paddingRight: 15,alignItems: "center", justifyContent: "center"}}
                        textColor = 'rgb(44, 93, 85)'
                        labelPadding = {5}
                        label = ""
                        labelFontSize = {25}
                        multiline = {true}
                        value= {this.state.username}
                        placeholder = {'USERNAME'}
                        tintColor = 'rgb(44, 93, 85)'
                        inputContainerStyle    
                        autoCapitalize = "characters"
                        onChangeText = {(username) => this.setState({username})}
                        baseColor = 'rgb(44, 93, 85)'
                        placeholderTextColor = 'rgb(44, 93, 85)'
                    />
                    <View style = { {marginTop: 40} }>
                        <TextField 
                            style = {{paddingRight: 15, textAlign: 'center'}}
                            textColor ='rgb(44, 93, 85)'
                            label = ""
                            labelPadding = {5}
                            labelFontSize = {30}
                            value={this.state.password}
                            placeholder = {'PASSWORD'}
                            tintColor = 'rgb(44, 93, 85)'
                            inputContainerStyle      
                            secureTextEntry
                            autoCapitalize = "none"
                            onChangeText = {(password) => this.setState({password})}  
                            baseColor = 'rgb(44, 93, 85)'    
                            placeholderTextColor = 'rgb(44, 93, 85)'
                        />
                    </View>
                    <View style = {{marginTop: 60, alignItems: 'center'}} >
                    <TouchableHighlight onPress = {this.onPressButton.bind(this)} >
                        <Image 
                            source = {require('../assets/next.png')}
                            style = {{
                                width: 35,
                                height: 35
                            
                            }}
                        />
                    </TouchableHighlight>
                </View>  
            </View>
        </View>
        )
    }
}

styles = {
    imageStyle : {
        width: 180,
        height: 180,
        marginTop: 120,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    textInput : {
        borderRadius: 8,
        margin: 15,
        height: 40,
        width: 250,
        borderColor: '#7a42f4',
        borderWidth: 1
    }        
}

export default Login;