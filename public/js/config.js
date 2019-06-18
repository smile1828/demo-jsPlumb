    /**
     * 这里放置一些基本的设置
    */
 
    // 流程图画布
    var container = $('#flow-main');
    // 用来区分流程图，是否为可编辑的状态。默认为可编辑
    var isNew = true;
    // 拖拽时，防止id重复。默认设为1
    var _index = 0;
    // 画布放大缩小。默认为1
    var size = 1.0;
    // 暂存流程图数据。
    var flowData = {};
    // 区分节点的单双击事件
    var nodeTimes = null;
    // 区分连接线的单双击事件
    var lineTimes = null;
    // 区分label的单双击事件
    var labelTimes = null;
    // 基本连接线样式
    var connectorPaintStyle = {
        lineWidth: 2,
        strokeStyle: "#000000",
        joinstyle: "round",
        outlineColor: "white",
        outlineWidth: 1
    };
    // 鼠标悬浮在连接线上的样式
    var connectorHoverStyle = {
        lineWidth: 2,
        strokeStyle: "#000000",
        outlineWidth: 1,
        outlineColor: "white"
    };
    // 端点样式
    var endpointStyle = {
        endpoint: ["Dot", { radius: 8 }],  //端点的形状
        connectorStyle: connectorPaintStyle,//连接线的颜色，大小样式
        // connectorHoverStyle: connectorHoverStyle,
        paintStyle: {
            strokeStyle: "#000000",
            fillStyle: "transparent",
            radius: 2,
            lineWidth: 1
        },        //端点的颜色样式
        // anchor: dynamicAnchors,
        isSource: true,    //是否可以拖动（作为连线起点）
        connector: ["Flowchart", { stub: [20, 30], gap: 5, cornerRadius: 3, alwaysRespectStubs: true }],  //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
        isTarget: true,    //是否可以放置（连线终点）
        maxConnections: -1,    // 设置连接点最多可以连接几条线
        connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
    };