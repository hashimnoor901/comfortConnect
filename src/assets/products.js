// Import images
import p_img1 from './images/product_1.png';
import p_img2 from './images/product_2.png';
import p_img3 from './images/product_3.png';
import p_img4 from './images/product_4.png';
import p_img5 from './images/product_5.png';
import p_img6 from './images/product_6.png';
import p_img7 from './images/product_7.png';
import p_img8 from './images/product_8.png';
import p_img9 from './images/product_9.png';
import p_img10 from './images/product_10.png';
import p_img11 from './images/product_11.png';
import p_img12 from './images/product_12.png';
import p_img13 from './images/product_13.png';
import p_img14 from './images/product_14.png';
import p_img15 from './images/product_15.png';
import p_img16 from './images/product_16.png';
import p_img17 from './images/product_17.png';
import p_img18 from './images/product_18.png';
import p_img19 from './images/product_19.png';
import p_img20 from './images/product_20.png';
import p_img21 from './images/product_21.png';
import p_img22 from './images/product_22.png';
import p_img23 from './images/product_23.png';
import p_img24 from './images/product_24.png';
import p_img25 from './images/product_25.png';
import p_img26 from './images/product_26.png';
import p_img27 from './images/product_27.png';
import p_img28 from './images/product_28.png';
import p_img29 from './images/product_29.png';
import p_img30 from './images/product_30.png';
import p_img31 from './images/product_31.png';
import p_img32 from './images/product_32.png';
import p_img33 from './images/product_33.png';
import p_img34 from './images/product_34.png';
import p_img35 from './images/product_35.png';
import p_img36 from './images/menbot1.jpg';
import p_img37 from './images/menbot2.jpg';
import p_img38 from './images/menbot3.jpg';
import p_img39 from './images/menbot4.jpg';
import p_img40 from './images/menbot5.jpg';

// Define bestseller array with 35 elements
export const products = [
  {
    id: 'aaaa1',
    name: 'Women Round Neck Cotton',
    description: 'Lightweight usually knitted, pullover shirt, close fitting',
    price: 100,
    image: [p_img1,p_img2],
    category: 'women',
    subcategory: 'winterwear',
    sized: ['S', 'M', 'L'],
    date: 17162024,
    bestseller: false
  },
  {
    id: 'aaaa2',
    name: 'Men Casual Cotton Shirt',
    description: 'Casual shirt with comfortable cotton material',
    price: 120,
    image: [p_img2,p_img11],
    category: 'women',
    subcategory: 'topwear',
    sized: ['S', 'M', 'L', 'XL'],
    date: 17152024,
    bestseller: false
  },
  {
    id: 'aaaa3',
    name: 'Unisex Hoodie',
    description: 'Soft, comfortable hoodie with adjustable drawstrings',
    price: 150,
    image: [p_img3],
    category: 'women',
    subcategory: 'topwear',
    sized: ['M', 'L', 'XL'],
    date: 17142024,
    bestseller: true
  },
  {
    id: 'aaaa4',
    name: 'Women Summer Dress',
    description: 'Elegant summer dress for casual outings',
    price: 200,
    image: [p_img4],
    category: 'women',
    subcategory: 'topwear',
    sized: ['S', 'M', 'L'],
    date: 17132024,
    bestseller: true
  },
  {
    id: 'aaaa5',
    name: 'Formal Cotton Shirt',
    description: 'Classic formal shirt with a crisp cotton finish',
    price: 130,
    image: [p_img5],
    category: 'women',
    subcategory: 'topwear',
    sized: ['M', 'L', 'XL'],
    date: 17122024,
    bestseller: false
  },
  {
    id: 'aaaa6',
    name: 'Denim Jacket',
    description: 'Trendy denim jacket for a cool, casual look',
    price: 180,
    image: [p_img6],
    category: 'women',
    subcategory: 'topwear',
    sized: ['M', 'L'],
    date: 17112024,
    bestseller: false
  },
  {
    id: 'aaaa7',
    name: 'Women Casual T-Shirt',
    description: 'Soft, comfortable, and stylish casual t-shirt',
    price: 90,
    image: [p_img7],
    category: 'women',
    subcategory: 'topwear',
    sized: ['S', 'M', 'L'],
    date: 17102024,
    bestseller: false
  },
  {
    id: 'aaaa8',
    name: 'Men Polo Shirt',
    description: 'Classic polo shirt for a sporty look',
    price: 110,
    image: [p_img8],
    category: 'women',
    subcategory: 'topwear',
    sized: ['M', 'L', 'XL'],
    date: 17092024,
    bestseller: false
  },
  {
    id: 'aaaa9',
    name: 'Women Leather Jacket',
    description: 'Stylish leather jacket for a bold look',
    price: 220,
    image: [p_img9],
    category: 'topwear',
    subcategory: 'outer wear',
    sized: ['M', 'L'],
    date: 17082024,
    bestseller: false
  },
  {
    id: 'aaaa10',
    name: 'Men Cotton Shorts',
    description: 'Lightweight, comfortable cotton shorts',
    price: 70,
    image: [p_img10],
    category: 'topwear',
    subcategory: 'bottom wear',
    sized: ['M', 'L', 'XL'],
    date: 17072024,
    bestseller: false
  },
  {
    id: 'aaaa11',
    name: 'Women Knitted Sweater',
    description: 'Warm, cozy sweater for winter',
    price: 130,
    image: [p_img11],
    category: 'topwear',
    subcategory: 'topwear',
    sized: ['S', 'M', 'L'],
    date: 17062024,
    bestseller: false
  },
  {
    id: 'aaaa12',
    name: 'Men Cotton Pants',
    description: 'Stylish and comfortable cotton pants',
    price: 120,
    image: [p_img12],
    category: 'topwear',
    subcategory: 'bottom wear',
    sized: ['M', 'L', 'XL'],
    date: 17052024,
    bestseller: false
  },
  {
    id: 'aaaa13',
    name: 'Women Long Skirt',
    description: 'Elegant and flowy skirt, perfect for summer',
    price: 90,
    image: [p_img13],
    category: 'men',
    subcategory: 'topwear',
    sized: ['S', 'M', 'L'],
    date: 17042024,
    bestseller: true
  },
  {
    id: 'aaaa14',
    name: 'Men Leather Belt',
    description: 'Genuine leather belt with a sleek design',
    price: 50,
    image: [p_img14],
    category: 'men',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17032024,
    bestseller: true
  },
  {
    id: 'aaaa15',
    name: 'Unisex Sunglasses',
    description: 'Trendy sunglasses with UV protection',
    price: 85,
    image: [p_img15],
    category: 'men',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17022024,
    bestseller: true
  },
  {
    id: 'aaaa16',
    name: 'Women Handbag',
    description: 'Elegant handbag made with premium leather',
    price: 210,
    image: [p_img16],
    category: 'men',
    subcategory: 'accessories',
    sized: ['One Size'],
    date: 17012024,
    bestseller: true
  },
  {
    id: 'aaaa17',
    name: 'Men Sports Shoes',
    description: 'Comfortable and durable sports shoes',
    price: 140,
    image: [p_img17],
    category: 'men',
    subcategory: 'topwear',
    sized: ['42', '43', '44'],
    date: 17012023,
    bestseller: true
  },
  {
    id: 'aaaa18',
    name: 'Women High Heels',
    description: 'Stylish high heels for formal events',
    price: 190,
    image: [p_img18],
    category: 'men',
    subcategory: 'topwear',
    sized: ['36', '37', '38'],
    date: 17012022,
    bestseller: true
  },
  {
    id: 'aaaa19',
    name: 'Men Wool Scarf',
    description: 'Warm and stylish wool scarf',
    price: 70,
    image: [p_img19],
    category: 'men',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17022021,
    bestseller: true
  },
  {
    id: 'aaaa20',
    name: 'Women Silk Scarf',
    description: 'Elegant silk scarf with floral patterns',
    price: 75,
    image: [p_img20],
    category: 'men',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17032020,
    bestseller: true
  },
  {
    id: 'aaaa21',
    name: 'Men Formal Watch',
    description: 'Luxury watch with leather straps',
    price: 350,
    image: [p_img21],
    category: 'men',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17042019,
    bestseller: true
  },
  {
    id: 'aaaa22',
    name: 'Women Casual Watch',
    description: 'Elegant casual watch with stainless steel straps',
    price: 300,
    image: [p_img22],
    category: 'men',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17052018,
    bestseller: true
  },
  {
    id: 'aaaa23',
    name: 'Men Leather Wallet',
    description: 'Premium leather wallet with multiple compartments',
    price: 100,
    image: [p_img23],
    category: 'men',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17062017,
    bestseller: true
  },
  {
    id: 'aaaa24',
    name: 'Women Leather Wallet',
    description: 'Stylish wallet with sleek design and smooth leather finish',
    price: 110,
    image: [p_img24],
    category: 'men',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17072016,
    bestseller: true
  },
  {
    id: 'aaaa25',
    name: 'Men Cufflinks',
    description: 'Luxury cufflinks for a formal, sharp look',
    price: 90,
    image: [p_img25],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17082015,
    bestseller: true
  },
  {
    id: 'aaaa26',
    name: 'Women Hair Clip',
    description: 'Elegant hair clip with floral design',
    price: 30,
    image: [p_img26],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17092014,
    bestseller: true
  },
  {
    id: 'aaaa27',
    name: 'Unisex Keychain',
    description: 'Trendy keychain with a minimalist design',
    price: 20,
    image: [p_img27],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17102013,
    bestseller: true
  },
  {
    id: 'aaaa28',
    name: 'Men Gym Shorts',
    description: 'Breathable, comfortable gym shorts',
    price: 50,
    image: [p_img28],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['M', 'L', 'XL'],
    date: 17112012,
    bestseller: true
  },
  {
    id: 'aaaa29',
    name: 'Women Yoga Pants',
    description: 'Stretchy, comfortable yoga pants for workouts',
    price: 80,
    image: [p_img29],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['S', 'M', 'L'],
    date: 17122011,
    bestseller: true
  },
  {
    id: 'aaaa30',
    name: 'Men Running Shoes',
    description: 'Lightweight and durable running shoes for long-distance runs',
    price: 160,
    image: [p_img30],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['42', '43', '44'],
    date: 17132010,
    bestseller: true
  },
  {
    id: 'aaaa31',
    name: 'Women Running Shoes',
    description: 'Comfortable running shoes with arch support',
    price: 150,
    image: [p_img31],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['36', '37', '38'],
    date: 17142009,
    bestseller: true
  },
  {
    id: 'aaaa32',
    name: 'Unisex Backpack',
    description: 'Durable backpack with multiple compartments',
    price: 130,
    image: [p_img32],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17152008,
    bestseller: true
  },
  {
    id: 'aaaa33',
    name: 'Men Cargo Pants',
    description: 'Stylish cargo pants with multiple pockets',
    price: 140,
    image: [p_img33],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['M', 'L', 'XL'],
    date: 17162007,
    bestseller: true
  },
  {
    id: 'aaaa34',
    name: 'Women Leather Boots',
    description: 'Chic leather boots with a durable sole',
    price: 250,
    image: [p_img34],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['36', '37', '38'],
    date: 17172006,
    bestseller: true
  },
  {
    id: 'aaaa35',
    name: 'Unisex Socks',
    description: 'Comfortable, moisture-wicking socks for everyday wear',
    price: 20,
    image: [p_img35],
    category: 'kids',
    subcategory: 'topwear',
    sized: ['One Size'],
    date: 17182005,
    bestseller: true
  },
  {
    id: 'aaaa36',
    name: 'Unisex Socks',
    description: 'Comfortable, moisture-wicking socks for everyday wear',
    price: 20,
    image: [p_img36],
    category: 'men',
    subcategory: 'bottomwear',
    sized: ['One Size'],
    date: 17182005,
    bestseller: true
  },
  {
    id: 'aaaa36',
    name: 'Unisex Socks',
    description: 'Comfortable, moisture-wicking socks for everyday wear',
    price: 20,
    image: [p_img37],
    category: 'men',
    subcategory: 'bottomwear',
    sized: ['One Size'],
    date: 17182005,
    bestseller: true
  },
  {
    id: 'aaaa36',
    name: 'Unisex Socks',
    description: 'Comfortable, moisture-wicking socks for everyday wear',
    price: 20,
    image: [p_img38],
    category: 'men',
    subcategory: 'bottomwear',
    sized: ['One Size'],
    date: 17182005,
    bestseller: true
  },
  {
    id: 'aaaa36',
    name: 'Unisex Socks',
    description: 'Comfortable, moisture-wicking socks for everyday wear',
    price: 20,
    image: [p_img39],
    category: 'men',
    subcategory: 'bottomwear',
    sized: ['One Size'],
    date: 17182005,
    bestseller: true
  },
  {
    id: 'aaaa36',
    name: 'Unisex Socks',
    description: 'Comfortable, moisture-wicking socks for everyday wear',
    price: 20,
    image: [p_img40],
    category: 'men',
    subcategory: 'bottomwear',
    sized: ['One Size'],
    date: 17182005,
    bestseller: true
  },
];
