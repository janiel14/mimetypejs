# mimetypejs
List mimetypes for request extension or request mimetype with extension

# requires
- nodejs >= 8

# how to test
- node test.js

# how to use
```
const mimetype = require('./mimetype')();

const listMimetypes = ["video/mp4", "video/x-msvideo","image/jpeg"];

listMimetypes.forEach(item => {
    console.log(`Extension for ${item} : ${mimetype.findExtension(item)}`);
});

```
