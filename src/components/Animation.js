import React,{ Component } from 'react';
import { View, Text, Animated } from 'react-native';

class Animation extends Component {
    state = {
        slide: new Animated.ValueXY()
    }
    slideRight = Animated.spring(
        this.state.slide, {
            toValue
        }
    )
}

export default Animation;