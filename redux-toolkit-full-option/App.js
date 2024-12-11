import React, { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, ScrollView } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { fetchData, deleteData, createUser, updateTodo } from './redux/slices/fetchDataSlice';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.fetchData.listData);

  useEffect(() => {
    dispatch(fetchData()); 
  }, []);

  const handleLogin = () => {
    const user = listData.find(user => user.email === email && user.password === password);
    if (user) {
      navigation.navigate('User', { user });
    } else {
      alert('Email hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <View>
      <Text>Đăng nhập</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Mật khẩu" value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
};

const User = ({ navigation }) => {
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.fetchData.listData);
  const status = useSelector((state) => state.fetchData.status);
  const error = useSelector((state) => state.fetchData.error);
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };
  const [editingTodo, setEditingTodo] = useState(null);
  const [updatedTodo, setUpdatedTodo] = useState('');

  const handleUpdateTodo = (userId, todoIndex) => {
    if (!updatedTodo.trim()) {
      alert('Todo không được để trống!');
      return;
    }

    dispatch(updateTodo({ userId, todoIndex, updatedTodo }))
      .unwrap()
      .then(() => {
        alert('Cập nhật Todo thành công!');
        setEditingTodo(null);
        setUpdatedTodo('');
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật Todo:', error);
        alert('Lỗi khi cập nhật Todo.');
      });
  };

  const handleCreate = () => {
    if (!email.trim() || !password.trim()) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    const newUser = {
      email: email,
      password: password,
    };

    dispatch(createUser(newUser))
      .unwrap()
      .then(() => {
        alert('Tạo user thành công!');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.error('Lỗi khi tạo user:', error);
        alert('Lỗi khi tạo user.');
      });
  };

  return (
    <ScrollView>
      {status === 'loading' ? <Text>Đang tải dữ liệu...</Text> : null}
      {error ? <Text>Lỗi: {error}</Text> : null}
      {/* Form tạo user mới */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Tạo" onPress={() => handleCreate()} />
      {listData.map((user, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text>ID: {user.id}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Mật khẩu: {user.password}</Text>
          <Button title="Xóa" onPress={() => handleDelete(user.id)} />
<Text>Todos:</Text>
          {user.todo.map((item, index) => (
            <View key={index} style={{ marginBottom: 5 }}>
              {editingTodo === `${user.id}-${index}` ? (
                <View>
                  <TextInput
                    value={updatedTodo}
                    onChangeText={setUpdatedTodo}
                    style={{ borderWidth: 1, marginBottom: 5 }}
                  />
                  <Button
                    title="Lưu"
                    onPress={() => handleUpdateTodo(user.id, index)}
                  />
                  <Button
                    title="Hủy"
                    onPress={() => {
                      setEditingTodo(null);
                      setUpdatedTodo('');
                    }}
                  />
                </View>
              ) : (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>{item}</Text>
                  <Button
                    title="Sửa"
                    onPress={() => {
                      setEditingTodo(`${user.id}-${index}`);
                      setUpdatedTodo(item);
                    }}
                  />
                </View>
              )}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const App = () => {
  const [screen, setScreen] = useState('Login');
  const [userData, setUserData] = useState(null);

  const navigation = {
    navigate: (screenName, params) => {
      setScreen(screenName);
      if (params) setUserData(params.user);
    }
  };

  return (
    <Provider store={store}>
      {screen === 'Login' ? <Login navigation={navigation} /> : <User route={{ params: { user: userData } }} navigation={navigation} />}
    </Provider>
  );
};

export default App;