import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
// import { useState } from 'react/cjs/react.production.min';
import { useState } from 'react/cjs/react.development';
import CountDown from './src/components/CountDown';

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

  // const allert = () => {
  //   Alert.alert("aaaa")
  // }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
      <Button title="Click!" onPress={() => startGetChoice()} />
      {appear == true ?
        <CountDown/>
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
});
