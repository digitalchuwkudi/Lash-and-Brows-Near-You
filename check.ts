async function check() {
  const res = await fetch('https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-facial-treatment-at-a-beauty-salon-39931-large.mp4');
  console.log(res.status);
}
check();
