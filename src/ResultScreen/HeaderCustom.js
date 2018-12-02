import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";

const HeaderCustom = props => (
  <Header transparent>
    <Left>
      <Button transparent onPress={props.onPress}>
        <Icon style={styles.leftIcon} name="md-arrow-back" />
      </Button>
    </Left>

    <Right>
      <Button transparent>
        <Icon style={styles.rightIcon} name="md-more" />
      </Button>
    </Right>
  </Header>
);

const styles = StyleSheet.create({
  leftIcon: {
    color: "white"
  },
  rightIcon: {
    color: "white"
  }
});

export default HeaderCustom;
