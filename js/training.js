(function(_0x1ab0aa,_0x3afbe0){var _0x27fd9d=_0x437a,_0x3f6450=_0x1ab0aa();while(!![]){try{var _0x461c73=-parseInt(_0x27fd9d(0x1be))/0x1*(parseInt(_0x27fd9d(0x1b2))/0x2)+parseInt(_0x27fd9d(0x1e1))/0x3*(-parseInt(_0x27fd9d(0x1b5))/0x4)+-parseInt(_0x27fd9d(0x19f))/0x5*(parseInt(_0x27fd9d(0x1db))/0x6)+-parseInt(_0x27fd9d(0x195))/0x7*(parseInt(_0x27fd9d(0x1e2))/0x8)+parseInt(_0x27fd9d(0x1d1))/0x9+parseInt(_0x27fd9d(0x1a2))/0xa*(parseInt(_0x27fd9d(0x1cd))/0xb)+parseInt(_0x27fd9d(0x1e7))/0xc;if(_0x461c73===_0x3afbe0)break;else _0x3f6450['push'](_0x3f6450['shift']());}catch(_0x3f2cdc){_0x3f6450['push'](_0x3f6450['shift']());}}}(_0x1491,0x2810f));var cleararray='',dbVDOTraining='',sVDOmain=0x2;$(document)['ready'](function(){var _0x377059=_0x437a;sessionStorage[_0x377059(0x1cf)]('EmpID')==null&&(location[_0x377059(0x1b3)]='index.html'),Connect_DB();});function _0x437a(_0x46f484,_0x307784){var _0x149156=_0x1491();return _0x437a=function(_0x437a64,_0x4ab81e){_0x437a64=_0x437a64-0x194;var _0x765004=_0x149156[_0x437a64];return _0x765004;},_0x437a(_0x46f484,_0x307784);}function Connect_DB(){var _0x66c6f2=_0x437a,_0x58f464={'apiKey':_0x66c6f2(0x1e3),'authDomain':'retailproject-6f4fc.firebaseapp.com','projectId':_0x66c6f2(0x1d7),'databaseURL':_0x66c6f2(0x1cc),'storageBucket':_0x66c6f2(0x1ce),'messagingSenderId':'653667385625','appId':_0x66c6f2(0x1df),'measurementId':_0x66c6f2(0x1c0)};firebase[_0x66c6f2(0x1a5)](_0x58f464),dbVDOgroup=firebase[_0x66c6f2(0x19e)]()[_0x66c6f2(0x1e9)]('VDOTrainingGroup'),dbVDOTraining=firebase[_0x66c6f2(0x19e)]()['collection'](_0x66c6f2(0x199)),LoadVDOgroup(),ShowVDOList();}function LoadVDOgroup(){var _0x152849=_0x437a,_0x100545=0x0,_0x14d647='',_0xb61302='';dbVDOgroup['where'](_0x152849(0x1de),'==',sVDOmain)[_0x152849(0x1c1)](_0x152849(0x1c4),'==',0x1)[_0x152849(0x1e5)](_0x152849(0x1ea),_0x152849(0x1bb))[_0x152849(0x1b9)]()[_0x152849(0x1e8)](_0x2c8948=>{var _0x235124=_0x152849;_0x2c8948[_0x235124(0x1b6)](_0x148700=>{var _0x4f86bd=_0x235124;_0x100545=_0x100545+0x1;_0xb61302==''&&(_0xb61302=_0x148700['data']()[_0x4f86bd(0x1b1)]);_0x14d647+=_0x4f86bd(0x1a1),_0x14d647+=_0x4f86bd(0x1a8),_0x14d647+=_0x4f86bd(0x1a4)+_0x148700[_0x4f86bd(0x1c6)]()['VDOimg']+_0x4f86bd(0x1af),_0x14d647+=_0x4f86bd(0x1eb)+_0x100545+'\x22>'+_0x148700[_0x4f86bd(0x1c6)]()[_0x4f86bd(0x1b7)]+'\x20Clip\x20|\x20'+_0x148700['data']()[_0x4f86bd(0x1d2)]+_0x4f86bd(0x1c7),_0x14d647+=_0x4f86bd(0x1e6)+_0x148700[_0x4f86bd(0x1c6)]()[_0x4f86bd(0x1ab)]+_0x4f86bd(0x1b8),_0x14d647+=_0x4f86bd(0x1c2)+_0x148700['data']()[_0x4f86bd(0x1c9)]+_0x4f86bd(0x1e4),_0x14d647+=_0x4f86bd(0x1ac)+_0x148700['id']+_0x4f86bd(0x19a)+_0x148700[_0x4f86bd(0x1c6)]()[_0x4f86bd(0x1c8)]+'\x27,'+_0x100545+','+_0x148700[_0x4f86bd(0x1c6)]()[_0x4f86bd(0x1b7)]+_0x4f86bd(0x1a6);if(_0x100545==0x2)_0x14d647+='<div\x20class=\x22clr\x22></div>';else{if(_0x100545==0x4)_0x14d647+='<div\x20class=\x22clr\x22></div>';else{if(_0x100545==0x6)_0x14d647+=_0x4f86bd(0x1a7);else{if(_0x100545==0x8)_0x14d647+=_0x4f86bd(0x1a7);else{if(_0x100545==0xa)_0x14d647+=_0x4f86bd(0x1a7);else{if(_0x100545==0xc)_0x14d647+=_0x4f86bd(0x1a7);else{if(_0x100545==0xe)_0x14d647+=_0x4f86bd(0x1a7);else{if(_0x100545==0x10)_0x14d647+='<div\x20class=\x22clr\x22></div>';else{if(_0x100545==0x12)_0x14d647+=_0x4f86bd(0x1a7);else _0x100545==0x14&&(_0x14d647+=_0x4f86bd(0x1a7));}}}}}}}}}),$('#DisplayVDOmain')[_0x235124(0x1b4)](_0x14d647);});}function ShowVDOList(){var _0x1d14a1=_0x437a,_0x5116b2=0x0,_0x21df50='';dbVDOTraining[_0x1d14a1(0x1c1)](_0x1d14a1(0x1de),'==',sVDOmain)[_0x1d14a1(0x1c1)](_0x1d14a1(0x1cb),'==',0x0)['orderBy']('VDOtimestamp',_0x1d14a1(0x1bb))[_0x1d14a1(0x1a3)](0xa)[_0x1d14a1(0x1b9)]()[_0x1d14a1(0x1e8)](_0x20aceb=>{var _0x5c02f8=_0x1d14a1;_0x20aceb[_0x5c02f8(0x1b6)](_0x1bf4e1=>{var _0x1b43f4=_0x5c02f8;_0x5116b2=_0x5116b2+0x1,_0x21df50+=_0x1b43f4(0x19b)+_0x1bf4e1['id']+'\x27,'+_0x5116b2+_0x1b43f4(0x1bc),_0x21df50+=_0x1b43f4(0x1aa),_0x21df50+='<img\x20src=\x22'+_0x1bf4e1[_0x1b43f4(0x1c6)]()[_0x1b43f4(0x1b1)]+_0x1b43f4(0x1da),_0x21df50+='<div\x20class=\x22vdo-timer\x22><img\x20src=\x22./img/timer.png\x22\x20width=\x2215px\x22>\x20'+_0x1bf4e1[_0x1b43f4(0x1c6)]()[_0x1b43f4(0x1d5)]+_0x1b43f4(0x1d0),_0x21df50+=_0x1b43f4(0x196)+_0x1bf4e1[_0x1b43f4(0x1c6)]()[_0x1b43f4(0x1ab)]+'</div>',_0x21df50+=_0x1b43f4(0x1d4)+_0x1bf4e1[_0x1b43f4(0x1c6)]()[_0x1b43f4(0x1c9)]+'</div>',_0x21df50+=_0x1b43f4(0x1d3),_0x21df50+=_0x1b43f4(0x1b0)+_0x1bf4e1[_0x1b43f4(0x1c6)]()[_0x1b43f4(0x19d)]+'</span></div>',_0x21df50+=_0x1b43f4(0x1c3)+_0x5116b2+'\x22>'+_0x1bf4e1[_0x1b43f4(0x1c6)]()[_0x1b43f4(0x1ca)]+_0x1b43f4(0x1bd);_0x1bf4e1[_0x1b43f4(0x1c6)]()[_0x1b43f4(0x1ad)]==0x1&&(_0x21df50+=_0x1b43f4(0x1d8));_0x1bf4e1[_0x1b43f4(0x1c6)]()[_0x1b43f4(0x197)]==0x1&&(_0x21df50+=_0x1b43f4(0x19c)+_0x1bf4e1[_0x1b43f4(0x1c6)]()[_0x1b43f4(0x1d9)]+'\x20คำถาม</span></div>');_0x21df50+='</div></div></div></div>';if(_0x5116b2==0x2)_0x21df50+=_0x1b43f4(0x1a7);else{if(_0x5116b2==0x4)_0x21df50+=_0x1b43f4(0x1a7);else{if(_0x5116b2==0x6)_0x21df50+='<div\x20class=\x22clr\x22></div>';else{if(_0x5116b2==0x8)_0x21df50+=_0x1b43f4(0x1a7);else{if(_0x5116b2==0xa)_0x21df50+='<div\x20class=\x22clr\x22></div>';else{if(_0x5116b2==0xc)_0x21df50+=_0x1b43f4(0x1a7);else{if(_0x5116b2==0xe)_0x21df50+=_0x1b43f4(0x1a7);else{if(_0x5116b2==0x10)_0x21df50+='<div\x20class=\x22clr\x22></div>';else{if(_0x5116b2==0x12)_0x21df50+=_0x1b43f4(0x1a7);else _0x5116b2==0x14&&(_0x21df50+='<div\x20class=\x22clr\x22></div>');}}}}}}}}}),$(_0x5c02f8(0x1a9))[_0x5c02f8(0x1b4)](_0x21df50);});}function _0x1491(){var _0x208f91=['VDOstatus','https://file-upload-6f4fc.firebaseio.com','323906WbveWy','retailproject-6f4fc.appspot.com','getItem','</div></div>','755010IPJqFz','VDOclick','<div\x20class=\x22boxvdo-line2\x22><div\x20class=\x22boxvdo-icon1\x22>','<div\x20class=\x22boxvdo-line1\x22>','VDOtimer','none','retailproject-6f4fc','<div\x20class=\x22boxvdo-icon\x22><img\x20src=\x22./img/quizgame.png\x22\x20class=\x22boxvdoimg\x22>\x20<span>เก็บคะแนน</span></div>','QuestionSend','\x22\x20class=\x22img-fluid\x22\x20style=\x22border-radius:\x2010px;\x22>','271608fssObZ','update','style','VDOmain','1:653667385625:web:a5aed08500de80839f0588','getElementById','9wWmoRI','2134136XIlipf','AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','</div>','orderBy','<div\x20class=\x22vdo-header\x22>','10995120WMgKtJ','then','collection','VDOrank','<div\x20class=\x22vdo-overimg\x22><div\x20style=\x22color:#fff;opacity:1;font-size:9px;\x22\x20id=\x22NewCount-','&gGroup=','7srFvld','<div\x20class=\x22boxvdo-title\x22><div\x20class=\x22boxvdo-header\x22>','ShowQuestion','learning-group.html?gMain=','VDOTraining','\x27,\x27','<div\x20class=\x22col-lg-6\x20col-md-2\x20slide\x20text-center\x20boxvdo\x22\x20data-aos=\x22fade-left\x22\x20onclick=\x22OpenVdo(\x27','<div\x20class=\x22boxvdo-icon\x22><img\x20src=\x22./img/ask.png\x22\x20class=\x22boxvdoimg\x22>\x20<span>','VDOdate','firestore','30HQLZhU','doc','<div\x20class=\x22col-lg-6\x20col-md-4\x20slide\x20text-center\x20boxvdo\x22\x20data-aos=\x22fade-left\x22\x20style=\x22width:50%;float:\x20left;overflow:\x20hidden;\x22>','40ILpWeP','limit','<div\x20style=\x22width:100%;\x22><img\x20src=\x22','initializeApp',')\x22>ดูรายละเอียด</div></div></div></div>','<div\x20class=\x22clr\x22></div>','<div\x20class=\x22vdo-group\x20member\x22\x20style=\x22text-align:\x20left;\x20padding:6px;width:98%;\x22>','#DisplayVDOlist','<div\x20class=\x22boxvdo-border\x20member\x22><div\x20class=\x22boxvdo-img\x22>','VDOname','<div\x20class=\x22btn-t4\x22\x20onclick=\x22GotoVDOgroup(\x27','VDOquiz','FieldPath','\x22\x20style=\x22width:100%;border-radius:\x205px;overflow:hidden;\x22/>','<img\x20src=\x22./img/calendar.png\x22\x20class=\x22boxvdoimg\x22>\x20<span>','VDOimg','8476tNFXNX','href','html','344856bzBCdU','forEach','VDOitem','</div><div\x20class=\x22vdo-body\x22>','get','displayvdo.html?gid=','desc',')\x22>','\x20อ่าน</span></div>','37aSdPdW','search.html','G-9SKTRHHSW9','where','<div\x20style=\x22font-size:11px;\x20height:58px;\x20overflow:\x20hidden;\x22>','<div\x20class=\x22boxvdo-icon\x22><img\x20src=\x22./img/reading.png\x22\x20class=\x22boxvdoimg\x22>\x20<span\x20id=\x22ReadView-','VDOdisplay','display','data','\x20View</div></div></div>','VDOgroup','VDOdetail','VDOread'];_0x1491=function(){return _0x208f91;};return _0x1491();}function GotoVDOgroup(_0x43ed72,_0x48d8d9,_0x1b0b23,_0x2143e2){var _0x4bf1a7=_0x437a,_0x2bbb7e=0x0;dbVDOgroup[_0x4bf1a7(0x1c1)](firebase['firestore'][_0x4bf1a7(0x1ae)]['documentId'](),'==',_0x43ed72)[_0x4bf1a7(0x1b9)]()[_0x4bf1a7(0x1e8)](_0x2222a4=>{var _0x4ae87b=_0x4bf1a7;_0x2222a4[_0x4ae87b(0x1b6)](_0x59e8d3=>{var _0x5d0737=_0x4ae87b;_0x2bbb7e=parseInt(_0x59e8d3[_0x5d0737(0x1c6)]()[_0x5d0737(0x1d2)])+0x1,dbVDOgroup[_0x5d0737(0x1a0)](_0x43ed72)[_0x5d0737(0x1dc)]({'VDOclick':parseInt(_0x2bbb7e)});}),location[_0x4ae87b(0x1b3)]=_0x4ae87b(0x198)+sVDOmain+_0x4ae87b(0x194)+_0x48d8d9+'';});}function OpenVdo(_0x49280c,_0x30c763){var _0x3a67ff=_0x437a;location['href']=_0x3a67ff(0x1ba)+_0x49280c+'';}function GotoSearch(){var _0x598319=_0x437a;location[_0x598319(0x1b3)]=_0x598319(0x1bf);}function CloseAll(){var _0x4e7385=_0x437a;document[_0x4e7385(0x1e0)]('id01')[_0x4e7385(0x1dd)][_0x4e7385(0x1c5)]=_0x4e7385(0x1d6);}
