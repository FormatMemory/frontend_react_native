import React, { Component } from 'react';
import { Image,
  ScrollView,
  RefreshControl,
  StyleSheet,
  FlatList
} from 'react-native';
import {
  Container,
  Header, Content,
  Card, CardItem,
  Thumbnail, Text,
  Button, Icon,
  Left, Body, Right,
  Spinner, ListView, ListItem
} from 'native-base';
import Post from './Post';
import { FetchPostsList } from '../../service/Posts/PostService';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      isLoading: true,
      refreshing: false,
      curPage:1,
      nextPage:'',
      hasMore: true,
      isError: false,
      isUpdate: true,
      page:1,
      isAppending:false,
      firstLoad:true
    };
  }
  
  // fetchaData(){
  //   console.log("start reloading");
  //   return 1;
  // }

  // fetchData = (retry=0) => {
  //   const prom =  new Promise( (resolve, reject) => {
  //     if(this.state.refreshing){
  //       reject('Already in refreshing');
  //     }
  //     else{
  //       this.wait(200);
  //       setTimeout( () => {
  //         var didSucceed = Math.random() >= 0.1;
  //         if (didSucceed){
  //           resolve(this.getPostLists());
  //           console.log('success'+retry);
  //         }else{
  //             if(retry >= 5){
  //               reject('Test Error');
  //             }else{
  //               console.log('Fetch error, retry'+retry);
  //               this.fetchData(retry+1)
  //               .then(data =>
  //                 resolve(data)
  //               )
  //               .catch(
  //                 err => {
  //                     reject(err)
  //                 }
  //               )
  //             }
  //         }
  //       }, 300);
  //     }
  //   });
  //   return prom;
  // }

  wait(time){
    setTimeout( () =>{
      //do what you need here
      // console.log("wait");
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
      // newPostList = prevState.postList.concat(newData.results);
      // for item in prevState.postList
      return {
        ...prevState,
        postList: [...prevState.postList, ...newData.results],
        nextPage: newData.next
      }
    })
    // console.log(this.state);
  }

  updatePostList = (newData) => {
    //update the entire postList state

    this.setState(prevState => {
      return {
        postList: newData.results,
        nextPage: newData.next
      }
    })
  }

  _onRefresh = () => {

    if(this.state.refreshing){
      return null;
    }
    this.setState({refreshing: true});
    // this.fetchData()
    FetchPostsList()
      .then( newData => this.updatePostList(newData))
      .catch(
        err => {
          console.log(err);
          alert(err);
          this.setState({
            isError:true,
            isLoading:false,
            refreshing: false,
          })
        }
      ).then(
        this.setState( prevState => {
                        return {
                          isError: false,
                          isLoading:false,
                          page:1,
                          nextPage: '',
                          firstLoad:false,
                          isAppending:false,
                          refreshing: false
                        }
                      })
      ).then(
        this.updateNotify()
      )
      // this.setState({
      //             swipeUpRefreshing: false,
      //             isAppending:false,
      //             firstLoad:false
      //    });
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

  // setCurrentReadOffset = (event) => {
  //   if(this.state.nextPage == null){
  //     return;
  //   }
  //   //console.log(event.nativeEvent.contentOffset);
  //   let itemHeight = 180;
  //   let itemPerPage = 3;
  //   let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
  //   let currentItemIndex = Math.ceil(currentOffset / itemHeight);
  //   // this.props.onSetHeader(currentOffset);
  //   // if(currentOffset > 0){
  //   //   this.hedder
  //   // }
  //   // console.log(currentItemIndex);
  //   // console.log(this.state.page);
  //   // console.log(this.state);
  //   // this.wait(300);
  //   if((this.state.page*itemPerPage - currentItemIndex ) < 1.5){
  //       this.handleLoadMore()
  //   }
  //   // this.state.dataset.setReadOffset(currentItemIndex);
  //   // this.state.page = 12
  // }

  handleLoadMore = () => {
    console.log(this.state.nextPage);
    if(!this.state.isAppending && this.state.nextPage!=null){
      this.setState({isAppending: true});
      FetchPostsList(this.state.nextPage)
      .then(newData => this.appendPostList(newData))
      .then(
        ()=>{
          this.setState(prevState => {
            return {
              page: prevState.page+1
            }
          })
          // console.log("page: "+ this.state.page);
        }
      ).
      then(this.setState({isAppending: false}))
      .catch(err=>{
        alert(err);
        console.log(err);
        this.setState({isAppending: false});
      })
    }
    
  };

  render() {
    return (
        <Container>
        {
          this.state.isUpdate?
          <CardItem>
          <Text style={ styles.updateNotify }>Updated</Text>
          </CardItem>:null
        }
        { this.state.postList.length == 0 ?
          <Card transparent >
              <CardItem >
                    <Body style={{
                              flex: 1,
                              marginTop:240,
                              justifyContent: 'center',
                              alignItems:'center'
                        }}>
                        <Spinner color='#e0e0eb' />
                        {
                          this.state.firstLoad && !this.state.refreshing ?
                              <Button primary style={{padding: '10%', alignSelf: 'center'}} onPress={() => this._onRefresh()}>
                                <Text>Click Refresh</Text>
                              </Button>
                          :null
                        }

                    </Body>
              </CardItem>
          </Card>
        :
          /* <Content
           
              onScroll={this.setCurrentReadOffset}
              scrollEventThrottle={200}
              removeClippedSubviews={true}
              // onEndReached={this._handleLoadMore}
              // onEndReachedThreshold={0.5}
              // initialNumToRender={10}
              >
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
          </Content> */

            /* this.showSpinner() */
            <FlatList
                data={this.state.postList}
                renderItem={({item}) => {
                  // console.log("item" + +item.title + item.id);
                  // console.log(item);
                  return <Post 
                            post={item}
                            onPostSelected={this.onPostSelected}
                        />
                }}
                keyExtractor={(item, index) => item.id.toString() }
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        title="Loading..."
                    />
                }
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0.2}
                onEndThreshold={100}
            />

        }
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