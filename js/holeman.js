//fill
var background = new Path.Rectangle({
    point: [0, 0],
    size: [view.viewSize.width, view.viewSize.height],
    fillColor: '#c3d4e5',
    });

var stage = new Shape.Ellipse({
    point: [view.center.x-250, 650],
    size: [500, 200]});

stage.fillColor = '#000000';
stage.visible = true;


//path
var path1 = new Path({
    segments: [[130, 200], [180, 250]],
    strokeColor: '#a8c0d8',
    strokeWidth: 10,
    strokeCap: 'round'
});
path1.position = [140, 230]
path1.applyMatrix = false;

var path2 = path1.copyTo(project);
path2.position = [450, 430]

var path3 = path1.copyTo(project);
path3.position = [140, 630]

var path4 = path1.copyTo(project);
path4.position = [view.viewSize.width-140, 230]

var path5 = path1.copyTo(project);
path5.position = [view.viewSize.width-450, 430]

var path6 = path1.copyTo(project);
path6.position = [view.viewSize.width-140, 630]

var path_group = new Group (
    path1, path2, path3, path4, path5, path6);

var fill = new Path({
    segments: [[300,200], [308,180], [315,150], [325,110], [335,90],
    [350,83], [365,90], [375,110], [385,150], [392,180],
    [400,200], [410,207], [420,210], [480,220], [520,230],
    [531,240], [531,243], [527,248], [519,252], [480,257],
    [450,260], [445,270], [445,430], [442,490], [437,530],
    [430,540], [420,543], [410,540], [403,530], [398,490],
    [395,450], [390,437], [350,430], [310,437], [305,450],
    [302,490], [297,530], [290,540], [280,543], [270,540],
    [263,530], [258,490], [255,430], [255,270], [250,260],
    [220,257], [180,252], [172,248], [169,243], [169,240],
    [180,230], [220,220], [280,210], [290,207], [300,200]],
    closed: false,
    fillColor: '#ffffff',
    strokeColor: '#000000',
    strokeWidth: 1,
    strokeCap: 'round'
});

fill.smooth({
    type: 'catmull-rom',
    factor: 0.4
});

    fill.visible = true;


// //decor
// var decor_1 = new Path({
//     segments: [[200,100], [250,120]],
//     strokeColor: '#ffffff',
//     strokeWidth: 6,
//     strokeCap: 'round'
// });
//
// var decor_2 = new Path({
//     segments: [[300,30], [310,60]],
//     strokeColor: '#ffffff',
//     strokeWidth: 6,
//     strokeCap: 'round'
// });
//
// var decor_3 = new Path({
//     segments: [[450,40], [420,70]],
//     strokeColor: '#ffffff',
//     strokeWidth: 6,
//     strokeCap: 'round'
// });
//
// var decor_4 = new Path({
//     segments: [[500,120], [430,130]],
//     strokeColor: '#ffffff',
//     strokeWidth: 6,
//     strokeCap: 'round'
// });
//
// var decor = new Group ([
//     decor_1, decor_2, decor_3, decor_4
// ]);

//head
var head = new Path({
    segments: [[300,200], [308,180], [315,150], [325,110], [335,90], [350,83], [365,90], [375,110], [385,150], [392,180], [400,200]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

head.smooth({
    type: 'catmull-rom',
    factor: 0.4
});

var l_eye = new Path({
    segments: [[340,150], [339,163]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

var r_eye = new Path({
    segments: [[360,150], [361,163]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

var mouth = new Path({
    segments: [[340,180], [360,183]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

var face = new Group([
    head, l_eye, r_eye, mouth
]);


//arms
var l_arm = new Path({
    segments: [[300,200], [290,207], [280,210], [220,220], [220,220],
    [180,230], [169,240], [169,243],
    [172,248], [180,252], [220,257],
    [220,257],[250,260]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

l_arm.smooth({
    type: 'catmull-rom',
    factor: 0.4
});


var r_arm = new Path({
    segments: [[400,200], [410,207], [420,210], [480,220], [480,220],
    [520,230], [531,240], [531,243],
    [527,248], [519,252], [480,257],
    [480,257], [450,260]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

r_arm.smooth({
    type: 'catmull-rom',
    factor: 0.4
});


//body
var l_body = new Path({
    segments: [[250,260], [255,270], [255,430]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

l_body.smooth({
    type: 'catmull-rom',
    factor: 0.4
});

var r_body = new Path({
    segments: [[450,260], [445,270], [445,430]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

r_body.smooth({
    type: 'catmull-rom',
    factor: 0.4
});

var hole = new Shape.Ellipse({
  point: [300, 260],
    size: [100, 130],
    fillColor: '#ffffff',
    strokeColor: '#000000',
    strokeWidth: 6.5,
});

var inner_hole = new Path({
    segments: [[357,275], [337,300], [332,340], [342,370], [353,382], [365,385], [392,350], [388,288], [374,275]],
    closed: true,
    fillColor: '#000000',
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

inner_hole.smooth({
    type: 'catmull-rom',
    factor: 0.4
});

//legs
var l_leg = new Path({
    segments: [[255,430], [258,490], [258,490], [263,530], [270,540],
    [280,543], [290,540], [297,530], [302,490], [302,490], [305,450],
    [310,437], [350,430]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

l_leg.smooth({
    type: 'catmull-rom',
    factor: 0.4
});

var r_leg = new Path({
    segments: [[445,430], [442,490], [442,490], [437,530], [430,540],
    [420,543], [410,540], [403,530], [398,490], [398,490], [395,450],
    [390,437], [350,430]],
    closed: false,
    strokeColor: '#000000',
    strokeWidth: 6,
    strokeCap: 'round'
});

r_leg.smooth({
    type: 'catmull-rom',
    factor: 0.4
});

var legs = new Group([
    l_leg, r_leg
]);


//group


var holeman = new Group([
    fill, legs, body, face
]);

var body = new Group([
    l_body, r_body, hole, inner_hole, l_arm, r_arm
]);

holeman.applyMatrix = false;
holeman.position.x = view.center.x;
holeman.position.y = view.viewSize.height-480;


//arms and legs movement
function onMouseMove(event) {
    l_arm_x = map(event.point.x, view.center.x, 0, 0, -500);
    if (l_arm_x > view.center.x/500) {l_arm_x = 0};
    holeman.children[2].children[4].segments[4].point = [l_arm_x+220,220];
    holeman.children[2].children[4].segments[5].point = [l_arm_x+180,230];
    holeman.children[2].children[4].segments[6].point = [l_arm_x+169,240];
    holeman.children[2].children[4].segments[7].point = [l_arm_x+172,248];
    holeman.children[2].children[4].segments[8].point = [l_arm_x+180,252];
    holeman.children[2].children[4].segments[9].point = [l_arm_x+220,257];

    l_arm_x_fill = map(event.point.x, view.center.x, 0, 0, -500);
    if (l_arm_x_fill > view.center.x/500) {l_arm_x_fill = 0};
    holeman.children[0].segments[45].point = [l_arm_x_fill+220,257];
    holeman.children[0].segments[46].point = [l_arm_x_fill+180,252];
    holeman.children[0].segments[47].point = [l_arm_x_fill+172,248];
    holeman.children[0].segments[48].point = [l_arm_x_fill+169,240];
    holeman.children[0].segments[48].point = [l_arm_x_fill+169,243];
    holeman.children[0].segments[49].point = [l_arm_x_fill+180,230];
    holeman.children[0].segments[50].point = [l_arm_x_fill+220,220];
    holeman.children[2].children[4].smooth({type: 'catmull-rom',factor: 0.4});

    r_arm_x = map(event.point.x, view.center.x, view.viewSize.width, 0, 500);
    if (r_arm_x < view.center.x/500) {r_arm_x = 0};
    holeman.children[2].children[5].segments[4].point = [r_arm_x+480,220];
    holeman.children[2].children[5].segments[5].point = [r_arm_x+520,230];
    holeman.children[2].children[5].segments[6].point = [r_arm_x+531,240];
    holeman.children[2].children[5].segments[7].point = [r_arm_x+531,248];
    holeman.children[2].children[5].segments[8].point = [r_arm_x+527,252];
    holeman.children[2].children[5].segments[9].point = [r_arm_x+519,257];

    r_arm_x_fill = map(event.point.x, view.center.x, view.viewSize.width, 0, 500);
    if (r_arm_x_fill < view.center.x/500) {r_arm_x_fill = 0};
    holeman.children[0].segments[14].point = [r_arm_x_fill+480,220];
    holeman.children[0].segments[15].point = [r_arm_x_fill+520,230];
    holeman.children[0].segments[16].point = [r_arm_x_fill+531,240];
    holeman.children[0].segments[17].point = [r_arm_x_fill+531,248];
    holeman.children[0].segments[18].point = [r_arm_x_fill+527,252];
    holeman.children[0].segments[19].point = [r_arm_x_fill+519,257];
    holeman.children[2].children[5].smooth({type: 'catmull-rom',factor: 0.4});

    l_leg_y = map(event.point.y, 0, view.viewSize.width, 0, 300);
    holeman.children[1].children[0].segments[2].point = [258,490+l_leg_y];
    holeman.children[1].children[0].segments[3].point = [263,530+l_leg_y];
    holeman.children[1].children[0].segments[4].point = [270,540+l_leg_y];
    holeman.children[1].children[0].segments[5].point = [280,543+l_leg_y];
    holeman.children[1].children[0].segments[6].point = [290,540+l_leg_y];
    holeman.children[1].children[0].segments[7].point = [297,530+l_leg_y];
    holeman.children[1].children[0].segments[8].point = [302,490+l_leg_y];

    l_leg_y_fill = map(event.point.y, 0, view.viewSize.width, 0, 300);
    holeman.children[0].segments[35].point = [302,490+l_leg_y_fill];
    holeman.children[0].segments[36].point = [297,530+l_leg_y_fill];
    holeman.children[0].segments[37].point = [290,540+l_leg_y_fill];
    holeman.children[0].segments[38].point = [280,543+l_leg_y_fill];
    holeman.children[0].segments[39].point = [270,540+l_leg_y_fill];
    holeman.children[0].segments[40].point = [263,533+l_leg_y_fill];
    holeman.children[0].segments[41].point = [258,490+l_leg_y_fill];

    r_leg_y = map(event.point.y, 0, view.viewSize.width, 0, 300);
    holeman.children[1].children[1].segments[2].point = [442,490+r_leg_y];
    holeman.children[1].children[1].segments[3].point = [437,530+r_leg_y];
    holeman.children[1].children[1].segments[4].point = [430,540+r_leg_y];
    holeman.children[1].children[1].segments[5].point = [420,543+r_leg_y];
    holeman.children[1].children[1].segments[6].point = [410,540+r_leg_y];
    holeman.children[1].children[1].segments[7].point = [403,530+r_leg_y];
    holeman.children[1].children[1].segments[8].point = [398,490+r_leg_y];

    r_leg_y_fill = map(event.point.y, 0, view.viewSize.width, 0, 300);
    holeman.children[0].segments[23].point = [442,490+r_leg_y_fill];
    holeman.children[0].segments[24].point = [437,530+r_leg_y_fill];
    holeman.children[0].segments[25].point = [430,540+r_leg_y_fill];
    holeman.children[0].segments[26].point = [420,543+r_leg_y_fill];
    holeman.children[0].segments[27].point = [410,540+r_leg_y_fill];
    holeman.children[0].segments[28].point = [403,533+r_leg_y_fill];
    holeman.children[0].segments[29].point = [398,490+r_leg_y_fill];

    stage_y = map(event.point.y, 0, view.viewSize.height, 0, 200);
    stage.point = [view.center.x,650+stage_y];

    // path1.scaling = map(event.point.y, 0, view.viewSize.height, 0.5, 4);
    // path1.rotate(5);
    // path2.scaling = map(event.point.y, 0, view.viewSize.height, 0.5, 4);
    // path2.rotate(5);
    // path3.scaling = map(event.point.y, 0, view.viewSize.height, 0.5, 4);
    // path3.rotate(5);
    // path4.scaling = map(event.point.y, 0, view.viewSize.height, 0.5, 4);
    // path4.rotate(5);
    // path5.scaling = map(event.point.y, 0, view.viewSize.height, 0.5, 4);
    // path5.rotate(5);
    // path6.scaling = map(event.point.y, 0, view.viewSize.height, 0.5, 4);
    // path6.rotate(5);
};


//texts
var command_key = new PointText(50, 105);
command_key.content = 'Click to sing';
command_key.style = {
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 20,
    fillColor: 'black',
    justification: 'left'
};

// var command_mouse = new PointText(50, 100);
// command_mouse.content = 'Click to sing';
// command_mouse.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 20,
//     fillColor: 'black',
//     justification: 'left'
// };


// //chorus holemen
// var holeman2 = holeman.copyTo(project);
//     holeman2.scaling = 0.4
//     holeman2.applyMatrix = true;
//     holeman2.position = [150, view.viewSize.height-150]
//     holeman2.children[4].children[1].rotate(70);
//     holeman2.children[4].children[1].scaling = (1, 0.5);
//     holeman2.children[4].children[2].rotate(110);
//     holeman2.children[4].children[2].scaling = (1, 0.5);
//     holeman2.children[1].visible = false;
//     holeman2.children[3].children[2].visible = false;
//     holeman2.children[3].children[3].visible = false;
//     holeman2.strokeWidth = 4;
//     holeman2.children[4].strokeWidth = 3.5;
//
// var holeman3 = holeman.copyTo(project);
//     holeman3.scaling = 0.4
//     holeman3.applyMatrix = true;
//     holeman3.position = [400, view.viewSize.height-150]
//     holeman3.children[4].children[1].rotate(70);
//     holeman3.children[4].children[1].scaling = (1, 0.5);
//     holeman3.children[4].children[2].rotate(110);
//     holeman3.children[4].children[2].scaling = (1, 0.5);
//     holeman3.children[1].visible = false;
//     holeman3.children[3].children[2].visible = false;
//     holeman3.children[3].children[3].visible = false;
//     holeman3.strokeWidth = 4;
//     holeman3.children[4].strokeWidth = 3.5;
//
// var holeman4 = holeman.copyTo(project);
//     holeman4.scaling = 0.4
//     holeman4.applyMatrix = true;
//     holeman4.position = [view.viewSize.width-400, view.viewSize.height-150]
//     holeman4.children[4].children[1].rotate(70);
//     holeman4.children[4].children[1].scaling = (1, 0.5);
//     holeman4.children[4].children[2].rotate(110);
//     holeman4.children[4].children[2].scaling = (1, 0.5);
//     holeman4.children[1].visible = false;
//     holeman4.children[3].children[2].visible = false;
//     holeman4.children[3].children[3].visible = false;
//     holeman4.strokeWidth = 4;
//     holeman4.children[4].strokeWidth = 3.5;
//
// var holeman5 = holeman.copyTo(project);
//     holeman5.scaling = 0.4
//     holeman5.applyMatrix = true;
//     holeman5.position = [view.viewSize.width-150, view.viewSize.height-150]
//     holeman5.children[4].children[1].rotate(70);
//     holeman5.children[4].children[1].scaling = (1, 0.5);
//     holeman5.children[4].children[2].rotate(110);
//     holeman5.children[4].children[2].scaling = (1, 0.5);
//     holeman5.children[1].visible = false;
//     holeman5.children[3].children[2].visible = false;
//     holeman5.children[3].children[3].visible = false;
//     holeman5.strokeWidth = 4;
//     holeman5.children[4].strokeWidth = 3.5;


//singing mouth
var singing_mouth = new Shape.Ellipse({
    point: [view.center.x-15, 0],
    size: [30, 10]});
    singing_mouth.strokeColor = '#000000',
    singing_mouth.strokeWidth = 6,
    singing_mouth.fillColor = '#ffffff';
    singing_mouth.visible = false;
    singing_mouth.applyMatrix = true;

var singing_mouth_2 = new Shape.Ellipse({
    point: [150, 0],
    size: [0, 0]});
    singing_mouth_2.strokeColor = '#000000',
    singing_mouth_2.strokeWidth = 3.5,
    singing_mouth_2.fillColor = '#ffffff';
    singing_mouth_2.visible = false;
    singing_mouth_2.applyMatrix = true;

var singing_mouth_3 = new Shape.Ellipse({
    point: [400, 0],
    size: [0, 0]});
    singing_mouth_3.strokeColor = '#000000',
    singing_mouth_3.strokeWidth = 3.5,
    singing_mouth_3.fillColor = '#ffffff';
    singing_mouth_3.visible = false;
    singing_mouth_3.applyMatrix = true;

var singing_mouth_4 = new Shape.Ellipse({
    point: [view.viewSize.width-400, 0],
    size: [0, 0]});
    singing_mouth_4.strokeColor = '#000000',
    singing_mouth_4.strokeWidth = 3.5,
    singing_mouth_4.fillColor = '#ffffff';
    singing_mouth_4.visible = false;
    singing_mouth_4.applyMatrix = true;

var singing_mouth_5 = new Shape.Ellipse({
    point: [view.viewSize.width-150, 0],
    size: [0, 0]});
    singing_mouth_5.strokeColor = '#000000',
    singing_mouth_5.strokeWidth = 3.5,
    singing_mouth_5.fillColor = '#ffffff';
    singing_mouth_5.visible = false;
    singing_mouth_5.applyMatrix = true;


var count = 0;
function onFrame(event) {
    count++;
    if (count % 4 === 0) {
        var singing_mouth_size = getRandom(10, 40);
        singing_mouth.position.y = view.viewSize.height-595+singing_mouth_size/2;
        singing_mouth.size = [30,singing_mouth_size];
        // singing_mouth_2.position.y = view.viewSize.height-195+singing_mouth_size/4;
        // singing_mouth_2.size = [12,singing_mouth_size/2];
        // singing_mouth_3.position.y = view.viewSize.height-195+singing_mouth_size/4;
        // singing_mouth_3.size = [12,singing_mouth_size/2];
        // singing_mouth_4.position.y = view.viewSize.height-195+singing_mouth_size/4;
        // singing_mouth_4.size = [12,singing_mouth_size/2];
        // singing_mouth_5.position.y = view.viewSize.height-195+singing_mouth_size/4;
        // singing_mouth_5.size = [12,singing_mouth_size/2];
    }
    else {
        // song_lyrics_0.position.x -= 2;
        // song_lyrics_1.position.x -= 2;
        // song_lyrics_2.position.x -= 2;
        // song_lyrics_3.position.x -= 2;
    }
}

function onMouseDown(event) {
    holeman.children[4].children[3].visible = false;
    singing_mouth.visible = true;
    // singing_mouth_2.visible = true;
    // singing_mouth_3.visible = true;
    // singing_mouth_4.visible = true;
    // singing_mouth_5.visible = true;
}

function onMouseUp(event) {
    holeman.children[4].children[3].visible = true;
    singing_mouth.visible = false;
    // singing_mouth_2.visible = false;
    // singing_mouth_3.visible = false;
    // singing_mouth_4.visible = false;
    // singing_mouth_5.visible = false;
}


//song names and lyrics
// var song_name_0 = new PointText(view.center.x, 75);
//     song_name_0.content = 'TOTT';
//     song_name_0.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 25,
//     fillColor: 'black',
//     justification: 'center'
//     };

// var song_lyrics_0 = new PointText(view.viewSize.width, 150);
//     song_lyrics_0.content = 'I want to know that certainties in my life. I want to know that certainties in the light. I want to know that certainties in my life. Is not lonely and more defined.';
//     song_lyrics_0.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 20,
//     fillColor: 'black',
//     justification: 'left'
//     };

// var song_name_1 = new PointText(view.viewSize.width-50, 100);
//     song_name_1.content = 'Spiderhead';
//     song_name_1.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 25,
//     fillColor: 'black',
//     justification: 'right'
//     };
//     song_name_1.visible = false;
//
// var song_lyrics_1 = new PointText(view.viewSize.width, 150);
//     song_lyrics_1.content = 'Spiders in my head. Spiders in my mind. It all works out in time. You know I am gonna be alright.';
//     song_lyrics_1.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 20,
//     fillColor: 'black',
//     justification: 'left'
//     };
//     song_lyrics_1.visible = false;
//
// var song_name_2 = new PointText(view.viewSize.width-50, 100);
//     song_name_2.content = 'After the disco';
//     song_name_2.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 25,
//     fillColor: 'black',
//     justification: 'right'
//     };
//     song_name_2.visible = false;
//
// var song_lyrics_2 = new PointText(view.viewSize.width, 150);
//     song_lyrics_2.content = 'Do what you want, do what you will, but you cannot hide.';
//     song_lyrics_2.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 20,
//     fillColor: 'black',
//     justification: 'left'
//     };
//     song_lyrics_2.visible = false;
//
// var song_name_3 = new PointText(view.viewSize.width-50, 100);
//     song_name_3.content = 'Que sera';
//     song_name_3.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 25,
//     fillColor: 'black',
//     justification: 'right'
//     };
//     song_name_3.visible = false;
//
// var song_lyrics_3 = new PointText(view.viewSize.width, 150);
//     song_lyrics_3.content = 'Que sera sera. Que sera sera. Whatever will be.';
//     song_lyrics_3.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 20,
//     fillColor: 'black',
//     justification: 'left'
//     };
//     song_lyrics_3.visible = false;
//
// var holeword = new PointText(view.center.x+3,view.center.y+10);
//     holeword.content = 'yeah'
//     holeword.style = {
//     fontFamily: 'Courier New',
//     fontWeight: 'bold',
//     fontSize: 10,
//     fillColor: 'black',
//     justification: 'right'
//     };
//
// function onKeyDown(event) {
//     if(event.key == '1') {
//         song_name_0.visible = false;
//         song_lyrics_0.visible = false;
//         song_name_2.visible = false;
//         song_lyrics_2.visible = false;
//         song_name_3.visible = false;
//         song_lyrics_3.visible = false;
//         //
//         song_name_1.visible = true;
//         song_lyrics_1.visible = true;
//         song_lyrics_1.position.x = view.viewSize.width+590
//         //
//         path_group.strokeColor = '#a72c52'
//     }
//     if(event.key == '2') {
//         song_name_0.visible = false;
//         song_lyrics_0.visible = false;
//         song_name_1.visible = false;
//         song_lyrics_1.visible = false;
//         song_name_3.visible = false;
//         song_lyrics_3.visible = false;
//         //
//         song_name_2.visible = true;
//         song_lyrics_2.visible = true;
//         song_lyrics_2.position.x = view.viewSize.width+350
//         song_lyrics_2.visible = true;
//         path_group.strokeColor = '#6a6890'
//     }
//     if(event.key == '3') {
//         song_name_0.visible = false;
//         song_lyrics_0.visible = false;
//         song_name_1.visible = false;
//         song_lyrics_1.visible = false;
//         song_name_2.visible = false;
//         song_lyrics_2.visible = false;
//         //
//         song_name_3.visible = true;
//         song_lyrics_3.visible = true;
//         song_lyrics_3.position.x = view.viewSize.width+290
//         song_lyrics_3.visible = true;
//         //
//         path_group.strokeColor = '#9e8fc1'
//     }
//     if(event.key == '0') {
//         song_name_1.visible = false;
//         song_lyrics_1.visible = false;
//         song_name_2.visible = false;
//         song_lyrics_2.visible = false;
//         song_name_3.visible = false;
//         song_lyrics_3.visible = false;
//         //
//         song_name_0.visible = true;
//         song_lyrics_0.visible = true;
//         song_lyrics_0.position.x = view.viewSize.width+1000
//         song_lyrics_0.visible = true;
//         //
//         path_group.strokeColor = '#a8c0d8'
//     }
// }
//
// function onResize(){
//     background.position = view.center;
//     holeword.position.x = map(view.bounds.width, 0, -2000, 0, -1000);
//     holeword.scaling = map(view.bounds.width, 0, 2000, 5, 0);
// }


//functions
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
