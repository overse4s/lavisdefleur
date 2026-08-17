const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
});

mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    menuBtn?.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  });
});

const stickerTrack = document.querySelector('.sticker-track');
const stickerDots = [...document.querySelectorAll('.sticker-dots i')];

function updateStickerDots(){
  if(!stickerTrack || !stickerDots.length) return;
  const index = Math.round(stickerTrack.scrollLeft / stickerTrack.clientWidth);
  stickerDots.forEach((dot,i)=>dot.classList.toggle('active', i === index));
}
stickerTrack?.addEventListener('scroll', updateStickerDots, {passive:true});

stickerDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    stickerTrack.scrollTo({left:index * stickerTrack.clientWidth, behavior:'smooth'});
  });
});
