//background
    var background = new Path.Rectangle({
        point: [0, 0],
        size: [view.size.width, view.size.height],
        fillColor: '#0000ff',
        });


//fill
    var head = new Path({
        segments: [[300,200], [308,180], [315,150], [325,110], [335,90], [350,83], [365,90], [375,110], [385,150], [392,180], [400,200], [410,207], [420,210], [480,220], [520,230], [531,240], [531,243], [527,248], [519,252], [480,257], [450,260], [445,270], [445,430], [442,490], [437,530], [430,540], [420,543], [410,540], [403,530], [398,490], [395,450], [390,437], [350,430], [310,437], [305,450], [302,490], [297,530], [290,540], [280,543], [270,540], [263,530], [258,490], [255,430], [255,270], [250,260], [220,257], [180,252], [172,248], [169,243], [169,240], [180,230], [220,220], [280,210], [290,207], [300,200]],
        closed: false,
        fillColor: '#ffffff',
        strokeColor: '#000000',
        strokeWidth: 6,
        strokeCap: 'round'
        });

    head.smooth({
        type: 'catmull-rom',
        factor: 0.4
        });


//decor
    var decor_1 = new Path({
        segments: [[200,100], [250,120]],
        strokeColor: '#ffffff',
        strokeWidth: 6,
        strokeCap: 'round'
        });

    var decor_2 = new Path({
        segments: [[300,30], [310,60]],
        strokeColor: '#ffffff',
        strokeWidth: 6,
        strokeCap: 'round'
        });

    var decor_3 = new Path({
        segments: [[450,40], [420,70]],
        strokeColor: '#ffffff',
        strokeWidth: 6,
        strokeCap: 'round'
        });

    var decor_4 = new Path({
        segments: [[500,120], [430,130]],
        strokeColor: '#ffffff',
        strokeWidth: 6,
        strokeCap: 'round'
        });


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


//arms
    var l_arm = new Path({
        segments: [[300,200], [290,207], [280,210], [220,220], [180,230], [169,240], [169,243], [172,248], [180,252], [220,257],[250,260]],
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
        segments: [[400,200], [410,207], [420,210], [480,220], [520,230], [531,240], [531,243], [527,248], [519,252], [480,257],[450,260]],
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
        segments: [[255,430], [258,490], [263,530], [270,540], [280,543], [290,540], [297,530], [302,490], [305,450], [310,437], [350,430]],
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
        segments: [[445,430], [442,490], [437,530], [430,540], [420,543], [410,540], [403,530], [398,490], [395,450], [390,437], [350,430]],
        closed: false,
        strokeColor: '#000000',
        strokeWidth: 6,
        strokeCap: 'round'
        });

    r_leg.smooth({
        type: 'catmull-rom',
        factor: 0.4
        });
