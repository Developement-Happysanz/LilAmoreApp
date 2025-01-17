import React from 'react'
import { StyleSheet, Text, View, AsyncStorage, Image } from 'react-native'
import { Button } from 'react-native-elements'

export default class Login extends React.Component {

  static navigationOptions = () => {
    return {
        header: () => null,
        gesturesEnabled: false,
      }
    };

    getCurrentUser = async () => {
        try {
        //   const user = await GoogleSignin.currentUserAsync();
          this.setState({ user });
        } catch (error) {
          console.error(error);
        }
    };

    saveItem = async (item, selectedValue) => {
        try {
            await AsyncStorage.setItem(item, selectedValue);
            this.props.navigation.navigate('LandingScreen');       
          } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }

    
    
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.centerbox}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={{width: 230, height: 60}}
                            source={require('./images/logo.png')} />
                    </View>
                    {/* <Text style={styles.logo}>{'Lil` Amore'}</Text> */}

                    <View style={styles.secondbox}>

                        <Text style={styles.titleone}>{'Start'}</Text>

                        <Text style={styles.titleTwo}>{'Your'}</Text>

                        <Text style={styles.titleThree}>{'Purchase'}</Text>

                    </View>

                </View>

                <View style = {styles.signinView}>

                    <Button 
                        buttonStyle={styles.buttonSignin}
                        title="SIGN IN"
                        onPress={() => this.props.navigation.navigate('SigninScreen')}/>

                    {/* <Button buttonStyle={styles.buttonSignin}title="SIGN IN"onPress={() => Actions.signin()}/> */}
                
                </View>

                <View style = {styles.singupView}>

                    <Text>You don't have any account?</Text>

                    <Text style={{fontWeight: 'bold' }}
                        onPress={() => {
                        this.props.navigation.navigate('SignUpScreen')}}>{'Signup here'}
                    </Text>

                </View>

                <View style = {styles.skipView}>

                    <Text style={styles.buttonSkip}
                        onPress={() => {
                        this.saveItem('id_token','1')
                        AsyncStorage.setItem("user_id",'0');
                        this.props.navigation.navigate('LandingScreen')}}>{'Skip Login'}
                    </Text>

                    <View style = {styles.lineStyle} />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    centerbox: {
        flex:1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    logoContainer: 
    {    
        flex:1,
        justifyContent: 'center',
        alignSelf: 'center',
        top: 30,
    },
    titleone: {
        
        fontWeight: '500',
        fontSize: 38,
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
        top: 75,
        right: 120,
    },
    titleTwo: {
        
        fontWeight: '500',
        fontSize: 38,
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
        top:85,
        right: 120,
    },
    titleThree: {
        
        fontWeight: '500',
        fontSize: 38,
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
        top:95,
        right: 80,
    },
    buttonSignin: {
        backgroundColor: "#81c341",
        width: 270,
        height: 45,
        borderColor: "#81c341",
        borderWidth: 0,
        borderRadius: 30,
        top: 50,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonFbLogin:
    {
        backgroundColor: "#81c341",
        width: 150,
        height: 45,
        borderColor: "#81c341",
        borderWidth: 0,
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    googleLogin:
    {
        backgroundColor: "#81c341",
        width: 150,
        height: 45,
        borderColor: "#81c341",
        borderWidth: 0,
        borderRadius: 30,
    },
    buttonSkip: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
        // top: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    singupView:
    {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-between'
    },
    signinView:
    {
        flex:1,
        justifyContent:'center',
        alignSelf: 'center',
        top: 30,
    },
    socialMediaView:
    {
        flex:1,
        justifyContent:'center',
        alignSelf: 'center',
        top: 10,
    },
    skipView:
    {
        flex:1,
        justifyContent:'center',
        alignContent: 'space-between',
    },
    lineStyle: 
    {
        borderWidth: 0.5,
        borderColor:'black',
        margin: 2,
        width: 100,
        alignSelf: 'center',
    }
})

module.exports = Login;