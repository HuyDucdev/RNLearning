import * as React from 'react';
import { Text, View, Button, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  const vs_black = require('./assets/vs_black.png')
  const vs_blue = require('./assets/vs_blue.png')
  const vs_red = require('./assets/vs_red.png')
  const vs_silver = require('./assets/vs_silver.png')
  const star = require('./assets/star.png')
  const [img, setImg] = React.useState(require('./assets/vs_blue.png'))
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 10, backgroundColor: "#fff" }}>
      <Image style={{flex: 1, width: 210}} source={img} />
      <View style = {{flex:1, justifyContent: "space-between"}}>
        <Text style= {{fontSize: 15, fontWeight: 400}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style ={{flexDirection: 'row', gap: 50}}>
          <View style = {{flexDirection: 'row'}}>
            <Image style={{width: 23}} source={star} />
            <Image style={{width: 23}} source={star} />
            <Image style={{width: 23}} source={star} />
            <Image style={{width: 23}} source={star} />
            <Image style={{width: 23}} source={star} />
          </View>
          <Text style= {{fontSize: 15, fontWeight: 400}}>(Xem 828 đánh giá)</Text>
        </View>
        <View style ={{flexDirection: 'row', gap: 100}}>
          <Text style= {{fontSize: 18, fontWeight: 700}}>1.790.000 đ</Text>
          <Text style= {{fontSize: 15, fontWeight: 700, opacity: 0.5, textDecorationStyle: 'solid', textDecorationLine: 'line-through'}}>1.790.000 đ</Text>
        </View>
        <View style ={{flexDirection: 'row', gap: 10}}>
          <Text  style= {{fontSize: 12, color: '#FA0000', fontWeight: 700}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Text>icon </Text>
        </View>
        <Pressable style = {{width:332, height:34, justifyContent: 'center', borderWidth: 1, borderRadius: 10}}
        onPress={() => {
         navigation.navigate('Details', {
            img:img
          });
        }}>
          <Text style= {{fontSize: 15, fontWeight: 400, alignSelf: "center",}}> 4 MÀU-CHỌN MÀU </Text>
        </Pressable>
        <Button
          color="#CA1536"
          title="CHỌN MUA"
        />
      </View>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const {img} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style= {{flex: 3, backgroundColor: '#fff', width: '100%', flexDirection: 'row', gap: 10, paddingVertical: 10}}>
        <Image style={{height: 150, width: 120}} source={require('./assets/vs_black.png')} />
        <Text style= {{fontSize: 15, fontWeight: 400}}>Điện Thoại Vsmart Joy 3 <br/> Hàng chính hãng</Text>
      </View>
      <View style = {{flex: 7, justifyContent: 'space-between'}}>
        <Text>Chọn một màu bên dưới:</Text>
        <View style ={{alignItems: 'center', gap: 10}}>
          <Pressable onPress = {()=>{setImg(vs_blue)}} style = {{width: 60, height: 60, backgroundColor: "#C5F1FB"}}></Pressable>    
          <Pressable onPress = {()=>{setImg(vs_red)}} style = {{width: 60, height: 60, backgroundColor: "#F30D0D"}}></Pressable>   
          <Pressable onPress = {()=>{setImg(vs_black)}} style = {{width: 60, height: 60, backgroundColor: "#000"}}></Pressable>    
          <Pressable onPress = {()=>{setImg(vs_silver)}} style = {{width: 60, height: 60, backgroundColor: "#E2D7DD"}}></Pressable>    
        </View>
        <Pressable style = {{backgroundColor: "#0081F1", width: 326, height: 44, borderWidth: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{fontSize: 20, fontWeight: 700, color: 'white'}}> XONG</Text>
        </Pressable>
      </View>
     
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
