// import './Meat.css'
// import {react,useState} from 'react';
// import {Link} from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Avatar } from '@mui/material';
// import { red } from '@mui/material/colors';
// import HomeIcon from'@mui/icons-material/Home';
// import  CategoryIcon  from '@mui/icons-material/Category';
// import {ShoppingCart} from '@mui/icons-material';
// // import {ReviewsIcon} from '@mui/icons-material';
// import FeedbackIcon from '@mui/icons-material/Feedback';
// import CallIcon from '@mui/icons-material/Call';
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
// // import IconButton from '@mui/icons-material/Icon';
// // import ProductIcon from '@mui/icons-material/Product';

// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Avatar from '@mui/material/Avatar';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
// import SearchIcon from '@mui/icons-material/Search';
// import InputBase from '@mui/material/InputBase';

// export default function ButtonAppBar() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };


//     const [searchText, setSearchText] = useState('');

//     const handleSearchChange = (event) => {
//       setSearchText(event.target.value);
//     };
  
//     const handleSearchSubmit = (event) => {
//       event.preventDefault();
//       console.log('Search:', searchText);
//       // Perform search logic here
//     };




      
           
//   return (
//       // <Avatar sx={{ width: 32, height: 32 ,bgcolor : "black"  }}>B</Avatar>
//     <Box sx={{ flexGrow: 1 }}>
     
//       <AppBar position="fixed" sx={{height:'41px',bgcolor:'rgb(237, 100, 237);'}}>
//          <Toolbar>
        

//         <div className='avtr'>
//         <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//          {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography> */}
//         {/* <Typography sx={{ : 100 }}>Profile</Typography>   */}
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? 'account-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//           >
//             <Avatar sx={{ width: 32, height: 32,bgcolor:'orange',margin:'0px 0px 20px'}}>D</Avatar>
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//       </Menu>
//         </div>



//         <ul>
//         <li><Link to='/Homepage'>Home</Link></li>
//   <li class='/active'><Link to='/Category'>Category</Link></li>
//   <li><Link to='/Product'>Product</Link></li>
//   <li><a href="#contact">Cart</a></li>
//   <li><a href="#contact">Review</a></li>
  
// </ul>

// <div className="search-container">
//             <form onSubmit={handleSearchSubmit}>
//               <InputBase
//                 placeholder="Search..."
//                 className="search-input"
//                 value={searchText}
//                 onChange={handleSearchChange}
//               />
//               <IconButton type="submit" className="search-icon">
//                 <SearchIcon />
//               </IconButton>
//             </form>
//           </div>
// </Toolbar>
//       </AppBar>
//       <br></br><br></br>

//       <div className="meatot">
//       <h1 className='egmefi'>Egg,Meat&Fish</h1>
//       <div className='egg5'><img src="https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" className='egg5img'></img>
//                <p className="eggg">Egg</p>
//                <p className="egg5price">RS.5 per piece</p>
//                <div className="Addegg">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>

//             <div className='chi'><img src="https://www.mashed.com/img/gallery/the-grocery-store-chicken-buying-tip-you-should-know/l-intro-1686778014.jpg" className='chiimg'></img>
//                <p className="chicken">Chicken</p>
//                <p className="chiprice">RS.500 per kg</p>
//                <div className="Addchi">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>


//             <div className='mut'><img src="https://m.media-amazon.com/images/I/61dwIKGXfIL._AC_UF1000,1000_QL80_.jpg" className='mutimg'></img>
//                <p className="mutton">Mutton</p>
//                <p className="mutprice">RS.700 per kg</p>
//                <div className="Addmut">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>



//             <div className='por'><img src="https://www.tastingtable.com/img/gallery/every-cut-of-pork-ranked-worst-to-best/intro-1647527731.jpg" className='porimg'></img>
//                <p className="pork">Pork</p>
//                <p className="porkprice">RS.400 per kg</p>
//                <div className="Addpor">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>


//             <div className='prawn'><img src="https://m.media-amazon.com/images/I/512sTyhw1ML._AC_UF1000,1000_QL80_.jpg" className='prawnimg'></img>
//                <p className="pra">Prawn</p>
//                <p className="praprice">RS.1000 per kg</p>
//                <div className="Addpra">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>


//             <div className='duck'><img src="https://umi.kitchen/wp-content/uploads/2022/01/Where-To-Buy-Duck.jpg" className='duckimg'></img>
//                <p className="duc">Duck</p>
//                <p className="duckprice">RS.400 per kg</p>
//                <div className="Addduck">
//                 <button class="cart">Add To Cart</button>
//                </div>
//             </div>






           
//       </div>

//       </Box>
//   );
//   }



import React, { useState } from 'react';
import './Food.css';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import MenuIcon from '@mui/icons-material/Menu';
import 'react-slideshow-image/dist/styles.css';
import { Container, Typography, Grid, Card, CardMedia, CardContent,Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const Meat = ({ addToCart }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };


const [anchorEl, setAnchorEl] = useState(null);
const [searchTerm, setSearchTerm] = useState('');
const [cartItems, setCartItems,] = useState([]);

const [productQuantities, setProductQuantities] = useState({}); // State to hold the quantities of each product
const handleQuantityChange = (event, productId) => {
  const newQuantities = { ...productQuantities, [productId]: parseInt(event.target.value) };
  setProductQuantities(newQuantities);
};
  const products = [
    {
      id: 1,
      name: 'Wheat',
      image: 'https://dookan.com/cdn/shop/products/18jS3d68CWfbjra-d41L9bM3L6qt_wmji.png?v=1655906026',
      price: 200,
    },
    {
      id: 2,
      name: 'Oats',
      image: 'https://bagrrys.com/cdn/shop/products/WHITE-OATS_large.jpg?v=1634708821',
      price: 100,
    },
    {
      id: 3,
      name: 'Barley',
      image: 'https://m.media-amazon.com/images/I/81M012KCTyL._AC_UF1000,1000_QL80_.jpg',
      price: 120,
    },
    {
      id: 4,
      name: 'Corn',
      image: 'https://shop.annam-gourmet.com/pub/media/catalog/product/cache/1fe3c1e9e13fd64b7e8f99f9c9bdb2b0/F/1/F164367_4057.jpg',
      price: 70,
    },
    {
      id: 5,
      name: 'Millet',
      image: 'https://m.media-amazon.com/images/I/81lYUYWaXGL._AC_UF1000,1000_QL80_.jpg',
      price: 90,
    },
    {
      id: 6,
      name: 'Farro',
      image: 'https://m.media-amazon.com/images/I/71yNIhmCHIL.jpg',
      price: 80,
    },
    {
      id: 7,
      name: 'Quinoa',
      image: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1399079_1_425x425.jpg',
      price: 70,
    },
    {
      id: 8,
      name: 'Bulgar',
      image: 'https://m.media-amazon.com/images/I/71cGJxv5xxL._AC_UF1000,1000_QL80_.jpg',
      price: 130,
    },
    {
      id: 9,
      name: 'Einkorn',
      image: 'https://m.media-amazon.com/images/I/813AvOTt9VL.jpg',
      price: 90,
    },
    {
      id: 10,
      name: 'Farro',
      image: 'https://m.media-amazon.com/images/I/71yNIhmCHIL._AC_UF1000,1000_QL80_.jpg',
      price: 110,
    },

    {
        id: 11,
        name: 'Teff',
        image: 'https://www.bioliving.com.au/assets/full/04899.jpg?20210119140017',
        price: 80,
      },

      {
        id: 12,
        name: 'Wild Rice',
        image: 'https://www.kroger.com/product/images/large/front/0007341650950',
        price: 70,
      },
  ];

  const handleAddToCart = (product) => {
    const quantity = productQuantities[product.id] || 1; // Use the selected quantity or default to 1 if not set
    const item = { ...product, quantity };
    addToCart(item);
  };
  
  
  
  
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

const filteredProducts = products.filter((product) =>
product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  

  return (
    <div>
      <div>
    <nav className='fooNavbarItems'>
      <h1 className='foonavbar-logo'>KK</h1>


      <div className='foomenu-icons' onClick={handleClick}>
        <MenuIcon />
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
     
      <ul className='foonav-menu'>
     {/* <Link to='./Homepage1'> */}
        <li className='#'>
          <a href='/' className='fooHome'>
            <HomeIcon></HomeIcon>Home
          </a>
        </li>
        {/* </Link> */}
        
        {/* <Link to='./Category'> */}
        <li className='fooCategory'>
       
            <CategoryIcon className='cat'></CategoryIcon>Category
        </li>
        {/* </Link> */}
       
        <li className='fooProduct'>
            <ProductionQuantityLimitsIcon></ProductionQuantityLimitsIcon>Product
        </li> 
        {/* <Link to='./CartPage'> */}
        <li className='fooCart'>
            <ShoppingCartIcon></ShoppingCartIcon>Cart
        </li>
        {/* </Link> */}
        <li className='#'>
          <a href='/' className='fooFeedback'>
            <QuestionAnswerIcon></QuestionAnswerIcon>Feedback
          </a>
        </li>

        <button className='foohbtn'>SignUp</button>
      </ul>
    </nav>
    </div>

    <br></br><br></br>
       <div className='fooprobox'>
       
        <Grid  container spacing={2} align="center" >
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={3} md={3} key={product.id}>
            <Card>
              <CardMedia style={{border:"4px solid white",width:"185px"}}component="img" height="250" src={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h9" component="div">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  type="number"
                  label="Quantity"
                  variant="outlined"
                  value={productQuantities[product.id] || 1} 
                  onChange={(event) => handleQuantityChange(event, product.id)}
                  inputProps={{ min: 1 }}
                  sx={{ width: '80px', mr: 2 }}
                />
              <Button sx={{color:'red'}}onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>


      </div>         
</div>
  );
};

export default Meat;