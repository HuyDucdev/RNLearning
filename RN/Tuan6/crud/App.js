import { useEffect, useState, useRef } from 'react';
import {
  View,
  FlatList,
  Text,
  Pressable,
  TextInput,
  Modal,
  ScrollView
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const renderItem = ({item}) => (
<View style = {{flex: 1, alignItems: 'center'}}>
    
    <View style = {{flexDirection: 'row', width: 250, backgroundColor: '#D3D5D9', marginVertical: 10, paddingVertical: 10, borderRadius: 20, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style = {{fontSize: 18, fontWeight: 700}}>{item.content}</Text>
      <View style = {{flexDirection: 'row', gap: 5}}>
        <Pressable >
          <Ionicons name="create-outline" size={20} color="black" />
        </Pressable>
        <Pressable>
          <Ionicons name="close-outline" size={20} color="black" />
        </Pressable>
      </View>
    </View>
</View>
);

const App = () => {

  const [data, setData] = useState([]);
  const [textData, setText] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const bgRef = useRef("null")
  useEffect(() => {
    fetch('https://661389d053b0d5d80f6799e5.mockapi.io/test') 
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false)
      });
  }, [data]);


  const createNewData = async () => {
    const newId = uuidv4(); // Tạo ID mới
    const newData = {
      id: newId,
      content: textData,
    };

    try {
      const response = await axios.post('https://661389d053b0d5d80f6799e5.mockapi.io/test', newData);
      setResponseMessage('Data created successfully!');
    } catch (error) {
      if (error.response) {
        setResponseMessage(`Error: ${error.response.data.message}`);
      } else {
        setResponseMessage('Failed to send data');
      }
    }
  };


 

  return (
    <ScrollView style = {{flex: 1, alignItems: 'center'}}  ref = {bgRef}>
      
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
          <View style={{ width: 200, height: 110, borderWidth: 1, backgroundColor: "black"}}>
            <Pressable style = {{alignSelf: "flex-end"}} onPress={() => {
              setModalVisible(false)
              bgRef.current.style.opacity = "1"}}> 
              <Ionicons name="close-outline" size={30} color="white" />  
            </Pressable>
            <TextInput style = {{color: "white"}}
              value = {textData}
              onChangeText = {setText}
              placeholder = "Nhap noi dung moi"
            />
            <Pressable style = {{alignSelf: "flex-end"}} onPress={createNewData}> 
              <Ionicons name="checkmark-outline" size={30} color="white" />  
            </Pressable>
            <Text style = {{color: "white"}}>{responseMessage}</Text>
            
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


      <Pressable 
      style = {{left: 100}}
        onPress = {()=>{
          setModalVisible(true) 
          bgRef.current.style.opacity = "0.5"
        }}>
          <Ionicons name="add-circle-outline" size={50} color="black" />
      </Pressable>
    </ScrollView>


 

  );
};



export default App;