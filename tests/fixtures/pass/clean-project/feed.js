// 合规：可关闭、有说明、有备案、生成内容带标识
const recommendEnabled = await getRecommendOptOut(userId);  // 关闭算法推荐开关
async function recommend(userId) {
  if (!recommendEnabled) return await rankByTime(userId);   // 关闭后立即停止个性化
  const tags = await getUserTags(userId);
  return await rankByTags(tags);
}
async function generateImage(prompt) {
  const img = await text2image(prompt);
  return markAsAiGenerated(img);   // AI 生成内容标识
}
