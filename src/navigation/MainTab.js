import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile, ChannelList} from '../screens';
//import {ThemeContext} from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MainTab = ({navigation, route}) => {
  //const theme = useContext(ThemeContext);

  useEffect(() => {
    const title = getFocusedRouteNameFromRoute(route) ?? 'Channels';
    navigation.setOptions({
      headerTitle: title,
      headerRight: () =>
        title === 'Channels' && (
          <Icon
            name="plus"
            size={26}
            style={{margin: 10}}
            onPress={() => navigation.navigate('Channel Creation')}
          />
        ),
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Channels" component={ChannelList} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default MainTab;
