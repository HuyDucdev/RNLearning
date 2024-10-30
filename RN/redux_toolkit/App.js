// App.js

import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Text, Pressable, TextInput, Modal, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  createDataSuccess,
  deleteDataSuccess,
  updateDataSuccess,
} from './components/reducer'; // Đảm bảo đường dẫn đúng
import axios from 'axios';
import { registerRootComponent } from 'expo';
import Main from './Main';
registerRootComponent(Main); 

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.items);
  const error = useSelector(state => state.data.error);
  const loading = useSelector(state => state.data.loading);
  const [textData, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [isCreate, setIsCreate] = useState(true);

  const bgRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataRequest());
      try {
        const response = await axios.get('https://661389d053b0d5d80f6799e5.mockapi.io/test');
        dispatch(fetchDataSuccess(response.data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <View key={item.id}>
      <View style={{ flexDirection: 'row', width: 250, backgroundColor: '#D3D5D9', marginVertical: 10, paddingVertical: 10, borderRadius: 20, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>{item.id}</Text>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>{item.content}</Text>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <Pressable onPress={() => {
            setCurrentId(item.id);
            setText(item.content);
            setModalVisible(true);
            setIsCreate(false);
          }}>
            <Ionicons name="create-outline" size={20} color="black" />
          </Pressable>
          <Pressable onPress={async () => {
            try {
              await axios.delete(`https://661389d053b0d5d80f6799e5.mockapi.io/test/${item.id}`);
              dispatch(deleteDataSuccess(item.id));
            } catch (error) {
              console.error(error);
            }
          }}>
            <Ionicons name="close-outline" size={20} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );

  const handleSubmit = async () => {
    const newData = { content: textData };
    if (isCreate) {
      try {
        const response = await axios.post('https://661389d053b0d5d80f6799e5.mockapi.io/test', newData);
        dispatch(createDataSuccess(response.data));
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.put(`https://661389d053b0d5d80f6799e5.mockapi.io/test/${currentId}`, newData);
        dispatch(updateDataSuccess(response.data));
      } catch (error) {
        console.error(error);
      }
    }
    setText('');
    setModalVisible(false);
    setCurrentId(null);
  };

  return (
    <ScrollView style={{ flex: 1, alignItems: 'center' }} ref={bgRef}>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      {loading && <Text>Loading...</Text>}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
          <View style={{ width: 200, height: 110, borderWidth: 1, backgroundColor: "black" }}>
            <Pressable style={{ alignSelf: "flex-end" }} onPress={() => setModalVisible(false)}>
              <Ionicons name="close-outline" size={30} color="white" />
            </Pressable>
            <TextInput
              style={{ color: "white" }}
              value={textData}
              onChangeText={setText}
              placeholder="Nhập nội dung mới"
            />
            <Pressable style={{ alignSelf: "flex-end" }} onPress={handleSubmit}>
              <Ionicons name="checkmark-outline" size={30} color="white" />
            </Pressable>
          </View>
        </View>
      </Modal>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Pressable style={{ left: 100 }} onPress={() => {
        setModalVisible(true);
        setIsCreate(true);
        setText('');
      }}>
        <Ionicons name="add-circle-outline" size={50} color="black" />
      </Pressable>
    </ScrollView>
  );
};

export default App;
