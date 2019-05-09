import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import PickedComment from './PickedComment';

class PickedComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      pickedComments : []
    };
  }

  sample =  [
    { postId:1, id: 1, content: 'Tdhe CDFWE13412312dcsaRFQEWFEWQ13124231rfweswf13WED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
    { postId:1, id: 2, content: 'qwddqwdwq ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
    { postId:2, id: 3, content: '1232112310 Funnyf3e2fre CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
    { postId:2, id: 4, content: '但我确定我去东方 v 热狗热狗个个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
    { postId:2, id: 5, content: 'qweqweThe CDFWE13412312dcsaRFQEWFEWQ13124231rfweswf13WED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
    { postId:2, id: 6, content: 'dwqdwqrfwgf ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
    { postId:1, id: 7, content: '1qwdqwdwqdqwdqwCDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
    { postId:1, id: 4, content: '顺德区我几都去鸡传额我却等如同一条容易废弃物个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
    { postId:2, id: 1, content: 'wqeeqwqweThe CDFWE13412312dcsaRFQEWFEWQ13124231rfweswf13WED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
    { postId:1, id: 2, content: 'hthtrhtr ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
    { postId:1, id: 3, content: '10qwe21e21e1e2fre CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
    { postId:0, id: 4, content: '顺d的期望期望的我几都去鸡传额我却等如同一条容易废弃物个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
    { postId:1, id: 1, content: 'Thwqewqewqeqwe CDFWE13412312dcsaRFQEWFEWQ13124231rfweswf13WED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
    { postId:2, id: 2, content: '2Loeqweqwrgferrem ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
    { postId:1, id: 3, content: '10 qwewqeqwe CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
    { postId:1, id: 4, content: '第五期的期望发的认为俄晚饭却等如同一条容易废弃物个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
  ];
  
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
  
  getPickedComments = () => {
    this.setState(prevState => {
        return {
          pickedComments: [
            { postId:1, id: 2, content: '2Lorem ipsum do32432324lor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
            { postId:1, id: 3, content: '10 Funnyf3e2fre CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
            { postId:1, id: 4, content: '顺德区我几都去鸡传额我却等如同一条容易废弃物个热狗围观递欧气我甜美可人了两款g绯闻绯闻绯闻宴会厅言谈举止中e车 v 陪我一句有几个人到处 v 下', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
          ]
        };
      });
    };
    
  componentWillMount(){
    this.getComments(); 
    this.getPickedComments();
  }

  onCommentSelected(key){
    this.props.onCommentSelected(key);
  }

  render() {
    return (
        <View>
            <Text style={styles.post_help_text}>Comments</Text>
                {
                this.state.pickedComments.map((item, index) => {
                    return (
                      <PickedComment key={index}
                              comment={item}
                              onCommentSelected={(key) => this.onCommentSelected(key)} 
                      />
                    );
                })
                }
            <Text style={styles.more_comments} onPress={() => this.onCommentSelected(-1) }>--- {this.state.comments.length} Comments ---</Text> 
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
  more_comments:{
    flex:1,
    margin: 10,
    textAlign:"center",
    color:"#ff9000",
    fontSize:14
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