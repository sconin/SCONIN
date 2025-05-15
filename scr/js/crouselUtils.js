//SIMPLE CAROUSEL ANIM
export const simpleCarousel = ()=>{
    const track = document.querySelector('.carousel-nosotros-track');
    let position = 0;
    const speed = 0.5;

    const animate = ()=>{
        position -= speed;
        if ( Math.abs(position) >= track.offsetWidth / 2) {
            position = 0;
        };
        track.style.transform = `translateX(${Math.round(position)}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}