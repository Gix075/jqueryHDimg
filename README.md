jqueryHDimg (version: 1.1.1)
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

With **imgReplacement:true** the plugin works leaving the image unreplaced in case of common display and replacing it only if necessary.<br>
This technique, in case of high density display, force the dom to load before the original image and then the double size one.<br>
*Replacement allow you (if you want) to use the auto resizing of the images, without any css rule.*

With **imgReplacement:false** we provide the <strong>Assignment</strong> technique, that works charging only the image that is needed for the current scenario and not before the original image (with bandwidth consuming) and then replacing it, if is needed by the high resolution display.<br>
For this reason you must put the original img url on a *data attribute* and not inside *src attribute*.<br>
The plugin executes a media query and then assigns the right image to the *src* attribute.<br>
So, if you use this option with value false, remember that you must specify the image url as in the following example:
```html
<img src="" data-src="your/img/path/img-name.jpg" alt="image alt">
```

**WARNING**: if you choose the option *imgReplacement:false* instead the default *replace* technique, remember that this cause a W3C validation error for the empty "src" attribute.

#### densityLevel
*int* - accepdet values: **1.25 - 1.3 - 1.5 - 2** - default: **1.25**

This option allow you to specify a particular density to start the image substitution.<br>
The default value is *1.25* but you can specify alternative values such as *1.3* - *1.5* and *2*

#### imgSuffix
*string* - accepdet values: **any string** - default: **"@2x"**

The default suffix for the double size image is **@2x** but you can customize this parameter with the option **imgSuffix**<br>
You can use the suffix you want.

#### addClass
*string or boolean* - accepdet values: **true/false or any string** - default: **false**

By the option **addClass** it's possible to add a particular class to the double size img<br>
The option accept boolean value (true and false) or a string used as class name. If you use true value instead a class name, will be used the default class **hd-image**

#### autoResize
*boolean* - accepdet values: **true/false** - default: **false**

By the option  **autoResize** it's possible to resize the image without any css rule.<br> 
This option is available only if *imgReplacement* is turned on *true* value.<br>
            

Demo
----
See more usage example and documentation at <http://factory.brainleaf.eu/jqueryHDimg/>
