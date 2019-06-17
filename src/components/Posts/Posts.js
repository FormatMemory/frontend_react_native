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
import { connect } from 'react-redux';
import { FetchPosts } from '../../service/Posts/PostService';
import { refreshPosts, appendPosts, updatePostId } from '../../store/actions';

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true,
    refreshing: false,
    hasMore: true,
    isError: false,
    isUpdate: true,
    isAppending:false,
    firstLoad:true
  };

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
    }, 500);
    setTimeout( () =>{
      this.setState({
        isUpdate:false
      })
    }, 2500);
  }

  _onRefresh = () => {

    if(this.state.refreshing){
      return null;
    }
    this.setState({refreshing: true});
    FetchPosts()
      .then( newData =>{
        if(newData){
          this.props.onRefreshPosts(newData.results, newData.next)
        }
      })
      .catch(
        err => {
          // console.log(err);
          alert(err);
          this.setState({
            isError:true,
            isLoading:false,
            refreshing: false,
          })
        }
      ).then(
        () =>
        this.setState( prevState => {
                        return {
                          isError: false,
                          isLoading:false,
                          page:1,
                          firstLoad:false,
                          isAppending:false,
                          refreshing: false
                        }
                      })
      ).then(
        () => this.updateNotify()
      )
  }
  
  onPostSelected = (postId) => {
    this.props.onPostSelected(postId);
  }

  componentDidMount(){
    this._onRefresh();
  }

  componentDidUpdate(){
    // console.log("****")
    // console.log(this.props.posts)
    // console.log("****")
  }

  showSpinner = () => {
      if( this.state.refreshing){
        return  <Spinner color='#e0e0eb'/>;
      }else{
        return null;
      }
  }

  handleLoadMore = () => {
    if(this.state.refreshing){
      return null;
    }

    if( (!this.state.isAppending) && this.props.nextPage){
      this.setState({isAppending: true});
      FetchPosts(this.props.nextPage)
      .then(newData => {
        if(newData){
          return this.props.onAppendPosts(newData.results, newData.next)
        }
      })
      .then(this.setState({isAppending: false}))
      .catch(err=>{
        alert(err);
        // console.log(err);
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
        { this.props.posts.size == 0 ?
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
            /* this.showSpinner() */
            <FlatList
                data={this.props.posts}
                renderItem={({item}) => {
                  return <Post 
                            post={item}
                            onPostSelected={(postId) => this.onPostSelected(postId)}
                        />
                }}
                keyExtractor={(item, index) => item.id.toString() }
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
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

const mapStateToProps = state => {
  return {
    posts: state.posts.posts.valueSeq().toArray(),
    nextPage: state.posts.nextPage,
    postId: state.posts.postId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdatePostId: (postId) => dispatch(updatePostId(postId)),
    onRefreshPosts: (newData, nextPage) => dispatch(refreshPosts(newData, nextPage)),
    onAppendPosts: (newData, nextPage) => dispatch(appendPosts(newData, nextPage)),
    onUpdatePostId: (postId) => dispatch(updatePostId(postId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);