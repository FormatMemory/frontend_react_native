import React from 'react';
import { 
    Container, 
    Title, 
    Header,
    Text,
    Body,
    Content,
    } from 'native-base';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
  } from 'react-native';
import { connect } from 'react-redux';
import LoginSignup from '../../components/LoginSignup/LoginSignup';
import AccountMain from '../../components/AccountMain/AccountMain';

class AccountScreen extends React.Component {
    
    state = {
      authenticated: false,
    }

    componentWillMount(){

    }

    static navigationOptions = {
      header: null,
    };

    render(){
        return (
            <Container>
              {
                this.state.authenticated?
                  <AccountMain>
                  </AccountMain>
                :
                  <LoginSignup>
                  </LoginSignup>
              }
            </Container>
        );
    }
}

const mapStateToProps = state => {
  return {
      authenticated: state.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onUpdatePostId: (postId) => dispatch(updatePostId(postId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);
