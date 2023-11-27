import type { ResumeConfig } from '@/components/types';

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  titleNameMap: {
    workExpList: '工作经历',
    projectList: '项目经验',
    skillList: '个人技能',
    awardList: '更多信息',
    workList: '个人作品',
    aboutme: '个人评价',
    educationList: '教育背景',
  },
  avatar: {
    src:
      'data:image/jpeg;base64,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',
    hidden: false,
  },
  profile: {
    name: '田治勇',
    email: '*****@gmail.com',
    mobile: '173*******',
    github: 'https://github.com/Tzyito',
    zhihu: '',
    workExpYear: '',
    workPlace: '',
  },
  educationList: [
    {
      edu_time: ['2017.09', '2021.06'],
      school: '****',
      major: '软件工程',
      academic_degree: '本科',
    },
  ],
  awardList: [],
  workExpList: [
    {
      company_name: '成都知道创宇',
      department_name: '业务安全',
      work_time: ['2022.08', null],
      work_desc:
        '1. 基于Vue3+Unocss+Vite的AIGC平台开发\r\n 项目描述：chatGPU是一款集合AI生图、AI聊天的AI创意平台，负责整个平台前端技术设计选型\n  a) 基于unocss快速搭建页面、vite构建项目工程，保证迭代更加方便\n  b) 封装webSocket实现聊天数据流管道交换、以及多个通用组件方便快速迭代复用\n  c) 基于fingerprintjs实现浏览器指纹，监控用户试用次数\n2. 通用审核平台\n审核平台是一个入单、审核、质检、打标签、数据统计的平台\n  1) 负责首屏性能优化(打开速度从7s压缩到1s不到)，通过chunk分包、webpack压缩js/css、开启gzip、替换巨型三方库等实现\n  2) 基于Selection API以及自定义指令，调研开源方案，自研实现审核划线高亮以及标记等功能\n  3) 基于puppeteer开发了自动化脚本工具，实现一键运行并获取开发环境，提升了开发效率获得团队一致好评\n3.负责支撑其他小组多个业务项目开发，并参与前端容器化改造以及CI/CD构建优化',
    },
    {
      company_name: '作业帮',
      department_name: 'PC学生端',
      work_time: ['2020.11', '2022.03'],
      work_desc:
        '1. 融合直播间改造项目\r\n 项目描述：旨在解决pc端历史遗留问题带来的性能问题以及架构缺陷、同时不在单独维护多个项目以及重复业务代码。\n  a) 负责与公司兄弟部门协调合作，开发基于直播AI识别的node sdk(替代原有C++模块，节省1个rd的开发成本)\n  b) 负责学生课前、课后阶段的流程统一分发，以及课中阶段的师生h5互动开发，最终显著降低项目维护成本\n  c) 参与解决直播间崩溃、白屏、进教室慢、卡顿等性能优化问题，主要从chunk分包(加载慢)、压缩线上日志(引起卡顿)、懒加载(白屏)、BV&BW数据存储管理(读写频繁导致直播间崩溃)等方法入手解决，最终进直播间速度从3-4s优化至秒进，以及课中流畅运行。\n2. 基于Vue2.0+Egg.js架构的设计平台及后台系统\r\n 项目描述：设计师们日常使用的素材设计及管理的平台，根据PM统计最终节省运营人力30hc+\n  a) 基于html2canvas开发的海报生成，解决了包括导出图片加载失效&图片错位、中英文导出后基线不一致问题\n  b) 基于IntersectionObserver API，解决客户端首屏图片懒加载问题\n  c) 基于Egg.js，负责部分后端服务的维护工作。\n3. 基于smarty+php的初高直播间迁移到vue2.0\n 项目描述：该项目由于维护成本高，迭代速度缓慢。遂迁移至Vue快速迭代，最终完成节省人力1个rd\n  a) 负责协助同事迁移重构至Vue框架，主动分担同事任务并协助开发。',
    },
  ],
  skillList: [],
  projectList: [
    {
      project_name: '趣乐live小程序',
      project_role: '前端开发',
      project_time: '2021.01 - 2021.04',
      project_desc: '吃喝玩乐娱乐类小程序 ',
      project_content:
        '在完成产品需求的基础上，进行技术选型以及与2个前端伙伴共同完成开发任务。\n多种通用组件(canvas海报/商品团购/砍价/评论/瀑布流商品组件等)开发\n在需要兼容抖音小程序的需求下，经过对微信原生写法改造以及覆写，迁移原生小程序到uni-app中缩短开发时间并顺利上线',
    },
  ],
  workList: [
    {
      work_name: 'editable-div',
      work_desc:
        '可编辑元素区域，支持字数限制、自动拓展、富文本高亮、支持Vue2&Vue3',
      visit_link: 'https://github.com/Tzyito/editable-div',
    },
    {
      work_name: '流媒体助手',
      work_desc:
        '基于yt-dlp和ffmpeg的流媒体助手，支持视频资源下载、音视频分离以及字幕抓取（feature todo)，支持多个媒体站：youtube/b站/抖音/iqiyi等',
      visit_link: 'https://github.com/Tzyito/media-helper',
    },
    {
      work_name: 'pixel-ui组件库',
      work_desc: '基于monorep架构的组件库最佳实践，支持unocss',
      visit_link: 'https://github.com/Tzyito/pixel-ui',
    },
  ],
  aboutme: {
    aboutme_desc:
      ' 😈 能力项：沟通协调能力、执行力\n自驱型前端工程师，对于性能优化、在线直播以及数据审核领域有相关经验。热爱开源，对一些新奇的互联网技术充满兴趣',
  },
};
