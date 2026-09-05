
document.querySelectorAll('.menu-toggle').forEach(b=>b.addEventListener('click',()=>document.querySelector('.menu').classList.toggle('open')));
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.menu a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelectorAll('img[data-fallback]').forEach(i=>i.addEventListener('error',()=>{i.src=i.dataset.fallback},{once:true}));
const counter=document.getElementById('visitNumber');
if(counter){
 let n=Number(localStorage.getItem('bio_visits')||0)+1; localStorage.setItem('bio_visits',n);
 counter.textContent=n.toLocaleString();
}
function gradeQuiz(){
 const answers=['b','c','a','b','c'];
 let score=0;
 answers.forEach((a,i)=>{const x=document.querySelector(`input[name=q${i+1}]:checked`);if(x&&x.value===a)score++});
 const r=document.getElementById('quizResult'); if(r)r.textContent=`You scored ${score}/${answers.length}. ${score===answers.length?'Excellent!':'Review the topic pages and try again.'}`;
}
window.gradeQuiz=gradeQuiz;
