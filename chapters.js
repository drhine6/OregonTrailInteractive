const chapters = [
  {
    id: "INTRO",
    alignment: "left",
    hidden: false,
    title: "The Oregon Trail",
    image: "",
    description: `The Oregon Trail was a 2,170-mile (3,490 km)[1] east–west, large-wheeled wagon route and emigrant trail in the United States that connected the Missouri River to valleys in Oregon. The eastern part of the Oregon Trail spanned part of what is now the state of Kansas and nearly all of what are now the states of Nebraska and Wyoming. The western half of the trail spanned most of the current states of Idaho and Oregon.
<br/><br/>
      The Oregon Trail was laid by fur traders and trappers from about 1811 to 1840 and was only passable on foot or on horseback. By 1836, when the first migrant wagon train was organized in Independence, Missouri, a wagon trail had been cleared to Fort Hall, Idaho. Wagon trails were cleared increasingly farther west and eventually reached all the way to the Willamette Valley in Oregon, at which point what came to be called the Oregon Trail was complete, even as almost annual improvements were made in the form of bridges, cutoffs, ferries, and roads, which made the trip faster and safer. From various starting points in Iowa, Missouri, or Nebraska Territory, the routes converged along the lower Platte River Valley near Fort Kearny, Nebraska Territory, and led to fertile farmlands west of the Rocky Mountains.
      <br/><br/>
      From the early to mid-1830s (and particularly through the years 1846–1869) the Oregon Trail and its many offshoots were used by about 400,000 settlers, farmers, miners, ranchers, and business owners and their families. The eastern half of the trail was also used by travelers on the California Trail (from 1843), Mormon Trail (from 1847), and Bozeman Trail (from 1863) before turning off to their separate destinations. Use of the trail declined after the first transcontinental railroad was completed in 1869, making the trip west substantially faster, cheaper, and safer. Today, modern highways, such as Interstate 80 and Interstate 84, follow parts of the same course westward and pass through towns originally established to serve those using the Oregon Trail.`,
    location: {
      center: [-111, 42],
      zoom: 5,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: true,
    callback: "enableFreetime",
    onChapterEnter: [
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "10CTW_LABELS",
        duration: 2000,
        opacity: 1,
      },
    ],
    onChapterExit: [
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "10CTW_LABELS",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "IND",
    alignment: "left",
    hidden: false,
    title: "Independence, MO",
    image: "",
    description: `
    Founded in 1827 near where the <br />
    Missouri River flows into the Mississippi, the town of
    Independence grew rapidly as a trading post. By the 1840's, it
    was the most popular "jumping off" point for pioneers to stock
    their wagons with supplies before heading out to Oregon or
    California.
  <br/><br/>
    Missionaries from the Church of Jesus Christ of Latter Day
    Saints attempted to make Independence their Zion, or holy
    capital. But the Mormons came into conflict with the local
    economic and political establishment, and by 1833 the
    missionaries were driven out. From then on, Nauvoo, Missouri,
    instead of Independence, became the point of departure for
    Mormons heading out along the Oregon Trail.
  `,
    location: {
      center: [-94.4155, 39.0911],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "CRT",
    alignment: "right",
    hidden: false,
    title: "Courthouse Rock",
    image: "",
    description: `
    Located in the Platte River valley, Courthouse Rock and its smaller companion, Jailhouse Rock, were among the first landmarks seen by pioneers heading west.
  <br/><br/>
  Named after the courthouse in Saint Louis, the rocks were often mentioned in contemporary accounts. Artist Alfred J. Miller noted it as a "curious formation of Earth near the Platte River." Famous British explorer Sir Richard Burton wrote that it "resembled anything more than a court house," and that it really looked like an irregular pyramid.
  <br/><br/>
  Like Chimney Rock, which is about twelve miles west, Courthouse and Jailhouse Rock have eroded somewhat since the days of the great emigrations along the Oregon Trail.
  `,
    location: {
      center: [-103.11578, 41.596943],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "CHM",
    alignment: "left",
    hidden: false,
    title: "Chimney Rock",
    image: "",
    description: `
    Located some twelve miles west of Courthouse and Jailhouse Rock, Chimney Rock was one of the most picturesque landmarks along the Oregon Trail. It signaled the end of the prairies as the trail became more steep and rugged heading west towards the Rocky Mountains.
  <br/><br/>
  Many drawings of it were made by surveyors and artists, and most pioneers mentioned it in their diaries. Travelers reported that it was visible forty miles away. General Joel Palmer, leading a surveying party in 1845, said it had the "appearance of a haystack with a pole running far above its top."
  <br/><br/>
  Many 19th century accounts stated that Chimney Rock was losing its height due to erosion. But some measurements recorded back then are very close to the modern measurement of 325 feet from tip to base and 120 feet for the spire.
  `,
    location: {
      center: [-103.332117, 41.702831],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "FTL",
    alignment: "right",
    hidden: false,
    title: "Fort Laramie",
    image: "",
    description: `
    The fort was begun by fur traders as Fort William in 1834 where the North Platte and Laramie rivers meet. In 1849, the U.S. Military purchased the fort and named it in honor of Jacques La Ramie, a local French fur trapper.
  <br/><br/>
  One of the most important forts in the settlement of the American West, Fort Laramie served many functions throughout its history. It was located along the Oregon Trail to protect and supply emigrant wagon trains. It later became a major link in the Pony Express, Overland Stage and transcontinental telegraph systems. It also served as a base of operations for the High Plains Indian Wars.
  <br/><br/>
  Since 1937 it has been preserved as a National Monument and is maintained by the National Park Service.
  `,
    location: {
      center: [-104.557655, 42.20322],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "INDR",
    alignment: "right",
    hidden: false,
    title: "Independence Rock",
    image: "",
    description: `
    Named for a fur trader's Fourth of July celebration in 1830, this huge rock became one of the most famous of all Oregon Trail landmarks. The giant piece of granite is 1,900 feet long, 700 feet wide, and 128 feet high.
  <br/><br/>
  The landmark was a favorite resting place for travelers along the trail. Called the "Great Register of the Desert", more than 5,000 names of early emigrant were carved on this boulder.
  <br/><br/>
  Starting the trail in the early spring, emigrants along the Oregon Trail hoped to reach Independence Rock by July 4, Independence Day. If they had not arrived by then, they knew they were behind schedule.
  `,
    location: {
      center: [-107.131858, 42.493539],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "FTB",
    alignment: "right",
    hidden: false,
    title: "Fort Bridger",
    image: "",
    description: `
    A mountain man named Jim Bridger began this fort as a trading post in 1842. It soon grew to be one of the most important outfitting points for emigrants along the Oregon Trail.
  <br/><br/>
  Mormon settlement near Fort Bridger led to tensions between the Mormon authorities and the federal government. President Buchanan dispatched U.S. troops to the area in 1857 under the command of Colonel A.S. Johnston.
  <br/><br/>
  The Mormons responded by quickly mobilizing the Nauvoo Legion. This guerrilla militia force burned down Fort Bridger and Fort Supply, stampeded thousands of army cattle, and set fire to the prairie grass and seventy-two army supply wagons.
  <br/><br/>
  The so-called "Mormon War" ended when US troops under Johnston occupied Salt Lake City, the Mormon capital. Fort Bridger was later rebuilt and served as a station on the Pony Express and Overland Stage routes until 1890, when the fort was finally abandoned.
  `,
    location: {
      center: [-110.389644, 41.317907],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "SS",
    alignment: "right",
    hidden: false,
    title: "Soda Springs",
    image: "",
    description: `
    Natural bubbling pools of carbonated water, caused by ancient volcanic activity, have long made Soda Springs an attraction. Local Indians, fur traders and trappers visited the springs prior to the days of the Oregon Trail emigrations.
  <br/><br/>
  Soda Springs was located along a shortcut in the trail off of the main route to Fort Hall.
  <br/><br/>
  Emigrants used the pools of water for medicinal and bathing purposes. Many pioneers and their animals became sick when they drank too much of the alkali water from the springs.
  `,
    location: {
      center: [-111.605885, 42.65708],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "FTH",
    alignment: "right",
    hidden: false,
    title: "Fort Hall",
    image: "",
    description: `
    Established by Nathaniel Jarvis Wyeth in 1834 along the Snake River, Fort Hall first served as a fur trading post.
  <br/><br/>
  The British flag flew over Fort Hall briefly when it was purchased by an English company, until a treaty placed it and the rest of the Oregon Country in United States territory.
  <br/><br/>
  Early emigrants on the Oregon Trail usually abandoned their wagons at the fort and continued on foot with their animals. But in 1843, Dr. Marcus Whitman, who had established a mission near Walla Walla, Washington, led a wagon train westward from the fort. From then on, migrations along the trail increased as the pioneers could now travel all the way to Oregon with their wagons and possessions.
  `,
    location: {
      center: [-112.420306, 42.844082],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "FTBO",
    alignment: "left",
    hidden: false,
    title: "Fort Boise",
    image: "",
    description: `
    Begun by a British firm, Fort Boise was established in 1834 as a direct competitor to the nearby Fort Hall. It was first located along the Snake River near the present town of Parma, Idaho.
  <br/><br/>
  The fort served as a supply point along the Oregon Trail until 1854, when it was abandoned due to flooding and Indian attacks. In 1863, the military constructed a new Fort Boise near the present town of Boise, Idaho.
  `,
    location: {
      center: [-116.20844, 43.607805],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "TD",
    alignment: "right",
    hidden: false,
    title: "The Dalles",
    image: "",
    description: `
    The Dalles was named by fur trappers for the French word for gutter. Here emigrants floated down the Columbia River in rafts through the stony river gorge.
  <br/><br/>
  The passage, with emigrants and their wagons crowded onto a small wooden raft, was often perilous. As N.M. Bogart described in 1843, "When trying to pass some of the Cascades their frail craft would get caught in one of the many whirlpools, the water dashing over them, and drenching them through and through."
  <br/><br/>
  The Barlow Toll Road opened in 1845, offering emigrants an alternative to the Columbia River route to Oregon City. The wagon ride along the toll road took a long route around Mount Hood, but it was a much safer method than rafting.
  `,
    location: {
      center: [-121.178654, 45.606325],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
  {
    id: "OC",
    alignment: "left",
    hidden: false,
    title: "Oregon City",
    image: "",
    description: `
    Founded in 1842 near where the Willamette River flows into the Columbia River, Oregon City was the first territorial capital of Oregon.
  <br/><br/>
  Always a natural place of commerce between Indians and whites, the town also utilized the nearby river as a dependable source of power for mills for its economic development.
  <br/><br/>
  Due to the great migrations along the trail, Oregon City grew rapidly as an economic center of the territory. Emigrants arrived here at the end of the trail to establish their land claims in the region.
  <br/><br/>
  Local industries sprung up to resupply emigrants planning to start their farms. Today, the city is a suburb of the much larger city of Portland, Oregon.  
  `,
    location: {
      center: [-122.604978, 45.359682],
      zoom: 13,
      pitch: 0,
      bearing: 0,
      speed: 0.6,
    },
    mapAnimation: "flyTo",
    rotateAnimation: false,
    callback: "disableFreetime",
    onChapterEnter: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 1,
      },
      {
        layer: "layer-with-pulsing-dot",
        duration: 2000,
        opacity: 0,
      },
    ],
    onChapterExit: [
      {
        layer: "berdansk",
        duration: 2000,
        opacity: 0,
      },
      {
        layer: "satellite",
        duration: 2000,
        opacity: 0,
      },
    ],
  },
];
