/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; //Aqui chamando nosso componente App
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
