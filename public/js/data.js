var data = {
    blocks:[
    {
        blockContent: "开始",
        blockId: "node1",
        blockX: 263,
        blockY: 48,
        height: 36,
        type: "node",
        width: 156
    },
    {
        blockContent: "4 整除 y",
        blockId: "judge3",
        blockX: 263,
        blockY: 213,
        height: 36,
        type: "judge",
        width: 156
    },
    {
        blockContent: "输入 y",
        blockId: "flow4",
        blockX: 263,
        blockY: 130,
        height: 36,
        type: "flow",
        width: 156
    },
    {
        blockContent: "100 整除 y",
        blockId: "judge5",
        blockX: 547,
        blockY: 213,
        height: 36,
        type: "judge",
        width: 156
    },
    {
     blockContent: "400 整除 y",
     blockId: "judge6",
     blockX: 547,
     blockY: 327,
     height: 36,
     type: "judge",
     width: 156 
 },
 {
    blockContent: "输出 y 不是闰年",
    blockId: "flow7",
    blockX: 263,
    blockY: 401,
    height: 36,
    type: "flow",
    width: 156
},
{
  blockContent: "输出 y  是闰年",
  blockId: "flow8",
  blockX: 547,
  blockY: 447,
  height: 36,
  type: "flow",
  width: 156  
},
{
    blockContent: "结束",
    blockId: "node9",
    blockX: 263,
    blockY: 499,
    height: 36,
    type: "node",
    width: 156
}

],
connects:[
{
    connectionId: "con_76",
    pageSourceId: "node1",
    pageTargetId: "flow4",
    sourcePoint: "BottomCenter",
    targetPoint: "TopCenter"
},{
    connectionId: "con_80",
    pageSourceId: "flow4",
    pageTargetId: "judge3",
    sourcePoint: "BottomCenter",
    targetPoint: "TopCenter"
},
{
 connectionId: "con_88",
 pageSourceId: "judge3",
 pageTargetId: "judge5",
 sourcePoint: "RightMiddle",
 targetPoint: "LeftMiddle"
},
{
    connectionId: "con_92",
    pageSourceId: "judge5",
    pageTargetId: "judge6",
    sourcePoint: "BottomCenter",
    targetPoint: "TopCenter"
},
{
    connectionId: "con_96",
    pageSourceId: "judge6",
    pageTargetId: "flow8",
    sourcePoint: "BottomCenter",
    targetPoint: "TopCenter"
},
{
    connectionId: "con_100",
    pageSourceId: "judge3",
    pageTargetId: "flow7",
    sourcePoint: "BottomCenter",
    targetPoint: "TopCenter"
},
{
    connectionId: "con_104",
    pageSourceId: "flow7",
    pageTargetId: "node9",
    sourcePoint: "BottomCenter",
    targetPoint: "TopCenter"

},
{
    connectionId: "con_108",
    pageSourceId: "flow8",
    pageTargetId: "node9",
    sourcePoint: "BottomCenter",
    targetPoint: "RightMiddle"
},
{
    connectionId: "con_112",
    pageSourceId: "judge5",
    pageTargetId: "flow8",
    sourcePoint: "RightMiddle",
    targetPoint: "RightMiddle"
},
{
    connectionId: "con_116",
    pageSourceId: "judge6",
    pageTargetId: "flow7",
    sourcePoint: "LeftMiddle",
    targetPoint: "TopCenter"
}
],
lineDescs:[
{
    height: 40,
    lineContent: "否",
    lineId: "label10",
    lineX: 305,
    lineY: 288,
    pathId: "con_100",
    width: 80
},
{
    height: 40,
    lineContent: "是",
    lineId: "label11",
    lineX: 448,
    lineY: 214,
    pathId: "con_88",
    width: 80
},
{
    height: 40,
    lineContent: "否",
    lineId: "label12",
    lineX: 707,
    lineY: 260,
    pathId: "con_112",
    width: 80
},
{
    height: 40,
    lineContent: "是",
    lineId: "label13",
    lineX: 589,
    lineY: 266,
    pathId: "con_92",
    width: 80
},
{
    height: 40,
    lineContent: "是",
    lineId: "label14",
    lineX: 589,
    lineY: 385,
    pathId: "con_96",
    width: 80
},
{
    height: 40,
    lineContent: "否",
    lineId: "label15",
    lineX: 431,
    lineY: 328,
    pathId: "con_116",
    width: 80
}
]
}
