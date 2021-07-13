# aligntech-assignment-gallery
Full stack home assignment - Align Technology - "Dream Gallery"

⦁	Get 100 elements from public API https://picsum.photos/v2/list?page=1&limit=100

⦁	Each element schema contains: 
{
"id": "<element identifier>",
"author": "<author name>",
"width": <image width>,
"height": <image height>,
"url": "<source page image url>",
"download_url": "<image url>"
}

⦁	Image src can be constructed:	https://picsum.photos/id/{id}/{width}/{height}
  
⦁	Provide API to serve random elements from previously cached data
  
⦁	Each call to our API will provide 5 random elements
  
⦁	The images provided by the custom API (not https://picsum.photos/) will be shown in the following way
  
⦁	Store elements in server's cache
  
# Scripts to run after cloning
  
 ### `npm run install-all` - to install all dependecies (server and front sides)
 ### `npm run dev` - to run server and client cuncurrently



