document.addEventListener('mousemove', parallax);
    const parallax = (e) => {
        this.querySelectorAll('#adapt').forEach(adapt =>{
           const speed = () => adapt.getAttribute('data-speed');
           
           const x = (window.innerWidth - e.pageX*speed)/100
           const y = (window.innerHeight - e.pageY*speed)/100

           adapt.style.transform = `translateX(${x}px) translateY(${y}px)`

        })
    }