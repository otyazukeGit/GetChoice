import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';

const CountDown = () => {
  return (
    <View style={styles.countDownArea}>
      <Animatable.Text
        animation="zoomIn"
        style={styles.countDownItem}
        iterationCount={1}
        // onAnimationEnd={() => EndGetChoice()}
      >
        The choice is...
      </Animatable.Text>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default CountDown
