import React from 'react';
import AppLoading from 'expo-app-loading';

const CustomAppLoading = () => {
    return(
        <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
    />
    )
}
export default CustomAppLoading