import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
// import { useState } from 'react/cjs/react.production.min';
import { useState } from 'react/cjs/react.development';

export default function App() {
const [appear, setAppear] = useState(false)

const startGetChoice = () => {
  console.log('startGetChoice');
  setAppear(true)
}

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
      <Button title="Click!" onPress={() => startGetChoice()} />
      <View style={appear == true ? styles.countDownArea : styles.notAppear}>
        <Animatable.Text
          animation="zoomIn"
          style={styles.countDownItem}
          iterationCount={2}
          onAnimationEnd={() => alert("aaaa")}
        >
          The choice is...
        </Animatable.Text>
      </View>
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
    height: "30%",
    width: "50%",
    backgroundColor: 'skyblue',
  },
  countDownItem: {
    fontSize: 20
  },
  notAppear: {
    display:"none"
  }
});
