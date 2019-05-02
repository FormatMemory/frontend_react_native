import React, { Component } from 'react';
import { Image,
  ScrollView,
  RefreshControl
} from 'react-native';
import {
  Container,
  Header, Content,
  Card, CardItem,
  Thumbnail, Text,
  Button, Icon,
  Left, Body, Right,
  Spinner, ListItem
} from 'native-base';
import Post from './Post';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts : [],
      refreshing: false,
    };
  }
  
  fetchaData(){
    console.log("start reloading");
    return 1;
  }

  wait(){
    setTimeout(function(){
      //do what you need here
      console.log("finish reloading");
      alert("refreshed");
  }, 1500);
  }

  _onRefresh = () => {
    this.setState({refreshing: true});

    Promise.all(this.fetchaData(), this.wait())
            .then(
                this.setState({refreshing: false}
            )
    );
  }
  
  onPostSelected = (key) => {
    this.props.onPostSelected(key);
  }

  getPostLists = () => {
    this.setState(prevState => {
      return {
        postList: [
          { id: 1, title: 'The CDFWERFQEWFEWQWED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', published:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
  
          { id: 2, title: '2Lorem ipsum dolor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', published:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
  
          { id: 3, title: '雅诗兰黛的撒娇哭泣都能看见', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', published:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
        ]
      };
    });
  };

  componentWillMount(){
    this.getPostLists(); 
  }

  // componentDidMount(){
  //   this.setState({refreshing:false})
  // }

  showSpinner = () => {
      if( this.state.refreshing){
        //this.state.postList == null || this.state.postList.length == 0 || 
        return  <Spinner color='#e0e0eb'/>;
      }else{
        return null;
      }
  }

  render() {
    this.fetchaData.bind(this);
    return (
        <Container>
        <Content
            refreshControl={
              <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                  title="Loading..."
              />
            }>
            {this.showSpinner()}
            {
              this.state.postList.map((item, index) => {
                return (
                  <Post key={index}
                        post={item}
                        onPostSelected={this.onPostSelected}
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