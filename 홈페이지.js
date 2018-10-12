if(navigator.userAgent.indexOf('Mobile') != -1){
    location.href = 'http://www.realcoding.co/vvv/3Md3mmosJLP5fuPK3yxLApE5kZGvWOUJPcZHwL6j8uxCsnTQkxStNYFLeHC2vxg3';
    
}else{
var mainmain = box().append().size('90%',800).border(0).marginTop(123);
var main1 = box().appendTo(mainmain).size('90%',700).color('LightYellow').overflow('hidden','auto');
var main2 = box().appendTo(mainmain).size('90%',700).hide();
box().appendTo(main2).size(700).float('left').image('http://cafefiles.naver.net/20100817_209/mintang94_12820341236930iK6g_jpg/baseballposition_yagu2281_mintang94.jpg')
var main3 = box().appendTo(mainmain).size('90%',700).hide();
var main4 = box().appendTo(mainmain).size('90%',700).overflow('hidden').hide();
var bottom = box().append().size('100%', 150).text('bottom');
var chatMain = box().append().size(500,800);
var chatPut = box().appendTo(chatMain).size('100%', 150);
box().appendTo(chatPut).size('100%',30).text('Chat').textSize(15).padding(3);
var chatIn = box().appendTo(chatPut).size(200,50).editable().textSize(20).padding(8).marginTop(20);
var chatSend = box().appendTo(chatPut).size(80,50).text('send').button().click(sendChat).marginTop(20);
var chatBox = box().appendTo(chatMain).size('100%',500);
var chatOut = box().appendto(chatBox).size(320,500).border(0).overflow('auto');
var newgameBox = box().appendTo(main1).size(110,40).border(0).float('left').marginRight('99%');
var steam1 = ['두산', 'LG', 'NC', 'SK', 'KIA', '한화', '롯데', '삼성', 'KT', '넥센'];
var steam2 = ['두산', 'LG', 'NC', 'SK', 'KIA', '한화', '롯데', '삼성', 'KT', '넥센'];

var topBox = box().append().size('99%',100).positionFixed().center().top(0).color('white').borderColor('DimGray').borderRadius(10);
var logo = box().appendTo(topBox).margin(10).size(190,70).float('left').marginLeft(150).image("https://post-phinf.pstatic.net/20160323_130/susunana1_1458716168386MIlwE_PNG/mug_obj_145871616991810471.png?type=w1080");
var menu= box().appendTo(topBox).marginright(80).size(600,80).float('right').marginTop(13).border(0).padding(10);
var menu1 = box().appendTo(menu).size(90,50).text('경기 결과').click(clickMenu1).margin(2).paddingTop(15)
.paddingRight(12).paddingLeft(12);
var menu2 = box().appendTo(menu).size(90,50).text('선수').click(clickMenu2).margin(2).padding(15);
var menu3 = box().appendTo(menu).size(90,50).text('한화 성적').click(clickMenu3).margin(2).paddingTop(15);
var menu4 = box().appendTo(menu).size(90,50).text('지도').click(clickMenu4).margin(2).padding(15);
logIn = box().appendTo(menu).size(100,50).text('로그인').click(clickLoginbutton).margin(2).padding(15).color('white');
box().appendTo(main3).text('click!!!').disableSelection().size(100);
var playerBox = box().appendTo(main2).size(300,700);
var positionArr = ['투수', '포수', '1루수', '2루수', '3루수', '유격수', '중견수', '우익수', '좌익수']
box().appendTo(playerBox).size(300,50).text('포지션 선택').textSize(20).padding(10);
var positionselect = box().appendTo(playerBox).marginTop(5).size(250,50).select(positionArr);
var bignewplayer = box().appendTo(playerBox).size(250,50);
var bigplayer = box().appendTo(playerBox).size('100%',500);
/*var arrPlace = [
    {text:'학교', value: '대전광역시 서구 문정로 271'},
    {text:'집', value:'대전광역시 서구 청사로 254'},
    {text:'리얼코딩', value:'대전광역시 서구 월평북로 85'},
    {text:'수학학원', value:'대전광역시 서구 둔산로 136'},
    {text:'sk하이닉스', value:'충청북도 청주시 흥덕구 직지대로 337'}
    ];
    
var selectPlace = box().appendTo(main4).size(150,30).borderRadius(10).select(arrPlace,onselectPlace).margin(5);
*/var i=0;
var chatArr=[];
var chat = [];
var countlogin = 0;
var arruId=[];
//var map = loadRealcode('realcode.openapi.tmap').appendTo(main4);
var arrId = [];
var arrpassword = [];
var checklogin=false;
var checknewgame =false;
var games = [];
// datastore().put('chats', countlogin);
//datastore().put('games', countlogin);
loginMain = box().append().positionFixed().size(500,320).color('white').borderRadius(10).center().border(2).padding(5).
   borderColor('black').text('로그인').padding(7).textSize(25).shadow(10,10,30,1).hide();
   var deleteLoginMainButton = box().appendTo(loginMain).size(30).borderRadius(30).color('Gainsboro').text('x').textSize(20).float('right').margin(10).click(deleteLogin);
   box().appendTo(loginMain).size(30).borderRadius(30).color('white').float('left').margin(10).border(0);
   idBox = box().appendTo(loginMain).input('','아이디').marginTop(10).size(350,50).marginRight(65).marginLeft(65);
   passWordBox = box().appendTo(loginMain).input('','비밀번호').marginTop(10).size(350,50).marginRight(65).marginLeft(65);
   var loginbutton = box().appendTo(loginMain).text('로그인').textSize(20).textColor('blue').color('WhiteSmoke').borderRadius(10).marginTop(10).size(300,40).padding(7).click(onClicklogin);
   var joinButton = box().appendTo(loginMain).text('회원가입').textSize(20).textColor('blue').color('WhiteSmoke').borderRadius(10).marginTop(10).size(300,40).padding(7).click(onClickjoin);
  
load();
loadgame();
function clickMenu1(bx){
bx.blinkBorder('PeachPuff',100);
  main1.show();
  main2.hide();
  main3.hide();
  main4.hide();
}
function clickMenu2(bx){
    bx.blinkBorder('PeachPuff',100);
  main1.hide();
  main2.show();
  main3.hide();
  main4.hide();
}
function clickMenu3(bx){
    bx.blinkBorder('PeachPuff',100);
  main1.hide();
  main2.hide();
  main3.show();
  main4.hide();
}
function clickMenu4(bx){
    bx.blinkBorder('PeachPuff',100);
    if(checklogin){
  main1.hide();
  main2.hide();
  main3.hide();
  main4.show();
    }
    else{
        chatIn.text('');
        alert('로그인 후 이용해 주세요');
    }
}
function sendChat(){
    if(checklogin){
        if(chatIn.text()==''){
            return;
        }
        else{
            var inputChat;
            inputChat=chatIn.text();
            var comment=[];
            comment[0]=usersId;
            comment[1]=inputChat;
           
            chat.push(comment);
            
            datastore().put('chats', chat);
            chatIn.text('');
            box().appendTo(chatOut).size(100,'auto').text(usersId);
            box().appendTo(chatOut).size(200,'auto').text(inputChat);
        }
    }
    else{
        alert('로그인 후 이용해 주세요');
        return;
    }
}
function load(){
    if(datastore().get('chats')){
        chat = datastore().get('chats');
    }else{
        return;
    }
     for(var i=0; i<chat.length; i++){
        box().appendTo(chatOut).size(100,'auto').text(chat[i][0]);
        box().appendTo(chatOut).size(200,'auto').text(chat[i][1]);
     }
}


function clickLoginbutton(bx){
 bx.blinkBorder('PeachPuff',200);
    if(countlogin != 0){
        return;
    }
    else if(countlogin == 0){
    if(bx.text()=='로그인'){ 
        idBox.text('');
        passWordBox.text('');
        loginMain.show();
         countlogin++;
    }
    else{
        logIn.padding(15);
        alert('로그아웃 되었습니다');
        bx.text('로그인');
        checklogin=false;
        main1.show();
        main2.hide();
        main3.hide();
        main4.hide();
        usersId='';
        newgame.remove();
        newplayer.remove();
        deleteplayer.remove();
    }
    }
}
function deleteLogin(bx){
    
    loginMain.hide();
    countlogin--;
}
function onClicklogin(bx){
    bx.blink('LemonChiffon',200);
    if(datastore().get('ids')){
        arrId = datastore().get('ids');
        var checkId=false;
        for(var i=0;i<arrId.length;i++){
            if(idBox.text()==arrId[i]){
                checkId=true;
                var checkPassword=false;
                arrpassword=datastore().get('id:'+ arrId[i]);
                    if(arrpassword==passWordBox.text()){
                        checkPassword =true;
                    }
            }
            
        }
        if(checkId&&checkPassword){
                alert('로그인 되었습니다');
                logIn.padding(5);
                logIn.text('('+ idBox.text()+')님\n로그아웃');
                deleteLogin();
                checklogin=true;
                usersId=idBox.text();
                if(usersId=='ahn'){
                    newgame = box().appendTo(newgameBox).size(100,30).text('경기추가').button().click(gameresult)
                    .marginRight('90%').positionAbsolute().float('left');
                    newplayer = box().appendTo(bignewplayer).button().text('선수추가').size(110,40).margin(5);
                    deleteplayer = box().appendTo(bignewplayer).button().text('선수제거').size(110,40).margin(5);
                }
                return;
        }
        else if(checkId&& !checkPassword){
            alert('패스워드가 일치하지 않습니다');
            passWordBox.text('');
            return;
        }
        else if(!checkId&&!checkPassword){
            alert('아이디가 일치하지 않습니다');
            idBox.text('');
            passWordBox.text('');
            return;
        }
        else{
        alert('잘못된 접근 입니다');
        deleteLogin();
        return;
        }
        }
}
function onClickjoin(bx){
    bx.blink('LemonChiffon',200);
    if(datastore().get('ids')){
        arrId=datastore().get('ids');
        var isUser = false;
        for(var i =0;i<arrId.length; i++){
            if(arrId[i]==idBox.text()){
                isUser = true;
                break;
            }
        }
        if(isUser){
            alert('이미 있는 아이디 입니다');
            return;
        }
    }
    arrId.push(idBox.text());
    datastore().put('ids', arrId);
    datastore().put('id:'+idBox.text(), passWordBox.text());
    alert('회원가입이 완료되었습니다');
    deleteLogin();
}
/*function onselectPlace(bx){
   map.address(bx.selectValue(), onSearchplace);
}
function onSearchplace(position){
    map.clearMarkers();
    map.addMarker(position);
}*/
function gameresult(){
    if(checknewgame){
        return;
    }
    else if(!checknewgame){
        checknewgame=true;
         appendgamemain = box().append().positionFixed().shadow(5,5,5,5).text('경기 추가').size(500,550).color('white')
    .center().borderRadius(10).textSize(20).padding(15).color('Azure');
    var deleteAppendgamebutton = box().appendTo(appendgamemain).size(30).borderRadius(30).color('Gainsboro').text('x')
    .textSize(20).float('right').margin(10).click(deleteAppendgamemain);
   box().appendTo(appendgamemain).size(30).borderRadius(30).color('white').float('left').margin(10).border(0).color('Azure');
   var bigdate = box().appendTo(appendgamemain).size(350,60).margin(5).border(0).marginTop(40);
   box().appendTo(bigdate).size(100,50).text('날짜,경기장').borderRadius(10).marginRight(5).padding(7).color('Lavender').border(0).textSize(15);
   gameDate = box().appendTo(bigdate).size(200,50).editable().borderColor('black').marginLeft(10).padding(10);
   var bigteam1 = box().appendTo(appendgamemain).size(350,60).margin(5).border(0).marginTop(1);
   box().appendTo(bigteam1).size(100,50).text('원정팀').borderRadius(10).marginRight(5).padding(7).color('Lavender').border(0).textSize(15);
   gameteam1 = box().appendTo(bigteam1).size(200,50).marginLeft(10).padding(10).select(steam1);
   var bigteam1score = box().appendTo(appendgamemain).size(350,60).margin(5).border(0).marginTop(1);
   box().appendTo(bigteam1score).size(100,50).text('원정팀 점수').borderRadius(10).marginRight(5).padding(7).color('Lavender').border(0).textSize(15);
   gameteam1score = box().appendTo(bigteam1score).size(200,50).editable().borderColor('black').marginLeft(10).padding(10);
   var bigteam2 = box().appendTo(appendgamemain).size(350,60).margin(5).border(0).marginTop(1);
   box().appendTo(bigteam2).size(100,50).text('홈팀').borderRadius(10).marginRight(5).padding(7).color('Lavender').border(0).textSize(15);
   gameteam2 = box().appendTo(bigteam2).size(200,50).borderColor('black').marginLeft(10).padding(10).select(steam2);
   var bigteam2score = box().appendTo(appendgamemain).size(350,60).margin(5).border(0).marginTop(1);
   box().appendTo(bigteam2score).size(100,50).text('홈팀 점수').borderRadius(10).marginRight(5).padding(7).color('Lavender').border(0).textSize(15);
   gameteam2score = box().appendTo(bigteam2score).size(200,50).editable().borderColor('black').marginLeft(10).padding(10);
   var appendNewgame = box().appendTo(appendgamemain).size(300,40).text('확인').padding(1).button().click(onClickNewgame);
   
   
    }
}

function onClickNewgame(){
     var game = [];
    game[0] = gameDate.text();
    game[1] = gameteam1.text();
    game[2] = gameteam1score.text();
    game[3] = gameteam2.text();
    game[4] = gameteam2score.text();
    games.push(game);
    datastore().put('games', games);
    deleteAppendgamemain();
    bigresult.remove();
   loadgame();
    alert('경기기록이 추가되었습니다');
    
}

function deleteAppendgamemain(){
    checknewgame=false;
    appendgamemain.remove();
}
function loadgame(){
    if(datastore().get('games')){
        games = datastore().get('games');
    }
    else{
        return;
    }
    for(var i = games.length-1; i>=0; i--){
        bigresult = box().appendTo(main1).size('100%',250).marginTop(10).border(0);
    var resultmain = box().appendTo(bigresult).size(500,230).margin(4).color('Azure').borderRadius(10).border(2).borderColor('Gray').borderColor('black');
    var checkgame = box().appendTo(resultmain).size('100%',30).margin(0).marginBottom(4).padding(5)
    .marginBottom(0).text('경기결과').border(0);
    var gameplace = box().appendTo(resultmain).size('100%',30).margin(0).borderColor('black').marginBottom(4).padding(5).marginTop(0).text(games[i][0]);
    var team1Box = box().appendTo(resultmain).size('50%',160).bordercolor('black');
    var team2Box = box().appendTo(resultmain).size('50%',160).bordercolor('black');
    var team1 = box().appendTo(team1Box).size('70%',50).margin(15).marginTop(10).marginBottom(10).text(games[i][1]).textSize(20).padding(5).border(0);
    var team2 = box().appendTo(team2Box).size('70%',50).margin(15).marginTop(10).marginBottom(10).text(games[i][3]).textSize(20).padding(5).border(0);
    var team1score = box().appendTo(team1Box).size(50).padding(10).text(games[i][2]).textColor('red').textSize(30).padding(5).border(0);
    var team2score = box().appendTo(team2Box).size(50).padding(10).text(games[i][4]).textColor('red').textSize(30).padding(5).border(0);
    if(team1.text()=='두산'){
        team1Box.color('Navy');
        team1.textColor('White');
    }
    else if(team1.text()=='LG'){
        team1Box.color('Crimson');
        team1score.textColor('white');
    }
    else if(team1.text()=='삼성'){
        team1.textColor('white');
        team1Box.color('Blue');
    }
    else if(team1.text()=='KIA'){
        team1score.textColor('white');
        team1Box.color('FireBrick');
    }
    else if(team1.text()=='한화'){
        team1Box.color('DarkOrange');
    }
    else if(team1.text()=='롯데'){
        team1Box.color('SkyBlue');
    }
    else if(team1.text()=='KT'){
        team1Box.color('Black');
        team1.textColor('white');
    }
    else if(team1.text()=='NC'){
        team1.textColor('white');
        team1Box.color('MediumBlue');
    }
    else if(team1.text()=='넥센'){
        team1.textColor('white');
        team1Box.color('DarkRed');
    }
    else if(team1.text()=='SK'){
        team1Box.color('Red');
        team1score.textColor('white');
    }
    if(team2.text()=='두산'){
        team2Box.color('Navy');
        team2.textColor('White');
    }
    else if(team2.text()=='LG'){
        team2Box.color('Crimson');
        team2score.textColor('white');
    }
    else if(team2.text()=='삼성'){
        team2.textColor('white');
        team2Box.color('Blue');
    }
    else if(team2.text()=='KIA'){
        team2score.textColor('white');
        team2Box.color('FireBrick');
    }
    else if(team2.text()=='한화'){
        team2Box.color('DarkOrange');
    }
    else if(team2.text()=='롯데'){
        team2Box.color('SkyBlue');
    }
    else if(team2.text()=='KT'){
        team2Box.color('Black');
        team2.textColor('white');
    }
    else if(team2.text()=='NC'){
        team2.textColor('white');
        team2Box.color('MediumBlue');
    }
    else if(team2.text()=='넥센'){
        team2.textColor('white');
        team2Box.color('DarkRed');
    }
    else if(team2.text()=='SK'){
        team2Box.color('Red');
        team2score.textColor('white');
    }
    }
}
}