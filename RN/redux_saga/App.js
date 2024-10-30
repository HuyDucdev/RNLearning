// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Modal, TextInput, ScrollView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest, createDataRequest, deleteDataRequest, updateDataRequest } from './action'; // Đảm bảo đường dẫn đúng
import { registerRootComponent } from 'expo';
import Main from './Main';
registerRootComponent(Main); 

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const [modalVisible, setModalVisible] = useState(false);
  const [textData, setText] = useState('');
  const [currentId, setCurrentId] = useState(null);
  const [isCreate, setIsCreate] = useState(true);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  const handleSave = () => {
    if (isCreate) {
      dispatch(createDataRequest({ content: textData }));
    } else {
      dispatch(updateDataRequest(currentId, { content: textData }));
    }
    setModalVisible(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteDataRequest(id));
  };

  const renderItem = ({ item }) => (
    <View key = {item.id}>
      
      <View style = {{flexDirection: 'row', width: 250, backgroundColor: '#D3D5D9', marginVertical: 10, paddingVertical: 10, borderRadius: 20, justifyContent: 'space-around', alignItems: 'center' }}>
        <Text style = {{fontSize: 18, fontWeight: 700}}>{item.id}</Text>

        <Text style = {{fontSize: 18, fontWeight: 700}}>{item.content}</Text>
        <View style = {{flexDirection: 'row', gap: 5}}>
          <Pressable 
            onPress = {()=>{setCurrentId(item.id)
            setModalVisible(true) 
            setIsCreate(false)
            bgRef.current.style.opacity = "0.5"
            }}
          >
            <Ionicons name="create-outline" size={20} color="black" />
          </Pressable>
          <Pressable
            onPress = {()=>{deleteData(item.id)}}
          >
            <Ionicons name="close-outline" size={20} color="black" />
          </Pressable>
        </View>
      </View>
  </View>
  );

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={{ padding: 20 }}>
          <TextInput
            placeholder="Nhập nội dung"
            value={textData}
            onChangeText={setText}
          />
          <Pressable onPress={handleSave}>
            <Text>Lưu</Text>
          </Pressable>
        </View>
      </Modal>

      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />

      <Pressable onPress={() => { setIsCreate(true); setModalVisible(true); }}>
        <Ionicons name="add-circle-outline" size={50} color="black" />
      </Pressable>
    </ScrollView>
  );
};

export default App;
