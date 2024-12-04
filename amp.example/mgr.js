define(['managerAPI',
		'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){


	//You can use the commented-out code to get parameters from the URL.
	//const queryString = window.location.search;
    //const urlParams = new URLSearchParams(queryString);
    //const pt = urlParams.get('pt');

	var API    = new Manager();
	init_data_pipe(API, 'notreal',  {file_type:'csv'});	

    API.setName('mgr');
    API.addSettings('skip',true);

    API.addGlobal({
        //YBYB: change when copying back to the correct folder
        mediaURL: './images/',
    });
    
    var global = API.getGlobal();
    
    ///////////////////
    ////Preload all the photos in all the tasks
    
    var url = global.mediaURL;
    
    //The instructions images
    var preload = [url+'amp2.jpg', url+'ampchair.jpg', url+'amplamp.jpg', url+'ampmask.jpg', url+'ampmaskr.jpg', url+'ampumbrella.jpg'];
    //Push to preload, images from pos1 to pos18 and from neg1 to neg18. (all with the extension jpg)
    for (var i = 1; i <= 18; i++)
    {
        preload.push(url+'pos'+i+'.jpg');
        preload.push(url+'neg'+i+'.jpg');
    }
    //The AMP target stimuli
    for (i = 1; i <= 60; i++)
    {
        preload.push(url + 'pic'+i+'.jpg');
    }

	API.addSettings('preloadImages', preload);


    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],

        intro: [{
            inherit: 'instructions',
            name: 'intro',
            templateUrl: 'intro.jst',
            title: 'Get ready',
            header: 'Welcome to the tutorial'
        }],       

        instamp: [{
            inherit: 'instructions',
            name: 'instamp',
            templateUrl: 'instamp.jst',
            title: 'Speeded judgment task',
            piTemplate: true,
            header: 'Speeded judgment task'
        }],
        amp: [{
            type:'time',
            name: 'amp',
            scriptUrl: 'amp.js'
        }],
        
        explainv: [{
            inherit: 'instructions',
            name: 'excplainv',
            templateUrl: 'explainv.jst',
            title: 'AMP explained',
            header: 'AMP explained'
        }],

        lastpage: [{
            type: 'message',
            name: 'lastpage',
            templateUrl: 'lastpage.jst',
            title: 'End',
            header: 'You have completed the study'
        }]        
    });

    API.addSequence([
        {inherit: 'intro'},

        {inherit:'instamp'}, 
        
        {inherit:'amp'},

        {inherit:'explainv'},
        
        {inherit: 'lastpage'}
    ]);

    return API.script;
});
