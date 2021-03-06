import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Grid, Row, View} from 'native-base';
import { getTime } from '../../common/TimeCalculate';
import { getDefaultImageUri } from '../../service/GetDefaultImageUri';
import { NumberText } from '../../common/NumberText';

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
            <CardItem cardBody button onPress={() => this.goToPostDetail()}>
              <Image
                  source={ getDefaultImageUri(this.props.post.image) } 
                  style={styles.deal_head_image}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Thumbnail small source={ getDefaultImageUri(this.props.post.user.profile.image, true) } 
                  />
                </Button>
                <Body>
                  <Text onPress={() => this.goToPostDetail()}>{this.props.post.title}</Text>
                  <Text note style={{textAlign: 'left'}}> {this.props.post.user.nick_name} </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                  <Text note>{ getTime(this.props.post.created_time_timestamp) }</Text>
                  <Text note>{ NumberText(this.props.post.user_page_view_count, 'view') }</Text>
                  <Text note>{ NumberText(this.props.post.post_upper_votes_count, 'Like') }</Text>
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