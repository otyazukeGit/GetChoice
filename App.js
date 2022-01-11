import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
// import { useState } from 'react/cjs/react.production.min';
import { useState } from 'react/cjs/react.development';

export default function App() {
  const [appear, setAppear] = useState(false)

  const startGetChoice = () => {
    console.log('startGetChoice');
    setAppear(true)
  }
  const EndGetChoice = () => {
    console.log('EndGetChoice');
    setAppear(false)
  }

  const allert = () => {
    Alert.alert("aaaa")
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
      <Button title="Click!" onPress={() => startGetChoice()} />
      {/* <Button title="Click!" onPress={allert} /> */}
      {/* <View style={appear == true ? styles.countDownArea : styles.notAppear}> */}
      {/* <View style={appear == true ? styles.notAppear : styles.countDownArea}> */}
      {appear == true ?
        <View style={styles.countDownArea}>
          <Animatable.Text
            animation="zoomIn"
            style={styles.countDownItem}
            iterationCount={1}
            onAnimationEnd={() => EndGetChoice()}
          >
            The choice is...
            <Text>{appear == true ? "true" : "false"}</Text>
          </Animatable.Text>
        </View>
        :
        <View></View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countDownArea: {
    position: "absolute",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    borderRadius: 300/2,
    backgroundColor: 'skyblue',
  },
  countDownItem: {
    fontSize: 20
  },
  notAppear: {
    display:"none"
  }
});
