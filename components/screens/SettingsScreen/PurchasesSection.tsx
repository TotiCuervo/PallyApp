import { View } from 'react-native';
import React from 'react';
import { Text } from 'library';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { usePurchaseContext } from '../../../context/PurchaseContext';

export default function PurchasesSection() {
    const { restorePurchases } = usePurchaseContext();
    return (
        <View>
            <Text bold>Purchases</Text>
            <View style={{ paddingTop: 15 }}>
                <TouchableOpacity onPress={restorePurchases}>
                    <Text>Restore purchases</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
