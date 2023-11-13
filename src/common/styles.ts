import {StyleSheet} from 'react-native';

export const commonStyleSheet = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  textRowCenter: {
    textAlign: 'center',
  },
  descriptionText: {
    color: '#aaa',
  },
  headingText: {
    color: '#253238',
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: '#253238',
    color: '#fff',
    width: '95%',
    borderRadius: 2,
  },
  colorWhite: {
    color: '#fff',
  },
  roundedBorder: {
    borderWidth: 1,
    borderColor: '#ffffff',
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noSpace: {
    padding: 0,
    margin: 0,
  },
});

export const formStyles = StyleSheet.create({
  formInputContainer: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#cdcdcd',
    padding: 10,
    borderRadius: 4,
  },
  formInputLabel: {
    color: '#aaa',
  },
});
