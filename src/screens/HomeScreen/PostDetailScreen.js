import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import { 
  Container, 
  Title, 
  Header, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text, 
  Button, 
  Icon,
  Left, 
  Body, 
  Right,
  Content,
  ListItem,
  List
 } from 'native-base';
// import Post from '../../components/Posts/Post';
import { MonoText } from '../../common/StyledText';
import PostDetail from '../../components/Posts/PostDetail';
import { connect } from 'react-redux';

class PostDetailScreen extends React.Component {

  // componentWillMount() {
  //   // this.props.askForGalleryPermission();
  //   // this.props.productsFetch();
  // }

  // componentWillUnmount() {
  //   // this.props.unsubscribe();
  // }


  renderNoContent() {
    return (
      <NoContentView
        image={imgAppCloud}
        title={i18n.t('products.noContent')}
      />
    );
  }

  static navigationOptions = ({ navigation }) => {
    return {
      // title: String(navigation.getParam('key', 'Title')),
    };
  };

  render() {
      return (
        <Container>
          {/* {console.log("FROM POST DETAIL SCREEN: "+this.props)}
          {console.log(this.props)}
          {console.log("UP FROM POST DETAIL SCREEN")}  */}
            <PostDetail/>
        </Container>
      );
    }
}

const mapStateToProps = state => {
    return {
        postId: state.postId
    };
};

export default connect(mapStateToProps)(PostDetailScreen);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
