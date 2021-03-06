import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, List, ListItem } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/Colors';


class Comment extends Component {
  constructor(props) {
    super(props);
    
  }

  state = {
    liked:false,
    likes:0
  };

  onCommentLiked = () => {
    this.setState((prevState)=>{
      if(prevState.liked){
        likes = parseInt(prevState.likes) - 1 
      }else{
        likes = parseInt(prevState.likes) + 1
      }
      return {
        likes: likes,
        liked:!prevState.liked
      }
    });
  }

  componentWillMount(){
    //   console.log("This is single comment");
    //   console.log(this.props);
    this.setState({
      likes:this.props.comment.likes
    });
    if(Math.random() > 0.6){
      this.setState({
        liked:true
      });
    }
  }

  renderCommentLikeButton = () =>{
    return (
      <Button small transparent onPress={() => this.onCommentLiked() }>
      <View style={{ alignItems:'center', flexDirection:'column', justifyContent:'center',backgroundColor: 'transparent'}}>
          {this.state.liked?
            <Icon name="thumbs-up" color="#0066ff" style={{fontSize:16 }}/>
            :
            <Icon name="thumbs-o-up" style={{fontSize:16 }}/>
          }
          <Text style={{ fontSize:12, color:'grey' }}>{this.state.likes > 0 ? this.state.likes : ''}</Text>
      </View>
    </Button>
    );
  }

  render() {
    return (
      <View>
            <CardItem>
              <Left>
                <Button small transparent  onPress={() => alert("This is user info")}>
                  <Thumbnail circle small style={{height:30, width:30, marginRight:-20}} source={{uri: this.props.comment.userImage}}  />
                </Button>
                <Body>
                  <Text style={{fontWeight:"bold", fontSize:12}}> {this.props.comment.username} </Text>
                  <Text note style={{fontSize:10}}> {this.props.comment.created_time} </Text>
                </Body>
              </Left>
              <Right>
                 {this.renderCommentLikeButton()}
              </Right>
            </CardItem>
            <CardItem style={{marginTop:-10}} button onPress={ ()=> {this.props.onCommentSelected(this.props.comment)} }>
                <Text numberOfLines={2} style={{ fontSize:12 }}>
                    {this.props.comment.content}
                </Text>
            </CardItem>
            <View style={styles.separator}></View>
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

// const mapStateToProps = state => {
//   return {
    
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {

//   }
// };

export default Comment;