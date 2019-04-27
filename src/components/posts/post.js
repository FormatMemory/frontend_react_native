import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Grid, Row, View} from 'native-base';

class Post extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Container style={styles.card}>
          <Card >
            <CardItem cardBody button onPress={() => alert("This is Card Image")}>
              <Image source={{uri: this.props.headImage}} style={styles.deal_head_image}/>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card info")}>
              <Left>
                <Thumbnail small source={{uri: this.props.userImage}}  />
                <Body>
                  <Text>{this.props.title}</Text>
                  <Text note style={{textAlign: 'left'}}> {this.props.username} </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                {/* <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>{ this.props.comments } Comments</Text>
                </Button> */}
                  <Text note>{this.props.published}</Text>
                  <Text note> {this.props.views > 0 ? this.props.views : 0} views</Text> 
              </Left>
              <Right>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.likes > 0 ? this.props.likes : 0} Likes</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
      </Container>
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
    flex:1,
    padding:5,
    backgroundColor:"#fff",
    marginTop:1,
    height:325,
    width:"100%"
  }
});

export default Post;