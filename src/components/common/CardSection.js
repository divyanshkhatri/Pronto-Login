import React from 'react';
import {View} from 'react-native';

const CardSection = (props) =>{
    return(
        <View style={styles.ContainerStyle}>
            {props.children}
        </View>
    )
}  

const styles = {
    ContainerStyle: {
        borderBottomWidth: 1,
        bottomBorderRadius: 2,
        padding: 10,
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOppacity: 0.1,
        shadowRadius: 2,
        alignItems: 'stretch',
    }
}

export { CardSection };