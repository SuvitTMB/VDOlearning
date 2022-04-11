var cleararray = "";
var dbVDOTraining = "";

$(document).ready(function () {
    if(sessionStorage.getItem("EmpID")==null) { location.href = "register.html"; }
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
  dbVDOTraining = firebase.firestore().collection("VDOTraining");
  LoadVDOTraining();
}


function LoadVDOTraining() {
  //$("#text").html('688');
  var i = 0;
  var str = "";
  dbVDOTraining
  //.where('VDOgroup','==',sVDOgroup)
  .where('VDOstatus','==',0)
  .orderBy('VDOtimestamp','desc')
  .limit(12).get().then((snapshot)=> {
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
	  $("#DisplayVDO").html(str);
  });
}

function GotoGroup(x) {
  if(x==1) {
    location.href = "learning.html";
  } else if(x==2) {
    location.href = "training.html";
  }
}


function OpenVdo(x,r) {
  location.href = "displayvdo.html?gid="+x+"";
}

function GotoAll() {
  location.href = "search.html";
}

function CloseAll() {
	document.getElementById('id01').style.display='none';
}



