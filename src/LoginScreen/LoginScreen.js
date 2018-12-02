import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "../../svg/Logo";
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Input,
  Label,
  Button
} from "native-base";

export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            {Logo.logoSVG}
            <Text style={styles.welcomeText}>Selamat Datang di Detomatoes</Text>
            <Text style={styles.descText}> Masuk Untuk Melanjutkan </Text>
          </View>
          <Form style={styles.container}>
            <Item floatingLabel>
              <Label style={styles.descText}>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={styles.descText}>Password</Label>
              <Input />
            </Item>
          </Form>
          <View style={styles.container}>
            <Button
              full
              rounded
              style={styles.btnStyle}
              onPress={() => {
                this.props.navigation.navigate("Dashboard");
              }}
            >
              <Text>Login</Text>
            </Button>
            <Button full transparent>
              <Text style={styles.txtSignup}>Sign Up untuk akun gratis</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center"
  },
  inputStyle: {
    width: 200
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#54BE14",
    marginTop: 20,
    marginBottom: 10
  },
  descText: {
    color: "#808080",
    fontSize: 14
  },
  btnStyle: {
    backgroundColor: "#54BE14",
    marginBottom: 5
  },
  txtSignup: {
    color: "#808080"
  }
});
