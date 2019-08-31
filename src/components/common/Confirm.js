import React from 'react';
import {Text, View, Modal, TouchableOpacity } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = (props) => {
    const { containerStyle, cardSectionStyle, textStyle } = styles;
    return(
        <Modal
        animationType = "slide"
        transparent 
        visible = {props.visible}>
            <View style = {containerStyle}> 
                <CardSection style = {cardSectionStyle}>
                    <Text style = {textStyle}>
                        {props.children}
                    </Text>
                </CardSection>
                    <TouchableOpacity style ={{width: 30}} onPress = { props.onAccept } >
                        <Text style = {{color: 'white', fontSize: 18}}>Ok</Text>
                    </TouchableOpacity>
            </View>
        </Modal>
        )
    
}
const styles = {
    cardSectionStyle : {
        justifyContent : 'center'
    },
    textStyle : {
        fontSize : 20,
        textAlign : 'center',
        lineHeight : 40,
        color: 'white'
    },
    containerStyle : {
        backgroundColor: 'rgba(0, 0 , 0 , 0.75 )',
        alignItems: 'center',
        // 0.75 for the opacity
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }

}

export { Confirm } ;