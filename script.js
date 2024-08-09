const products = [
    {
        id: '1',
        name: 'Fuchsia Fantasy',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczPIvIubzNAZXXZLYU7QuEbz_NDrglUOZWNpzc_en-hWPFETLW9d2-bB8sNvzXQmr8sDLz2OkGLqY70UYd9Ew_GPhw4vcgMBT_0Z_Ni7xxOdDPyuJ7Y=w2400',
        description: 'A vibrant bracelet with a burst of color. Perfect for adding a pop of brightness to your outfit.',
        colors: ['Hot Pink','Purpls'],
        price: '9 DHS'
    },
    {
        id: '2',
        name: 'Ocean Whisper',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczMfhVUjf5lehWuwl7ca7rBG_FpxfAzoj3vw_rJxTADgpsTdmDPaZIM8zCzn92vZ6POeGg0hUKoOP5ZLKbiA26Pimn4nXtetUAdMaAZCKE4a6i8fRZw=w2400',
        description: 'A serene bracelet inspired by the ocean. Its calming hues and delicate design are perfect for a relaxed, coastal vibe.',
        colors: ['Sky Blue', 'Sky Green', ' Light Yellow'],
        price: '9 DHS'
    },
    {
        id: '3',
        name: 'Tiggy Eye',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczM2Ho_e6Knf2ldlyMUHwG4yj-sxy_czL59hAQHGLVywSXOVMWuiau7S7d_yp-IWqOFTrG3hDFZjjx2h8NG814Y6jtxVF-3D5mmAcb4Iblpzuk1ZQ_Y=w2400',
        description: 'An elegant bracelet featuring stunning tiger’s eye stones. Known for its grounding properties, it’s a must-have for any collection.',
        colors: ['Lava Stone', 'Tiger Eye Stone'],
        price: '9.5 DHS'
    },
    {
        id: '4',
        name: 'Rose',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczOcBl6oT75U2pZGwnrRr6rsKdyO2OeUoWZdPjiaqn_Gt7t-KUnkA2BhcYG_pSQU--l-l1YO_3_uiwS3OgnOmbqwzOlaptnKTHBLo9VJAQYSTHgkYV4=w2400',
        description: 'A romantic bracelet with rose-colored beads. Ideal for adding a touch of elegance and charm to any occasion.',
        colors: ['Shades of Pink!'],
        price: '8.5 DHS'
    },
    {
        id: '5',
        name: 'Blues',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczPJTUtjuSfQMgEXSbKwqpQNxgYfZvRwlv8zWj5pddQIsIuAh7yTZgMv_WDMlLr_rFEOYPGYtS4cGBiv641lu15bhSmir5HbYvH9p4pqe2TLA8Ze528=w2400',
        description: 'A cool and refreshing bracelet with varying shades of blue. Perfect for a stylish and sophisticated look.',
        colors: ['Sky Blue','Peach','Light Blue','Baby Pink'],
        price: '8 DHS'
    },
    {
        id: '6',
        name: 'Angel Myst',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczOLZH_Ojtl5y8lOtFW5oI65RkHGEFyNa_fK_gEpF-6yKgW2p5QZVp0C7nNWhf_0xZxpW7co1m8pqFMKpUOSHUULOe_ZrPHZgobMvXyWsfyy0x1i0jc=w2400',
        description: 'An ethereal bracelet with a mystical charm. Its delicate design and angelic hues make it a dream accessory.',
        colors: ['Peach', 'Orange','Pink','Purple','Green'],
        price: '8.5 DHS'
    },
    {
        id: '7',
        name: 'Royal Tide',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczMqDPeXuRv0L_PJZQ2q7klZyAoog9gTCU6OhxCxYXx-bpHKDjlb4LlG9mSn_y6fo_leGy_qj-536IkZoY6aeytHg61zvD-ST347AS1ZpNYtjgHPjsk=w2400',
        description: 'A bracelet adorned with Blue beads. Known for its calm look and sophisticated appeal.',
        colors: [' Dark Blue','Pearl White','Teal'],
        price: '8 DHS'
    },
    {
        id: '8',
        name: 'Sunset Dragonfly',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczONyKk8bo8Nn51IgXZecJvRVpdgWw1a8VT98pJhbsPhmM8DTM6MN8jpLA0UaPPj4O8Pq4qRImF60w4GdCf9ceu4c9P3ntBjB4c6ZC83S7vxwTIsh88=w2400',
        description: 'A warm bracelet inspired by the colors of the sunset and the vibe of dragonflies. Its vibrant shades bring warmth and energy to your look.',
        colors: ['Honey Yellow', 'Yellow Ochre'],
        price: '8.5 DHS'
    },
    {
        id: '9',
        name: 'Seafoam',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczMz76ld7pnKjEhXtRhnmav6KQImTCOE28Lkpb0X0WpmvNMNAC2i7ppiOCmC5w46wM2UoJ_BoO6hM3KTTz971JDrC5qCMXkBuWASD6QGeR1jpZD9tho=w2400',
        description: 'A classic bracelet featuring matte finished beads that radiate spring vibes. Ideal for adding a touch of timeless elegance to any outfit.',
        colors: ['Baby Pink', 'Hot Pink','Baby Purple','Cyan','Blue','Teal'],
        price: '8.5 DHS'
    },
    {
        id: '10',
        name: 'Spiderman x Hello Kitty',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczP-ycShmunJOiuwI-ezuoWxGHoyrFvk8orEJC6gBPWn3CZuuwdg8i5Og58Y54VpGwdhH5ijEjtMlN3UrH-sp6hX56Ur5Q-oxn1P86X4VZ9AWxK4pbM=w2400',
        description: 'Bold red and black beads with silver accents, embodying Spiderman’s heroic spirit. Soft pink and white beads with silver accents, reflecting Hello Kitty’s sweet charm. A perfect blend of adventure and cuteness in one set.',
        colors: ['Red', 'Black', 'Pink', 'White'],
        price: '17 DHS'
    },
    {
        id: '11',
        name: 'Coquette',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczOgJjzN8luzqblz1IPjTGCfZ82CdWeNrUVLO2YRNmg1_8oWdHaCJ5de1kCiZee8SIxAwYR8yrWNNpc-VElSS1e42OZxTUYTqDLfk8K541lqUsfn48k=w2400',
        description: 'For the girlypop girlies!',
        colors: ['Pink'],
        price: '9 AED'
    },
    {
        id: '12',
        name: 'B and W',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczN9HJUMziIA1_wewSoxCf4d8Ds8GD_Aga4QJf9MozyCXC7uCCR-24eVJMo9a8V92ZdOHN_N9KfBU55NNn35-PfrJHoi0HMRKwooC6D3RV849UzrVpw=w2400',
        description: 'They say it’s the simplest combo for matching bracelets. Tune in and get yours now!',
        colors: ['Black', 'White'],
        price: '16 DHS for both'
    },
    {
        id: '13',
        name: 'Naturite',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczOdUSoLeousczta5PFkfNTGRFbH6eyTlMSXZFVa64gghAYuQ9y9HAMCLpN3Gfg0wd7vIiZ9nD2ncOCToYlaEJcEQfPZTzRK7-0Eh67wbjzn-Jv_Or8=w2400',
        description: 'The dark green evokes a sense of nature, growth, and tranquility. Paired with black, it can feel grounded and stable, connecting the wearer to the earth.',
        colors: ['Green', 'Black'],
        price: '8.5 DHS'
    },
    {
        id: '14',
        name: 'spOOOKy set',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczNG24xGYKB5ejTM5mhCYxG9nV3THSeYpUqfa5L8l8vEQ_SmoQYhL-b5myxX16Ww7ghrTZtaCW6waYK1v2Id2bcoKTfj21635WZxxne2jV1uupcAlBE=w2400',
        description: 'A versatile matching bracelet combo that definitely would suit over your halloween costume.',
        colors: ['Lava Stone', 'Marble'],
        price: '16 DHS for both'
    },
      {
        id: '15',
        name: 'Butterfly Magic',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczP0LYeZQhpzgzVlW-pO87sY_Vd-PTK4DlYyKgkvEq9kee6XzH6RM4J42Yv3ioaAqUFnYR9He0gPn7XItC42MrB_0Hj5CPK8-CfyjsMShCBnh5HDxhs=w2400',
        description: 'These matching ones surely would make you believe in magic! ',
        colors: ['Red Cracked Stone', 'Black','Black Cracked Stone'],
        price: '28 DHS for both'
    },
  {
        id: '16',
        name: 'Fear',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczOdJ_Dkr4dT9noQe4EOn0-ZMNPUPiykwhIimDGjT5uEhlseSMMR6MHXN4rsDbj2CakgoWJNur19dJoDKt--r3fB2wqLAArU6Ag4_lEeBMWuzEInJuo=w2400',
        description: 'Fear rightly said, “Ah, if anyone needs me, I will be whimpering softly to myself.” -Inside Out.',
        colors: ['Light Purple', 'Dark Purple','Black'],
        price: '9 DHS'
    },
  {
        id: '17',
        name: 'Joy',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczPtObdMvmFjpkSfdfx_6_osmO0zlVGBKulegKc1gDdRUc83z0_WBQJm_osxpPRw95hkY_Wsw5S6iemq8SeqcxFrZoQzHv_-isKI0mV_R15FBXxpfDg=w2400',
        description: '“Delusional? OF COURSE I AM DELUSIONAL!! Do you know how hard it is to stay positive all the time when all you folks do is complain, complain, complain?! Jiminy, mother-loving, toaster strudel! Do you think I have all the answers? OF COURSE I DONT! WE cannot even find the back of our own mind. Anxiety is right. Riley does not need us as much as she needs them. And that hurts! It REALLY hurts.” -Joy',
        colors: ['Yellow', 'Dark Blue','Yellow Ochre'],
        price: '9 DHS'
    },
  {
        id: '18',
        name: 'Disgust',
        img: 'https://lh3.googleusercontent.com/pw/AP1GczPNO_b7Ik0n2djiIFdUzoRSxQMQqaM0XWwGWEw4f1LStXZkJ_6_3V4mo6Z91OdpGO6W3oLB4qtjrNqqm13ae2IiQQVqZb6XK8i91HCiEEpQ5YHPsJU=w2400',
        description: '“That is not brightly colored or shaped like a dinosaur. Hold on, guys. IT IS BROCCOLI!” ―Disgust',
        colors: ['Yellow', 'Dark Blue','Yellow Ochre'],
        price: '9 DHS'
    },
  
  
];

function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Colors:</strong> ${product.colors.join(', ')}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onclick="showProductDetails('${product.id}')">View More</button>
        `;
        productGrid.appendChild(productItem);
    });
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const modal = document.getElementById('productModal');
        const productDetails = document.getElementById('productDetails');
        productDetails.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.img}" alt="${product.name}" style="width:100%; max-width:400px;">
            <p>${product.description}</p>
            <p><strong>Colors:</strong> ${product.colors.join(', ')}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;
        modal.style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    displayFilteredProducts(filteredProducts);
}

function displayFilteredProducts(filteredProducts) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Colors:</strong> ${product.colors.join(', ')}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <button onclick="showProductDetails('${product.id}')">View More</button>
        `;
        productGrid.appendChild(productItem);
    });
}

// Initialize the product display
displayProducts();

function goBack() {
    window.history.back();
}

// Ensure this script runs after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the "Go Back" button
    const goBackButton = document.getElementById("goBackButton");
    if (goBackButton) {
        goBackButton.addEventListener("click", goBack);
    }
});