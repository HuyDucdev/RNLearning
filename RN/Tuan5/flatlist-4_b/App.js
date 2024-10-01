import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const DATA = [
  {
    id: 1,
    content: 'Cáp chuyển từ Cổng USB sang PS2...',
    cost: '69.900 đ',
    img: require('./assets/carbusbtops21.png'),
    discount: "-39%"
  },
  {
    id: 2,
    content: 'Cáp chuyển từ Cổng USB sang PS2...',
    cost: '69.900 đ',
    img: require('./assets/daucam1.png'),
    discount: "-39%"
  },
  {
    id: 3,
    content: 'Cáp chuyển từ Cổng USB sang PS2...',
    cost: '69.900 đ',
    img: require('./assets/dauchuyendoi1.png'),
    discount: "-39%"
  },
  {
    id: 4,

    content: 'Cáp chuyển từ Cổng USB sang PS2...',
    cost: '69.900 đ',
    img: require('./assets/dauchuyendoipsps21.png'),
    discount: "-39%"
  },
  {
    id: 5,
    content: 'Cáp chuyển từ Cổng USB sang PS2...',
    cost: '69.900 đ',
    img: require('./assets/daynguon1.png'),
    discount: "-39%"
  },
  {
    id: 6,
    content: 'Cáp chuyển từ Cổng USB sang PS2...',
    cost: '69.900 đ',
    img: require('./assets/giacchuyen1.png'),
    discount: "-39%"
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
<View style={styles.item}>
  <View style = {{justifyContent: "space-around"}}>
    <View>
      <Image source = {title.img} style = {{height: 90, width: 150}}/>
    </View>
    <View style = {{width: 150}}>
      <Text style={styles.title}>{title.content}</Text>
      <Image source = {require('./assets/Group4.png')}/>
      <View style = {{flexDirection: "row", gap:30}}>
        <Text style = {{fontSize: 12, fontWeight: 700}}>{title.cost}</Text>
        <Text style = {{fontSize: 12, color: '#969DAA'}}>{title.discount}</Text>
      </View>
    </View>
  </View>
</View>
);

const App = () => {
  return (
  <SafeAreaView style={styles.container}>
  
    <View style = {{flexDirection: "row", backgroundColor: "#1BA9FF",justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center"}}>
      <Ionicons name="arrow-back-outline" size={20} color="white" />
      <View style = {{flexDirection: 'row', backgroundColor:"white", gap: 10, padding: 5}}>
        <Ionicons name="search-outline" size={20} color="black" />
        <TextInput style={{backgroundColor: "white", outlineStyle: 'none'}}placeholder="Dây cáp USB"/>
      </View>
      <Ionicons name="cart-outline" size={32} color="white" />
      <Ionicons name="ellipsis-horizontal-outline" size={32} color="white" />

    </View>
    <Text style = {{margin: 10}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
    
    <View style = {{flexDirection: "row", backgroundColor: "#1BA9FF",justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center"}}>
      <Ionicons name="menu-outline" size={32} color="white" />
      <Ionicons name="home-outline" size={32} color="white" />
      <Ionicons name="return-up-back-outline" size={20} color="white" />
    </View>
  </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: "row",
    height: 200,
    margin: 10, 
  },
  title: {
    
    fontSize: 12,
  },
});

export default App;