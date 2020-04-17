import { StyleSheet } from 'react-native';
import { green, darkGray } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  formContainer: {
    alignSelf: 'stretch',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10
  },
  textInput: {
    flex: 1,
    marginRight: 5
  },
  mainButton: {
    backgroundColor: green,
    borderRadius: 3
  },
  lastsSearchs: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    paddingHorizontal: 10
  },
  recordContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  recordTextContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    padding: 10
  },
  recordStyle: {
    fontSize: 10,
    color: darkGray
  },
  detail: {
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'stretch'
  }
});
