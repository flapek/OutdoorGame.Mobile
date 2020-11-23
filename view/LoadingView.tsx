import React from 'react'
import { View, Text, ActivityIndicator} from 'react-native';

const LoadingView = () => {
    return (
        <View>            
            <View>
                <ActivityIndicator size="large" color="#0c9" />
                <Text>Loading Data</Text>
            </View>
        </View>
    )
}

export default LoadingView;