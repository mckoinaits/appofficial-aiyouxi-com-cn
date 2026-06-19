// assets/content-map.js
// Content partition, keyword tags, and search filtering for the site

const contentRegistry = {
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["爱游戏", "首页推荐", "热门"],
      url: "https://appofficial-aiyouxi.com.cn/",
      summary: "平台首页，展示精选内容与爱游戏推荐"
    },
    {
      id: "games",
      title: "游戏库",
      tags: ["爱游戏", "单机", "联机", "角色扮演", "动作"],
      url: "https://appofficial-aiyouxi.com.cn/games",
      summary: "收录各类爱游戏平台游戏，分类浏览"
    },
    {
      id: "news",
      title: "资讯",
      tags: ["爱游戏", "新闻", "攻略", "评测"],
      url: "https://appofficial-aiyouxi.com.cn/news",
      summary: "爱游戏相关资讯、攻略与评测"
    },
    {
      id: "community",
      title: "社区",
      tags: ["爱游戏", "论坛", "讨论", "玩家"],
      url: "https://appofficial-aiyouxi.com.cn/community",
      summary: "爱游戏玩家社区，讨论与分享"
    },
    {
      id: "about",
      title: "关于我们",
      tags: ["爱游戏", "公司", "联系", "合作"],
      url: "https://appofficial-aiyouxi.com.cn/about",
      summary: "了解爱游戏平台及联系方式"
    }
  ],
  keywords: [
    "爱游戏",
    "游戏推荐",
    "热门游戏",
    "新游预约",
    "游戏攻略",
    "玩家社区",
    "官方资讯"
  ]
};

function filterSectionsByTag(tag) {
  const results = [];
  for (const section of contentRegistry.sections) {
    const lowerTag = tag.toLowerCase();
    for (const t of section.tags) {
      if (t.toLowerCase().includes(lowerTag)) {
        results.push(section);
        break;
      }
    }
  }
  return results;
}

function searchSections(query) {
  const lowerQuery = query.toLowerCase();
  const matched = [];
  for (const section of contentRegistry.sections) {
    if (
      section.title.toLowerCase().includes(lowerQuery) ||
      section.summary.toLowerCase().includes(lowerQuery) ||
      section.tags.some(t => t.toLowerCase().includes(lowerQuery))
    ) {
      matched.push(section);
    }
  }
  return matched;
}

function getAllTags() {
  const tagSet = new Set();
  for (const section of contentRegistry.sections) {
    for (const tag of section.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet);
}

function getSectionById(id) {
  for (const section of contentRegistry.sections) {
    if (section.id === id) {
      return section;
    }
  }
  return null;
}

function getSectionsByKeyword(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  const result = [];
  for (const section of contentRegistry.sections) {
    if (
      section.title.toLowerCase().includes(lowerKeyword) ||
      section.summary.toLowerCase().includes(lowerKeyword) ||
      section.tags.some(t => t.toLowerCase().includes(lowerKeyword))
    ) {
      result.push(section);
    }
  }
  return result;
}

function getKeywordSuggestions(partial) {
  const lowerPartial = partial.toLowerCase();
  return contentRegistry.keywords.filter(kw =>
    kw.toLowerCase().includes(lowerPartial)
  );
}

// Example usage (not executed automatically)
// console.log(filterSectionsByTag('爱游戏'));
// console.log(searchSections('攻略'));
// console.log(getAllTags());