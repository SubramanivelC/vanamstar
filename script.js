// Tailwind config (shared across pages)
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: {
          50:'#f6f8fa',100:'#eef1f5',200:'#d9e0ea',300:'#b8c2cf',
          400:'#8a99af',500:'#687794',600:'#556279',700:'#414c5f',
          800:'#2d3543',900:'#171e2a',950:'#0c1017',
        },
        android: {
          DEFAULT:'#3DDC84',
          300:'#5fffe0',
          400:'#5ffec2',
          500:'#3DDC84',
          600:'#36ba73',
          700:'#2c975e',
        },
        electric: {
          DEFAULT:'#00F2FE',
          200:'#7af0ff',
          300:'#b1e7ff',
          400:'#d4dfff',
          500:'#00F2FE',
          600:'#00C9DB',
          700:'#00A2A6',
        }
      }
    }
  }
};

// Shared behavior
(function(){
  // ---------- SCROLL TO TOP ----------
  var menuToggle = document.getElementById('menuToggle');
  if(menuToggle){
    var ticking = false;
    window.addEventListener('scroll', function(){
      if(!ticking){
        window.requestAnimationFrame(function(){
          var below = window.scrollY > 360;
          menuToggle.classList.toggle('opacity-100', below);
          menuToggle.classList.toggle('opacity-0', !below);
          menuToggle.classList.toggle('pointer-events-none', !below);
          ticking = false;
        });
        ticking = true;
      }
    }, {passive:true});

    menuToggle.addEventListener('click', function(){
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // ---------- SMOOTH ANCHOR SCROLL ----------
  var anchors = document.querySelectorAll('a[href^="#"]');
  for(var i=0;i<anchors.length;i++){
    anchors[i].addEventListener('click', function(e){
      var id = this.getAttribute('href');
      if(!id || id.length<2) return;
      var el = document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  }
})();
