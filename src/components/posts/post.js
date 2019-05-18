import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Grid, Row, View} from 'native-base';
import getDefaultImageUri from '../../common/GetDefaultImageUri';

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
      <View style={styles.card}>
          <Card>
            <CardItem cardBody button onPress={() => this.goToPostDetail(this.props.post.id)}>
              <Image
                  source={ this.props.post.image ? {uri: this.props.post.image} : require('../../../assets/images/image_not_found.png') } 
                  style={styles.deal_head_image}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent  onPress={() => alert("This is user info")}>
                  <Thumbnail small source={ this.props.post.user.image ? {uri: this.props.post.user.image} : require('../../../assets/images/default_profile.png') } 
                  />
                </Button>
                <Body>
                  <Text onPress={() => this.goToPostDetail(this.props.post.id)}>{this.props.post.title}</Text>
                  <Text note style={{textAlign: 'left'}}> {this.props.post.user.email} </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                  <Text note>{this.props.post.created_time}</Text>
                  <Text note> {this.props.post.user_page_view_count > 0 ? this.props.post.user_page_view_count : 0} views</Text>
                  <Text note>{this.props.post.post_upper_votes_count > 0 ? this.props.post.post_upper_votes_count : 0} Likes</Text>
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