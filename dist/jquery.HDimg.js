/*!
 *
 *  jQueryHDimg - [v1.1.3]
 *  a small plugin to serve double size image for Retina and other HD displays
 *  webPage: http://factory.brainleaf.eu/jqueryHDimg
 *  githubPage: https://github.com/Gix075/jqueryHDimg
 *
 *  (c)2014 by BRAINLEAF Communication
 *  Made by Gildo Giuliani
 *  Released under MIT License
 *  Date: 07/03/2014
 *
 *  Please, report any bugs at: https://github.com/Gix075/jqueryHDimg/issues
 *

*/
;(function ( $, window, document, undefined ) {

		var pluginName = "HDimg",
				defaults = {
                densityLevel: 1.25,
                imgReplacement: true,
                imgAssignment: false,    
                imgSuffix: "@2x",
                addClass: false,
                autoResize: false,
                devForce: false    
		};
    
		function Plugin ( element, options ) {
				this.element = element;

				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
				init: function () {
                    
				        switch (this.settings.densityLevel) {
                            case 1.25 :
                                var medQuery = '(-webkit-min-device-pixel-ratio: 1.25),\
                                                (min-resolution: 1.25dppx)';
                                break;
                                
                            case 1.3 :
                                var medQuery = '(-webkit-min-device-pixel-ratio: 1.3),\
                                                (min-resolution: 1.3dppx)';
                                break;
                                
                            case 1.5 :
                                var medQuery = '(-webkit-min-device-pixel-ratio: 1.5),\
                                                (min-resolution: 1.5dppx)';
                                break;
                                
                            case 2 :
                                var medQuery = '(-webkit-min-device-pixel-ratio: 2),\
                                                (min-resolution: 2dppx)';
                                break;  
                        }
                    
				        var highDensity = false;
                        if (window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia(medQuery).matches)) {
                            highDensity = true;
                        }
                    
                        if (this.settings.devForce == true){
                            highDensity = true;
                        }  
                    
                        this.imgSubst(this.element, this.settings, highDensity);
				
                },
				imgSubst: function (element, settings, highDensity) {
						
                    var replacement = settings.imgReplacement;
                    var assignment = settings.imgAssignment;
                    var density = settings.densityLevel;
                    var suffix = settings.imgSuffix;
                    var addClass = settings.addClass;
                    var autoResize = settings.autoResize;
                    
                    if (assignment == true) {
                        replacement = false;
                    }
                    
                    if (replacement == true) {
                        var imgUrl = $(element).attr('src');
                        
                        if (!imgUrl) {
                            console.log('HDimg -> ERROR: you have an error in plugin use! If you set the option "replacement" to "true" your image url must be declared by "src" attribute'); 
                            return;
                        }
                    }else{
                        var imgUrl = $(element).data('src');
                        
                        if (!imgUrl) {
                            console.log('HDimg -> ERROR: you have an error in plugin use! If you set the option "replacement" to "false" your image url must be declared by the "data-src" attribute'); 
                            return;
                        }   
                    }
                    
                    var extension = imgUrl.substr( (imgUrl.lastIndexOf('.')) );
                    var imgNewUrl = imgUrl.replace(extension, suffix+extension);
                    
                    if (replacement == true && highDensity == false) {
                        return;
                    }
                    else if (replacement == true && highDensity == true) {
                       
                        if (autoResize == true) {
                            var elmsArr = [];
                            elmsArr.push(element);
                            $.each( elmsArr, function() {
                                $(element).width($(element).width());
                                $(element).height($(element).height());
                            });
                        }
                        
                        $(element).attr('src',imgNewUrl);
                        
                        /*
                        if (autoResize == true) {
                            $(element).width($(element).width());
                            $(element).height($(element).height());
                        }*/
                        
                        if (addClass !== false && addClass !== true) {
                            $(element).addClass(addClass);
                        }
                        if (addClass == true){
                            $(element).addClass('hd-image');
                        }
                    }
                    else if (replacement == false && highDensity == true) {
                        $(element).attr('src',imgNewUrl);
                        if (addClass !== false && addClass !== true) {
                            $(element).addClass(addClass);
                        }
                        if (addClass == true){
                            $(element).addClass('hd-image');
                        }
                    }  
                    else if (replacement == false && highDensity == false) {
                         $(element).attr('src',imgUrl);
                    }
				}
		};
    
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});
		};

})( jQuery, window, document );
