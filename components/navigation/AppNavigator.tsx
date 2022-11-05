import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from '../../types';
import BackButton from '../../components/reusable/BackButton';
import Calculator from '../../components/Calculator';
import InputScreen from '../../components/screens/InputScreen/InputScreen';
import FeedbackScreen from '../../components/screens/FeedbackScreen';
import SettingsScreen from '../../components/screens/SettingsScreen/SettingsScreen';
import HeaderRightIcons from './HeaderRightIcons';
import { Track } from '../../components/reusable/Track';
import { useTheme } from 'theme';
import NoAdsScreen from '../screens/NoAdsScreen/NoAdsScreen';
const Stack = createStackNavigator<HomeStackParamList>();

export default function AppNavigator() {
    const { theme } = useTheme();
    const routeNameRef = React.useRef();
    const navigationRef = React.useRef();

    const screenOptions = (title: string) => {
        return {
            title: title
        };
    };

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                routeNameRef.current = navigationRef.current.getCurrentRoute().name;
            }}
            onStateChange={async () => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.current.getCurrentRoute().name;

                if (previousRouteName !== currentRouteName) {
                    let preReqTitle = '';
                    if (currentRouteName === 'InputScreen') {
                        preReqTitle = navigationRef.current.getCurrentRoute().params.title + ' ';
                    }
                    Track('On Screen: ' + preReqTitle + currentRouteName);
                }
                routeNameRef.current = currentRouteName;
            }}
        >
            <Stack.Navigator
                screenOptions={{
                    //@ts-ignore
                    cardStyle: { backgroundColor: theme.colors.background },
                    //@ts-ignore
                    headerStyle: {
                        //@ts-ignore
                        shadowRadius: 0,
                        shadowOffset: {
                            height: 0
                        },
                        elevation: 0,
                        backgroundColor: theme.colors.background
                    },
                    headerTintColor: theme.colors.text,
                    headerBackImage: () => <BackButton />,
                    headerBackTitleVisible: false
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Calculator}
                    options={{
                        ...screenOptions('Pill Counter'),
                        headerTitleAlign: 'left',
                        headerRight: () => <HeaderRightIcons />
                    }}
                />
                <Stack.Screen name="InputScreen" component={InputScreen} options={screenOptions('')} />
                <Stack.Screen name="Feedback" component={FeedbackScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Early Adopter Promo" component={NoAdsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
