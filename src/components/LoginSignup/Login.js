import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';


class Login extends Component {
  constructor(props) {
    super(props);
    
  }

  state = {

  };


  componentWillMount(){

  }



  render() {
    return (
      <View>
            <Text>Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

export default Login;