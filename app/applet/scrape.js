import https from 'https';

https.get('https://www.pexels.com/search/videos/eyelash/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/https:\/\/player\.vimeo\.com\/external\/[^"]+\.mp4[^"]+/);
    if (match) {
      console.log('Found:', match[0]);
    } else {
      console.log('Not found');
    }
  });
});
