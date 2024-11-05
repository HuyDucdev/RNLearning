import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { useEffect, useState, useRef } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';


export default function App() {
  const [checked, setChecked] = useState('');
  return (
    <View style = {{padding: 10, flex: 1, justifyContent: 'space-around', backgroundColor:'#D8EFDE'}}>
        <Text style={{textTransform: "uppercase",fontWeight: 700, fontSize: 25, textAlign: "center"}}>
          register
        </Text>
        <View style = {{gap: 10}}>
          <View style = {{flexDirection:'row', backgroundColor: '#C9E0D0', alignItems: 'center'}}>
          <TextInput style={{ height: 45, backgroundColor: "#C9E0D0", paddingHorizontal: 10, outlineStyle: 'none'}} placeholder="Name" />
          </View>
          <View style = {{flexDirection:'row', backgroundColor: '#C9E0D0', alignItems: 'center'}}>
          <TextInput style={{ height: 45, backgroundColor: "#C9E0D0", paddingHorizontal: 10, outlineStyle: 'none'}} placeholder="Phone" />
          </View>
          <View style = {{flexDirection:'row', backgroundColor: '#C9E0D0', alignItems: 'center'}}>
          <TextInput style={{ height: 45, backgroundColor: "#C9E0D0", paddingHorizontal: 10, outlineStyle: 'none'}} placeholder="Email" />
          </View>
          <View style = {{flexDirection:'row', backgroundColor: '#C9E0D0', alignItems: 'center', justifyContent:'space-between', paddingRight: 10}}>
            <TextInput style={{ height: 45, backgroundColor: "#C9E0D0", paddingHorizontal: 10, outlineStyle: 'none'}} placeholder="Password" />
            <Ionicons name="eye-outline" size={20} color="black" />
          </View>
          <View style = {{flexDirection:'row', backgroundColor: '#C9E0D0', alignItems: 'center'}}>
          <TextInput style={{ height: 45, backgroundColor: "#C9E0D0", paddingHorizontal: 10, outlineStyle: 'none'}} placeholder="Birthday" />
          </View>
        </View>
        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
          <Text style = {{marginRight: 50}}>Male</Text>
          <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
          />
          <Text>Female</Text>

        </View>

        <View style = {{gap:10}}>
          <Pressable style={{height: 45, backgroundColor: "#C34E3B", alignItems: "center", justifyContent: "center",}}>
            <Text style={{textTransform: "uppercase", color: "white", fontWeight: 600, fontSize: 24}}>register</Text>
          </Pressable>
          <Text style={{fontSize: 12, alignSelf: 'center'}}>When you agree to terms and conditions</Text>
        </View>
    </View>
  );
}