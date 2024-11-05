import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  return (
    <View style = {{padding: 10, flex: 1, justifyContent: 'space-around', backgroundColor:'#D8EFDE'}}>
        <Text style={{textTransform: "uppercase",fontWeight: 700, fontSize: 25, textAlign: "center"}}>
          login
        </Text>
        <View style = {{gap: 10}}>
          <View style = {{flexDirection:'row', backgroundColor: '#C9E0D0', alignItems: 'center'}}>
          <TextInput style={{ height: 45, backgroundColor: "#C9E0D0", paddingHorizontal: 10, outlineStyle: 'none'}} placeholder="Email" />
        </View>
        <View style = {{flexDirection:'row', backgroundColor: '#C9E0D0', alignItems: 'center', justifyContent:'space-between', paddingRight: 10}}>
          <TextInput style={{ height: 45, backgroundColor: "#C9E0D0", paddingHorizontal: 10, outlineStyle: 'none'}} placeholder="Password" />
          <Ionicons name="eye-outline" size={20} color="black" />
        </View>
        </View>
        <View style={{gap:10}}>
          <Pressable style={{height: 45, backgroundColor: "#C34E3B", alignItems: "center", justifyContent: "center",}}>
            <Text style={{textTransform: "uppercase", color: "white", fontWeight: 600, fontSize: 24}}>login</Text>
          </Pressable>
          <Text style={{fontSize: 15, textAlign: "center",}}>
            When you agree to terms and conditions
          </Text>  
          <Text style={{fontSize: 15, textAlign: "center", color:'#5D25FA'}}>
            For got your password?
          </Text>   
          <Text style={{fontSize: 15, textAlign: "center"}}>
            or login with
          </Text>   
          <View style = {{flexDirection:'row', marginTop: 10, justifyContent: 'space-around'}}>
            <Pressable style = {{alignItems:'center'}}>
              <Ionicons name="logo-facebook" size={50} color="black" />
            </Pressable>
            <Pressable style = {{alignItems:'center'}}>
              <Ionicons name="logo-google" size={50} color="black" />
            </Pressable>
            <Pressable style = {{alignItems:'center'}}>
              <Ionicons name="logo-twitter" size={50} color="black" />
            </Pressable>
          </View>
        </View>
    </View>
  );
}