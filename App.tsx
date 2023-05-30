import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, NativeModules, Dimensions, Alert } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
const { CalendarModuleCustom } = NativeModules;
// var Sound = require('react-native-sound');
import {
  Player,
  Recorder,
  MediaStates
} from '@react-native-community/audio-toolkit';
import WebView from 'react-native-webview';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    },
  ],
};

const chartConfig = {
  backgroundColor: 'white',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'blue'
  },
  button: {
    // width: 20, height: 20,
  },
  buttonText: {
    color: 'black'
  }
});

export default function App() {
  const formatYLabel = (label: string) => {
    return label.toString();
  };

  const formatXLabel = (label: string) => {
    if (['Feb', 'Apr', 'Jun'].includes(label))
      return '';
    return label.toString();
  };

  const [disabled, setDisabled] = useState(false);

  // function _onPress() {
  //   // Disable button while recording and playing back
  //   setDisabled(true);

  //   // Start recording
  //   let rec = new Recorder("filename.mp4").record();

  //   // Stop recording after approximately 3 seconds
  //   setTimeout(() => {
  //     rec.stop((err) => {
  //       // NOTE: In a real situation, handle possible errors here

  //       // Play the file after recording has stopped
  //       new Player("filename.mp4")
  //         .play()
  //         .on('ended', () => {
  //           // Enable button again after playback finishes
  //           setDisabled(false);
  //         });
  //     });
  //   }, 3000);
  // }
  const INJECTED_JS = `function (message) {
    window.ReactNativeWebView.postMessage(message)
  }`
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        accessible={true}
        accessibilityLabel="Go back"
        accessibilityHint="Navigates to the previous screen"
        onPress={() => {
          requestAnimationFrame(() => {
            for (let i = 0; i < 200; i++) {
              console.log(i);
            }
          })
          // CalendarModuleCustom.createCalendarEvent('calendar', 'herer----');
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel=""
        accessibilityHint="Navigates to the previous screen"
        onPress={_onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Record</Text>
        </View>
      </TouchableOpacity> */}
      <View style={{
        width: Dimensions.get('screen').width,
        height: 700,
        // height: Dimensions.get('screen').width,
      }}>
      <WebView
        source={{ uri: "https://testweb-d8550.web.app/index.html" }}
        style={{
          flex: 1,
          // width: Dimensions.get('screen').width,
          // height: 100,
          // height: Dimensions.get('screen').width,
        }}
        onError={e => {
          console.log(e);
        }}
        injectedJavaScript={INJECTED_JS}
        onMessage={(event) => {
          console.log('==event===', event)
          Alert.alert(event.nativeEvent.data);
        }}
      />
    </View>
    </View >
  );
}

