import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./store/reducer";
import IntroScreen from "./src/IntroScreen";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  state = {
    isReady: false
  };

  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return (
        <AppLoading
          startAsync={this._loadResourceAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <IntroScreen />
        </Provider>
      );
    }
  }

  _loadResourceAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/bgIntro.jpg"),
        require("./assets/images/intro1.png"),
        require("./assets/images/dashboardbg.jpg"),
        require("./assets/images/nopoto.jpg")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.FontAwesome.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
        signpainter: require("./assets/fonts/SignPainter-HouseScript-Regular.ttf"),
        Roboto_medium: require("./assets/fonts/Roboto-Medium.ttf")
      })
    ]);
  };

  _handleLoadingError = err => {
    console.log(err);
  };

  _handleFinishLoading = () => {
    this.setState({ isReady: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

/*
#54BE14
#3D8C0D
#808080
*/
