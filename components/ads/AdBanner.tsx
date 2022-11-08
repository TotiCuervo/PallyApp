import React, { useState, useEffect } from 'react';
import { View, Platform } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import { usePurchaseContext } from '../../context/PurchaseContext';

export default function AdBanner() {
    const { purchases } = usePurchaseContext();
    const [unitId, setUnitId] = useState('');
    const isProduction = true;
    const showAds = !purchases.some((purchase) => purchase === 'Pally_Ad_Removal_v1_1.99_forever');
    const iosUnitId = 'ca-app-pub-9512758466818696/5828932556';
    const androidUnitId = 'ca-app-pub-9512758466818696/7389442147';
    const testIosUnitId = 'ca-app-pub-3940256099942544/2934735716';
    const testAndroidUnitId = 'ca-app-pub-3940256099942544/6300978111';

    useEffect(() => {
        setUnitId(Platform.OS === 'ios' ? iosUnitId : androidUnitId);

        // if (isProduction) {
        //     setUnitId(Platform.OS === 'ios' ? iosUnitId : androidUnitId);
        // } else {
        //     setUnitId(Platform.OS === 'ios' ? testIosUnitId : testAndroidUnitId);
        // }
    }, []);
    return (
        <>
            {showAds && unitId !== '' ? (
                <View style={{ alignItems: 'center', width: '90%', alignSelf: 'center' }}>
                    <BannerAd
                        unitId={unitId}
                        size={BannerAdSize.BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true
                        }}
                    />
                </View>
            ) : null}
        </>
    );
}
