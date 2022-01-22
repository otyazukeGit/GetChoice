import { StyleSheet, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { appearState, animationCountState, modalVisibleState } from '../utils/recoilAtom'
import * as Animatable from 'react-native-animatable';


const CountDown = () => {
  const [appear, setAppear] = useRecoilState(appearState)
  const [animationCount, setAnimationCount] = useRecoilState(animationCountState)
  const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState)
  
  const animate = () => {
    console.log("animate");
    switch (animationCount) {
      case 3:
        setAnimationCount(2)
        break
      case 2:
        setAnimationCount(1)
        break
      case 1:
        setAnimationCount(3)
        setAppear(false)
        setModalVisible(true)
        break
      default:
        break
    }
  }

  const CountNumAnimation = () => {
    return (
      <Animatable.Text
        animation="zoomIn"
        style={styles.countDownItem}
        iterationCount={1}
        onAnimationEnd={() => animate()}
      >
        <Text style={styles.countDownItem}>
          {animationCount}
        </Text>
      </Animatable.Text>
    )
  }

  return (
    <View style={styles.countDownArea}>
      <CountNumAnimation />
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
    fontSize: 80
  },
});

export default CountDown
