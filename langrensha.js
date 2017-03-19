var spIds = 0;  //特殊身份
var sp = {
    'yuyanjia' : 0,
    'nvwu' : 1,
    'lieren' : 2,
    'baichi' : 3,
    'shouwei' : 4,
    'yehaizi' : 5,
    'qiubite' : 6,
    'qishi' : 7,
    'yingzi' : 8
};
var isSpActive = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function main() {
    var ids = document.getElementsByClassName('identityBtn');
    $(document).keydown(function(ev) {
        switch (ev.keyCode) {
            case 27: clearModal(); break;
        }
    });
}

function selectIdentity(btn) {
    var players = $("#players").slider("value");
    if (btn.className == "btn btn-primary identityBtn") {
        btn.className = "btn btn-default identityBtn";
        isSpActive[sp[btn.id]] = 0;
        --spIds;
        $("#warewolf").slider({
            orientation: "horizontal",
            range: "min",
            max: players - spIds - 2,   //村民设置为默认2个
            min: 2
        });
        $("#warewolf").slider("value", players - spIds - 2);
    } else {
        var warewolf = $("#warewolf").slider("value");
        if (warewolf + 2 + spIds + 1 > players && warewolf == 2) {
            alert('人数有误');
            return;
        }
        btn.className = "btn btn-primary identityBtn";
        isSpActive[sp[btn.id]] = 1;
        ++spIds;
        $("#warewolf").slider({
            orientation: "horizontal",
            range: "min",
            max: players - spIds - 2,   //村民设置为默认2个
            min: 2
        });
        $("#warewolf").slider("value", players - spIds - 2);
    }
}

function onPlayersChange(ev) {
    //获取滑动条值和对应显示值的输入框
    var players = $("#players").slider("value");
    var playersInput = document.getElementById("playersValue");

    //获得响应事件的元素
    var targ;
    ev = ev || window.event;
    targ = ev.target || ev.srcElement;
    if (targ.tagName == "INPUT") {
        targ.value = parseInt(targ.value);
        if (isNaN(targ.value)) {
            targ.value = 0;
        } else {
            targ.value = targ.value > 20 ? 20 : targ.value;
            targ.value = targ.value < 0 ? 0 : targ.value;
        }
        $("#players").slider("value", parseInt(playersInput.value));
    } else {
        playersInput.value = players;
    }
    players = parseInt(playersInput.value);
    $("#warewolf").slider({
        orientation: "horizontal",
        range: "min",
        max: players - spIds - 2,   //村民设置为默认2个
        min: 2
    });
    $("#warewolf").slider("value", players - spIds - 2);
}

function onWarewolfChange(ev) {
    //获取滑动条值和对应显示值的输入框
    var warewolf = $("#warewolf").slider("value");
    var players = $("#players").slider("value");
    var warewolfInput = document.getElementById("warewolfValue");

    //获得响应事件的元素
    var targ;
    ev = ev || window.event;
    targ = ev.target || ev.srcElement;
    if (targ.tagName == "INPUT") {
        targ.value = parseInt(targ.value);
        if (isNaN(targ.value)) {
            targ.value = 0;
        } else {
            targ.value = targ.value > players - spIds - 2 ? players - spIds - 2 : targ.value;
            targ.value = targ.value < 2 ? 2 : targ.value;
        }
        $("#warewolf").slider("value", parseInt(warewolfInput.value));
    } else {
        warewolfInput.value = warewolf;
    }
    warewolf = parseInt(warewolfInput.value);
}

function gameStart() {
    var players = $("#players").slider("value");
    var warewolves = $("#warewolf").slider("value");
    if (warewolves+spIds+2 > players) {
        alert('人数有误');
        return;
    }
    var ids = [];
    for (var i = 0; i < players; i++) {
        ids[i] = i+1;
    }
    var modalBody = document.getElementById('mainModalBody');
    var p = document.createElement('p');
    var idNum;
    p.innerHTML = '狼人 : ';
    while (warewolves--) {
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
    }
    modalBody.appendChild(p);
    if (isSpActive[0]) {
        p = document.createElement('p');
        p.innerHTML = '预言家 : ';
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
        modalBody.appendChild(p);
    }
    if (isSpActive[1]) {
        p = document.createElement('p');
        p.innerHTML = '女巫 : ';
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
        modalBody.appendChild(p);
    }
    if (isSpActive[2]) {
        p = document.createElement('p');
        p.innerHTML = '猎人 : ';
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
        modalBody.appendChild(p);
    }
    if (isSpActive[3]) {
        p = document.createElement('p');
        p.innerHTML = '白痴 : ';
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
        modalBody.appendChild(p);
    }
    if (isSpActive[4]) {
        p = document.createElement('p');
        p.innerHTML = '守卫 : ';
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
        modalBody.appendChild(p);
    }
    if (isSpActive[5]) {
        p = document.createElement('p');
        p.innerHTML = '野孩子 : ';
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
        modalBody.appendChild(p);
    }
    if (isSpActive[6]) {
        p = document.createElement('p');
        p.innerHTML = '丘比特 : ';
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
        modalBody.appendChild(p);
    }
    if (isSpActive[7]) {
        p = document.createElement('p');
        p.innerHTML = '骑士 : ';
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
        modalBody.appendChild(p);
    }
    if (isSpActive[8]) {
        p = document.createElement('p');
        p.innerHTML = '影子 : ';
        idNum = Math.floor((Math.random() * ids.length));
        p.innerHTML += ids[idNum] + ' ';
        ids.splice(idNum, 1);
        modalBody.appendChild(p);
    }
    p = document.createElement('p');
    p.innerHTML = '村民 : ';
    while (ids.length) {
        p.innerHTML += ids.pop() + ' ';
    }
    modalBody.appendChild(p);
}

function clearModal() {
    var modalBody = document.getElementById('mainModalBody');
    modalBody.innerHTML = "";
}
