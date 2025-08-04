import React from 'react';
import { View, Platform } from 'react-native';
import tw from 'twrnc';

const MarginWrapper = ({ children }) => {
  
    if (Platform.OS === 'android') {
        return <View style={tw`mt-10`}>{children}</View>;
    }


    return <>{children}</>;
};

export default MarginWrapper;