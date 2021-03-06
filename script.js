const SLIDER_CONTAINER = ".slider";
const SLIDER_RANGE_INPUT = "input[type='range']";
const range__amount = ".range__amount";
let link = '';
var $valueContainer;

function onInputChangeUpdatePosition() {
    console.log("onInputChangeUpdatePosition()...");
    let text = '';
    let backgroundImg = '';
    const $input = $(SLIDER_CONTAINER).find(SLIDER_RANGE_INPUT);
    text = checkDynasty($input.val(), text, backgroundImg);
    updateValueContainer($input.val(), $input.prop("min"), $input.prop("max"), $valueContainer, text);
}

var tempVal = 2021;

/** Initialize sliders and listen for value changes. */
function listenForSliderChanges() {
    // console.log("listenForSliderChanges()...");
    $(SLIDER_CONTAINER).each(function() {
        // Prepend value container
        $valueContainer = $("<div />");
        $valueContainer.id = "myid";
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

//update the text container while value is changing
function updateValueContainer(value, min, max, $valueContainer, text) {
    // console.log("updateValueContainer()...");
    const distanceFromLeft = ((value - min) * 100) / (max - min);

    if (value < 0) {
        // console.log("(value < 0): ", value);
        $valueContainer.text(`${text}\n 前${-value}`).css({
            width: `7rem`,
            whiteSpace: `pre-line`,
            left: `calc(${distanceFromLeft}%)`,
            transform: `translateX(-${distanceFromLeft}%)`,
            marginTop: `-1.5rem`,
            // marginBottom: `-1.6rem`,
            fontSize: `3vh`,
            bottom: `100%`,
            textAlign: `bottom`,
            display: `flex-end`,
        });
    }

    if (value >= 0 && value <= 1911) {
        // console.log("else: ", value);
        $valueContainer.text(`${text}\n ${value}`).css({
            whiteSpace: `pre-line`,
            width: `5rem`,
            left: `calc(${distanceFromLeft}%)`,
            transform: `translateX(-${distanceFromLeft}%)`,
            marginTop: `-1.5rem`,
            // marginBottom: `-1.6rem`,
            fontSize: `3vh`,
            bottom: `100%`,
            textAlign: `bottom`,
            display: `flex-end`,
        });
    }

    if (value >= 1912) {
        // console.log("(value > 1912): ", value);
        $valueContainer.text(`${text}\n ${value}`).css({
            whiteSpace: `pre-line`,
            width: `14rem`,
            left: `calc(${distanceFromLeft}%)`,
            transform: `translateX(-${distanceFromLeft}%)`,
            marginTop: `-1.5rem`,
            fontSize: `3vh`,
            bottom: `100%`,
            textAlign: `center`,
            display: `flex-top`,
            color: `#b50929`,
            textShadow: `-1px -1px 0 rgb(255, 255, 255)`,
        });
    }

}

// check which dynasty it is and change the background
function checkDynasty(value, text, backgroundImg) {
    // value is ranged based on historical year
    if (value <= -771) {
        text = '西周';
        backgroundImg = "url(img/xizhou_0.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty01';
    } else if (value >= -770 && value <= -404) {
        text = '春秋';
        backgroundImg = "url(img/chunqiu_0.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty02';
    } else if (value >= -403 && value <= -222) {
        text = '戰國';
        backgroundImg = "url(img/zhanguo_0.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty03';
    } else if (value >= -221 && value <= -203) {
        text = '秦代';
        backgroundImg = "url(img/qin.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty04';
    } else if (value >= -202 && value <= 24) {
        text = '西漢';
        backgroundImg = "url(img/xihan.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty05';
    } else if (value >= 25 && value <= 219) {
        text = '東漢';
        backgroundImg = "url(img/donghan.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty06';
    } else if (value >= 220 && value <= 264) {
        text = '三國';
        backgroundImg = "url(img/sanguo.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty07';
    } else if (value >= 265 && value <= 316) {
        text = '西晉';
        backgroundImg = "url(img/xijin.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty08';
    } else if (value >= 317 && value <= 419) {
        text = '東晉';
        backgroundImg = "url(img/dongjin.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty09';
    } else if (value >= 420 && value <= 580) {
        text = '南北朝';
        backgroundImg = "url(img/nanbeichao.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty10';
    } else if (value >= 581 && value <= 617) {
        text = '隋代';
        backgroundImg = "url(img/sui.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty11';
    } else if (value >= 618 && value <= 959) {
        text = '唐代';
        backgroundImg = "url(img/tang.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty12';
    } else if (value >= 960 && value <= 1126) {
        text = '北宋';
        backgroundImg = "url(img/beisong.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty13';
    } else if (value >= 1127 && value <= 1270) {
        text = '南宋';
        backgroundImg = "url(img/nansong.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty14';
    } else if (value >= 1271 && value <= 1367) {
        text = '元代';
        backgroundImg = "url(img/yuan.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty15';
    } else if (value >= 1368 && value <= 1643) {
        text = '明代';
        backgroundImg = "url(img/ming.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty16';
    } else if (value >= 1644 && value <= 1911) {
        text = '清代';
        backgroundImg = "url(img/qing.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty17';
    } else if (value >= 1912 && value <= 1948) {
        text = '中華民國';
        backgroundImg = "url(img/zhonghuaminguo.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty18';
    } else if (value >= 1949 && value <= 2021) {
        text = '中華人民共和國';
        backgroundImg = "url(img/zhongguo.png)";
        link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty19';
    } else {
        text = "不符合";
    }
    // change the body backgrond
    document.body.style.backgroundImage = backgroundImg;
    return text;
}

/** Update text value of a given container based on a range input. */
function updateSliderValue($input, $valueContainer) {
    let value = $input.val();
    const min = $input.prop("min");
    const max = $input.prop("max");
    let text = $input.text();
    let backgroundImg = "";

    // value is ranged based on historical year
    text = checkDynasty(value, text, backgroundImg);
    updateValueContainer(value, min, max, $valueContainer, text);
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
        }
        list.push(img);
        img.src = array[i];
    }
    // console.log("Pre-loaded");
}

// replace the img cache src...
preloadImages([
    "img/beisong.png",
    "img/chunqiu_0.png",
    "img/donghan.png",
    "img/dongjin.png",
    "img/ming.png",
    "img/nanbeichao.png",
    "imgnansong.png",
    "img/qin.png",
    "img/qing.png",
    "img/sanguo.png",
    "img/sui.png",
    "img/tang.png",
    "img/xihan.png",
    "img/xijin.png",
    "img/xizhou_0.png",
    "img/yuan.png",
    "img/zhanguo_0.png",
    "img/zhongguo.png",
    "img/zhonghuaminguo.png",
]);

// link to other source when clicked on empty sapce of body 
document.body.onclick = function(e) {
    if (e.target === document.body) {
        window.location = link;
    }
}

// cookie
function setLoanCookie() {
    var selectedValue = document.getElementById("loan").value;
    setCookie('testCookie', selectedValue);
}

//sample cookie
function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function setCookie(cname, value) {
    document.cookie = cname + '=' + value + ';' + ';path=/';
}

listenForSliderChanges();