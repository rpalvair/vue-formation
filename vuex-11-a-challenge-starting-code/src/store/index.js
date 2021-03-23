import { createStore } from 'vuex'



const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            products: [
                {
                    id: 'p1',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
                    title: 'Book Collection',
                    description:
                        'A collection of must-read books. All-time classics included!',
                    price: 99.99,
                },
                {
                    id: 'p2',
                    image:
                        'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
                    title: 'Mountain Tent',
                    description: 'A tent for the ambitious outdoor tourist.',
                    price: 129.99,
                },
                {
                    id: 'p3',
                    image:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
                    title: 'Food Box',
                    description:
                        'May be partially expired when it arrives but at least it is cheap!',
                    price: 6.99,
                },
            ],
            cart: { items: [], total: 0, qty: 0 }
        }
    },
    mutations: {
        setAuth(state, payload) {
            console.log("setAuth", payload)
            state.isLoggedIn = payload.isAuth
        },
        addProduct(state, productData) {
            console.log('add product', productData)
            const productInCartIndex = state.cart.items.findIndex(
                (ci) => ci.productId === productData.id
            );

            if (productInCartIndex >= 0) {
                state.cart.items[productInCartIndex].qty++;
            } else {
                const newItem = {
                    productId: productData.id,
                    title: productData.title,
                    image: productData.image,
                    price: productData.price,
                    qty: 1,
                };
                state.cart.items.push(newItem);
            }
            state.cart.qty++;
            state.cart.total += productData.price;
        }
    },
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true })
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false })
        },
        addProduct(context, payload) {
            console.log("payload", payload)
            context.commit('addProduct', payload)
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn
        },
        products(state) {
            return state.products
        },
        cart(state) {
            return state.cart
        }
    }
})

export default store