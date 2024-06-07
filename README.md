# Object Manipulation Documentation

This document provides an explanation of the object manipulation process used to transform the given `input` object into the desired `output` object. The transformation organizes products into their respective plans (monthly and yearly).

## Input Object

The `input` object consists of `products` and `plans`:

```javascript
const input = {
    products: {
        lite: {
            id: "lite",
            name: "Lite",
            description: "Lite plan description",
            price: 99,
        },
        premium: {
            id: "premium",
            name: "Premium",
            description: "Premium plan description",
            price: 199,
        },
        ultra: {
            id: "ultra",
            name: "Ultra",
            description: "Ultra plan description",
            price: 299
        }
    },
    plans: {
        monthly: ["lite", "ultra"],
        yearly: ["lite", "premium"]
    }
}
