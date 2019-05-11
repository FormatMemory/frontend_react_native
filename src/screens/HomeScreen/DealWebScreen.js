import React, {Component} from 'react';
import {
  WebView, 
  StyleSheet,
  View
} from 'react-native';
import { 
  Header, Text, Icon,
  Button, Right, Left,
  Container
 } from 'native-base';
import Colors from '../../constants/Colors';

class DealWebScreen extends Component {
  state = {
    post: null,
    showCoupon:false
  }

  componentWillMount(){
    const { navigation } = this.props;
    post = navigation.getParam('post');
    this.setState({
      post:post,
      showCoupon:false
    });
  }

  onClickMenue(){
    this.setState({
      showCoupon: !this.state.showCoupon
    });
  }

  renderCouponMenue(){
    if(this.state.showCoupon){
      return (
        <View style={ styles.couponMenue }>
        {
          this.state.post.CouponCode.length > 0 ?
            <View>
                <Text style={{ fontSize:16, fontWeight:'300'}}>CouponCode</Text>
                <Text style={ styles.couponMenueText }>
                  { this.state.post.CouponCode }
                </Text>
            </View>
          :
            <Text style={ styles.couponMenueText }>
              No Coupon Code Required
            </Text>
        }
        </View>
      );
    }else{
      return null;
    }
  }

  static navigationOptions = {
    header: null,
  };
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>{ this.props.navigation.goBack() }}>
              <Icon name='arrow-back' />
              <Text>Back</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={()=>{ this.onClickMenue() }}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <View style={{flex:0.9}}>
              {this.renderCouponMenue()}
              <WebView
                  source={{uri: this.state.post.dealLink}}
                  style={{marginTop: 0}}
                  ref={ ref => {this._browser = ref} }
              />

        </View>
          <View style={ styles.footer }>
            <Button transparent onPress={()=>{ this._browser.goBack() }}>
              <Icon name="arrow-back" />
            </Button> 
            <Button style={{marginHorizontal:20}} transparent onPress={()=>{ this._browser.reload() }}>
              <Icon name="refresh" />
            </Button> 
            <Button transparent onPress={()=>{ this._browser.goForward() }}>
              <Icon name="arrow-forward" />
            </Button>
          </View>

      </Container>
    );
  }
}
const styles = StyleSheet.create({
    noContent:{
      flex:0.8,
      alignItems:'center',
      flexDirection:'column',
      justifyContent:'center',
    },
    footer:{
      flex: 0.1,
      backgroundColor: Colors.white,
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
      marginTop:10,
      padding:5,
      alignSelf: 'center',
      height:30,
      alignItems:'center',
      justifyContent:'center',
      flex:0.3
    },
    couponMenue:{
      padding:5,
      backgroundColor: Colors.grayLight,
      alignSelf:'center',
      height:"15%",
      width:"90%",
      marginVertical:5,
      alignItems:'center',
      justifyContent:'center',
    },
    couponMenueText:{
      fontSize:20,
      fontWeight:'bold',
      color: Colors.red,
    }
  });

export default DealWebScreen;