import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.cover}
        colors={["#C7F4F6", "#00CCF9"]}
        locations={[0.85, 1]}
      >
        <View style={styles.wrapper}>
          <View style={styles.circle}></View>
        </View>
        <Text style={styles.title}>
          grow <br />
          your business
        </Text>
        <Text style={styles.subtitle}>
          We will help you to grow your business using <br /> online server
        </Text>
        <View>
          <View style={styles.wrapperButton}>
            <Pressable style={styles.but}>
              <Text style={styles.butText}>login</Text>
            </Pressable>
            <Pressable style={styles.but}>
              <Text style={styles.butText}>sign up</Text>
            </Pressable>
          </View>
          <Text style={[styles.title, { fontSize: 18, marginTop: 20 }]}>
            how we work?
          </Text>
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
  },
  wrapperButton: {
    flexDirection: "row",
    gap: 100,
  },
  but: {
    flex: 1,
    width: 120,
    height: 45,
    backgroundColor: "#E3C000",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  butText: {
    textTransform: "uppercase",
    color: "black",
    fontWeight: 700,
    fontSize: 18,
  },
});
