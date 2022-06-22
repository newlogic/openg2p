Search.setIndex({docnames:["architecture","changelog","code_of_conduct","configuring","contributing","deduplicator/gettingstarted","deduplicator/index","deduplicator/install","disbursement/index","features","index","installing","programs/concepts","programs/cycle_manager","programs/dashboards","programs/deduplication_manager","programs/eligibility_manager","programs/entitlement_manager","programs/notification_manager","programs/program_manager","registrants/api","registrants/concepts","registrants/exporting","registrants/importing","requirements","roadmap","using/audit_logs","using/managing_programs","using/managing_users"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["architecture.md","changelog.rst","code_of_conduct.md","configuring.rst","contributing.md","deduplicator/gettingstarted.md","deduplicator/index.md","deduplicator/install.md","disbursement/index.md","features.md","index.rst","installing.md","programs/concepts.md","programs/cycle_manager.rst","programs/dashboards.md","programs/deduplication_manager.md","programs/eligibility_manager.rst","programs/entitlement_manager.rst","programs/notification_manager.rst","programs/program_manager.rst","registrants/api.md","registrants/concepts.md","registrants/exporting.md","registrants/importing.md","requirements.txt","roadmap.md","using/audit_logs.md","using/managing_programs.md","using/managing_users.md"],objects:{"g2p_programs.models.managers.cycle_manager":[[13,0,1,"","BaseCycleManager"],[13,0,1,"","DefaultCycleManager"]],"g2p_programs.models.managers.cycle_manager.BaseCycleManager":[[13,1,1,"","add_beneficiaries"],[13,1,1,"","check_eligibility"],[13,1,1,"","mark_cancelled"],[13,1,1,"","mark_distributed"],[13,1,1,"","mark_ended"],[13,1,1,"","new_cycle"],[13,1,1,"","on_start_date_change"],[13,1,1,"","on_state_change"],[13,1,1,"","prepare_entitlements"],[13,1,1,"","validate_entitlements"]],"g2p_programs.models.managers.cycle_manager.DefaultCycleManager":[[13,1,1,"","add_beneficiaries"],[13,1,1,"","check_eligibility"],[13,1,1,"","copy_beneficiaries_from_program"],[13,2,1,"","cycle_duration"],[13,1,1,"","mark_cancelled"],[13,1,1,"","mark_distributed"],[13,1,1,"","mark_ended"],[13,1,1,"","new_cycle"],[13,1,1,"","on_state_change"],[13,1,1,"","prepare_entitlements"],[13,1,1,"","validate_entitlements"]],"g2p_programs.models.managers.eligibility_manager":[[16,0,1,"","BaseEligibilityManager"],[16,0,1,"","DefaultEligibilityManager"]],"g2p_programs.models.managers.eligibility_manager.BaseEligibilityManager":[[16,1,1,"","enroll_eligible_registrants"],[16,1,1,"","import_eligible_registrants"],[16,1,1,"","verify_cycle_eligibility"]],"g2p_programs.models.managers.eligibility_manager.DefaultEligibilityManager":[[16,1,1,"","enroll_eligible_registrants"],[16,1,1,"","verify_cycle_eligibility"]],"g2p_programs.models.managers.entitlement_manager":[[17,0,1,"","BaseEntitlementManager"],[17,0,1,"","DefaultCashEntitlementManager"]],"g2p_programs.models.managers.entitlement_manager.BaseEntitlementManager":[[17,1,1,"","prepare_entitlements"],[17,1,1,"","validate_entitlements"]],"g2p_programs.models.managers.entitlement_manager.DefaultCashEntitlementManager":[[17,2,1,"","currency_id"],[17,2,1,"","entitlement_validation_group_id"],[17,1,1,"","prepare_entitlements"],[17,1,1,"","validate_entitlements"]],"g2p_programs.models.managers.notification_manager":[[18,0,1,"","BaseNotificationManager"],[18,0,1,"","SMSNotificationManager"],[18,0,1,"","SMSTemplate"]],"g2p_programs.models.managers.notification_manager.SMSNotificationManager":[[18,1,1,"","on_cycle_ended"],[18,2,1,"","on_cycle_ended_template"],[18,1,1,"","on_cycle_started"],[18,2,1,"","on_cycle_started_template"],[18,1,1,"","on_enrolled_in_program"],[18,2,1,"","on_enrolled_in_program_template"]],"g2p_programs.models.managers.notification_manager.SMSTemplate":[[18,2,1,"","g2p_sms_id"]],"g2p_programs.models.managers.program_manager":[[19,0,1,"","BaseProgramManager"],[19,0,1,"","DefaultProgramManager"]],"g2p_programs.models.managers.program_manager.BaseProgramManager":[[19,1,1,"","last_cycle"],[19,1,1,"","new_cycle"]],"g2p_programs.models.managers.program_manager.DefaultProgramManager":[[19,1,1,"","last_cycle"],[19,1,1,"","new_cycle"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute"},terms:{"0":[7,9,10,24],"04":11,"07":5,"07722015":5,"0778763839":5,"1":[7,11],"1234":5,"1234567":5,"15":10,"16":8,"1990":5,"1gb":11,"2":[9,21],"20":11,"200":5,"202":5,"23":5,"232778763839":5,"3":[21,24],"317":5,"3rd":0,"5":5,"555":5,"5601":5,"6":7,"7":7,"8069":11,"9200":7,"95":5,"case":[5,12,13,16,27],"class":[2,13,16,17,18,19],"default":[0,5,6,12,13,16,17,18,19,21,27],"do":[0,5,10,12,13,21,27],"export":[9,20,23],"final":11,"import":[5,9,16,20],"new":[4,11,13],"public":[0,2],"return":[0,5,13,16,17,19],"true":16,"try":5,A:[2,5,6,12,21,27],Be:[0,4],Being:2,By:[6,11,13,21],For:[0,2,12,21,27],If:[4,6,8,10,12,13,21,26,27],In:[9,12,27],It:[5,10,11,21,27],No:2,Not:5,The:[0,2,5,6,10,11,12,13,15,16,17,18,19,20,21,23,26,27],Then:11,There:[12,21,27],To:[5,6,8,11,22],abil:0,abl:[0,23],about:[2,6,8,12,22,27],absolut:0,abus:2,accept:[2,12,27],access:[0,9],accord:0,account:[2,5,6,11,21],achiev:23,act:2,action:[0,2,22],activ:[6,8,9,11,26],ad:[5,6],adapt:2,add:[0,5,6,12,13,21,27],add_beneficiari:13,addit:21,address:[2,4,5,6,11,21],adjust:11,admin:21,adopt:6,adult:21,advanc:2,advantag:10,affect:[0,2],after:11,ag:2,against:[5,12,27],agent:9,aggress:2,aim:10,algorithm:5,align:2,all:[0,2,12,20,21,27],allevi:6,alloc:11,allow:[0,2,10,15,18,27],alreadi:[4,5],also:[2,4,6,11,12,27],altern:21,ami:11,an:[0,2,4,5,6,7,10,11,16,21,27],analysi:7,ani:[2,4,5,10,11,13,16,17,18,19,20],anoth:21,answer:2,api:[0,9,12,16,27],apolog:2,app:[0,9],appear:2,appli:2,applic:[0,4,5],appoint:2,approach:5,appropri:2,ar:[0,2,4,5,6,9,11,12,13,15,21,27],arg:[13,16,17,18,19],around:2,ask:4,assert:5,associ:11,assur:5,asynchron:9,attach:9,attack:2,attent:2,attribut:[0,5,6],audit:[0,9],audit_log:26,authent:0,author:0,automat:[9,11],avail:[0,2,12],avoid:[0,2,6,12,27],aw:11,backend:5,backlog:8,backup:11,bank:[5,12,21,27],bank_account:5,bank_account_bank:5,bank_account_numb:5,base:[0,9,10,16,27],basecyclemanag:13,baseeligibilitymanag:[13,16],baseentitlementmanag:17,basenotificationmanag:18,baseprogrammanag:19,basic:0,batch:[12,27],becaus:11,befor:[4,5,9,11],behavior:[2,4],behind:0,being:[12,13,20,27],below:[5,11],beneficiari:[0,6,13,15,16,17,18,19],benefit:0,best:2,better:[5,11],between:21,biograph:21,biometr:5,block:6,board:8,bodi:2,bool:16,both:[5,7],browser:11,bug:[6,8],build:[0,6],bulk:8,busi:8,calcul:[0,9],call:[6,10,12,16,27],campaign:[12,27],can:[0,4,6,7,8,9,10,11,12,16,17,20,21,22,27],cancel:13,cannot:7,capabl:22,card:9,caretak:21,cash:[9,17],cast:2,central:9,certain:5,certainti:5,challeng:6,chang:[0,6,8,9,10,13],changelog:10,channel:[2,6,8],characterist:2,check:5,check_elig:13,child:21,children:21,choic:0,choos:[0,11],citi:5,clarifi:2,clariti:2,clear:4,clearli:4,click:22,clone:11,code:[5,6,8],code_of_conduct:2,collect:21,color:2,com:[5,8,11],combin:6,commcar:9,comment:[2,10],commerci:0,commit:2,commod:0,common:[0,2,12,27],commun:[2,6,8],compar:5,compat:23,compens:5,complaint:2,compon:[6,18],compos:[5,11],comput:0,conduct:[4,21],confid:6,configur:[9,10,11,13,21,22],conjunct:[10,12,27],connect:[7,9],consent:9,consequ:[2,5],consid:[2,21],consist:11,construct:2,contact:[4,5,10],contain:21,context:5,continu:[2,11],contribut:[2,6,8,10],copy_beneficiaries_from_program:13,core:0,correspond:0,could:[2,21],countri:[0,5,6],coverag:6,creat:[7,11,13,19,22,26],criteria:[0,9,13,16],cultur:0,currenc:17,currency_id:17,current:[6,10,12,20,27],custom:[5,9,10,12,27],cycl:[0,16,17,18,19],cycle_dur:13,cycle_manag:13,cycle_membership:[13,17],d:7,daili:11,dashboard:9,data:[0,5,9,16,20,21,27],databas:[5,26],date:13,decis:2,dedupl:[0,5,6,9,12,21],deem:[0,2],defaultcashentitlementmanag:17,defaultcyclemanag:13,defaulteligibilitymanag:16,defaultprogrammanag:19,defin:[0,12,13,15,16,17,18,19,21,27],deleg:[0,9],delet:5,demonstr:[2,4],depend:[5,7,21],deploi:0,derogatori:2,describ:[4,20],descript:4,design:[0,12,27],determin:[0,2,16,17,19,27],dev:11,develop:[4,6,8,21],diagram:0,differ:[0,2,12,21,27],digit:21,digitalocean:11,dip:6,directli:[4,11],disabl:2,disburs:[6,8],discuss:[4,10],disenrol:5,disparag:2,distribut:[9,12,13,17,27],district:5,divers:2,dob:[5,6],doc:8,docker:5,document:[4,6,8,22],doe:[7,12,21,27],don:11,doubl:6,download:22,draft:13,drive:5,duplic:[5,6,12,27],durat:13,dure:2,e:[2,5,6,7,11],each:[12,13,26,27],easi:0,easiest:[11,23],easili:[0,6,12,27],econom:2,ecosystem:10,edit:2,educ:2,ee:[0,8],either:13,elast:11,elasticsearch:[5,6,7],elderli:21,elig:[0,9,12,13],eligibility_manag:[13,16],email:[2,5,9,11],emerg:5,emergency_contact_nam:5,emergency_contact_phon:5,empathi:2,emploi:[5,6],enabl:[0,23],encapsul:0,encount:4,encrypt:0,end:13,enforc:21,engin:[8,11],enrol:[5,13,16,18],enroll_eligible_registr:16,ensur:4,enterpris:11,entiti:[5,6,21],entitl:[0,9,12,13,19],entitlement_manag:17,entitlement_validation_group_id:17,entri:26,env:7,environ:2,erp:[0,10],especi:5,essenti:0,etc:6,ethnic:2,etl:9,event:[2,18,27],everi:0,everyon:[2,11],everyth:10,evolv:10,exampl:[2,6,8,21],execut:[12,27],exist:[5,7,10,21,23],expect:[4,11],experi:2,expir:9,explan:2,explicit:2,expos:0,express:2,extend:[0,17],extens:6,extern:[0,2,16,27],f:11,face:0,facial:6,factor:5,fail:7,fair:2,fairli:2,fals:16,famili:21,familiar:4,faq:2,fast:11,faster:22,featur:[0,8,11,12,22,23,27],feedback:2,few:[0,12,27],field:[9,21,23],file:[6,8,9,23],filter:[13,22],find:[5,6,8],fine:9,fingerprint:6,first:[4,11],first_nam:5,fit:[12,27],flexibl:0,flight:0,flow:9,focus:2,fodai:5,follow:[0,2,4,7,11,21],form:[5,9],framework:[0,5,6,9],free:2,freetown:5,from:[0,2,5,9,11,13,22],full:21,furthermor:0,futur:[11,27],fuzzi:5,g2p:[11,18],g2p_program:[13,16,17,18,19],g2p_sms_id:18,g2pcycl:13,g:[5,6,7],gender:2,gener:[12,20,27],get:[7,11],git:11,gitbook:8,github:[4,6,8,10,11],give:2,given:[12,16,17,19,27],gmail:5,go:[0,11],good:11,govern:6,gracefulli:2,grain:9,graphql:9,greater:5,grievanc:0,group:[9,17,22],gsma:9,guarante:11,ha:[0,11,12,21,27],hapen:27,happen:18,harass:2,hardwar:0,harm:2,have:[0,2,6,7,8,10,11,12,21,27],head:21,healthi:2,heart:[21,27],help:[4,11],here:[7,20],hesit:10,high:[5,6],hill:5,hook:13,household:21,how:[0,4,10,12,15,27],howev:[5,6],html:2,http:[2,5,7,8,11],httpdomain:24,hub:[0,8],human:5,i:[5,23],icu:7,id:[5,6,9],idea:11,ideal:5,ident:[0,2,5,6,9],identif:6,imageri:2,impact:2,implement:[0,5,12,13,16,17,18,19,27],import_eligible_registr:16,improv:6,inappropri:2,incid:2,includ:[2,4,26],inclus:2,increas:5,individu:[2,6,8,9,22,26],infinit:5,inform:[0,2,4,5,21],init:11,inji:9,input:5,inspir:[0,2],instal:[0,10],instanc:[2,7,11],instead:4,instruct:11,instrument:9,insult:2,integr:[0,6,9,10],inter:9,interact:2,interfac:[0,9,13,16,17,18,19],interoper:0,intervent:5,invers:5,investig:2,invis:2,involv:2,io:[7,8,9],ip:[5,11],issu:[2,4,6,8,10,11],issuanc:9,its:[0,5,7,10],itself:[12,27],jira:8,journei:[12,27],just:[0,2,21],keep:[1,11],kei:0,kind:[2,9,17,27],kobotoolbox:9,kwarg:[13,16,17,18,19],lack:[5,6],ladder:2,languag:[0,2],larg:11,larger:0,last:19,last_cycl:19,last_nam:5,launch:11,lead:2,leader:2,learn:[2,22],level:2,leverag:[0,6],licens:0,like:[2,5,6,8],likelihood:5,list:[5,6,12,13,17,22,26,27],local:0,localhost:[7,11],lock:0,log:9,lot:26,low:6,lt:11,mai:2,mail:[2,11],maintain:4,make:[2,11,22],manag:[0,10,11],mani:11,map:[5,23],mark:13,mark_cancel:13,mark_distribut:13,mark_end:13,massal:5,match:[5,6,13,16],match_fuzzi:5,mean:5,media:2,member:[2,21],membership:16,memori:11,menu:[11,21,22,23],merchant:[12,27],metaphon:5,method:[6,16,17],micro:11,middle_nam:5,mifo:[0,8],mifosforg:8,might:4,million:0,mind:[6,8],minut:4,mistak:2,mobil:[0,9],model:[0,13,16,17,18,19,20],moder:2,modul:[0,10,26],monei:[0,9],monetari:27,monitor:0,more:[6,8,21,22],mosip:[0,9],most:[12,13,16,27],mozilla:2,mph:8,much:[4,5,12,27],multi:9,multipl:[5,6,13],must:[0,5,6],myst_pars:24,name:[5,6,13,21],nation:[2,6],natur:2,navig:5,necessari:[0,5],need:[5,6,7,8,10,11,12,13,16,21,27],neighbour:21,network:[7,11],new_cycl:[13,19],new_start_d:13,newli:19,next:19,ng:[4,11,12,16,27],nomin:[12,27],none:[5,13],not_elig:13,note:5,notif:[0,9,12],notifi:[18,27],notification_manag:18,nuisanc:6,number:[4,5,6,8,9,21],nysii:5,oauth:9,object:26,oblig:2,obtain:11,occur:4,odk:9,odoo:[0,9,10,12,22,26,27],offens:2,offer:0,offici:2,offlin:2,on_cycle_end:18,on_cycle_ended_templ:18,on_cycle_start:18,on_cycle_started_templ:18,on_enrolled_in_program:18,on_enrolled_in_program_templ:18,on_start_date_chang:13,on_state_chang:13,onc:11,one:[4,11,13,21],ones:21,onli:[21,27],onlin:[2,12,27],open:[0,2,4,6,8,10,11,23],openg2p:[0,4,6,7,8,9,11,12,16,21,23,27],openid:9,oper:5,opinion:2,option:[10,11],order:[11,12,27],org:2,organ:[0,5,12,27],orient:2,other:[0,2,10,11,17,18,21],otherwis:[2,16],our:[4,10,11],overal:2,own:[0,10,22],p:7,pai:6,paper:[12,27],param:17,paramet:[0,13],parent:21,part:[0,12,21,27],parti:0,particip:2,pass:[7,9],passport:5,patch:11,pattern:2,payment:[0,5,8,9],peopl:2,per:[6,21],perform:[5,21],period:[2,6],permiss:2,person:[2,5,6,21],phone:[5,9,21],phonet:[5,7],physic:2,pictur:21,plan:[12,27],platform:0,pleas:[5,10],plu:21,plugin:7,po:[12,27],point:7,polici:4,polit:2,port:11,portal:9,posit:2,possibl:[0,4,5],post:[2,5],postal_cod:5,power:5,pr:4,precis:5,prepar:[13,17],prepare_entitl:[13,17],previou:[0,13],princip:21,principl:21,print:[9,12,27],privaci:[0,2,21],privat:2,probabilist:5,probabl:[5,6],problem:4,proceed:5,process:[0,5,22],profession:2,program:[0,5,6,10,13,15,16,18],program_manag:19,program_membership:[16,18],programm:9,progress:[12,27],project:[4,6,8,10,21],promptli:2,proprietari:0,protect:[0,6],provid:[0,2,5,6,11,12,13,16,17,18,19,20,27],publish:2,pull:[4,6,8],qualiti:5,queri:5,question:[2,10],race:2,rapidli:10,rapidpro:9,re:[4,17],read:[4,11,22],readi:[12,27],realli:21,reason:[2,5],receiv:[12,27],recipi:21,recognit:6,recommend:[12,27],record:[5,12,23,27],refer:5,referenc:5,regardless:2,registr:[0,11,12,27],regular:11,reject:2,relat:[9,18],relationship:21,releas:7,relev:4,religion:2,remain:11,remov:[2,5],replac:0,report:[2,4,6,8,9],repres:[2,12,21,27],represent:[5,6],request:[0,2,4,6,8,9],requir:[0,5,21],resolut:[5,6],respect:2,respons:5,rest:[0,5,9],restrict:11,result:[0,5,10],review:2,rework:20,right:[2,9,21],road:9,role:21,rule:5,run:[5,7,11,13],s:[0,2,5,6,9,11,13,21],salton:5,saltonmass:5,same:[0,5,6,11],school:21,se:11,search:4,searchservic:7,searchservice_elastic_endpoint:7,secur:[2,4,11,12,21,27],see:[2,21],select:[5,9,11,22],send:9,sent:[5,9,11],sequenc:13,seri:2,seriou:2,serv:6,server:[7,10,11,12,27],servic:[0,5,6,10,11],set:[0,2,5,6,11,21],sex:2,sexual:2,share:[12,27],ship:5,should:[0,6,12,13,16,21,26,27],show:[0,5],sibl:21,signific:6,similar:[5,11],simpl:0,simpli:[5,6,8,21],singl:2,size:2,sm:[9,18],small:0,smsnotificationmanag:18,smstemplat:18,so:0,social:[0,2,6,12,27],socio:2,softwar:[0,8],solut:[0,4,12,27],some:[0,5,18,21,27],sometim:[12,27],sort:2,soundex:5,sourc:[10,13,16,17,18,19],space:2,specif:[0,21],specifi:2,sphinx:24,sphinx_rtd_them:24,sphinxcontrib:24,ssh:11,standalon:[0,6,11],standard:0,start:[1,4,7,13],startup:7,state:[5,13],station:5,statu:[2,12,27],step:11,storag:9,store:[0,16,21,26,27],strategi:[5,6],streamlin:10,street2:5,street:5,string:5,sub:0,submit:[6,8],submodul:11,suppli:5,support:[5,6,11,12,27],sure:4,sustain:2,swagger:20,system:[0,9,11,12,16,20,21,26,27],t2:11,t:11,tabl:5,take:[2,4,10],talk:[6,8],team:10,technic:8,technolog:0,templat:[12,18,22,27],ten:0,tenant:9,term:2,testabl:0,than:5,thank:4,thei:[0,2,5,6,13,21],them:[12,13,27],thi:[2,4,5,6,10,13,16,17,18,19,20,23],think:[12,27],third:0,those:[0,2,12,21,27],thousand:0,threaten:2,through:[0,2,9,10,11],ticket:9,time:[2,6,12,27],titl:4,todo:[11,26],top:0,toward:2,town:5,tracker:[6,8],transfer:6,translat:2,troll:2,type:[5,11,13,17,21],typic:5,typo:[5,6],ubuntu:11,unabl:4,unaccept:2,under:[4,6,8,11],uniqu:[5,6,21],univers:6,unprofession:2,unsolicit:2,unwelcom:2,up:[0,4,7,11],updat:[11,12,13,27],upgrad:0,upload:23,uptim:11,us:[0,2,4,5,6,8,9,10,12,13,16,17,18,20,21,22,27],user:[10,16],usual:[5,6],valid:[9,13,16,17],validate_entitl:[13,17],valu:27,variabl:7,variou:[12,27],vast:10,vendor:0,veri:5,verif:[9,12,27],verifi:[12,13,16,27],verify_cycle_elig:16,version:[2,4,20],via:[0,2,5],view:26,viewpoint:2,violat:2,visibl:2,visual:5,voucher:9,vulner:4,wa:[2,4,5],wai:[2,5,11,23],want:[0,6,8,22,23],warn:7,we:[2,5,6,8,12,27],web:11,websit:10,websub:9,welcom:[2,4],well:[0,2],were:2,what:[2,5,12,17,19,27],when:[2,5,11,12,13,21,27],whenev:0,where:[0,5,6],which:[2,7],why:[2,5],wiki:2,within:[2,15,27],without:[0,2,5],work:[0,6,12,27],would:[6,8],written:2,www:2,x:9,xl:[9,22],yet:6,yml:11,you:[0,5,6,7,8,10,11,12,21,22,26,27],your:[0,4,5,7,10,11,12,22,23,27],zentiti:[6,7],zip:7},titles:["Architecture","Changelog","Contributor Covenant Code of Conduct","Configuration","Contributing","Getting Started","Overview","Installation","Overview","Features","OpenG2P - Social Protection Solution","Installation","Overview","Cycle Manager","Dashboards","Deduplication Manager","Eligibility Manager","Entitlement Manager","Notification Manager","Program Manager","API","Overview","Exporting Registrants","Importing Registrants","&lt;no title&gt;","&lt;no title&gt;","Audit Logs","Managing Programs","Managing Users"],titleterms:{"0":1,"1":[1,2],"2":2,"3":2,"4":2,"do":4,"export":22,"function":0,"import":23,about:4,all:5,allow:5,amazon:11,api:[5,20],approach:0,architectur:0,attribut:2,audit:26,background:6,ban:2,beneficiari:[5,9,12,27],bug:4,cash:[12,27],central:23,changelog:1,cloud:11,code:[2,4],commun:9,compon:0,compos:7,concept:27,conduct:2,configur:[0,3,26],contribut:4,contributor:2,correct:2,coven:2,csv:[22,23],cycl:[9,12,13,27],dashboard:14,data:23,de:5,dedupl:[15,27],develop:[10,11],did:4,docker:[7,11],document:21,ec2:11,ecosystem:0,elig:[16,27],enforc:2,entitl:[17,27],exampl:0,excel:[22,23],extens:0,featur:[6,9],field:5,find:4,first:3,fix:4,from:23,get:[5,6,8,10],go:7,grievanc:9,group:21,guidelin:2,have:4,help:[6,8],host:0,how:5,id:21,imag:7,index:5,individu:21,instal:[7,11,26],instrument:[12,27],kibana:5,larg:0,log:26,manag:[9,12,13,15,16,17,18,19,27,28],membership:21,mid:0,mobil:[12,27],modular:0,monei:[12,27],newlog:11,next:7,notif:[18,27],odk:23,odoo:20,openg2p:10,our:2,overview:[6,8,12,21],patch:4,payment:[12,27],perman:2,pledg:2,principl:0,product:11,program:[9,12,14,19,27],project:0,protect:10,question:4,quick:11,recommend:11,registr:[9,21,22,23],relat:21,respons:2,rest:20,restrict:[12,27],run:3,scope:2,search:5,secur:9,size:0,social:10,solut:10,sourc:4,standard:2,start:[5,10,11],temporari:2,transfer:[12,27],type:[12,27],ui:5,upcom:9,updat:23,us:[7,11,23],user:28,voucher:[12,27],warn:2,where:7,work:5,write:4,you:4}})