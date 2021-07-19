const createUniqueId = prefix => {
    return `${prefix}-${Math.round(Math.random() * 100000)}`;
}

class RangeSlider {

    constructor(el) {
        this.input = document.querySelector(el);
        this.el = this.input.getAttribute('id');
        this.minValue = this.input.getAttribute('min');
        this.maxValue = this.input.getAttribute('max');
        this.numTicks = this.maxValue / this.minValue;
        this.input.addEventListener('change', (e) => this.handleInputChange(e));

        switchBackGround(0);

        this.wrapInput().then(wrapperId => {
            if (this.input.hasAttribute('values')) {
                this.values = JSON.parse(this.input.getAttribute('values'));
                this.createTicks(wrapperId);
            }
        });

    }

    handleInputChange(e) {
        const value = e.target.value;
        const ariaValueText = !this.values ? value : this.values[value];
        this.input.setAttribute('aria-valuetext', ariaValueText);
        this.setSelectedLabel(this.values[value]);
        switchBackGround(value);
    }

    handleLabelClick(label, value, e) {
        this.input.focus();
        this.input.value = value;
        this.input.setAttribute('value', value);
        this.input.setAttribute('aria-valuetext', label);
        this.setSelectedLabel(label);
        switchBackGround(value);

    }

    setSelectedLabel(label) {
        const selectedLabels = this.input.parentNode.querySelectorAll(`.range-slider-ticks2__label`);
        [].forEach.call(selectedLabels, el => {
            el.classList[el.innerText === label ? 'add' : 'remove']('is-selected');
        });
    }

    wrapInput() {
        return new Promise(resolve => {
            const wrapper = document.createElement('div');
            const wrapperId = createUniqueId('range-slider2');
            wrapper.id = wrapperId;
            wrapper.className = 'range-slider2';
            this.input.parentNode.replaceChild(wrapper, this.input);
            document.querySelector(`#${wrapperId}`).appendChild(this.input);
            resolve(wrapperId);
        });
    }

    createTicks(wrapperId) {
        return new Promise(resolve => {
            let index = 0;
            let tickLabelText;
            const tickList = document.createElement('div');
            const tickListId = createUniqueId('tick-list');
            const noLabels = this.input.hasAttribute('no-labels');
            const firstAndLastLabelsOnly = this.input.hasAttribute('first-last-labels-only');
            tickList.id = tickListId;
            tickList.className = 'range-slider-ticks2';
            document.querySelector(`#${wrapperId}`).appendChild(tickList);

            for (const prop in this.values) {
                if (this.values.hasOwnProperty(prop)) {
                    const isFirstOrLastLabel = !!firstAndLastLabelsOnly &&
                        index > 0 &&
                        index < Object.values(this.values).length - 1;

                    const tick = document.createElement('div');
                    const tickLabel = document.createElement('span');
                    tickLabel.className = `range-slider-ticks2__label ${this.input.value === prop ? 'is-selected' : ''}`;

                    if (!noLabels) {
                        tickLabelText = document.createTextNode(
                            isFirstOrLastLabel ? '' : this.values[prop]
                        );
                        var a = document.createElement('a');
                        a.href = switchLink(index);
                        var linkText = tickLabelText;
                        a.appendChild(linkText);
                        tickLabel.appendChild(a);
                    }

                    tick.className = 'range-slider-ticks2__tick';
                    tick.addEventListener('click', (e) => this.handleLabelClick(this.values[prop], prop, e));
                    tick.appendChild(tickLabel);
                    document.querySelector(`#${tickListId}`).appendChild(tick);
                    index += 1;
                }
            }
            resolve();
        });
    }
}

[].forEach.call(document.querySelectorAll('input[type="range"]'), el => {
    const id = `#${el.getAttribute('id')}`;
    return new RangeSlider(id);
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

function switchLink(value) {
    var link = 'http://eduarapp.iotsolution.hk/collection/tc/dynasty';
    if (value < 10) {
        link += '0' + value;
        console.log(link);
    } else {
        link += value;
    }
    return link;
}


function switchBackGround(value) {
    let text = '';
    let link = '';

    // console.log("Value handled..");
    if (value == 0) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/xizhou/xizhou/xizhou_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 1) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/chunqiu/chunqiu/chunqiu_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 2) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/zhanguo/zhanguo/zhanguo_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 3) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/qin/qin/qin_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 4) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/xihan/xihan/xihan_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 5) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/donghan/donghan/donghan_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 6) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/sanguo/sanguo/sanguo_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 7) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/xijin/xijin/xijin_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 8) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/dongjin/dongjin/dongjin_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 9) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/nanbeichao/nanbeichao/nanbeichao.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 10) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/sui/sui/sui_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 11) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/tang/tang/tang_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 12) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/beisong/beisong/beisong_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 13) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/nansong/nansong/nansong_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 14) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/yuan/yuan/yuan_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 15) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/ming/ming/ming_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 16) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/qing/qing/qing_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 17) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/zhonghuaminguo/zhonghuaminguo/zhonghuaminguo_02.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else if (value == 18) {
        let backgroundImg = "url(https://wesleycky.github.io/ARWeb/assets/png/map/zhongguo/zhongguo/zhongguo.png)";
        document.body.style.backgroundImage = backgroundImg;
    } else {
        console.log("else in switchBackGround...");
    }
    return link;
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