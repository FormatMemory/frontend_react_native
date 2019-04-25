import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Post extends Component {
  render() {
    return (
      <Container>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}} />
                <Body>
                  <Text>Deal Name</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}} style={{height: 200, width: null, flex: 1}}/>
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