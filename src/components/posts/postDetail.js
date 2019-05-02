import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Footer, Content, Text, Button, Icon} from 'native-base';
import { Comments } from '../Comments/Comments'
import { connect } from 'react-redux';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    state = {
       cur_post:null,
    };
  }

  sample = [
    { id: 1, title: 'The CDFWERFQEWFEWQWED That Wins Customers', content:'dhqwejihdqwjkbbnm', username: 'closeBwak',likes:'123', views:'245', comments:'9', published:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
  
    { id: 2, title: '2Lorem ipsum dolor sit amet, everti rationibus his ', content:'e21e12dsfvg4534t24tgfdgqewf231', likes:'323', username: 'tasteCloet', views:'710', comments:'16', published:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },

    { id: 3, title: '10 Funny CDFWERFQEWFEWQWED Quotes',content:'d32r32fewf的撒的fdewqf武器', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', published:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
  ];

  getPostDetail = () => {
    key = this.props.post.postId;
    console.log("#########");
    console.log(this.props);
    console.log("#########");
    this.setState(prevState => {
      return {
        cur_post: this.sample.filter(post => post.id == key)
      };
    });
  }

  componentWillMount(){
    this.getPostDetail();
  }

  componentDidMount(){
    // console.log(this.props);
  }


  render() {
    return (
      
      <Container key={ this.props.post.postId }>
      {console.log(this.state)}
      {console.log(this.props.postId)}
      <Text>PostDetail</Text>
        <Content padder>
            <Image source={{uri: this.state.cur_post.headImage}}
                    style={styles.deal_head_image }
                    onPress={() => alert("This is deal head image")}
            />
            <Text style={ styles.post_title }>{ this.state.cur_post.title }</Text>
            <Text style={ styles.post_content }>{ this.state.cur_post.content }</Text>
            <Text style={ styles.post_help_text}>{ this.state.comments} Comments</Text>
            {/* <Comments
                post_id={this.state.post_id}
            /> */}
        </Content>
        <Footer>
                <Button transparent onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.state.cur_post.likes > 0 ? this.state.cur_post.likes : 0} Likes</Text>
                </Button>
                <Button transparent onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.state.cur_post.likes > 0 ? this.state.cur_post.likes : 0} Likes</Text>
                </Button>
                <Button transparent onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.state.cur_post.likes > 0 ? this.state.cur_post.likes : 0} Likes</Text>
                </Button>
                <Button transparent onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.state.cur_post.likes > 0 ? this.state.cur_post.likes : 0} Likes</Text>
                </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  user_image:{
    flex:1,
    padding:10,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  deal_head_image:{
    flex:1,
    height:175,
    width:"100%"
  },
  post_title:{
    flex:1,
    padding:10,
    marginTop:5,
    marginBottom:10,
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold",
    textTransform:"capitalize",
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"flex-start" 
  },
  post_content:{
    flex:1,
    padding:10,
    fontSize:20,
    margin:5,
    textAlign:"center",
    fontWeight:"bold",
    textTransform:"capitalize",
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"flex-start" 
  },
  card:{
    flex:1,
    padding:5,
    backgroundColor:"#fff",
    marginBottom:1,
    height:325,
    width:"100%"
  }
});

const mapStateToProps = state => {
  return {
    post: state.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onUpdatePostId: (postId) => dispatch(updatePostId(postId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);