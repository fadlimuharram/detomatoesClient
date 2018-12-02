import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity
} from "react-native";

const CardCustom = props => (
  <View style={styles.card}>
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.svg}
      <Text style={styles.titleText}>{props.text}</Text>
      <Text style={styles.subText}>{props.subText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width / 2 - 20,
    backgroundColor: "white",
    marginTop: -20
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5
  },
  subText: {
    fontSize: 10
  }
});

export default CardCustom;
