import React, { Component } from 'react';
import { Image,
  ScrollView,
  RefreshControl,
  StyleSheet
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
      postList: [],
      isLoading: true,
      refreshing: false,
      curPage:1,
      hasMore: true,
      isError: false,
      isUpdate: true
    };
  }
  
  // fetchaData(){
  //   console.log("start reloading");
  //   return 1;
  // }

  fetchData = (retry=0) => {
    const prom =  new Promise( (resolve, reject) => {
      if(this.state.refreshing){
        reject('Already in refreshing');
      }
      else{
        this.wait(500);
        setTimeout( () => {
          var didSucceed = Math.random() >= 0.1;
          if (didSucceed){
            resolve(this.getPostLists());
            console.log('success'+retry);
          }else{
              if(retry >= 5){
                reject('Test Error');
              }else{
                console.log('Fetch error, retry'+retry);
                this.fetchData(retry+1)
                .then(data =>
                  resolve(data)
                )
                .catch(
                  err => {
                      reject(err)
                  }
                )
              }
          }
        }, 1000);
      }
    });
    return prom;
  }

  wait(time){
    setTimeout( () =>{
      //do what you need here
      console.log("finish reloading");
      // alert("refreshed");
    }, time);
  }

  updateNotify = () => {
    setTimeout( () =>{
      this.setState({
        isUpdate:true
      })
    }, 1000);
    setTimeout( () =>{
      this.setState({
        isUpdate:false
      })
    }, 2500);
  }
  
  appendPostList(newData){
    //append new data to the last of current postList state
    this.setState(prevState => {
      newPostList = prevState.postList.concat(newData.postList);
      return {
        ...prevState,
        postList:newPostList
      }
    })
  }

  updatePostList = (newData) => {
    //update the entire postList state
    this.setState(prevState => {
      return {
        ...prevState,
        postList:newData
      }
    })
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchData()
      .then( newData => this.appendPostList(newData))
      .catch(
        err => {
          console.log(err);
          alert(err);
          this.setState({
            isError:true
          })
        }
      ).then(
        this.setState({isError: false, isLoading:false})
      ).then(
        this.updateNotify()
      ).then(
        console.log(this.state)
      )
      this.setState({refreshing: false});
  }
  
  onPostSelected = (key) => {
    this.props.onPostSelected(key);
  }

  getPostLists = () => {
    // this.setState(prevState => {
      return {
        postList: [
          { id: 1, title: 'The CDFWERFQEWFEWQWED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', published:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
  
          { id: 2, title: '2Lorem ipsum dolor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', published:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
  
          { id: 3, title: '雅诗兰黛的撒娇哭泣都能看见', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', published:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
        ]
      };
    // });
  };

  componentWillMount(){
    this._onRefresh();
  }

  componentDidMount(){
  
  }

  showSpinner = () => {
      if( this.state.refreshing){
        //this.state.postList == null || this.state.postList.length == 0 || 
        return  <Spinner color='#e0e0eb'/>;
      }else{
        return null;
      }
  }

  setCurrentReadOffset = (event) => {
    let itemHeight = 402;
    let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
    let currentItemIndex = Math.ceil(currentOffset / itemHeight);

    this.state.dataset.setReadOffset(currentItemIndex);
  }

  render() {
    return (
        <Container>
        {
          this.state.isUpdate?
          <CardItem>
          <Text style={ styles.updateNotify }>Updated</Text>
          </CardItem>:null
        }
        <Content
            refreshControl={
              <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh.bind(this)}
                  title="Loading..."
                  scrollEventThrottle={300}
                  onScroll={this.setCurrentReadOffset}
              />
            }>
            {this.showSpinner()}
            { this.state.postList.length != 0 ? 
              this.state.postList.map((item, index) => {
                return (
                  <Post key={index}
                        post={item}
                        onPostSelected={this.onPostSelected}
                  />
                );
              }) : <Spinner color='#e0e0eb'/>
            }
        </Content>
        </Container>
    );
  }
}


const styles = StyleSheet.create({
  updateNotify: {
    flex: 1,
    padding: 1,
    marginTop:1,
    marginBottom:0,
    fontSize: 14,
    textAlign: "center",
    textTransform: "capitalize",
    alignItems: "center",
    color:"#4d94ff",
  },
});

export default PostList;