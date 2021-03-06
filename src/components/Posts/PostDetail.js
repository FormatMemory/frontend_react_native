import { Card, CardItem, Container, Content, Left, Body, Right, Icon, Button, Text, Footer, FooterTab, Fab } from 'native-base';
import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Colors from '../../constants/Colors';
import { getTime } from '../../common/TimeCalculate';
import { getDefaultImageUri } from '../../service/GetDefaultImageUri';
import { NumberText } from '../../common/NumberText';


class PostDetail extends Component {

  componentWillMount() {

  }

  componentDidMount() {

  }

  //To DO: Save to libary

  renderCouponCode = ()=>{
    if(this.props.cur_post.coupon_code){
      return (<Text style={styles.couponCodeText}>{ "Counpon Code: " +this.props.cur_post.coupon_code }</Text>);
    }else{
      return null;
    }
  }

  getSavedRate = (regular, sale) => {
    return (100 * (regular - sale)/regular).toFixed(2);
  }
  getSavedPrice = (regular, sale) => {
    return (regular - sale).toFixed(2);
  }
  render() {
    return (
      <View style={ styles.contentContainer }>
            <Image source={ getDefaultImageUri(this.props.cur_post.image) } 
              style={styles.deal_head_image}
              onPress={this.props.onPressHeadImage}
            />
            <CardItem>
              <Left>
                <Text note>Posted: {getTime(this.props.cur_post.created_time_timestamp)}</Text>
              </Left>
              <Right>
                <Text note>{ NumberText(this.props.cur_post.user_page_view_count, 'view') }</Text>
              </Right>
            </CardItem>
            <Text style={styles.sale_price}>${this.props.cur_post.sale_price}</Text>
            <Text style={styles.saved}>
                              SAVE: ${this.getSavedPrice(this.props.cur_post.regular_price, this.props.cur_post.sale_price)}
                               ({this.getSavedRate(this.props.cur_post.regular_price, this.props.cur_post.sale_price)}%)
            </Text>
            <Text style={styles.regular_price}>Regular: ${this.props.cur_post.regular_price}</Text> 
            <Text style={styles.post_title}>{this.props.cur_post.title}</Text>
            {this.renderCouponCode()} 
            <Text style={styles.post_content}>{this.props.cur_post.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer:{
  },
  couponCodeText:{
    padding:10,
    margin:5,
    alignSelf:'center',
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.grayLight,
  },
  regular_price:{
    fontSize:15,
    marginStart:10,
  },
  sale_price:{
    fontSize:23,
    marginStart:10,
    marginBottom:5,
    marginTop:10,
    fontWeight:"bold"
  },
  saved:{
    fontSize:16,
    marginStart:10,
    fontWeight:"bold",
    backgroundColor: Colors.FireBrick,
    color: Colors.white,
    padding:2,
    alignSelf: "flex-start"
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

export default PostDetail;