import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import ResultScreen from "./ResultScreen";
import Sidebar from "../Sidebar";

const ResultScreenRouter = createDrawerNavigator(
  {
    Result: {
      screen: ResultScreen
    }
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default createAppContainer(ResultScreenRouter);
