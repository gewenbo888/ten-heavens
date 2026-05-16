import { Bi, bi } from "./i18n";

export type Layer = {
  id: string;
  number: string;
  domain: Bi;
  essence: Bi;
  instances: { name: Bi; gloss: Bi }[];
  body: Bi;
};

export type World = {
  id: "physical" | "fictional" | "real" | "onchain";
  index: number;
  name: Bi;
  glyph: string;
  hue: string;
  hueSoft: string;
  tagline: Bi;
  thesis: Bi;
  layers: Layer[];
};

export const WORLDS: World[] = [
  {
    id: "physical",
    index: 1,
    name: bi("Physical World", "物理世界"),
    glyph: "◯",
    hue: "#b8a47a",
    hueSoft: "rgba(184,164,122,0.15)",
    tagline: bi("Where matter computes itself.", "物质自我演算的世界。"),
    thesis: bi(
      "The deepest stratum. Reality enforces itself through the laws of physics — no human consensus is required. Mathematics is the only language that survives every translation; chemistry stabilises matter; biology animates it. Every higher world ultimately settles to this layer.",
      "最底层的实在。物理定律自动执行，不需要任何人类共识。数学是唯一在所有翻译中存活的语言；化学使物质稳定；生物使物质有生命。一切更高的世界，最终都要在这一层结算。"
    ),
    layers: [
      {
        id: "math",
        number: "01",
        domain: bi("Mathematics", "数学"),
        essence: bi(
          "Necessary truth. The substrate every other layer borrows from.",
          "必然为真。其它所有层都从这里借用结构。"
        ),
        instances: [
          { name: bi("Quantum Mechanics", "量子力学"), gloss: bi("The arithmetic of the very small", "微观世界的算术") },
          { name: bi("Relativity", "相对论"), gloss: bi("The geometry of spacetime", "时空的几何学") },
          { name: bi("Merkle Trees", "默克尔树"), gloss: bi("Cryptographic commitment to large sets", "对海量集合的密码学承诺") },
          { name: bi("Zero-Knowledge Proofs", "零知识证明"), gloss: bi("Prove a fact without revealing it", "证明事实而不泄露其内容") },
        ],
        body: bi(
          "Mathematics is not invented by humans; it is discovered, in the same way a coastline is discovered. Once you accept the axioms, the conclusions follow whether anyone is watching or not. This is why the math layer is the deepest heaven — it is the only layer whose truth does not depend on belief, money, force, or law. When civilisation needs a settlement layer it cannot corrupt, it builds on mathematics: ratios for trade, geometry for architecture, calculus for engineering, cryptography for trust at internet scale, zero-knowledge proofs for trust without disclosure.",
          "数学不是人类发明的，而是被发现的，正如海岸线是被发现的。一旦接受公理，结论就自动成立，无论是否有人在看。因此数学这一层是最深的天 —— 它的真，不依赖信念、金钱、武力或法律。当文明需要一层不可腐蚀的结算层时，它就建立在数学之上：贸易用比例，建筑用几何，工程用微积分，互联网级的信任用密码学，无须披露的信任则用零知识证明。"
        ),
      },
      {
        id: "physics",
        number: "02",
        domain: bi("Physics", "物理"),
        essence: bi(
          "Conservation. What persists when nothing is done to it.",
          "守恒。无人介入时仍然存在的东西。"
        ),
        instances: [
          { name: bi("Gold", "黄金"), gloss: bi("Atomic number 79 — chemically inert, scarce, divisible", "原子序数 79 —— 化学惰性、稀缺、可分割") },
        ],
        body: bi(
          "Physical scarcity is the oldest store of value. Gold became money in dozens of unrelated civilisations because its atoms refuse to react with the world: it does not rust, tarnish, decay, or get eaten. You can bury it for a thousand years and dig up the same atoms. The physics layer offers civilisation a kind of memory — value frozen into the periodic table itself.",
          "物理稀缺性是最古老的价值储存方式。在数十个互不相识的文明中，黄金都成了货币 —— 因为它的原子拒绝与世界反应：不锈、不变色、不腐烂、不被吃掉。你可以把它埋一千年，挖出来仍是同样的原子。物理这一层为文明提供了一种记忆 —— 把价值冻结进元素周期表本身。"
        ),
      },
      {
        id: "chemistry",
        number: "03",
        domain: bi("Chemistry", "化学"),
        essence: bi(
          "Reaction. Stable rearrangements of matter.",
          "反应。物质的稳定重组。"
        ),
        instances: [
          { name: bi("Salt", "盐"), gloss: bi("NaCl — biologically essential, preservable, transportable", "氯化钠 —— 生物必需、可保存、可运输") },
        ],
        body: bi(
          "Salt was money before coins. Roman soldiers received a salarium — the root of 'salary'. Chemistry produces a different kind of scarcity than physics: not 'this element is rare in the crust', but 'this compound is essential to life and hard to keep'. Anywhere meat must be preserved or bodies replenished with sodium, salt becomes a unit of account. The chemistry layer is value tied to the metabolism of living systems.",
          "在硬币出现之前，盐就是货币。罗马士兵领取的薪饷叫 salarium ——「薪水」一词的词根。化学带来的稀缺，不同于物理：不是「这元素在地壳里少」，而是「这化合物对生命必需、又难以保存」。任何需要保存肉类或补充钠的地方，盐都会变成记账单位。化学这一层，是绑定在生命系统代谢上的价值。"
        ),
      },
      {
        id: "biology",
        number: "04",
        domain: bi("Biology", "生物"),
        essence: bi(
          "Replication. Patterns that copy themselves.",
          "复制。能够自我拷贝的模式。"
        ),
        instances: [
          { name: bi("Cowrie Shells", "海贝"), gloss: bi("Used as currency across Africa, China, India for millennia", "数千年间通行于非洲、中国、印度的货币") },
        ],
        body: bi(
          "For more than three thousand years, cowrie shells were the most widespread currency on Earth — used from the Maldives to inland China to the kingdoms of West Africa. Cowries are produced by a marine snail; they cannot be counterfeited inland, their shape is uniform, they are pleasant to handle, and they are durable. The biology layer is value secured by the costliness of the lifeform that produces it. The Chinese character 貝 (shell) is still the radical inside 財 wealth, 貴 noble, 賺 earn, 賠 lose — biology smuggled into language.",
          "三千多年间，海贝是地球上最普遍的货币 —— 从马尔代夫到中国内陆，再到西非诸国。海贝由海螺产生；在内陆无法伪造，形态统一，手感舒适，且耐久。生物这一层，是由生命体本身的产出成本来背书的价值。汉字「貝」至今仍是「財、貴、賺、賠」的部首 —— 生物被偷偷嵌入了语言。"
        ),
      },
      {
        id: "human",
        number: "05",
        domain: bi("Humanity", "人类"),
        essence: bi(
          "Labour and desire. The species that can promise.",
          "劳动与欲望。能够承诺的物种。"
        ),
        instances: [
          { name: bi("Labour", "劳动力"), gloss: bi("Hours of human attention and effort", "人类注意力与努力的时数") },
          { name: bi("Dopamine", "多巴胺"), gloss: bi("The neural currency of motivation", "动机的神经货币") },
        ],
        body: bi(
          "Humans are the only animal whose labour can be measured, stored, traded, and rented. Below the labour market sits a deeper marketplace — the dopamine economy, in which attention is allocated by a 200-million-year-old reward system. Every higher world (culture, law, finance, blockchain) is ultimately competing for the same neurotransmitter. Recognising this is the first step to designing systems that align with human nature instead of fighting it.",
          "人类是唯一一种劳动可以被度量、储存、交易、租用的动物。劳动力市场之下，还有一个更深的市场 —— 多巴胺经济，注意力被一套两亿年前的奖赏系统所分配。所有更高的世界（文化、法律、金融、链上）最终都在争夺同一种神经递质。意识到这一点，是设计「顺应人性」而非「对抗人性」之系统的第一步。"
        ),
      },
    ],
  },
  {
    id: "fictional",
    index: 2,
    name: bi("Fictional World", "虚构世界"),
    glyph: "✦",
    hue: "#b89cf5",
    hueSoft: "rgba(184,156,245,0.16)",
    tagline: bi("Where shared belief becomes real force.", "共同的信念变为真实力量的世界。"),
    thesis: bi(
      "The world humans add on top of biology — the only one of the ten heavens that does not exist without storytellers. Money, brands, gods, nations, corporations, scoreboards: all of these are fiction in the strict sense that they only function while a critical mass of minds agrees to treat them as real. This is also the world with the highest leverage; one good story can mobilise billions.",
      "人类在生物之上加盖的世界 —— 十重天中唯一离开讲故事者就不存在的一层。货币、品牌、神祇、国家、公司、积分榜：严格地说都是虚构 —— 它们之所以运转，只是因为足够多的心智同意把它们当真。这同时也是杠杆率最高的一层；一个好故事可以动员数十亿人。"
    ),
    layers: [
      {
        id: "culture",
        number: "06",
        domain: bi("Culture", "文化"),
        essence: bi(
          "Shared meaning. The fabric that makes coordination possible.",
          "共同意义。让协作成为可能的织物。"
        ),
        instances: [
          { name: bi("Consensus", "共识"), gloss: bi("The substance every collective action is made of", "一切集体行动的实质") },
          { name: bi("Measure of Value", "价值尺度"), gloss: bi("The cultural choice of what counts as worth", "文化对「何为有价」的选择") },
        ],
        body: bi(
          "Culture is the operating system humans run on top of biology. It decides which colour means power, which sound means danger, which person counts as kin, which contract counts as binding. All higher layers — law, finance, blockchain — are downstream of cultural consensus. A blockchain is a culture with cryptographic enforcement; a nation is a culture with a monopoly on violence; a religion is a culture with a story long enough to outlive any individual. The technology of the next century will be measured by how well it composes with culture, not by how much it overrides it.",
          "文化是人类在生物之上运行的操作系统。它决定哪个颜色代表权力，哪个声音代表危险，哪些人算作族人，哪份契约算作有效。一切更高的层 —— 法律、金融、链上 —— 都是文化共识的下游。区块链是带有密码学执行的文化；国家是垄断暴力的文化；宗教是叙事长到能活过任何个体的文化。下个世纪的科技，将以「与文化的合奏程度」而非「对文化的覆盖程度」来衡量。"
        ),
      },
    ],
  },
  {
    id: "real",
    index: 3,
    name: bi("Real World", "现实世界"),
    glyph: "▣",
    hue: "#f0c14b",
    hueSoft: "rgba(240,193,75,0.18)",
    tagline: bi("Where law and finance enforce fiction.", "法律与金融为虚构上锁的世界。"),
    thesis: bi(
      "The real world is the layer where institutions enforce the fictions humans have agreed on. A dollar bill is paper; a deed is paper; a passport is paper. What makes them 'real' is that a state will use violence to back them up and a banking system will keep their ledgers consistent. The real world is essentially crystallised fiction — fiction that has been hardened by enforcement.",
      "现实世界是「制度为人类商定的虚构上锁」的那一层。美元是纸，房契是纸，护照也是纸。让它们成为「真」的，是国家会用暴力来支撑它们、银行体系会让它们的账本保持一致。现实世界本质上是结晶化的虚构 —— 被「执行」固化后的虚构。"
    ),
    layers: [
      {
        id: "law",
        number: "07",
        domain: bi("Law", "法律"),
        essence: bi(
          "Enforceable consensus. Culture with a monopoly on violence.",
          "可执行的共识。垄断暴力的文化。"
        ),
        instances: [
          { name: bi("Nation-State", "国家"), gloss: bi("The largest commitment device humans have built", "人类造出的最大承诺机器") },
          { name: bi("Fiat Currency", "法币"), gloss: bi("Money backed by law rather than substance", "由法律而非实物背书的货币") },
        ],
        body: bi(
          "Law turns culture into a commitment device. A handshake becomes a contract; a contract becomes evidence; evidence becomes a judgement; a judgement becomes an action by the state. The whole structure depends on the willingness of citizens to recognise the chain. When a nation issues fiat, it is borrowing trust from its legal monopoly: every banknote is a promise that the state's courts, police, and tax authority all still work. This is why fiat strength and rule-of-law strength are deeply correlated, and why crypto can be read as a bet that some of this trust can be migrated onto mathematics.",
          "法律把文化变成了承诺机器。握手成契约，契约成证据，证据成判决，判决成国家的行动。整套结构依赖公民对这条链的承认。当国家发行法币时，它是在向其法律垄断借信用：每张钞票都是一句承诺 —— 国家的法院、警察、税务系统都仍在运作。这就是为什么法币强弱与法治强弱深度相关；也是为什么加密货币可以被读作一个赌注 —— 把其中一部分信任迁移到数学之上。"
        ),
      },
      {
        id: "finance",
        number: "08",
        domain: bi("Finance", "金融"),
        essence: bi(
          "Time-shifting. Moving value across years and risks.",
          "时间转移。把价值跨越年份与风险地搬运。"
        ),
        instances: [
          { name: bi("USD", "美金"), gloss: bi("The world's reserve unit of account since Bretton Woods", "布雷顿森林以来世界的储备记账单位") },
          { name: bi("Banknotes", "美钞"), gloss: bi("Physical bearer instruments of the same unit", "同一单位的实物持有者票据") },
        ],
        body: bi(
          "Finance is the technology of moving value across time and through risk. A pension is a tunnel through fifty years; an option is a tunnel through volatility; a bond is a tunnel through inflation. Modern finance composes culture, law, and mathematics into instruments that allow strangers to cooperate across continents and across generations. Its core innovation is the unit of account — a single number on a ledger that can be promised, owed, lent, and discounted. The dollar is the most successful such unit ever built; the question of the 21st century is whether something composable with mathematics will replace it.",
          "金融是把价值跨越时间、穿越风险的技术。退休金是穿越五十年的隧道，期权是穿越波动率的隧道，债券是穿越通胀的隧道。现代金融把文化、法律、数学组合成各种工具，使陌生人能跨越大陆和世代地合作。它最核心的创新是「记账单位」—— 账本上的一个数字，可被承诺、被欠下、被借贷、被贴现。美元是史上最成功的这种单位；二十一世纪的问题，是它会不会被「能与数学合奏的某种东西」取代。"
        ),
      },
    ],
  },
  {
    id: "onchain",
    index: 4,
    name: bi("On-chain World", "链上世界"),
    glyph: "ψ",
    hue: "#61f5b3",
    hueSoft: "rgba(97,245,179,0.18)",
    tagline: bi("Where mathematics enforces fiction directly.", "数学直接为虚构上锁的世界。"),
    thesis: bi(
      "The newest heaven. On-chain, value is enforced by mathematics instead of by the state. Smart contracts replace courts; cryptographic proofs replace audits; consensus protocols replace settlement banks. For the first time in history, a fiction can be made real without asking a single government to recognise it. This is what makes the on-chain world simultaneously fragile (it cannot lean on legacy enforcement) and powerful (it composes globally by default).",
      "最新的那一重天。在链上，价值由数学而非国家来执行。智能合约取代法庭，密码学证明取代审计，共识协议取代结算银行。历史上第一次，一个虚构不需要任何政府承认就能成为「真」。这同时让链上世界既脆弱（无法依赖旧式执行）又强大（默认即可全球合奏）。"
    ),
    layers: [
      {
        id: "blockchain",
        number: "09",
        domain: bi("Blockchain", "区块链"),
        essence: bi(
          "Verifiable ledger. State machine with no operator.",
          "可验证的账本。没有运营者的状态机。"
        ),
        instances: [
          { name: bi("Bitcoin", "比特币"), gloss: bi("Digital scarcity as monetary policy", "把数字稀缺性写成了货币政策") },
          { name: bi("Ethereum", "以太坊"), gloss: bi("Programmable state, world computer", "可编程的状态，世界计算机") },
          { name: bi("Psy", "Psy"), gloss: bi("ZK-native execution, privacy as default", "ZK 原生执行，隐私即默认") },
        ],
        body: bi(
          "A blockchain is a public state machine that anyone can verify and no one can quietly rewrite. Bitcoin proved that scarcity could be implemented in software; Ethereum proved that arbitrary rules could be enforced the same way; Psy and its peers are now proving that privacy and verifiability can coexist via zero-knowledge proofs. Each generation of chain has reduced the amount of trust civilisation has to place in any single institution — and increased the amount it has to place in mathematics.",
          "区块链是一台公共状态机：人人可验证，无人能悄悄改写。比特币证明了稀缺可以写在软件里；以太坊证明了任意规则可以同样被执行；Psy 等新一代链正在证明：隐私与可验证性能够通过零知识证明并存。每一代链都减少了文明必须托付给某个机构的信任，同时增加了必须托付给数学的信任。"
        ),
      },
      {
        id: "metaverse",
        number: "10",
        domain: bi("Metaverse", "元宇宙"),
        essence: bi(
          "Persistent simulated world. Where on-chain value becomes scenery.",
          "持久的模拟世界。链上价值在这里变成了场景。"
        ),
        instances: [
          { name: bi("RWA", "RWA"), gloss: bi("Real-World Assets brought on-chain", "把现实世界资产带上链") },
        ],
        body: bi(
          "The tenth heaven is the layer where on-chain value becomes inhabitable. A metaverse is not a game; it is a persistent simulation in which on-chain assets are scenery, identity, weather, and economy. RWA is the inverse current: real-world assets — treasury bills, real estate, carbon credits, invoices — being lifted into this simulation so that they can be composed with everything else. The two arrows together complete the loop: the physical world flowing up into mathematics, mathematics flowing back down into experience.",
          "第十重天，是「让链上价值变得可居住」的那一层。元宇宙不是游戏，它是一个持久模拟：链上资产是其中的场景、身份、天气与经济。RWA 是反向的洋流：现实世界的资产 —— 国债、不动产、碳信用、应收账款 —— 被抬上来，与一切其它东西可组合。两支箭合起来，完成了循环：物理世界向上流入数学，数学再向下流入体验。"
        ),
      },
    ],
  },
];

export type Mapping = {
  id: string;
  name: Bi;
  arrow: Bi;
  from: Bi;
  to: Bi;
  hue: string;
  example: Bi;
  body: Bi;
};

export const MAPPINGS: Mapping[] = [
  {
    id: "rwa",
    name: bi("RWA", "RWA"),
    arrow: bi("Real World → On-chain", "现实世界 → 链上"),
    from: bi("Real World", "现实世界"),
    to: bi("On-chain World", "链上世界"),
    hue: "#61f5b3",
    example: bi(
      "Tokenised US Treasuries, on-chain real estate, deposit receipts for gold.",
      "代币化美债、链上不动产、黄金存托凭证。"
    ),
    body: bi(
      "RWA is the act of teleporting a real-world asset into the on-chain world while keeping its original anchor intact. A bond becomes a token; a building becomes a vault; a barrel of oil becomes a receipt. The hard part is not the token — it is the legal scaffolding that guarantees the off-chain object remains tied to the on-chain symbol. Done correctly, RWA gives the on-chain world access to the entire balance sheet of the planet.",
      "RWA 是把现实世界资产传送上链，同时保持原始锚定的过程。债券变成代币，建筑变成金库，一桶石油变成凭证。难的不是发币，而是让链下实物与链上符号保持绑定的法律支架。做得对，RWA 就让链上世界接入了整个地球的资产负债表。"
    ),
  },
  {
    id: "etf",
    name: bi("ETF", "ETF"),
    arrow: bi("On-chain → Real World", "链上 → 现实世界"),
    from: bi("On-chain World", "链上世界"),
    to: bi("Real World", "现实世界"),
    hue: "#f0c14b",
    example: bi(
      "Bitcoin ETF, Ethereum ETF — chain-native assets accessible through brokerage accounts.",
      "比特币 ETF、以太坊 ETF —— 链上原生资产通过券商账户即可买到。"
    ),
    body: bi(
      "An ETF is the inverse of RWA: it wraps an on-chain asset so that a brokerage account can hold it. The buyer never touches a wallet, never signs a transaction, never custody a key. The asset still lives on-chain, but the legal wrapper makes it real-world-shaped. ETFs are the diplomatic passports of crypto — the form a chain asset wears when it visits a TradFi country.",
      "ETF 是 RWA 的反向操作：把链上资产包好，让券商账户能持有。买方从不接触钱包、不签交易、不保管私钥。资产仍然在链上，但法律外壳把它做成了「现实世界形状」。ETF 是加密世界的外交护照 —— 链上资产去 TradFi 国家时穿的那件衣服。"
    ),
  },
  {
    id: "crosschain",
    name: bi("Cross-chain", "跨链"),
    arrow: bi("On-chain ⇌ On-chain", "链上 ⇌ 链上"),
    from: bi("On-chain", "链上"),
    to: bi("On-chain", "链上"),
    hue: "#9ad8ff",
    example: bi(
      "Bitcoin → Ethereum (wBTC), Ethereum → L2 (canonical bridges), Ethereum → Psy.",
      "比特币 → 以太坊（wBTC）、以太坊 → L2（官方桥）、以太坊 → Psy。"
    ),
    body: bi(
      "Cross-chain is on-chain-to-on-chain mapping. The same asset is allowed to live in two ledgers at once by locking it on one side and minting a derivative on the other. The discipline of cross-chain is the discipline of bridges: a bridge that fails turns a unique asset into two non-equivalent copies. Done with ZK proofs, cross-chain becomes mathematics-to-mathematics — the cleanest of the five mappings.",
      "跨链是链对链的映射。同一资产被允许同时存在于两个账本：一侧锁定，另一侧铸出衍生品。跨链的纪律是桥的纪律：桥一旦失守，唯一的资产就裂成两份不等价的拷贝。当用零知识证明实现时，跨链就变成数学对数学 —— 五种映射中最干净的一种。"
    ),
  },
  {
    id: "abs",
    name: bi("ABS", "ABS"),
    arrow: bi("Real World → Finance", "现实世界 → 金融"),
    from: bi("Real World", "现实世界"),
    to: bi("Finance", "金融"),
    hue: "#ff9d6c",
    example: bi(
      "Mortgage-backed securities, auto-loan ABS, credit-card receivables, music royalties.",
      "按揭抵押证券、汽车贷款 ABS、信用卡应收款、音乐版税。"
    ),
    body: bi(
      "ABS — asset-backed securitisation — is the finance world's version of RWA. Take a stream of real-world cash flows (rents, loan repayments, royalties) and re-package them into a security that can be sold to investors with different risk appetites. ABS taught civilisation how to turn anything that has a future cash flow into a tradable instrument; RWA is now doing the same trick on a global, programmable ledger.",
      "ABS —— 资产支持证券化 —— 是金融世界的 RWA。取一串现实世界的现金流（房租、还贷、版税），重新打包成证券，卖给风险偏好不同的投资人。ABS 教会了文明：任何有未来现金流的东西，都可以被做成可交易的工具；RWA 正在全球可编程账本上重演同一把戏。"
    ),
  },
  {
    id: "anchor",
    name: bi("Anchoring", "锚定"),
    arrow: bi("Mechanism for all four arrows above", "上述四种映射的执行机制"),
    from: bi("Any layer", "任意层"),
    to: bi("Any layer", "任意层"),
    hue: "#c8c8d2",
    example: bi(
      "Arbitrage holds stablecoin pegs; oracle algorithms hold synthetic prices; over-collateralisation absorbs volatility.",
      "套利维持稳定币的锚；预言机算法维持合成资产的价格；超额抵押吸收波动。"
    ),
    body: bi(
      "Every mapping above is only as strong as its anchor. Anchoring is the discipline of keeping a representation tied to its referent — usually by arbitrage (if the on-chain price drifts, traders profit by trading until it doesn't) or by algorithms (rebalancing, over-collateralisation, oracle attestations). The history of crypto is mostly the history of anchors that held and anchors that broke. Designing a durable mapping is, in the end, designing a durable anchor.",
      "上述每一种映射，强度都不超过它的锚。锚定的纪律，是让「表达」始终绑在「所指」上 —— 通常靠套利（链上价格一漂，交易者就靠交易获利，直到不漂为止），或靠算法（再平衡、超额抵押、预言机签证）。加密货币的历史，大部分就是锚的兴亡史。设计一种持久的映射，最终就是设计一只持久的锚。"
    ),
  },
];

export type Era = {
  id: string;
  range: Bi;
  title: Bi;
  layer: Bi;
  body: Bi;
};

export const HISTORY: Era[] = [
  {
    id: "shells",
    range: bi("3000 BCE — 1500 CE", "公元前 3000 — 公元 1500"),
    title: bi("Cowrie Shells", "海贝时代"),
    layer: bi("Biology", "生物"),
    body: bi(
      "The most widely-used money in human history. Cowries from the Maldives travelled by camel caravan to West Africa and by boat to the Chinese coast, anchoring trade for three thousand years.",
      "人类历史上最广泛使用的货币。马尔代夫的海贝由骆驼商队送到西非，由船只送到中国沿海，为三千年的贸易上锚。"
    ),
  },
  {
    id: "salt",
    range: bi("1000 BCE — 800 CE", "公元前 1000 — 公元 800"),
    title: bi("Salt", "盐税时代"),
    layer: bi("Chemistry", "化学"),
    body: bi(
      "Salt enabled food preservation before refrigeration, making cities possible. Roman soldiers were paid in salt; Chinese dynasties built empires on the salt monopoly.",
      "在冷藏出现之前，盐让食物保存成为可能，从而让城市成为可能。罗马士兵以盐为饷；中国历代王朝靠盐铁专卖建立帝国。"
    ),
  },
  {
    id: "gold",
    range: bi("600 BCE — 1971 CE", "公元前 600 — 公元 1971"),
    title: bi("Gold and Silver Coinage", "金银货币"),
    layer: bi("Physics", "物理"),
    body: bi(
      "First standardised coins struck in Lydia, c. 600 BCE. For two and a half millennia, the world's units of account were rooted in the periodic table. The gold standard formally ended on 15 August 1971.",
      "公元前约 600 年，吕底亚铸出第一批标准化硬币。在此后两千五百年里，世界的记账单位扎根于元素周期表。金本位正式终结于 1971 年 8 月 15 日。"
    ),
  },
  {
    id: "fiat",
    range: bi("1971 — present", "1971 至今"),
    title: bi("Pure Fiat", "纯法币时代"),
    layer: bi("Law", "法律"),
    body: bi(
      "Nixon closed the gold window. For the first time in history, no major currency was backed by physical substance — only by the law and tax power of the issuing state. Global money supply expanded ~70× in the following fifty years.",
      "尼克松关闭了黄金窗口。历史上第一次，主要货币都不再由实物背书 —— 只由发行国的法律与税权背书。其后五十年，全球货币供应扩张约七十倍。"
    ),
  },
  {
    id: "digital",
    range: bi("1995 — present", "1995 至今"),
    title: bi("Digital Money", "数字货币"),
    layer: bi("Finance ↗ Math", "金融 ↗ 数学"),
    body: bi(
      "Online banking, PayPal, Alipay, WeChat Pay, Visa networks — money becomes information moving over wires. Settlement remains in the legacy banking layer, but the user experience migrates to software.",
      "网上银行、PayPal、支付宝、微信支付、Visa 网络 —— 货币变成在电线上流动的信息。结算仍在旧银行层，但用户体验已迁移到软件。"
    ),
  },
  {
    id: "btc",
    range: bi("2009 — present", "2009 至今"),
    title: bi("Bitcoin", "比特币"),
    layer: bi("Mathematics", "数学"),
    body: bi(
      "Satoshi Nakamoto publishes a nine-page paper. For the first time, scarcity is enforced by software rather than by mining a mineral. The settlement layer migrates from banks to mathematics.",
      "中本聪发表九页论文。历史上第一次，稀缺由软件而非开采矿物来执行。结算层从银行迁移到数学。"
    ),
  },
  {
    id: "eth",
    range: bi("2015 — present", "2015 至今"),
    title: bi("Programmable Chains", "可编程链"),
    layer: bi("Mathematics", "数学"),
    body: bi(
      "Ethereum extends the trick from money to arbitrary state machines. Smart contracts, DAOs, NFTs, DeFi, stablecoins — every financial primitive is rebuilt as code that runs without an operator.",
      "以太坊把这个戏法从货币扩展到任意状态机。智能合约、DAO、NFT、DeFi、稳定币 —— 每一种金融原语都被重写成无需运营者的代码。"
    ),
  },
  {
    id: "zk",
    range: bi("2022 — present", "2022 至今"),
    title: bi("ZK-Native Chains", "ZK 原生链"),
    layer: bi("Mathematics", "数学"),
    body: bi(
      "Zero-knowledge proofs go production. Privacy and verifiability stop being a trade-off. Chains like Psy treat ZK as the base case, not the add-on — bringing institutional-grade privacy to the public chain world.",
      "零知识证明走向生产。隐私与可验证性不再互斥。Psy 等链把 ZK 作为基础情形，而非附加项 —— 把机构级隐私带入公链世界。"
    ),
  },
  {
    id: "rwa-era",
    range: bi("2024 — ?", "2024 — ?"),
    title: bi("RWA + Metaverse", "RWA 与元宇宙"),
    layer: bi("Composition of all worlds", "全部世界的合奏"),
    body: bi(
      "Tokenised treasuries pass $1B, then $10B. Real estate, royalties, carbon credits, private credit — all start migrating on-chain. The metaverse, long mocked, returns as the inhabitable surface on top of this stack.",
      "代币化美债先后突破十亿、百亿美元。不动产、版税、碳信用、私募信贷 —— 都开始上链。被嘲笑多年的元宇宙，作为这套堆栈之上「可居住的表面」回归。"
    ),
  },
];

export type FutureNode = {
  id: string;
  title: Bi;
  body: Bi;
};

export const FUTURE: FutureNode[] = [
  {
    id: "zk-bedrock",
    title: bi("ZK as the New Bedrock", "ZK 成为新基岩"),
    body: bi(
      "When proofs become cheap enough, the question shifts from 'whom do we trust?' to 'what can be proven?'. Identity, KYC, audits, compliance — each gets re-implemented as a proof rather than a permission. The mathematical layer becomes load-bearing for civilisation in a way it has never been before.",
      "当证明足够便宜时，问题就从「我们信任谁」转向「能证明什么」。身份、KYC、审计、合规 —— 都被重写成证明，而非许可。数学层第一次成为文明的承重墙。"
    ),
  },
  {
    id: "stack-composes",
    title: bi("The Whole Stack Composes", "整个堆栈开始合奏"),
    body: bi(
      "RWA brings real-world cash flows up; ETFs send chain assets down; cross-chain stitches the on-chain world together; ABS keeps doing the same trick the old way. For the first time, all four mappings run in parallel — and the resulting system is greater than the sum of its layers.",
      "RWA 把现实世界的现金流抬上来；ETF 把链上资产送回去；跨链把链上世界缝在一起；ABS 仍在用老办法做同一件事。四种映射首次并行运转，整体大于各层之和。"
    ),
  },
  {
    id: "metaverse-as-surface",
    title: bi("Metaverse as the Inhabitable Surface", "元宇宙作为可居住表面"),
    body: bi(
      "The metaverse is not VR goggles. It is the rendered top of the stack — wherever on-chain value becomes scenery, identity, economy, and weather. AR glasses, agent-driven games, autonomous market makers, AI companions backed by on-chain reputation: each is one petal of this surface.",
      "元宇宙不是 VR 头盔。它是堆栈被渲染出来的那一层 —— 一切链上价值在那里成为场景、身份、经济与天气。AR 眼镜、智能体驱动的游戏、自治做市商、由链上声誉背书的 AI 伙伴：都是这层表面的一瓣。"
    ),
  },
  {
    id: "human-meaning",
    title: bi("Humans Remain the Carriers", "人类仍是这一切的载体"),
    body: bi(
      "No matter how high the stack goes, every layer eventually settles to a dopamine response in a human nervous system. The civilisations that win the next century will be the ones that build mathematically-rigorous systems that are also kind to the 200-million-year-old brain underneath. The stack is not built to replace humans; it is built around them.",
      "无论堆栈叠多高，每一层最终都要在人类神经系统的多巴胺响应中结算。下个世纪的赢家文明，将是那些既数学严谨、又善待两亿年老脑的系统。这套堆栈不是用来取代人类，而是围绕人类而建。"
    ),
  },
];
