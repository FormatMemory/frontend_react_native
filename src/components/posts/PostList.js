import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Post from './Post';
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts : [],
    };
  }

  getPostLists = () => {
    this.setState(prevState => {
      return {
        PostList: [
          { id: 1, title: '1Lorem ipsum dolor sit amet1, everti rationibus his cu', views:'200', comments:'9', published:'4h ago', image: '../img/img1.jpeg' },
  
          { id: 2, title: '2Lorem ipsum dolor sit amet, everti rationibus his ', Views:'700', comments:'16', published:'9h ago', image: '../img/img1.jpeg' },
  
          { id: 3, title: '3Lorem ipsum dolor sit amet, everti rationibus hi', Views:'698', comments:'8', published:'14h ago', image: '../img/img1.jpeg' },
        ]
      };
    });
  };

  componentWillMount(){
    this.getPostLists(); 
  }

  render() {
    return (
        <Container>
        <Content padder>
            {
              this.state.PostList.map((item, index) => {
                return (
                  <Post key={index}
                        title={item.title}
                        views={item.Views}
                        published={item.published}
                        deal_image={item.image}
                        comments={item.comments}
                  />
                );
              })
            }
        </Content>
        </Container>
    );
  }
}

export default PostList;