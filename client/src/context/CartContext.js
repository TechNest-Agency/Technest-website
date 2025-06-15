import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);    const addToCart = (item) => {
        // Generate a unique ID that includes the item title to identify similar items
        const itemId = `${item.title}-${Date.now()}`;
        
        // Handle different price formats
        let price, priceLabel, priceText;
        if (item.monthlyPrice) {
            price = item.monthlyPrice;
            priceLabel = '/month';
            priceText = `$${price}${priceLabel}`;
        } else if (item.priceRange) {
            const matches = item.priceRange.match(/\$?([\d,]+(?:\.\d{2})?)/g);
            price = matches ? parseFloat(matches[0].replace(/[$,]/g, '')) : 0;
            priceLabel = item.priceRange.includes('/month') ? '/month' : '';
            priceText = item.priceRange;
        } else if (item.price) {
            const matches = item.price.match(/\$?([\d,]+(?:\.\d{2})?)/g);
            price = matches ? parseFloat(matches[0].replace(/[$,]/g, '')) : 0;
            priceLabel = item.price.includes('/month') ? '/month' : '';
            priceText = item.price;
        } else if (item.priceVariants) {
            const variant = item.selectedVariant || item.priceVariants[0];
            const matches = variant.price.match(/\$?([\d,]+(?:\.\d{2})?)/g);
            price = matches ? parseFloat(matches[0].replace(/[$,]/g, '')) : 0;
            priceLabel = variant.price.includes('/month') ? '/month' : '';
            priceText = variant.price;
        } else {
            price = 0;
            priceLabel = '';
            priceText = 'Contact us';
        }
          const productDetails = {
            id: itemId,
            title: item.title || item.name,
            price: price,
            priceText: priceText,
            priceLabel: priceLabel,
            type: item.category || 'service',
            description: item.subtitle || item.description || '',
            category: item.category || '',
            features: item.features || [],
            duration: item.delivery || '',
            image: item.image || '',
            bestFor: item.bestFor || '',
            tier: item.tier || null,
            featured: item.featured || false
        };

        setCartItems(prev => {
            const existingItem = prev.find(i => i.id === productDetails.id);
            if (existingItem) {
                return prev.map(i => 
                    i.id === productDetails.id 
                        ? { ...i, quantity: (i.quantity || 1) + 1 }
                        : i
                );
            }
            return [...prev, { ...productDetails, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (itemId) => {
        // If itemId is an object (the item itself), use its id property
        const id = typeof itemId === 'object' ? itemId.id : itemId;
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prev => 
            prev.map(item => 
                item.id === itemId 
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price) || 0;
            const quantity = item.quantity || 1;
            return total + (price * quantity);
        }, 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + (item.quantity || 1), 0);
    };

    const value = {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};