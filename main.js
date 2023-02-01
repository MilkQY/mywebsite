function $ (id) {
    return document.getElementById(id);
}


// 显示当前时间
let time_text_hour = $("time_text_hour");
let time_text_minute = $("time_text_minute");
function check(time) {
    if (time<10) {
        let m = "0" + time
        return m
    } else {
        return time
    }
}

function getTime() {
    console.log(1);
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    minute = check(minute);
    time_text_hour.innerHTML = hour;
    time_text_minute.innerHTML = minute;
}
//每1秒刷新时间
setInterval("getTime()",1000);



let switch_img = $("switch_img"); // 切换壁纸按钮
let wallpaperElement = $("wallpaper"); //壁纸
let papes = 1; // 第一张
let is_switchng = false; //没有在切换

let papes_data = window.localStorage.getItem("background_papes"); // 获取当前壁纸
if (papes_data) {
    papes = parseInt(papes_data);
    switch (papes_data) {
        case "1":
            wallpaperElement.style.background = "url('./res/background1.png') no-repeat";
            wallpaperElement.style.backgroundSize = "cover";
            // wallpaperElement.style.transition = "all 0.8s";
            break;
        case "2":
            wallpaperElement.style.background = "url('./res/background2.png') no-repeat";
            wallpaperElement.style.backgroundSize = "cover";
            // wallpaperElement.style.transition = "all 0.8s";
            break;
        case "3":
            wallpaperElement.style.background = "url('./res/background3.png') no-repeat";
            wallpaperElement.style.backgroundSize = "cover";
            // wallpaperElement.style.transition = "all 0.8s";
            break
    }
} else {
    console.log('无数据');
}

// 切换壁纸事件 
switch_img.onclick = function () {
    switch_img.style.width = "35px"; 
    setTimeout(() => {
        switch_img.style.width = "45px";
    }, 50);

    if (is_switchng === false) {
        is_switchng = true;
        switch (papes) {
            case 1:
                wallpaperElement.style.background = "url('./res/background2.png') no-repeat";
                wallpaperElement.style.backgroundSize = "cover";
                wallpaperElement.style.transition = "all 0.8s";
                papes = 2;
                window.localStorage.setItem("background_papes", papes);
                setTimeout(() => {
                    is_switchng = false;
                }, 900);
                break;
            case 2:
                wallpaperElement.style.background = "url('./res/background3.png') no-repeat";
                wallpaperElement.style.backgroundSize = "cover";
                wallpaperElement.style.transition = "all 0.8s";
                papes = 3;
                window.localStorage.setItem("background_papes", papes);
                setTimeout(() => {
                    is_switchng = false;
                }, 900);
                break;
            case 3:
                wallpaperElement.style.background = "url('./res/background1.png') no-repeat";
                wallpaperElement.style.backgroundSize = "cover";
                wallpaperElement.style.transition = "all 0.8s";
                papes = 1;
                window.localStorage.setItem("background_papes", papes);
                setTimeout(() => {
                    is_switchng = false;
                }, 900);
                break
        }
    } else {
        console.log("正在转换");
    }
}

// 点击滚动事件
let arrow = $("arrow");
arrow.onclick = function () {
    window.scroll({
        top: 200,
        behavior: 'smooth',
    });
}

// 监听滚动条
let header = $("header");
window.onscroll = function() {
    let scrollTop = window.pageYOffset;
    console.log("滚动距离" + scrollTop);
    if (scrollTop >= 180) {
        document.getElementById("header").classList.add("header-scroll");
    } else {
        document.getElementById("header").classList.remove("header-scroll");
    }
}

