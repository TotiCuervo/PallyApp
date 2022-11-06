import React, { useState, useEffect, useContext, createContext } from 'react';
import Purchases from 'react-native-purchases';

interface ContextType {
    purchases: Array<any>;
    purchaseProduct: (product: string) => Promise<void>;
    restorePurchases: () => Promise<void>;
}

export const PurchaseContext = createContext<ContextType>({
    purchases: [],
    purchaseProduct: () => Promise.resolve(),
    restorePurchases: () => Promise.resolve()
});

export const PurchaseProvider = ({ children }: any) => {
    const [purchases, setPurchases] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            Purchases.setDebugLogsEnabled(true);
            Purchases.configure({ apiKey: 'appl_uFNbEBjFGYuQqqFsABbmmkliQNe' });
            Purchases.getCustomerInfo().then((customerInfo) => {
                setPurchases(customerInfo.allPurchasedProductIdentifiers);
            });
        };

        fetchData();
    }, []);

    async function purchaseProduct(purchaseIdentifier: string) {
        return Purchases.purchaseProduct(purchaseIdentifier)
            .then(({ customerInfo }) => {
                setPurchases(customerInfo.allPurchasedProductIdentifiers);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async function restorePurchases() {
        return Purchases.restorePurchases()
            .then((customerInfo) => {
                setPurchases(customerInfo.allPurchasedProductIdentifiers);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const contextValue: ContextType = {
        purchases,
        purchaseProduct,
        restorePurchases
    };

    return <PurchaseContext.Provider value={contextValue}>{children}</PurchaseContext.Provider>;
};

export const usePurchaseContext = (): ContextType => {
    return useContext(PurchaseContext);
};
