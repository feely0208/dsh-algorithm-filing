# @deepwhale-cn/dsh-algorithm-filing

**算法备案与告知** —— 查算法推荐服务有没有**关闭选项**、告知、备案。

## 不装它会怎样

你的 App 有「猜你喜欢」，代码大概是这样：

```js
async function recommend(userId) {
  const tags = await getUserTags(userId);
  return await rankByTags(tags);
}
```

**功能正常，但漏了一条硬要求：**

> **《互联网信息服务算法推荐管理规定》第十七条**
> 应当向用户提供选择或者删除用于针对其个人特征的标签的功能，
> **提供便捷的关闭算法推荐服务的选项。**
> 用户选择关闭算法推荐服务的，**应当立即停止提供相关服务**。

**这是「必须提供」，不是「建议提供」。** 而且关闭后要**真的停止** —— 不是记下偏好但照推。

## 关键词
**关键词**：算法备案 · 算法推荐 · 关闭算法推荐 · 关闭个性化 · 算法说明 · 深度合成标识 · AI 生成标识 · 算法治理
**Keywords**: algorithm filing · recommendation algorithm · opt-out · algorithm disclosure · AI-generated label

## 它查什么

| 级别 | 内容 | 依据 |
|---|---|---|
| 🔴 高 | 有推荐算法但**找不到关闭选项** | 算法推荐规定 17 条 |
| 🟡 中 | 找不到算法推荐**说明/公示** | 算法推荐规定 16 条 |
| 🟡 中 | 找不到**算法备案号** | 算法推荐规定 24 条 |
| 🟡 中 | AI 生成内容找不到**标识** | 深度合成规定 17 条 |

## 四条规则都是「条件适用」的

没有推荐算法 / 没有 AI 生成功能的项目，这四条**全部不适用** —— 引擎会记为「未运行」，
而不是报「找不到」。（这是条件规则能力 `check.when`，也是防假绿的一部分。）

## 安装

```bash
dsh plugin --profile web add @deepwhale-cn/dsh-algorithm-filing
# 或纯 CLI
npx @deepwhale-cn/dsh-algorithm-filing
```

![dsh-algorithm-filing 的检查报告示例](https://raw.githubusercontent.com/feely0208/dsh-algorithm-filing/main/docs/report.png)

## 用法

```bash
dsh-algorithm-filing --demo
dsh-algorithm-filing --list-rules
dsh-algorithm-filing --html r.html
```

## 边界

- **备案不是所有推荐服务都要** —— 第 24 条限定「具有舆论属性或社会动员能力」的服务
  （资讯、社交、直播、热搜类）。电商推荐可能不需要。**报出来请自行确认适用范围。**
- **不验证备案号真伪** —— 那要去网信办备案系统查，本工具不联网。
- **「关闭选项」只查代码里有没有** —— 产品上真的能关、关了真的停，需要人工验证。
- **靠关键词识别功能** —— 自定义命名会漏。
- 与 [dsh-consent-guard](https://github.com/feely0208/dsh-consent-guard) 分工：
  那个查**个人信息同意**，这个查**算法服务**的专门要求。

本插件是一个工具。使用者必须遵守所在地区法律法规，**对使用本项目造成的任何后果自行承担责任。**

## License

MIT © 深鲸 DeepWhale
