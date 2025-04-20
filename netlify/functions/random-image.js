exports.handler = async function () {
  const images = [
    "https://peppy-melba-47ed98.netlify.app/images/blog-excited.gif",
    "https://peppy-melba-47ed98.netlify.app/images/blob-sign-no.gif",
    "https://peppy-melba-47ed98.netlify.app/images/blob-sign-yes.gif",
    "https://peppy-melba-47ed98.netlify.app/images/blob-snowball.gif",
    "https://peppy-melba-47ed98.netlify.app/images/blob-crazy-happy.gif",
    "https://peppy-melba-47ed98.netlify.app/images/blob-happy-peak.gif",
  ];

  const random = images[Math.floor(Math.random() * images.length)];

  return {
    statusCode: 302,
    headers: {
      Location: random,
    },
  };
};