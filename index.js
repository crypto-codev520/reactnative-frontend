/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AboutMe from './components/aboutMe';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AboutMe);
