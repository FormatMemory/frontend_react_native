import React from 'react';
import { 
    Container, 
    Title, 
    Header,
    Text,
    Body,
    Content,
    } from 'native-base';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
  } from 'react-native';

export default class extends React.Component {
    // const [errorState, setErrorState] = useState(null);

    // // useEffect( () => {
    // //     // functions
    // // }, []);

    render(){
        return (
            <Container>
              <Content padder>
              <Text>
                    Account Screen
                </Text>
              </Content>
            </Container>
        );
    }
}

// export default AccountScreen;