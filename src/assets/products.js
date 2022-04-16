export {
  eduProducts,
  lanProducts,
  indProducts,
  prodDetails,
}

let eduProducts=[
  {
    image:require('@/assets/product/Educational lighting/1.png'),
    name:'建设背景',
    id:1,
  },
  {
    image:require('@/assets/product/Educational lighting/2.png'),
    name:'建设目标',
    id:2
  },
  // {
  //   image:require('@/assets/product/Educational lighting/11.jpg'),
  //   name:'平板灯',
  //   id:11
  // },
  // {
  //   image:require('@/assets/product/Educational lighting/12.jpg'),
  //   name:'LED防眩光黑板灯',
  //   id:12
  // },
  // {
  //   image:require('@/assets/product/Educational lighting/13.jpg'),
  //   name:'LED防眩光教室灯',
  //   id:13
  // },
];

let lanProducts=[
  {
    image:require('@/assets/product/Landscape Lighting/3.png'),
    name:'业务流程',
    id:3
  },
  {
    image:require('@/assets/product/Landscape Lighting/4.png'),
    name:'业务逻辑',
    id:4
  },
  {
    image:require('@/assets/product/Landscape Lighting/5.png'),
    name:'总体架构设计',
    id:5
  },
  // {
  //   image:require('@/assets/product/Landscape Lighting/6.jpg'),
  //   name:'泛光灯-ZY908',
  //   id:6
  // },
  // {
  //   image:require('@/assets/product/Landscape Lighting/7.jpg'),
  //   name:'泛光灯-ZY228',
  //   id:7
  // },
  // {
  //   image:require('@/assets/product/Landscape Lighting/8.jpg'),
  //   name:'泛光灯-ZY338',
  //   id:8
  // },
  // {
  //   image:require('@/assets/product/Landscape Lighting/17.jpg'),
  //   name:'隧道灯-ZQ537',
  //   id:17
  // },
  // {
  //   image:require('@/assets/product/Landscape Lighting/18.jpg'),
  //   name:'泛光灯-ZQ760',
  //   id:18
  // },
];

let indProducts=[
  {
    image:require('@/assets/product/Industrial lighting/10.jpg'),
    name:'数据采集与存储子系统',
    id:9
  },
  {
    image:require('@/assets/product/Industrial lighting/11.jpg'),
    name:'单兵流调子系统',
    id:10
  },
  {
    image:require('@/assets/product/Industrial lighting/12.jpg'),
    name:'指挥调度子系统',
    id:14
  },
  // {
  //   image:require('@/assets/product/Industrial lighting/13.jpg'),
  //   name:'天棚灯-GC272',
  //   id:15
  // },
  // {
  //   image:require('@/assets/product/Industrial lighting/14.jpg'),
  //   name:'天棚灯-GC922',
  //   id:16
  // },
];

let prodDetails = [
  {
    image:require('@/assets/product/detail/1.1.png'),
    text1:'流行病学调查（流调）是疫情应对的一项基本工作，由于传统调查方式有诸多不足：纸质化传递效率很低，手动分析数据错误率高，并且现场缺乏可信监督，无法及时获取现场情况。因此以“新冠肺炎” 为切入点，建设湖北省流行病学调查一体化管理平台，将调查分析管理为统一为一体。',
    id:1,
    
    pname:'建设背景',

  },
  {
    image:require('@/assets/product/detail/2.1.png'),
    id:2,
    pname:'建设目标',
    isWhite:true,
    isLeft:false
  },
  {
    image:require('@/assets/product/detail/3.1.png'),
    id:3,
    pname:'业务流程',
    isWhite:true,
    isLeft:true
  },
  {
    image:require('@/assets/product/detail/4.1.png'),
    id:4,
    pname:'业务逻辑',
    isWhite:true,
    isLeft:false
  },
  {
    image:require('@/assets/product/detail/5.1.png'),
    id:5,
    isWhite:true,
    pname:'总体架构设计'
  },
  {
    image:require('@/assets/product/detail/6.1.jpg'),
    pname:'数据采集与存储子系统',
    text1:'该产品是目前业界最轻巧的具有4G实时图传功能的执法记录仪。具备H.265高效压缩、前后双摄、语音控制、IP68防护等级高、NFC等功能优点。主要实现现场流调数据采集、现场数据分析、现场数据展示及传输、防篡改以及保证数据真实性。',
            isWhite:true,
    isLeft:true,
    id:6
  },
  {
    image:require('@/assets/product/detail/7.1.jpg'),
    pname:'数据采集与存储子系统',
    text1:'该产品是目前专业执法市场极为轻薄、便携的产品，并且超过现市场上主流的配置参数，完全无缝兼容现有的办公/业务软件。主要实现流调数据采集、现场数据分析、GPS定位、地图点呼、实现集群化智慧调度以及随时随地随需的组织召开远程音视频会议。',
    id:7,
    isWhite:false,
    isLeft:false
  },
  {
    image:require('@/assets/product/detail/8.1.jpg'),
    pname:'数据采集与存储子系统',
    text1:'车载传输终端是采用4G无线图传,含高清晰摄像机、红外云台、减震吸盘、视频编码、无线传输等模块于一体的摄像机。可通过4G/3G网络接入应急指挥调度平台,将音视频数据实时上传至指挥中心,并与其他应急指挥终端组成强大的应急指挥系统,实现远程视频观看、人员定位、集群呼叫等功能。',
    id:8,
    isWhite:true,
    isLeft:true
  },
  {
    image:require('@/assets/product/detail/9.1.jpg'),
    pname:'数据采集与存储子系统',
    text1:'数据采集器具备实时采集、自动存储、即时显示、即时反馈、自动处理、自动传输功能。为现场数据的真实性、有效性、实时性、可用性提供了保证。其具有一体性、机动性、体积小、重量轻、高性能，并适于手持等特点。',
    id:9,
    isWhite:false,
    isLeft:false
  },
  {
    image:require('@/assets/product/detail/10.1.jpg'),
    id:10,
    pname:'单兵流调子系统',
    text1:'登录用户的身份可分为：系统管理员、流调人员、安全管理员、审计管理员、审核管理员五种。根据用户的身份，分别进入不同的系统页面。',
    isWhite:true,
    isLeft:true
  },
  {
    image:require('@/assets/product/detail/11.1.jpg'),
    id:11,
    pname:'单兵流调子系统',
    text1:'上图为个案流调表模板部分，支持新建流调报告模板，包括新冠肺炎、手足口病、HIV/AIDS等流行病的模板；右侧支持当前系统内所有的流调个案进行查找，修改，审核，删除。',
    isWhite:false,
    isLeft:false
  },
  {
    image:require('@/assets/product/detail/12.1.jpg'),
    id:12,
    pname:'单兵流调子系统',
    text1:'通过将个案调查模板编辑器左侧项目拖动至页面中部工作台需要位置即可对调查模板添加组件，右侧编辑器可以对当前工作台选定的调查模板组件进行部分参数修改。包括导出、导入、预览和提交功能。',
    isWhite:true,
    isLeft:true
  },
  {
    image:require('@/assets/product/detail/13.1.jpg'),
    id:13,
    pname:'单兵流调子系统',
    text1:'用户通过个案流调表主页左侧的流调模板新建流调报告并上传后个案流调表主页右侧的流调报告部分支持对上传的流调报告的查看，修改，删除，审核操作。经过审核后的流调报告可以被添加进分析任务内进行流行病学分析。',
    isWhite:false,
    isLeft:false
  },
  {
    image:require('@/assets/product/detail/14.1.jpg'),
    id:14,
    pname:'单兵流调子系统',
    text1:'大屏显示系统可以显示实时更新的流调系统信息，包括调查任务完成情况、确诊对象分布、调查对象分布、调查数据统计、累计病例详情等数据.',
    isWhite:true,
    isLeft:true
  },
  {
    image:require('@/assets/product/detail/15.1.jpg'),
    id:15,
    pname:'单兵流调子系统',
    text1:'单兵流调系统流行病学分析，支持用户选择所需个案综合进行流行病学分析。并对所选流行病案例进行描述性流行病学分析、临床特征分析、轨迹分析、传播链分析、流行病学分析、生成流调报告等。左侧为分析任务详情主界面，可通过病例编号、调查对象身份证分析个案选择。',
    isWhite:false,
    isLeft:false 
  },
  {
    image:require('@/assets/product/detail/16.1.jpg'),
    id:16,
    pname:'单兵流调子系统',
    text1:'描述性流行病学分析界面包括时间分布、人群分布、地区分布。',
    isWhite:true,
    isLeft:true   
  },
  {
    image:require('@/assets/product/detail/17.1.jpg'),
    id:17,
    pname:'单兵流调子系统',
    text1:'临床特征分析包括基础疾病分析、呼吸系统症状分析、神经系统症状分析、发热病人体温分析、临床体征分析。',
    isWhite:false,
    isLeft:false    
  },
  {
    image:require('@/assets/product/detail/18.1.jpg'),
    id:18,
    pname:'单兵流调子系统',
    text1:'上图为轨迹分析部分，能够基于病例轨迹信息形成危险区域分布图，为后续防控措施提供指导。',
    isWhite:true,
    isLeft:true       
  },
    {
    image:require('@/assets/product/detail/19.1.jpg'),
    id:19,
    pname:'单兵流调子系统',
    text1:'上图为传播链分析部分，能够将病例之间的传播关系可视化展示，明晰疾病的爆发过程，有助于在源头进行防控。',
    isWhite:false,
    isLeft:false       
  },
  {
    image:require('@/assets/product/detail/20.1.jpg'),
    id:20,
    pname:'单兵流调子系统',
    text1:'上图为分析性流行病学部分，能够采用专业的传染病传播分析方法，对其致病因素进行专业分析，辅助专业人士进行决策。',
    isWhite:true,
    isLeft:true       
  },
      {
    image:require('@/assets/product/detail/21.1.jpg'),
    id:21,
    pname:'单兵流调子系统',
    text1:'上图为流行病趋势分析工具，实现了一个经典的传染病模型 — SEIR (易感 → 暴露 → 感染→ 去除)，该模型允许使用补充的时间信息对死亡率和医疗保健负担进行建模。',
    isWhite:false,
    isLeft:false       
  },
    {
    image:require('@/assets/product/detail/22.1.jpg'),
    id:22,
    pname:'单兵流调子系统',
    text1:'左侧为流调报告部分，此部分可对该次聚集性疫情的过程进行总结，包括基本情况、数据分析、调查结论、采取的防控措施等，最后提交生成流调报告',
    isWhite:true,
    isLeft:true       
  },
      {
    image:require('@/assets/product/detail/23.1.jpg'),
    id:23,
    pname:'指挥调度子系统',
    isWhite:true,
    isLeft:true       
  },
      {
    image:require('@/assets/product/detail/24.1.jpg'),
    id:24,
    pname:'指挥调度子系统',
    isWhite:false,
    isLeft:false       
  },
      {
    image:require('@/assets/product/detail/25.1.jpg'),
    id:25,
    pname:'指挥调度子系统',
    isWhite:true,
    isLeft:true       
  },
];

