document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('click', function() {
        alert('Welcome to Tonkioso Fashion.');
        window.location.href = 'productspage.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');
    document.body.appendChild(infoBox);

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', function(e) {
            const additionalInfo = getAdditionalInfo(e.target.alt);
            infoBox.textContent = additionalInfo;
            infoBox.style.display = 'block';
            infoBox.style.left = e.pageX + 'px';
            infoBox.style.top = e.pageY + 'px';
        });

        item.addEventListener('mousemove', function(e) {
            infoBox.style.left = e.pageX + 'px';
            infoBox.style.top = e.pageY + 'px';
        });

        item.addEventListener('mouseout', function() {
            infoBox.style.display = 'none';
        });
    });

    function getAdditionalInfo(altText) {
        switch (altText) {
            case 'Fashion Item 1':
                return 'the Baltimore Ravens x Tonkioso windbreaker fuses team pride with modern streetwear aesthetics, perfect for fans who want to represent their team in style.';
            case 'Fashion Item 2':
                return 'the Baltimore Ravens x Tonkioso mesh jersey fuses team pride with modern streetwear aesthetics, perfect for fans who want to represent their team in style.';
            case 'Fashion Item 3':
                return 'the Tonkioso combat boot stands as a bold, standalone piece, combining luxury materials with rugged design, showcasing the Tonkioso ability to craft high-fashion footwear that’s both functional and forward-thinking.';
            case 'Fashion Item 4':
                return ' the Tonkioso x Rick Owens leather jacket is a fusion of the Rick Owens dark, dystopian vision and Tonkioso’s sleek, modern aesthetic, creating a standout piece that represents both luxury and forward-thinking design..';
            default:
                return 'No additional information available.';
        }
    }
});