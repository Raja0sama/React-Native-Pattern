import React from 'react';
import { View, StatusBar,Text } from 'react-native';
import { Style } from './css';
import { Input,Avatar,Icon,ButtonGroup } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

class Home extends React.Component {
 
	render() {
        const buttons = ['Nike', 'Adidas', 'Puma','jordans','Reebok']
        const selectedIndex  = 1
        	return (
			<View style={Style.Body}>
				<StatusBar backgroundColor="#30344B" barStyle="light-content" />
				<View style={Style.searchContainer}>
					<Input inputContainerStyle={{ borderWidth : 1,borderRadius:30,paddingRight:20,backgroundColor:'white' }} inputStyle={{color:'#30344B',marginLeft:10}} placeholderTextColor = "#30344B" placeholder="Search" rightIcon={{ type: 'font-awesome', name: 'search',color:'#30344B' }} />
                </View>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{flex:1,margin:30,height:50,}} >
                        <Text style={{fontSize:17,color:'white'}}>
                            Welcome back
                        </Text>
                        <Text style={{fontSize:27,color:'white',fontWeight:"bold"}}>
                            Raja Osama
                        </Text>
                    </View>
                    <View style={{flex:1,flexDirection:"row-reverse", margin:20, height: 50, }} >
                        <Avatar
                        rounded
                        size="large"
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        />
                        <View style={{width:75,height:75,justifyContent:"center",alignContent:"center"}}>
                        <Icon
                        name='shopping-cart'
                        color='#fff' 
                        size={35}
                        />
                        </View>
                      
                    </View>
                </View>

                <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                textStyle={{color:'white'}}
                selectedButtonStyle={{backgroundColor:'transparent'}}
                selectedTextStyle={{fontWeight:'bold',fontSize:20}}
                innerBorderStyle={{borderWidth:0}}
                containerStyle={{height: 30,backgroundColor:'transparent',color:'white',borderWidth:0}}
                />
                <LinearGradient 
                colors={['#3DA5CA', '#37CBB2']}
                style={{backgroundColor:'white',margin:20,paddingTop:30,paddingLeft:20,width:250,height:380,borderRadius:50}}>
                        <Text style={{fontSize:25,color:'white'}}>
                        Nike Epic React Flyknit Navy
                        </Text>

                </LinearGradient >
			</View>
		);
	}
}

export default Home;
