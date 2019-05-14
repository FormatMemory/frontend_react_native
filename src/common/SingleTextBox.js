import React from 'react';
import { Item, Input, Icon, Label, View } from 'native-base';
import { StyleSheet } from 'react-native';

class SingleTextBox extends React.Component {
    state = {
        icon: "eye-off",
        password: true
    };

    _changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            password: !prevState.password
        }));
    }

    render() {
        const { isPassword, label, icon, onChange, keyboardType } = this.props;
        return (
            <Item floatingLabel>
                <Icon active name={icon} />
                <Label style={ styles.lableText }>{label}</Label>
                <Input 
                    secureTextEntry={this.state.password && isPassword}
                    onChangeText={(e) => onChange(e)} 
                    blurOnSubmit={true}
                    maxLength={ 50 }
                    multiline={ false }
                    keyboardType= {keyboardType}
                />
                {
                    isPassword?
                    <Icon name={this.state.icon} onPress={() => this._changeIcon()} />
                    :<View></View> 
                }
            </Item>
        );
    }
}

const styles = StyleSheet.create({
    lableText:{
        justifyContent:'center',
        lineHeight:20,
        fontSize:20,
        marginBottom:20
    },
});



export default SingleTextBox;
