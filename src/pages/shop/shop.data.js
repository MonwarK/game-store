const SHOP_DATA = [
    {
        id: 1,
        title: "Xbox",
        routeName: "xbox",
        items: [
            {
                id: 1, 
                name: "Xbox Series X",
                imageUrl: "https://www.nme.com/wp-content/uploads/2020/07/Xbox-Series-X.jpg",
                price: 499.99
            },
            {
                id: 2, 
                name: "Xbox One",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61x26DNGgAL._AC_SL1200_.jpg",
                price: 249.99
            },            
            {
                id: 3, 
                name: "FIFA 21",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/8110jFc6oXL._AC_SX385_.jpg",
                price: 79.99
            },
            {
                id: 4, 
                name: "Xbox 360",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71x%2BrYc7pLL._AC_SX466_.jpg",
                price: 79.99
            },
            {
                id: 5, 
                name: "Assassin's Creed ValHalla",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81aoHxuSBGL._SL1500_.jpg",
                price: 59.99
            },
            {
                id: 6, 
                name: "Mortal Kombat 11 Ultimate",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81YFmHhgPKL._AC_SY500_.jpg",
                price: 39.99
            },
            {
                id: 7, 
                name: "Gears Tactics",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71o7J8TSUtL._AC_SX466_.jpg",
                price: 29.99
            },
            {
                id: 8, 
                name: "Xbox One S",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/813lBsn0qkL._AC_SX466_.jpg",
                price: 199.99
            }
        ]
    },
    {
        id: 2,
        title: "PC",
        routeName: "pc",
        items: [
            {
                id: 1, 
                name: "AERO MASTER",
                imageUrl: "https://www.pcspecialist.co.uk/images/cases/13215/h.png?21590",
                price: 599.99
            },
            {
                id: 2, 
                name: "CREATOR SUPREME",
                imageUrl: "https://www.pcspecialist.co.uk/images/cases/13989/h.png?21590",
                price: 1199.99
            },
            {
                id: 3, 
                name: "GRAND ULTRA",
                imageUrl: "https://www.pcspecialist.co.uk/images/cases/15261/h.png?21590",
                price: 1999.99
            },
            {
                id: 4, 
                name: "Apple MacBook Air",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81vKT2GiQKL._AC_SX522_.jpg",
                price: 1299.99
            }
        ]
    },
    {
        id: 3,
        title: "Playstation",
        routeName: "playstation",
        items: [
            {
                id: 1, 
                name: "PS5 Digital Edition",
                imageUrl: "https://www.techinn.com/f/13776/137769822/sony-ps5-digital-edition.jpg",
                price: 449.99
            },
            {
                id: 2, 
                name: "PS5 Disc Edition",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71PMC4DWWFL._AC_SL1500_.jpg",
                price: 549.99
            },
            {
                id: 3, 
                name: "PS4 Pro",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._AC_SL1500_.jpg",
                price: 199.99
            },
            {
                id: 4, 
                name: "PS4 Slim",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51x2uufH6SL._AC_SX569_.jpg",
                price: 169.99
            }
        ]
    },
    {
        id: 4,
        title: "Nintendo",
        routeName: "nintendo",
        items: [
            {
                id: 1, 
                name: "Nintendo Switch",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81nn7QDJFeL._AC_SX679_.jpg",
                price: 299.99
            },
            {
                id: 2, 
                name: "Nintendo 3DS",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/910d2Dz%2BOWL._AC_SX679_.jpg",
                price: 89.99
            },
            {
                id: 3, 
                name: "Nintendo Wii U",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51pbY7g8jDL._AC_SX466_.jpg",
                price: 109.99
            },
            {
                id: 4, 
                name: "New Nintendo 2DS XL",
                imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71RL2xIeuAL._AC_SX679_.jpg",
                price: 129.99
            }
        ]
    },
    {
        id: 5,
        title: "iPhone",
        routeName: "iphone",
        items: [
            {
                id: 1, 
                name: "iPhone 12 Max",
                imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-silver-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021658000",
                price: 1099.99
            },
            {
                id: 2, 
                name: "iPhone 12",
                imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343704000",
                price: 799.99
            },
            {
                id: 3, 
                name: "iPhone 11 Pro",
                imageUrl: "data:image/jpeg;base64,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",
                price: 599.99
            },
            {
                id: 4, 
                name: "iPhone 11 Pro",
                imageUrl: "data:image/jpeg;base64,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",
                price: 599.99
            }
        ]
    }
]

export default SHOP_DATA;