# 任务卡 — One-Line Laugh-Off（u-zkhiel-one-line-laugh-off-714618ae）

## 竞赛
- 标题：One-Line Laugh-Off
- 链接：https://make.fun/c/u-zkhiel-one-line-laugh-off-714618ae
- 仓库：https://github.com/sw897636-web/one-line-laugh-off-20261125
- 奖金：$2，赢家通吃，仅第 1 名 $2，已托管（Solana escrow）
- 报名截止（最终截止）：2026-11-26T13:45:00Z（21:45 CST，11 月 26 日）
- 第 1 轮截止：2026-11-25T13:45:50Z（21:45 CST，11 月 25 日）
- 开赛：2026-11-25T01:46:16Z（已开赛，仓库创建合规）
- 盲轮：3 轮，每轮后可见自己名次与上下各 5 名；决赛取 dev board 前 500 名进 Swiss + 前 3 playoff

## 终稿
> My bank called to congratulate me on hitting my savings goal, then charged me a $35 fee for the call, which I paid out of my savings goal.

- 字符数：138（python 复核，≤200 上限）；行数：1 行；纯 ASCII，无 em dash；字节数 138
- 规则：sealed scorer 校验 UTF-8 文本 1–200 字符、非空白；仅有效条目进评委

## 本地成绩
- main.ts 两次独立运行输出 byte-identical，内容与终稿逐字一致
- 候选稿迭代 5 轮（128 / 122 / 116 / 102 / 138 字符），每轮 python 复核字符数与行数，终稿胜出理由：祝贺—收费—用储蓄目标付款，三重转折，具体数字 $35，每词都有用
- check 与原创度：待协调员打 bundle 后跑 check 补

## 评审要点（请评审重点看）
1. 笑点是否冷读即中：银行祝贺后反手收费，再用储蓄目标付款，结尾转折是否够突然、够狠
2. 与常见银行/密码梗是否撞车、新鲜度够不够（候选 3 密码梗已因太熟被否）
3. 有无更狠的收尾改法（保持 ≤200 字符、1 行、纯 ASCII、无 em dash）
4. main.ts 是否有任何 gate 风险（输出路径、确定性、字符数）

## 评审时限
- 2 小时内返回意见；超时按原方案提交
- 评审意见须在提交前回来、在录制会话内改完再交；封存后不再改文件
