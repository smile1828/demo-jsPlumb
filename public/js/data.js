var data = {
        blocks:[
            {
                BlockContent: "就看见立刻",
                BlockId: "btn-flow2",
                BlockX: 272,
                BlockY: 128,
            },
            {
                BlockContent: "开始",
                BlockId: "btn-start1",
                BlockX: 79,
                BlockY: 100,
            },
            {
                BlockContent: '判断',
                BlockId: "btn-judge3",
                BlockX: 565,
                BlockY: 183
            },
            {
                BlockContent: "结束",
                BlockId: "btn-end4",
                BlockX: 833,
                BlockY: 280,
            }
        ],
        connects:[
            {
                ConnectionId: "con_30",
                PageSourceId: "btn-start1",
                PageTargetId: "btn-flow2",
                SourcePoint: "RightMiddle",
                TargetPoint: "LeftMiddle",
            },
            {
                ConnectionId: "con_38",
                PageSourceId: "btn-flow2",
                PageTargetId: "btn-judge3",
                SourcePoint: "Bottom",
                TargetPoint: "TopCenter"
            },
            {
                ConnectionId: "con_48",
                PageSourceId: "btn-judge3",
                PageTargetId: "btn-end4",
                SourcePoint: "RightMiddle",
                TargetPoint: "TopCenter"
            }
        ]
    }