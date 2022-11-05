import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'theme';
import { IfRender, Text } from 'library';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { usePurchaseContext } from '../../context/PurchaseContext';

export default function HeaderRightIcons() {
    const navigation = useNavigation();
    const { theme } = useTheme();
    const { purchases } = usePurchaseContext();

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <IfRender condition={!purchases.some((purchase) => purchase === 'Pally_Ad_Removal_v1_1.99_forever')}>
                <TouchableOpacity onPress={() => navigation.navigate('Early Adopter Promo')}>
                    <Text bold style={{ paddingRight: 20, fontSize: 15 }}>
                        No Ads
                    </Text>
                </TouchableOpacity>
            </IfRender>
            <FontAwesome5
                name="paper-plane"
                size={20}
                style={{ paddingRight: 20, color: theme.colors.text }}
                onPress={() => navigation.navigate('Feedback')}
            />
            <Ionicons
                name="settings-outline"
                size={24}
                style={{ paddingRight: 20, color: theme.colors.text }}
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}
