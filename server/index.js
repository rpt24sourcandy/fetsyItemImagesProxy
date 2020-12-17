const port = 3000;
const express = require('express');
const app = express();
const axios = require('axios');

app.use('/items/:itemId', express.static(__dirname + '/../react-client/dist'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ITEM IMAGES SERVICE

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

app.get('/item/images', async (req, res)=>{
  let image_urls = await axios.get('http://localhost:3006/item/images');
  res.send(image_urls.data.rows);
})

app.get('/item/images/distinct', async (req, res) => {
  let image_urls = await axios.get('http://localhost:3006/item/images/distinct');
  res.send(image_urls.data.rows);
});

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

//SELLER SERVICE

app.get('/seller', async (req, res)=>{
  let bundle = await axios.get('http://localhost:3005/items/1/bundle.js');
  res.send(bundle.data);
});

app.get('/items/:itemId/seller', async (req, res) => {
  let item_id = req.params.itemId;
  let seller_data = await axios.get(`http://localhost:3005/items/${item_id}/seller`);
  res.send(seller_data.data)
})







app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})