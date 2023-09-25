import Toast from 'react-native-toast-message'

export const ErrorHandler = (e)=>
{
  console.log('inside Eror Handler',e)
    Toast.show({
        type: 'error',
        text1: 'Error Occur'
      });
}