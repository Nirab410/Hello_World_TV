// Hello World TV — fixed app.js
// Replace your old app.js with this full file.

const channels = [
  {
    name: "FIFA Plus",
    category: "Sports",
    logo: "https://i.ibb.co.com/vnbkF0r/fifa-world-cup-2026-logo-png-seeklogo-665644.png",
    url: "https://37b4c228.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWZyX0ZJRkFQbHVzRnJlbmNoX0hMUw/6f5437c5-e015-4754-8476-c8c6d27d3a55/1.m3u8",
  },
  {
    name: "Star Sports 1 HD",
    category: "Sports",
    logo: "https://i.ibb.co.com/vnbkF0r/fifa-world-cup-2026-logo-png-seeklogo-665644.png",
    url: "http://103.157.248.140:8000/play/a01m/index.m3u8",
  },
  {
    name: "BTV",
    category: "bangladeshi",
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
    name: "Asian TV",
    category: "bangladeshi",
    logo: "https://i.ibb.co.com/mCwss66N/Asian-TV.png",
    url: "https://proxy.torongoplus.workers.dev/?url=https://mtlivestream.com/hls/asian/ytlive/index.m3u8",
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
    category: "news",
    logo: "https://i.ibb.co.com/KpRt3cT5/Jago-News-24.png",
    url: "https://app.ncare.live/live-orgin/jagonews24.stream/live-orgin/jagonews24.stream/chunks.m3u8?nimblesessionid=1048712240",
  },
  {
    name: "Jamuna TV",
    category: "news",
    logo: "https://www.jamuna.tv/uploads/settings/default_img_1.jpg",
    url: "https://owrcovcrpy.gpcdn.net/bpk-tv/1728/output/index.m3u8",
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
    url: "https://tvsen7.aynaott.com/tsports-hd/tracks-v1a1/mono.ts.m3u8",
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
    url: "https://edge2.roarzone.net:8447/roarzone/edge5/willow-tv/tracks-v1a1/2026/05/26/03/06/45-05000.ts?token=d4bd232d26cb8a7f1d6c636cb8ea5abef910487a-1ec415dfcec5cd61f111e2cdf3e68e2e-1779775211-1779764411",
  },
  {
    name: "ASports HD",
    category: "Sports",
    logo: "https://via.placeholder.com/120x80/1a2236/eef2ff?text=A+Sports",
    url: "https://edge2.roarzone.net:8447/roarzone/edge5/a-sports/tracks-v1a1/mono.m3u8?token=483227e09edc208b3920f9fbbac15723de2ac560-83c085fb01f4bb831776337d3eda8911-1779775247-1779764447",
  },
  {
    name: "Sports Grid FIFA",
    category: "Sports",
    logo: "https://via.placeholder.com/120x80/1a2236/eef2ff?text=Sports+Grid",
    url: "https://tvsen6.aynaott.com/SportsGrid/tracks-v1a1/mono.ts.m3u8?e=1779508653",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const videoPlaceholder = document.getElementById("videoPlaceholder");
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
    };
    const key = value.toLowerCase();
    return fixes[key] || value.charAt(0).toUpperCase() + value.slice(1);
  }

  function getLogoUrl(url) {
    if (!url) return "https://via.placeholder.com/120x80/1a2236/eef2ff?text=TV";
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

    channels.forEach((c) => {
      const key = normalizeCategory(c.category);
      if (!categories.has(key)) {
        categories.set(key, formatCategory(c.category));
      }
    });

    return [
      { key: "all", label: "All" },
      ...Array.from(categories, ([key, label]) => ({ key, label })),
    ];
  }

  function getFiltered() {
    const kw = searchInput.value.trim().toLowerCase();

    return channels.filter((c) => {
      const catOk =
        activeCategory === "all" ||
        normalizeCategory(c.category) === activeCategory;

      const kwOk = String(c.name || "")
        .toLowerCase()
        .includes(kw);

      return catOk && kwOk;
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

  function playChannel(ch) {
    activeChannelName = ch.name;
    nowPlaying.textContent = ch.name || "Unknown channel";
    statusText.textContent = "Connecting…";
    renderChannels();

    if (videoPlaceholder) {
      videoPlaceholder.classList.add("hidden");
    }

    if (hls) {
      hls.destroy();
      hls = null;
    }

    video.pause();
    video.removeAttribute("src");
    video.load();

    if (!ch.url) {
      statusText.textContent = "No stream URL found.";
      if (videoPlaceholder) videoPlaceholder.classList.remove("hidden");
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
        video.play().catch(() => {
          statusText.textContent = "Tap ▶ to play";
        });
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        console.warn("HLS error:", data);

        if (data && data.fatal) {
          statusText.textContent =
            "Stream error — expired, CORS-blocked, or offline.";
          if (videoPlaceholder) videoPlaceholder.classList.remove("hidden");
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
          video.play().catch(() => {
            statusText.textContent = "Tap ▶ to play";
          });
        },
        { once: true },
      );

      return;
    }

    statusText.textContent = "HLS not supported in this browser.";
  }

  searchInput.addEventListener("input", renderChannels);

  renderCategories();
  renderChannels();

  console.log("Hello World TV loaded:", channels.length, "channels");
});
