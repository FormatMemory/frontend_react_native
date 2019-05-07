import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import PickedComment from './PickedComment';

class PickedComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  getComments = () => {
    this.setState(prevState => {
      return {
        comments: [
          { postId:1, id: 1, content: 'The CDFWE13412312dcsaRFQEWFEWQ13124231rfweswf13WED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
          { postId:1, id: 2, content: '2Lorem ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
          { postId:1, id: 3, content: '10 Funnyf3e2fre CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
          { postId:1, id: 4, content: '顺德区我几都去鸡传额我却等如同一条容易废弃物个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
        ]
      };
    });
  };

  componentWillMount(){
    this.getComments(); 
  }

  onCommentSelected(key){
    alert("Comment "+key+" selected.");
  }

  render() {
    return (
        <View>
            {/* <Content> */}
            <Text style={styles.post_help_text}>{this.state.comments.length} Comments</Text>
                {
                this.state.comments.map((item, index) => {
                    return (
                      <PickedComment key={index}
                              comment={item}
                              onCommentSelected={() => props.onCommentSelected(key)} 
                      />
                    );
                })
                }
            {/* </Content> */}
        </View>
    );
  }
}



const styles = StyleSheet.create({
  user_image:{
    // flex:1,
    padding:10,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"flex-start"
  },
  post_help_text:{
    margin: 10,
    textAlign:"left",
    color:"#ff9000",
    fontSize:14
    // textShadowColor: '#ff9000',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 1
  },
  card:{
    // flex:1,
    padding:5,
    backgroundColor:"#fff",
    marginBottom:1,
    height:325,
    width:"100%"
  }
});

export default PickedComments;