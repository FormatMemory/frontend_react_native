import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator, { makeRootNavigator } from './src/navigation/AppNavigator';
import { connect } from 'react-redux';
import {
  startLoad,
  stopLoad,
  startError,
  stopError
} from './src/store/actions/index';
import Colors from './src/constants/Colors';
import { Root } from 'native-base';

class App extends React.Component {
  state = {
    
  };

    // isLoadingComplete: false,
    // isLoading: true,
    // isError: false,
    // errorMessage: "",

  renderNavigator =  () => {
    // const Navigator =  makeRootNavigator(false);
    // return <Navigator/>
    return <AppNavigator/>
  }

  render() {
    // console.log(this.props.isLoading);
    if (this.state.isLoading && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          // onError={this._handleLoadingError}
          // onFinish={this._handleFinishLoading}
          // startAsync={this.props.onStartLoading}
          onError={this.props.onError}
          onFinish={this.props.onStopLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Root>
             {this.renderNavigator()}
          </Root>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  // _handleLoadingError = error => {
  //   // In this case, you might want to report the error to your error
  //   // reporting service, for example Sentry
  //   console.warn(error);
  // };

  // _handleFinishLoading = () => {
  //   this.setState({ isLoading: false });
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

// export default App;
const mapStateToProps = state =>{
  return {
    isLoading: state.isLoading,
    isError: state.isError,
    error_message: state.error_message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStartLoading: () => dispatch(startLoad()),
    onStopLoading: () => dispatch(stopLoad()),
    onStartError: (err) => dispatch(startError(err)),
    onStopError: () => dispatch(stopError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);