import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#7878B4", padding: 10 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#23235B",
          padding: 20,
          borderRadius: 15,
          gap: 20,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 100,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto, Arial",
              fontWeight: "700",
              fontSize: 25,
              lineHeight: 29.3,
              color: "white",
            }}
          >
            PASSWORD
          </Text>
          <Text
            style={{
              fontFamily: "Roboto, Arial",
              fontWeight: "700",
              fontSize: 25,
              lineHeight: 29.3,
              color: "white",
            }}
          >
            GENERATOR
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#151537",
            paddingVertical: 25,
            paddingHorizontal: 140,
            alignSelf: "center",
          }}
        />

        <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
          <Text
            style={{
              fontFamily: "Roboto, Arial",
              fontWeight: "700",
              fontSize: 18,
              color: "white",
            }}
          >
            Password length
          </Text>
          <View style={{ backgroundColor: "white", width: 100, height: 33 }} />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto, Arial",
              fontWeight: "700",
              fontSize: 18,
              lineHeight: 23.44,
              color: "white",
            }}
          >
            Include lower case letters
          </Text>
          <Ionicons name="checkbox-outline" size={30} color="white" />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto, Arial",
              fontWeight: "700",
              fontSize: 18,
              lineHeight: 23.44,
              color: "white",
            }}
          >
            Include upcase letters
          </Text>
          <Ionicons name="square-outline" size={30} color="white" />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto, Arial",
              fontWeight: "700",
              fontSize: 18,
              lineHeight: 23.44,
              color: "white",
            }}
          >
            Include number
          </Text>
          <Ionicons
            name="checkbox-outline"
            size={30}
            color="white"
            style={{ marginLeft: 125 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto, Arial",
              fontWeight: "700",
              fontSize: 18,
              lineHeight: 23.44,
              color: "white",
            }}
          >
            Include special symbol
          </Text>
          <Ionicons name="square-outline" size={30} color="white" />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#3B3B98",
            width: 269,
            height: 55,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto, Arial",
              fontSize: 18,
              lineHeight: 21.09,
              color: "white",
              fontWeight: "700",
            }}
          >
            GENERATE PASSWORD
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
