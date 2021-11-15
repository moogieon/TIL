import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

function ModalTester(props: any) {
  const onChangeName = text => {
    props.setAssets({...props.assets, name: text});
  };
  const onChangeAmount = text => {
    props.setAssets({...props.assets, amount: text});
  };
  const onChangePrice = text => {
    props.setAssets({...props.assets, price: text});
  };
  console.log('오?', props.assets);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000ae',
      }}>
      <View
        style={{
          borderRadius: 10,
          width: '75%',
          height: 350,
          backgroundColor: 'white',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingTop: 32,
        }}>
        <Text style={{fontSize: 20, color: 'black', marginBottom: 10}}>
          종목 추가
        </Text>
        <View style={{width: '100%', height: '80%', padding: 10}}>
          <Text style={{fontSize: 16, color: 'darkgrey'}}>종목 티커명</Text>
          <TextInput
            onChangeText={onChangeName}
            style={{
              fontSize: 14,
              borderBottomWidth: 1,
              width: '100%',
              height: 40,
              marginBottom: 10,
            }}></TextInput>
          <Text style={{fontSize: 16, color: 'darkgrey'}}>수량:</Text>
          <TextInput
            onChangeText={onChangeAmount}
            style={{
              fontSize: 14,
              borderBottomWidth: 1,
              width: '100%',
              height: 40,
              marginBottom: 10,
            }}></TextInput>

          <Text style={{fontSize: 16, color: 'darkgrey'}}>매수가격:</Text>
          <TextInput
            onChangeText={onChangePrice}
            style={{
              fontSize: 14,
              borderBottomWidth: 1,
              width: '100%',
              height: 40,
            }}></TextInput>
        </View>

        <TouchableOpacity
          onPress={props.subitAssets}
          style={{
            width: '100%',
            height: '20%',
            borderTopWidth: 1,
            borderTopColor: '#ECECEC',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 17, color: 'gold'}}>등록</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default ModalTester;
