import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import IntroScreen from "./IntroScreen";
import LoginScreen from "../LoginScreen";

const IntroScreenRouter = createDrawerNavigator({
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      drawerLockMode: "locked-closed",
      drawerLabel: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      drawerLockMode: "locked-closed",
      drawerLabel: null
    }
  }
});

export default createAppContainer(IntroScreenRouter);
