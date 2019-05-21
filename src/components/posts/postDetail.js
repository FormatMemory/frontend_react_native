import { Card, CardItem, Container, Content, Left, Body, Right, Icon, Button, Text, Footer, FooterTab, Fab } from 'native-base';
import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../constants/Colors';
import { getTime } from '../../common/TimeCalculate';

class PostDetail extends Component {

  componentWillMount() {
    console.log("######");
    console.log(this.props);
    console.log("######");
  }

  componentDidMount() {

  }

  //To DO: Save to libary

  render() {
    return (
      <View style={ styles.contentContainer }>
            <Image source={ this.props.cur_post.image ? {uri: this.props.cur_post.image} : require('../../../assets/images/image_not_found.png') } 
              style={styles.deal_head_image}
              onPress={this.props.onPressHeadImage}
            />
            <CardItem>
              <Left>
                <Text note>Posted: {getTime(this.props.cur_post.created_time_timestamp)}</Text>
              </Left>
              <Right>
                <Text note>{this.props.cur_post.user_page_view_count} views</Text>
              </Right>
            </CardItem>
            <Text style={styles.post_title}>{this.props.cur_post.title}</Text>
            <Text style={styles.post_content}>{this.props.cur_post.body}</Text>
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
    backgroundColor: Colors.white,
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
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  post_content: {
    // flex: 1,
    padding: 10,
    fontSize: 16,
    margin: 5,
    textAlign: "justify",
    backgroundColor: Colors.white,
    justifyContent: "flex-start"
  },
  card: {
    // flex: 1,
    padding: 5,
    backgroundColor: Colors.white,
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