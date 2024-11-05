import * as React from 'react';
import { Button, View, Text, ScrollView, TextInput, Pressable, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';


function HomeScreen({ navigation }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('https://661389d053b0d5d80f6799e5.mockapi.io/donutAPI') 
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

  const renderItem = ({item}) => (
  <View key = {item.id} style = {{flexDirection: 'row', width: 250, backgroundColor: '#F4DDDD', marginVertical: 10, borderRadius: 20, justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden' }}>
      
      <View>
        <Image source = {item.img} style = {{height: 100, width: 100}}/>
      </View>
      <View>
        <View style={{height: 100 ,justifyContent: 'space-between'}}>
          <Text style = {{fontFamily: "Roboto", fontSize: 20, fontWeight: 700}}>{item.name}</Text>
          <Text style = {{fontFamily: "Roboto", fontSize: 15, fontWeight: 700, opacity:0.5}}>{item.decription}</Text>
          <View style = {{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden'}}> 
            <Text style = {{fontFamily: "Roboto", fontSize: 20, fontWeight: 700}}>${item.cost}</Text>
            <Pressable style = {{backgroundColor:'#F1B000', width: 30, height:30, top: 5, left: 5, borderRadius: 10,  transform: [{rotate: '45deg'}]}} onPress={() => navigation.navigate('Details', {
            id: item.id,
            name: item.name,
            decription: item.decription,
            cost: item.cost,
            img: item.img,
          })}>
              <Ionicons name="add-outline" size={20} color="white" style = {{transform: [{rotate: '45deg'}], top: 7, left: 2}} />  
            </Pressable>

          </View>
          
        </View>
      </View>
  </View>
  );

  return (
    <ScrollView style = {{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Text style = {{fontFamily: "Roboto", fontSize: 16, fontWeight: 700}}>Welcome, Jala!</Text>
      <Text style = {{fontFamily: "Roboto", fontSize: 20, fontWeight: 700}}>Choice you Best food</Text>
      <TextInput style ={{width: 200, height: 30, borderWidth: 1, borderColor: "gray", marginTop:10, padding: 10}} placeholder = "Search food" />
      <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
        <View style = {{borderWidth: 1, borderColor: 'gray', paddingVertical: 5, paddingHorizontal: 10}}>
          <Pressable style = {{fontFamily: "Roboto", fontSize: 14, fontWeight: 700}}>Donut</Pressable>
        </View>
         <View style = {{borderWidth: 1, borderColor: 'gray', paddingVertical: 5, paddingHorizontal: 10}}>
          <Pressable style = {{fontFamily: "Roboto", fontSize: 14, fontWeight: 700}}>Pink Donut</Pressable>
        </View>
         <View style = {{borderWidth: 1, borderColor: 'gray', paddingVertical: 5, paddingHorizontal: 10}}>
          <Pressable style = {{fontFamily: "Roboto", fontSize: 14, fontWeight: 700}}>Floating</Pressable>
        </View>
      </View>
      <View>
       <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}

function DetailsScreen({ route, navigation }) {
  const { id } = route.params;
  const { name } = route.params;
  const { decription } = route.params;
  const { cost } = route.params;
  const { img } = route.params;
  const [quantity, setQuantity] = React.useState(1)
  return (
    <View style={{ flex: 1, paddingVertical: 10, backgroundColor: 'white', paddingLeft: 40, gap: 20}}>
      <Image source = {img} style = {{height: 200, width: 200, alignSelf: 'center'}}/>

      <Text  style = {{fontFamily: "Roboto", fontSize: 20, fontWeight: 700}}>{name}</Text>
     <View style = {{flexDirection: 'row', gap: 100 }}>
       <Text style = {{fontFamily: "Roboto", fontSize: 15, fontWeight: 700, opacity: 0.5}}>desc: {decription}</Text>
      <Text style = {{fontFamily: "Roboto", fontSize: 20, fontWeight: 700}}> ${cost}</Text>
     </View>
     <View style = {{flexDirection: 'row', gap: 100}}>
      <View >
        <View style = {{flexDirection: 'row', gap: 10}}>
          <Ionicons name="time-outline" size={20} color="black"/>  
          <Text  style = {{fontFamily: "Roboto", fontSize: 15, fontWeight: 700, opacity: 0.5}}>Delivery in</Text>
        </View>
        <Text style = {{fontFamily: "Roboto", fontSize: 20, fontWeight: 700, marginLeft: 20}}>30min</Text>
      </View>
        <View  style = {{flexDirection: 'row', gap: 10}}>
          <Pressable onPress = {()=>{setQuantity(quantity-1)}}>
            <Ionicons name="remove-outline" size={20} color="white" style = {{backgroundColor: '#F1B000'}}/>  
          </Pressable>
          <Text>{quantity}</Text>
          <Pressable onPress = {()=>{setQuantity(quantity+1)}}>
            <Ionicons name="add-outline" size={20} color="white" style = {{backgroundColor: '#F1B000'}}/>  
          </Pressable>
        </View>
     </View>
      <Text style = {{fontFamily: "Roboto", fontSize: 20, fontWeight: 700}}>Restaurants info</Text>
      <Text style = {{fontFamily: "Roboto", fontSize: 15, fontWeight: 700, opacity: 0.5}}>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range. info</Text>
      <Pressable  onPress={() => navigation.goBack()} style = {{backgroundColor: "#F1B000", width: 250, height: 58, alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{fontFamily: "Roboto", fontSize: 25, fontWeight: 700, color: 'white'}}>Add to cart</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
