        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    services: [
                        { id: 1, name: 'Screen Repair', description: 'Fix damaged or cracked screens.', image: 'images/tv.jpg' },
                        { id: 2, name: 'Sound Issues', description: 'Resolve sound-related problems.',  image: 'images/tv3.webp' },
                        { id: 3, name: 'Power Supply Repair', description: 'Repair power supply problems.', image: 'images/tv2.webp' },
                        { id: 4, name: 'Remote Control Replacement', description: 'Replace faulty remote controls.', image: 'images/tv6.avif' },
                        { id: 5, name: 'Firmware Update', description: 'Update your TV firmware for better performance.', image: 'images/tv7.webp' },
                        { id: 6, name: 'General Maintenance', description: 'Regular check-ups and cleaning.', image: 'images/tv5.avif' },
                    ]
                };
            }
        }).mount('#app');
        function toggleMenu() {
        const menuList = document.getElementById('menu-list');
        if (menuList.style.display === 'none' || menuList.style.display === '') {
            menuList.style.display = 'block';
        } else {
            menuList.style.display = 'none';
        }
    }
    function openDialog() {
        document.getElementById('contactDialog').style.display = 'flex';
    }

    function closeDialog() {
        document.getElementById('contactDialog').style.display = 'none';
    }
    function openAboutDialog() {
        document.getElementById('aboutDialog').style.display = 'flex';
    }

    function closeAboutDialog() {
        document.getElementById('aboutDialog').style.display = 'none';
    }
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
    function toggleTVBrands(event) {
        event.preventDefault();
        const brandList = document.getElementById('tv-brand-list');
        if (brandList.style.display === 'none' || brandList.style.display === '') {
            brandList.style.display = 'block';
        } else {
            brandList.style.display = 'none';
        }
    }
    function initMap() {
        const location = { lat: 27.5537108, lng: 78.6735378 }; // Updated coordinates for Jawaharlal Nehru Inter College
  
        // Initialize the map
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 15,
          center: location,
        });
  
        // Add a marker
        new google.maps.Marker({
          position: location,
          map: map,
        });
      }
    
    
