import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Image,
  StyleSheet, TextInput,
  FlatList, View, BaseInput, Keyboard,
  KeyboardAvoidingView, TouchableWithoutFeedback,
} from 'react-native';
import { 
  Container, Text, 
  Button, ListView, Right,
  Footer, FooterTab, Content
 } from 'native-base';
// import Post from '../../components/Posts/Post';
import { MonoText } from '../../common/StyledText';
import { connect } from 'react-redux';

class CommentsScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    comments:[],
    postId: null,
    post:null,
    postComment:'',
    keyboadshow:false
  };
  componentWillMount() {
    // this.getComments();
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      console.log('keyboard show');
      this.setState({keyboadshow:true})
    });

    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      console.log('keyboard hide');
      this.setState({keyboadshow:false})
    });
  }

  componentDidMount() {
    // console.log(this.props);
    // console.log(this.props);
    // console.log(this.state);
  }

  componentWillUnmount(){
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  getComments = () => {
    this.setState(prevState => {
      return {
        comments: [
          { postId:1, id: 1, content: 'The CDFWE13412312dcsaRFQEWFEWQ13124231rfweswf13WED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
          { postId:1, id: 2, content: '2Lorem ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
          { postId:1, id: 3, content: '10 Funnyf3e2fre CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
          { postId:1, id: 4, content: '顺德区我几都去鸡传额我却等如同一条容易废弃物个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
          { postId:1, id: 1, content: 'The CDFWE13412312dcsaRFQEWFEWQ13124231rfweswf13WED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
          { postId:1, id: 2, content: '2Lorem ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
          { postId:1, id: 3, content: '10 Funnyf3e2fre CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
          { postId:1, id: 4, content: '顺德区我几都去鸡传额我却等如同一条容易废弃物个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
          { postId:1, id: 1, content: 'The CDFWE13412312dcsaRFQEWFEWQ13124231rfweswf13WED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
          { postId:1, id: 2, content: '2Lorem ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
          { postId:1, id: 3, content: '10 Funnyf3e2fre CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
          { postId:1, id: 4, content: '顺德区我几都去鸡传额我却等如同一条容易废弃物个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
          { postId:1, id: 1, content: 'The CDFWE13412312dcsaRFQEWFEWQ13124231rfweswf13WED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
          { postId:1, id: 2, content: '2Lorem ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
          { postId:1, id: 3, content: '10 Funnyf3e2fre CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
          { postId:1, id: 4, content: '顺德区我几都去鸡传额我却等如同一条容易废弃物个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
        ]
      };
    });
  };

  getPostDetail = () => {
    key = this.props.post.postId;
    console.log("#########");
    console.log(this.props);
    console.log("#########");
    this.setState(prevState => {
      return {
        cur_post: this.sample.filter(post => post.id == key)[0]
      };
    });
  }

  onCommentSelected = (commentId) => {
    console.log(commentId+"commentID selected");
  }

  renderNoContent() {
    return (
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
      <View style={styles.noContent}>
              <Icon name='comments-o' style={{color:'grey', fontSize:120}}></Icon>
              <Text style={{color:'grey', fontSize:28}}>No Content</Text>
              <Text style={{color:'grey', fontSize:14}}>Be the first one to comment</Text>
      </View>
      </TouchableWithoutFeedback>
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      // navigation.getParam('key',
      title: 'Comments',
    };
  };

  render() {
      return (
        <KeyboardAvoidingView
                  keyboardVerticalOffset="20"
                  behavior="padding" 
                  enabled
                  style={{flex: 1, justifyContent: 'space-between', }}>
        
            {/* {/* {console.log("FROM POST DETAIL SCREEN: "+this.props)}
            {console.log(this.props)}
            {console.log("UP FROM POST DETAIL SCREEN")}  */}
            {//this.state.comments.length() > 0 ?
              /* true?
                <Content padder>
                  <FlatList>
                    data={this.state.comments}
                    renderItem={()=>{return <Comments></Comments>} }
                  </FlatList>
                </Content>
              : */this.renderNoContent() 
            }

        
                  {console.log("state")  }
                  {console.log(this.state)}
                  <View style={styles.footer}>
                      <TextInput
                              style={ styles.postInputDefault }
                              onChangeText={(text) => this.setState({ postComment:text })}
                              placeholder='Add your comment...'
                              value={ this.state.postComment }
                              multiline={true}
                              onFocus={()=>{console.log(this.state)}}
                              returnKeyLabel = 'Ok'
                              returnKeyType='send'
                              blurOnSubmit={ true }
                              underlineColorAndroid='transparent'
                              keyboardType='default'
                              ref={ ref => {this._commentInput = ref} }
                            />
                      <Button small rounded primary style={ styles.postButton }>
                          <Text style={{color:'#fff', fontWeight:'bold'}} onPress={() => alert("This is post")}>
                            Post
                          </Text>
                      </Button>
                  </View>
                  {
                    this.state.keyboadshow ? <View style={{ height:60 }} ></View>:null
                  }
        </KeyboardAvoidingView>

      );
    }
}

const mapStateToProps = state => {
    return {
        // postId: state.postId,
        post: state.post
    };
};


const styles = StyleSheet.create({
  noContent:{
    flex:0.8,
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',
  },

  footer:{
    flex:0.2,
    backgroundColor:"#FFF",
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'row',
    paddingVertical:5,
    height:'auto',
    paddingHorizontal:5,
  },
  postButton:{
    marginStart:10,
    marginEnd:5,
    padding:5,
    alignSelf: 'center',
    height:30,
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  postInputDefault:{
    marginLeft:10,
    maxHeight:90,
    height:'auto',
    width:'100%',
    borderColor: '#777',
    paddingHorizontal:12, 
    paddingVertical: 6,
    borderRadius:10,
    borderWidth: 1,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#d9d9d9',
    flex:3,
    textAlignVertical: 'center'
  },
  postInputFocus:{
    marginLeft:10,
    height: 140,
    width:'100%',
    borderColor: '#777',
    paddingHorizontal:12, 
    paddingVertical: 6,
    borderRadius:30,
    borderWidth: 1,
    borderColor:'#d9d9d9',
    flex:3
  },
});

export default connect(mapStateToProps)(CommentsScreen);