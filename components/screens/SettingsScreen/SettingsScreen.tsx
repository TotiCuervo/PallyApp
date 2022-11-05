import React from 'react';
import { View } from 'react-native';
import { Text } from 'library';
import ThemeSection from './components/ThemeSection';
import PurchasesSection from './PurchasesSection';

export default function SettingsScreen() {
    return (
        <View style={{ padding: 20, paddingTop: 40 }}>
            <ThemeSection />
            <View style={{ paddingTop: 30 }}>
                <PurchasesSection />
            </View>
        </View>
    );
}
