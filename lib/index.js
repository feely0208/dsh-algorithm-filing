import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'algorithm-filing',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/algorithm-filing.md',
  binFile: 'bin/cli.mjs',
  description: '查算法推荐服务有没有备案、有没有告知、有没有【关闭选项】—— 第 17 条是硬要求',
  whenToUse: 'TODO：写清什么时候该用（用户会说的话也列上）',
});
