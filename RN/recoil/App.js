// src/App.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Pressable, TextInput, Modal, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataState, dataSelector } from './components/recoilState';
import { createData, updateData, deleteData } from './components/api';
import { v4 as uuidv4 } from 'uuid';

import { registerRootComponent } from 'expo';
import Main from './Main';
registerRootComponent(Main); 

const App = () => {
  const [data, setData] = useRecoilState(dataState);
  const fetchedData = useRecoilValue(dataSelector);
  const [textData, setTextData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    setData(fetchedData); // Khởi tạo dữ liệu khi ứng dụng bắt đầu
  }, [fetchedData]);

  // Thêm dữ liệu mới từ API
  const addData = async () => {
    const newItem = { id: uuidv4(), content: textData };
    try {
      const createdItem = await createData(newItem);
      setData((prevData) => [...prevData, createdItem]);
      setTextData('');
      setModalVisible(false);
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  // Xóa dữ liệu từ API
  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Cập nhật dữ liệu từ API
  const handleUpdate = async () => {
    const updatedItem = { content: textData };
    try {
      await updateData(currentId, updatedItem);
      setData((prevData) =>
        prevData.map((item) =>
          item.id === currentId ? { ...item, content: textData } : item
        )
      );
      setTextData('');
      setModalVisible(false);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const editData = (item) => {
    setTextData(item.content);
    setCurrentId(item.id);
    setIsEditing(true);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.content}</Text>
      <View style={styles.actions}>
        <Pressable onPress={() => editData(item)}>
          <Ionicons name="create-outline" size={20} color="black" />
        </Pressable>
        <Pressable onPress={() => handleDelete(item.id)}>
          <Ionicons name="close-outline" size={20} color="black" />
        </Pressable>
      </View>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, alignItems: 'center' }}>
      <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            value={textData}
            onChangeText={setTextData}
            placeholder="Nhập nội dung"
          />
          <Pressable onPress={isEditing ? handleUpdate : addData} style={styles.button}>
            <Ionicons name="checkmark-outline" size={30} color="white" />
          </Pressable>
        </View>
      </Modal>

      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />

      <Pressable onPress={() => { setModalVisible(true); setTextData(''); setIsEditing(false); }} style={styles.addButton}>
        <Ionicons name="add-circle-outline" size={50} color="black" />
      </Pressable>
    </ScrollView>
  );
};

const styles = {
  itemContainer: {
    flexDirection: 'row',
    width: 250,
    backgroundColor: '#D3D5D9',
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemText: { fontSize: 18 },
  actions: { flexDirection: 'row', gap: 10 },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: { color: 'black', backgroundColor: 'white', padding: 10, borderRadius: 5, width: 200 },
  button: { marginTop: 10, alignItems: 'center' },
  addButton: { marginTop: 20 },
};

export default App;
