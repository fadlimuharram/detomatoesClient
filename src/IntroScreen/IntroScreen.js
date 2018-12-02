import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button
} from "native-base";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { Entries } from "./Entries";

const bgIntro = require("../../assets/images/bgIntro.jpg");
const SLIDER_1_FIRST_ITEM = 0;

export default class IntroScreen extends Component {
  state = {
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height,
    slider1ActiveSlide: SLIDER_1_FIRST_ITEM
  };

  toLogin = () => {
    this.props.navigation.navigate("Login");
  };

  _renderItem = ({ item, index }) => {
    return (
      <Content style={styles.content}>
        <Card>
          <CardItem style={styles.card}>
            <Body style={styles.cardBody}>
              {item.image}
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.subtitle}</Text>
              <Button
                full
                style={styles.btnLogin}
                onPress={() => {
                  this.props.navigation.navigate("Login");
                }}
              >
                <Text>LOGIN</Text>
              </Button>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  };

  render() {
    const { screenWidth, screenHeight, slider1ActiveSlide } = this.state;
    console.log(Entries);
    return (
      <Container style={styles.container}>
        <ImageBackground source={bgIntro} style={styles.backgroundImage}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={Entries}
            renderItem={this._renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            firstItem={SLIDER_1_FIRST_ITEM}
            onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
          />

          <Pagination
            dotsLength={Entries.length}
            activeDotIndex={slider1ActiveSlide}
            dotColor={"rgba(255, 255, 255, 0.92)"}
            inactiveDotColor={"black"}
            inactiveDotOpacity={0.4}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
          />
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  content: {
    padding: 40,
    paddingTop: 80
  },
  card: {
    backgroundColor: "white"
  },
  cardBody: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 50
  },
  subTitle: {
    textAlign: "center",
    marginBottom: 10
  },
  btnLogin: {
    backgroundColor: "#3D8C0D"
  }
});
