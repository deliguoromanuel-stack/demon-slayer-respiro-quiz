(()=>{
'use strict';
const STYLES={
 acqua:{name:'Acqua',color:'#17678a',bright:'#3eafd6',traits:['Equilibrio','Empatia','Adattabilità'],headline:'Trovi la tua forza nel fluire.',description:'Leggi la situazione prima di muoverti. Sai cambiare direzione senza perdere te stesso e fai spazio alle persone che hai accanto. La tua calma non è immobilità: è il modo in cui trovi una via.',col:0,row:0},
 fiamma:{name:'Fiamma',color:'#c52726',bright:'#f27048',traits:['Passione','Coraggio','Determinazione'],headline:'Accendi ciò in cui credi.',description:'Quando qualcosa conta, ci metti tutto. Trasformi la motivazione in azione e la tua energia contagia chi ti sta vicino. La tua forza cresce quando scegli una causa che senti davvero tua.',col:1,row:0},
 fulmine:{name:'Fulmine',color:'#866009',bright:'#ffcf48',traits:['Intuito','Prontezza','Intensità'],headline:'Un istante. Tutta la tua energia.',description:'Riconosci l’apertura e cogli il momento. Puoi sembrare silenzioso, poi sorprendere con una decisione netta. Dai il meglio quando fiducia e istinto si incontrano.',col:2,row:0},
 vento:{name:'Vento',color:'#326c4b',bright:'#8ccb92',traits:['Libertà','Iniziativa','Franchezza'],headline:'Apri una strada tutta tua.',description:'Le strade già scritte ti stanno strette. Preferisci esplorare, parlare con chiarezza e mettere le idee alla prova. Il tuo slancio fa respirare possibilità nuove anche agli altri.',col:3,row:0},
 pietra:{name:'Pietra',color:'#53504c',bright:'#d6c8ac',traits:['Costanza','Lealtà','Concretezza'],headline:'Sei il punto che resta fermo.',description:'Costruisci fiducia un gesto alla volta. Nei momenti difficili porti presenza, metodo e concretezza. Le persone sanno di poter contare su di te, anche quando il percorso è lungo.',col:0,row:1},
 nebbia:{name:'Nebbia',color:'#676586',bright:'#b4b1e4',traits:['Osservazione','Immaginazione','Autonomia'],headline:'Vedi oltre il primo sguardo.',description:'Ti prendi lo spazio per osservare ciò che agli altri sfugge. Colleghi dettagli, immagini alternative e segui un ritmo personale. Da quel silenzio possono nascere le tue idee più precise.',col:1,row:1},
 fiore:{name:'Fiore',color:'#a33768',bright:'#fa8cbb',traits:['Sensibilità','Cura','Armonia'],headline:'La tua cura lascia il segno.',description:'Noti le sfumature e dai valore ai piccoli gesti. Cerchi una forma di forza che tenga insieme sensibilità e decisione. Quando coltivi qualcosa, lo fai con attenzione e presenza.',col:2,row:1},
 insetto:{name:'Insetto',color:'#714899',bright:'#c595f7',traits:['Strategia','Precisione','Ingegno'],headline:'Il dettaglio cambia tutto.',description:'Preferisci una mossa ben pensata a dieci mosse impulsive. Scomponi i problemi, cerchi il punto decisivo e trovi soluzioni ingegnose. La tua forza è fare molto con il gesto giusto.',col:3,row:1}
};
// Ogni scelta attribuisce 3 punti allo stile principale e 1 a quello affine.
// Parità: più scelte principali, poi ordine fisso degli otto stili.
const QUESTIONS=[
 {topic:'Quando cambia il piano',text:'Una gita salta all’ultimo minuto. Come reagisci?',answers:[['Trovo un’alternativa che faccia stare bene tutto il gruppo.','acqua','fiore','hai cercato un’alternativa capace di tenere insieme il gruppo'],['Propongo subito qualcosa che riaccenda l’entusiasmo.','fiamma','vento','hai scelto di riaccendere l’entusiasmo davanti a un imprevisto'],['Colgo al volo la prima occasione interessante.','fulmine','vento','hai colto un’occasione senza aspettare il piano perfetto'],['Mi prendo un momento e immagino un piano diverso.','nebbia','insetto','hai lasciato spazio all’osservazione prima di cambiare piano']]},
 {topic:'Le persone che contano',text:'Un amico ha avuto una giornata pesante. Cosa ti viene naturale fare?',answers:[['Gli sto vicino e lo aiuto con una cosa concreta.','pietra','acqua','hai offerto una presenza concreta a un amico in difficoltà'],['Gli dedico tempo e un gesto pensato proprio per lui.','fiore','acqua','hai dato valore a un gesto personale e attento'],['Lo aiuto a capire quale parte del problema può risolvere.','insetto','pietra','hai cercato il punto del problema su cui intervenire'],['Gli propongo di uscire e cambiare aria insieme.','vento','fiamma','hai aperto una possibilità nuova per alleggerire una giornata']]},
 {topic:'Sotto pressione',text:'In un progetto di gruppo, due persone vogliono cose opposte. Tu…',answers:[['Cerco un punto d’incontro che salvi le idee di entrambi.','acqua','fiore','hai cercato un punto d’incontro durante un conflitto'],['Ascolto e individuo ciò che nessuno ha ancora considerato.','nebbia','insetto','hai osservato il conflitto da una prospettiva diversa'],['Riporto tutti all’obiettivo e organizzo i prossimi passi.','pietra','insetto','hai riportato un gruppo a un obiettivo concreto'],['Sostengo con energia la direzione in cui credo.','fiamma','vento','hai sostenuto con energia una direzione in cui credi']]},
 {topic:'La scintilla',text:'Hai un pomeriggio libero per imparare qualcosa. Da dove parti?',answers:[['Provo qualcosa fuori dalle mie abitudini.','vento','fulmine','hai scelto di uscire dalle tue abitudini'],['Mi butto nella parte che mi incuriosisce di più.','fulmine','fiamma','hai seguito la scintilla della curiosità'],['Cerco un’attività creativa da curare con calma.','fiore','nebbia','hai dedicato attenzione a un’attività creativa'],['Studio un trucco preciso e provo a padroneggiarlo.','insetto','pietra','hai preferito capire e padroneggiare un dettaglio']]},
 {topic:'Quello che ti muove',text:'Un obiettivo richiede mesi di impegno. Cosa ti tiene in movimento?',answers:[['La soddisfazione dei piccoli progressi quotidiani.','pietra','insetto','hai trovato motivazione nei progressi quotidiani'],['Ricordare perché quell’obiettivo mi sta a cuore.','fiamma','fiore','hai legato l’impegno a qualcosa che ti sta a cuore'],['Adattare il percorso quando cambiano le circostanze.','acqua','nebbia','hai scelto di adattare il percorso alle circostanze'],['La possibilità di fare le cose a modo mio.','vento','fulmine','hai dato valore alla libertà di costruire il tuo percorso']]},
 {topic:'Una scelta importante',text:'Devi scegliere tra due opportunità interessanti. Come decidi?',answers:[['Penso a quale mi farà sentire più in sintonia con me.','fiore','acqua','hai ascoltato ciò che senti in sintonia con te'],['Confronto i dettagli e scelgo il vantaggio più concreto.','insetto','pietra','hai confrontato i dettagli prima di una scelta'],['Mi allontano dal rumore per vedere la situazione meglio.','nebbia','fiore','hai cercato spazio e silenzio per decidere'],['Ascolto l’intuizione che continua a tornarmi in mente.','fulmine','vento','hai dato fiducia a un’intuizione persistente']]},
 {topic:'Quando non riesce',text:'Il primo tentativo non è andato come speravi. Qual è la tua prossima mossa?',answers:[['Cambio approccio e riprovo con più flessibilità.','acqua','nebbia','hai cambiato approccio dopo un tentativo difficile'],['Raccolgo l’energia e riparto con ancora più convinzione.','fiamma','fulmine','hai ritrovato energia per ripartire'],['Continuo ad allenarmi, un passaggio alla volta.','pietra','fiore','hai scelto la costanza dopo un ostacolo'],['Metto in discussione il metodo e sperimento una nuova strada.','vento','insetto','hai messo alla prova un metodo per trovare una nuova strada']]},
 {topic:'Il tuo spazio',text:'In un posto pieno di persone nuove, dove finisce la tua attenzione?',answers:[['Sui dettagli del luogo e sulle dinamiche del gruppo.','nebbia','insetto','hai notato dettagli e dinamiche in un ambiente nuovo'],['Sulla conversazione che mi accende subito la curiosità.','fulmine','fiamma','hai seguito una conversazione capace di accendere la curiosità'],['Su chi mi sembra avere bisogno di un po’ di accoglienza.','fiore','acqua','hai prestato attenzione a chi poteva sentirsi fuori posto'],['Su una domanda interessante che faccia partire il dialogo.','insetto','vento','hai cercato una domanda precisa per aprire il dialogo']]},
 {topic:'Il tuo posto nel gruppo',text:'State organizzando una serata. Quale ruolo ti viene spontaneo?',answers:[['Porto un’idea diversa dal solito e vedo chi si unisce.','vento','nebbia','hai portato nel gruppo un’idea fuori dagli schemi'],['Creo entusiasmo e coinvolgo le persone.','fiamma','fiore','hai scelto di coinvolgere le persone con entusiasmo'],['Risolvo gli incastri e faccio funzionare i dettagli.','insetto','pietra','hai fatto funzionare gli incastri di un piano condiviso'],['Immagino l’atmosfera e propongo un’idea inaspettata.','nebbia','fiore','hai immaginato l’atmosfera prima di proporre un’idea']]},
 {topic:'La tua firma',text:'Quale complimento ti farebbe sentire davvero riconosciuto?',answers:[['“Con te, so di poter contare su qualcuno.”','pietra','acqua','hai riconosciuto la lealtà come una qualità importante per te'],['“Sai dare valore anche alle cose più piccole.”','fiore','insetto','hai riconosciuto il valore della cura e delle piccole cose'],['“Quando arriva il momento, sai sorprendermi.”','fulmine','fiamma','hai riconosciuto la capacità di cogliere il momento'],['“Riesci a trovare una via anche nelle situazioni complicate.”','acqua','vento','hai riconosciuto la flessibilità come una tua forza']]}
];
const $=id=>document.getElementById(id);
const state={view:'home',index:0,answers:Array(10).fill(null),result:null,busy:false};
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let toastTimer,revealTimer,raf,returnFocus,finishedReveal=false,cardUrl;
const sprite=$('emblem-source');
const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
const wait=ms=>new Promise(r=>setTimeout(r,ms));
function calculate(answers){
 if(!Array.isArray(answers)||answers.length!==10||answers.some((v)=>!Number.isInteger(v)||v<0||v>3))throw new Error('Completa tutte le dieci domande.');
 const keys=Object.keys(STYLES),scores=Object.fromEntries(keys.map(k=>[k,0])),primary={...scores};
 answers.forEach((a,i)=>{const item=QUESTIONS[i].answers[a];scores[item[1]]+=3;scores[item[2]]+=1;primary[item[1]]++;});
 const sorted=keys.slice().sort((a,b)=>scores[b]-scores[a]||primary[b]-primary[a]||keys.indexOf(a)-keys.indexOf(b));
 return {key:sorted[0],scores,primary};
}
function toast(message){clearTimeout(toastTimer);$('toast').textContent=message;$('toast').hidden=false;toastTimer=setTimeout(()=>$('toast').hidden=true,4000);}
function setView(view){
 state.view=view;['home','quiz','result'].forEach(name=>$(name+'-view').hidden=name!==view);
 document.title=view==='result'?'Respirazione '+STYLES[state.result].name+' — Respiro':'Quale respirazione ti rappresenta? — Respiro';
}
function focusTitle(id){const e=$(id);e.setAttribute('tabindex','-1');e.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});}
function clearResultUrl(){if(location.hash.startsWith('#respiro='))history.replaceState(null,'',location.pathname+location.search);}
function start(){if(state.busy)return;clearResultUrl();state.answers.fill(null);state.index=0;state.result=null;setView('quiz');renderQuestion();focusTitle('question-title');}
function home(){if(state.busy)return;clearResultUrl();setView('home');focusTitle('home-title');}
function renderQuestion(){
 const q=QUESTIONS[state.index],selected=state.answers[state.index];
 $('quiz-view').className='quiz';
 $('quiz-view').innerHTML=`<div class="quiz-top"><div class="counter">${String(state.index+1).padStart(2,'0')} <span>/ 10</span></div><div class="progress" role="progressbar" aria-label="Domande completate" aria-valuemin="0" aria-valuemax="10" aria-valuenow="${state.answers.filter(a=>a!==null).length}">${QUESTIONS.map((_,i)=>`<span class="mark ${state.answers[i]!==null?'filled':''}" aria-hidden="true"></span>`).join('')}</div></div><p class="quiz-kicker">${q.topic}</p><h2 class="question-title" id="question-title">${q.text}</h2><div class="answers" role="radiogroup" aria-labelledby="question-title">${q.answers.map((a,i)=>`<button class="answer" role="radio" aria-checked="${selected===i}" data-answer="${i}" tabindex="${selected===null?i===0?0:-1:selected===i?0:-1}"><span class="answer-letter" aria-hidden="true">${'ABCD'[i]}</span><svg class="answer-circle" viewBox="0 0 54 51" aria-hidden="true"><path d="M43 7 C22 -2 1 12 5 30 C7 48 44 51 49 27 C53 13 41 3 21 5"/></svg><span>${a[0]}</span></button>`).join('')}</div><div class="quiz-bottom"><button class="back-button" id="back-button">${state.index===0?'Torna all’inizio':'Domanda precedente'}</button><button class="action primary" id="next-button" ${selected===null?'disabled':''}>${state.index===9?'Scopri la tua respirazione':'Prossima domanda'}</button></div><p class="quiz-tip">Non esiste una risposta giusta. Scegli quella che senti tua.</p>`;
 $('quiz-view').querySelectorAll('[data-answer]').forEach(btn=>{
  btn.addEventListener('click',()=>selectAnswer(Number(btn.dataset.answer),btn));
  btn.addEventListener('keydown',e=>{if(['ArrowDown','ArrowRight','ArrowUp','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();let n=Number(btn.dataset.answer);n=e.key==='Home'?0:e.key==='End'?3:(n+(e.key==='ArrowDown'||e.key==='ArrowRight'?1:3))%4;const target=$('quiz-view').querySelector(`[data-answer="${n}"]`);selectAnswer(n,target);target.focus();}});
 });
 $('back-button').onclick=()=>state.index===0?home():navigateQuestion(-1);
 $('next-button').onclick=()=>state.index===9?completeQuiz():navigateQuestion(1);
}
function selectAnswer(index,button){
 if(state.busy)return;state.answers[state.index]=index;
 $('quiz-view').querySelectorAll('[data-answer]').forEach(b=>{const checked=Number(b.dataset.answer)===index;b.setAttribute('aria-checked',String(checked));b.tabIndex=checked?0:-1;});
 $('next-button').disabled=false;const mark=$('quiz-view').querySelectorAll('.mark')[state.index];if(!mark.classList.contains('filled'))mark.classList.add('filled');
 $('quiz-view').querySelector('.progress').setAttribute('aria-valuenow',state.answers.filter(a=>a!==null).length);
 if(!reduced.matches){const r=button.getBoundingClientRect();for(let i=0;i<10;i++){const dot=document.createElement('i');dot.className='paint-dot';dot.style.left=(r.left+35)+'px';dot.style.top=(r.top+r.height/2)+'px';dot.style.setProperty('--dx',(Math.random()-.5)*125+'px');dot.style.setProperty('--dy',(Math.random()-.5)*90+'px');document.body.append(dot);setTimeout(()=>dot.remove(),600);}}
}
async function navigateQuestion(delta){
 if(state.busy||state.index+delta<0||state.index+delta>9)return;
 if(delta===1&&state.answers[state.index]===null)return;
 state.busy=true;
 if(!reduced.matches){$('brush-wipe').classList.add('sweep');await wait(220);}
 state.index+=delta;renderQuestion();focusTitle('question-title');
 if(!reduced.matches)await wait(250);$('brush-wipe').classList.remove('sweep');state.busy=false;
}
function evidence(key){
 return state.answers.map((a,i)=>a===null?null:QUESTIONS[i].answers[a]).filter(Boolean).filter(a=>a[1]===key||a[2]===key).sort((a,b)=>(b[1]===key)-(a[1]===key)).slice(0,2).map(a=>a[3]);
}
function renderResult(key,personal){
 const s=STYLES[key];state.result=key;document.documentElement.style.setProperty('--accent',s.color);
 const notes=personal?evidence(key):[];
 $('result-view').className='result result-enter';
 $('result-view').innerHTML=`<div class="result-poster"><span class="poster-stamp">la tua essenza</span><div class="poster-kicker">LA MIA RESPIRAZIONE È</div><div class="element-art" style="--col:${s.col};--row:${s.row}" role="img" aria-label="Simbolo della respirazione ${s.name}"><img src="${sprite.src}" alt=""></div><h2 class="poster-title">${s.name.toUpperCase()}</h2><p class="poster-traits">${s.traits.join(' · ')}</p></div><div class="result-copy"><div class="eyebrow">${personal?'Il tuo istinto ha parlato':'Una respirazione da scoprire'}</div><h2 id="result-title" class="result-title">${s.headline}</h2><p class="result-intro">${s.description}</p><ul class="trait-list" aria-label="Tre tratti della personalità">${s.traits.map(t=>`<li>${t}</li>`).join('')}</ul>${notes.length?`<p class="personal-note">Nelle tue scelte, ${notes.join(' e ')}. È qui che prende forma la tua respirazione.</p>`:'<p class="personal-note">Stai esplorando un risultato condiviso. Fai il quiz per scoprire quale respirazione racconta il tuo carattere.</p>'}<div class="result-actions"><button class="action primary" id="download-button">Scarica la tua card</button><button class="action" id="share-button">Condividi</button></div><button class="text-button restart" id="restart-button">${personal?'Rifai il quiz':'Scopri il tuo stile'}</button><p class="result-small">Un gioco di personalità, da prendere con leggerezza.</p></div>`;
 $('download-button').onclick=downloadCard;$('share-button').onclick=share;$('restart-button').onclick=start;
}
function completeQuiz(){
 if(state.busy)return;let outcome;try{outcome=calculate(state.answers);}catch(e){toast(e.message);return;}
 state.result=outcome.key;renderResult(outcome.key,true);
 const url=new URL(location.href);url.hash='respiro='+outcome.key;history.replaceState(null,'',url);
 if(reduced.matches){setView('result');focusTitle('result-title');return;}
 beginReveal(outcome.key);
}
function beginReveal(key){
 const s=STYLES[key];finishedReveal=false;state.busy=true;
 $('reveal-title').textContent=s.name.toUpperCase();$('reveal').style.setProperty('--reveal-color',s.bright);$('reveal').showModal();$('skip-reveal').focus();
 const canvas=$('reveal-canvas'),ctx=canvas.getContext('2d');
 const w=innerWidth,h=innerHeight,dpr=Math.min(devicePixelRatio||1,2);canvas.width=w*dpr;canvas.height=h*dpr;ctx.scale(dpr,dpr);
 const count=w<600?40:65,particles=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,s:3+Math.random()*8,v:1+Math.random()*3,a:Math.random()*6.28}));let previous=performance.now(),start=previous;
 const draw=now=>{
  const elapsed=(now-start)/1000,delta=Math.min((now-previous)/16.67,2);previous=now;ctx.clearRect(0,0,w,h);ctx.strokeStyle=s.bright;ctx.fillStyle=s.bright;
  particles.forEach(p=>{ctx.globalAlpha=.18+.33*Math.sin(p.a+elapsed)**2;ctx.lineWidth=1.5;ctx.beginPath();
   if(key==='acqua'){p.x+=p.v*delta;p.y+=Math.sin(elapsed*3+p.a)*delta;ctx.moveTo(p.x,p.y);ctx.bezierCurveTo(p.x+15,p.y-18,p.x+30,p.y+18,p.x+45,p.y);ctx.stroke();}
   else if(key==='fiamma'){p.y-=p.v*2*delta;p.x+=Math.sin(elapsed*4+p.a)*delta;ctx.lineWidth=2.5;ctx.moveTo(p.x,p.y);ctx.quadraticCurveTo(p.x+Math.sin(p.a)*20,p.y-20,p.x+7,p.y-45);ctx.stroke();}
   else if(key==='fulmine'){p.x+=p.v*delta;ctx.moveTo(p.x,p.y);ctx.lineTo(p.x-10,p.y+18);ctx.lineTo(p.x+8,p.y+17);ctx.lineTo(p.x-5,p.y+40);ctx.stroke();}
   else if(key==='vento'){p.x+=Math.cos(p.a+elapsed)*p.v*delta;p.y+=Math.sin(p.a+elapsed)*p.v*delta;ctx.arc(p.x,p.y,p.s*3,elapsed+p.a,elapsed+p.a+4.5);ctx.stroke();}
   else if(key==='pietra'){p.y+=p.v*delta;ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+p.s,p.y+3);ctx.lineTo(p.x+2,p.y+p.s*2);ctx.lineTo(p.x-p.s,p.y+p.s);ctx.closePath();ctx.stroke();}
   else if(key==='nebbia'){p.x+=p.v*.6*delta;ctx.globalAlpha=.08;ctx.lineWidth=p.s*1.5;ctx.moveTo(p.x-60,p.y);ctx.bezierCurveTo(p.x-15,p.y-35,p.x+20,p.y+35,p.x+90,p.y);ctx.stroke();}
   else{p.y-=p.v*delta;p.x+=Math.sin(elapsed+p.a)*delta;ctx.globalAlpha=.38;const size=key==='fiore'?p.s*7:p.s*9;ctx.drawImage(sprite,s.col*sprite.naturalWidth/4,s.row*sprite.naturalHeight/2,sprite.naturalWidth/4,sprite.naturalHeight/2,p.x,p.y,size/2,size);}
   if(p.y>h+70)p.y=-70;if(p.y<-70)p.y=h+70;if(p.x>w+100)p.x=-100;
  });ctx.globalAlpha=1;raf=requestAnimationFrame(draw);
 };raf=requestAnimationFrame(draw);revealTimer=setTimeout(finishReveal,2450);
}
function finishReveal(){if(finishedReveal)return;finishedReveal=true;clearTimeout(revealTimer);cancelAnimationFrame(raf);if($('reveal').open)$('reveal').close();state.busy=false;setView('result');focusTitle('result-title');}
function resultLink(){const u=new URL(location.href);u.search='';u.hash='respiro='+state.result;return u.href;}
async function share(){
 const link=resultLink(),s=STYLES[state.result];
 if(navigator.share){try{await navigator.share({title:'La mia respirazione è '+s.name,text:'Ho scoperto il mio stile. Qual è il tuo?',url:link});return;}catch(e){if(e.name==='AbortError')return;}}
 try{if(!navigator.clipboard)throw Error();await navigator.clipboard.writeText(link);toast('Link del risultato copiato!');}catch{
  returnFocus=document.activeElement;$('share-url').value=link;$('share-dialog').showModal();$('share-url').focus();$('share-url').select();
 }
}
async function downloadCard(){
 const button=$('download-button');button.disabled=true;
 try{
  await sprite.decode();const s=STYLES[state.result],c=document.createElement('canvas');c.width=1080;c.height=1350;const ctx=c.getContext('2d');
  ctx.fillStyle='#eee9dd';ctx.fillRect(0,0,c.width,c.height);let seed=12345;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
  ctx.fillStyle='#24231f';for(let i=0;i<18000;i++){ctx.globalAlpha=rand()*.065;ctx.fillRect(rand()*1080,rand()*1350,1+rand()*2,1);}ctx.globalAlpha=1;
  ctx.strokeStyle='#24231f';ctx.lineWidth=4;ctx.strokeRect(35,35,1010,1280);ctx.lineWidth=1.5;ctx.strokeRect(44,44,995,1260);
  ctx.textAlign='center';ctx.fillStyle='#24231f';ctx.font='bold 23px "Segoe UI",Arial,sans-serif';ctx.fillText('QUALE RESPIRAZIONE TI RAPPRESENTA?',540,115);ctx.font='18px "Segoe UI",Arial,sans-serif';ctx.fillText('LA MIA RESPIRAZIONE È',540,166);
  ctx.drawImage(sprite,s.col*sprite.naturalWidth/4,s.row*sprite.naturalHeight/2,sprite.naturalWidth/4,sprite.naturalHeight/2,327,185,426,760);
  ctx.fillStyle=s.color;ctx.font='100px Impact,"Arial Narrow",sans-serif';ctx.fillText(s.name.toUpperCase(),540,1015,930);
  ctx.strokeStyle=s.color;ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(255,1042);ctx.lineTo(828,1037);ctx.stroke();
  ctx.fillStyle='#24231f';ctx.font='bold 27px "Segoe UI",Arial,sans-serif';ctx.fillText(s.traits.join(' · '),540,1110,920);
  ctx.font='22px "Segoe UI",Arial,sans-serif';ctx.fillText(s.headline,540,1170,930);ctx.font='16px "Segoe UI",Arial,sans-serif';ctx.fillText('Progetto fan non ufficiale ispirato a Demon Slayer',540,1250);ctx.font='14px "Segoe UI",Arial,sans-serif';ctx.fillText('© '+new Date().getFullYear()+' Manuel Deliguoro · Materiali originali del sito',540,1283);
  const blob=await new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(Error('Esportazione non disponibile')),'image/png'));
  if(cardUrl)URL.revokeObjectURL(cardUrl);cardUrl=URL.createObjectURL(blob);
  $('card-preview').src=cardUrl;$('card-preview').alt='Card della respirazione '+s.name+', '+s.traits.join(', ');
  $('save-card').href=cardUrl;$('save-card').download='la-mia-respirazione-'+state.result+'.png';
  returnFocus=button;$('card-dialog').showModal();$('save-card').focus();
 }catch{toast('Impossibile creare la card. Riprova tra un momento.');}finally{button.disabled=false;}
}
const LEGAL={
 privacy:{title:'Informativa privacy e cookie',body:`<p>Questo quiz funziona nel tuo browser, senza registrazione. Le risposte vengono usate per calcolare il risultato e restano soltanto nella memoria temporanea della pagina: non vengono inviate a un server e si cancellano quando chiudi o ricarichi il sito.</p><h3>Cookie e memoria locale</h3><p>Il codice del quiz non installa cookie, non usa localStorage o sessionStorage e non include pubblicità, strumenti di analisi o tracciamento. Per questo non compare un banner di consenso.</p><h3>Il risultato condiviso</h3><p>Il collegamento condiviso contiene soltanto il nome dello stile dopo il simbolo #. Non contiene le tue risposte. Chi riceve il link può vedere la descrizione generale della respirazione. La card viene generata nel browser e salvata sul tuo dispositivo.</p><h3>Accesso e hosting</h3><p>Il fornitore che ospita il sito può gestire dati tecnici di connessione e, se l’accesso è privato, tecnologie di autenticazione proprie. Questa informativa descrive il funzionamento del quiz; per i servizi della piattaforma consulta la relativa informativa.</p><h3>Contatti</h3><p>Per domande sul sito: <a href="mailto:deliguoromanuel@gmail.com">deliguoromanuel@gmail.com</a>. L’apertura del collegamento email usa l’app di posta del tuo dispositivo.</p>`},
 terms:{title:'Termini di utilizzo',body:`<p>“Quale respirazione ti rappresenta?” è un gioco di personalità per intrattenimento. I risultati non costituiscono una valutazione psicologica e non descrivono in modo definitivo una persona.</p><p>Il sito è un progetto fan non ufficiale, senza affiliazione o approvazione da parte dei titolari di Demon Slayer. Nomi, personaggi e altri elementi di Demon Slayer appartengono ai rispettivi titolari.</p><p>Puoi partecipare gratuitamente al quiz e condividere il tuo risultato tramite gli strumenti presenti. La condivisione della card personale è consentita mantenendo i crediti riportati.</p><p>Per ricreare il sito o riprodurre i suoi materiali originali, richiedi l’autorizzazione a <a href="mailto:deliguoromanuel@gmail.com">deliguoromanuel@gmail.com</a>. Tale autorizzazione non concede diritti sugli elementi di Demon Slayer.</p>`},
 copyright:{title:'Copyright e contatti',body:`<p>© ${new Date().getFullYear()} Manuel Deliguoro.</p><p>Per ricreare, riprodurre o riutilizzare il design e i contenuti originali di questo sito, richiedi l’autorizzazione scrivendo a <a href="mailto:deliguoromanuel@gmail.com">deliguoromanuel@gmail.com</a>.</p><p>La richiesta riguarda esclusivamente i materiali originali del sito, comprese le illustrazioni create per questa esperienza. Gli elementi di Demon Slayer appartengono ai rispettivi titolari; nessuna autorizzazione relativa a questo sito attribuisce diritti su tali elementi.</p><p>Puoi condividere la tua card personale mantenendo i crediti.</p>`}
};
function openLegal(key){const content=LEGAL[key];if(!content)return;returnFocus=document.activeElement;$('legal-title').textContent=content.title;$('legal-body').innerHTML=content.body;$('legal-dialog').showModal();$('legal-close').focus();}
document.querySelectorAll('[data-legal]').forEach(b=>b.onclick=()=>openLegal(b.dataset.legal));$('legal-close').onclick=()=>$('legal-dialog').close();$('share-close').onclick=()=>$('share-dialog').close();
 $('card-close').onclick=()=>$('card-dialog').close();
['legal-dialog','share-dialog','card-dialog'].forEach(id=>{const dialog=$(id);dialog.addEventListener('close',()=>returnFocus?.focus());dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close();});});
 $('start-button').onclick=start;$('home-button').onclick=home;$('year').textContent=new Date().getFullYear();$('skip-reveal').onclick=finishReveal;$('reveal').addEventListener('cancel',e=>{e.preventDefault();finishReveal();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&$('reveal').open)finishReveal();});reduced.addEventListener('change',()=>{if(reduced.matches&&$('reveal').open)finishReveal();});
 if(matchMedia('(pointer:fine)').matches&&!reduced.matches){const stage=$('hero-art');stage.classList.add('parallax-stage');stage.addEventListener('pointermove',e=>{if(reduced.matches)return;const r=stage.getBoundingClientRect();stage.style.transform=`translate(${clamp((e.clientX-r.left-r.width/2)/30,-8,8)}px,${clamp((e.clientY-r.top-r.height/2)/35,-7,7)}px)`;});stage.addEventListener('pointerleave',()=>stage.style.transform='');}
 function loadShared(){const match=location.hash.match(/^#respiro=([a-z]+)$/),key=match?.[1];if(key&&Object.hasOwn(STYLES,key)){state.answers.fill(null);renderResult(key,false);setView('result');}else if(state.view==='result'){home();}}
 window.addEventListener('hashchange',loadShared);loadShared();
 // Structured actions use the same state as the visible quiz.
 if(document.modelContext?.registerTool){
  const lifecycle=new AbortController();const register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};
  register({name:'read_quiz_state',description:'Read the current question, available answers, progress or final breathing style.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(){return{view:state.view,question:state.view==='quiz'?{number:state.index+1,text:QUESTIONS[state.index].text,answers:QUESTIONS[state.index].answers.map(a=>a[0]),selected:state.answers[state.index]}:null,result:state.result?STYLES[state.result].name:null};}});
  register({name:'start_personality_quiz',description:'Start or restart the ten-question personality quiz, clearing previous answers.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(){if(state.busy)throw Error('Animation in progress');start();return{view:state.view,question:state.index+1};}});
  register({name:'answer_current_question',description:'Select one of the four visible answers. Advance to the next question or complete the quiz if advance is true.',inputSchema:{type:'object',properties:{answer:{type:'integer',minimum:0,maximum:3},advance:{type:'boolean'}},required:['answer'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},async execute(input){if(!input||!Number.isInteger(input.answer)||input.answer<0||input.answer>3||('advance'in input&&typeof input.advance!=='boolean')||Object.keys(input).some(k=>!['answer','advance'].includes(k)))throw Error('Invalid answer');if(state.view!=='quiz'||state.busy)throw Error('Quiz not ready');selectAnswer(input.answer,$('quiz-view').querySelector(`[data-answer="${input.answer}"]`));if(input.advance){if(state.index===9){completeQuiz();if(state.busy)await new Promise(resolve=>{const check=()=>state.busy?setTimeout(check,50):resolve();check();});}else await navigateQuestion(1);}return{view:state.view,question:state.view==='quiz'?state.index+1:null,selected:state.answers[state.index],result:state.result?STYLES[state.result].name:null};}});
  addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
 }
})();

