import { View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../library/Buttons/Button';
import { Text, Card } from '../../../library';
import { usePurchaseContext } from '../../../context/PurchaseContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../../../types/navigation';
import { TouchableHighlight } from 'react-native-gesture-handler';

type ProfileScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;
export default function NoAdsScreen() {
    const { purchaseProduct, restorePurchases } = usePurchaseContext();
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const points = [
        {
            title: 'Say goodbye to ads',
            subtitle: 'No more ads in the app'
        },
        {
            title: 'All future features are included',
            subtitle: 'For being an early supporter of the app, you will get all future features for free'
        },
        {
            title: 'A thank you from the team',
            subtitle: 'By purchasing this product, you are supporting the developer to continue to make this app better'
        }
    ];

    async function handleBuyingNoAds() {
        purchaseProduct('Pally_Ad_Removal_v1_1.99_forever').then(() => {
            navigation.navigate('Home');
        });
    }

    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            <Text bold style={{ fontSize: 30, marginTop: 20, textAlign: 'center' }}>
                Early adopter promo
            </Text>
            <Text style={{ marginTop: 10, marginBottom: 10, textAlign: 'center' }}>
                Remove ads and support the development of Pally by purchasing premium access.
            </Text>
            {points.map((point, index) => (
                <View style={{ paddingTop: 20 }}>
                    <Text bold style={{ fontSize: 20 }}>
                        {point.title}
                    </Text>
                    <Text style={{ paddingTop: 5 }}>{point.subtitle}</Text>
                </View>
            ))}
            <View style={{ marginTop: 30 }}>
                <Button onPress={handleBuyingNoAds}>Buy now</Button>
            </View>
            <View style={{ marginTop: 20 }}>
                <TouchableHighlight activeOpacity={0.6} underlayColor={'#DDDD'} onPress={restorePurchases}>
                    <Text bold style={{ padding: 20, textAlign: 'center' }}>
                        Restore purchases
                    </Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}
