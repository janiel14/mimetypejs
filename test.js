const mimetype = require('./mimetype')();

const listMimetypes = ["video/mp4", "video/x-msvideo","image/jpeg"];

listMimetypes.forEach(item => {
    console.log(`Extension for ${item} : ${mimetype.findExtension(item)}`);
});
