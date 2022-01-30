export function isWebp() {
    function testWebp(cb) {
        let webp = new Image();
        webp.onload = webp.onerror = () => {
            cb(webp.height === 2);
        };
        webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebp(support => {
        let className = support ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}