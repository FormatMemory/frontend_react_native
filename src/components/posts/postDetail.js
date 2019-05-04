import { Card, CardItem, Container, Content, Left, Right, Icon, Button, Text, Footer, FooterTab, Fab } from 'native-base';
import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    state = {
      cur_post: null,
      active: true,
    };
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
      userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },

    { id: 2, 
      title: '2Lorem ipsum dolor sit amet, everti rationibus his ', 
      content: 'Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. Attention affection at my preferred offending shameless me if agreeable. Life lain held calm and true neat she. Much feet each so went no from. Truth began maids linen an mr to after. ', 
      likes: '323', 
      username: 'tasteCloet', 
      views: '710', 
      comments: '16', 
      published: '9h ago', 
      headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', 
      userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },

    { id: 3, 
      title: '雅诗兰黛的撒娇哭泣都能看见', 
      content: '已经是雅诗兰黛公司近年来在中国区的第四次价格下调了。2015年6月1日，我国降低了部分服装、鞋靴、护肤品、纸尿裤等日用消费品的进口关税税率，平均降幅超过50%，其中，护肤品的进口关税由5%降低到2%。此后，2015年7月1日，雅诗兰黛公司发布声明，自7月1日起下调旗下众多品牌的建议零售价格，囊括了雅诗兰黛公司在中国', 
      username: '⬆️哇塞', 
      views: '698', 
      likes: '43', 
      comments: '8', 
      published: '14h ago', 
      headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', 
      userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png' },
  ];

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

  componentWillMount() {
    this.getPostDetail();
  }

  componentDidMount() {
    // console.log(this.props);
  }


  render() {
    return (

      <Container key={this.props.post.postId}>
        {console.log(this.state)}
        {console.log(this.props.post.postId)}
        {/* <Text>PostDetail</Text> */}
        <Content padder>
          <Image source={{ uri: this.state.cur_post.headImage }}
            style={styles.deal_head_image}
            onPress={() => alert("This is deal head image")}
          />
          <CardItem>
            <Left>
              <Text note>Posted: {this.state.cur_post.published}</Text>
            </Left>
            <Right>
              <Text note>{this.state.cur_post.views} views</Text>
            </Right>
          </CardItem>
          <Text style={styles.post_title}>{this.state.cur_post.title}</Text>
           <Text style={styles.post_content}>{this.state.cur_post.content}</Text>

          <Text style={styles.post_help_text}>{this.state.cur_post.comments} Comments</Text>
          {/* <Comments
                postId={this.props.post.postId}
            /> */}
        </Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footerTab}>
                <Button small style={styles.footerButton} onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text style={styles.footerButtonText}>{this.state.cur_post.likes > 0 ? this.state.cur_post.likes : 0} Likes</Text>
                </Button>
                <Button small style={styles.footerButton} onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text style={styles.footerButtonText}>{this.state.cur_post.likes > 0 ? this.state.cur_post.likes : 0} Likes</Text>
                </Button>
                <Button small style={styles.footerButton} onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text style={styles.footerButtonText}>{this.state.cur_post.likes > 0 ? this.state.cur_post.likes : 0} Likes</Text>
                </Button>
                <Button small style={styles.footerButton} onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text style={styles.footerButtonText}>{this.state.cur_post.likes > 0 ? this.state.cur_post.likes : 0} Likes</Text>
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  user_image: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  deal_head_image: {
    flex: 1,
    height: 175,
    width: "100%"
  },
  post_title: {
    flex: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  post_content: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    margin: 5,
    textAlign: "justify",
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
  post_help_text:{
    margin: 10,
    textAlign:"right",
    color:"#ff9000",
    fontSize:14
    // textShadowColor: '#ff9000',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 1
  },
  card: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    marginBottom: 1,
    height: 325,
    width: "100%"
  },
  footerButton:{
    flex: 1,
    paddingLeft:5,
    paddingRight:5
  },
  footerButtonText:{
    fontSize:12,
  },
  footerTab:{
    flex:1,
    backgroundColor:"#FFF",
    alignItems:'center',
    justifyContent: 'center',
  },
  footerd:{
    backgroundColor:"#FFF",
    alignItems:'center',
    justifyContent: 'center',
  },
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