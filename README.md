# <a name="toc">Table of contents 

* [Azure Media Player (AMP) react-native App Demo](#AMPrnad)

	* [Windows 10 Setup](#windows_setup)
	* [Contact](#contact)


# <a name="AMPrnad">Azure Media Player (AMP) react-native App Demo

A simple demo to illustrate how to incorporate Azure Media Player (AMP) into a react-native app using WebView.


**ReactJS and react-native are not officially supported by Microsoft Azure Media Services (AMS) SDKs or AMP.** 
**This demo is not in any way officially supported by Microsoft!**


**Relevant URLs:**\
AMP documentation\
https://docs.microsoft.com/en-us/azure/media-services/azure-media-player/azure-media-player-overview \
AMP demo page\
https://ampdemo.azureedge.net/azuremediaplayer.html \
AMP embedded player full screen demo page\
https://ampdemo.azureedge.net/azuremediaplayer_embed.html 



[Back to Table of contents](#toc)


## <a name="windows_setup">Windows 7-10 Setup

###### Step 1: React Native Environment and Android Studio Setup

Follow the walk-through available at
https://www.javatpoint.com/react-native-environment-setup

**Note:** Android Studio interface changed over time and AVD manager is now on a distinct menu (see Figs. bellow).

| Fig. 1 | Fig. 2 |
|:---:|:---:|
| [![AndroidStudioAVDmanager](https://raw.githubusercontent.com/g-amador/AzureMediaPlayerReactNativeAppDemo/master/img/1.png)](https://raw.githubusercontent.com/g-amador/AzureMediaPlayerReactNativeAppDemo/master/img/1.png) | [![AndroidStudioAVDmanager](https://raw.githubusercontent.com/g-amador/AzureMediaPlayerReactNativeAppDemo/master/img/2.png)](https://raw.githubusercontent.com/g-amador/AzureMediaPlayerReactNativeAppDemo/master/img/2.png) | 


###### Step 2: Setup the App demo

**You can either use this app as is (as long as I have my Azure Portal account), or you can set it up on your own and copy the App.js code.**\
**This is a walk-through on how to do it on your own.**


1-Open Windows PowerShell.\
2-Create your project directory (I did it in my C:\users\ACCOUNT_USER_NAME\source\repos\)\
cd C:\users\ACCOUNT_USER_NAME\source\repos\ \
mkdir ReactNative\
3-Create your app\
cd ReactNative\
react-native init AzureMediaPlayerReactNativeAppDemo\
cd AzureMediaPlayerReactNativeAppDemo\
4-Install react-native-webview\
npm i react-native-webview\
5-Replace App.js by the one provided in this project.\
6-Run your app with Android Studio Emulator running on Android\
react-native run-android


**Note:** the WebView was replaced from the built-in core react-native, and placed in react-native-webview library.


**Relevant URLs.**\
https://www.javatpoint.com/react-native-first-app-hello-world \
https://www.javatpoint.com/react-native-webview 


###### Step 3: Modify the streaming URL in App.js

1-Copy the *.ism/manifest or *.mp4 URL of your asset provided via file/live streaming and/or progressive download in Azure Portal.\
2-Modify the App.js source URL (copied from Azure Portal) in the AMP demo page and paste it into the end of the embed demo player AMP page, e.g.:\
https%3A%2F%2Fgamadortemp-euwe.streaming.media.azure.net%2F%2Fcfe2da93-a2d2-46a6-88df-748426d05fea%2FSample%20Video%20File%20For%20Testing.mp4 (Azure Portal URL)\
https://aka.ms/azuremediaplayer?url=https%3A%2F%2Fgamadortemp-euwe.streaming.media.azure.net%2F%2Fcfe2da93-a2d2-46a6-88df-748426d05fea%2FSample%20Video%20File%20For%20Testing.mp4 (AMP demo page after copying and updating URL)\
source = {{ uri:'https://ampdemo.azureedge.net/azuremediaplayer_embed.html?url=https%3A%2F%2Fgamadortemp-euwe.streaming.media.azure.net%2F%2Fcfe2da93-a2d2-46a6-88df-748426d05fea%2FSample%20Video%20File%20For%20Testing.mp4' }} (App.js)


**Relevant URLs.**\
AMS QuickStart\
https://docs.microsoft.com/en-us/azure/media-services/latest/manage-assets-quickstart \
AMP demo page\
https://ampdemo.azureedge.net/azuremediaplayer.html \
AMP embedded player full screen demo page\
https://ampdemo.azureedge.net/azuremediaplayer_embed.html


[Back to Table of contents](#toc)


## <a name="contact">Contact

You are free to use and modify this demo as you see fit.\
Please inform me if you either extend this demo, create more templates/demos/games for/with JOT, or port it to another programming language.

If you have any questions, feel free to e-mail me at [gmail](mailto://g.n.p.amador@gmail.com) and ask away.

Good luck!


[Back to Table of contents](#toc)