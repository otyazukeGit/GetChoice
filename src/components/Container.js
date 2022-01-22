import { useRecoilState } from 'recoil';
import { appearState, modalVisibleState } from '../utils/recoilAtom'
import CountDown from './CountDown';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';

export const Container = () => {
  const [appear, setAppear] = useRecoilState(appearState)

  // const [modalVisible, setModalVisible] = useState(true)
  const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState)

  const startGetChoice = () => {
    console.log('startGetChoice');
    setAppear(true)
  }

  const ShowChoiceModal = () => {
    return (
      <View style={styles.modalArea}>
        <Modal
          animationType="fade"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalAreaTextPosition}>
            <Text style={styles.modalAreaText}>hello</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    )
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
      {modalVisible == true ?
        <ShowChoiceModal />
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
  modalArea: {
    position: "absolute",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 220,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  modalAreaTextPosition: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalAreaText: {
    fontSize: 80
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "powderblue",
  },
})
