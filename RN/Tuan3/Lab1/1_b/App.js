import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.cover}
        colors={["#C7F4F6", "#00CCF9"]}
        locations={[0.85, 1]}
      >
        <View style={styles.wrapper}>
          <Ionicons name="lock-closed-outline" size={100} color="black" />
        </View>
        <Text style={styles.title}>
          forget <br />
          password
        </Text>
        <Text style={styles.subtitle}>
          Provide your account's email for which you want to reset your password
        </Text>
        <View style = {{flexDirection:'row', backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 10}}>
          <Ionicons name="mail-outline" size={20} color="black" />
          <TextInput style={styles.textInput} placeholder="Email" />
        </View>

        <View>
          <View style={styles.wrapperButton}>
            <Pressable style={styles.but}>
              <Text style={styles.butText}>next</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cover: { flex: 1, alignItems: "center", justifyContent: "space-evenly" },
  wrapper: {},
  circle: {
    borderRadius: 999,
    width: 140,
    height: 140,
    borderWidth: 15,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 25,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: 700,
    fontSize: 15,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  wrapperButton: {
    flexDirection: "row",
    gap: 100,
  },
  but: {
    flex: 1,
    width: 305,
    height: 45,
    backgroundColor: "#E3C000",
    alignItems: "center",
    justifyContent: "center",
  },
  butText: {
    textTransform: "uppercase",
    color: "black",
    fontWeight: 700,
    fontSize: 18,
  },
  textInput: {
    width: 275,
    height: 45,
    backgroundColor: "#C4C4C4",
    paddingHorizontal: 10,
    outlineStyle: 'none'
  },
});
