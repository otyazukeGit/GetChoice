import { useRecoilState } from 'recoil';
import { appearState, modalVisibleState, choiceListState } from '../utils/recoilAtom'
import CountDown from './CountDown';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable } from 'react-native';

export const Container = () => {
  const [appear, setAppear] = useRecoilState(appearState)
  const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState)
  const [choiceList, setChoiceList] = useRecoilState(choiceListState)

  const startGetChoice = () => {
    console.log('startGetChoice');
    setAppear(true)
  }

  const getChoice = () => {
    return choiceList[Math.floor(Math.random() * choiceList.length)]
  }

  const ShowChoiceModal = () => {
    return (
      <View style={stylesModal.modalArea}>
        <Modal
          animationType="fade"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {
            // Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={stylesModal.modalAreaTextPosition}>
            <Text style={stylesModal.modalAreaText}>{getChoice()}</Text>
            <Pressable
              style={[stylesModal.button, stylesModal.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={stylesModal.textStyle}>OK</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Decide your choice instantly.</Text>
    <StatusBar style="auto" />
      <Button
        // style={styles.button}
        color="blue"  //text (iOS) or background color (Android).
        title="Press"
        onPress={() => startGetChoice()}
      />
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
  text: {
    fontSize: 23
  },
})

const stylesModal = StyleSheet.create({
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
