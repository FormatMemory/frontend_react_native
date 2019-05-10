import React, { Component } from 'react';
import {
  Image,
  StyleSheet
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
import postReducer from '../../store/reducers/post';

class PostDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    state = {
      cur_post: null,
      active: true,
      postId: null,
      post: null,
      liked: false,
    };
  }

  componentWillMount() {
    this.getPostDetail();
    if(Math.random() > 0.5){
      this.setState({ liked: true });
    }
  }

  componentDidMount() {
    // console.log(this.props);
  }

  componentDidUpdate(){
    console.log(this.state);
  }


  sample = [
    { id: 1, 
      title: 'The CDFWERFQEWFEWQWED That Wins Customers', 
      content: 'It sportsman earnestly ye preserved an on. Moment led family sooner cannot her window pulled any. Or raillery if improved landlord to speaking hastened differed he. Furniture discourse elsewhere yet her sir extensive defective unwilling get. Why resolution one motionless you him thoroughly. Noise is round to in it quick timed doors. Written address greatly get attacks inhabit pursuit our but. Lasted hunted enough an up seeing in lively letter. Had judgment out opinions property the supplied. ', 
      username: 'closeBwak', 
      likes: '123', 
      views: '245', 
      comments: '9', 
      published: '4h ago', 
      headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', 
      userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg',
      dealLink: 'https://www.macys.com/',
      CouponCode: 'Happy18',
    },

    { id: 2, 
      title: '2Lorem ipsum dolor sit amet, everti rationibus his ', 
      content: 'Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. Attention affection at my preferred offending shameless me if agreeable. Life lain held calm and true neat she. Much feet each so went no from. Truth began maids linen an mr to after. ', 
      likes: '323', 
      username: 'tasteCloet', 
      views: '710', 
      comments: '16', 
      published: '9h ago', 
      headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', 
      userImage: 'http://alexsears.com/assets/img/alexsears.jpg',
      dealLink: 'https://www.amazon.com/dp/B07MMZ2LTB/ref=ods_gw_ha_vicc_blnk_xt2_dcard_announce?pf_rd_p=0f02a685-f6db-467d-8b92-10bff83707fe&pf_rd_r=XCJPKNT04B7DH6HC0M0N',
      CouponCode: 'BlackFriday',
    },

    { id: 3, 
      title: '雅诗兰黛的撒娇哭泣都能看见', 
      content: '已经是雅诗兰黛公司近年来在中国区的第四次价格下调了。2015年6月1日，我国降低了部分服装、鞋靴、护肤品、纸尿裤等日用消费品的进口关税税率，平均降幅超过50%，其中，护肤品的进口关税由5%降低到2%。此后，2015年7月1日，雅诗兰黛公司发布声明，自7月1日起下调旗下众多品牌的建议零售价格，囊括了雅诗兰黛公司在中国', 
      username: '⬆️哇塞', 
      views: '698', 
      likes: '43', 
      comments: '8', 
      published: '14h ago', 
      headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', 
      userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png',
      dealLink: 'https://www.amazon.com/',
      CouponCode: '',
    },
  ];

  getPostDetail = () => {
    key = this.props.post.postId;
    // console.log("#########");
    // console.log(this.props);
    // console.log("#########");
    this.setState(prevState => {
      return {
        cur_post: this.sample.filter(post => post.id == key)[0]
      };
    });
  }

  onCommentSelected = (commentId) => {
    // console.log(commentId+"commentID selected");
    this.props.navigation.navigate({
      key:'gotoComments',
      routeName:'Comments',
      params:{
        commentId:commentId
      }
    });
  }

  onGoDealClicked = (post) => {
    // console.log("go deal");
    // console.log(post);
    // console.log("go deal post info above"); 
    this.props.navigation.navigate({
      key:'goDeal',
      routeName:'DealWeb',
      params:{
        post:post
      }
    });
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
        new_cur_post.likes = parseInt(new_cur_post.likes)-1 
      }else{
        new_cur_post.likes = parseInt(new_cur_post.likes) + 1
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
          <Text style={styles.footerButtonText} > { this.state.cur_post.likes > 0 ? this.state.cur_post.likes : ''} </Text>
        </Button>
      );
    }else{
      return (
        <Button small style={ styles.footerButton }  onPress={()=>{this.onPostLiked()}}>
          <Icon name="thumbs-up" />
          <Text style={styles.footerButtonText} > { this.state.cur_post.likes > 0 ? this.state.cur_post.likes : '' } </Text>
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
            />
            <PickedComments
              postId = { this.props.post.postId } 
              onCommentSelected = { (commentId) => this.onCommentSelected(commentId) }
            />
            </Content>
            <Footer transparent style={styles.footer}>
                <FooterTab transparent style={styles.footerTab}>
                      <Button small transparent style={styles.footerButton} onPress={() => this.onCommentSelected(-2)}>
                        <Icon name="chatbubbles" />
                        <Text style={styles.footerButtonText}>{this.state.cur_post.comments > 0 ? this.state.cur_post.comments : ''}</Text>
                      </Button>
                      { 
                        this.renderPostLikeButton()
                      }
                    <Button small rounded primary style={ styles.goDealButton }>
                        <Text style={{color:'#fff', fontWeight:'bold'}} onPress={() => this.onGoDealClicked(this.state.cur_post)}>
                          Go Deal
                        </Text>
                    </Button>
                  </FooterTab>
            </Footer>
        </Container>
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
    backgroundColor:"#FFF",
    alignItems:'center',
    justifyContent: 'center',
  },
  footerd:{
    backgroundColor:"#FFF",
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

export default connect(mapStateToProps)(PostDetailScreen);