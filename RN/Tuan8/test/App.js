import * as React from 'react';
import { Text, View, Image, Pressable, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';


const DATA = [
  {
    id: 1,
    content: 'Pinarello',
    cost: '1800',
    img: require('./assets/img/bifour_-removebg-preview.png'),
    kind: "Roadbike"
  },
  {
    id: 2,
    content: 'Pinamountain',
    cost: '1700',
    img: require('./assets/img/bione-removebg-preview.png'),
    kind: "Mountain"
  },
  {
    id: 3,
    content: 'Pina Bike',
    cost: '1500',
    img: require('./assets/img/bithree_removebg-preview.png'),
    kind: "Roadbike"
  },
  {
    id: 4,
    cost: '1900',
    content: 'Pinarello',
    img: require('./assets/img/bitwo-removebg-preview.png'),
    kind: "Mountain"
  },
  {
    id: 5,
    cost: '2700',
    content: 'Pinarello',
    img: require('./assets/img/bithree_removebg-preview.png'),
    kind: "Roadbike"

  },
  {
    id: 6,
    cost: '1350',
    content: 'Pinarello',
    img: require('./assets/img/bione-removebg-preview.png'),
    kind: "Mountain"
  },
];

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <Text style = {{fontWeight: 700, fontSize: 18, lineHeight: 26, textAlign: 'center'}}>A premium online store for <br/>sporter and their stylish choice</Text>
      <View style = {{backgroundColor: '#E941411A', paddingHorizontal: 30, paddingVertical: 50, borderRadius: 50, marginTop: 10}}>
        <Image source = {DATA[0].img} style = {{ height: 190, width: 200}}/>
      </View>
      <Text style = {{fontSize: 26, fontWeight: 700, textAlign: 'center', marginTop: 20}}>POWER BIKE <br/> SHOP</Text>
      <Pressable
         onPress={() => {
          navigation.navigate('Details1');
        }}
        style = {{backgroundColor: "#E94141", borderRadius: 30, paddingVertical: 10, paddingHorizontal: 70, marginTop: 30}}>
        <Text style={{fontWeight: 400, fontSize: 20, color: 'white'}}>Get Started </Text>
      </Pressable>
    </View>
  );
}

function DetailsScreen1({ route, navigation }) {
  const [data, setData] = React.useState(DATA);
  React.useEffect(()=>{
    console.log("123")
  }, [data])
  const Item = ({title}: ItemProps) => (
      <Pressable
      onPress={() => {
            navigation.navigate('Details2', {
              id: title.id,
              content: title.content,
              kind: title.kind,
              cost: title.cost,
              img: title.img,
            });
          }}
      style = {{backgroundColor: '#F7BA8326', margin: 10, alignItems: 'center', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10}}>
          <Image source = {title.img} style = {{height: 90, width: 100}}/>
          <Text style = {{marginTop: 10}}>{title.content}</Text>
          <Text style = {{fontSize: 12, fontWeight: 700}}><Text style = {{color: '#F7BA83'}}>$</Text> {title.cost}</Text>
      </Pressable>

  );
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Text style = {{color:'#E94141', fontWeight: 700, fontSize: 25}}>The world’s Best Bike</Text>
      <View style = {{flexDirection: 'row', gap: 20, marginTop: 10}}>
        <Pressable
        onPress = {()=>{
          setData(DATA)}}
        style = {{borderColor: '#E9414187', borderRadius: 5, borderWidth: 1, paddingHorizontal: 30, paddingVertical: 5}}>
          <Text style = {{color: '#E94141'}}>All</Text>
        </Pressable>
        <Pressable 
        onPress = {()=>{
          setData(DATA)
          setData((DATA) => DATA.filter(title => title.kind == "Roadbike"))
        }}
        style = {{borderColor: '#E9414187', borderRadius: 5, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5}}>
          <Text style = {{color: '#E94141'}}>Roadbike</Text>
        </Pressable>
        <Pressable 
        onPress = {()=>{
           setData(DATA)
          setData((DATA) => DATA.filter(title => title.kind == "Mountain"))
        }}
        style = {{borderColor: '#E9414187', borderRadius: 5, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5}}>
          <Text style = {{color: '#E94141'}}>Mountain</Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

function DetailsScreen2({ route, navigation }) {
  const { id } = route.params;
  const { content } = route.params;
  const { kind } = route.params;
  const { cost } = route.params;
  const { img } = route.params;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingBottom: 30 }}>
      <View style = {{backgroundColor: '#E941411A', marginHorizontal: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center', paddingVertical: 30}}>
        <Image source={img} style = {{height: 250, width: 250}}/>
      </View>

      <View style = {{paddingLeft: 20}}>
        <Text style = {{fontWeight: '400', fontSize: 30}}>{content}</Text>
        <View style = {{flexDirection: 'row', gap: 20}}>
          <Text style = {{fontWeight: '400', fontSize: 20, color: 'gray'}}>15% OFF I {cost*0.75}$</Text>
          <Text style = {{fontWeight: '400', fontSize: 20, textDecorationLine: 'line-through'}}>{cost}$</Text>
        </View>
        <Text  style = {{fontWeight: '500', fontSize: 20, marginVertical: 20}}>Description</Text>
        <Text style = {{fontSize: 15, lineHeight: 25, color: 'gray', marginVertical: 20}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
        <View style ={{flexDirection: 'row', gap: 40, alignItems: 'center'}}>
          <Ionicons name="heart-outline" size={35} color="black" /> 
          <Pressable
          style = {{backgroundColor: '#E94141', borderRadius: 20, paddingHorizontal: 50, paddingVertical: 10}}
          >
            <Text style = {{color: 'white', fontSize: 18}}>  Add to card</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details1" component={DetailsScreen1} />
        <Stack.Screen name="Details2" component={DetailsScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
