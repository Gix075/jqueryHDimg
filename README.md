jqueryHDimg
===========

jQuery plugin to serve double size images for hd displays


Simple Usage
-------------
In order to use this plugin, be sure that you have right images for common and high density display.
This plugin works with both image (original and double size) on the same directory. Remember that this plugin needs the suffix "@2x" for the double size images as shown below:

Original Image Name: **image.jpg** -- Double Size Image Name: **image@2x.jpg**

### Include jQuery and jqueryHDimg
Once you have ready all images, then include jQuery and jqueryHDimg plugin in your document

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="js/jquery.HDimg.min.js"></script>
```

### Javascript
To use jqueryHDimg for all images in your page, simply add this lines in your document as javascript code
```javascript
$(document).on('ready', function(){
  $('img').HDimg();
});
```

You can use this plugin also for all images inside an element
```javascript
$(document).on('ready', function(){
  $('#divID img').HDimg();
});
```
or for one single image with specific ID
```javascript
$(document).on('ready', function(){
  $('#imgID').HDimg();
});
```
or for all images with a specific class
```javascript
$(document).on('ready', function(){
  $('.imgClass').HDimg();
});
```

### CSS
To have right sizes after image replacement you need to specify width and height with some css rules for each image.
If you want, and use the default option **imgReplacement: true**, you can also use the plugin option **autoResize: true** (*See below options usage*) that resize larger image at the original sizes.

Options
-------
The following list shows the plugin options with the default values
* imgReplacement: true
* densityLevel: 1.25
* imgSuffix: "@2x"
* addClass: false
* autoResize: false

#### imgReplacement
*boolean* - accepdet values: **true/false** - default: **false**

