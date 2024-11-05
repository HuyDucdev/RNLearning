import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 10, gap: 20 }}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={{
            uri: "https://product.hstatic.net/1000261226/product/hjx_001_master.jpg",
          }}
          style={{ width: 70, height: 70 }}
        />
        <Text
          style={{
            fontFamily: "Roboto, Arial",
            fontSize: 16,
            lineHeight: 18.75,
            fontWeight: "700",
          }}
        >
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: "Roboto, Arial",
            fontSize: 18,
            lineHeight: 21.09,
            fontWeight: "700",
            alignSelf: "center",
          }}
        >
          Cực kỳ hài lòng
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignSelf: "center", gap: 10 }}>
        {[...Array(5)].map((i) => (
          <Entypo key={i} name="star" size={45} color="#F2DD1B" />
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          borderColor: "#1511EB",
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <FontAwesome5 name="camera" size={40} color="black" />
        <Text
          style={{
            fontFamily: "Roboto, Arial",
            fontSize: 18,
            lineHeight: 21.09,
            fontWeight: "700",
          }}
        >
          Thêm hình ảnh
        </Text>
      </View>

      <View
        style={{
          borderColor: "#C4C4C4",
          borderWidth: 1,
          borderRadius: 5,
          padding: 10,
          height: 222,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto, Arial",
            fontSize: 18,
            lineHeight: 21.09,
            fontWeight: "700",
            color: "#C4C4C4",
          }}
        >
          Hãy chia sẻ những điều mà bạn thích về sản phẩm
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#0D5DB6",
            borderColor: "#1511EB",
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto, Arial",
              fontSize: 20,
              lineHeight: 23.44,
              fontWeight: "700",
              color: "white",
            }}
          >
            Gửi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
