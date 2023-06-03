export const getStorage = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []

export const headerSlider = [
  {
    id: Date.now(),
    imgUrl:'https://c4.wallpaperflare.com/wallpaper/960/95/793/apple-iphone-gold-smartphone-wallpaper-preview.jpg',
  },
  {
    id: Date.now(),
    imgUrl:'https://applepro.news/wp-content/uploads/2023/03/kak-ispolzovat-48-megapikselnuyu-kameru-iphone-14-pro.jpg',
  },
  {
    id: Date.now(),
    imgUrl:'https://9to5mac.com/wp-content/uploads/sites/6/2020/05/MacBook-Pro-2020-Review-9to5mac.jpg?quality=82&strip=all&w=1600',
  },
  {
    id: Date.now(),
    imgUrl:'https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/pdp/tablets/plp/v7.jpg'
  },
  {
    id: Date.now(),
    imgUrl:'https://techengage.com/wp-content/uploads/2021/06/apple-airpods-pro.jpg'
  },
  {
    id: Date.now(),
    imgUrl:'https://cdn.lifehacker.ru/wp-content/uploads/2018/11/DSC_7362_1542051800.jpg'
  },
  {
    id: Date.now(),
    imgUrl:'https://cdn.thewirecutter.com/wp-content/media/2022/05/bluetoothheadphones-2048px-1151-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024'
  },
  {
    id: Date.now(),
    imgUrl:'https://www.notebookcheck-ru.com/fileadmin/_processed_/e/7/csm_Xiaomi_Redmi_Note_7_09_3_5708523081.jpg'
  },
  {
    id: Date.now(),
    imgUrl:"https://static.nv.ua/shared/system/Article/posters/002/027/874/original/463d7751c38fb8e964943f50f86864f3.jpeg"
  },
  {
    id: Date.now(),
    imgUrl:'https://www.usatoday.com/gcdn/-mm-/8124615ff3c5b03920ff1d4efbda3ef02e551856/c=0-0-1959-1102/local/-/media/2021/01/09/USATODAY/usatsports/MotleyFool-TMOT-886ef453-apple-iphone-12-pro.jpg?width=1600&height=800&fit=crop&format=pjpg&auto=webp'
  },

]

export const headerNav = [
  {id:1,title:'Home', path:'/'},
  {id:2,title:'Shop', path:'/shop'},
  {id:3,title:'Pages', path:'/pages'},
  {id:4,title:'Blog', path:'/blog'},
  {id:5,title: 'Admin Panel', path:'/adminpanel'}  
]
export const infoItems = [
  {
    id:1,
    title:'Free Shipping',
    text:'On all orders over $75.00',
    classNames:'fa-solid fa-truck-fast'
  },
  {
    id:2,
    title:'Free Returns',
    text:'Returns are free within 9 days',
    classNames:'fa-solid fa-box'
  },
  {
    id:3,
    title:'100% Payment Secure',
    text:'Your payment are safe with us.',
    classNames:'fa-solid fa-money-bill'    
  },
  {
    id:4,
    title:'Support 24/7',
    text:'Contact us 24 hours a day',
    classNames:'fa-solid fa-shield-halved'
  }
]

export const marketingItems = [
  {
    id:1,
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLklWmG0l2de8VHNjL0BAA85DGaayu-_WgvyKxPjPr94CeGNr4JOdFEmCd3PpbascfRAI&usqp=CAU',
    title:'Laptops',
    text:'the best laptop in the world'
  },
  {
    id:2,
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqszCUNg8GSuunTwlALjxCivXBdFtRajQELQ&usqp=CAU',
    title:'Smartphones',
    text:'quality smartphones'
  },
  {
    id:3,
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVftbJ_bJDdJ5M5kl_QSXfkknnkjLCEGsniw&usqp=CAU',
    title:'Headphones',
    text:'the most beautiful headphones'
  },
  {
    id:4,
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6hAqKktwvPQhQO1fWbjyWNx1adqvb_r5Lg&usqp=CAU',
    title:'Apple',
    text:'apple products from america'
  }



]

export const marketingItems2 = [
  {
    id:1,
    imgUrl:'https://images.unsplash.com/photo-1612903351382-051d6a8fc641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFja2Jvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    title:'Laptops',
    text:'popular mackbook\'\s brand'
  },
  {
    id:2,
    imgUrl:'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title:'Smartphones',
    text:'quality Headphones'
  },
  {
    id:3,
    imgUrl:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    title:'Iphone X',
    text:'the most beautiful phone'
  },
  

]

export const products = [

  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCOcpMNJGEcDu9pvCgnLHkE279sL41CFu8oA&usqp=CAU',
    type:'pc',
    name:'pc',
    title:'Gmaing pc',
    price:1300,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'1TB',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTZoCq5O_buNfamEBlpxo931HWDfmERwcBQ&usqp=CAU',
    type:'pc',
    name:'pc',
    title:'Gaming pc apple',
    price:1500,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'1TB',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2RNZqc_GApuAynM2ysSLmcgCgp4rF6AeDw&usqp=CAU',
    type:'keybord',
    name:'keybord',
    title:'Pc keybord',
    price:20,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnuBqGri4CVklW-EkDMUZ3hPFLHFF2ahqnw&usqp=CAU',
    type:'keybord',
    name:'keybord',
    title:'neon Keybord',
    price:70,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2JURv1hUgA-_Way2ca2HLjRio_K7lqSjVg&usqp=CAU',
    type:'headphones',
    name:'headphones',
    title:'apple hd pro',
    price:50,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuElsuKt92b29vIyxsu5AF72G7uCNoXLr7Q&usqp=CAU',
    type:'headphones',
    name:'headphones',
    title:'xiomi headphones',
    price:70,
    unique:'',
    isAdded:false,
    model:'',
    memory:'',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVsuNNWXuwvm3sPqQV0_YIW631flwfW9CoA&usqp=CAU',
    type:'headphones',
    name:'naushnik',
    title:'lighting apple pods',
    price:45,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAZLJawBhH3ggfFdijSwpSqNO9w2z0mgRYg&usqp=CAU',
    type:'headphones',
    name:'naushnik',
    title:'Xiomi Mi in-ear',
    price:30,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrAPdUEysJUlhKcq4UjpZk9tEXCbIWKlA68A&usqp=CAU',
    type:'headphones',
    name:'airpods',
    title:'airpods pro 7',
    price:30,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5F8NexORUsaf6FBQbWDgZOR4Lp0n7Y4HAPQ&usqp=CAU',
    type:'headphones',
    name:'airpods',
    title:'airpods pro 8',
    price:50,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtlJHZYc4XusOmQ6xY7p6jOu18DwF8pDm3Q&usqp=CAU',
    type:'phone',
    name:'huawei',
    title:'huawei p30',
    price:300,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'128GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwelGNv2peWhSNqa7Bvf3EEEeExYWljG0vrA&usqp=CAU',
    type:'phone',
    name:'huawei',
    title:'huawei p8',
    price:150,
    unique:'',
    isAdded:false,
    model:'',
    memory:'32GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEFmmQ9DN6rp7cjNe-hR53PEw2FtzCURPTg&usqp=CAU',
    type:'phone',
    name:'honor',
    title:'Honor X8a',
    price:170,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'64GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxM36LFjGuwgq2K5xL0dx3Ej_voq85YLffpw&usqp=CAU',
    type:'phone',
    name:'honor',
    title:'Honor X10',
    price:200,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'64GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTP375clw6UGjFt9RdfPU-axRcGBMGk-SfrA&usqp=CAU',
    type:'phone',
    name:'samsung',
    title:'Samsung Galaxy S22',
    price:400,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'512GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dtZbrTi3WLdD-7IBzr2HMgb-7ToJIOCB8A&usqp=CAU',
    type:'phone',
    name:'samsung',
    title:'Samsung Galaxy S21 ultra',
    price:400,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'512GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KCnqUeXiZwIzx8XWqG-6xA4VHUFU2e8lE29A2khblfiWrxFQdQWCJap85VZ64V_itZM&usqp=CAU',
    type:'phone',
    name:'redmi',
    title:'Remdi Note 11 Pro+',
    price:500,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'1TB',
  },
  {
    id:Date.now(),
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3oZt_0wRVjAZHYB05p8Lv452ObrT_FiG0A&usqp=CAU',
    type:'phone',
    name:'redmi',
    title:'Redmi Note 9',
    price:200,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'64GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    type:'phone',
    name:'iphone',
    title:'Iphone 14 Pro',
    price:1000,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'1TB',
  },
  {
    id:Date.now(),
    imgUrl:'https://plus.unsplash.com/premium_photo-1681333061107-1322a8d6b570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    type:'phone',
    name:'iphone',
    title:'Iphone X',
    price:300,
    unique:'',
    isAdded:false,
    model:'',
    memory:'64GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type:'laptop',
    name:'dell',
    title:'Dell Precision',
    price:700,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'512GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1554246247-6993b606e8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    type:'laptop',
    name:'dell',
    title:'Dell Latitude 5311',
    price:100,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'1TB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1658312226966-29bd4e77c62c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    type:'laptop',
    name:'hp',
    title:'Hp Pavilion',
    price:400,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'128GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    type:'laptop',
    name:'hp',
    title:'Hp EliteBook',
    price:600,
    unique:'',
    isAdded:false,
    model:'',
    memory:'512GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1630794180018-433d915c34ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXN1c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type:'laptop',
    name:'asus',
    title:'Asus Zenbook 14x',
    price:900,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'1TB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    type:'laptop',
    name:'asus',
    title:'Asus Vivobook s14 Flip',
    price:500,
    unique:'',
    isAdded:false,
    model:'',
    memory:'128GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.acer.com/is/image/acer/acer-aspire-5-a515-48m-with-fingerprint-with-backlit-steel-gray-01-2?$Series-Component-XL$',
    type:'laptop',
    name:'acer',
    title:'Aspire 3 Intel',
    price:700,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'128GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    type:'laptop',
    name:'acer',
    title:'Aspire 5 AMD',
    price:800,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'512GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1521383899078-1c7c03c76b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFja2Jvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    type:'laptop',
    name:'mackbook',
    title:'MacBook Pro 16',
    price:200,
    unique:'popular',
    isAdded:false,
    model:'',
    memory:'512GB',
  },
  {
    id:Date.now(),
    imgUrl:'https://images.unsplash.com/photo-1617471346061-5d329ab9c574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFja2Jvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    type:'laptop',
    name:'mackbook',
    title:'MacBook Pro 14',
    price:1200,
    unique:'new',
    isAdded:false,
    model:'',
    memory:'1TB',
  },

]

export const footerItems = [
'About us',
'payment',
'Contact us',
'Stores',
'New products',
'Best sales',
'Login',
'My account',
]