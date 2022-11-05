import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import CalculationSection from './calculator/CalculationSection';
import CalculateSection from './calculator/CalculateSection';
import AdBanner from './ads/AdBanner';
import ResultCard from './calculator/ResultCard';
import { Text } from 'library';
import useStyles from 'styles';

export default function Calculator() {
    const styles = useStyles();

    return (
        <>
            <SafeAreaView style={{ flexGrow: 1 }}>
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        alignItems: 'center'
                    }}
                    keyboardShouldPersistTaps="always"
                >
                    <View
                        style={{
                            width: '100%',
                            flexDirection: 'column'
                        }}
                    >
                        <View
                            style={{
                                padding: 10,
                                maxWidth: 720,
                                alignSelf: 'center',
                                width: '100%'
                            }}
                        >
                            <View style={{ padding: 10 }}>
                                <Text style={styles.header}>Results</Text>
                                <View style={{ marginTop: 20 }}>
                                    <ResultCard />
                                </View>
                            </View>
                            <AdBanner />
                            <CalculationSection />
                            <CalculateSection />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
