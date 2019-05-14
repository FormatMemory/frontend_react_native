import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import Signup from './Signup';
import Login from './Login';
import { connect } from 'react-redux'

class LoginSignup extends Component {
  constructor(props) {
    super(props);
    
  }

  state = {
    isLogin:true
  };


  componentWillMount(){

  }

  switchLoginSignup = () => {
    this.setState( (prevState)=>{
        // console.log("switch ");
        return {
          isLogin: !prevState.isLogin
        }
      });
  }

  render() {
    return (
      <Container>
      <Header>
        <Text style={ styles.headerText }>{this.state.isLogin? 'Login':'Signup'}</Text>
      </Header>
      <View style={{ height: "15%"}}></View>
      <View>
      {
        this.state.isLogin?
          <Login>

          </Login>
        :
          <Signup>

          </Signup>
      }
      </View>
      <Text style={ styles.switchButtonText }
            onPress={()=>this.switchLoginSignup()}>
            {this.state.isLogin? 'Don\'t have an account? Sign-up here' : 'Already have an account? Login here'}
      </Text>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
    headerText:{
      alignSelf:'center',
      textAlign: 'center',
    },
    switchButtonText:{
      fontSize: 12,
      alignSelf:'center',
      color:Colors.blueDark,
      textAlign: 'center',
      textDecorationLine:'underline',
      marginVertical:10,
    },
    separator:{
      height: 1,
      width: "86%",
      backgroundColor: Colors.grayLight,
      marginLeft: "3%",
      marginRight: "3%"
    },
  user_image:{
    // flex:1,
    padding:10,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  deal_head_image:{
    // flex:1,
    height:175,
    width:"100%"
  },
  card:{
    // flex:1,
    padding:5,
    backgroundColor:"#fff",
    marginBottom:1,
    height:200,
    width:"100%",
    fontSize:14
  },
  devider:{
      padding:2,
      backgroundColor:'#fff',
      height:0.3,
      width:'90%',
      marginBottom:5
  }
});

const mapStateToProps = state => {
  return {
    token: ''
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onUpdatePostId: (postId) => dispatch(updatePostId(postId))
  }
};

export default connect(null, mapDispatchToProps)(LoginSignup);