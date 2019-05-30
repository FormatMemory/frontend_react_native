import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Linking
} from 'react-native';
import { 
  Container, Text, 
  Button, Icon,
  Footer, FooterTab, Content
 } from 'native-base';
// import Post from '../../components/Posts/Post';
import { MonoText } from '../../common/StyledText';
import PostDetail from '../../components/Posts/PostDetail';
import { connect } from 'react-redux';
import PickedComments from '../../components/Comments/PickedComments';
import Colors from '../../constants/Colors';
import { FetchPostsDetail } from '../../service/Posts/PostService'
import { NumberText } from '../../common/NumberText';
import { updatePost, updatePostId } from '../../store/actions';


class PostDetailScreen extends React.Component {
  defaultCurPost = {
    "id": -1,
      "post_reply_count": 0,
      "post_votes": [],
      "post_upper_votes_count": 0,
      "post_down_votes_count": 0,
      "user_page_view_count": 0,
      "login_user_page_view_count": 0,
      "go_to_link": 0,
      "login_user_go_to_link": 0,
      "user": {
          "id": 0,
          "email": "XX",
          "nick_name": "Default Nick Name",
          "status": "active",
          "profile": {
              "id": 1,
              "created_time": "2019-04-04T00:12:34.469417Z",
              "modified_time": "2019-04-04T00:12:34.535772Z",
              "gender": "",
              "location": "",
              "language": "",
              "birthdate": null,
              "bio": "",
              "image": "",
              "user": 1
          },
          "role": null
      },
      "category": [],
      "post_replies": [],
      "created_time": "2019-05-16T00:29:07.549952Z",
      "modified_time": "2019-05-16T00:29:07.550000Z",
      "title": "",
      "body": "",
      "image": null,
      "deal_link": "http://google.com",
      "date_expire": null,
      "status": "active",
      "coupon_code": ""
  }
  constructor(props) {
    super(props);
  }

  state = {
    cur_post: this.defaultCurPost,
    liked: false,
  };

  componentWillMount() {
  }

  componentDidMount() {
    // console.log(this.props);
    this.getPostDetail();
  }

  componentDidUpdate(){
    // console.log(this.state);
  }

  componentWillUnmount(){}

  getPostDetail = () => {
    // console.log("#########");
    // console.log(this.props);
    // console.log("#########");
    FetchPostsDetail(this.props.postId)
    .then(
      data => {
        // console.log(data, Object.keys(data).length);
        if( Object.keys(data).length > 0){
            this.setState(prevState => {
              return {
                cur_post: data
              };
            });
          return data;
        }else{
          console.log('post detail empty')
        }
      }
    ).then(
      () => {
        if(this.state.cur_post.id != -1){
          return this.props.onUpdatePost(this.state.cur_post)
      }
    }
    )
    .catch(
      err => {
        console.log(err)
      } 
    )
  }

  onCommentSelected = (entry_commentId) => {
    // console.log(commentId+"commentID selected");
    this.props.navigation.navigate({
      key:'gotoComments',
      routeName:'Comments',
      params:{
        commentId:entry_commentId
      }
    });
  }

  onGoDealClicked = (post) => {
    // console.log("go deal");
    // console.log(post);
    // console.log("go deal post info above"); 

    // this.props.navigation.navigate({
    //   key:'goDeal',
    //   routeName:'DealWeb',
    //   params:{
    //     post:post
    //   }
    // });

    // open device's browser with the post url
    if(post.deal_link){
      Linking.openURL(post.deal_link);
    }else{
      alert("No deal link");
    }
  }

  renderNoContent() {
    return (
      <NoContentView
        image={imgAppCloud}
        title={i18n.t('products.noContent')}
      />
    );
  }

  onPostLiked = () => {
    this.setState((prevState)=>{
      new_cur_post = {...prevState.cur_post}
      if(prevState.liked){
        new_cur_post.post_upper_votes_count = parseInt(new_cur_post.post_upper_votes_count)-1 
      }else{
        new_cur_post.post_upper_votes_count = parseInt(new_cur_post.post_upper_votes_count) + 1
      }
      return {
        cur_post:new_cur_post,
        liked:!prevState.liked
      }
    });
  }

  renderPostLikeButton = () =>{
    if(this.state.liked){
      return (
        <Button small transparent style={ styles.footerButton }  onPress={()=>{this.onPostLiked()}}>
          <Icon active name="thumbs-up" />
          <Text style={styles.footerButtonText} >  { NumberText(this.state.cur_post.post_upper_votes_count, '') }  </Text>
        </Button>
      );
    }else{
      return (
        <Button small style={ styles.footerButton }  onPress={()=>{this.onPostLiked()}}>
          <Icon name="thumbs-up" />
          <Text style={styles.footerButtonText} > { NumberText(this.state.cur_post.post_upper_votes_count, '') } </Text>
        </Button>
      );
    }
    
  }

  
  static navigationOptions = ({ navigation }) => {
    return {
      // title: String(navigation.getParam('key', 'Title')),
    };
  };

  render() {
      return (
        <Container>
          {/* {console.log("FROM POST DETAIL SCREEN: "+this.props)}
          {console.log(this.props)}
          {console.log("UP FROM POST DETAIL SCREEN")}  */}
          <Content padder>
            <PostDetail
              cur_post = {this.state.cur_post}
              onPressHeadImage = {this.onGoDealClicked}
            />
            {/* <PickedComments
              postId = { this.props.post.postId } 
              onCommentSelected = { (commentId) => this.onCommentSelected(commentId) }
            /> */}
            </Content>
            <Footer transparent style={styles.footer}>
                <FooterTab transparent style={styles.footerTab}>
                      <Button small transparent style={styles.footerButton} onPress={() => this.onCommentSelected(-2)}>
                        <Icon name="chatbubbles" />
                        <Text style={styles.footerButtonText}>{Object.keys(this.state.cur_post.post_replies).length > 0 ? Object.keys(this.state.cur_post.post_replies).length : ''}</Text>
                      </Button>
                      { 
                        this.renderPostLikeButton()
                      }
                    <Button small rounded primary style={ styles.goDealButton } onPress={() => this.onGoDealClicked(this.state.cur_post)}>
                        <Text style={{color:'#fff', fontWeight:'bold'}}>
                          Go Deal
                        </Text>
                    </Button>
                  </FooterTab>
            </Footer>
        </Container>
      );
    }
}

const styles = StyleSheet.create({
  footerButton:{
    // flex: 1,
    paddingLeft:5,
    paddingRight:5
  },
  footerButtonText:{
    fontSize:12,
  },
  footerTab:{
    // flex:1,
    backgroundColor: Colors.white,
    alignItems:'center',
    justifyContent: 'center',
  },
  footerd:{
    backgroundColor: Colors.white,
    alignItems:'center',
    justifyContent: 'center',
  },
  goDealButton:{
    marginStart:10,
    marginEnd:5,
    padding:5,
    alignSelf: 'center',
    height:'75%' 
  }
});


const mapStateToProps = state => {
    return {
        // postId: state.postId,
        postId: state.posts.postId
    };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdatePost: (post) => dispatch(updatePost(post))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailScreen);