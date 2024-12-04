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

		base_url : {//Where are your images at?
			image : global.mediaURL
		}
	});
});







