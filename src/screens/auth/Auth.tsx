import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {commonStyleSheet} from '../../common/styles';
// import {IoIosArrowBack} from 'react-native-vector-icons/Ionicons';
import {Appbar} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import LoginForm from '../../components/LoginForm';
import SignupForm from '../../components/SignupForm';

type props = {
  navigation: StackNavigationProp<any>;
};

const Auth: React.FC<props> = ({navigation}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <View style={[commonStyleSheet.roundedBorder]}>
          <Appbar.BackAction
            size={15}
            color="#fff"
            style={commonStyleSheet.noSpace}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View>
          <Text
            variant="headlineSmall"
            style={[commonStyleSheet.headingText, commonStyleSheet.colorWhite]}>
            Welcome to Splitwiser
          </Text>
          <Text style={[commonStyleSheet.descriptionText]}>
            Please login with your account or create a new one to effectively
            manage your finances
          </Text>
        </View>
      </View>
      <View>
        {/* Tabs */}
        <View style={[commonStyleSheet.flexRow, styles.tabs]}>
          <Pressable onPress={() => setActiveTab('login')}>
            <Text
              style={[
                styles.tab,
                activeTab === 'login' ? styles.activeTab : styles.tab,
              ]}>
              Login
            </Text>
          </Pressable>
          <Pressable onPress={() => setActiveTab('signup')}>
            <Text
              style={[
                styles.tab,
                activeTab === 'signup' ? styles.activeTab : styles.tab,
              ]}>
              Signup
            </Text>
          </Pressable>
        </View>
        {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingContainer: {
    paddingVertical: 10,
    backgroundColor: '#253238',
    height: 150,
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: 10,
    padding: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  tabs: {
    gap: 25,
    padding: 10,
    marginVertical: 10,
  },
  tab: {
    color: '#aaa',
  },
  activeTab: {
    // color: '#253238',
    color: 'blue',
    borderBottomWidth: 2,
    borderBottomColor: '#253238',
  },
});
