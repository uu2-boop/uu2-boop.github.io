// 双语言切换：中/英。默认中文，记忆选择。
(function () {
  'use strict';

  var I18N = {
    zh: {
      'skip': '跳至正文',
      'nav.home': '首页',
      'nav.notes': '学习笔记',
      'nav.ideas': '随想',
      'profile.byline': '大数据管理与应用 · 2026 级大一本科生',
      'profile.intro': '我在广东科技学院学习数据可视化与数据库，想把零散的业务记录整理成可以解释、可以复查的分析结果。',
      'profile.goal': '现阶段目标是扎实学好专业基础，积极参加课程实训和调研实践，慢慢积累数据分析相关能力；长远希望进入新能源、制造行业，成长为能够独当一面的项目负责人。',
      'profile.disclaimer': '课程示例：人物、学校、经历与联系方式均为虚构。',
      'profile.avatarAlt': '朱炼仪的头像',
      'link.honors': '荣誉证书',
      'link.goal': '目标岗位',
      'link.contact': '联系方式',
      'notes.title': '学习笔记',
      'notes.note1.title': '在 WSL 中预览本地网页 ↗',
      'notes.note1.desc': '记录从项目目录启动服务、在浏览器访问以及停止服务的方法。',
      'honors.title': '荣誉证书',
      'honors.h1': '挑战杯 院级优秀奖',
      'honors.h2': '第二届 AI 网页设计大赛 · 三等奖',
      'evaluation.title': '自我评价',
      'evaluation.p1': '本人学习态度端正，做事细心有耐心，具备良好的信息整理能力。',
      'evaluation.p2': '作为大数据管理与应用专业新生，我正在夯实 Python、Excel 等基础技能，对数据分析方向抱有浓厚兴趣。',
      'evaluation.p3': '善于倾听、团队协作，对待任务认真负责，愿意持续学习新知识，不断提升专业能力。',
      'goal.title': '目标岗位',
      'goal.role': '数据分析师',
      'goal.base': '当前基础',
      'goal.base.excel': '<strong>Excel：</strong>掌握基础数据整理与表格统计，完成课堂数据录入与汇总作业。',
      'goal.base.python': '<strong>Python：</strong>掌握基础语法，能写简单的循环、分支代码，完成课堂编程练习。',
      'goal.gap': '希望补齐的能力',
      'goal.gap.viz': '<strong>数据可视化：</strong>通过 Python 数据分析课程与实训项目学习 Matplotlib，学会绘制图表。',
      'goal.gap.db': '<strong>数据库基础：</strong>学习 MySQL 课程，掌握数据增删改查，学会存储和调取数据。',
      'goal.projects': '计划项目',
      'goal.p1.title': '大一 · 校园问卷数据统计分析',
      'goal.p1.role': '整理班级调研问卷，分析问卷结果',
      'goal.p1.how': '做法：用 Python + Excel 清洗问卷数据，制作可视化图表。',
      'goal.p1.out': '产出：数据分析报告、可视化网页。',
      'goal.p2.title': '大二 · 新能源行业公开数据小分析',
      'goal.p2.role': '简单分析新能源相关公开数据',
      'goal.p2.how': '做法：查找公开数据集，用 Python 做数据清洗、绘制趋势图。',
      'goal.p2.out': '产出：数据清洗脚本、可视化分析页面。',
      'goal.timeline': '四年行动',
      'goal.t1': '<strong>大一：</strong>完成 Python 基础、Excel 数据处理练习，做完问卷数据分析小项目。',
      'goal.t2': '<strong>大二：</strong>学习数据库，完成新能源公开数据的分析项目。',
      'goal.t3': '<strong>大三：</strong>完成一份行业数据分析作品，练习数据报告撰写。',
      'goal.t4': '<strong>大四：</strong>整理作品集，准备面试，争取进入制造/新能源相关企业实习。',
      'contact.title': '联系方式',
      'contact.email': '邮箱：',
      'footer.copy': '© 2026 朱炼仪 · 课程虚构示例',
      'footer.back': '返回正文'
    },
    en: {
      'skip': 'Skip to content',
      'nav.home': 'Home',
      'nav.notes': 'Notes',
      'nav.ideas': 'Ideas',
      'profile.byline': 'Big Data Management & Application · Class of 2026, freshman',
      'profile.intro': 'I study data visualization and databases at Guangdong University of Science & Technology, hoping to turn scattered business records into explainable, reviewable analysis.',
      'profile.goal': 'My near-term goal is to build a solid foundation through coursework, practical training and field research, gradually accumulating data-analysis skills; in the long run I hope to enter the new-energy or manufacturing industry and grow into an independent project lead.',
      'profile.disclaimer': 'Course sample: the person, school, experience and contact details are fictional.',
      'profile.avatarAlt': "Avatar of Zhu Lianyi",
      'link.honors': 'Honors',
      'link.goal': 'Target Role',
      'link.contact': 'Contact',
      'notes.title': 'Study Notes',
      'notes.note1.title': 'Preview a local website in WSL ↗',
      'notes.note1.desc': 'How to start a server from the project directory, open it in a browser, and stop it.',
      'honors.title': 'Honors & Certificates',
      'honors.h1': 'Challenge Cup · College-level Excellence Award',
      'honors.h2': '2nd AI Web Design Contest · 3rd Prize',
      'evaluation.title': 'Self-Assessment',
      'evaluation.p1': 'I am diligent, patient and detail-oriented, with good information-organization skills.',
      'evaluation.p2': 'As a freshman in Big Data Management & Application, I am consolidating fundamentals like Python and Excel, and I am deeply interested in data analysis.',
      'evaluation.p3': 'I am a good listener and team player, take tasks seriously, and am willing to keep learning and improving.',
      'goal.title': 'Target Role',
      'goal.role': 'Data Analyst',
      'goal.base': 'Current Foundation',
      'goal.base.excel': '<strong>Excel:</strong> basic data cleaning and tabular statistics; completed in-class data entry and summary tasks.',
      'goal.base.python': '<strong>Python:</strong> basic syntax; can write simple loops and conditionals for coursework.',
      'goal.gap': 'Skills to Build',
      'goal.gap.viz': '<strong>Data Visualization:</strong> learn Matplotlib via the Python data-analysis course and projects; able to plot charts.',
      'goal.gap.db': '<strong>Databases:</strong> take the MySQL course, master CRUD operations, store and retrieve data.',
      'goal.projects': 'Planned Projects',
      'goal.p1.title': 'Year 1 · Campus survey data analysis',
      'goal.p1.role': 'Clean and analyze class survey responses',
      'goal.p1.how': 'Approach: use Python + Excel to clean survey data and build visual charts.',
      'goal.p1.out': 'Output: a data-analysis report and a visualization webpage.',
      'goal.p2.title': 'Year 2 · Small analysis of public new-energy data',
      'goal.p2.role': 'Brief analysis of public new-energy datasets',
      'goal.p2.how': 'Approach: find public datasets, clean with Python, plot trend lines.',
      'goal.p2.out': 'Output: a cleaning script and a visualization page.',
      'goal.timeline': 'Four-Year Plan',
      'goal.t1': '<strong>Year 1:</strong> finish Python basics and Excel practice; complete a small survey-analysis project.',
      'goal.t2': '<strong>Year 2:</strong> learn databases; complete a public new-energy data project.',
      'goal.t3': '<strong>Year 3:</strong> produce an industry data-analysis work; practice writing data reports.',
      'goal.t4': '<strong>Year 4:</strong> assemble a portfolio, prep for interviews, aim for an internship in manufacturing / new energy.',
      'contact.title': 'Contact',
      'contact.email': 'Email: ',
      'footer.copy': '© 2026 Zhu Lianyi · Course fictional sample',
      'footer.back': 'Back to content'
    }
  };

  var STORAGE_KEY = 'site-lang';
  var current = localStorage.getItem(STORAGE_KEY) || 'zh';

  function apply(lang) {
    var dict = I18N[lang] || I18N.zh;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] != null) nodes[i].innerHTML = dict[key];
    }
    var altNodes = document.querySelectorAll('[data-i18n-alt]');
    for (var j = 0; j < altNodes.length; j++) {
      var akey = altNodes[j].getAttribute('data-i18n-alt');
      if (dict[akey] != null) altNodes[j].setAttribute('alt', dict[akey]);
    }
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? '中文' : 'English';
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function toggle() { apply(current === 'en' ? 'zh' : 'en'); }

  // Apply saved/default language before paint to avoid flash.
  apply(current);
  document.addEventListener('DOMContentLoaded', function () {
    apply(current);
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggle);
  });
})();
