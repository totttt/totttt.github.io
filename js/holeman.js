var l_arm_x;
var r_arm_x;


//fill
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

    var decor = new Group ([
        decor_1, decor_2, decor_3, decor_4])

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
        head, l_eye, r_eye, mouth])


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
        l_leg, r_leg])


//group

    var body = new Group([
        l_body, r_body, hole, inner_hole, l_arm, r_arm
        ])

    var holeman = new Group([
        fill, decor, legs, body, face
        ])

        holeman.applyMatrix = false
        holeman.position = view.center


function onMouseMove(event) {
        l_arm_x = map(event.point.x, view.viewSize.width, 0, 0, -500);
        holeman.children[3].children[4].segments[4].point = [l_arm_x+220,220];
        holeman.children[3].children[4].segments[5].point = [l_arm_x+180,230];
        holeman.children[3].children[4].segments[6].point = [l_arm_x+169,240];
        holeman.children[3].children[4].segments[7].point = [l_arm_x+172,248];
        holeman.children[3].children[4].segments[8].point = [l_arm_x+180,252];
        holeman.children[3].children[4].segments[9].point = [l_arm_x+220,257];

        l_arm_x_fill = map(event.point.x, view.viewSize.width, 0, 0, -500);
        holeman.children[0].segments[45].point = [l_arm_x_fill+220,257];
        holeman.children[0].segments[46].point = [l_arm_x_fill+180,252];
        holeman.children[0].segments[47].point = [l_arm_x_fill+172,248];
        holeman.children[0].segments[48].point = [l_arm_x_fill+169,240];
        holeman.children[0].segments[48].point = [l_arm_x_fill+169,243];
        holeman.children[0].segments[49].point = [l_arm_x_fill+180,230];
        holeman.children[0].segments[50].point = [l_arm_x_fill+220,220];
        holeman.children[3].children[4].smooth({
        type: 'catmull-rom',
        factor: 0.4
        });

        r_arm_x = map(event.point.x, 0, view.viewSize.width, 0, 500);
        holeman.children[3].children[5].segments[4].point = [r_arm_x+480,220];
        holeman.children[3].children[5].segments[5].point = [r_arm_x+520,230];
        holeman.children[3].children[5].segments[6].point = [r_arm_x+531,240];
        holeman.children[3].children[5].segments[7].point = [r_arm_x+531,248];
        holeman.children[3].children[5].segments[8].point = [r_arm_x+527,252];
        holeman.children[3].children[5].segments[9].point = [r_arm_x+519,257];

        r_arm_x_fill = map(event.point.x, 0, view.viewSize.width, 0, 500);
        holeman.children[0].segments[14].point = [r_arm_x_fill+480,220];
        holeman.children[0].segments[15].point = [r_arm_x_fill+520,230];
        holeman.children[0].segments[16].point = [r_arm_x_fill+531,240];
        holeman.children[0].segments[17].point = [r_arm_x_fill+531,248];
        holeman.children[0].segments[18].point = [r_arm_x_fill+527,252];
        holeman.children[0].segments[19].point = [r_arm_x_fill+519,257];
        holeman.children[3].children[5].smooth({
        type: 'catmull-rom',
        factor: 0.4
        });

        l_leg_y = map(event.point.y, 0, view.viewSize.width, 0, 300);
        holeman.children[2].children[0].segments[2].point = [258,490+l_leg_y];
        holeman.children[2].children[0].segments[3].point = [263,530+l_leg_y];
        holeman.children[2].children[0].segments[4].point = [270,540+l_leg_y];
        holeman.children[2].children[0].segments[5].point = [280,543+l_leg_y];
        holeman.children[2].children[0].segments[6].point = [290,540+l_leg_y];
        holeman.children[2].children[0].segments[7].point = [297,530+l_leg_y];
        holeman.children[2].children[0].segments[8].point = [302,490+l_leg_y];

        l_leg_y_fill = map(event.point.y, 0, view.viewSize.width, 0, 300);
        holeman.children[0].segments[35].point = [302,490+l_leg_y_fill];
        holeman.children[0].segments[36].point = [297,530+l_leg_y_fill];
        holeman.children[0].segments[37].point = [290,540+l_leg_y_fill];
        holeman.children[0].segments[38].point = [280,543+l_leg_y_fill];
        holeman.children[0].segments[39].point = [270,540+l_leg_y_fill];
        holeman.children[0].segments[40].point = [263,533+l_leg_y_fill];
        holeman.children[0].segments[41].point = [258,490+l_leg_y_fill];

        r_leg_y = map(event.point.y, 0, view.viewSize.width, 0, 300);
        holeman.children[2].children[1].segments[2].point = [442,490+r_leg_y];
        holeman.children[2].children[1].segments[3].point = [437,530+r_leg_y];
        holeman.children[2].children[1].segments[4].point = [430,540+r_leg_y];
        holeman.children[2].children[1].segments[5].point = [420,543+r_leg_y];
        holeman.children[2].children[1].segments[6].point = [410,540+r_leg_y];
        holeman.children[2].children[1].segments[7].point = [403,530+r_leg_y];
        holeman.children[2].children[1].segments[8].point = [398,490+r_leg_y];

        r_leg_y_fill = map(event.point.y, 0, view.viewSize.width, 0, 300);
        holeman.children[0].segments[23].point = [442,490+r_leg_y_fill];
        holeman.children[0].segments[24].point = [437,530+r_leg_y_fill];
        holeman.children[0].segments[25].point = [430,540+r_leg_y_fill];
        holeman.children[0].segments[26].point = [420,543+r_leg_y_fill];
        holeman.children[0].segments[27].point = [410,540+r_leg_y_fill];
        holeman.children[0].segments[28].point = [403,533+r_leg_y_fill];
        holeman.children[0].segments[29].point = [398,490+r_leg_y_fill];

}


function map(value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
