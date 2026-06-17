// Hello World TV — fixed app.js
// Replace your old app.js with this full file.

const channels = [
  {
    name: "FIFA Plus",
    category: "Sports",
    logo: "https://i.ibb.co.com/vnbkF0r/fifa-world-cup-2026-logo-png-seeklogo-665644.png",
    url: "https://live.kooran53.cfd/goolato3_720/index.m3u8",
  },
  {
    name: "FIFA Plus EN",
    category: "Sports",
    logo: "https://i.ibb.co.com/vnbkF0r/fifa-world-cup-2026-logo-png-seeklogo-665644.png",
    url: "https://37b4c228.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWZyX0ZJRkFQbHVzRnJlbmNoX0hMUw/6f5437c5-e015-4754-8476-c8c6d27d3a55/1.m3u8",
  },
  {
    name: "BTV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/TXNCpCP/Btv-National.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8",
  },
  {
    name: "BTV HD",
    category: "Bangladeshi",
    logo: "https://i.ibb.co.com/TXNCpCP/Btv-National.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1709/output/index.m3u8",
  },
  {
    name: "RTV Live",
    category: "bangladeshi",
    logo: "https://images.seeklogo.com/logo-png/23/1/r-tv-logo-png_seeklogo-237300.png",
    url: "https://tvsen6.aynaott.com/rtv/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "Channel I HD",
    category: "bangladeshi",
    logo: "https://images.seeklogo.com/logo-png/53/1/channel-i-logo-png_seeklogo-532023.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1723/output/1723-audio_113532_eng=113200-video=2202800.m3u8",
  },
  {
    name: "Deepto TV Local",
    category: "bangladeshi",
    logo: "https://images.seeklogo.com/logo-png/51/1/deepto-tv-logo-png_seeklogo-513994.png",
    url: "https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8",
  },
  {
    name: "NTV",
    category: "bangladeshi",
    logo: "https://images.seeklogo.com/logo-png/39/1/ntv-channel-logo-png_seeklogo-396286.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1716/output/1716-audio_113462_eng=113200-video=1181200.m3u8",
  },
  {
    name: "Channel9 HD",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/Xxrdnxkp/Channel9-HD.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1729/output/1729-audio_113592_eng=113200-video=1181200.m3u8",
  },
  {
    name: "Bangla Vision",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/5X1JmFbF/Bangla-Vision.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1715/output/1715-audio_113452_eng=113200-video=1181200.m3u8",
  },
  {
    name: "Ekattor Tv HD",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/DPZrfqzr/Ekattor-TV-HD.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1705/output/1705.m3u8",
  },
  {
    name: "Ekushe TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/Myscx0rx/Ekushe-TV.png",
    url: "https://tvsen6.aynaott.com/etv/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "Maasranga TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/S7c6STRZ/Maasranga-TV.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1722/output/1722.m3u8",
  },
  {
    name: "Channel S TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/Vp2HKT0s/Channel-S-TV.png",
    url: "https://app.ncare.live/live-orgin/channels.stream/live-orgin/channels.stream/chunks.m3u8",
  },
  {
    name: "Boishakhi TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/sptqqqj9/Boishakhi-TV.png",
    url: "https://boishakhi.sonarbanglatv.com/boishakhi/boishakhitv/index.m3u8",
  },
  {
    name: "GTV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/cc5rftrN/Gazi-TV.png",
    url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/gazibdz.stream/tracks-v1a1/mono.m3u8",
  },
  {
    name: "Mohona TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/Ndvm37Vr/Mohona-TV.png",
    url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/mohonatv.stream/tracks-v1a1/mono.m3u8",
  },
  {
    name: "Desh Tv",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/fVH9h8Tk/Desh-TV.png",
    url: "https://tvsen6.aynaott.com/deshtv/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "Bijoy TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/DP1GSwB3/Bijoy-TV.png",
    url: "https://stream.ottplus.live/live/bijoy_tv_abr/live/bijoy_tv_480/chunks.m3u8",
  },
  {
    name: "Nexus TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/d0hw38JN/Nexus-TV.png",
    url: "https://tvsen6.aynaott.com/nexustv/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "Global TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/Q7Q7X64N/Global-TV.png",
    url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/Global-tv.stream/tracks-v1a1/mono.m3u8",
  },
  {
    name: "Channel 1 TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/N6HbH5rH/Channel-One-TV.png",
    url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channel1bd.stream/tracks-v1a1/mono.m3u8",
  },
  {
    name: "Duronto TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/Ld3Yw0PH/Duronto-TV.png",
    url: "https://tvsen6.aynaott.com/durontotv-live/tracks-v1a1/mono.ts.m3u8?e=1779283757&token=3da514e08a15c80daed60a18b3f423fa&u=78be6644-0a65-48ec-81a4-089ac65a2619",
  },
  {
    name: "Ayna TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/5hy7S3wB/Ayna-TV.png",
    url: "https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/ayna.stream/tracks-v1a1/mono.m3u8",
  },
  {
    name: "Star News",
    category: "news",
    logo: "https://i.ibb.co.com/cXTjmmtP/Star-News.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1710/output/1710-audio_113402_eng=113200-video=1181200.m3u8",
  },
  {
    name: "Jago News 24",
    category: "Bangladeshi",
    logo: "https://i.ibb.co.com/KpRt3cT5/Jago-News-24.png",
    url: "https://app.ncare.live/live-orgin/jagonews24.stream/live-orgin/jagonews24.stream/chunks.m3u8?nimblesessionid=1048712240",
  },
  {
    name: "Jamuna TV",
    category: "Bangladeshi",
    logo: "https://www.jamuna.tv/uploads/settings/default_img_1.jpg",
    url: "https://tvsen6.aynaott.com/jamunatv/tracks-v1a1/mono.ts.m3u8?e=1779283771&token=2592d440f00d65738bd7f6c5158ce486&u=78be6644-0a65-48ec-81a4-089ac65a2619",
  },
  {
    name: "DBC News",
    category: "news",
    logo: "https://i.ibb.co.com/TMKLMXs9/DBC-News.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/index.m3u8",
  },
  {
    name: "Ekhon TV",
    category: "news",
    logo: "https://i.ibb.co.com/YrDVpDt/Ekhon-Tv.png",
    url: "https://tvsen6.aynaott.com/ekhontv/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "News 24",
    category: "news",
    logo: "https://i.ibb.co.com/gLx9fX5N/News-24.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1708/output/index.m3u8",
  },
  {
    name: "Somoy TV",
    category: "news",
    logo: "https://images.seeklogo.com/logo-png/53/1/somoy-tv-logo-png_seeklogo-536972.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1702/output/index.m3u8",
  },
  {
    name: "Channel 24",
    category: "news",
    logo: "https://i.ibb.co.com/v65cfQ96/Channel-24.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1703/output/1703-audio_113332_eng=113200-video=2202800.m3u8",
  },
  {
    name: "Independent TV",
    category: "news",
    logo: "https://e7.pngegg.com/pngimages/500/179/png-clipart-bangladesh-logo-independent-television-television-channel-bd-logo-television-text-thumbnail.png",
    url: "https://tvsen6.aynaott.com/independenttv/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "ATN News HD",
    category: "news",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/ATN_News_logo.svg/1280px-ATN_News_logo.svg.png",
    url: "https://tvsen6.aynaott.com/atnnews/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "ABP Ananda Amagi",
    category: "news",
    logo: "https://static.vidgyor.com/player/account/abp/img/ABP-Ananda.png",
    url: "https://amg01448-samsungin-abpananda-samsungin-ad-pw.amagi.tv/playlist/amg01448-samsungin-abpananda-samsungin/playlist.m3u8",
  },
  {
    name: "DW English HD",
    category: "news",
    logo: "https://icon2.cleanpng.com/20180721/qie/7032d14b245d3dab85cc0f4e62b809bb.webp",
    url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
  },
  {
    name: "CNN Now Amagi",
    category: "news",
    logo: "https://i.ibb.co.com/qYbtCcXZ/CNN.png",
    url: "https://amg01448-samsungin-cnnnow-samsungin-4npqg.amagi.tv/playlist/amg01448-samsungin-cnnnow-samsungin/playlist.m3u8",
  },
  {
    name: "T Sports HD",
    category: "sports",
    logo: "https://i.ibb.co.com/mrvT7b6G/T-Sports-HD.png",
    url: "https://amitomar.bdixbd.net/hoichoi.pro1/tracks-v1a1/index.m3u8",
  },
  {
    name: "Goal TV HD",
    category: "sports",
    logo: "https://i.ibb.co.com/q3LbbSx1/goal-212.png",
    url: "https://streams2.sofast.tv/sofast/goaltv/goaltv_3500k.m3u8",
  },
  {
    name: "Tom & Jerry TV",
    category: "Cartoon",
    logo: "//i.ibb.co.com/RTN2G7fG/png-transparent-tom-and-jerry-smiling-illustration-tom-cat-jerry-mouse-nibbles-tom-and-jerry-tom-and.png",
    url: "https://live20.bozztv.com/giatvplayout7/giatv-208314/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "Doraemon TV",
    category: "Cartoon",
    logo: "https://i.ibb.co.com/HTftzTkf/download.png",
    url: "https://live20.bozztv.com/giatvplayout7/giatv-209902/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "MR Bean Annimated",
    category: "Cartoon",
    logo: "https://i.ibb.co.com/XfqV4B56/png-transparent-mr-bean-illustration-youtube-coloring-book-character-cartoon-mr-bean-television-chil.png",
    url: "https://amg00627-amg00627c29-rakuten-it-3989.playouts.now.amagi.tv/playlist/amg00627-banijayfast-mrbeanitcc-rakutenit/playlist.m3u8",
  },
  {
    name: "Cartoon Network",
    category: "Cartoon",
    logo: "https://i.ibb.co.com/KpzQsWyw/images.png",
    url: "https://tvsen5.aynaott.com/cartoonnetwork/tracks-v1a1/mono.ts.m3u8?e=1779508656",
  },
  {
    name: "Willow TV",
    category: "Sports",
    logo: "https://i.ibb.co.com/mjC8LPM/Willow-is-on-DIRECTV.png",
    url: "https://tvsen5.aynaott.com/willowhd/tracks-v1a1/mono.ts.m3u8?e=1779508653",
  },
  {
    name: "ASports HD",
    category: "Sports",
    logo: "https://via.placeholder.com/120x80/1a2236/eef2ff?text=A+Sports",
    url: "https://tvsen6.aynaott.com/asports/tracks-v1a1/mono.ts.m3u8?e=1779508653",
  },
  {
    name: "Sports Grid",
    category: "Sports",
    logo: "https://via.placeholder.com/120x80/1a2236/eef2ff?text=Sports+Grid",
    url: "https://tvsen6.aynaott.com/SportsGrid/tracks-v1a1/mono.ts.m3u8?e=1779508653",
  },
  {
    name: "Star Sports 1 HD",
    category: "Sports",
    logo: "https://i.ibb.co.com/SDBggqWH/png-transparent-star-sports-3-star-india-television-channel-sony-ten-nilesat-television-text-sport.png",
    url: "https://tvsen7.aynaott.com/sspts1/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "Star Sports 2 HD",
    category: "Sports",
    logo: "https://i.ibb.co.com/SDBggqWH/png-transparent-star-sports-3-star-india-television-channel-sony-ten-nilesat-television-text-sport.png",
    url: "https://flussonic.deltainfonet.com/08_STAR-SPORTS_2/tracks-v1a1/mono.m3u8",
  },
  {
    name: "Star Sports 3 HD",
    category: "Sports",
    logo: "https://i.ibb.co.com/SDBggqWH/png-transparent-star-sports-3-star-india-television-channel-sony-ten-nilesat-television-text-sport.png",
    url: "https://flussonic.deltainfonet.com/09_STAR-SPORTS_3/tracks-v1a1/mono.m3u8",
  },
  {
    name: "Gopal Var TV",
    category: "Cartoon",
    logo: "https://i.ibb.co.com/5xSF5mzh/Gopal-Bhar-animated-TV-series-title-card.jpg",
    url: "https://live20.bozztv.com/giatvplayout7/giatv-209611/tracks-v1a1/mono.ts.m3u8",
  },
  {
    name: "Star Jalsha",
    category: "Entertainment",
    logo: "https://i.ibb.co.com/r1MLjgh/Star-Jalsha-logo-2023.png",
    url: "https://tyr.zibobdixserver.top/hls/StarJalshaHD.m3u8",
  },
  {
    name: "Islamic TV",
    category: "Islamic",
    logo: "https://i.ibb.co.com/hRYXS3nb/Islamic-TV-New-Logo.png",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1724/output/1724-audio_113542_eng=113200-video=2202800.m3u8",
  },
  {
    name: "Sony Sports 2",
    category: "Sports",
    logo: "https://i.ibb.co.com/k2j5h13J/SONY-Sports-Ten2-SD-Logo-CLR.png",
    url: "https://edge2.roarzone.net:8447/roarzone/edge3/sony_sports_2_hd/tracks-v1a1/mono.m3u8?token=c01fdb414ac928fe43535112591cde66835f0aaf-05542ac039de97112ff8df0f4ca77c8c-1780139959-1780129159",
  },
  {
    name: "Jungle Book",
    category: "Cartoon",
    logo: "https://i.ibb.co.com/LhD5xLyT/MV5-BNDM1-OWI1-Mz-It-N2-Zl-Ni00-Mj-My-LTg5-ZGIt-Yjgw-YTdh-OTY3-Zjhk-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg",
    url: "https://cc-4bhi5osabejc9.akamaized.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-4bhi5osabejc9/junglebook.m3u8",
  },
  {
    name: "TSN 1",
    category: "Sports",
    logo: "https://i.ibb.co.com/k6sK73f3/tsn-1-logo-png-seeklogo-314693.png",
    url: "https://tvsen7.aynaott.com/tsn1/index.m3u8",
  },
  {
    name: "TSN 2",
    category: "Sports",
    logo: "https://i.ibb.co.com/Xxw28Yn6/Start-TV-Channel-Logos-The-Sports-Network2.webp",
    url: "https://tvsen7.aynaott.com/tsn2/index.m3u8",
  },
  {
    name: "TSN 3",
    category: "Sports",
    logo: "https://i.ibb.co.com/j9vBBzGV/tsn-3-logo-png-seeklogo-314924.png",
    url: "https://tvsen7.aynaott.com/tsn3/index.m3u8",
  },
  {
    name: "beIN Sports Extra",
    category: "Sports",
    logo: "https://i.ibb.co.com/VpMNnbjf/XTRA-2.webp",
    url: "https://cdn.yallashooot.pp.ua/hls/ch1-2978.ts",
  },
  {
    name: "PTV Sports",
    category: "Sports",
    logo: "https://i.ibb.co.com/Fkt4G6bK/PTV-Logo.png",
    url: "https://tvsen5.aynaott.com/PtvSports/index.m3u8?e=1780236743&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=76f74dfc4bdff676d7ce6ad4070d1761",
  },
  {
    name: "BeIN Sports 1",
    category: "Live",
    logo: "https://i.ibb.co.com/VpMNnbjf/XTRA-2.webp",
    url: "https://andro.226503.xyz/checklist/androstreamlivebs1.m3u8",
  },
  {
    name: "BeIN Sports 3",
    category: "Live",
    logo: "https://i.ibb.co.com/VpMNnbjf/XTRA-2.webp",
    url: "https://andro.226503.xyz/checklist/androstreamlivebs3.m3u8",
  },
  {
    name: "Fifa Live",
    category: "Live",
    logo: "https://i.ibb.co.com/vnbkF0r/fifa-world-cup-2026-logo-png-seeklogo-665644.png",
    url: "https://raw.githubusercontent.com/abodnm9uyre/syria-tv/refs/heads/main/fe2Afy.m3u8",
  },
  {
    name: "Win TV",
    category: "Live",
    logo: "https://via.placeholder.com/120x80/1a2236/eef2ff?text=Win+TV",
    url: "https://1nyaler.streamhostingcdn.top/stream/32/index.m3u8",
  },
  {
    name: "Koora City",
    category: "Live",
    logo: "https://via.placeholder.com/120x80/1a2236/eef2ff?text=Koora+City",
    type: "iframe",
    url: "https://live.kooran51.cfd/yorrr1/index.m3u8",
  },
  {
    name: "DAZN",
    category: "Live",
    logo: "https://via.placeholder.com/120x80/1a2236/eef2ff?text=DAZN",
    url: "https://1nyaler.streamhostingcdn.top/stream/94/index.m3u8",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const videoPlaceholder = document.getElementById("videoPlaceholder");
  const loadingOverlay = document.getElementById("loadingOverlay");
  const nowPlaying = document.getElementById("nowPlaying");
  const statusText = document.getElementById("statusText");
  const channelList = document.getElementById("channelList");
  const categoryBar = document.getElementById("categoryBar");
  const channelCount = document.getElementById("channelCount");
  const searchInput = document.getElementById("searchInput");

  if (!video || !channelList || !categoryBar || !channelCount || !searchInput) {
    console.error("Required HTML element missing.");
    return;
  }

  let hls = null;
  let activeCategory = "all";
  let activeChannelName = "";

  function showLoading() {
    if (loadingOverlay) loadingOverlay.classList.add("show");
  }

  function hideLoading() {
    if (loadingOverlay) loadingOverlay.classList.remove("show");
  }

  function normalizeCategory(cat) {
    return String(cat || "Uncategorized")
      .trim()
      .toLowerCase();
  }

  function formatCategory(cat) {
    const value = String(cat || "Uncategorized").trim();
    const fixes = {
      bangladeshi: "Bangladeshi",
      sports: "Sports",
      news: "News",
      cartoon: "Cartoon",
      documentry: "Documentary",
      documentary: "Documentary",
      entertainment: "Entertainment",
      islamic: "Islamic",
    };

    const key = value.toLowerCase();
    return fixes[key] || value.charAt(0).toUpperCase() + value.slice(1);
  }

  function getLogoUrl(url) {
    if (!url) {
      return "https://via.placeholder.com/120x80/1a2236/eef2ff?text=TV";
    }

    return url.startsWith("//") ? "https:" + url : url;
  }

  function escapeHtml(text) {
    return String(text || "").replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[m],
    );
  }

  function getCategories() {
    const categories = new Map();

    channels.forEach((channel) => {
      const key = normalizeCategory(channel.category);

      if (!categories.has(key)) {
        categories.set(key, formatCategory(channel.category));
      }
    });

    return [
      { key: "all", label: "All" },
      ...Array.from(categories, ([key, label]) => ({ key, label })),
    ];
  }

  function getFiltered() {
    const keyword = searchInput.value.trim().toLowerCase();

    return channels.filter((channel) => {
      const categoryOk =
        activeCategory === "all" ||
        normalizeCategory(channel.category) === activeCategory;

      const keywordOk = String(channel.name || "")
        .toLowerCase()
        .includes(keyword);

      return categoryOk && keywordOk;
    });
  }

  function renderCategories() {
    categoryBar.innerHTML = "";

    getCategories().forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "cat-btn" + (cat.key === activeCategory ? " active" : "");
      btn.textContent = cat.label;

      btn.addEventListener("click", () => {
        activeCategory = cat.key;
        renderCategories();
        renderChannels();
      });

      categoryBar.appendChild(btn);
    });
  }

  function renderChannels() {
    const list = getFiltered();

    channelList.innerHTML = "";
    channelCount.textContent = String(list.length);

    if (list.length === 0) {
      channelList.innerHTML = '<div class="empty-msg">No channels found.</div>';
      return;
    }

    list.forEach((ch) => {
      const item = document.createElement("div");
      item.className =
        "channel-item" + (ch.name === activeChannelName ? " active" : "");

      item.innerHTML = `
        <div class="ch-logo">
          <img src="${escapeHtml(getLogoUrl(ch.logo))}"
               alt="${escapeHtml(ch.name)}"
               loading="lazy"
               onerror="this.onerror=null;this.src='https://via.placeholder.com/120x80/1a2236/eef2ff?text=TV';">
        </div>
        <div class="ch-info">
          <div class="ch-name">${escapeHtml(ch.name)}</div>
          <div class="ch-cat">${escapeHtml(formatCategory(ch.category))}</div>
        </div>
        <div class="ch-play-btn">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      `;

      item.addEventListener("click", () => playChannel(ch));
      channelList.appendChild(item);
    });
  }

  function stopCurrentPlayback() {
    if (hls) {
      hls.destroy();
      hls = null;
    }

    const iframePlayer = document.getElementById("iframePlayer");

    if (iframePlayer) {
      iframePlayer.style.display = "none";
      iframePlayer.src = "";
    }

    video.pause();
    video.removeAttribute("src");
    video.load();
    video.style.display = "block";
  }

  function playChannel(ch) {
    activeChannelName = ch.name;
    nowPlaying.textContent = ch.name || "Unknown channel";
    statusText.textContent = "Connecting…";

    renderChannels();
    showLoading();

    if (videoPlaceholder) {
      videoPlaceholder.classList.add("hidden");
    }

    stopCurrentPlayback();

    const videoWrapper = document.querySelector(".video-wrapper");
    let iframePlayer = document.getElementById("iframePlayer");

    if (ch.type === "iframe") {
      video.style.display = "none";

      if (!iframePlayer) {
        iframePlayer = document.createElement("iframe");
        iframePlayer.id = "iframePlayer";
        iframePlayer.allowFullscreen = true;
        iframePlayer.frameBorder = "0";
        iframePlayer.setAttribute(
          "allow",
          "autoplay; fullscreen; encrypted-media; picture-in-picture",
        );

        iframePlayer.style.position = "absolute";
        iframePlayer.style.inset = "0";
        iframePlayer.style.width = "100%";
        iframePlayer.style.height = "100%";
        iframePlayer.style.border = "0";
        iframePlayer.style.background = "#000";
        iframePlayer.style.zIndex = "3";

        videoWrapper.appendChild(iframePlayer);
      }

      iframePlayer.src = ch.url;
      iframePlayer.style.display = "block";

      statusText.textContent = "Embedded Player";

      setTimeout(() => {
        hideLoading();
      }, 1200);

      return;
    }

    if (!ch.url) {
      statusText.textContent = "No stream URL found.";

      if (videoPlaceholder) {
        videoPlaceholder.classList.remove("hidden");
      }

      hideLoading();
      return;
    }

    if (window.Hls && Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(ch.url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        statusText.textContent = "Live";
        hideLoading();

        video.play().catch(() => {
          statusText.textContent = "Tap ▶ to play";
        });
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        console.warn("HLS error:", data);

        if (data && data.fatal) {
          statusText.textContent =
            "Stream error — expired, CORS-blocked, or offline.";

          if (videoPlaceholder) {
            videoPlaceholder.classList.remove("hidden");
          }

          hideLoading();
        }
      });

      return;
    }

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = ch.url;

      video.addEventListener(
        "loadedmetadata",
        () => {
          statusText.textContent = "Live";
          hideLoading();

          video.play().catch(() => {
            statusText.textContent = "Tap ▶ to play";
          });
        },
        { once: true },
      );

      return;
    }

    statusText.textContent = "HLS not supported in this browser.";
    hideLoading();
  }

  searchInput.addEventListener("input", renderChannels);

  renderCategories();
  renderChannels();

  console.log("Hello World TV loaded:", channels.length, "channels");
});

// Cloudflare visitor counter
async function loadVisitorCount() {
  const todayEl = document.getElementById("todayVisitors");
  const totalEl = document.getElementById("totalVisitors");

  if (!todayEl || !totalEl) return;

  todayEl.textContent = "—";
  totalEl.textContent = "—";

  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const STORAGE_KEY = "hello_world_tv_counted_date";
  const lastCountedDate = localStorage.getItem(STORAGE_KEY);

  const shouldCount = lastCountedDate !== today;

  try {
    const res = await fetch(`/api/views?count=${shouldCount ? "1" : "0"}`, {
      cache: "no-store",
    });

    const data = await res.json();

    if (!res.ok || data.error) {
      throw new Error(data.error || "Counter error");
    }

    if (shouldCount) {
      localStorage.setItem(STORAGE_KEY, today);
    }

    todayEl.textContent = Number(data.today || 0).toLocaleString();
    totalEl.textContent = Number(data.total || 0).toLocaleString();
  } catch (error) {
    console.error("Visitor counter error:", error);
    todayEl.textContent = "—";
    totalEl.textContent = "—";
  }
}

loadVisitorCount();
