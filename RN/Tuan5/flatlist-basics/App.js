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
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


const DATA = [
  {
    id: 1,
    content: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
    img: require('./assets/ca_nau_lau.png')
  },
  {
    id: 2,
    content: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'LTD Food',
    img: require('./assets/ga_bo_toi.png')
  },
  {
    id: 3,
    content: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    img: require('./assets/xa_can_cau.png')
  },
  {
    id: 4,

    content: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
    img: require('./assets/do_choi_dang_mo_hinh.png')
  },
  {
    id: 5,
    content: 'Lãnh đạo giản đơn',
    shop: 'Minh Long Shop',
    img: require('./assets/lanh_dao_gian_don.png')
  },
  {
    id: 6,
    content: 'Hiểu lòng con trẻ',
    shop: 'Minh Long Shop',
    img: require('./assets/hieu_long_con_tre.png')
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
<View>
  <View style={styles.item}>
    <View>
      <Image source = {title.img} style = {{height: 100, width: 100}}/>
    </View>
    <View>
      <Text style={styles.title}>{title.content}</Text>
      <Text style = {{fontSize: 10, marginTop: 10}}>Shop: {title.shop}</Text>
    </View>
    <View style = {{paddingTop: 10, right: 0}}>
      <Pressable style={{backgroundColor: "red", padding:10 }}>
        <Text style={{color:"white"}}>Chat</Text>
      </Pressable>
    </View>
  </View>
  <View style = {{backgroundColor: "gray", width: "100%", height: 1}}></View>
</View>
);

const App = () => {
  return (
  <SafeAreaView style={styles.container}>
  
    <View style = {{flexDirection: "row", backgroundColor: "#1BA9FF",justifyContent: "space-between", paddingHorizontal: 10, alignItems: "center"}}>
      <Ionicons name="arrow-back-outline" size={20} color="white" />
      <Text style={{color: "white"}}>Chat</Text>
      <Ionicons name="cart-outline" size={32} color="white" />
    </View>
    <Text style = {{margin: 10}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      <FlatList
        data={DATA}
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
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 14,
  },
});

export default App;