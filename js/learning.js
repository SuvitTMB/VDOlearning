var cleararray = "";
var dbVDOTraining = "";
var sVDOmain = 1;


$(document).ready(function () {
  if(sessionStorage.getItem("EmpID")==null) { location.href = "index.html"; }
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
  dbVDOgroup = firebase.firestore().collection("VDOTrainingGroup");
  dbVDOTraining = firebase.firestore().collection("VDOTraining");
  LoadVDOgroup();
  ShowVDOList();
}


function LoadVDOgroup() {
  //$("#text").html('688');
  var i = 0;
  var str = "";
  var sPhoto = "";
  dbVDOgroup
  .where('VDOmain','==',sVDOmain)
  .where('VDOdisplay','==',1)
  .orderBy('VDOrank','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
    	i = i+1;
      if(sPhoto=="") { sPhoto=doc.data().VDOimg; }
      str += '<div class="col-lg-6 col-md-4 slide text-center boxvdo" data-aos="fade-left" style="width:50%;float: left;">';
      str += '<div class="vdo-group member" style="text-align: left; padding:6px;width:98%;">';
      str += '<div style="width:100%;"><img src="'+doc.data().VDOimg+'" style="width:100%;border-radius: 5px;overflow:hidden;"/>';
      str += '<div class="vdo-overimg"><div style="color:#fff;opacity:1;font-size:9px;" id="NewCount-'+i+'">'+doc.data().VDOitem+' Clip | '+doc.data().VDOclick+' View</div></div></div>';
      str += '<div class="vdo-header">'+doc.data().VDOname+'</div><div class="vdo-body">';
      str += '<div style="font-size:11px; height:58px; overflow: hidden;">'+doc.data().VDOdetail+'</div>';
      str += '<div class="btn-t4" onclick="GotoVDOgroup(\''+ doc.id +'\',\''+ doc.data().VDOgroup +'\','+i+'\,'+doc.data().VDOitem+')">ดูรายละเอียด</div></div></div></div>';
      //str += '<div class="btn-t4" onclick="GotoGroup(\''+ doc.id +'\','+i+')">ดูรายละเอียด</div></div></div></div>';
      if(i==2) {
        str += '<div class="clr"></div>';
      } else if(i==4) { 
        str += '<div class="clr"></div>';
      } else if(i==6) { 
        str += '<div class="clr"></div>';
      } else if(i==8) { 
        str += '<div class="clr"></div>';
      } else if(i==10) { 
        str += '<div class="clr"></div>';
      } else if(i==12) { 
        str += '<div class="clr"></div>';
      } else if(i==14) { 
        str += '<div class="clr"></div>';
      } else if(i==16) { 
        str += '<div class="clr"></div>';
      } else if(i==18) { 
        str += '<div class="clr"></div>';
      } else if(i==20) { 
        str += '<div class="clr"></div>';
      }

    });
	$("#DisplayVDOmain").html(str);
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
      str += '<div class="boxvdo-title"><div class="boxvdo-header">'+doc.data().VDOname+'</div>';
      str += '<div class="boxvdo-line1">'+doc.data().VDOdetail+'</div>';
      str += '<div class="boxvdo-line2"><div class="boxvdo-icon1">';
      str += '<img src="./img/calendar.png" class="boxvdoimg"> <span>'+doc.data().VDOdate+'</span></div>';
      str += '<div class="boxvdo-icon"><img src="./img/reading.png" class="boxvdoimg"> <span id="ReadView-'+i+'">'+doc.data().VDOread+' อ่าน</span></div>';
      if(doc.data().VDOquiz==1) {
        str += '<div class="boxvdo-icon"><img src="./img/quizgame.png" class="boxvdoimg"> <span>เก็บคะแนน</span></div>';
      }
      if(doc.data().ShowQuestion==1) {
        str += '<div class="boxvdo-icon"><img src="./img/ask.png" class="boxvdoimg"> <span>'+doc.data().QuestionSend+' คำถาม</span></div>';
      }
      str += '</div></div></div></div>';
      if(i==2) {
        str += '<div class="clr"></div>';
      } else if(i==4) { 
        str += '<div class="clr"></div>';
      } else if(i==6) { 
        str += '<div class="clr"></div>';
      } else if(i==8) { 
        str += '<div class="clr"></div>';
      } else if(i==10) { 
        str += '<div class="clr"></div>';
      } else if(i==12) { 
        str += '<div class="clr"></div>';
      } else if(i==14) { 
        str += '<div class="clr"></div>';
      } else if(i==16) { 
        str += '<div class="clr"></div>';
      } else if(i==18) { 
        str += '<div class="clr"></div>';
      } else if(i==20) { 
        str += '<div class="clr"></div>';
      }
    });
  $("#DisplayVDOlist").html(str);
  });
}


function GotoVDOgroup(id,x,i,clip) {
  var sCountView = 0;
  dbVDOgroup.where(firebase.firestore.FieldPath.documentId(), "==", id)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      sCountView = parseInt(doc.data().VDOclick)+1;
      dbVDOgroup.doc(id).update({
        VDOclick : parseInt(sCountView) 
      });
    });
    location.href = "learning-group.html?gMain="+sVDOmain+"&gGroup="+x+"";
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

function GotoSearch() {
  location.href = "search.html";
}

function CloseAll() {
	document.getElementById('id01').style.display='none';
}



