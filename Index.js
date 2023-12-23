import { AppRegistry } from 'react-native';
import App from './App'; // Adjust the path to your main App component
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
