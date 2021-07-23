const SLIDER_CONTAINER = ".slider";
const SLIDER_RANGE_INPUT = "input[type='range']";
let link = '';

// custom sliding bar
document.querySelectorAll(".__range-step").forEach(function(ctrl) {
    var el = ctrl.querySelector('input');
    var output = ctrl.querySelector('output');
    el.oninput = function() {
        // colorize step options
        ctrl.querySelectorAll("option").forEach(function(opt) {
            if (opt.value <= el.valueAsNumber)
                opt.style.backgroundColor = '#48530d';
            else
                opt.style.backgroundColor = '#a4b162';
        });
    };
    el.oninput();
});



/** Initialize sliders and listen for value changes. */
function listenForSliderChanges() {
    $(SLIDER_CONTAINER).each(function() {
        // Prepend value container
        const $valueContainer = $("<div />");
        $(this).prepend($valueContainer);
        const $input = $(this).find(SLIDER_RANGE_INPUT);

        // Run on initial
        updateSliderValue($input, $valueContainer);

        // Listen for input changes
        $input.on("input", function() {
            updateSliderValue($input, $valueContainer);

        });
    });
}

/** Update text value of a given container based on a range input. */
function updateSliderValue($input, $valueContainer) {
    let value = $input.val();
    const min = $input.prop("min");
    const max = $input.prop("max");
    let text = '';

    let backgroundImg = "";
    // console.log(value);
    if (value <= -771) {
        text = '西周';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/xizhou/xizhou/xizhou_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty01';
    } else if (value >= -770 && value <= -404) {
        text = '春秋';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/chunqiu/chunqiu/chunqiu_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty02';
    } else if (value >= -403 && value <= -222) {
        text = '戰國';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/zhanguo/zhanguo/zhanguo_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty03';
    } else if (value >= -221 && value <= -203) {
        text = '秦代';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/qin/qin/qin_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty04';
    } else if (value >= -202 && value <= 24) {
        text = '西漢';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/xihan/xihan/xihan_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty05';
    } else if (value >= 25 && value <= 219) {
        text = '東漢';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/donghan/donghan/donghan_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty06';
    } else if (value >= 220 && value <= 264) {
        text = '三國';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/sanguo/sanguo/sanguo_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty07';
    } else if (value >= 265 && value <= 316) {
        text = '西晉';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/xijin/xijin/xijin_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty08';
    } else if (value >= 317 && value <= 419) {
        text = '東晉';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/dongjin/dongjin/dongjin_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty09';
    } else if (value >= 420 && value <= 580) {
        text = '南北朝';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/nanbeichao/nanbeichao/nanbeichao.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty10';
    } else if (value >= 581 && value <= 617) {
        text = '隋代';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/sui/sui/sui_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty11';
    } else if (value >= 618 && value <= 959) {
        text = '唐代';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/tang/tang/tang_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty12';
    } else if (value >= 960 && value <= 1126) {
        text = '北宋';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/beisong/beisong/beisong_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty13';
    } else if (value >= 1127 && value <= 1270) {
        text = '南宋';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/nansong/nansong/nansong_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty14';
    } else if (value >= 1271 && value <= 1367) {
        text = '元代';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/yuan/yuan/yuan_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty15';
    } else if (value >= 1368 && value <= 1643) {
        text = '明代';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/ming/ming/ming_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty16';
    } else if (value >= 1644 && value <= 1911) {
        text = '清代';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/qing/qing/qing_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty17';
    } else if (value >= 1912 && value <= 1948) {
        text = '中華民國';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/zhonghuaminguo/zhonghuaminguo/zhonghuaminguo_02.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty18';
    } else if (value >= 1949 && value <= 2021) {
        text = '中華人民共和國';
        backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/zhongguo/zhongguo/zhongguo.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty19';
    } else {
        text = "";
    }
    document.body.style.backgroundImage = backgroundImg;
    // Clamp within 0 - 100
    const distanceFromLeft = ((value - min) * 100) / (max - min);

    // $valueContainer.div.appendChild(link);
    // Contain value within container bounds
    if (value < 0) {
        $valueContainer.text(`${text} 前${value * -1}`).css({
            left: `calc(${distanceFromLeft}%)`,
            transform: `translateX(-${distanceFromLeft}%)`,
            marginTop: `-2.6rem`,
            fontSize: `20px`,
            bottom: `100%`,
            textAlign: `center`,
        });
    } else {
        $valueContainer.text(`${text} ${value}`).css({
            left: `calc(${distanceFromLeft}%)`,
            transform: `translateX(-${distanceFromLeft}%)`,
            marginTop: `-2.6rem`,
            fontSize: `20px`,
            bottom: `100%`,
            textAlign: `left`,
        });
    }
    // Wrap the text into a link...
    // $valueContainer.contents().wrap('<a href=\"' + link + '\"></a>'); 
}

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
    console.log("Pre-loaded");
}

// replace the img cache src...
preloadImages([
    "https://wesleycky.github.io/ARWeb/assets/png/map/xizhou/xizhou/xizhou_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/chunqiu/chunqiu/chunqiu_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/zhanguo/zhanguo/zhanguo_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/qin/qin/qin_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/xihan/xihan/xihan_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/donghan/donghan/donghan_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/sanguo/sanguo/sanguo_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/xijin/xijin/xijin_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/dongjin/dongjin/dongjin_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/nanbeichao/nanbeichao/nanbeichao.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/sui/sui/sui_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/tang/tang/tang_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/beisong/beisong/beisong_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/nansong/nansong/nansong_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/yuan/yuan/yuan_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/ming/ming/ming_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/qing/qing/qing_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/zhonghuaminguo/zhonghuaminguo/zhonghuaminguo_02.png",
    "https://wesleycky.github.io/ARWeb/assets/png/map/zhongguo/zhongguo/zhongguo.png"
]);

// link to other source when clicked on empty sapce of body 
document.body.onclick = function(e) {
    if (e.target === document.body) {
        window.location = link;
    }
}

listenForSliderChanges();