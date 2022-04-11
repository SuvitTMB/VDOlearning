var dateString = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
var xClickMenu = "";


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
  dbVDOTraining = firebase.firestore().collection("VDOTraining");
  loadData();
  //SelectMeunu();
  //CheckProfile();
}

/*
function SelectMeunu() {
  xClickMenu = document.getElementById("ClickMenu").value;
  loadData();
}
*/

function loadData() {
  var i = 0;
  var count = 0;
  var dataSet = "";
  var dataSrc = [];
  dbVDOTraining.where('VDOstatus','==', 0)
  //.orderBy('TimeStampDate','desc')
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      i = (i+1);
      xEmpMember = "";
      xTimegetBox = "";
      var aNewText = "";
      var xNewText = "";
      if(doc.data().VDOmain==1) {
        aNewText = '<div class="vdo-main1">Easy<br>Learning</div>';
      } else if(doc.data().VDOmain==2) {
        aNewText = '<div class="vdo-main2">VDO<br>Training</div>';
      }
      xNewText = '<div style="color:#0056ff;"><div style="line-height: 1.2;font-size:11px;"><b>'+doc.data().VDOname+'</b></div><div style="font-size:11px;line-height: 1.2; color:#999;">'+doc.data().VDOdetail+'<br><font color="#f68b1f">เวลา : '+doc.data().VDOtimer+'</font></div></div>';
      dataSet = [aNewText, xNewText, "<div class='btn-t1' style='max-width:20px !important;' id="+i+">คลิก</div>", doc.id, i];
      dataSrc.push(dataSet);
      count++;
    }); 

    dTable=$('#ex-table').DataTable({
      "bDestroy": true,    
      data: dataSrc,
      columns: [
        //{ title: "EmpID", className: "txt-center" },
        { title: "ประเภท", className: "txt-center" },
        { title: "รายละเอียด" },
        { title: "รายการ", className: "txt-center" },
        ],
        dom: 'lfrtipB',
        buttons: [
            //'copy', 'excelFlash', 'excel', 'pdf', 'print'
        ],
          lengthMenu: [[50, 100, 200, -1], [50, 100, 200, "All"]],
          columnDefs: [ { type: 'number', 'targets': [1] } ],
          order: [[ 1, 'asc']]
        //dom: 'Bfrtip', buttons: [ 'copy', 'csv', 'excel', 'pdf', 'print' ]
      });   
      $('#ex-table tbody').on( 'click', 'tr', function () {
        var data = dTable.row( $(this).parents('tr') ).data();
        if(count!=0) {
            ClickID(dTable.row( this ).data()[3],dTable.row( this ).data()[3]);
        }
        //console.log(dTable.row( this ).data()[6]);
      });
  });
  $('#ex-table').DataTable().destroy();
  $("#ex-table tbody").remove();
}


function ClickID(x,id) {
  //alert(id);
  location.href = "displayvdo.html?gid="+id+"";
}



function CloseAll() {
  document.getElementById('id01').style.display='none';
}


function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';
  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);
  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
}


function ConvrtDate(str) {
  var date = new Date(str),
  mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  day = ("0" + date.getDate()).slice(-2);
  return [day, mnth, date.getFullYear()+543].join("/");
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}



