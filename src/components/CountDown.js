import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { appearState, animationCountState } from '../utils/recoilAtom'
import * as Animatable from 'react-native-animatable';


const CountDown = () => {
  const [appear, setAppear] = useRecoilState(appearState)
  const [animationCount, setAnimationCount] = useRecoilState(animationCountState)
  
  const EndGetChoice = () => {
    console.log('EndGetChoice');
    setAppear(false)
  }

  const animate = () => {
    console.log("animate");
    switch (animationCount) {
      case 0:
        setAnimationCount(1)
        break
      case 1:
        setAnimationCount(2)
        setAppear(false)
        break
      case 2:
        // setAnimationCount(0)
        setAppear(false)
        break
      default:
    }
  }

  return (
    <View style={styles.countDownArea}>
      {animationCount === 0 ?
        <Animatable.Text
          animation="zoomIn"
          style={styles.countDownItem}
          iterationCount={1}
          onAnimationEnd={() => animate()}
        >
          <Text>
            The choice is...{appear == false ? "1" : "2"}...{animationCount}
          </Text>
        </Animatable.Text>
        :
        <Animatable.Text
          animation="zoomInDown"
          style={styles.countDownItem}
          iterationCount={1}
          onAnimationEnd={() => animate()}
        >
          <Text>
            The choice is...{appear == false ? "1" : "2"}...{animationCount}
          </Text>
        </Animatable.Text>
       }
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
