const https = require('https');
https.get('https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-facial-treatment-at-a-beauty-salon-39931-large.mp4', (res) => {
  console.log(res.statusCode);
});
