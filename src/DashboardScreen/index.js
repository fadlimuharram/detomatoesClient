import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import DashboardScreen from "./DashboardScreen";
import ResultScreen from "../ResultScreen";
import Sidebar from "../Sidebar";

const DashboardScreenRouter = createDrawerNavigator(
  {
    Dashboard: { screen: DashboardScreen },
    Result: {
      screen: ResultScreen,
      navigationOptions: {
        drawerLockMode: "locked-open",
        drawerLabel: null
      }
    }
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default createAppContainer(DashboardScreenRouter);
