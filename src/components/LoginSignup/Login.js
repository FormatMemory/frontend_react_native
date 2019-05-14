import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, Platform,TextInput, TouchableOpacity } from 'react-native';
import { Form, Item, Label, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';
import { connect } from 'react-redux'
import SingleTextBox from '../../common/SingleTextBox';

class Login extends Component {
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

  onShowPasswordPressed(){
    this.setState((prevState) => {
      return {
        ...prevState,
        showPassword: !prevState.showPassword
      }
    });
  }

  onLoginSubmit(){
    alert("Login")
  }

  // style={{height: "70%", flexDirection:"column"}}
  render() {
    return (
      <View>
            <Form>
              <SingleTextBox 
                isPassword={false} 
                icon="md-mail" 
                label="Email" 
                onChange={(text) => this.setState({password: text})} 
                keyboardType='email-address'
              />
              <SingleTextBox
                  isPassword={true} 
                  icon="lock" 
                  label="Password" 
                  onChange={(text) => this.setState({password: text})} 
                  keyboardType='default'
                />
              <Button block 
                style={{ marginHorizontal:10, marginTop:30, marginBottom:10}}
                onPress={ () => this.onLoginSubmit()}
              >
                <Text style={{color:Colors.white}}>Login</Text>
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
  },


  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },
 
  textBoxBtnHolder:
  {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
 
  textBox:
  {
    fontSize: 18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: 'grey',
    borderRadius: 5
  },
 
  visibilityBtn:
  {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
 
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
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

export default connect(null, mapDispatchToProps)(Login);