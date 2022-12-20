import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
    return (
      <View style={{width:'100%', height:'100%'}}>
      <WebView
        source={{ uri: 'http://localhost:4200' }}
        style={{ marginTop: 20 }}
      />
      </View>
    );
  
}