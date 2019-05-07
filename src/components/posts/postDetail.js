import { Card, CardItem, Container, Content, Left, Body, Right, Icon, Button, Text, Footer, FooterTab, Fab } from 'native-base';
import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

class PostDetail extends Component {

  componentWillMount() {

  }

  componentDidMount() {
    console.log(this.props);
  }

  //To DO: Save to libary

  render() {
    return (
      <View key={this.props.post.postId} style={ styles.contentContainer }>
        {console.log(this.props)}
        {console.log(this.props.post.postId)}
        {/* <Text>PostDetail</Text> */}
            <Image source={{ uri: this.props.cur_post.headImage }}
              style={styles.deal_head_image}
              onPress={() => alert("This is deal head image")}
            />
            <CardItem>
              <Left>
                <Text note>Posted: {this.props.cur_post.published}</Text>
              </Left>
              <Right>
                <Text note>{this.props.cur_post.views} views</Text>
              </Right>
            </CardItem>
            <Text style={styles.post_title}>{this.props.cur_post.title}</Text>
            <Text style={styles.post_content}>{this.props.cur_post.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer:{
  },
  user_image: {
    // flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  deal_head_image: {
    // flex: 1,
    height: 175,
    width: "100%"
  },
  post_title: {
    // flex: 1,
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
    // flex: 1,
    padding: 10,
    fontSize: 16,
    margin: 5,
    textAlign: "justify",
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
  card: {
    // flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    marginBottom: 1,
    height: 325,
    width: "100%"
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