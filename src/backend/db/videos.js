import { v4 as uuid } from 'uuid';
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  // Audio
  {
    _id: uuid(),
    title: 'Sony WH-1000XM5 Review: Two Steps Forward, One Step Back!',
    description: "Sony's MK5 noise cancelling headphones are still king of the hill.",
    videoUrl: 'https://youtube.com/embed/6CsJZxfZsL0',
    thumbnail: 'https://i.ytimg.com/vi/6CsJZxfZsL0/hq720.jpg',
    creator: 'MKBHD',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'AirPods Pro Unboxing & Impressions!',
    description: 'AirPods Pro are finally noise cancelling earbuds. For $250. From Apple.',
    videoUrl: 'https://youtube.com/embed/MrUhzYdcX6w',
    thumbnail: 'https://i.ytimg.com/vi/MrUhzYdcX6w/hq720.jpg',
    creator: 'MKBHD',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: "NOTHING ear(1) - Let's Talk",
    description:
      "Thoughts on the NOTHING ear(1). The $99 wireless earphones from Carl Pei's new venture.",
    videoUrl: 'https://youtube.com/embed/-zTNuxUl5lM',
    thumbnail: 'https://i.ytimg.com/vi/-zTNuxUl5lM/hq720.jpg',
    creator: 'Dave2D',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'AirPods 3 vs 2 vs Pro vs Max - Every AirPods Compared!',
    description:
      'Thanks to Best Buy for sponsoring this video! Comparing all the AirPods! New AirPods 3 vs 2 vs AirPods Pro and AirPods Max. Enjoy!',
    videoUrl: 'https://youtube.com/embed/FfWGo_zw-kk',
    thumbnail: 'https://i.ytimg.com/vi/FfWGo_zw-kk/hq720.jpg',
    creator: 'Jonathan Morrison',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'Sony WH-1000XM4 Review: The Final Form!',
    description: 'Even better headphones. Still a terrible name.',
    videoUrl: 'https://youtube.com/embed/bInJjmH31Hk',
    thumbnail: 'https://i.ytimg.com/vi/bInJjmH31Hk/hq720.jpg',
    creator: 'MKBHD',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'Nothing Ear(1) Review: See Through the Hype!',
    description: 'Behind the hype these $99 earbuds are actually a pretty great pickup.',
    videoUrl: 'https://youtube.com/embed/6E9cdgMvQT0',
    thumbnail: 'https://i.ytimg.com/vi/6E9cdgMvQT0/hq720.jpg',
    creator: 'MKBHD',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'Sony WF-1000XM4 review: silence to my ears',
    description:
      "Sony's new WF-1000XM4 wireless earbuds have powerful noise cancellation that rivals over-ear headphones. They offer fantastic sound quality with support for the LDAC codec and beat competitors like the AirPods Pro and Bose QuietComfort Earbuds in battery life. Are these the new noise-canceling buds to get?",
    videoUrl: 'https://youtube.com/embed/fMw1h4hKT_E',
    thumbnail: 'https://i.ytimg.com/vi/fMw1h4hKT_E/hq720.jpg',
    creator: 'The Verge',
    category: 'Audio',
    topVideos: true,
  },
  {
    _id: uuid(),
    title: 'Samsung Galaxy Buds Plus: The Go-To!',
    description: "The best best wireless earbuds that aren't AirPods.",
    videoUrl: 'https://youtube.com/embed/QZgIArBFmmE',
    thumbnail: 'https://i.ytimg.com/vi/QZgIArBFmmE/hq720.jpg',
    creator: 'MKBHD',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'Google Pixel Buds review',
    description:
      "Google's Pixel Buds get a few of the basics right when it comes to wireless earbuds. Language translation via the Google Translate app is helpful in a pinch, and the Google Assistant experience is genuinely fast and fun. But these $159 earbuds are fussy, from the way that they fit in your ears to the way that they fit in the case. And not everyone will love the open design, which lets lots of outside noise in. The Pixel Buds are Google's first attempt at making wireless earbuds, and it shows.",
    videoUrl: 'https://youtube.com/embed/mZpGOQ7tBKE',
    thumbnail: 'https://i.ytimg.com/vi/mZpGOQ7tBKE/hq720.jpg',
    creator: 'The Verge',
    category: 'Audio',
  },
  {
    _id: uuid(),
    title: 'Google Pixel Buds Review: WAY Better!',
    description: 'Pixel Buds vault right up to where they belong. ????',
    videoUrl: 'https://youtube.com/embed/48bK3mmjgRE',
    thumbnail: 'https://i.ytimg.com/vi/48bK3mmjgRE/hq720.jpg',
    creator: 'MKBHD',
    category: 'Audio',
  },
  // Phones
  {
    _id: uuid(),
    title: 'Galaxy S22 Ultra Review: Separating from the Pack!',
    description:
      "Samsung's Galaxy S22 Ultra separates itself from the rest of the lineup with more than just specs",
    videoUrl: 'https://youtube.com/embed/vXIAB_1FEC0',
    thumbnail:
      'https://i.ytimg.com/vi/vXIAB_1FEC0/hq720.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHtTz40hLk5gIVhI9BgzEILNJvcw',
    creator: 'MKBHD',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'The Fastest Android Phone - ASUS ROG',
    description:
      'The fastest Android phone. Powerful performance from the Snapdragon 8 Gen 1 Plus.',
    videoUrl: 'https://youtube.com/embed/1WIFY7_TZUE',
    thumbnail: 'https://i.ytimg.com/vi/1WIFY7_TZUE/hq720.jpg',
    creator: 'Dave2D',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'ONEPLUS 10 PRO: BEHIND THE CURVE',
    description:
      'The 10 Pro is an encouraging step toward OnePlus becoming a true competitor to Samsung and Google. The hardware is great, a Snapdragon 8 Gen 1 chipset delivers great performance, and the $899 price is right. But there are still some places where OnePlus needs to do some catching up, starting with the camera system.',
    videoUrl: 'https://www.youtube.com/embed/y84aBQMFDhQ',
    thumbnail: 'https://i.ytimg.com/vi/y84aBQMFDhQ/hq720.jpg',
    creator: 'The Verge',
    category: 'Phones',
    topVideos: true,
  },
  {
    _id: uuid(),
    title: 'iPhone 13 review: worth the upgrade?',
    description:
      'Apples iPhone 13 and 13 mini are here with smaller notches, larger batteries, and redesigned camera arrays. There is also a more powerful A15 Bionic processor and cinematic mode for video. With a starting price of $799 and $699, respectively, ($829 and $729 before carrier discounts) will this years iPhones add enough value to make the upgrade worth it? ',
    videoUrl: 'https://www.youtube.com/embed/Lsla5yJpDi8',
    thumbnail: 'https://i.ytimg.com/vi/Lsla5yJpDi8/hq720.jpg',
    creator: 'The Verge',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'My Pixel 6 Pro Review',
    description:
      ' Pixel 6 and 6 Pro Review. Amazing phone for the money but the camera system is not what I expected.',
    videoUrl: 'https://www.youtube.com/embed/Lsla5yJpDi8',
    thumbnail: 'https://i.ytimg.com/vi/uUR8V4oBCvA/hq720.jpg',
    creator: 'Dave2D',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'iPhone 12 Pro vs 12 Unboxing + 1 Week Later Review!',
    description: '',
    videoUrl: 'https://www.youtube.com/embed/0HWy4tEO4Gc',
    thumbnail: 'https://i.ytimg.com/vi/0HWy4tEO4Gc/hq720.jpg',
    creator: 'Jonathan Morrison',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'Galaxy S22 Ultra hands-on: just call it a note',
    description:
      'The Samsung Galaxy S22 Ultra has shaped up to be everything that leaks, hints, and speculation indicated it would be: a Samsung Galaxy Note, minus the Note branding. It offers a 6.8-inch screen, a built-in S pen stylus, a boatload of cameras, a $1,199 price tag, and a boxy shape straight from the Galaxy Note series',
    videoUrl: 'https://www.youtube.com/embed/3F0tSL8oVJI',
    thumbnail: 'https://i.ytimg.com/vi/3F0tSL8oVJI/hq720.jpg',
    creator: 'The Verge',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'What Happens When the iPhone Peaks?',
    description: 'Are we at peak smartphone, or it just a hiccup from the chip shortage?',
    videoUrl: 'https://www.youtube.com/embed/ZQ4E0JJcxz0',
    thumbnail: 'https://i.ytimg.com/vi/ZQ4E0JJcxz0/hq720.jpg',
    creator: 'MKBHD',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'Galaxy S22 Ultra Impressions: It is a Note!',
    description: "Samsung's new flagship is here starting at $1200",
    videoUrl: 'https://www.youtube.com/embed/ldadR6XqiWE',
    thumbnail: 'https://i.ytimg.com/vi/ldadR6XqiWE/hq720.jpg',
    creator: 'MKBHD',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'This Smartphone is Built Different...',
    description: 'The Fairphone 4 is the most modular, sustainable phone in the world.',
    videoUrl: 'https://www.youtube.com/embed/gkmzDwgvqQM',
    thumbnail: 'https://i.ytimg.com/vi/gkmzDwgvqQM/hq720.jpg',
    creator: 'MKBHD',
    category: 'Phones',
    topVideos: true,
  },
  {
    _id: uuid(),
    title: 'Samsung Galaxy Z Fold 3 Impressions: 3 New Features!',
    description:
      'Z Fold 3 adds S-Pen support, 120Hz cover display and a hidden under-display selfie camera ????',
    videoUrl: 'https://www.youtube.com/embed/ek9bmIlDens',
    thumbnail: 'https://i.ytimg.com/vi/ek9bmIlDens/hq720.jpg',
    creator: 'MKBHD',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'Oppo Find N - Folding a Phone Better than Samsung?',
    description: "My Oppo Find N Review. This Oppo's First Folding Phone and it's pretty awesome.",
    videoUrl: 'https://www.youtube.com/embed/1uDfnHoPq3w',
    thumbnail: 'https://i.ytimg.com/vi/1uDfnHoPq3w/hq720.jpg',
    creator: 'Dave2D',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'ROG Phone 5 Ultimate Review: The Most Ridiculous Custom!',
    description: 'ROG Phone 5 Ultimate Edition is ridiculous and unnecessary and very fun.',
    videoUrl: 'https://www.youtube.com/embed/6pf2KJD5qf0',
    thumbnail: 'https://i.ytimg.com/vi/6pf2KJD5qf0/hq720.jpg',
    creator: 'MKBHD',
    category: 'Phones',
  },
  {
    _id: uuid(),
    title: 'Pixel 6 Unboxing & Reactions!',
    description:
      'Marques and the gang unbox one of the most highly anticipated phones of the year, the Pixel 6.',
    videoUrl: 'https://www.youtube.com/embed/-Y8rdML9fpI',
    thumbnail: 'https://i.ytimg.com/vi/-Y8rdML9fpI/hq720.jpg',
    creator: 'The Studio',
    category: 'Phones',
  },
  // Laptops
  {
    _id: uuid(),
    title: 'Dell XPS 13 Plus: Is that a??? touch bar? ????',
    description:
      'Dell???s new XPS 13 Plus launched today, with a starting price of $1,199. It looks similar to the previous XPS 13 on the outside ??? but open it up, and you???ll find a new haptic touchpad, a depressed keyboard, and a ???capacitive touch function row??? that is, according to Dell, totally not a touch bar. There are new processors, better speakers, and an OLED display option. We???ll find out how well this new package works when the device launches worldwide in the spring.',
    videoUrl: 'https://www.youtube.com/embed/CiMhA_ZbwI0',
    thumbnail: 'https://i.ytimg.com/vi/CiMhA_ZbwI0/hq720.jpg',
    creator: 'The Verge',
    category: 'Laptops',
  },
  {
    _id: uuid(),
    title: 'Microsoft Surface Laptop Studio: what the what?',
    description:
      'Microsoft just unveiled its new Surface Laptop Studio. It is a successor to the detachable-screen surface book and features a new hinge, improved processors, and a 120Hz refresh rate display. Pricing starts at $1,599 and includes 16GB of RAM, an 11th gen Intel Core i5 processor with Iris Xe graphics, and 256GB of SSD storage. ',
    videoUrl: 'https://www.youtube.com/embed/AqkCuKH76c4',
    thumbnail: 'https://i.ytimg.com/vi/AqkCuKH76c4/hq720.jpg',
    creator: 'The Verge',
    category: 'Laptops',
  },
  {
    _id: uuid(),
    title: '16" Macbook Pro First Impressions!',
    description: 'Hands on with the 16" Macbook Pro, the newest best Apple laptop!',
    videoUrl: 'https://www.youtube.com/embed/uDAv4qOU_04',
    thumbnail: 'https://i.ytimg.com/vi/uDAv4qOU_04/hq720.jpg',
    creator: 'MKBHD',
    category: 'Laptops',
    topVideos: true,
  },
  {
    _id: uuid(),
    title: 'You have Gotta See This FOLDING Laptop!',
    description:
      'First look at the Asus ZenBook Fold Laptop. This is a super cool 17" laptop that can fold in half!',
    videoUrl: 'https://www.youtube.com/embed/jFGhvYLbBRE',
    thumbnail: 'https://i.ytimg.com/vi/jFGhvYLbBRE/hq720.jpg',
    creator: 'Dave2D',
    category: 'Laptops',
  },
  {
    _id: uuid(),
    title: 'MacBook Pro 14??? vs Mac Studio',
    description: 'Which One Would You Pick for 2000$?',
    videoUrl: 'https://www.youtube.com/embed/ey1Gieu5_ws',
    thumbnail: 'https://i.ytimg.com/vi/ey1Gieu5_ws/hq720.jpg',
    creator: 'Andres Vidoza',
    category: 'Laptops',
  },
  {
    _id: uuid(),
    title: 'This Laptop Has A Dial And It is AMAZING!!',
    description:
      'First impressions of the Asus ProArt StudioBook 16 and VivoBook Pro. These are the best laptops Asus makes for content creation.',
    videoUrl: 'https://www.youtube.com/embed/PMRZWAVyerM',
    thumbnail: 'https://i.ytimg.com/vi/PMRZWAVyerM/hq720.jpg',
    creator: 'Dave2D',
    category: 'Laptops',
  },
  {
    _id: uuid(),
    title: 'Lenovo ThinkPad Z-Series: the new laptops on the block',
    description:
      'Lenovo launched a new line of ThinkPads at CES 2022. The Z-Series targets a Gen-Z audience, sporting a thin and light build, multiple color options, eco-friendly packaging, and new AMD processors.',
    videoUrl: 'https://www.youtube.com/embed/4IKUEpn1DjE',
    thumbnail: 'https://i.ytimg.com/vi/4IKUEpn1DjE/hq720.jpg',
    creator: 'The Verge',
    category: 'Laptops',
  },
  {
    _id: uuid(),
    title: 'XPS 17 (2021) Review',
    description:
      'My review of the 2021 Dell XPS 17 (9710). This is the best laptop Dell has ever put out in their XPS line. But omfg ... that trackpad',
    videoUrl: 'https://www.youtube.com/embed/Xhc3Rq_HZYE',
    thumbnail: 'https://i.ytimg.com/vi/Xhc3Rq_HZYE/hq720.jpg',
    creator: 'Dave2D',
    category: 'Laptops',
  },
  {
    _id: uuid(),
    title: 'The Framework Laptop - I Love It!',
    description:
      'My review of the Framework Laptop. This is the best laptop you can get right now if you want a completely repairable and upgradeable device.',
    videoUrl: 'https://www.youtube.com/embed/jmgBwMHpP1w',
    thumbnail: 'https://i.ytimg.com/vi/jmgBwMHpP1w/hq720.jpg',
    creator: 'Dave2D',
    category: 'Laptops',
  },
  // Gaming
  {
    _id: uuid(),
    title: 'ASUS ROG Flow Z13 review',
    description:
      'The Asus ROG Flow Z13 is a gaming tablet that looks like a Surface Pro, but it can run many games at playable frame rates. It is not an affordable device, and it cannot run demanding games well, but it is an impressive effort.',
    videoUrl: 'https://www.youtube.com/embed/1qq2K4Xj95k',
    thumbnail: 'https://i.ytimg.com/vi/1qq2K4Xj95k/hq720.jpg',
    creator: 'The Verge',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'Alienware at CES 2022: QD-OLED monitor, X14 laptop and Concept Nyx',
    description:
      'Alienware has been busy during the past year, whipping up several exciting announcements in time for CES 2022. We???ve covered the biggest ones, including its new 14-inch X14 gaming laptop, the 34-inch curved QD-OLED gaming monitor, Concept Nyx, and Concept Polaris',
    videoUrl: 'https://www.youtube.com/embed/mOO2vp7cB7I',
    thumbnail: 'https://i.ytimg.com/vi/mOO2vp7cB7I/hq720.jpg',
    creator: 'The Verge',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'Steam Deck is a glorious mess',
    description:
      'The Steam Deck is a Linux handheld gaming PC that runs Windows games like a Nintendo Switch, and it is damn good at it... when it works. But the half-baked console gave us a lot of trouble, and we don???t review gadgets on promise!  Here is why Sean Hollister thinks it is more like an OG Game Boy than a Nintendo Switch, transformative despite not yet meeting its potential.',
    videoUrl: 'https://www.youtube.com/embed/0w64KhTguWA',
    thumbnail: 'https://i.ytimg.com/vi/0w64KhTguWA/hq720.jpg',
    creator: 'The Verge',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'Incredible Laptops from ASUS - Flow X16 + Strix SE',
    description: 'The Flow X16 is so cool. That mini-LED 165Hz panel is HOT!',
    videoUrl: 'https://www.youtube.com/embed/lWqlDixckSI',
    thumbnail: 'https://i.ytimg.com/vi/lWqlDixckSI/hq720.jpg',
    creator: 'Dave2D',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'ASUS Is Already Killing It!',
    description:
      'Before a review, an early look at Ryzen 6000 and Intel 12th Gen Laptops. The 2022 ROG Z13, G14, G15, Zephyrus Duo, Strix Scar 15, F15 A15. These are the best gaming laptops that Asus have ever put out.',
    videoUrl: 'https://www.youtube.com/embed/PdBTkgtnTsw',
    thumbnail: 'https://i.ytimg.com/vi/PdBTkgtnTsw/hq720.jpg',
    creator: 'Dave2D',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: '"the best laptop mouse" - Razer Orochi V2',
    description:
      'Dave2D Razer Orochi v2 review. This is the best laptop mouse right now. Just be aware of the weird marketing around it.',
    videoUrl: 'https://www.youtube.com/embed/8Uv-ffvBXOg',
    thumbnail: 'https://i.ytimg.com/vi/8Uv-ffvBXOg/hq720.jpg',
    creator: 'Dave2D',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'Nvidia RTX 3060 - $329 Gaming',
    description: 'My review of the Nvidia RTX 3060. The cheapest RTX 30 series GPU from Nvidia.',
    videoUrl: 'https://www.youtube.com/embed/5-lNLNfKr3s',
    thumbnail: 'https://i.ytimg.com/vi/5-lNLNfKr3s/hq720.jpg',
    creator: 'Dave2D',
    category: 'Gaming',
    topVideos: true,
  },
  {
    _id: uuid(),
    title: '$1,300 Gaming PC Build Guide 2022',
    description:
      'Finally, the time is here to be able to make amazing gaming systems that can run any game at 1080P and even 1440P without making you broke! This system has amazing bang for buck performance and an upgrade path that will amaze you.',
    videoUrl: 'https://www.youtube.com/embed/O-Pj9LLHtbM',
    thumbnail: 'https://i.ytimg.com/vi/O-Pj9LLHtbM/hq720.jpg',
    creator: 'Toast Bros',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'PlayStation 5 Controller: Major Key!',
    description: 'Why the PS5 controller feels more next gen than any other piece!',
    videoUrl: 'https://www.youtube.com/embed/imx_-6tHjhw',
    thumbnail: 'https://i.ytimg.com/vi/imx_-6tHjhw/hq720.jpg',
    creator: 'MKBHD',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'The Analogue Pocket is a modern Game Boy!',
    description:
      'Adam gives his take on the Analogue Pocket, a modernized Gameboy that plays real cartridges ??? not ROMs ??? and comes with bonus features like a built-in chiptune music maker.',
    videoUrl: 'https://www.youtube.com/embed/-a9a85P6etM',
    thumbnail: 'https://i.ytimg.com/vi/-a9a85P6etM/hq720.jpg',
    creator: 'The Studio',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'Steam Deck Review - I Love This Thing!',
    description: 'My review of the Valve Steam Deck with AMDs RDNA2 GPU',
    videoUrl: 'https://www.youtube.com/embed/zxcvwuaXC_w',
    thumbnail: 'https://i.ytimg.com/vi/zxcvwuaXC_w/hq720.jpg',
    creator: 'Dave2D',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'About The OLED Nintendo Switch...',
    description: 'Thoughts on the New Nintendo Switch (OLED)',
    videoUrl: 'https://www.youtube.com/embed/TMFEEOjQ0tA',
    thumbnail: 'https://i.ytimg.com/vi/TMFEEOjQ0tA/hq720.jpg',
    creator: 'Andres Vidoza',
    category: 'Gaming',
  },
  {
    _id: uuid(),
    title: 'Xbox Series S in 2022 Worth it? Budget Gaming PC Replacement',
    description:
      'Xbox series s is the best bang for your buck when it comes to potentially taking over a playstation 5 and custom PC.',
    videoUrl: 'https://www.youtube.com/embed/MNgglrzqTVk',
    thumbnail: 'https://i.ytimg.com/vi/MNgglrzqTVk/hq720.jpg',
    creator: 'Andres Vidoza',
    category: 'Gaming',
  },
];
