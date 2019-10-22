//add material js here
var imgArray= [];
var codeArray= [];
var fullnameArray= [];
var index;

/*Material JS File Link*/
var scriptList= 
[
"https://cdn.jsdelivr.net/gh/eqionux/eqionux.github.io/baseMaterial_16-10.js",
"https://upload.botaksign.com/Print%20By%20Phone/TestFiles/baseMaterial2_11-10.js",
"https://upload.botaksign.com/Print%20By%20Phone/TestFiles/baseMaterial3_11-10.js",
"https://cdn.jsdelivr.net/gh/eqionux/eqionux.github.io/baseMaterial_16-10.js",
"https://upload.botaksign.com/Print%20By%20Phone/TestFiles/baseMaterial3_11-10.js",
"https://upload.botaksign.com/Print%20By%20Phone/TestFiles/baseMaterial3_11-10.js",
"https://upload.botaksign.com/Print%20By%20Phone/TestFiles/baseMaterial3_11-10.js",
"https://upload.botaksign.com/Print%20By%20Phone/TestFiles/baseMaterial3_11-10.js",
"https://upload.botaksign.com/Print%20By%20Phone/TestFiles/baseMaterial3_11-10.js"
];

/*Product Description*/
var descriptionList= 
[
"No cut lines required. We will create the cut lines according to your artwork and border options.",
"Economical and affordable means of spreading your message to your target audience.",
"Versatile, can be used in conjunction with other marketing materials to further promote your brand/ message.",
"Print By Phone currently only accepts artwork with white background for custom cutting."
];

/*Order Thumbnail Image Link*/
var orderThumbnailList=
[
"https://www.printbyphone.com/files/subscribers/a4ceaf37-e981-4539-8737-dcf01e7d0955/sites/ebb0150c-c373-408a-a894-8e8f2e32d834/products/ad4342a1-8bc5-4026-9b64-863b4a5470f4/Board-Shapesv2(1)_xlarge.png?stamp=637008239229403780",
"https://www.printbyphone.com/files/subscribers/a4ceaf37-e981-4539-8737-dcf01e7d0955/sites/ebb0150c-c373-408a-a894-8e8f2e32d834/products/ad4342a1-8bc5-4026-9b64-863b4a5470f4/Cutting_Border_xlarge.png?stamp=637049033621447911"
];


$(document).ready(function(){
	
	
	$('.product-carousel').owlCarousel({
			loop:false,
			margin:0,
			nav:true,
			navText:['<i class="fas fa-chevron-left navBoxArrowLeft"></i>','<i class="fas fa-chevron-right navBoxArrowRight"></i>'], 
			dots: true,
			lazyLoad: true,
			onInitialized : checkForVideo,
			onTranslated : counter,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
	});
	
    /*Product General Writeup & default image*/
	
	index = 0;
	
	load_OrderThumbnails();
	load_Description();
	load_script();
	
	
	
});
	
	
	function load_OrderThumbnails() {
		for(var i=0; i<orderThumbnailList.length;i++) {
			var imageContainer="<img class='owl-lazy' data-src='" + orderThumbnailList[i] + "' class='img-responsive center-block'>";
			$('.product-carousel').trigger('add.owl.carousel', [imageContainer]).trigger('refresh.owl.carousel');
		}
	}
	
	function load_Description() {
		for(var i=0; i<descriptionList.length;i++) {
			$(".productDescList").prepend("<p>" + descriptionList[i] + "</p>");
		}
	};
	
	//setup a function that loads a single script
	function load_script() {
		
		
		var completeContainer="";
		var imageContainer="";
		
		//make sure the current index is still a part of the array
		if (index < scriptList.length) {

			//get the script at the current index
			$.getScript(scriptList[index], function () {
				
				var newNav = "<div class='navContainer";
				
				if(index == 0) {
					newNav += " activeMatNav'";
				}
				else {
					newNav +="'";
				}
				
				newNav += " id='" + materialCode + "'><img class='navImg' src='" + materialImg[0] + "'><p class='navText'>" + materialCode + "</p></div>";
				
				$(".matNav-carousel").append(newNav);
				
				
				var newMatSlide = "<div class='" + materialCode + " " + materialCode + "Carousel" + " owl-carousel matCarouselContainer zoomable "
				
				if(index == 0) {
					newMatSlide += "activeMatCarousel";
				}
				
				newMatSlide +=  "'>";
				
				for(var i=0;i<materialVid.length;i++) {
					newMatSlide += "<video class='video-js vjs-default-skin' data-setup='{" + '"aspectRatio":"1:1"}' + "' controls controlslist='nodownload' playsinline preload='none' width='100%' height='100%' poster='" + materialImg[0] + "' style='display: block;'><source src='" + materialVid[i] + "' type='video/mp4'/></video>";
				}
				
				for(var i=0;i<materialImg.length;i++) {
					newMatSlide += "<img class='owl-lazy' data-src='" + materialImg[i] + "' class='img-responsive center-block'>";
				}
				
				newMatSlide+= "</div>";
				
				$(".materialCarousel").prepend(newMatSlide);
				
				 $("."+materialCode+"Carousel").owlCarousel({
					loop:false,
					margin:0,
					lazyLoad:true,
					nav:true,
					video:true,
					navText:['<i class="fas fa-chevron-left navBoxArrowLeft"></i>','<i class="fas fa-chevron-right navBoxArrowRight"></i>'], 
					dots: true,
					onInitialized : checkForVideo,
					onTranslated : counter,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						1000:{
							items:1
						}
					}
				});
				
				completeContainer = "<div class='matDescContainer'>";
				
				completeContainer += "<div class='matContent animated fadeIn slow " + materialCode + "'> <div class='matDescInfoContainer'>";
				
				completeContainer += "<p class='nameHeader'>" + materialName + "</p><p class='nameSubheader'>" + materialCode + "</p><hr class='divider'>";
				
				for(var x=0; x<materialTextInfo.length;x++) {
					var newLine1 = "<ul class='matDescInfo matDesc" + x + "'>";
					var newLine2 = "";
					
					for(var y=0; y<materialTextInfo[x].length;y++) {
						newLine2 += "<li>" + materialTextInfo[x][y] + "</li>";
					};
					
					completeContainer += (newLine1 + newLine2 + "</ul>");
				};
				
				var cautionInfoLine = "<ul class='matDescInfo cautionDesc'>"
				for(var x =0; x<cautionText.length;x++) {
					var newLine = "<li>" + cautionText[x] + "</li>";
					cautionInfoLine += newLine; 
				}
				completeContainer += cautionInfoLine + "</ul>"
				
				var generalInfoLine = "<ul class='matDescInfo generalDesc'>"
				for(var x =0; x<generalText.length;x++) {
					var newLine = "<li>" + generalText[x] + "</li>";
					generalInfoLine += newLine; 
				}
				completeContainer += generalInfoLine + "</ul>"
				
				var matName = "</div><div class='matDescHeaderContainer'>";
				completeContainer += matName;
				
				if(generalText.length > 0) {
					completeContainer += "<div class='matDescHeader generalDesc activeDescHeader'><p style='margin:0px;'>Highlights</p></div>";
				}
				
				for(var x=0; x<materialText.length;x++) {
					var newLine = "<div class='matDescHeader matDesc" + x + "'><p style='margin:0px;'>" + materialText[x] + "</p></div>";
					completeContainer += newLine;
				};
				
				if(cautionText.length > 0) {
					completeContainer += "<div class='matDescHeader cautionDesc cautionHeaderDesc'><p style='margin:0px;'>Caution</p></div>";
				}
				
				
				completeContainer += "</div></div></div>";
				$(".descContainer").append(completeContainer);
				
		
				//add material js here

			
				
				codeArray.push(materialCode);
				imgArray.push(materialImg);
				fullnameArray.push(materialName);
				
				//once the script is loaded, increase the index and attempt to load the next script
				console.log('Loaded: ' + scriptList[index]);
				index++;
				load_script();
			});
		}
		
		if(index == scriptList.length) {
			var getActiveId = $(".activeMatNav").attr("id");
			var selectedContent = $(".descContainer").find("."+getActiveId).clone();
		
			selectedContent.css("display", "block");
			
			$(".materialDesc").html(selectedContent);
			
			$(".matNav-carousel").addClass("owl-carousel");
			
			$('.matNav-carousel').owlCarousel({
				loop:false,
				margin:20,
				nav:true,
				navText:['<i class="fas fa-chevron-left defaultArrowLeft"></i>','<i class="fas fa-chevron-right defaultArrowRight"></i>'], 
				dots: false,
				onTranslated : counter,
				onInitialized : initArrow,
				responsive:{
					0:{
						items:5
					},
					600:{
						items:5
					},
					1000:{
						items:7
					}
				}
	});
		}
		
		
		
	}
	