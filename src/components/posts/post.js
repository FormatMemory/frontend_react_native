import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Grid, Row, View} from 'native-base';

class Post extends Component {
  constructor(props) {
    super(props);
  }
  goToPostDetail = () => {
    // alert("Go to post details");
    // console.log(this.props.post);
    this.props.onPostSelected(this.props.post.id);
  }
  
  render() {
    return (
      <View key={this.props.post.id} style={styles.card}>
          <Card>
            <CardItem cardBody button onPress={() => this.goToPostDetail(this.props.post.id)}>
              <Image source={{uri: this.props.post.headImage}} style={styles.deal_head_image}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent  onPress={() => alert("This is user info")}>
                  <Thumbnail small source={{uri: this.props.post.userImage}}  />
                </Button>
                <Body>
                  <Text onPress={() => this.goToPostDetail(this.props.post.id)}>{this.props.post.title}</Text>
                  <Text note style={{textAlign: 'left'}}> {this.props.post.username} </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                  <Text note>{this.props.post.published}</Text>
                  <Text note> {this.props.post.views > 0 ? this.props.post.views : 0} views</Text>
                  <Text note>{this.props.post.likes > 0 ? this.props.post.likes : 0} Likes</Text>
              </Left>
            </CardItem>
          </Card>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  user_image:{
    flex:1,
    padding:10,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  deal_head_image:{
    flex:1,
    height:175,
    width:"100%"
  },
  card:{
    padding:2,
    backgroundColor:"#fff",
    width:"100%",
    marginBottom:-7
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

export default Post;