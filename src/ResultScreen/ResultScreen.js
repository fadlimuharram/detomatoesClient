import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Dimensions,
  ScrollView,
  Text
} from "react-native";
import { Container, Content, Card, CardItem, Body } from "native-base";
import { connect } from "react-redux";

import HeaderCustom from "./HeaderCustom";

const tesgbr = require("../../assets/images/dashboardbg.jpg");

class ResultScreen extends Component {
  render() {
    console.log("prediksinya----->", this.props.prediction.penyakit);
    const { penyakit, uploadURI } = this.props.prediction;
    const { gejala, nama, penangan } = penyakit.proba0;
    console.log("gejalaaaa---->", uploadURI);
    return (
      <Container>
        <ImageBackground source={{ uri: uploadURI }} style={styles.img}>
          <View style={styles.innerFrame}>
            <HeaderCustom
              onPress={() => {
                this.props.navigation.navigate("Dashboard");
              }}
            />
            <View style={styles.header}>
              <Text style={styles.headerText}>
                {nama && nama.toUpperCase()}
              </Text>
            </View>
          </View>
        </ImageBackground>
        <Content style={styles.content}>
          <ScrollView>
            <Card>
              <CardItem header>
                <Text style={styles.titleText}>Gejala</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{gejala ? gejala : "kosong"}</Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem header>
                <Text style={styles.titleText}>Penanganan</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{penangan ? penangan : "kosong"}</Text>
                </Body>
              </CardItem>
            </Card>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    prediction: state.prediction.probabilities
  };
};

export default connect(mapStateToProps)(ResultScreen);

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get("window").width,
    height:
      Dimensions.get("window").height -
      (60 / 100) * Dimensions.get("window").height
  },
  innerFrame: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    height: "100%"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -50
  }
});
