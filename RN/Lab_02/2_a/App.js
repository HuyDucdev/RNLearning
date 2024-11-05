import { Text, View, Pressable, TextInput } from "react-native";
import { Fontisto, AntDesign, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function App() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      locations={[0.85, 1]}
      colors={["#FBCB00", "#BF9A00"]}
    >
      <View
        style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 50, gap: 70 }}
      >
        <View>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 30,
              textTransform: "uppercase",
              fontFamily: "Roboto, Arial",
            }}
          >
            login
          </Text>
        </View>
        <View style={{ gap: 20 }}>
          <View
            style={{
              backgroundColor: "#DCBD3B",
              borderColor: "white",
              borderWidth: 1,
              flexDirection: "row",
              padding: 10,
              gap: 10,
            }}
          >
            <Ionicons name="person" size={30} />
            <TextInput placeholder="Name" style={{ outlineStyle: "none" }} />
          </View>
          <View
            style={{
              backgroundColor: "#DCBD3B",
              borderColor: "white",
              borderWidth: 1,
              flexDirection: "row",
              padding: 10,
              gap: 10,
              position: "relative",
            }}
          >
            <Fontisto name="locked" size={30} color="black" />
            <TextInput
              placeholder="Password"
              style={{ outlineStyle: "none" }}
            />
            <AntDesign
              name="eye"
              size={30}
              color="black"
              style={{ position: "absolute", right: 10 }}
            />
          </View>
        </View>

        <View style={{ gap: 30 }}>
          <Pressable style={{ backgroundColor: "black", padding: 10 }}>
            <Text
              style={{
                color: "white",
                textTransform: "uppercase",
                fontWeight: "700",
                textAlign: "center",
                fontSize: 20,
                fontFamily: "Roboto, Arial",
              }}
            >
              Login
            </Text>
          </Pressable>
          <Text
            style={{
              textTransform: "uppercase",
              fontWeight: "700",
              textAlign: "center",
              fontSize: 20,
              fontFamily: "Roboto, Arial",
            }}
          >
            create acount
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

export default App;
