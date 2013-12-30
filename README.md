jqueryHDimg
===========

jQuery plugin to serve double size images for hd displays


Simple Usage
-------------
In order to use this plugin, be sure that you have right images for common and high density display.
This plugin works with both image (original and double size) on the same directory. Remember that this plugin needs the suffix "@2x" for the double size images as shown below:

Original Image Name: **image.jpg** -- Double Size Image Name: **image@2x.jpg**

First, include jQuery and jqueryHDimg plugin in your document
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="js/jquery.HDimg.min.js"></script>
```

To use jqueryHDimg for all images in your page, simply add this lines in your document as javascript code

```javascript
$(document).on('ready', function(){
  $('img').HDimg();
});
```

	
