exports.handler = async function () {
  const images = [
    // "https://peppy-melba-47ed98.netlify.app/images/blog-excited.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/blob-sign-no.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/blob-sign-yes.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/blob-crazy-happy.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/blob-happy-peak.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/ablobcaramelldansen.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/ablobenjoy.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/ablobenjoysnow.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/aniblobpeak.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/blobcat_code.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/blobmusic2.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/BlobZeroGravity.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/comfyblobdrive.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/Party_blod.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/VoteBlob.gif",
    // "https://peppy-melba-47ed98.netlify.app/images/happycat.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/react-spin.gif",
    "https://verdant-jalebi-0fc0fb.netlify.app/images/ParrotDance.gif",
  ];

  const random = images[Math.floor(Math.random() * images.length)];

  return {
    statusCode: 302,
    headers: {
      Location: random,
    },
  };
};