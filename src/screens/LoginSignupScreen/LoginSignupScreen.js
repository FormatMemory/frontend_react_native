import React, { Component } from 'react';
import {
  Image,
  StyleSheet
} from 'react-native';
import { 
  Container, 
  Title, 
  Header, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text, 
  Button, 
  Icon,
  Left, 
  Body, 
  Right,
  Content,
  ListItem,
  List
 } from 'native-base';
// import Post from '../../components/Posts/Post';
import {
  updatePostId
} from '../../store/actions/index';
import { connect } from 'react-redux';


class LoginSignupScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
  }

  componentDidMount(){
  }

  componentDidUpdate(){
  }

  facebookLogin = () => {
      alert('Facebook Login');
      this.props.navigation.navigate({
        key:'Home',
        routeName:'Home',
        params:{
        }
      });
  }

  wechatLogin = () => {
    alert('wechat Login');
    this.props.navigation.navigate({
        key:'Home',
        routeName:'Home',
        params:{
        }
      });
}
  render() {
      return (
        <Container>
          <Header>
            <Title>Taola</Title>
          </Header>
        <Button ></Button>
        <Button small rounded primary style={ styles.button } onPress={() => this.facebookLogin()}>
            <Text style={{color:'#fff', fontWeight:'bold'}}>
                Login With Facebook
            </Text>
        </Button>
        <Button small rounded primary style={ styles.button } onPress={() => this.wechatLogin()}>
            <Text style={{color:'#fff', fontWeight:'bold'}}>
                Login With Google
            </Text>
        </Button>
        </Container>
      );
    }
}


const mapStateToProps = state => {
  return {
      token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateToken: (token) => dispatch(updateToken(token)),
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button:{
    marginStart:10,
    marginEnd:5,
    padding:5,
    alignSelf: 'center',
    height:'75%' 
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignupScreen);