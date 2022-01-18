import { StyleSheet, Text, View } from 'react-native';
// import { useAtom } from 'jotai'
// import * as jotaiAtom from '../utils/jotaiAtom'
import { useRecoilState } from 'recoil';
import { appearState } from '../utils/recoilAtom'
import * as Animatable from 'react-native-animatable';


const CountDown = () => {
  const [appear, setAppear] = useRecoilState(appearState)
  console.log('appear: ', appear);
  
  const EndGetChoice = () => {
    console.log('EndGetChoice');
    setAppear(false)
  }

  return (
    <View style={styles.countDownArea}>
      <Animatable.Text
        animation="zoomIn"
        style={styles.countDownItem}
        iterationCount={1}
        onAnimationEnd={() => EndGetChoice()}
      >
        <Text>
          The choice is...{appear == false ? "1" : "2"}
        </Text>
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
