import React from 'react';
import { View, ActivityIndicator} from 'react-native';


const Spinner = ()=>{
    return(
        <View>
            <ActivityIndicator style = {styles.spinnerStyle}
            size = {'large'} />
        </View>
    )
}
const styles = {
    spinnerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}
export { Spinner };