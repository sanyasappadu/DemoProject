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
const output2 = {}
Object.keys(input.products).forEach((product) => {
    output2[product] = {}
    Object.keys(input.plans).forEach((plan)=>{
        console.log(input.plans[plan].find((x) => x === product));
        output2[product][plan]={}
        console.log(input.plans[plan]);
    })
})
console.log(output2);

// output
// {
//     lite: {
//         monthly: {
//             id: "lite",
//             name: "Lite",
//             description: "Lite plan description",
//             price: 99,
//         },
//         yearly: {
//             id: "lite",
//             name: "Lite",
//             description: "Lite plan description",
//             price: 99,
//         }
//     },
//     premium: {
//         yearly: {
//             id: "premium",
//             name: "Premium",
//             description: "Premium plan description",
//             price: 199,
//         }
//     },
//     ultra: {
//         monthly: {
//             id: "ultra",
//             name: "Ultra",
//             description: "Ultra plan description",
//             price: 299
//         }
//     }
// }

