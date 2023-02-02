import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorageHandler?.(AsyncStorage)
  .configure({
    name: 'Weather'
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreContentTypes: /^(image)\/.*$/i,
      ignoreUrls: /\/(logs|symbolicate)$/
    },
    editor: false,
    errors: {
      veto: frame => frame.fileName.indexOf('/node_modules/react-native/') >= 0
    },
    overlay: false
  })
  .connect();
