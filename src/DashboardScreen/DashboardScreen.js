import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  ImageBackground
} from "react-native";
import { ImagePicker } from "expo";
import { Container, Content, Text, Thumbnail } from "native-base";
import { predictionCreate } from "../../store/actions";
import { connect } from "react-redux";

import Logo from "../../svg/Logo";

import HeaderCustom from "./HeaderCustom";
import CardCustom from "./CardCustom";

const bg = require("../../assets/images/dashboardbg.jpg");
const noPhoto = require("../../assets/images/nopoto.jpg");

class DashboardScreen extends Component {
  state = {
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result);
      this.props.predictionCreate(result);
      this.props.navigation.navigate("Result");
    }
  };

  render() {
    return (
      <Container>
        <ImageBackground style={styles.backgroundImage} source={bg}>
          <HeaderCustom />

          <Content>
            <View style={styles.profile}>
              <Thumbnail large source={noPhoto} />
              <Text style={styles.namaText}>Hi, Fadli Muharram</Text>
              <Text style={styles.subText}>Selamat Datang di Detomatoes</Text>
            </View>
            <View style={styles.contentBody}>
              <View style={styles.cards}>
                <CardCustom
                  svg={Logo.cameraSVG}
                  text="kamera"
                  subText="Deteksi Dengan Kamera"
                  onPress={this._pickImage}
                />
                <CardCustom
                  svg={Logo.filePictureSVG}
                  text="File"
                  subText="Pilih Melalui File"
                />
              </View>
              <View style={styles.cards}>
                <CardCustom
                  svg={Logo.historySVG}
                  text="Riwayat"
                  subText="Deteksi Sebelumnya"
                />
                <CardCustom
                  svg={Logo.diseaseSVG}
                  text="Penyaki"
                  subText="Daftar Penyakit Tomat"
                />
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default connect(
  null,
  { predictionCreate }
)(DashboardScreen);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  profile: {
    flex: 1,
    alignItems: "center",
    height:
      Dimensions.get("window").height -
      (70 / 100) * Dimensions.get("window").height
  },
  contentBody: {
    backgroundColor: "#F5F5F5",
    height:
      Dimensions.get("window").height -
      (30 / 100) * Dimensions.get("window").height
  },
  cards: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
    marginTop: 10
  },
  namaText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    marginBottom: 3
  },
  subText: {
    fontSize: 14,
    color: "white"
  }
});
