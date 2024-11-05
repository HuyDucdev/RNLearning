import { Text, View, Pressable, TextInput, Image } from 'react-native';
import { Fontisto, AntDesign, Ionicons } from '@expo/vector-icons';

function App() {
  return (
      <View style={{flex: 1, paddingHorizontal: 10, paddingTop: 30, gap: 40}}>
        <Image source = {require('./assets/eyeball-309797.png')} style = {{height: 150, width: 150, alignSelf:'center'}}/>
        <View style = {{gap:20}}>
          <View style={{borderBottomColor: '#DFDFDF', borderBottomWidth: 2,  flexDirection: 'row', padding: 10, gap: 10}}>
            <Ionicons name="person-outline" size={30} color='#386FFC'/>
            <TextInput placeholder="Please input username" style = {{outlineStyle: 'none', color: 'gray'}}/>
          </View>
          <View style={{ borderBottomColor: '#DFDFDF', borderBottomWidth: 2, flexDirection: 'row', padding: 10, gap: 10, position: 'relative'}}>
            <Ionicons name="lock-closed-outline" size={30} color='#386FFC'/>
            <TextInput placeholder="Password" style = {{outlineStyle: 'none', color: 'gray'}}/>
          </View>
        </View>

        <View style ={{gap: 10}}>
          <Pressable
            style={{backgroundColor: "#386FFC", padding: 10, borderRadius: 10}}>
            <Text style={{ color: "white", textTransform: "uppercase", textAlign: "center", fontSize: 20, fontFamily: "Roboto, Arial"}}>
              Login
            </Text>
          </Pressable>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Register</Text>
            <Text>Forgot Password</Text>
          </View>
          <View style = {{flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 10}}>
            <View style={{width:'auto', flex: 1, height:1, backgroundColor: '#386FFC'}}></View>
            <Text style = {{textTransform: 'capitalize'}}>other login methods</Text>
            <View style={{width:'auto', flex: 1, height:1, backgroundColor: '#386FFC'}}></View>
          </View>
          <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
            <Ionicons name="person-add-outline" size={40} color='white' style = {{backgroundColor:'#3AB4FF', borderRadius: 999, padding: 10, paddingHorizontal: 12}}/>
            <Ionicons name="wifi-outline" size={40} color='white' style = {{backgroundColor: '#F4AA47', borderRadius: 999, padding: 10, paddingHorizontal: 12}}/>
            <Ionicons name="logo-facebook" size={70} color='#3A579C'/>
          </View>
        </View>
      </View>
  );
}

export default App;
