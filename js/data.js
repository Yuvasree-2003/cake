// =============================================================================
//  data.js — Single Source of Truth for all product data
//
//  HOW TO RENAME A PRODUCT:
//    Change the `name` field here. The new name will automatically appear
//    everywhere: product cards, cart, wishlist, WhatsApp order, search, etc.
//
//  HOW TO UPDATE OTHER DETAILS:
//    Change `price`, `weight`, `image`, `category`, `description`, `isEggless`,
//    `featured`, or `available` — all UIs will update automatically.
//
//  IMPORTANT — Keep `id` stable:
//    The `id` is used by the cart and wishlist as a permanent key.
//    Never change an existing `id`; only change the `name`.
// =============================================================================

const productsData = [

    // ── Jar Cakes ────────────────────────────────────────────────────────────
    {
        id: "jar-choco-truffle",
        name: "Chocolate Truffle Jar Cake",
        category: "Jar Cakes",
        price: 150,
        weight: "200g jar",
        image: "assets/jarcake/chocotruffle jar.jpeg",
        isEggless: true,
        description: "Rich chocolate truffle layered beautifully in a jar.",
        featured: false,
        available: true
    },
    {
        id: "jar-mango",
        name: "Mango Jar Cake",
        category: "Jar Cakes",
        price: 180,
        weight: "200g jar",
        image: "assets/jarcake/mango jar.jpeg",
        isEggless: false,
        description: "Fresh mango cream layered with soft sponge in a jar.",
        featured: false,
        available: true
    },
    {
        id: "jar-rose-milk",
        name: "Rose Milk Jar Cake",
        category: "Jar Cakes",
        price: 190,
        weight: "200g jar",
        image: "assets/jarcake/rosemilk jar.jpeg",
        isEggless: true,
        description: "Delicate rose milk flavour layered in a beautiful jar.",
        featured: false,
        available: true
    },
    {
        id: "jar-strawberry",
        name: "Strawberry Jar Cake",
        category: "Jar Cakes",
        price: 190,
        weight: "200g jar",
        image: "assets/jarcake/staberry jar.jpeg",
        isEggless: true,
        description: "Fresh strawberry cream layered with fluffy sponge.",
        featured: false,
        available: true
    },
    {
        id: "jar-tiramisu",
        name: "Tiramisu Jar Cake",
        category: "Jar Cakes",
        price: 190,
        weight: "200g jar",
        image: "assets/jarcake/tiramisu jar.jpeg",
        isEggless: true,
        description: "Classic Italian tiramisu served in an elegant jar.",
        featured: false,
        available: true
    },

    // ── Brownies ──────────────────────────────────────────────────────────────
    {
        id: "brownie-fudgy",
        name: "Fudgy Brownie",
        category: "Brownies",
        price: 120,
        weight: "80g per piece",
        image: "assets/images/fudgy brownie.jpeg",
        isEggless: false,
        description: "Dense, rich and fudgy chocolate brownie — a classic.",
        featured: true,
        available: true
    },
    {
        id: "brownie-heart",
        name: "Heart Brownie",
        category: "Brownies",
        price: 200,
        weight: "150g per piece",
        image: "assets/images/brownie heart.jpeg",
        isEggless: true,
        description: "A heart-shaped eggless brownie, perfect for gifting.",
        featured: false,
        available: true
    },
    {
        id: "brownie-tower",
        name: "Brownie Tower",
        category: "Brownies",
        price: 160,
        weight: "4 pieces (320g)",
        image: "assets/images/brownie tower.jpeg",
        isEggless: true,
        description: "A stacked tower of fudgy brownies to share and enjoy.",
        featured: false,
        available: true
    },
    {
        id: "brownie-assorted-box",
        name: "Assorted Brownie Box",
        category: "Brownies",
        price: 160,
        weight: "4 pieces (320g)",
        image: "assets/images/variety brownie.jpeg",
        isEggless: true,
        description: "A curated box of assorted brownie flavours.",
        featured: false,
        available: true
    },
    {
        id: "brownie-biscoff",
        name: "Biscoff Brownie",
        category: "Brownies",
        price: 160,
        weight: "80g per piece",
        image: "assets/images/biscoff brownie.jpeg",
        isEggless: true,
        description: "Fudgy brownie with a generous swirl of Biscoff spread.",
        featured: true,
        available: true
    },

    // ── Pastries ──────────────────────────────────────────────────────────────
    {
        id: "pastry-choco-cheesecake",
        name: "Chocolate Truffle Cheesecake",
        category: "Pastries",
        price: 135,
        weight: "120g per slice",
        image: "assets/waffpas/Chocolate Cheesecake.jpeg",
        isEggless: false,
        description: "Creamy cheesecake with a rich chocolate truffle layer.",
        featured: false,
        available: true
    },
    {
        id: "pastry-rose-milk",
        name: "Rose Milk Pastry",
        category: "Pastries",
        price: 145,
        weight: "120g per slice",
        image: "assets/waffpas/Rose Milk Cake.jpeg",
        isEggless: true,
        description: "Soft, fragrant rose milk pastry with cream frosting.",
        featured: false,
        available: true
    },
    {
        id: "pastry-straw-cheesecake",
        name: "Strawberry Cheesecake",
        category: "Pastries",
        price: 140,
        weight: "120g per slice",
        image: "assets/waffpas/straw che.jpeg",
        isEggless: true,
        description: "Smooth cheesecake topped with fresh strawberry glaze.",
        featured: false,
        available: true
    },
    {
        id: "pastry-strawberry",
        name: "Strawberry Pastry",
        category: "Pastries",
        price: 140,
        weight: "120g per slice",
        image: "assets/waffpas/straw sl.jpeg",
        isEggless: true,
        description: "Layered pastry slice with fresh strawberries and cream.",
        featured: false,
        available: true
    },

    // ── Birthday Cakes ────────────────────────────────────────────────────────
    {
        id: "cake-chocolate",
        name: "Chocolate Cake",
        category: "Cakes",
        price: 850,
        weight: "500g",
        image: "assets/cake/almod cake.jpeg",
        isEggless: true,
        description: "Moist, rich chocolate sponge layered with silky ganache.",
        featured: false,
        available: true
    },
    {
        id: "cake-biscoff",
        name: "Biscoff Cake",
        category: "Cakes",
        price: 1200,
        weight: "1 kg",
        image: "assets/cake/biscoff.jpeg",
        isEggless: false,
        description: "Soft cake loaded with Biscoff cream and crunchy crumble.",
        featured: true,
        available: true
    },
    {
        id: "cake-blueberry",
        name: "BlueBerry Cake",
        category: "Cakes",
        price: 1200,
        weight: "1 kg",
        image: "assets/cake/blueberry.jpeg",
        isEggless: false,
        description: "Light vanilla sponge topped with fresh blueberry compote.",
        featured: false,
        available: true
    },
    {
        id: "cake-butterscotch",
        name: "Butterscotch Cake",
        category: "Cakes",
        price: 1200,
        weight: "1 kg",
        image: "assets/cake/butterscoh.jpeg",
        isEggless: false,
        description: "Classic butterscotch sponge with caramel drizzle and praline.",
        featured: false,
        available: true
    },
    {
        id: "cake-choco-strawberry",
        name: "Choco Strawberry Cake",
        category: "Cakes",
        price: 1200,
        weight: "1 kg",
        image: "assets/cake/choco stawberry.jpeg",
        isEggless: false,
        description: "Chocolate sponge paired with fresh strawberry cream layers.",
        featured: false,
        available: true
    },
    {
        id: "cake-coffee",
        name: "Coffee Cake",
        category: "Cakes",
        price: 1200,
        weight: "1 kg",
        image: "assets/cake/coffee.jpeg",
        isEggless: false,
        description: "Bold espresso-flavoured sponge with coffee buttercream.",
        featured: false,
        available: true
    },

    // ── Tub Cakes ─────────────────────────────────────────────────────────────
    {
        id: "tub-chocolate",
        name: "Chocolate Tub",
        category: "Tub Cakes",
        price: 250,
        weight: "400g tub",
        image: "assets/tub/cho.jpeg",
        isEggless: true,
        description: "Creamy chocolate layers served in a shareable tub.",
        featured: false,
        available: true
    },
    {
        id: "tub-kunafa",
        name: "Kunafa Tub",
        category: "Tub Cakes",
        price: 280,
        weight: "400g tub",
        image: "assets/tub/kunafa.jpeg",
        isEggless: true,
        description: "Crispy kunafa layered with sweet cream — a Middle Eastern delight.",
        featured: true,
        available: true
    },
    {
        id: "tub-rasmalai",
        name: "Rasmalai Tub",
        category: "Tub Cakes",
        price: 280,
        weight: "400g tub",
        image: "assets/tub/Rashmalai tub cake.jpeg",
        isEggless: true,
        description: "Rasmalai-inspired creamy tub cake with saffron and pistachio.",
        featured: false,
        available: true
    },

    {
        id: "brownie-sundae",
        name: "Brownie Sundae",
        category: "Tub Cakes",
        price: 280,
        weight: "400g tub",
        image: "assets/tub/Brownie Sundae Tub.jpeg",
        isEggless: true,
        description: "Rich fudgy brownie layered with creamy chocolate, smooth frosting, and indulgent sundae toppings.",
        featured: false,
        available: true
    },
    {
    id: "brownie-bites",
    name: "Brownie Bites",
    category: "Tub Cakes",
    price: 220,
    weight: "6 pieces",
    image: "assets/tub/browine bites.jpeg",
    isEggless: true,
    description: "Bite-sized fudgy brownies with a rich chocolate flavor and a soft, gooey center.",
    featured: false,
    available: true
},
    // ── Beverages ─────────────────────────────────────────────────────────────
    {
        id: "drink-blackberry-mojito",
        name: "Blackberry Mojito",
        category: "Beverages",
        price: 150,
        weight: "300ml",
        image: "assets/drink/Blackberry Mojito Recipe.jpeg",
        isEggless: true,
        description: "Refreshing blackberry mojito with mint and lime.",
        featured: false,
        available: true
    },
    {
        id: "drink-boba-mango",
        name: "Boba Mango",
        category: "Beverages",
        price: 150,
        weight: "350ml",
        image: "assets/drink/boba mango.jpeg",
        isEggless: true,
        description: "Sweet mango boba drink with chewy tapioca pearls.",
        featured: false,
        available: true
    },
    {
        id: "drink-boba-tea",
        name: "Boba Tea",
        category: "Beverages",
        price: 150,
        weight: "350ml",
        image: "assets/drink/boba tea.jpeg",
        isEggless: true,
        description: "Classic boba milk tea with tapioca pearls.",
        featured: false,
        available: true
    },
    {
        id: "drink-blue-boba",
        name: "Blue Boba",
        category: "Beverages",
        price: 150,
        weight: "350ml",
        image: "assets/drink/bobo blue.jpeg",
        isEggless: true,
        description: "Blue butterfly pea boba — stunning colour, refreshing taste.",
        featured: false,
        available: true
    },
    {
        id: "drink-classic-mojito",
        name: "Classic Mojito",
        category: "Beverages",
        price: 150,
        weight: "300ml",
        image: "assets/drink/classic mojito.jpeg",
        isEggless: true,
        description: "Fresh mint and lime classic mojito — crisp and refreshing.",
        featured: false,
        available: true
    },
    {
        id: "drink-cold-coffee",
        name: "Thick Cold Coffee",
        category: "Beverages",
        price: 150,
        weight: "300ml",
        image: "assets/drink/coffe.jpeg",
        isEggless: true,
        description: "Rich, thick cold coffee blended to perfection.",
        featured: false,
        available: true
    },
    {
        id: "drink-cookie-butter",
        name: "Cookie Butter Shake",
        category: "Beverages",
        price: 150,
        weight: "350ml",
        image: "assets/drink/Cookie Butter.jpeg",
        isEggless: true,
        description: "Creamy cookie butter blended into a dreamy milkshake.",
        featured: false,
        available: true
    },
    {
        id: "drink-coffee-milkshake",
        name: "Coffee Milkshake",
        category: "Beverages",
        price: 150,
        weight: "350ml",
        image: "assets/drink/Easy Coffee Milkshake.jpeg",
        isEggless: true,
        description: "Smooth and creamy coffee milkshake, lightly sweetened.",
        featured: false,
        available: true
    },
    {
        id: "drink-hot-choco",
        name: "Hot Chocolate",
        category: "Beverages",
        price: 150,
        weight: "250ml",
        image: "assets/drink/hot choco.jpeg",
        isEggless: true,
        description: "Warm, velvety hot chocolate — a comforting classic.",
        featured: false,
        available: true
    },
    {
        id: "drink-matcha",
        name: "Matcha Latte",
        category: "Beverages",
        price: 150,
        weight: "300ml",
        image: "assets/drink/Matcha.jpeg",
        isEggless: true,
        description: "Earthy, creamy matcha latte made with premium green tea.",
        featured: false,
        available: true
    },
    {
        id: "drink-oreo-shake",
        name: "Oreo Shake",
        category: "Beverages",
        price: 150,
        weight: "350ml",
        image: "assets/drink/orea.jpeg",
        isEggless: true,
        description: "Thick and indulgent Oreo milkshake with crushed cookies.",
        featured: false,
        available: true
    },

    // ── Waffles ───────────────────────────────────────────────────────────────
    {
        id: "waffle-biscoff",
        name: "Biscoff Waffle",
        category: "Waffles",
        price: 400,
        weight: "1 waffle (~200g)",
        image: "assets/waffpas/Biscoff Waffle.jpeg",
        isEggless: false,
        description: "Crispy Belgian waffle drizzled with warm Biscoff spread.",
        featured: false,
        available: true
    },
    {
        id: "waffle-kitkat",
        name: "Kitkat Waffle",
        category: "Waffles",
        price: 450,
        weight: "1 waffle (~200g)",
        image: "assets/waffpas/Eggless Crunchy Kitkat Waffle.jpeg",
        isEggless: true,
        description: "Eggless waffle loaded with Kitkat crunch and chocolate drizzle.",
        featured: false,
        available: true
    },
    {
        id: "waffle-triple-choco",
        name: "Triple Chocolate Waffle",
        category: "Waffles",
        price: 450,
        weight: "1 waffle (~200g)",
        image: "assets/waffpas/triple waf.jpeg",
        isEggless: true,
        description: "Three layers of chocolate indulgence on a crispy waffle.",
        featured: false,
        available: true
    },

    // ── Cake Toppers ──────────────────────────────────────────────────────────
    {
        id: "topper-candle",
        name: "Candle Set",
        category: "Cake Toppers",
        price: 400,
        weight: "Set of 6",
        image: "assets/event/candel curve.jpeg",
        isEggless: true,
        description: "Elegant curved candle set for birthday and celebration cakes.",
        featured: false,
        available: true
    },
    {
        id: "topper-happy-birthday",
        name: "Happy Birthday Topper",
        category: "Cake Toppers",
        price: 450,
        weight: "1 topper",
        image: "assets/event/Happy Birthday.jpeg",
        isEggless: true,
        description: "Decorative Happy Birthday cake topper for celebrations.",
        featured: false,
        available: true
    },

    // ── Event Theme Cakes ─────────────────────────────────────────────────────
    {
        id: "event-doll-cake",
        name: "Doll Cake",
        category: "Event Theme Cakes",
        price: 400,
        weight: "500g",
        image: "assets/event/doll.jpeg",
        isEggless: false,
        description: "Beautiful princess doll cake — a dream for little girls.",
        featured: false,
        available: true
    },
    {
        id: "event-panda-cake",
        name: "Panda Cake",
        category: "Event Theme Cakes",
        price: 450,
        weight: "500g",
        image: "assets/event/Panda.jpeg",
        isEggless: true,
        description: "Adorable panda-themed cake, perfect for kids' birthdays.",
        featured: false,
        available: true
    },
    {
        id: "event-spiderman-cake",
        name: "Spider-Man Cake",
        category: "Event Theme Cakes",
        price: 450,
        weight: "500g",
        image: "assets/event/spiderman-cake-design.jpeg",
        isEggless: true,
        description: "Web-slinging Spider-Man themed cake for superhero fans.",
        featured: false,
        available: true
    },
    {
        id: "event-two-tier-cake",
        name: "Two-Tier Cake",
        category: "Event Theme Cakes",
        price: 450,
        weight: "1.5 kg",
        image: "assets/event/two tire.jpeg",
        isEggless: true,
        description: "Elegant two-tier celebration cake for special occasions.",
        featured: false,
        available: true
    },

    // ── Chocolate Bites ───────────────────────────────────────────────────────
    {
        id: "chocobite-classic",
        name: "Chocolate Bites",
        category: "Chocolate Bites",
        price: 400,
        weight: "200g box",
        image: "assets/jarcake/Chocolate Bites.jpeg",
        isEggless: false,
        description: "Handcrafted chocolate bites made with premium cocoa.",
        featured: false,
        available: true
    },
    {
        id: "chocobite-date",
        name: "Chocolate Date Bites",
        category: "Chocolate Bites",
        price: 450,
        weight: "200g box",
        image: "assets/jarcake/Chocolate Date Bites.jpeg",
        isEggless: true,
        description: "Natural date and chocolate bites — sweet, healthy, and delicious.",
        featured: false,
        available: true
    },
    {
        id: "chocobite-pistachio",
        name: "Pistachio Chocolate Bites",
        category: "Chocolate Bites",
        price: 450,
        weight: "200g box",
        image: "assets/jarcake/Pistachio Chocolate Bites.jpeg",
        isEggless: true,
        description: "Chocolate bites studded with crunchy roasted pistachios.",
        featured: false,
        available: true
    },
    {
        id: "chocobite-assorted",
        name: "Assorted Chocolate Bites",
        category: "Chocolate Bites",
        price: 450,
        weight: "200g box",
        image: "assets/jarcake/Assorted Chocolate Bites.jpeg",
        isEggless: true,
        description: "A delightful assortment of chocolate bites in multiple flavours.",
        featured: false,
        available: true
    },

];


// =============================================================================
//  categoryCards — Drives the "Our Products" category grid on the homepage
// =============================================================================
const categoryCards = [
    { id: "cat-jar-cakes", name: "Jar Cakes", category: "Jar Cakes", image: "assets/images/jar.jpeg", description: "Layered desserts served in beautiful jars with rich flavours.", badge: "Best Seller" },
    { id: "cat-brownies", name: "Brownies", category: "Brownies", image: "assets/images/brownie.jpeg", description: "Rich, fudgy chocolate brownies with delicious toppings.", badge: "Best Seller" },
    { id: "cat-event-cakes", name: "Event Theme Cakes", category: "Event Theme Cakes", image: "assets/images/event.jpeg", description: "Customized cakes for birthdays, weddings, and corporate events.", badge: null },
    { id: "cat-choco-bites", name: "Chocolate Bites", category: "Chocolate Bites", image: "assets/jarcake/Chocolate Bites.jpeg", description: "Freshly handcrafted chocolate bites in different flavours.", badge: null },
    { id: "cat-beverages", name: "Beverages", category: "Beverages", image: "assets/images/drink.jpeg", description: "Cold coffee, milkshakes, mojitos, hot chocolate and more.", badge: null },
    { id: "cat-pastries", name: "Pastries", category: "Pastries", image: "assets/images/pastery.jpeg", description: "Soft cream pastries available in various flavours.", badge: null },
    { id: "cat-tub-cakes", name: "Tub Cakes", category: "Tub Cakes", image: "assets/images/tub.jpeg", description: "Creamy layered desserts served in tubs.", badge: "New" },
    { id: "cat-cake-toppers", name: "Cake Toppers", category: "Cake Toppers", image: "assets/images/topper.jpeg", description: "Customized acrylic, paper and fondant cake toppers.", badge: null },
    { id: "cat-waffles", name: "Waffles", category: "Waffles", image: "assets/images/waffel.jpeg", description: "Belgian waffles served with chocolate, fruits and ice cream.", badge: null },
    { id: "cat-birthday-cakes", name: "Cakes", category: "Cakes", image: "assets/images/about_cake_1785422562479.jpg", description: "Fun and delicious cakes to celebrate your loved ones.", badge: null },
];


// =============================================================================
//  featuredProducts — Drives the "Signature Bakes" section on the homepage
// =============================================================================
const featuredProducts = [
    {
        id: "feat-red-velvet",
        name: "Rose Milk Cake",
        image: "assets/waffpas/Rose Milk Cake.jpeg",
        description: "Moist milk-soaked sponge with a delicate rose flavor and creamy frosting.",
        priceLabel: "₹90 onwards",
        productId: null
    },
    {
        id: "feat-choco-truffle",
        name: "Chocolate Truffle Mini Cake",
        image: "assets/images/chocolate_truffle_1785422575374.jpg",
        description: "Rich, moist chocolate cake with indulgent truffle topping.",
        priceLabel: "₹300 onwards",
        productId: null
    },
    {
        id: "feat-kunafa-brownie",
        name: "Kunafa Pistachio Brownie",
        image: "assets/images/brownie_tub_1785422590777.jpg",
        description: "Fudgy brownie layered with rich cream, pistachios & kunafa.",
        priceLabel: "₹200 onwards",
        productId: "brownie-fudgy"
    },

];
