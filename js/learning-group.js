var cleararray = "";
var dbVDOTraining = "";
var sVDOmain = 0;
var sVDOgroup = 0;


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID")==null) { location.href = "index.html"; }
  sMain = getParameterByName('gMain');
  sGroup = getParameterByName('gGroup');
  //alert(sMain+"===="+sGroup);
 	Connect_DB();
});


function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    databaseURL: "https://file-upload-6f4fc.firebaseio.com",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbVDOGroup = firebase.firestore().collection("VDOTrainingGroup");
  dbVDOTraining = firebase.firestore().collection("VDOTraining");
  ShowVDOmain();
  ShowVDOgroup();
  //LoadVDOGroup();
  //ShowVDOList();
}


function getParameterByName(name, url) {
  str = '';
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


var EidVDOGroup = "";
var sCountView = 0;
function ShowVDOmain() {
  var str = "";
  var str1 = "";
  dbVDOGroup
  .where('VDOmain','==',parseInt(sMain))
  .where('VDOgroup','==',parseInt(sGroup))
  .where('VDOdisplay','==',1)
  .limit(1).get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidVDOGroup = doc.id;
      sCountView = parseInt(doc.data().VDOclick)+1;
      str +='<div style="margin-top:50px;background-color: #002d63;height: 270px; overflow: hidden;">';
      str +='<img src="'+doc.data().VDOimg+'" style="width:100%; max-width: 500px;"></div>';
      //str +='<div style="max-height:300px;"><center>';
      //str +='<iframe width="100%" height="280" src="'+doc.data().VDOimg+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      //str +='</center></div>';
      $("#NameVDO").html('<div class="boxvdo-header">'+doc.data().VDOname+'</div>');
      $("#DetailVDO").html('<div class="boxvdo-line1" style="padding-top:10px;height:auto;">'+doc.data().VDOdetail+'</div>');
      $("#ImgVDO").html(str);

      str1 += '<div class="boxvdo-line2"><div class="boxvdo-icon1">';
      str1 += '<img src="./img/video2.png" class="boxvdoimg"> <span>'+doc.data().VDOitem+'</span> Clip</div>';
      str1 += '<div class="boxvdo-icon"><img src="./img/reading.png" class="boxvdoimg"> <span>'+ sCountView +' ????????????</span></div>';
      str1 += '</div></div>';
      $("#SocialICON").html(str1);
      SaveCountVDOGroup();
    });
    //alert(i);
    //$("#DisplayVDOmain").html(str);
  });
}


function SaveCountVDOGroup() {
  if(EidVDOGroup!="") {
    dbVDOGroup.doc(EidVDOGroup).update({
      VDOclick : parseInt(sCountView) 
    });    
  }
}

function ShowVDOgroup() {
  var i = 0;
  var sPhoto = "";
  //alert(sMain+"===="+sGroup);
  dbVDOTraining.where('VDOmain','==',parseInt(sMain))
  .where('VDOgroup','==',parseInt(sGroup))
  .where('VDOstatus','==',0)
  .orderBy('VDOrank','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      i = i+1;

/*
      str += '<div class="col-lg-6 col-md-4 slide text-center boxvdo" data-aos="fade-left" style="width:50%;float: left;">';
      str += '<div class="vdo-group member" style="text-align: left; padding:6px;width:98%;">';
      str += '<div style="width:100%;"><img src="'+doc.data().VDOimg+'" style="width:100%;border-radius: 5px;overflow:hidden;"/>';
      str += '<div class="vdo-overimg"><div style="color:#fff;opacity:1;font-size:9px;" id="NewCount-'+i+'">'+doc.data().VDOitem+' Clip | '+doc.data().VDOclick+' View</div></div></div>';
      str += '<div class="vdo-header">'+doc.data().VDOname+'</div><div class="vdo-body">';
      str += '<div style="font-size:11px; height:58px; overflow: hidden;">'+doc.data().VDOdetail+'</div>';
      str += '<div class="btn-t4" onclick="GotoVDOgroup(\''+ doc.id +'\',\''+ doc.data().VDOgroup +'\','+i+'\,'+doc.data().VDOitem+')">????????????????????????????????????</div></div></div></div>';



      str += '<div class="col-lg-6 col-md-2 slide text-center boxvdo" data-aos="fade-left" onclick="OpenVdo(\''+ doc.id +'\','+i+')">';
      str += '<div class="boxvdo-border member"><div class="boxvdo-img">';
      str += '<img src="'+doc.data().VDOimg+'" class="img-fluid" style="border-radius: 10px;">';
      str += '<div class="vdo-timer"><img src="./img/timer.png" width="15px"> '+doc.data().VDOtimer+'</div></div>';
      str += '<div class="vdo-header">'+doc.data().VDOname+'</div><div class="vdo-body">';
      str += '<div class="boxvdo-line1">'+doc.data().VDOdetail+'</div>';
      //str += '<div style="font-size:11px; height:58px; overflow: hidden;">'+doc.data().VDOdetail+'</div>';
      str += '<img src="./img/calendar.png" class="boxvdoimg"> <span>'+doc.data().VDOdate+'</span></div>';
      str += '<div class="boxvdo-icon"><img src="./img/reading.png" class="boxvdoimg"> <span id="ReadView-'+i+'">'+doc.data().VDOread+' ????????????</span></div>';
*/

      str += '<div class="col-lg-6 col-md-2 slide text-center boxvdo" data-aos="fade-left" onclick="OpenVdo(\''+ doc.id +'\','+i+')">';
      str += '<div class="boxvdo-border member"><div class="boxvdo-img">';
      str += '<img src="'+doc.data().VDOimg+'" class="img-fluid" style="border-radius: 10px;">';
      str += '<div class="vdo-timer"><img src="./img/timer.png" width="15px"> '+doc.data().VDOtimer+'</div></div>';
      str += '<div class="boxvdo-title"><div class="boxvdo-header">'+doc.data().VDOname+'</div>';
      str += '<div class="boxvdo-line1">'+doc.data().VDOdetail+'</div>';
      str += '<div class="boxvdo-line2"><div class="boxvdo-icon1">';
      str += '<img src="./img/calendar.png" class="boxvdoimg"> <span>'+doc.data().VDOdate+'</span></div>';
      str += '<div class="boxvdo-icon"><img src="./img/reading.png" class="boxvdoimg"> <span id="ReadView-'+i+'">'+doc.data().VDOread+' ????????????</span></div>';

      if(doc.data().VDOquiz==1) {
        str += '<div class="boxvdo-icon"><img src="./img/quizgame.png" class="boxvdoimg"> <span>???????????????????????????</span></div>';
      }
      if(doc.data().ShowQuestion==1) {
        str += '<div class="boxvdo-icon"><img src="./img/ask.png" class="boxvdoimg"> <span>'+doc.data().QuestionSend+' ???????????????</span></div>';
      }
      str += '</div></div></div></div>';
    });
    $("#DisplayVDOgroup").html(str);
  });
}


function ShowVDOList() {
  var i = 0;
  var str = "";
  dbVDOTraining.where('VDOmain','==',sVDOmain)
  .where('VDOstatus','==',0)
  .orderBy('VDOtimestamp','desc')
  .limit(10).get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      i = i+1;
      str += '<div class="col-lg-6 col-md-2 slide text-center boxvdo" data-aos="fade-left" onclick="OpenVdo(\''+ doc.id +'\','+i+')">';
      str += '<div class="boxvdo-border member"><div class="boxvdo-img">';
      str += '<img src="'+doc.data().VDOimg+'" class="img-fluid" style="border-radius: 10px;">';
      str += '<div class="vdo-timer"><img src="./img/timer.png" width="15px"> '+doc.data().VDOtimer+'</div></div>';
      str += '<div class="boxvdo-line1">'+doc.data().VDOdetail+'</div>';
      str += '<div class="boxvdo-line2"><div class="boxvdo-icon1">';
      str += '<img src="./img/calendar.png" class="boxvdoimg"> <span>'+doc.data().VDOdate+'</span></div>';
      str += '<div class="boxvdo-icon"><img src="./img/reading.png" class="boxvdoimg"> <span id="ReadView-'+i+'">'+doc.data().VDOread+' ????????????</span></div>';
      if(doc.data().VDOquiz==1) {
        str += '<div class="boxvdo-icon"><img src="./img/quizgame.png" class="boxvdoimg"> <span>???????????????????????????</span></div>';
      }
      if(doc.data().ShowQuestion==1) {
        str += '<div class="boxvdo-icon"><img src="./img/ask.png" class="boxvdoimg"> <span>'+doc.data().QuestionSend+' ???????????????</span></div>';
      }
      str += '</div></div></div></div>';
    });
  $("#DisplayVDOlist").html(str);
  });
}


function GotoVDOGroup(id,x,i,clip) {
  var sCountView = 0;
  dbVDOGroup.where(firebase.firestore.FieldPath.documentId(), "==", id)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      sCountView = parseInt(doc.data().VDOclick)+1;
      alert(sCountView);
      dbVDOGroup.doc(id).update({
        VDOclick : parseInt(sCountView) 
      });
    });
    location.href = "learning-group.html?gid="+x+"";
  });

  //alert(id+"==="+x);
  //if(x==1) {
    //location.href = "learning-group.html?gid="+x+"";
  //} else if(x==2) {
  //  location.href = "training-group.html?gid="+x+"";
  //}
}


function OpenVdo(x,r) {
  location.href = "displayvdo.html?gid="+x+"";
}


function CloseAll() {
	document.getElementById('id01').style.display='none';
}



