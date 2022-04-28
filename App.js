import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Animated } from "react-native";

export default function App() {
  const position = new Animated.ValueXY({ x: 0, y: 0 });
  Animated.timing(position, {
    toValue: {
      x: 100,
      y: 70,
    },
    duration:1000,
    useNativeDriver: false,
    speed: 1,
    bounciness: 30,
  }).start();
  const rotate = position.x.interpolate({
    inputRange: [10, 100],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginLeft: 5 }}>
        <Animated.View
          style={{
            height: 80,
            width: 80,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "yellow",
            transform: [
              { translateX: position.x },
               {translateY:position.y},
              { rotate: rotate },
            ],
          }}
        >
          <Text>BOX</Text>
        </Animated.View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#56a832",
    alignItems: "center",
    justifyContent: "center",
  },
});
