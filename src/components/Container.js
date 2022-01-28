// import React from 'react';
import { useRecoilState } from 'recoil';
import { appearState, modalVisibleState, choiceListState, textState } from '../utils/recoilAtom'
import CountDown from './CountDown';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal, Pressable, TextInput, FlatList } from 'react-native';
// import { TextInput } from 'react-native-web';
// import { useState } from 'react/cjs/react.production.min';

export const Container = () => {
  const [appear, setAppear] = useRecoilState(appearState)
  const [modalVisible, setModalVisible] = useRecoilState(modalVisibleState)
  const [choiceList, setChoiceList] = useRecoilState(choiceListState)
  
  const [text, onChangeText] = useRecoilState(textState)

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
    <View>
      {/* <Text style={styles.title}>{title}</Text> */}
      <TextInput
        style={styleFlatList.item}
        placeholder={title}
      />
    </View>
  )

  const renderItem = ({ item }) => <Item title={item.title} />

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
      <TextInput
        onChangeText={text => onChangeText(text)}
        value={text}
        placeholder="by walk"
      />
      <Text style={styles.textArea}>List:</Text>
      <FlatList
        style={styleFlatList.flatList}
        data={DATA} renderItem={renderItem} keyExtractor={item => item.id}
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
  textArea: {
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 23
  },
})

styleFlatList = StyleSheet.create({
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
