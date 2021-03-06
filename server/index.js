const port = 3000;
const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const compression = require ('compression')

app.use('/items/:itemId', express.static(__dirname + '/../react/dist'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());

// ITEM IMAGES SERVICE ENDPOINTS http://13.52.213.118:3006/

app.get('/images', async (req, res)=>{
  //let bundle = await axios.get('http://localhost:3006/items/1/bundle.js');
  let bundle = await axios.get('http://13.52.213.118:3006/items/1/bundle.js')
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
  res.send(bundle.data);
});

app.get('/item/:itemId/images', async (req, res)=>{
  let item_id = req.params.itemId;
 //let image_urls = await axios.get(`http://localhost:3006/item/${item_id}/images`);
  let image_urls = await axios.get(`http://13.52.213.118:3006/item/${item_id}/images`)
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
  res.send(image_urls.data);
});

app.get('/item/images', async (req, res)=>{
 //let image_urls = await axios.get('http://localhost:3006/item/images');
  let image_urls = await axios.get('http://13.52.213.118:3006/item/images')
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
  res.send(image_urls.data);
})

//SELLER SERVICE ENDPOINTS

app.get('/seller', async (req, res)=>{
  //let bundle = await axios.get('http://localhost:3005/items/1/bundle.js');
  let bundle = await axios.get('http://3.21.248.149:3005/items/1/bundle.js')
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
  res.send(bundle.data);
});

app.get('/items/:item_id/seller', async (req, res) => {
  let item_id = req.params.item_id;
  //let seller_data = await axios.get(`http://localhost:3005/items/${item_id}/seller`);
  let seller_data = await axios.get(`http://3.21.248.149:3005/items/${item_id}/seller`)
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
  res.send(seller_data.data);
})



// //SHOPPING SERVICE ENDPOINTS

app.get('/shopping', async (req, res)=>{
  //let bundle = await axios.get('http://localhost:3004/items/1/bundle.js')
  let bundle = await axios.get('http://18.222.223.190:3004/items/1/bundle.js')
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
  res.send(bundle.data);
});

app.get('/shopping/items', async (req, res) => {
  //let shopping_data = await axios.get('http://localhost:3004/shopping/items');
  let shopping_data = await axios.get('http://18.222.223.190:3004/shopping/items')
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
  res.send(shopping_data.data);
});

app.get('/shopping/items/:item_id', async (req, res) => {
  let item_id = req.params.item_id;
  //let shopping_data = await axios.get(`http://localhost:3004/shopping/items/${item_id}`);
  let shopping_data = await axios.get(`http://18.222.223.190:3004/shopping/items/${item_id}`)
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
  res.send(shopping_data.data);
});

//REVIEWS SERVICE ENDPOUNT

app.get('/reviews', async (req, res)=>{
  //let bundle = await axios.get('http://localhost:3002/items/1/bundle.js');
  let bundle = await axios.get('http://54.151.123.24:3002/items/1/bundle.js')
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
  res.send(bundle.data);
});

app.get('/api/items/:itemId/reviews', async (req, res) => {
  let item_id = req.params.itemId;
  //let reviews_data = await axios.get(`http://localhost:3002/api/items/${item_id}/reviews`);
  let reviews_data = await axios.get(`http://54.151.123.24:3002/api/items/${item_id}/reviews`)
  .catch((err)=>{
    console.log('ERROR: ', err);
  });
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