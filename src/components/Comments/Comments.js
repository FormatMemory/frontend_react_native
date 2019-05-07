import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text} from 'native-base';
import { Comment } from './Comment';

class Comments extends Component {
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
          { postId:1, id: 1, content: 'The CDFWERFQEWFEWQWED That Wins Customers', username: 'closeBwak',likes:'123', views:'245', comments:'9', created_time:'4h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/617-Kg7OcpL._SL520_.jpg', userImage: 'https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg' },
  
          { postId:1, id: 2, content: '2Lorem ipsum dolor sit amet, everti rationibus his ', likes:'323', username: 'tasteCloet', views:'710', comments:'16', created_time:'9h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/G/01/xba/Dashboard_E_2x_April_2019._CB454465255_SY520_.jpg', userImage: 'http://alexsears.com/assets/img/alexsears.jpg' },
  
          { postId:1, id: 3, content: '10 Funny CDFWERFQEWFEWQWED Quotes', username: '⬆️哇塞', views:'698', likes:'43', comments:'8', created_time:'14h ago', headImage: 'https://images-na.ssl-images-amazon.com/images/I/41Z4evkR8TL._AC_SY480_.jpg', userImage: 'https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png'},
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
        <Container>
            <Content>
            <Text>comments</Text>
                {/* {
                this.state.comments.map((item, index) => {
                    return (
                    <Comment key={index}
                            comment={item}
                            onCommentSelected={() => props.onCommentSelected(key)} 
                    />
                    );
                })
                } */}
            </Content>
        </Container>
    );
  }
}

export default Comments;