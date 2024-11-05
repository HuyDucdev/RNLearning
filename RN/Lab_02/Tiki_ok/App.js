import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#C4C4C4",
        justifyContent: "space-between",
      }}
    >
      <View style={{ backgroundColor: "white", padding: 10, gap: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg",
            }}
            style={{ width: 104, height: 127 }}
          />
          <View>
            <View style={{ gap: 10 }}>
              <Text
                style={{
                  fontWeight: "700",
                  fontFamily: "Roboto, Arial",
                  fontSize: 12,
                  lineHeight: 14.06,
                  color: "black",
                }}
              >
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontFamily: "Roboto, Arial",
                  fontSize: 12,
                  lineHeight: 14.06,
                  color: "black",
                }}
              >
                Cung cấp bởi Tiki Trading
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontFamily: "Roboto, Arial",
                  fontSize: 18,
                  lineHeight: 21.09,
                  color: "#EE0D0D",
                }}
              >
                141.800 đ
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontFamily: "Roboto, Arial",
                  fontSize: 12,
                  lineHeight: 14.06,
                  color: "#808080",
                  textDecorationLine: "line-through",
                }}
              >
                141.800 đ
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <AntDesign
                    name="minussquare"
                    size={15}
                    color="gray"
                    style={{}}
                  />
                  <Text
                    style={{
                      fontWeight: "700",
                      fontFamily: "Roboto, Arial",
                      fontSize: 15,
                      lineHeight: 17.58,
                      color: "black",
                    }}
                  >
                    1
                  </Text>
                  <AntDesign
                    name="plussquare"
                    size={15}
                    color="gray"
                    style={{}}
                  />
                </View>
                <Text
                  style={{
                    fontWeight: "700",
                    fontFamily: "Roboto, Arial",
                    fontSize: 12,
                    lineHeight: 14.06,
                    color: "#134FEC",
                  }}
                >
                  Mua sau
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Text
            style={{
              fontWeight: "700",
              fontFamily: "Roboto, Arial",
              fontSize: 12,
              lineHeight: 14.06,
              color: "black",
            }}
          >
            Mã giảm giá đã lưu
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontFamily: "Roboto, Arial",
              fontSize: 12,
              lineHeight: 14.06,
              color: "#134FEC",
            }}
          >
            Xem tại đây
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 20, marginTop: 30 }}>
          <View
            style={{
              borderColor: "#808080",
              borderRadius: 1,
              borderWidth: 1,
              flexDirection: "row",
              paddingVertical: 10,
              paddingHorizontal: 20,
              gap: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: "yellow",
              }}
            />
            <Text
              style={{
                fontFamily: "Roboto, Arial",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Mã giảm giá
            </Text>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: "#0A5EB7", borderRadius: 2 }}
          >
            <Text
              style={{
                fontFamily: "Roboto, Arial",
                fontSize: 20,
                lineHeight: 23.44,
                fontWeight: "700",
                color: "white",
                padding: 10,
              }}
            >
              Áp dụng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ gap: 20, top: -50 }}>
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontFamily: "Roboto, Arial",
                fontSize: 11,
                color: "black",
              }}
            >
              Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
            </Text>
            <Text
              style={{
                fontWeight: "700",
                fontFamily: "Roboto, Arial",
                fontSize: 11,
                color: "#134FEC",
              }}
            >
              Nhập tại đây?
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontFamily: "Roboto, Arial",
                fontSize: 18,
                lineHeight: 21.09,
                color: "black",
              }}
            >
              Tạm tính
            </Text>
            <Text
              style={{
                fontWeight: "700",
                fontFamily: "Roboto, Arial",
                fontSize: 18,
                lineHeight: 21.09,
                color: "#EE0D0D",
              }}
            >
              141.800 đ
            </Text>
          </View>
        </View>
      </View>

      <View style={{ backgroundColor: "white", padding: 10, gap: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              fontWeight: "700",
              fontFamily: "Roboto, Arial",
              fontSize: 18,
              lineHeight: 21.09,
              color: "#808080",
            }}
          >
            Thành tiền
          </Text>
          <Text
            style={{
              fontWeight: "700",
              fontFamily: "Roboto, Arial",
              fontSize: 20,
              lineHeight: 23.44,
              color: "#EE0D0D",
            }}
          >
            141.800 đ
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: "#E53935", borderRadius: 2 }}
          >
            <Text
              style={{
                fontWeight: "700",
                fontFamily: "Roboto, Arial",
                fontSize: 20,
                lineHeight: 23.44,
                color: "white",
                padding: 10,
                textAlign: "center",
              }}
            >
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
