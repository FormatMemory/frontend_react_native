import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Card, CardItem, 
  Thumbnail, Form, Item, Label,
  Text, Button, Left, Body, Input,
  Right, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import { connect } from 'react-redux'

class Signup extends Component {
  constructor(props) {
    super(props);
    
  }

  state = {
    isLoading: false,
    email:'',
    password:'',
    showPassword: false,
  };


  componentWillMount(){

  }



  render() {
    return (
      <View>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Repeat Password</Label>
                <Input />
              </Item>
              <Button block style={{ marginHorizontal:10, marginTop:30, marginBottom:10}}>
                <Text style={{color:Colors.white}}>Signup</Text>
              </Button>
          </Form>
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

export default Signup;