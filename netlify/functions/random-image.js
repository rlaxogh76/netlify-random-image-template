exports.handler = async function () {
  const images = [
    "https://random-img-picker.netlify.app/images/blog-excited.gif",
    "https://random-img-picker.netlify.app/images/blob-sign-no.gif",
    "https://random-img-picker.netlify.app/images/blob-sign-yes.gif",
    "https://random-img-picker.netlify.app/images/blob-snowball.gif",
    "https://random-img-picker.netlify.app/images/blob-crazy-happy.gif",
    "https://random-img-picker.netlify.app/images/blob-happy-peak.gif",
  ];

  const random = images[Math.floor(Math.random() * images.length)];

  return {
    statusCode: 302,
    headers: {
      Location: random,
    },
  };
};