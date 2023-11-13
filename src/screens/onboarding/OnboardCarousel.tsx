import {SafeAreaView, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {commonStyleSheet} from '../../common/styles';

type props = {
  navigation: StackNavigationProp<any>;
};

const OnboardCarousel: React.FC<props> = ({navigation}) => {
  return (
    <SafeAreaView>
      <Image
        source={require('../../assets/images/money.jpg')}
        style={styles.bannerImage}
      />
      <View style={commonStyleSheet.flexColCenter}>
        <View>
          <Text
            style={[
              commonStyleSheet.headingText,
              commonStyleSheet.textRowCenter,
            ]}
            variant="titleLarge">
            Split Bills And Keep Track of your finance
          </Text>
          <Text
            style={[
              commonStyleSheet.descriptionText,
              commonStyleSheet.textRowCenter,
            ]}
            variant="titleSmall">
            Split Bills And Keep Track of your finance
          </Text>
        </View>
        <View
          style={[commonStyleSheet.flexColCenter, commonStyleSheet.flexEnd]}>
          <Button
            onPress={() => navigation.navigate('Auth')}
            style={[commonStyleSheet.primaryButton]}>
            <Text style={[commonStyleSheet.colorWhite]}>Login</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050535',
  },
  bannerImage: {
    width: '100%',
    height: 500,
  },
});
