import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { useState } from 'react/cjs/react.production.min';
// import { useState } from 'react/cjs/react.development';
import CountDown from './src/components/CountDown';
import { atom, useAtom, Provider } from 'jotai'
import * as jotaiAtom from './src/utils/jotaiAtom'

/* atom() should be out of components */
// const appearAtom = atom(false)
// const appearToggleAtom = atom(
//   (get) => get(appearAtom),
//   (get, set) => {
//     set(appearAtom, true)
//   },
// )

export default function App() {
  const [appear, setAppear] = useAtom(jotaiAtom.appearToggleAtom)

  const startGetChoice = () => {
    console.log('startGetChoice');
    setAppear()
  }
  // const allert = () => {
  //   Alert.alert("aaaa")
  // }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
      <Provider>
        <Text>{appear == false ? "1" : "2"}</Text>
        <Button title="Click!" onPress={() => startGetChoice()} />
        {appear == true ?
          <CountDown appear={appear == false ? "1" : "2"}/>
          :
          <View></View>
        }
      </Provider>
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
