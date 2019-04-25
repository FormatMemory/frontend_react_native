import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Post extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Container>
          <Card style={{height:300}}>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}} style={styles.deal_head_image}/>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}}  style={{height: 30, width: 10, flex: 0.1}} />
                <Body>
                  <Text>Deal Name</Text>
                  <Text note>user</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  deal_image:{
    flex:1,
    padding:10,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  deal_head_image:{
    flex:1,
    height:200,
    width:"100%"
  }
});

export default Post;