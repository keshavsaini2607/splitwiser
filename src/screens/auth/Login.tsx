import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {commonStyleSheet} from '../../common/styles';

type props = {};

const Login: React.FC<props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text
          variant="headlineSmall"
          style={[
            commonStyleSheet.textRowCenter,
            commonStyleSheet.headingText,
          ]}>
          Welcome to Splitwiser
        </Text>
        <Text
          style={[
            commonStyleSheet.textRowCenter,
            commonStyleSheet.descriptionText,
          ]}>
          Please login with your account or create a new one to effectively
          manage your finances
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingContainer: {
    paddingVertical: 10,
  },
});
