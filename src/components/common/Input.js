import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props)=> {
    return(
        <View style = {styles.labelStyle}>
            <Text style >{props.label}</Text>
            <TextInput 
            secureTextEntry = {props.secureTextEntry}
            placeholder = {props.placeholder}
            autoCorrect = {false}
            style = {styles.textStyle}
            value = {props.value}
            onChangeText = {props.onChangeText} />
        </View>
    )


}
const styles = {
    labelStyle: {
        flexDirection: 'row'
    },
    textStyle: {
        marginLeft: 20,
        flex: 1
    }
}

export {Input};
//Label, Value, OnChangeText
    
// import React from 'react';
// import { TextInput, View, Text } from 'react-native';

// const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
//   const { inputStyle, labelStyle, containerStyle } = styles;

//   return (
//     <View style={containerStyle}>
//       <Text style={labelStyle}>{label}</Text>
//       <TextInput
//         secureTextEntry={secureTextEntry}
//         placeholder={placeholder}
//         autoCorrect={false}
//         style={inputStyle}
//         value={value}
//         onChangeText={onChangeText}
//       />
//     </View>
//   );
// };

// const styles = {
//   inputStyle: {
//     color: '#000',
//     paddingRight: 5,
//     paddingLeft: 5,
//     fontSize: 18,
//     lineHeight: 23,
//     flex: 2
//   },
//   labelStyle: {
//     fontSize: 18,
//     paddingLeft: 20,
//     flex: 1
//   },
//   containerStyle: {
//     height: 40,
//     flexDirection: 'row',
//     alignItems: 'center'
//   }
// };

// export { Input };