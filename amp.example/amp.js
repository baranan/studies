define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/amp4.js'], function(APIConstructor, ampExtension){
//define(['pipAPI', 'https://app-prod-04.implicit.harvard.edu/openserver/users/yoav/ampge3-133/amp4.js'], function(APIConstructor, ampExtension){
//define(['pipAPI', '/implicit/user/yba/heavydisability2c//amp3.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	var global = API.getGlobal();
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'positive',  //Will be used in the user feedback 
				nameForLogging : 'positive', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'pos1.jpg'}, 
					{image : 'pos2.jpg'}, 
					{image : 'pos3.jpg'}, 
					{image : 'pos4.jpg'}, 
					{image : 'pos5.jpg'}, 
					{image : 'pos6.jpg'}, 
					{image : 'pos7.jpg'}, 
					{image : 'pos8.jpg'}, 
					{image : 'pos9.jpg'}, 
					{image : 'pos10.jpg'}, 
					{image : 'pos11.jpg'}, 
					{image : 'pos12.jpg'}, 
					{image : 'pos13.jpg'}, 
					{image : 'pos14.jpg'}, 
					{image : 'pos15.jpg'}, 
					{image : 'pos16.jpg'}
				]

			}, 
			{
				nameForFeedback : 'negative',  //Will be used in the user feedback 
				nameForLogging : 'negative', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'neg1.jpg'}, 
					{image : 'neg2.jpg'}, 
					{image : 'neg3.jpg'}, 
					{image : 'neg4.jpg'}, 
					{image : 'neg5.jpg'}, 
					{image : 'neg6.jpg'}, 
					{image : 'neg7.jpg'}, 
					{image : 'neg8.jpg'}, 
					{image : 'neg9.jpg'}, 
					{image : 'neg10.jpg'}, 
					{image : 'neg11.jpg'}, 
					{image : 'neg12.jpg'}, 
					{image : 'neg13.jpg'}, 
					{image : 'neg14.jpg'}, 
					{image : 'neg15.jpg'}, 
					{image : 'neg16.jpg'}
				]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		trialsInBlock : [16, 16, 16], //Number of trials in each block 

		targetCats :  [
			{
				nameForLogging : 'chinese',  //Will be used in the logging
				//An array of all media objects for this category. The default is pic1-pic200.jpg
				mediaArray : [
					{image : 'pic1.jpg'}, {image : 'pic2.jpg'}, {image : 'pic3.jpg'}, {image : 'pic4.jpg'}, {image : 'pic5.jpg'}, {image : 'pic6.jpg'}, {image : 'pic7.jpg'}, {image : 'pic8.jpg'}, {image : 'pic9.jpg'}, 
					{image : 'pic10.jpg'}, {image : 'pic11.jpg'}, {image : 'pic12.jpg'}, {image : 'pic13.jpg'}, {image : 'pic14.jpg'}, {image : 'pic15.jpg'}, {image : 'pic16.jpg'}, {image : 'pic17.jpg'}, {image : 'pic18.jpg'}, {image : 'pic19.jpg'}, 
					{image : 'pic20.jpg'}, {image : 'pic21.jpg'}, {image : 'pic22.jpg'}, {image : 'pic23.jpg'}, {image : 'pic24.jpg'}, {image : 'pic25.jpg'}, {image : 'pic26.jpg'}, {image : 'pic27.jpg'}, {image : 'pic28.jpg'}, {image : 'pic29.jpg'}, 
					{image : 'pic30.jpg'}, {image : 'pic31.jpg'}, {image : 'pic32.jpg'}, {image : 'pic33.jpg'}, {image : 'pic34.jpg'}, {image : 'pic35.jpg'}, {image : 'pic36.jpg'}, {image : 'pic37.jpg'}, {image : 'pic38.jpg'}, {image : 'pic39.jpg'}, 
					{image : 'pic40.jpg'}, {image : 'pic41.jpg'}, {image : 'pic42.jpg'}, {image : 'pic43.jpg'}, {image : 'pic44.jpg'}, {image : 'pic45.jpg'}, {image : 'pic46.jpg'}, {image : 'pic47.jpg'}, {image : 'pic48.jpg'}, {image : 'pic49.jpg'}, 
					{image : 'pic50.jpg'}, {image : 'pic51.jpg'}, {image : 'pic52.jpg'}, {image : 'pic53.jpg'}, {image : 'pic54.jpg'}, {image : 'pic55.jpg'}, {image : 'pic56.jpg'}, {image : 'pic57.jpg'}, {image : 'pic58.jpg'}, {image : 'pic59.jpg'}, 
					{image : 'pic60.jpg'}
				]
			}
		],

		base_url : {//Where are your images at?
			image : global.mediaURL
		}
	});
});







