import { useRecoilState } from 'recoil';
import { appearState } from '../utils/recoilAtom'
import CountDown from './CountDown';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export const Container = () => {
  const [appear, setAppear] = useRecoilState(appearState)

  const startGetChoice = () => {
    console.log('startGetChoice');
    setAppear(true)
  }

  return (
    <View style={styles.container}>
    <Text>Decide your choice instantly.</Text>
    <StatusBar style="auto" />
      <Button title="Get your choice!!" onPress={() => startGetChoice()} />
      {appear == true ?
        <CountDown />
        :
        <View></View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
