import React from "react";
import { AppRegistry, Image, View, StatusBar, StyleSheet } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";

const noPhoto = require("../../assets/images/nopoto.jpg");

const routes = ["Dashboard"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            style={{ marginTop: -100 }}
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: 20,
    marginLeft: 25
  },
  profileName: {
    marginTop: 15,
    fontWeight: "bold"
  }
});
