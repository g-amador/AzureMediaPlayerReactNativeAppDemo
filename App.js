import React, { Component } from 'react';
import {View,StyleSheet,AppRegistry} from 'react-native';
import { WebView } from 'react-native-webview';

export default class ActivityIndicatorDemo extends Component {  
    render() {  
        return (  
            <View style = {styles.container}>  
                <WebView  
                    /*source = {{ uri:'hhttps://ampdemo.azureedge.net/azuremediaplayer.html?url=%2F%2Famssamples.streaming.mediaservices.windows.net%2F3b970ae0-39d5-44bd-b3a3-3136143d6435%2FAzureMediaServicesPromo.ism%2Fmanifest' }}					*/
					/*source = {{ uri:'hhttps://ampdemo.azureedge.net/azuremediaplayer_embed.html?url=%2F%2Famssamples.streaming.mediaservices.windows.net%2F3b970ae0-39d5-44bd-b3a3-3136143d6435%2FAzureMediaServicesPromo.ism%2Fmanifest' }}					*/					
					source={{uri:'file:///android_asset/index.html'}}
                />  
            </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  
  
AppRegistry.registerComponent('App', () => ActivityIndicatorDemo)  

                           