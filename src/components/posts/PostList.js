import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Post from './Post';
export default class PostList extends Component {
  render() {
    return (
        <Container>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </Container>
    );
  }
}