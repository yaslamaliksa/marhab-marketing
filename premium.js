(() => {
const header=document.querySelector('header');let ticking=false;
function update(){header.classList.toggle('scrolled',window.scrollY>20);ticking=false}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true}},{passive:true});update();
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}}),{threshold:0.06});document.querySelectorAll('.perks,.catalog>.section-top,.controls,.delivery-section>.section-top,.bottom-banner').forEach(el=>{el.classList.add('reveal-ready');observer.observe(el)})}
const basket=document.querySelector('#basket');document.querySelector('#grid').addEventListener('click',e=>{if(e.target.closest('.add')){basket.classList.remove('bump');requestAnimationFrame(()=>basket.classList.add('bump'))}});basket.addEventListener('animationend',()=>basket.classList.remove('bump'));
})();
