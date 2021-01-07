const port = 3000;
const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');

app.use('/items/:itemId', express.static(__dirname + '/../react/dist'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ITEM IMAGES SERVICE ENDPOINTS

app.get('/images', async (req, res)=>{
  let bundle = await axios.get('http://localhost:3006/items/1/bundle.js');
  res.send(bundle.data);
});

app.get('/item/:itemId/images', async (req, res)=>{
  let item_id = req.params.itemId;
  let image_urls = await axios.get(`http://localhost:3006/item/${item_id}/images`);
  res.send(image_urls.data);
});

app.get('/item/images', async (req, res)=>{
  let image_urls = await axios.get('http://localhost:3006/item/images');
  res.send(image_urls.data.rows);
})

app.get('/item/images/distinct', async (req, res) => {
  let image_urls = await axios.get('http://localhost:3006/item/images/distinct');
  res.send(image_urls.data);
});

//SELLER SERVICE ENDPOINTS

app.get('/seller', async (req, res)=>{
  let bundle = await axios.get('http://localhost:3005/items/1/bundle.js');
  res.send(bundle.data);
});

app.get('/items/:itemId/seller', async (req, res) => {
  let item_id = req.params.itemId;
  let seller_data = await axios.get(`http://localhost:3005/items/${item_id}/seller`);
  res.send(seller_data.data)
})

//SHOPPING SERVICE ENDPOINTS

app.get('/shopping', async (req, res)=>{
  let bundle = await axios.get('http://localhost:3004/items/1/bundle.js');
  res.send(bundle.data);
});

app.get('/shopping/items', async (req, res) => {
  let shopping_data = await axios.get('http://localhost:3004/shopping/items');
  res.send(shopping_data.data);
});

app.get('/shopping/items/:itemId', async (req, res) => {
  let item_id = req.params.itemId;
  let shopping_data = await axios.get(`http://localhost:3004/shopping/items/${item_id}`);
  res.send(shopping_data.data);
});

//REVIEWS SERVICE ENDPOUNT

app.get('/reviews', async (req, res)=>{
  let bundle = await axios.get('http://localhost:3002/items/1/bundle.js');
  res.send(bundle.data);
});

app.get('/api/items/:itemId/reviews', async (req, res) => {
  let item_id = req.params.itemId;
  let reviews_data = await axios.get(`http://localhost:3002/api/items/${item_id}/reviews`);
  res.send(reviews_data.data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

//NOTES FOR REFERENCE: ORIGINAL IMAGE ENDPOINTS WITH PROMISES

// app.get('/images', (req, res)=>{
//   console.log('Gets to images endpoint');
//   axios.get('http://localhost:3006/items/1/bundle.js')
//   .then((data)=>{
//     res.send(data.data)
//   })
//   .catch((err)=>{
//     console.log('ERROR');
//     console.log(err);
//   })
//   console.log('Gets to images endpoint END');
// });

// app.get('/item/:itemId/images', (req, res)=>{
//   console.log('REQ ', req.params.itemId);
//   let item_id = req.params.itemId;
//   axios.get(`http://localhost:3006/item/${item_id}/images`)
//   .then((response)=>{
//     res.send(response.data);
//   })
//   .catch((err)=>{
//     console.log('ERROR', err);
//   });
// });