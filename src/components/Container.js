import { useRecoilState } from 'recoil';
import { appearState, modalVisibleState, choiceListState, textState } from '../utils/recoilAtom'
import CountDown from './CountDown';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable, TextInput, FlatList } from 'react-native';

  const Item = ({ item, EditNewChoice }) => (
    <View>
      <TextInput
        name={item.id}
        onChangeText={choice => EditNewChoice(item.id, choice)}
        style={styleFlatList.item}
        placeholder={item.choice}
        value={item.choice}
      />
    </View>
  ) 

  const textList = (items, EditNewChoice) => {
    return items.map((item) => {
      return <Item key={item.id} item={item} EditNewChoice={EditNewChoice}/>
    })
  }

export const Container = () => {
  const [appear, setAppear] = useRecoilState(appearState)
  const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState)
  const [choiceList, setChoiceList] = useRecoilState(choiceListState)
  
  const EditNewChoice = (id, choice) => {
    console.log('choice: ', choice);
    console.log('id: ', id);

    const NewOne = choiceList.map((v, i) => {
      return id == v.id ? {id:id, choice:choice} : v
    })
    // console.log('NewOne: ', NewOne);
    setChoiceList(NewOne)
  }

  const startGetChoice = () => {
    console.log('startGetChoice');
    setAppear(true)
  }

  const getChoice = () => {
    return choiceList[Math.floor(Math.random() * choiceList.length)].choice
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
      <Text style={styles.textArea}>List:</Text>
      <View>
        {textList(choiceList, EditNewChoice)}
      </View>
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
  textArea: {
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 23
  },
})

const styleFlatList = StyleSheet.create({
  flatList: {
    flexGrow: 0, // defalut 1 on RN Flat List
    // marginTop: 20,
  },
  item: {
    backgroundColor: '#caddde',
    marginBottom: 5
  }
})

const stylesModal = StyleSheet.create({
  modalArea: {
    position: "absolute",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
    width: 500,
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
