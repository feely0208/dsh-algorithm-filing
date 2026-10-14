// 个性化推荐：推了就推了，没有关闭入口，也没有说明
async function recommend(userId) {
  const tags = await getUserTags(userId);
  const feed = await rankByTags(tags);
  return feed;
}
async function generateImage(prompt) {
  return await text2image(prompt);
}
