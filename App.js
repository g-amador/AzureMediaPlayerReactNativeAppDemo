import React, { Component } from 'react';
import {View,StyleSheet,AppRegistry} from 'react-native';
import { WebView } from 'react-native-webview';

export default class ActivityIndicatorDemo extends Component {  
    render() {  
        return (  
            <View style = {styles.container}>  
                <WebView  
                    /*source = {{ uri:'https://aka.ms/azuremediaplayer?url=%2F%2Famssamples.streaming.mediaservices.windows.net%2F3b970ae0-39d5-44bd-b3a3-3136143d6435%2FAzureMediaServicesPromo.ism%2Fmanifest' }}  */
					/*source = {{ uri:'https://aka.ms/azuremediaplayer?url=https%3A%2F%2Fgamadortemp-euwe.streaming.media.azure.net%2F%2Fcfe2da93-a2d2-46a6-88df-748426d05fea%2FSample%20Video%20File%20For%20Testing.mp4' }}*/
					source = {{ uri:'https://ampdemo.azureedge.net/azuremediaplayer_embed.html?url=https%3A%2F%2Fgamadortemp-euwe.streaming.media.azure.net%2F%2Fcfe2da93-a2d2-46a6-88df-748426d05fea%2FSample%20Video%20File%20For%20Testing.mp4' }}					
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

                           