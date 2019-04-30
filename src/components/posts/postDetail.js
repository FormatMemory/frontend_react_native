import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Footer, Content } from 'native-base';
import { Comments } from '../Comments/Comments'

class PostDetail extends Component {
  constructor(props) {
    super(props);
    
  }

  comments = this.state.comments.map((item, index) => {
        return (
            <Comments key={index}
                    post={item}
                    onPostSelected={() => props.onPostSelected(key)} 
            />
        )
    };
  render() {
    return (
      <Container >
      <Content padder>
        <Image source={{uri: this.props.post.headImage}} 
                style={styles.deal_head_image }
                onPress={() => alert("This is deal head image")}
         />
        <Text style={ styles.post_title }>{ this.props.item.title }</Text>
        <Text style={ styles.post_content }>{ this.props.item.content }</Text>
        <Text style={ styles.post_help_text}>{ count(this.props.comments)} Comments</Text>
        {this.comments}
        </Content>
        <Footer>
                <Button transparent onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.post.likes > 0 ? this.props.post.likes : 0} Likes</Text>
                </Button>
                <Button transparent onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.post.likes > 0 ? this.props.post.likes : 0} Likes</Text>
                </Button>
                <Button transparent onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.post.likes > 0 ? this.props.post.likes : 0} Likes</Text>
                </Button>
                <Button transparent onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.post.likes > 0 ? this.props.post.likes : 0} Likes</Text>
                </Button>
        </Footer>
          {/* <Card >
            <CardItem cardBody button onPress={() => alert("This is deal image")}>
            <CardItem>
              <Left>
                <Button transparent  onPress={() => alert("This is user info")}>
                  <Thumbnail small source={{uri: this.props.post.userImage}}  />
                </Button>
                <Body>
                  <Text  onPress={() => alert("This is deal info")}>{this.props.post.title}</Text>
                  <Text note style={{textAlign: 'left'}}> {this.props.post.username} </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                {/* <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>{ this.props.comments } Comments</Text>
                </Button> */}
                  {/* <Text note>{this.props.post.published}</Text>
                  <Text note> {this.props.post.views > 0 ? this.props.post.views : 0} views</Text> 
              </Left>
              <Right>
                <Button transparent onPress={() => alert("This is like")}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.post.likes > 0 ? this.props.post.likes : 0} Likes</Text>
                </Button>
              </Right>
            </CardItem>
          </Card> */} */}
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
    matgin:5,
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

// const mapStateToProps = state => {
//   return {
    
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {

//   }
// };

export default PostDetail;