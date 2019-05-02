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
import PostList from '../../components/Posts/PostList';
import PostDetail from './PostDetailScreen';
import {
  updatePostId
} from '../../store/actions/index';
import { connect } from 'react-redux';


// type Props = {};

class HomeScreen extends React.Component {

  // componentWillMount() {
  //   // this.props.askForGalleryPermission();
  //   // this.props.productsFetch();
  // }

  // componentWillUnmount() {
  //   // this.props.unsubscribe();
  // }

  constructor(props) {
    super(props);
  }

  renderNoContent() {
    return (
      <NoContentView
        image={imgAppCloud}
        title={i18n.t('products.noContent')}
      />
    );
  }

  static navigationOptions = {
    header: null,
  };

  onPostSelected = (key) => {
    console.log("HomeScreen on post selected "+key);
    // console.log(key);
    this.props.onUpdatePostId(key);
    // console.log("@#$%^&*(");
    // console.log(this.props);
    // console.log(this.state);
    // console.log("@#$%^&*(");
    this.props.navigation.push('Details', {
      key:key
    });

    
    // this.props.navigation.navigate({
    //   name:'PostDetail',
    //   component:PostDetail,
    //   post_key: key
    // })
  }
  
  render() {
      return (
        <Container>
          <Header>
            <Title>Deal Site</Title>
          </Header>
            <PostList
              onPostSelected = {this.onPostSelected}
            />
        </Container>
      );
    }
}

// const mapStateToProps = state => {
//   return {
//       postId: state.post.postId
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
      onUpdatePostId: (postId) => dispatch(updatePostId(postId))
  }
};

export default connect(null, mapDispatchToProps)(HomeScreen);


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
