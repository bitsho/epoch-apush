export type Person = {
  id: string;
  nameZh: string;
  nameEn: string;
  years: string;
  image: string;
  wiki: string;
  distractors: string[];
};

export type Quote = {
  id: string;
  personId: string;
  text: string;
  source: string;
  date: string;
  sourceUrl: string;
  contextZh: string;
  contextEn: string;
  apush: string;
};

export const people: Person[] = [
  { id:'washington', nameZh:'乔治·华盛顿', nameEn:'George Washington', years:'1732–1799', image:'/portraits/washington.png', wiki:'https://en.wikipedia.org/wiki/George_Washington', distractors:['jefferson','adams','jackson','lincoln','douglass'] },
  { id:'jefferson', nameZh:'托马斯·杰斐逊', nameEn:'Thomas Jefferson', years:'1743–1826', image:'/portraits/jefferson.png', wiki:'https://en.wikipedia.org/wiki/Thomas_Jefferson', distractors:['washington','adams','jackson','lincoln','douglass'] },
  { id:'adams', nameZh:'约翰·亚当斯', nameEn:'John Adams', years:'1735–1826', image:'/portraits/adams.png', wiki:'https://en.wikipedia.org/wiki/John_Adams', distractors:['washington','jefferson','jackson','lincoln','douglass'] },
  { id:'jackson', nameZh:'安德鲁·杰克逊', nameEn:'Andrew Jackson', years:'1767–1845', image:'/portraits/jackson.png', wiki:'https://en.wikipedia.org/wiki/Andrew_Jackson', distractors:['jefferson','adams','lincoln','douglass','theodore-roosevelt'] },
  { id:'lincoln', nameZh:'亚伯拉罕·林肯', nameEn:'Abraham Lincoln', years:'1809–1865', image:'/portraits/lincoln.png', wiki:'https://en.wikipedia.org/wiki/Abraham_Lincoln', distractors:['douglass','jackson','washington','jefferson','mlk'] },
  { id:'douglass', nameZh:'弗雷德里克·道格拉斯', nameEn:'Frederick Douglass', years:'1818–1895', image:'/portraits/douglass.png', wiki:'https://en.wikipedia.org/wiki/Frederick_Douglass', distractors:['lincoln','jackson','jefferson','mlk','washington'] },
  { id:'theodore-roosevelt', nameZh:'西奥多·罗斯福', nameEn:'Theodore Roosevelt', years:'1858–1919', image:'/portraits/theodore-roosevelt.png', wiki:'https://en.wikipedia.org/wiki/Theodore_Roosevelt', distractors:['wilson','fdr','jackson','mlk','lincoln'] },
  { id:'wilson', nameZh:'伍德罗·威尔逊', nameEn:'Woodrow Wilson', years:'1856–1924', image:'/portraits/wilson.png', wiki:'https://en.wikipedia.org/wiki/Woodrow_Wilson', distractors:['theodore-roosevelt','fdr','washington','jefferson','mlk'] },
  { id:'fdr', nameZh:'富兰克林·D·罗斯福', nameEn:'Franklin D. Roosevelt', years:'1882–1945', image:'/portraits/fdr.png', wiki:'https://en.wikipedia.org/wiki/Franklin_D._Roosevelt', distractors:['theodore-roosevelt','wilson','mlk','jackson','lincoln'] },
  { id:'mlk', nameZh:'马丁·路德·金', nameEn:'Martin Luther King Jr.', years:'1929–1968', image:'/portraits/mlk.png', wiki:'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.', distractors:['douglass','lincoln','fdr','theodore-roosevelt','jefferson'] },
];

export const quotes: Quote[] = [
  { id:'washington-1', personId:'washington', text:'The preservation of the sacred fire of liberty, and the destiny of the Republican model of Government, are justly considered as deeply, perhaps as finally, staked on the experiment entrusted to the hands of the American people.', source:'First Inaugural Address', date:'April 30, 1789', sourceUrl:'https://www.archives.gov/milestone-documents/president-george-washingtons-first-inaugural-speech', contextZh:'华盛顿在纽约联邦厅宣誓成为首任总统后发表此演说。新宪法刚刚生效，联邦政府能否在没有君主的情况下稳定运作仍是未知数；他把共和国的成败描述为一场由美国人民共同承担的历史实验。', contextEn:'At the launch of the new constitutional government, Washington framed republican self-rule as an experiment whose success depended on public virtue and responsible leadership.', apush:'新宪法、共和主义、公民美德' },
  { id:'washington-2', personId:'washington', text:'It is our true policy to steer clear of permanent alliances with any portion of the foreign world.', source:'Farewell Address', date:'September 19, 1796', sourceUrl:'https://www.mountvernon.org/education/primary-source-collections/primary-source-collections/article/washington-s-farewell-address-1796', contextZh:'在法国大革命战争撕裂欧洲、美国国内又围绕英法形成党争之际，华盛顿告诫后人避免永久性结盟。他并非主张完全孤立，而是希望年轻共和国保留外交行动自由，避免被欧洲权力政治拖入战争。', contextEn:'Amid European war and fierce party conflict at home, Washington warned against permanent alliances while leaving room for temporary cooperation when national interests required it.', apush:'中立政策、告别演说、早期外交' },
  { id:'washington-3', personId:'washington', text:'The Government of the United States, which gives to bigotry no sanction, to persecution no assistance, requires only that they who live under its protection should demean themselves as good citizens.', source:'Letter to the Hebrew Congregation in Newport', date:'August 18, 1790', sourceUrl:'https://www.mountvernon.org/education/primary-source-collections/primary-source-collections/article/to-the-hebrew-congregation-in-newport-rhode-island', contextZh:'华盛顿回复罗得岛纽波特图罗犹太会堂的祝贺信，明确将宗教自由表述为公民权利，而非多数派给予少数派的宽容。这封信体现了新共和国在第一修正案出台前后对宗教多元与平等公民身份的承诺。', contextEn:'Washington answered Newport’s Jewish congregation by describing religious liberty as a right of citizenship, not a favor granted by a tolerant majority.', apush:'宗教自由、第一修正案、共和公民权' },

  { id:'jefferson-1', personId:'jefferson', text:'We hold these truths to be self-evident, that all men are created equal.', source:'Declaration of Independence', date:'July 4, 1776', sourceUrl:'https://www.archives.gov/founding-docs/declaration-transcript', contextZh:'杰斐逊起草的《独立宣言》把自然权利与人民同意确立为革命正当性的基础。其平等语言与当时持续存在的奴隶制、女性缺乏政治权利形成巨大矛盾，却也成为废奴、妇女权利与民权运动反复援引的原则。', contextEn:'The Declaration grounded independence in natural rights and popular consent. Its universal language later armed reform movements even as slavery and political exclusion exposed the nation’s contradictions.', apush:'自然权利、共和主义、革命意识形态' },
  { id:'jefferson-2', personId:'jefferson', text:'We are all Republicans, we are all Federalists.', source:'First Inaugural Address', date:'March 4, 1801', sourceUrl:'https://founders.archives.gov/documents/Jefferson/01-33-02-0116-0004', contextZh:'1800年选举导致美国第一次政党之间的和平权力交接。经历恶毒党争与《外国人和煽动叛乱法》危机后，杰斐逊用这句话淡化党派标签，宣称宪政共同体高于联邦党人与民主共和党人的分歧。', contextEn:'After the bitter election of 1800, Jefferson used his inauguration to legitimize a peaceful transfer of power and place constitutional unity above party labels.', apush:'1800年革命、政党竞争、和平交权' },
  { id:'jefferson-3', personId:'jefferson', text:'Our civil rights have no dependence on our religious opinions, any more than our opinions in physics or geometry.', source:'Virginia Statute for Religious Freedom', date:'Drafted 1777; enacted January 16, 1786', sourceUrl:'https://founders.archives.gov/documents/Jefferson/01-02-02-0132-0004-0082', contextZh:'该法案终结了弗吉尼亚对国教的制度性支持，并禁止因宗教信仰剥夺公民资格。它与麦迪逊反对宗教税的运动相互呼应，成为第一修正案宗教自由原则的重要先声。', contextEn:'The statute disestablished state-supported religion in Virginia and separated civil status from religious belief, helping shape the First Amendment tradition.', apush:'政教分离、宗教自由、启蒙思想' },

  { id:'adams-1', personId:'adams', text:'A government of laws, and not of men.', source:'Massachusetts Constitution', date:'1780', sourceUrl:'https://www.mass.gov/guides/john-adams-architect-of-american-government', contextZh:'亚当斯为马萨诸塞宪法设计了行政、立法与独立司法相互制衡的结构。这句格言强调公共权力必须服从稳定的法律规则，而不能依赖统治者个人意志，后来成为美国法治观念的经典表达。', contextEn:'Adams’s constitutional design separated government powers and made the rule of law—not personal will—the foundation of legitimate authority.', apush:'法治、权力分立、州宪法' },
  { id:'adams-2', personId:'adams', text:'Facts are stubborn things; and whatever may be our wishes, our inclinations, or the dictates of our passion, they cannot alter the state of facts and evidence.', source:'Boston Massacre Trial Defense', date:'December 1770', sourceUrl:'https://www.mass.gov/guides/john-adams-architect-of-american-government', contextZh:'波士顿惨案后，亚当斯冒着政治声誉受损的风险为英军士兵辩护。他坚持即使在革命情绪高涨时，被告也应依据证据获得公正审判，体现了殖民地精英把法治视为反抗专断政治的核心。', contextEn:'By defending British soldiers after the Boston Massacre, Adams argued that revolutionary anger could not replace evidence and due process.', apush:'波士顿惨案、正当程序、革命前夜' },
  { id:'adams-3', personId:'adams', text:'Wisdom, and knowledge, as well as virtue, diffused generally among the body of the people, being necessary for the preservation of their rights and liberties.', source:'Massachusetts Constitution, Chapter V', date:'1780', sourceUrl:'https://www.mass.gov/guides/john-adams-architect-of-american-government', contextZh:'亚当斯把公共教育写进共和国政府的责任之中，认为自由制度需要有知识和德性的公民才能维持。这一观念连接了新英格兰教育传统与革命后“共和母职”、公共学校等公民教育的发展。', contextEn:'Adams linked republican liberty to an educated and virtuous citizenry, making public learning a constitutional responsibility.', apush:'共和公民教育、公共学校、公民美德' },

  { id:'jackson-1', personId:'jackson', text:'The rich and powerful too often bend the acts of government to their selfish purposes.', source:'Bank Veto Message', date:'July 10, 1832', sourceUrl:'https://prod.millercenter.org/the-presidency/presidential-speeches/july-10-1832-bank-veto', contextZh:'杰克逊否决第二合众国银行续期法案，把银行描绘成由富人和外国股东掌控的特权垄断。他的反精英语言扩大了总统作为“人民代表”的权力，也引发银行战争、联邦存款转移与随后金融不稳定。', contextEn:'Jackson cast the Second Bank as a privileged monopoly, expanding the political use of the veto and presidential claims to represent the popular majority.', apush:'银行战争、杰克逊民主、总统权力' },
  { id:'jackson-2', personId:'jackson', text:'Disunion by armed force is treason.', source:'Proclamation Regarding Nullification', date:'December 10, 1832', sourceUrl:'https://prod.millercenter.org/the-presidency/presidential-speeches/december-10-1832-nullification-proclamation', contextZh:'南卡罗来纳宣布联邦关税在州内无效后，杰克逊否认州可单方面废止联邦法律或退出联邦。尽管他通常支持州权，这次危机中却以国家统一和联邦法律至上为核心，最终通过武力法案与妥协关税化解冲突。', contextEn:'During the Nullification Crisis, the usually states-rights-minded Jackson defended federal supremacy and the permanence of the Union.', apush:'废止危机、州权、联邦至上' },
  { id:'jackson-3', personId:'jackson', text:'In a country where offices are created solely for the benefit of the people, no one man has any more intrinsic right to official station than another.', source:'First Annual Message to Congress', date:'December 8, 1829', sourceUrl:'https://millercenter.org/the-presidency/presidential-speeches/december-8-1829-first-annual-message', contextZh:'杰克逊以反对官僚终身化为由提倡公职轮换，支持者称其为扩大民主参与，批评者则称之为“分赃制”。这反映白人男性选举权扩张时代，政党组织与政府任命日益大众化的变化。', contextEn:'Jackson defended rotation in office as democratic equality; critics saw the same practice as the partisan spoils system.', apush:'分赃制、白人男性民主、政党机器' },

  { id:'lincoln-1', personId:'lincoln', text:'Government of the people, by the people, for the people, shall not perish from the earth.', source:'Gettysburg Address', date:'November 19, 1863', sourceUrl:'https://www.loc.gov/exhibits/lincoln/ext/transcribe-186.html', contextZh:'葛底斯堡战役数月后，林肯在国家公墓落成仪式上把内战重新定义为对平等原则与民主制度能否存续的考验。他把《独立宣言》的平等命题与联邦保存、奴隶解放结合为“自由的新生”。', contextEn:'Lincoln recast the Civil War as a test of equality and democratic self-government, linking Union victory to a “new birth of freedom.”', apush:'内战、葛底斯堡、自由的新生' },
  { id:'lincoln-2', personId:'lincoln', text:'A house divided against itself cannot stand. I believe this government cannot endure, permanently half slave and half free.', source:'House Divided Speech', date:'June 16, 1858', sourceUrl:'https://www.nps.gov/liho/learn/historyculture/housedivided.htm', contextZh:'在伊利诺伊州共和党提名大会上，林肯警告《堪萨斯—内布拉斯加法》与德雷德·斯科特判决正推动奴隶制向全国扩张。他并未预言联邦立即崩溃，而是认为国家最终必须朝全奴隶制或全自由劳动制其中之一发展。', contextEn:'Against the expansion of slavery, Lincoln argued that the nation could not remain permanently divided between slave and free labor systems.', apush:'奴隶制扩张、共和党、林肯—道格拉斯辩论' },
  { id:'lincoln-3', personId:'lincoln', text:'With malice toward none; with charity for all; with firmness in the right, as God gives us to see the right.', source:'Second Inaugural Address', date:'March 4, 1865', sourceUrl:'https://www.loc.gov/exhibits/treasures/tr00.html', contextZh:'内战接近结束时，林肯没有发表胜利宣言，而把奴隶制视为南北共同承担的国家罪责，并呼吁以宽和方式重建联邦。这段话预示他的总统重建方向，也凸显战后和解与黑人自由保障之间的长期张力。', contextEn:'Near war’s end, Lincoln called for humble reconciliation while identifying slavery as the conflict’s central moral cause.', apush:'第二次就职、重建、民族和解' },

  { id:'douglass-1', personId:'douglass', text:'This Fourth of July is yours, not mine. You may rejoice, I must mourn.', source:'What to the Slave Is the Fourth of July?', date:'July 5, 1852', sourceUrl:'https://blogs.loc.gov/headlinesandheroes/2020/07/what-to-the-american-slave-is-your-4th-of-july/', contextZh:'道格拉斯在罗切斯特面对反奴隶制听众，以《独立宣言》的自由理想反衬奴隶制现实。他既谴责国家虚伪，也把建国原则当作可以用来要求美国兑现承诺的道德武器。', contextEn:'Douglass turned the nation’s founding ideals against slavery, exposing the gulf between Independence Day celebration and bondage.', apush:'废奴主义、美国理想与现实、1850年代' },
  { id:'douglass-2', personId:'douglass', text:'If there is no struggle there is no progress.', source:'West India Emancipation Speech', date:'August 3, 1857', sourceUrl:'https://www.loc.gov/pictures/resource/ppmsca.84280', contextZh:'德雷德·斯科特判决同年，道格拉斯纪念英属西印度群岛废奴，强调权力不会自动让步，受压迫者必须组织并施加压力。这成为废奴运动以及后来社会运动中关于直接行动的经典论述。', contextEn:'Speaking after the Dred Scott decision, Douglass argued that entrenched power yields only under organized pressure and sustained struggle.', apush:'直接行动、废奴运动、德雷德·斯科特' },
  { id:'douglass-3', personId:'douglass', text:'Right is of no Sex—Truth is of no Color—God is the Father of us all, and all we are Brethren.', source:'The North Star masthead', date:'Beginning December 3, 1847', sourceUrl:'https://www.loc.gov/collections/frederick-douglass-newspapers/about-this-collection/', contextZh:'道格拉斯创办《北极星报》宣传立即废奴、黑人教育与妇女权利。这句报头格言把种族平等和性别平等放在同一普遍权利框架内，也反映废奴主义与早期妇女权利运动之间既合作又紧张的联盟。', contextEn:'The North Star joined abolition, Black advancement, and women’s rights under a universal claim to human equality.', apush:'黑人报刊、妇女权利、改革运动' },

  { id:'theodore-roosevelt-1', personId:'theodore-roosevelt', text:'Speak softly and carry a big stick; you will go far.', source:'Minnesota State Fair Address', date:'September 2, 1901', sourceUrl:'https://www.theodorerooseveltcenter.org/quotes/page/38/', contextZh:'罗斯福用自己喜爱的西非谚语概括以谈判配合可信武力的外交风格。就任总统后，这种“大棒政策”体现在巴拿马运河、罗斯福推论与美国在加勒比地区更积极的干预。', contextEn:'Roosevelt’s proverb summarized diplomacy backed by credible force, later associated with the Panama Canal and intervention in the Caribbean.', apush:'大棒政策、帝国主义、巴拿马运河' },
  { id:'theodore-roosevelt-2', personId:'theodore-roosevelt', text:'All I ask is a square deal for every man. Give him a fair chance. Do not let him wrong any one, and do not let him be wronged.', source:'Remarks at the Grand Canyon', date:'May 6, 1903', sourceUrl:'https://www.theodorerooseveltcenter.org/quotes/page/5/', contextZh:'“公平交易”成为罗斯福进步主义国内政策的标签，主张政府应在资本、劳工与公众之间充当仲裁者。它支持反托拉斯、消费者保护和劳资调停，但并不要求消灭资本主义或结果完全平等。', contextEn:'The Square Deal promised fair rules among capital, labor, and the public through regulation rather than the abolition of capitalism.', apush:'进步主义、公平交易、监管国家' },
  { id:'theodore-roosevelt-3', personId:'theodore-roosevelt', text:'The welfare of each of us is dependent fundamentally upon the welfare of all of us.', source:'New Nationalism Speech', date:'August 31, 1910', sourceUrl:'https://www.theodorerooseveltcenter.org/quotes/page/38/', contextZh:'在奥萨沃托米演说中，罗斯福主张工业化造成的全国性问题需要强有力的联邦政府解决。他支持监管大企业、社会保险和更积极的经济正义，推动进步党在1912年提出“新国家主义”纲领。', contextEn:'New Nationalism called for strong federal action to regulate concentrated wealth and protect social welfare in an industrial nation.', apush:'新国家主义、进步党、联邦监管' },

  { id:'wilson-1', personId:'wilson', text:'The world must be made safe for democracy.', source:'War Message to Congress', date:'April 2, 1917', sourceUrl:'https://www.archives.gov/milestone-documents/address-to-congress-declaration-of-war-against-germany', contextZh:'德国恢复无限制潜艇战并出现齐默尔曼电报后，威尔逊请求国会对德宣战。他把参战从维护中立权利提升为保卫民主的道德使命，奠定20世纪美国自由国际主义的语言，同时掩盖国内战时压制与种族不平等。', contextEn:'Wilson moralized U.S. entry into World War I as a defense of democracy, helping define American liberal internationalism.', apush:'第一次世界大战、自由国际主义、参战' },
  { id:'wilson-2', personId:'wilson', text:'Open covenants of peace, openly arrived at.', source:'Fourteen Points Address', date:'January 8, 1918', sourceUrl:'https://www.archives.gov/milestone-documents/president-woodrow-wilsons-14-points', contextZh:'威尔逊提出十四点原则，希望以公开外交、民族自决、裁军与国际联盟建立战后秩序。巴黎和会上许多原则被英法帝国利益削弱，美国参议院又拒绝加入国际联盟，显示理想主义与国内政治的冲突。', contextEn:'The Fourteen Points sought an open, rules-based peace, but the Versailles settlement and Senate rejection of the League exposed its limits.', apush:'十四点、凡尔赛体系、国际联盟' },
  { id:'wilson-3', personId:'wilson', text:'It must be a peace without victory.', source:'Address to the Senate on Peace Terms', date:'January 22, 1917', sourceUrl:'https://www.presidency.ucsb.edu/documents/address-the-senate-conditions-under-which-the-united-states-would-consider-joining-world', contextZh:'美国尚未参战时，威尔逊主张没有屈辱性胜败的协商和平，因为报复性条约会孕育下一场战争。几个月后德国无限制潜艇战使这一路线破产，但其对惩罚性和平的担忧在凡尔赛条约争论中继续存在。', contextEn:'Before U.S. entry, Wilson warned that a punitive settlement would produce resentment rather than durable peace.', apush:'中立、和平主义、战后秩序' },

  { id:'fdr-1', personId:'fdr', text:'The only thing we have to fear is fear itself.', source:'First Inaugural Address', date:'March 4, 1933', sourceUrl:'https://www.pbs.org/wgbh/americanexperience/features/fdr-first-inaugural/', contextZh:'大萧条最深重时，美国银行体系接近崩溃，失业率约四分之一。罗斯福首先试图恢复公众信心，随后通过银行休假、紧急立法与新政“救济、复兴、改革”扩大联邦政府对经济和社会保障的责任。', contextEn:'At the Depression’s nadir, Roosevelt used confidence-building rhetoric to prepare the public for emergency banking action and the New Deal.', apush:'大萧条、新政、炉边谈话式领导' },
  { id:'fdr-2', personId:'fdr', text:'The country demands bold, persistent experimentation. It is common sense to take a method and try it: If it fails, admit it frankly and try another.', source:'Address at Oglethorpe University', date:'May 22, 1932', sourceUrl:'https://www.presidency.ucsb.edu/documents/address-oglethorpe-university-atlanta-georgia', contextZh:'竞选总统期间，罗斯福没有提出一套固定蓝图，而强调在危机中务实试验。这个态度预示新政将由多个有时相互矛盾的项目构成，并在最高法院判决、选举压力与经济表现下不断调整。', contextEn:'Roosevelt’s pragmatic call for experimentation foreshadowed the New Deal’s shifting mix of relief, recovery, and reform programs.', apush:'新政实验主义、救济复兴改革、行政创新' },
  { id:'fdr-3', personId:'fdr', text:'The first is freedom of speech and expression—everywhere in the world.', source:'Annual Message to Congress (Four Freedoms)', date:'January 6, 1941', sourceUrl:'https://www.archives.gov/milestone-documents/president-franklin-roosevelts-annual-message-to-congress', contextZh:'美国尚未正式加入二战时，罗斯福以言论自由、信仰自由、免于匮乏与免于恐惧四项自由说明支援反法西斯国家的价值基础。演说推动租借法案，并把新政的社会经济安全观扩展为国际战争目标。', contextEn:'The Four Freedoms linked aid to the Allies with universal civil and economic rights, joining New Deal security to wartime internationalism.', apush:'四大自由、租借法案、二战动员' },

  { id:'mlk-1', personId:'mlk', text:'Injustice anywhere is a threat to justice everywhere.', source:'Letter from Birmingham Jail', date:'April 16, 1963', sourceUrl:'https://kinginstitute.stanford.edu/letter-birmingham-jail', contextZh:'金因无视禁止示威的法院禁令而在伯明翰被捕，并写信回应要求“等待”的白人牧师。他为非暴力直接行动与违反不义之法辩护，指出地方隔离不是外人无权介入的问题，而是相互联系的全国性道德危机。', contextEn:'From jail, King defended nonviolent direct action and argued that segregation anywhere implicated justice everywhere.', apush:'伯明翰运动、非暴力直接行动、公民抗命' },
  { id:'mlk-2', personId:'mlk', text:'I have a dream that one day this nation will rise up and live out the true meaning of its creed.', source:'I Have a Dream Address', date:'August 28, 1963', sourceUrl:'https://kinginstitute.stanford.edu/i-have-dream', contextZh:'华盛顿就业与自由大游行汇集约25万人，推动联邦政府面对民权立法压力。金把黑人自由诉求嵌入《独立宣言》与美国信条，以非暴力、跨种族民主愿景争取全国舆论，随后《1964年民权法》与《1965年投票权法》相继通过。', contextEn:'At the March on Washington, King claimed the founding creed for an interracial democracy and helped build momentum for landmark civil rights laws.', apush:'华盛顿大游行、民权法、美国信条' },
  { id:'mlk-3', personId:'mlk', text:'A nation that continues year after year to spend more money on military defense than on programs of social uplift is approaching spiritual death.', source:'Beyond Vietnam: A Time to Break Silence', date:'April 4, 1967', sourceUrl:'https://kinginstitute.stanford.edu/king-papers/documents/beyond-vietnam', contextZh:'金在纽约河滨教堂公开反对越南战争，把军国主义与种族主义、贫困并列为相互关联的“三大罪恶”。这一立场使他遭到约翰逊政府、主流媒体和部分民权盟友批评，也标志其运动从法律平等转向经济正义与反战。', contextEn:'King connected the Vietnam War to racism and poverty, broadening his campaign from civil rights law to economic justice and anti-militarism.', apush:'越南战争、贫困人民运动、激进化的民权运动' },
];

type PersonSeed = [string, string, string, string, string, string[]];
const extraPeople: PersonSeed[] = [
  ['winthrop','约翰·温斯罗普','John Winthrop','1588–1649','https://en.wikipedia.org/wiki/John_Winthrop',['roger-williams','anne-hutchinson','franklin','washington','adams']],
  ['roger-williams','罗杰·威廉姆斯','Roger Williams','c. 1603–1683','https://en.wikipedia.org/wiki/Roger_Williams',['winthrop','anne-hutchinson','franklin','jefferson','adams']],
  ['anne-hutchinson','安妮·哈钦森','Anne Hutchinson','1591–1643','https://en.wikipedia.org/wiki/Anne_Hutchinson',['winthrop','roger-williams','franklin','stanton','anthony']],
  ['franklin','本杰明·富兰克林','Benjamin Franklin','1706–1790','https://en.wikipedia.org/wiki/Benjamin_Franklin',['washington','adams','jefferson','hamilton','madison']],
  ['hamilton','亚历山大·汉密尔顿','Alexander Hamilton','c. 1755–1804','https://en.wikipedia.org/wiki/Alexander_Hamilton',['jefferson','adams','madison','washington','monroe']],
  ['madison','詹姆斯·麦迪逊','James Madison','1751–1836','https://en.wikipedia.org/wiki/James_Madison',['hamilton','jefferson','adams','washington','monroe']],
  ['monroe','詹姆斯·门罗','James Monroe','1758–1831','https://en.wikipedia.org/wiki/James_Monroe',['madison','jefferson','adams','hamilton','jackson']],
  ['clay','亨利·克莱','Henry Clay','1777–1852','https://en.wikipedia.org/wiki/Henry_Clay',['jackson','calhoun','webster','monroe','lincoln']],
  ['calhoun','约翰·C·卡尔霍恩','John C. Calhoun','1782–1850','https://en.wikipedia.org/wiki/John_C._Calhoun',['jackson','clay','webster','monroe','lincoln']],
  ['webster','丹尼尔·韦伯斯特','Daniel Webster','1782–1852','https://en.wikipedia.org/wiki/Daniel_Webster',['clay','calhoun','jackson','monroe','lincoln']],
  ['tecumseh','特库姆塞','Tecumseh','c. 1768–1813','https://en.wikipedia.org/wiki/Tecumseh',['jackson','monroe','clay','calhoun','washington']],
  ['garrison','威廉·劳埃德·加里森','William Lloyd Garrison','1805–1879','https://en.wikipedia.org/wiki/William_Lloyd_Garrison',['douglass','lincoln','tubman','truth','stanton']],
  ['tubman','哈丽雅特·塔布曼','Harriet Tubman','c. 1822–1913','https://en.wikipedia.org/wiki/Harriet_Tubman',['douglass','garrison','truth','lincoln','stanton']],
  ['truth','索杰纳·特鲁斯','Sojourner Truth','c. 1797–1883','https://en.wikipedia.org/wiki/Sojourner_Truth',['tubman','douglass','garrison','stanton','anthony']],
  ['stanton','伊丽莎白·卡迪·斯坦顿','Elizabeth Cady Stanton','1815–1902','https://en.wikipedia.org/wiki/Elizabeth_Cady_Stanton',['anthony','truth','tubman','garrison','douglass']],
  ['anthony','苏珊·B·安东尼','Susan B. Anthony','1820–1906','https://en.wikipedia.org/wiki/Susan_B._Anthony',['stanton','truth','tubman','garrison','douglass']],
  ['grant','尤利西斯·S·格兰特','Ulysses S. Grant','1822–1885','https://en.wikipedia.org/wiki/Ulysses_S._Grant',['lincoln','lee','andrew-johnson','douglass','stanton']],
  ['lee','罗伯特·E·李','Robert E. Lee','1807–1870','https://en.wikipedia.org/wiki/Robert_E._Lee',['lincoln','grant','andrew-johnson','douglass','calhoun']],
  ['andrew-johnson','安德鲁·约翰逊','Andrew Johnson','1808–1875','https://en.wikipedia.org/wiki/Andrew_Johnson',['lincoln','grant','lee','douglass','stanton']],
  ['carnegie','安德鲁·卡内基','Andrew Carnegie','1835–1919','https://en.wikipedia.org/wiki/Andrew_Carnegie',['rockefeller','bryan','theodore-roosevelt','debs','jane-addams']],
  ['rockefeller','约翰·D·洛克菲勒','John D. Rockefeller','1839–1937','https://en.wikipedia.org/wiki/John_D._Rockefeller',['carnegie','bryan','theodore-roosevelt','debs','jane-addams']],
  ['ida-b-wells','艾达·B·威尔斯','Ida B. Wells','1862–1931','https://en.wikipedia.org/wiki/Ida_B._Wells',['booker-t-washington','du-bois','jane-addams','bryan','theodore-roosevelt']],
  ['booker-t-washington','布克·T·华盛顿','Booker T. Washington','1856–1915','https://en.wikipedia.org/wiki/Booker_T._Washington',['du-bois','ida-b-wells','bryan','theodore-roosevelt','jane-addams']],
  ['du-bois','W·E·B·杜波依斯','W. E. B. Du Bois','1868–1963','https://en.wikipedia.org/wiki/W._E._B._Du_Bois',['booker-t-washington','ida-b-wells','mlk','jane-addams','bryan']],
  ['bryan','威廉·詹宁斯·布莱恩','William Jennings Bryan','1860–1925','https://en.wikipedia.org/wiki/William_Jennings_Bryan',['theodore-roosevelt','wilson','debs','carnegie','booker-t-washington']],
  ['jane-addams','简·亚当斯','Jane Addams','1860–1935','https://en.wikipedia.org/wiki/Jane_Addams',['ida-b-wells','du-bois','debs','theodore-roosevelt','wilson']],
  ['debs','尤金·V·德布斯','Eugene V. Debs','1855–1926','https://en.wikipedia.org/wiki/Eugene_V._Debs',['bryan','theodore-roosevelt','wilson','jane-addams','carnegie']],
  ['hoover','赫伯特·胡佛','Herbert Hoover','1874–1964','https://en.wikipedia.org/wiki/Herbert_Hoover',['fdr','eleanor-roosevelt','truman','eisenhower','wilson']],
  ['eleanor-roosevelt','埃莉诺·罗斯福','Eleanor Roosevelt','1884–1962','https://en.wikipedia.org/wiki/Eleanor_Roosevelt',['fdr','hoover','truman','jane-addams','ida-b-wells']],
  ['truman','哈里·S·杜鲁门','Harry S. Truman','1884–1972','https://en.wikipedia.org/wiki/Harry_S._Truman',['fdr','eisenhower','jfk','lbj','hoover']],
  ['eisenhower','德怀特·D·艾森豪威尔','Dwight D. Eisenhower','1890–1969','https://en.wikipedia.org/wiki/Dwight_D._Eisenhower',['truman','jfk','lbj','nixon','fdr']],
  ['jfk','约翰·F·肯尼迪','John F. Kennedy','1917–1963','https://en.wikipedia.org/wiki/John_F._Kennedy',['eisenhower','lbj','nixon','truman','reagan']],
  ['lbj','林登·B·约翰逊','Lyndon B. Johnson','1908–1973','https://en.wikipedia.org/wiki/Lyndon_B._Johnson',['jfk','nixon','truman','mlk','reagan']],
  ['nixon','理查德·尼克松','Richard Nixon','1913–1994','https://en.wikipedia.org/wiki/Richard_Nixon',['jfk','lbj','reagan','eisenhower','truman']],
  ['reagan','罗纳德·里根','Ronald Reagan','1911–2004','https://en.wikipedia.org/wiki/Ronald_Reagan',['nixon','jfk','lbj','eisenhower','schlafly']],
  ['malcolm-x','马尔科姆·X','Malcolm X','1925–1965','https://en.wikipedia.org/wiki/Malcolm_X',['mlk','chavez','lbj','du-bois','tubman']],
  ['chavez','塞萨尔·查韦斯','Cesar Chavez','1927–1993','https://en.wikipedia.org/wiki/Cesar_Chavez',['mlk','malcolm-x','friedan','carson','lbj']],
  ['friedan','贝蒂·弗里丹','Betty Friedan','1921–2006','https://en.wikipedia.org/wiki/Betty_Friedan',['schlafly','carson','chavez','mlk','lbj']],
  ['schlafly','菲利斯·施拉夫利','Phyllis Schlafly','1924–2016','https://en.wikipedia.org/wiki/Phyllis_Schlafly',['friedan','reagan','nixon','carson','chavez']],
  ['carson','蕾切尔·卡森','Rachel Carson','1907–1964','https://en.wikipedia.org/wiki/Rachel_Carson',['friedan','schlafly','chavez','jane-addams','eleanor-roosevelt']],
];

people.push(...extraPeople.map(([id,nameZh,nameEn,years,wiki,distractors]) => ({id,nameZh,nameEn,years,image:`/portraits/${id}.jpg`,wiki,distractors})));

const distractorOverrides: Record<string,string[]> = {
  washington:['franklin','adams','jefferson','hamilton','madison'], jefferson:['hamilton','adams','madison','washington','monroe'], adams:['jefferson','hamilton','madison','washington','franklin'],
  jackson:['clay','calhoun','webster','monroe','tecumseh'], lincoln:['douglass','grant','lee','andrew-johnson','garrison'], douglass:['garrison','lincoln','tubman','truth','stanton'],
  'theodore-roosevelt':['wilson','bryan','debs','jane-addams','carnegie'], wilson:['theodore-roosevelt','bryan','debs','jane-addams','hoover'], fdr:['hoover','eleanor-roosevelt','truman','eisenhower','wilson'],
  mlk:['malcolm-x','chavez','lbj','du-bois','tubman']
};
people.forEach((person) => { if (distractorOverrides[person.id]) person.distractors = distractorOverrides[person.id]; });

type QuoteSeed = [string,string,string,string,string,string,string];
function addQuotes(seeds: QuoteSeed[]) {
  const counts: Record<string,number> = {};
  for (const quote of quotes) counts[quote.personId] = (counts[quote.personId] ?? 0) + 1;
  quotes.push(...seeds.map(([personId,text,source,date,sourceUrl,contextZh,apush]) => ({
    id:`${personId}-${(counts[personId] = (counts[personId] ?? 0) + 1)}`, personId, text, source, date, sourceUrl, contextZh, contextEn:'', apush
  })));
}

addQuotes([
  ['winthrop','We shall be as a city upon a hill. The eyes of all people are upon us.','A Model of Christian Charity','1630','https://www.winthropsociety.com/doc_charity.php','温斯罗普在“阿贝拉号”上为马萨诸塞湾殖民者描绘一个受世人注视的清教共同体。它体现清教“使命之约”，后来又被美国例外论不断重新解释。','清教主义、山巅之城、美国例外论'],
  ['winthrop','We must delight in each other, make others’ conditions our own, rejoice together, mourn together, labor and suffer together.','A Model of Christian Charity','1630','https://www.winthropsociety.com/doc_charity.php','这段话要求殖民者以互助和共同牺牲维系与上帝的盟约，显示早期新英格兰社会强调集体纪律而非现代个人主义。','契约共同体、清教社会、社会秩序'],
  ['winthrop','There is a twofold liberty, natural ... and civil or federal.','Speech to the Massachusetts General Court','July 3, 1645','https://history.hanover.edu/texts/winthmod.html','温斯罗普区分任性而为的“自然自由”与在正当权威下行善的“公民自由”，为清教政治秩序与严格社会管制辩护。','自由观、清教政体、殖民自治'],

  ['roger-williams','Forced worship stinks in God’s nostrils.','The Bloudy Tenent of Persecution','1644','https://press-pubs.uchicago.edu/founders/documents/amendI_religions6.html','威廉姆斯认为强迫宗教服从既伤害良心，也败坏真正信仰。他因主张良心自由被马萨诸塞驱逐，随后建立罗得岛。','宗教自由、政教分离、罗得岛'],
  ['roger-williams','God requireth not an uniformity of religion to be enacted and enforced in any civil state.','The Bloudy Tenent of Persecution','1644','https://press-pubs.uchicago.edu/founders/documents/amendI_religions6.html','这句话直接反对由政府确立宗教一致性，预示后来第一修正案中禁止国教与保障自由信仰的原则。','良心自由、宗教多元、第一修正案'],
  ['roger-williams','The civil sword may make a nation of hypocrites and anti-Christians, but not one true Christian.','The Bloudy Tenent Yet More Bloudy','1652','https://quod.lib.umich.edu/e/eebo/A96610.0001.001','威廉姆斯把国家暴力与灵魂得救区分开来：强制只能制造表面顺从，不能产生真实信仰。','政教分离、宗教宽容、殖民异议'],

  ['anne-hutchinson','As I do understand it, laws, commands, rules and edicts are for those who have not the light.','Trial before the Massachusetts General Court','November 1637','https://www.famous-trials.com/hutchinson/2394-trialaccount','哈钦森在审判中声称内在启示高于牧师与殖民当局的规则，挑战了马萨诸塞湾男性神职与政治精英的权威。','反律法论争议、性别与权威、清教异议'],
  ['anne-hutchinson','He hath let me see which was the clear ministry and which the wrong.','Trial before the Massachusetts General Court','November 1637','https://www.famous-trials.com/hutchinson/2394-trialaccount','她宣称上帝使自己辨认真正的福音，由此绕过受教育的男性牧师。殖民政府将这种宗教主张视为对社会等级的威胁。','内在启示、宗教异议、殖民秩序'],
  ['anne-hutchinson','You have power over my body, but the Lord Jesus hath power over my body and soul.','Examination at the Church of Boston','March 1638','https://www.masshist.org/database/viewer.php?item_id=362','面对逐出教会与殖民地，哈钦森把世俗惩罚与灵魂主权分开。她的案件展示清教共同体中宗教自由、女性发言权与权威之间的冲突。','逐出教会、女性史、良心自由'],

  ['franklin','Those who would give up essential Liberty, to purchase a little temporary Safety, deserve neither Liberty nor Safety.','Pennsylvania Assembly reply to the governor','November 11, 1755','https://founders.archives.gov/documents/Franklin/01-06-02-0107','富兰克林在殖民地议会与宾夕法尼亚业主的税收争端中写下此句，核心是公共防务不能成为特权阶层逃避纳税的借口。','殖民自治、自由与安全、税收'],
  ['franklin','Join, or Die.','Pennsylvania Gazette political cartoon','May 9, 1754','https://www.loc.gov/pictures/item/2002695523/','这幅蛇形漫画号召殖民地在法印战争前夕联合防御，也与富兰克林的奥尔巴尼联合计划相呼应，后来成为革命团结的象征。','奥尔巴尼计划、法印战争、殖民联合'],
  ['franklin','In this world nothing can be said to be certain, except death and taxes.','Letter to Jean-Baptiste Le Roy','November 13, 1789','https://founders.archives.gov/documents/Franklin/01-46-02-0139','富兰克林在评论新宪法能否长久时写下这句幽默名言，反映制宪后共和国前景仍带有实验性。','宪法时代、共和实验、建国人物'],

  ['hamilton','Energy in the executive is a leading character in the definition of good government.','Federalist No. 70','March 15, 1788','https://avalon.law.yale.edu/18th_century/fed70.asp','汉密尔顿为单一而有力的行政首脑辩护，认为决断、保密、速度和问责是共和国有效治理的必要条件。','联邦党人文集、强行政权、宪法批准'],
  ['hamilton','A national debt, if it is not excessive, will be to us a national blessing.','Letter to Robert Morris','April 30, 1781','https://founders.archives.gov/documents/Hamilton/01-02-02-1167','汉密尔顿把公共信用视为凝聚全国利益、建立可靠财政国家的工具。财政部长时期的债务承担与银行计划落实了这一思路。','汉密尔顿财政计划、公共信用、联邦权力'],
  ['hamilton','The sacred rights of mankind are not to be rummaged for among old parchments or musty records.','The Farmer Refuted','February 23, 1775','https://founders.archives.gov/documents/Hamilton/01-01-02-0057','革命前夕，年轻的汉密尔顿以自然权利反驳保皇派，认为权利来自人性与理性，而非君主恩赐或古老特许。','自然权利、革命思想、共和主义'],

  ['madison','If men were angels, no government would be necessary.','Federalist No. 51','February 6, 1788','https://avalon.law.yale.edu/18th_century/fed51.asp','麦迪逊以人性并不完美为出发点，解释政府既要统治被治理者，也必须被制度约束。','联邦党人文集、分权制衡、人性观'],
  ['madison','Ambition must be made to counteract ambition.','Federalist No. 51','February 6, 1788','https://avalon.law.yale.edu/18th_century/fed51.asp','这句话概括宪法通过机构利益互相制约来防止权力集中的设计，是三权分立与制衡机制的核心表达。','三权分立、制衡、宪法结构'],
  ['madison','A well-instructed people alone can be permanently a free people.','Message to Congress','December 3, 1810','https://founders.archives.gov/documents/Madison/03-03-02-0133','麦迪逊把公共教育、知情公民与共和国自由联系起来，强调自治不仅依赖制度，也依赖公民能力。','共和公民、公共教育、民主参与'],

  ['monroe','The American continents ... are henceforth not to be considered as subjects for future colonization by any European powers.','Annual Message to Congress (Monroe Doctrine)','December 2, 1823','https://avalon.law.yale.edu/19th_century/monroe.asp','门罗在拉丁美洲独立浪潮后警告欧洲不得在西半球建立新殖民地，形成门罗主义的“不再殖民”原则。','门罗主义、西半球、拉美独立'],
  ['monroe','In the wars of the European powers ... we have never taken any part, nor does it comport with our policy so to do.','Annual Message to Congress (Monroe Doctrine)','December 2, 1823','https://avalon.law.yale.edu/19th_century/monroe.asp','门罗一面反对欧洲干涉美洲，一面承诺美国不介入欧洲内部战争，体现早期外交中的半球分区思维。','中立传统、门罗主义、外交政策'],
  ['monroe','The American continents ... are free and independent, and maintain a political system essentially different ... from that of Europe.','Annual Message to Congress','December 2, 1823','https://avalon.law.yale.edu/19th_century/monroe.asp','这段话将美洲共和制度与欧洲君主体系对立起来，为美国日后扩大西半球影响提供意识形态依据。','共和主义、美国例外论、西半球外交'],

  ['clay','I had rather be right than be President.','Speech on abolition petitions','February 7, 1839','https://teachingamericanhistory.org/document/speech-on-abolition-petitions/','克莱在奴隶制与废奴请愿争论中以“原则高于总统野心”塑造政治形象，但其折衷立场也体现边境州奴隶主的局限。','亨利·克莱、奴隶制争论、妥协政治'],
  ['clay','An oppressed people are authorized, whenever they can, to rise and break their fetters.','Speech on the independence of Spanish America','March 24, 1818','https://www.loc.gov/resource/rbpe.19501800/','克莱支持拉丁美洲反殖民独立，把美国革命原则推广到西半球，也强化“战争鹰派”和美洲共和团结的形象。','拉美独立、战争鹰派、共和国际主义'],
  ['clay','The Union is my country; the thirty States are my country.','Speech in Lexington, Kentucky','November 13, 1850','https://archive.org/details/lifeandspeeches01mallgoog','1850年妥协后，克莱以全国联盟而非州身份为最高忠诚，体现其“伟大妥协者”试图延缓分裂的政治路线。','1850年妥协、联邦主义、地区冲突'],

  ['calhoun','I hold that in the present state of civilization, where two races of different origin ... are brought together, the relation now existing in the slaveholding States ... is, instead of an evil, a good—a positive good.','Speech on the Reception of Abolition Petitions','February 6, 1837','https://teachingamericanhistory.org/document/slavery-a-positive-good/','卡尔霍恩不再把奴隶制称作必要之恶，而将其辩护为“积极的善”，标志南方奴隶制意识形态的激进化。','奴隶制辩护、南方社会、地区主义'],
  ['calhoun','The Government of the absolute majority ... is the government of the strongest interests.','A Disquisition on Government','Published 1851','https://press-pubs.uchicago.edu/founders/documents/v1ch4s16.html','卡尔霍恩以“并行多数”保护地域少数，主张受影响利益集团拥有实质否决权，为州权与废止理论提供哲学基础。','并行多数、州权、废止危机'],
  ['calhoun','The Union, next to our liberty, most dear.','Jefferson Day toast','April 13, 1830','https://www.senate.gov/artandhistory/history/minute/Webster_Hayne_Debate.htm','在杰克逊高举“我们的联邦必须保存”后，卡尔霍恩以“自由优先”回应，暗示联盟必须服从州权与南方利益。','州权、联邦危机、杰克逊时代'],

  ['webster','Liberty and Union, now and forever, one and inseparable!','Second Reply to Hayne','January 26–27, 1830','https://www.senate.gov/artandhistory/history/common/generic/Speeches_Webster_Hayne.htm','韦伯斯特在参议院反击废止论，将个人自由与永久联邦绑定，成为联邦民族主义的经典宣言。','韦伯斯特—海恩辩论、联邦主义、废止危机'],
  ['webster','An unlimited power to tax involves, necessarily, a power to destroy.','Argument in McCulloch v. Maryland','1819','https://www.oyez.org/cases/1789-1850/17us316','韦伯斯特代理第二银行，认为州若能随意征税便能摧毁联邦机构。最高法院随后确认隐含权力与联邦至上。','麦卡洛克诉马里兰州、联邦至上、国家银行'],
  ['webster','There can be no such thing as a peaceable secession.','Seventh of March Speech','March 7, 1850','https://www.senate.gov/artandhistory/history/common/generic/Speeches_Webster_7thMarch.htm','面对奴隶制地区危机，韦伯斯特警告脱离联邦必然带来战争，并支持1850年妥协以保存联盟。','1850年妥协、脱离联邦、地区危机'],
]);

addQuotes([
  ['tecumseh','Sell a country! Why not sell the air, the clouds and the great sea, as well as the earth?','Speech to William Henry Harrison','August 1810','https://www.nps.gov/articles/000/tecumseh-speech.htm','特库姆塞拒绝美国以个别部族条约购买土地，主张土地属于所有原住民族，任何单一部族都无权出售。','原住民土地观、特库姆塞联盟、西进扩张'],
  ['tecumseh','The Great Spirit gave this great island to his red children.','Speech to William Henry Harrison','August 1810','https://www.nps.gov/articles/000/tecumseh-speech.htm','面对印第安纳领地扩张，特库姆塞以共同祖土观动员跨部族联盟，抵抗美国定居者侵占。','原住民抵抗、跨部族联盟、边疆'],
  ['tecumseh','Brothers, we all belong to one family; we are all children of the Great Spirit.','Address to Native nations','c. 1811','https://www.loc.gov/resource/rbpe.19100600/','特库姆塞试图超越部族分歧，建立从五大湖到南方的泛原住民政治联盟。1812年战争失败使这一计划破产。','泛原住民主义、1812年战争、边疆冲突'],

  ['garrison','I am in earnest—I will not equivocate—I will not excuse—I will not retreat a single inch—and I will be heard.','The Liberator, inaugural editorial','January 1, 1831','https://www.masshist.org/database/viewer.php?item_id=728','加里森创办《解放者报》，拒绝渐进解放和殖民方案，要求立即、无条件废奴，推动废奴运动更激进。','立即废奴、《解放者报》、改革运动'],
  ['garrison','The Constitution which subjects them to hopeless bondage is one that we cannot swear to support.','No Compromise with Slavery','July 4, 1854','https://teachingamericanhistory.org/document/no-compromise-with-the-evil-of-slavery/','加里森把保护奴隶制的宪法称为与死亡的盟约，主张废奴者不应参与一个被奴隶权力污染的政治制度。','宪法与奴隶制、道德劝说、废奴激进主义'],
  ['garrison','No Union with Slaveholders!','American Anti-Slavery Society motto','1840s','https://www.loc.gov/pictures/item/2008661778/','这句口号把北方与蓄奴州的联盟本身视为共谋，体现加里森派与主张通过选举和政党反奴隶制者的分歧。','废奴派分裂、奴隶权力、联邦危机'],

  ['tubman','I was conductor of the Underground Railroad for eight years ... I never ran my train off the track and I never lost a passenger.','Woman Suffrage Convention speech','1896','https://www.nps.gov/people/harriet-tubman.htm','塔布曼用铁路隐喻总结多次返回南方营救被奴役者的经历。她的行动展示自由黑人与废奴网络的直接抵抗。','地下铁路、逃奴法、黑人抵抗'],
  ['tubman','There was one of two things I had a right to, liberty or death; if I could not have one, I would have the other.','Recorded in Sarah Bradford’s biography','1869','https://docsouth.unc.edu/neh/bradford/bradford.html','塔布曼回忆逃离奴隶制时，把自由视为不可妥协的自然权利；她此后又承担侦察、护理与武装远征工作。','自我解放、内战、自然权利'],
  ['tubman','Slavery is the next thing to hell.','Recorded in Sarah Bradford’s biography','1869','https://docsouth.unc.edu/neh/bradford/bradford.html','这句简短判断来自塔布曼的口述经历，直接否定奴隶主将奴隶制包装为仁慈制度的辩护。','奴隶叙事、废奴主义、奴隶制暴力'],

  ['truth','Ain’t I a woman?','Women’s Rights Convention, Akron, Ohio','May 29, 1851','https://www.nps.gov/articles/sojourner-truth.htm','流传最广的版本以反问揭露白人中产女性气质标准排斥黑人妇女。演说连接废奴与妇女权利，虽然后来的方言转录并非逐字原稿。','交叉性、妇女权利、废奴运动'],
  ['truth','I am a woman’s rights.','Equal Rights Association meeting','May 9, 1867','https://www.loc.gov/resource/rbnawsa.n7111/','内战后投票权运动因第十四、十五修正案中的性别与种族问题发生分裂，特鲁斯以自身劳动与生存经验主张平等公民权。','重建修正案、妇女选举权、平等权利'],
  ['truth','If the first woman God ever made was strong enough to turn the world upside down ... these women together ought to be able to turn it back.','Women’s Rights Convention speech','May 29, 1851','https://www.nps.gov/articles/sojourner-truth.htm','特鲁斯借圣经中夏娃的故事反转女性软弱的宗教论证，为女性集体政治行动辩护。','宗教与改革、女性能动性、妇女大会'],

  ['stanton','We hold these truths to be self-evident: that all men and women are created equal.','Declaration of Sentiments','July 1848','https://www.nps.gov/wori/learn/historyculture/declaration-of-sentiments.htm','斯坦顿在塞尼卡福尔斯大会仿写《独立宣言》，用建国自然权利语言要求妇女法律、教育、经济和政治平等。','塞尼卡福尔斯、妇女权利、自然权利'],
  ['stanton','The history of mankind is a history of repeated injuries and usurpations on the part of man toward woman.','Declaration of Sentiments','July 1848','https://www.nps.gov/wori/learn/historyculture/declaration-of-sentiments.htm','这句话把婚姻财产权、教育限制、职业排斥和无投票权列为系统性压迫，而非孤立的不公平。','法律地位、男女平等、改革运动'],
  ['stanton','The right is ours. Have it, we must. Use it, we will.','Speech to the New York Legislature','February 14, 1854','https://www.loc.gov/resource/rbnawsa.n8358/','斯坦顿把妇女参政权界定为既有权利而非请求恩赐，并以州立法游说推动已婚妇女财产权改革。','妇女选举权、财产权、州级改革'],

  ['anthony','Failure is impossible.','Final address to the National American Woman Suffrage Association','February 15, 1906','https://www.nps.gov/people/susan-b-anthony.htm','年迈的安东尼以这句话鼓励运动继续推进。她去世十四年后，第十九修正案终于禁止基于性别剥夺投票权。','第十九修正案、妇女选举权、社会运动'],
  ['anthony','Men, their rights, and nothing more; women, their rights, and nothing less.','The Revolution masthead','Beginning 1868','https://www.loc.gov/item/2018663248/','安东尼与斯坦顿创办的《革命报》用这句报头口号要求男女完整而平等的政治权利。','妇女报刊、平等权利、选举权运动'],
  ['anthony','Resistance to tyranny is obedience to God.','Statement after conviction for voting','June 18, 1873','https://www.famous-trials.com/anthony/447-statement','安东尼因在1872年总统选举投票而受审。她以公民抗命挑战“公民身份不等于投票权”的法律秩序。','1872年投票案、公民抗命、第十四修正案'],

  ['grant','Let us have peace.','Republican presidential nomination acceptance','May 29, 1868','https://www.presidency.ucsb.edu/documents/acceptance-republican-nomination','内战英雄格兰特以和解口号竞选总统，但其任内也动用联邦权力打击三K党并保护重建时期黑人投票权。','重建、三K党法案、联邦执法'],
  ['grant','The cause of the great War of the Rebellion ... was slavery.','Personal Memoirs of U. S. Grant','1885','https://www.gutenberg.org/files/4367/4367-h/4367-h.htm','格兰特晚年明确把奴隶制认定为内战根本原因，反驳将战争仅解释为抽象州权冲突的叙事。','内战起因、奴隶制、历史记忆'],
  ['grant','Leave the matter of religion to the family altar, the church, and the private school.','Speech to the Army of the Tennessee','September 29, 1875','https://www.presidency.ucsb.edu/documents/remarks-the-reunion-the-army-the-tennessee','格兰特要求公共教育不受宗派控制，反映19世纪公立学校、天主教移民与政教分离的冲突。','公共教育、政教分离、移民政治'],

  ['lee','Secession is nothing but revolution.','Letter to Custis Lee','January 23, 1861','https://leefamilyarchive.org/reference/essays/rachal/index.html','内战前，李认为脱离联邦是革命而非宪法权利；但弗吉尼亚脱离后，他仍选择州忠诚并统率邦联军。','脱离联邦、州忠诚、内战选择'],
  ['lee','I can anticipate no greater calamity for the country than a dissolution of the Union.','Letter to Custis Lee','January 23, 1861','https://leefamilyarchive.org/reference/essays/rachal/index.html','这句话展示李个人反对分裂，却最终加入邦联的矛盾，帮助理解内战中州、地区与国家忠诚的冲突。','联邦危机、地区忠诚、内战'],
  ['lee','I think it wiser ... not to keep open the sores of war.','Letter declining Gettysburg memorial invitation','August 5, 1869','https://www.nps.gov/gett/learn/historyculture/lee-s-letter.htm','战后李拒绝参加葛底斯堡纪念活动，主张淡化冲突。此类和解语言后来常与对解放和黑人权利的遗忘并存。','内战记忆、和解主义、重建遗产'],

  ['andrew-johnson','Treason must be made odious and traitors must be punished and impoverished.','Speech in Nashville','June 9, 1864','https://www.presidency.ucsb.edu/documents/speech-nashville-tennessee','作为支持联邦的南方民主党人，约翰逊一度承诺严惩邦联精英；就任总统后却迅速赦免并恢复许多前邦联州政府。','总统重建、赦免、邦联精英'],
  ['andrew-johnson','The Constitution breaks down all barriers, and restores all the States to their original relations to the Federal Government.','First Annual Message','December 4, 1865','https://www.presidency.ucsb.edu/documents/first-annual-message-11','约翰逊认为南方各州可迅速恢复原有地位，反对国会以黑人公民权为条件重建，导致与激进共和党人正面冲突。','总统重建、国会重建、州地位'],
  ['andrew-johnson','This is a country for white men, and by God, as long as I am President, it shall be a government for white men.','Letter to Thomas C. Fletcher','1866','https://www.nps.gov/anjo/learn/historyculture/race-and-reconstruction.htm','约翰逊的白人至上立场解释了他否决《民权法案》并反对第十四修正案，也推动国会共和党人接管重建。','白人至上、第十四修正案、弹劾危机'],

  ['carnegie','The man who dies thus rich dies disgraced.','The Gospel of Wealth','June 1889','https://www.carnegie.org/about/our-history/gospelofwealth/','卡内基认为富豪应在生前把剩余财富用于公共事业，而不是留给继承人。这为慈善资本主义提供道德辩护。','财富福音、慈善事业、工业资本主义'],
  ['carnegie','The problem of our age is the proper administration of wealth.','The Gospel of Wealth','June 1889','https://www.carnegie.org/about/our-history/gospelofwealth/','在贫富差距扩大与劳资冲突加剧的镀金时代，卡内基把问题定义为精英如何管理财富，而非重新分配生产所有权。','镀金时代、贫富差距、社会达尔文主义'],
  ['carnegie','Surplus wealth is a sacred trust which its possessor is bound to administer in his lifetime for the good of the community.','The Gospel of Wealth','June 1889','https://www.carnegie.org/about/our-history/gospelofwealth/','这句话把私人财富转化为由富豪托管的公共责任，但霍姆斯特德罢工也暴露其慈善理想与严酷劳工实践的矛盾。','慈善资本主义、霍姆斯特德罢工、劳资关系'],
]);

addQuotes([
  ['rockefeller','The day of combination is here to stay. Individualism has gone, never to return.','Remarks on industrial combination','c. 1880s','https://resource.rockarch.org/story/john-d-rockefeller-sr/','洛克菲勒把横向、纵向整合视为工业经济不可逆的趋势。标准石油托拉斯由此成为大企业集中与反托拉斯争论的象征。','标准石油、托拉斯、企业整合'],
  ['rockefeller','I was trained from the beginning to work and to save.','Random Reminiscences of Men and Events','1909','https://www.gutenberg.org/ebooks/17090','洛克菲勒以勤俭和个人品格解释成功，这种自我叙事淡化铁路回扣、竞争压制和垄断结构在财富积累中的作用。','白手起家神话、镀金时代、商业伦理'],
  ['rockefeller','I believe it is every man’s religious duty to get all he can honestly and to give all he can.','Interview on wealth and giving','1905','https://resource.rockarch.org/story/john-d-rockefeller-sr/','洛克菲勒把赚钱与捐赠都描述为宗教义务，代表大企业家以慈善基金会回应社会批评的方式。','慈善基金会、财富集中、社会责任'],

  ['ida-b-wells','The way to right wrongs is to turn the light of truth upon them.','The Light of Truth','1892–1931','https://archive.org/details/lightoftruthwrit0000well','威尔斯以调查报道揭露私刑并非惩罚犯罪，而是维持白人经济与政治权力的恐怖手段。','反私刑运动、调查新闻、吉姆·克劳'],
  ['ida-b-wells','The people must know before they can act, and there is no educator to compare with the press.','The Reason Why the Colored American Is Not in the World’s Columbian Exposition','1893','https://digital.library.upenn.edu/women/wells/exposition/exposition.html','威尔斯把黑人报刊视为组织政治行动、反击主流媒体种族主义叙事的关键教育工具。','黑人报刊、公共舆论、进步时代改革'],
  ['ida-b-wells','A Winchester rifle should have a place of honor in every black home.','Southern Horrors','1892','https://www.gutenberg.org/ebooks/14975','在联邦与州政府拒绝制止私刑时，威尔斯主张黑人自卫。这比温和法律诉求更尖锐地揭示国家保护的失败。','黑人自卫、私刑、联邦不作为'],

  ['booker-t-washington','Cast down your bucket where you are.','Atlanta Exposition Address','September 18, 1895','https://www.loc.gov/exhibits/odyssey/archive/09/0905001r.html','布克·华盛顿劝南方黑人先在农业、工业技能和经济自助中扎根，也劝白人雇用黑人劳工。','亚特兰大妥协、职业教育、经济自助'],
  ['booker-t-washington','In all things that are purely social we can be as separate as the fingers, yet one as the hand in all things essential to mutual progress.','Atlanta Exposition Address','September 18, 1895','https://www.loc.gov/exhibits/odyssey/archive/09/0905001r.html','这句“手指与手掌”比喻接受社会隔离以换取经济合作，遭杜波依斯等人批评为向吉姆·克劳妥协。','隔离、亚特兰大妥协、黑人领导路线'],
  ['booker-t-washington','No race can prosper till it learns that there is as much dignity in tilling a field as in writing a poem.','Up from Slavery','1901','https://docsouth.unc.edu/fpn/washington/washing.html','华盛顿强调劳动尊严与职业训练，反映塔斯基吉模式，也显示其优先经济进步、暂缓政治权利的策略。','塔斯基吉学院、职业教育、自助思想'],

  ['du-bois','The problem of the Twentieth Century is the problem of the color-line.','The Souls of Black Folk','1903','https://www.gutenberg.org/ebooks/408','杜波依斯预言种族隔离与殖民主义将成为新世纪核心矛盾，直接挑战“进步”叙事中的种族排斥。','色线、吉姆·克劳、泛非主义'],
  ['du-bois','One ever feels his twoness—an American, a Negro; two souls, two thoughts, two unreconciled strivings.','The Souls of Black Folk','1903','https://www.gutenberg.org/ebooks/408','“双重意识”描述黑人既以自身眼光、又透过白人社会偏见看待自我的心理与政治张力。','双重意识、黑人身份、种族化社会'],
  ['du-bois','The cost of liberty is less than the price of repression.','The Crisis','c. 1910s','https://www.loc.gov/exhibits/naacp/the-new-negro-movement.html','作为全国有色人种协进会《危机》杂志编辑，杜波依斯主张立即争取公民权、投票权和高等教育，而非等待白人社会自愿改变。','NAACP、立即平权、黑人高等教育'],

  ['bryan','You shall not crucify mankind upon a cross of gold.','Cross of Gold speech','July 9, 1896','https://www.loc.gov/resource/rbpe.24000600/','布莱恩以宗教意象谴责金本位，主张自由铸银以扩大货币、减轻农民和债务人负担，重塑民主党。','自由铸银、民粹主义、1896年大选'],
  ['bryan','The humblest citizen in all the land, when clad in the armor of a righteous cause, is stronger than all the hosts of error.','Cross of Gold speech','July 9, 1896','https://www.loc.gov/resource/rbpe.24000600/','他把普通农民和劳动者塑造成反抗东部金融权力的道德多数，体现民粹政治的生产者主义语言。','生产者主义、农民抗议、民主党重组'],
  ['bryan','Destiny is not a matter of chance; it is a matter of choice.','Political address','1890s','https://www.loc.gov/item/2004668865/','布莱恩的演说强调民主行动可以改变经济制度，符合进步时代通过选举和改革挑战集中权力的信念。','民主改革、民粹演说、政治参与'],

  ['jane-addams','The good we secure for ourselves is precarious and uncertain until it is secured for all of us.','Twenty Years at Hull-House','1910','https://digital.library.upenn.edu/women/addams/hullhouse/hullhouse.html','亚当斯把个人福祉与城市移民、劳工和贫困群体的共同条件联系起来，为社会安置所和社会改革辩护。','赫尔之家、社会安置运动、进步主义'],
  ['jane-addams','Action indeed is the sole medium of expression for ethics.','Democracy and Social Ethics','1902','https://www.gutenberg.org/ebooks/15487','她主张民主伦理必须通过托儿、卫生、教育和劳动立法等实际制度表达，而不仅是私人慈善或道德说教。','社会伦理、市政改革、进步主义女性'],
  ['jane-addams','Private beneficence is totally inadequate to deal with the vast numbers of the city’s disinherited.','Twenty Years at Hull-House','1910','https://digital.library.upenn.edu/women/addams/hullhouse/hullhouse.html','工业城市的大规模贫困使传统私人慈善不足，推动改革者要求政府承担公共卫生、住房和劳动保护责任。','城市化、社会调查、监管国家'],

  ['debs','While there is a lower class, I am in it; while there is a criminal element, I am of it; while there is a soul in prison, I am not free.','Statement to the court','September 18, 1918','https://www.marxists.org/archive/debs/works/1918/court.htm','德布斯因反对一战征兵而依据《间谍法》被判刑，以阶级团结和公民自由挑战战时压制。','《间谍法》、一战反战、社会主义'],
  ['debs','I have no country to fight for; my country is the earth; I am a citizen of the world.','Antiwar speech','1915','https://www.marxists.org/archive/debs/works/1915/war.htm','德布斯把战争视为统治阶级利益、工人承担牺牲的冲突，代表社会主义国际主义对民族动员的批判。','社会主义国际主义、反军国主义、一战'],
  ['debs','The master class has always declared the wars; the subject class has always fought the battles.','Canton antiwar speech','June 16, 1918','https://www.marxists.org/archive/debs/works/1918/canton.htm','这句话以阶级分析解释战争，并成为政府起诉德布斯的依据之一。最高法院随后维持定罪，显示战时言论自由的收缩。','申克时代、言论自由、阶级冲突'],

  ['hoover','Economic depression cannot be cured by legislative action or executive pronouncement.','Address at Colorado Springs','October 1930','https://www.presidency.ucsb.edu/documents/address-colorado-springs-colorado','胡佛强调私人合作、地方救济与自愿主义，担心直接联邦救济会破坏个人责任；危机持续则削弱这一立场。','大萧条、志愿主义、有限政府'],
  ['hoover','Older men declare war. But it is the youth that must fight and die.','Address to the Republican National Convention','June 27, 1944','https://www.presidency.ucsb.edu/documents/address-the-republican-national-convention-chicago','经历一战救济和二战政治后，胡佛用代际牺牲批评轻率战争，反映战间期和平主义与国际主义的争论。','战争代价、战间期、外交争论'],
  ['hoover','Every collectivist revolution rides in on a Trojan horse of emergency.','The Challenge to Liberty','1934','https://archive.org/details/challengetoliber00hoov','胡佛把新政扩张联邦权力比作借紧急状态进入的集体主义，成为保守派反新政论述的重要来源。','反新政、个人主义、现代保守主义'],

  ['eleanor-roosevelt','No one can make you feel inferior without your consent.','Statement reported in the Cairns Post','September 4, 1943','https://erpapers.columbian.gwu.edu/quotations-eleanor-roosevelt','埃莉诺以个人成长语言鼓励被排斥者维护尊严；她也利用第一夫人平台支持黑人、妇女、青年与劳工权利。','第一夫人角色、公民权、女性公共领导'],
  ['eleanor-roosevelt','Where, after all, do universal human rights begin? In small places, close to home.','The Great Question','March 27, 1958','https://www.un.org/en/about-us/udhr/history-of-the-declaration','作为《世界人权宣言》起草委员会主席，她把国际人权原则与学校、工厂和社区日常生活连接起来。','世界人权宣言、联合国、人权外交'],
  ['eleanor-roosevelt','Courage is more exhilarating than fear and in the long run it is easier.','You Learn by Living','1960','https://erpapers.columbian.gwu.edu/quotations-eleanor-roosevelt','埃莉诺把勇气描述为通过逐步行动培养的民主品格，体现她在新政、战时动员和战后人权事业中强调公民参与。','新政自由主义、女性领导、公民参与'],

  ['truman','The buck stops here.','Desk sign in the Oval Office','1945–1953','https://www.trumanlibrary.gov/education/trivia/buck-stops-here-sign','杜鲁门用牌子强调总统必须承担最终决策责任，尤其适用于原子弹、冷战遏制和朝鲜战争等重大选择。','总统权力、行政责任、冷战'],
  ['truman','It must be the policy of the United States to support free peoples who are resisting attempted subjugation.','Truman Doctrine address','March 12, 1947','https://avalon.law.yale.edu/20th_century/trudoc.asp','杜鲁门以援助希腊、土耳其为起点，把美国外交制度化为全球遏制共产主义扩张的政策。','杜鲁门主义、遏制政策、冷战'],
  ['truman','We are not going to turn the clock back to isolationism.','Address on foreign policy','1947','https://www.trumanlibrary.gov/library/public-papers','二战后美国建立联合国、布雷顿森林体系与马歇尔计划，杜鲁门明确拒绝回到战间期有限参与世界事务的路线。','国际主义、马歇尔计划、战后秩序'],
]);

addQuotes([
  ['eisenhower','In the councils of government, we must guard against the acquisition of unwarranted influence ... by the military-industrial complex.','Farewell Address','January 17, 1961','https://www.archives.gov/milestone-documents/president-dwight-d-eisenhowers-farewell-address','艾森豪威尔警告永久军备工业可能扭曲民主决策，反映冷战国家安全体制在和平时期的空前扩张。','军工复合体、冷战国家、总统告别演说'],
  ['eisenhower','Every gun that is made ... signifies, in the final sense, a theft from those who hunger and are not fed.','Chance for Peace address','April 16, 1953','https://www.presidency.ucsb.edu/documents/address-the-chance-for-peace','朝鲜战争末期，艾森豪威尔以社会机会成本批评军备竞赛，同时仍维持遏制与核威慑。','军备竞赛、朝鲜战争、机会成本'],
  ['eisenhower','Plans are worthless, but planning is everything.','Remarks at the National Defense Executive Reserve Conference','November 14, 1957','https://www.presidency.ucsb.edu/documents/remarks-the-national-defense-executive-reserve-conference','这位二战盟军统帅强调面对危机时具体计划会失效，但规划过程能训练组织适应变化。','二战领导、行政管理、冷战准备'],

  ['jfk','Ask not what your country can do for you—ask what you can do for your country.','Inaugural Address','January 20, 1961','https://www.jfklibrary.org/learn/about-jfk/historic-speeches/inaugural-address','肯尼迪以公民服务和代际使命启动“新边疆”，也把国内活力与冷战全球竞争联系起来。','新边疆、公民服务、冷战自由主义'],
  ['jfk','Let every nation know ... that we shall pay any price, bear any burden ... to assure the survival and the success of liberty.','Inaugural Address','January 20, 1961','https://www.jfklibrary.org/learn/about-jfk/historic-speeches/inaugural-address','这句强硬承诺概括冷战全球主义，也预示猪湾事件、古巴导弹危机与越南介入的风险。','遏制政策、古巴导弹危机、全球主义'],
  ['jfk','We choose to go to the Moon ... not because they are easy, but because they are hard.','Rice University Moon Speech','September 12, 1962','https://www.jfklibrary.org/archives/other-resources/john-f-kennedy-speeches/rice-university-19620912','肯尼迪把登月计划塑造成国家能力与自由制度优越性的证明，回应苏联早期太空优势。','太空竞赛、科技国家、冷战'],

  ['lbj','We shall overcome.','Special message to Congress on voting rights','March 15, 1965','https://www.archives.gov/milestone-documents/president-lyndon-johnsons-we-shall-overcome-speech','塞尔玛暴力事件后，约翰逊借用民权运动歌曲推动《投票权法》，把联邦权力用于打破南方剥夺选举权。','投票权法、塞尔玛、联邦民权执法'],
  ['lbj','The Great Society rests on abundance and liberty for all. It demands an end to poverty and racial injustice.','Great Society speech','May 22, 1964','https://www.presidency.ucsb.edu/documents/remarks-the-university-michigan','约翰逊提出以教育、医保、反贫困和环境项目超越物质富裕，完成新政自由主义的下一阶段。','伟大社会、向贫困宣战、现代自由主义'],
  ['lbj','We have the power to shape the civilization that we want.','Great Society speech','May 22, 1964','https://www.presidency.ucsb.edu/documents/remarks-the-university-michigan','这句话体现1960年代自由派对专家治理和积极联邦政府的信心，但越南战争随后消耗政治资本。','积极政府、伟大社会、越南战争'],

  ['nixon','People have got to know whether or not their President is a crook. Well, I’m not a crook.','Press conference in Orlando','November 17, 1973','https://www.presidency.ucsb.edu/documents/the-presidents-news-conference-72','水门事件调查中，尼克松否认个人腐败；录音带与掩盖证据最终导致其辞职，重创公众对政府的信任。','水门事件、总统辞职、政府信任'],
  ['nixon','And so tonight—to you, the great silent majority of my fellow Americans—I ask for your support.','Address to the Nation on Vietnam','November 3, 1969','https://www.presidency.ucsb.edu/documents/address-the-nation-the-war-vietnam','尼克松把反战示威者与支持“越南化”和秩序的沉默多数对立，成为保守派重组的重要政治语言。','沉默多数、越南化、保守派重组'],
  ['nixon','The greatest honor history can bestow is the title of peacemaker.','First Inaugural Address','January 20, 1969','https://www.presidency.ucsb.edu/documents/inaugural-address-1','尼克松以和平承诺上台，后来推动对华开放、缓和政策与军控，同时把越南战争延长到柬埔寨。','缓和政策、对华开放、越南战争'],

  ['reagan','Government is not the solution to our problem; government is the problem.','First Inaugural Address','January 20, 1981','https://www.reaganlibrary.gov/archives/speech/inaugural-address-1981','在滞胀与保守派崛起背景下，里根把联邦监管和税收视为障碍，标志新政以来政府扩张共识的转向。','里根革命、供给侧经济、现代保守主义'],
  ['reagan','Mr. Gorbachev, tear down this wall!','Brandenburg Gate speech','June 12, 1987','https://www.reaganlibrary.gov/archives/speech/remarks-brandenburg-gate','里根以柏林墙象征共产主义压制，结合军备压力与外交谈判推动冷战末期政治攻势。','冷战结束、柏林墙、里根外交'],
  ['reagan','Freedom is never more than one generation away from extinction.','A Time for Choosing','October 27, 1964','https://www.reaganlibrary.gov/archives/speech/time-choosing-speech-october-27-1964','这场支持戈德华特的电视演说使里根成为保守派明星，把自由定义为持续对抗政府扩张的代际责任。','戈德华特、保守运动、有限政府'],

  ['malcolm-x','By any means necessary.','Organization of Afro-American Unity Founding Rally','June 28, 1964','https://www.blackpast.org/african-american-history/speeches-african-american-history/1964-malcolm-x-s-speech-founding-rally-organization-afro-american-unity/','马尔科姆·X在离开“伊斯兰民族”后主张黑人有权采取必要手段争取自由，强调自卫、民族主义与国际人权。','黑人民族主义、自卫、民权运动多元策略'],
  ['malcolm-x','You can’t separate peace from freedom because no one can be at peace unless he has his freedom.','Prospects for Freedom in 1965','January 7, 1965','https://www.marxists.org/reference/archive/malcolm-x/1965/01/07.htm','他拒绝要求被压迫者在没有实质自由时维持“秩序”，挑战主流社会把非暴力顺从等同和平的观点。','自由与秩序、黑人权力、结构性压迫'],
  ['malcolm-x','It’ll be the ballot or it’ll be the bullet.','The Ballot or the Bullet','April 3, 1964','https://americanradioworks.publicradio.org/features/blackspeech/mx.html','马尔科姆·X敦促黑人独立使用选票，同时警告若民主制度继续封锁改变，冲突将升级。','选票政治、黑人民族主义、1964年大选'],

  ['chavez','The fight is never about grapes or lettuce. It is always about people.','United Farm Workers address','1970s','https://www.nps.gov/people/cesar-chavez.htm','查韦斯把葡萄抵制与罢工提升为尊严、公民权和劳工权问题，组织长期被新政劳工法排除的农业工人。','联合农场工人、葡萄抵制、拉丁裔民权'],
  ['chavez','Once social change begins, it cannot be reversed. You cannot uneducate the person who has learned to read.','Commonwealth Club address','November 9, 1984','https://chavezfoundation.org/about-cesar-chavez/','查韦斯强调组织和政治教育会留下持续能力，即使一次罢工或合同失败，工人也不会回到完全无权状态。','基层组织、社会运动、政治教育'],
  ['chavez','Preservation of one’s own culture does not require contempt or disrespect for other cultures.','Statement on cultural identity','1970s','https://www.nps.gov/people/cesar-chavez.htm','这句话把墨西哥裔文化自豪与跨族裔团结结合，反映奇卡诺运动内部民族认同与联盟政治的张力。','奇卡诺运动、文化认同、跨族裔联盟'],

  ['friedan','The problem lay buried, unspoken, for many years in the minds of American women.','The Feminine Mystique','1963','https://archive.org/details/femininemystique00frie','弗里丹把郊区家庭主妇的空虚称为“无名问题”，挑战战后消费文化把女性满足限制在婚姻、家务和母职中的规范。','第二波女权、家庭主妇理想、战后郊区'],
  ['friedan','Women are people, in exactly the same way as men are people.','Statement on women’s equality','1960s','https://www.loc.gov/exhibits/civil-rights-act/multimedia/betty-friedan.html','她把就业、教育和法律平等定义为完整人格权，推动成立全国妇女组织并执行《民权法案》第七章。','全国妇女组织、就业歧视、第二波女权'],
  ['friedan','A woman today has no choice but to find herself, to know herself as a person.','The Feminine Mystique','1963','https://archive.org/details/femininemystique00frie','弗里丹主张女性必须在家庭角色之外发展教育与职业身份，但其早期论述主要聚焦白人中产女性。','性别角色、职业平等、女权运动局限'],

  ['schlafly','The feminist movement taught women to see themselves as victims of an oppressive patriarchy.','The Power of the Positive Woman','1977','https://archive.org/details/powerofpositivew00schl','施拉夫利反对第二波女权对家庭和性别权力的批判，主张传统婚姻角色给予女性独特保护与影响力。','反女权运动、家庭价值、现代保守主义'],
  ['schlafly','ERA means abortion funding, means homosexual privileges, means whatever else.','STOP ERA campaign statement','1970s','https://www.smithsonianmag.com/history/equal-rights-amendment-triumph-phyllis-schlafly-180975609/','施拉夫利把平等权利修正案与征兵、同性恋权利和堕胎联系，成功动员保守派女性阻止足够州批准。','平等权利修正案、保守派女性、文化战争'],
  ['schlafly','The truth is that American women never had it so good.','What’s Wrong with “Equal Rights” for Women?','February 1972','https://www.phyllisschlafly.com/Company_Images/PDF/Phyllis%20Schlafly%20Report%201972-5.pdf','施拉夫利宣称家庭、保护性法律和消费富裕使美国女性已高度受益，以此反对平等权利修正案及第二波女权的压迫叙事。','新右派、女权反弹、文化保守主义'],

  ['carson','In nature nothing exists alone.','Silent Spring','1962','https://www.rachelcarson.org/silent-spring','卡森展示农药会沿食物链扩散，挑战把环境问题视为局部、可隔离技术问题的观念。','《寂静的春天》、生态学、环境运动'],
  ['carson','The “control of nature” is a phrase conceived in arrogance.','Silent Spring','1962','https://www.rachelcarson.org/silent-spring','她批评战后化学工业以征服自然的语言推广DDT，促成公众要求科学监管与环境保护。','DDT、科学监管、环境主义'],
  ['carson','Man is a part of nature, and his war against nature is inevitably a war against himself.','CBS Reports: The Silent Spring of Rachel Carson','April 3, 1963','https://www.cbsnews.com/news/rachel-carson-and-the-awakening-of-environmental-consciousness/','卡森把人类健康与生态系统联系起来，为环境保护署成立和1970年代环境立法提供思想动力。','环境保护署、环境立法、公共健康'],
]);

export const peopleById = Object.fromEntries(people.map((person) => [person.id, person])) as Record<string, Person>;
