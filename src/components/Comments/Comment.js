import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Comment extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <View key={this.props.key} style={styles.card}>
       <Text>111</Text>
          <Card >
            {/* <CardItem>
              <Left>
                <Button transparent  onPress={() => alert("This is user info")}>
                  <Thumbnail small source={{uri: this.props.comment.userImage}}  />
                </Button>
                <Body>
                  <Text style={{fontWeight:"bold"}}> {this.props.comment.username} </Text>
                  <Text note> {this.props.comment.created_time} </Text>
                </Body>
              </Left>
              <Right>
                  <Button transparent onPress={() => alert("This is like")}>
                    <Icon active name="thumbs-up" />
                    <Text>{this.props.comment.likes > 0 ? this.props.comment.likes : 0} Likes</Text>
                 </Button>
                 <Button transparent onPress={() => alert("This is chat")}>
                    <Icon active name="chatbubbles" />
                 </Button>
              </Right>
            </CardItem> */}
            {/* <CardItem Button onPress={()=> this.props.onCommentSelected(this.props.comment.id)}>
                <Text>
                    {this.props.comment.content}
                </Text>
            </CardItem>> */}
          </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    height:325,
    width:"100%"
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