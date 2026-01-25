document.addEventListener('DOMContentLoaded', function() {

    // Descrizioni dei santi
    const descs = [
        ``,
        ``,
        ``,
        ``,
        ``,
        ``
    ];

    // Informazioni dei tier
    const tiers = [
    { id: 's-tier', label: 'S', colorClass: 'tier-s', name: 'S' },
    { id: 'a-tier', label: 'A', colorClass: 'tier-a', name: 'A' },
    { id: 'b-tier', label: 'B', colorClass: 'tier-b', name: 'B' },
    { id: 'c-tier', label: 'C', colorClass: 'tier-c', name: 'C' },
    { id: 'd-tier', label: 'D', colorClass: 'tier-d', name: 'D' }
    ];


    // Dataset immagini
    const imgPath = "images/";
    const images = [
        { id: 1, label: 'San Bartolo Longo', src: 'Bartolo-Longo.webp'},
        { id: 2, label: 'Santa Teresa di Lisieux', src: 'Teresa-Lisieux.jpg'},
        { id: 3, label: 'San Sebastiano', src: 'San-Sebastiano.jpg'},
        { id: 4, label: 'San Paolo', src: 'San-Paolo.jpg'},
        { id: 5, label: 'San Giuseppe da Copertino', src: 'Giuseppe-Copertino.jpeg'},
        { id: 6, label: 'Santi Cosma e Damiano', src: 'Cosma-Damiano.jpg'}
    ];

    // Inizializzazione
    function initializeTierlist() {

        // Prendo elementi del DOM
        const tiersContainer = document.getElementById('tiersContainer');
        const imagePool = document.getElementById('imagePool');

        // Reset
        tiersContainer.innerHTML = '';
        imagePool.innerHTML = '';

        // Righe
        tiers.forEach(tier => {
            const tierRow = document.createElement('div');
            tierRow.className = 'tier-row';
            tierRow.id = tier.id;

            tierRow.innerHTML = `
                <div class="tier-label ${tier.colorClass}">
                    ${tier.label}
                </div>
                <div class="tier-content" data-tier="${tier.id}">
                    <div class="empty-message"></div>
                </div>
            `;

            tiersContainer.appendChild(tierRow);

        });

        // Crea immagini trascinabili
        images.forEach(image => {
            const imgElement = createDraggableImage(image);
            imagePool.appendChild(imgElement);
        })

        // Aggiunge Luce in basso
        imagePool.innerHTML += `
            <div class="logo-corner">
                <img src="logo/luce.png" alt="Luce" title="Luce">
            </div>
        `;

        // Update
        document.getElementById('imageCount').textContent = images.length;
    }

    // Costruttore immagini trascinabili
    function createDraggableImage(image) {

        // Crea un elemento div e assegna le classi per farlo funzionare
        const container = document.createElement('div');
        container.className = 'draggable-image';
        container.draggable = true;
        container.id = `image-${image.id}`;
        container.dataset.imageId = image.id;
        container.dataset.imageLabel = image.label;
        container.dataset.imageDesc = descs[image.id-1];

        // Aggiunge il testo e l'immagine
        container.innerHTML = `
            <div class="image-info-btn" title="Info">i</div>
            <img src="${imgPath+image.src}" alt="${image.label}">
            <div class="image-label">${image.label}</div>
        `;

        // Eventi trascinamento
        container.addEventListener('dragstart', handleDragStart);
        container.addEventListener('dragend', handleDragEnd);       

        return container;
    }



    // =============== STILI DI SUPPORTO ===============
    const desktopDragStyles = document.createElement('style');
    desktopDragStyles.textContent = `
        .draggable-image {
            user-select: none;
            -webkit-user-drag: element;
        }
        .dragging {
            opacity: 0.7 !important;
            transform: scale(1.05) !important;
            transition: opacity 0.2s, transform 0.1s !important;
        }
        .dragging::after {
            content: '';
            position: fixed;
            top: -1000px;
            right: -1000px;
            width: 100px;
            height: 100px;
            background-color: rgba(233,69,96,0.1);
            border: 2px dashed #e94560;
            border-radius: 8px;
            z-index: 100000;
            pointer-events: none;
        }
        .drop-zone {
            outline: 3px dashed #e94560 !important;
            outline-offset: -3px;
            background-color: rgba(233,69,96,0.1) !important;
        }
        .tier-content, .image-pool {
            user-select: none;
        }
        .drag-ghost {
            width: 100px !important;
            height: 100px !important;
            border-radius: 8px !important;
            box-shadow: 0 8px 25px rgba(0,0,0,0.6) !important;
            background-color: rgba(26,26,46,0.9) !important;
            border: 2px solid #e94560 !important;
        }
        .drag-ghost img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
            border-radius: 6px !important;
        }
        .drag-ghost .image-label {
            display: none !important;
        }
        .drag-ghost .image-info-btn {
            display: none !important;
        }
    `;
    document.head.appendChild(desktopDragStyles);

    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .image-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.95);
            z-index: 100000;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .modal-content {
            background-color: #1a1a2e;
            padding: 25px;
            border-radius: 12px;
            max-width: 800px;
            width: 90%;
            max-height: 85vh;
            position: relative;
            box-shadow: 0 15px 40px rgba(0,0,0,0.7);
            border: 2px solid #e94560;
            animation: slideUp 0.3 ease;
            overflow: scroll;
        }
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-content img {
            width: 100%;
            max-height: 50vh;
            object-fit: contain;
            border-radius: 8px;
            margin-bottom: 20px;
            display: none;
        }

        .modal-text {
            color: white;
            padding: 15px;
            background-color: rgba(233,69,96,0.1);
            border-radius: 8px;
            border-left: 4px solid #e94560;
        }

        .modal-text h3 {
            color: #e94560;
            margin-bottom: 10px;
            font-size: 1.5rem;
        }

        .modal-text p {
            margin-bottom: 15px;
            line-height: 1.5;
        }

        .modal-text small {
            color: #aaa;
            font-size: 0.8rem;
        }

        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            color: white;
            font-size: 32px;
            font-weight: bold;
            cursor: pointer;
            z-index: 100001;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s;
        }
        .modal-close:hover {
            background-color: rgba(233,69,96,0.3);
            color: #e94560;
        }

        @media (max-width: 768px) {
            .modal-content {
                width: 95%;
                padding: 20px;
                max-height: 90vh;
            }
            .modal-close {
                top: 10px;
                right: 15px;
                font-size: 28px;
            }
        }
    `;
    document.head.appendChild(modalStyles);



    // =============== GESTIONE TRASCINAMENTO DESKTOP ===============
    let draggedElement = null;
    let draggedElementSource = null;

    // Evento: inizia il trascinamento
    function handleDragStart(e) {
        draggedElement = this;
        draggedElementSource = this.parentElement.id;

        // Add visuals
        this.classList.add('dragging');

        // Si crea un'immagine da trascinare
        const dragImage = this.cloneNode(true);
        dragImage.style.position = 'fixed';
        dragImage.style.top = '-1000px';
        dragImage.style.left = '-1000px';
        dragImage.style.opacity = '0.7';
        dragImage.style.transform = 'scale(1.1)';
        dragImage.style.zIndex = '100000';
        dragImage.style.pointerEvents = 'none'
        dragImage.classList.add('drag-ghost');

        // Aggiunta al body
        document.body.appendChild(dragImage);
        e.dataTransfer.setDragImage(dragImage, this.offsetWidth/2, this.offsetHeight/2)

        // Cleanup
        setTimeout(() => {
            if (document.body.contains(dragImage)) {
                document.body.removeChild(dragImage);
            }
        }, 0);

        // Setup datatransfer
        e.dataTransfer.setData('text/plain', this.id);
        e.dataTransfer.effectAllowed = 'move';

        // Nascondo l'immagine originale
        setTimeout(() => {
            if (draggedElement === this) {
                this.style.opacity = '0.4';
            }
        }, 0);

    }

    // Evento: finisce il trascinamento
    function handleDragEnd(e) {
        if (draggedElement) {
            draggedElement.classList.remove('dragging');
            draggedElement.style.opacity = '1';
            draggedElement.style.display = 'block';
        }

        // Cleanup
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('.drop-zone');
        });
        draggedElement = null;
        draggedElementSource = null;
    }

    // Evento: trascino un elemento sopra un altro
    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';

        // Controllo se la dropzone è valida
        if (this.classList.contains('tier-content') || this.id === 'imagePool') {
            this.classList.add('drop-zone');
        }
    }

    // Evento: il trascinamento sopra un altro sta finendo
    function handleDragLeave(e) {
        if (!this.contains(e.relatedTarget)) {
            this.classList.remove('drop-zone');
        }
    }

    // Evento: rilascio l'oggetto
    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        // Rimozione highlight
        this.classList.remove('drop-zone');

        // Ottenimento elemento trascinato
        if (!draggedElement) {
            try {
                const id = e.dataTransfer.getData('text/plain');
                if (id) {
                    draggedElement = document.getElementById(id);
                }
            } catch (err) {
                console.warn('Elemento trascinato non trovato');
                return;
            }
        }
        if (!draggedElement) {
            console.warn('Elemento trascinato non trovato');
            return;
        }

        // Rendo elementi visibili
        draggedElement.style.opacity = '1';
        draggedElement.classList.remove('dragging');

        // Logica del rialscio
        processDrop(this, draggedElement, e.clientX);

        // Cleanup
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('drop-zone');
        });

    }
    


    // =============== GESTIONE TRASCINAMENTO MOBILE ===============
    let activeTouch = null;

    // Evento: inizio touch
    function handleTouchStart(e) {
        if (e.touches.length !== 1) return;

        // Controllo cosa ho toccato
        const touch = e.touches[0];
        const element = e.target.closest('.draggable-image');
        if(!element) return;

        e.preventDefault();

        // Se ho toccato il tasto info non inizio
        if (e.target.closest('.image-info-btn')) return;

        activeTouch = {
            id: touch.identifier,
            startX: touch.clientX,
            startY: touch.clientY,
            element: element
        }

        draggedElement = element;
        draggedElementSource = element.parentElement.id;

        // Calcolo offset
        const rect = element.getBoundingClientRect();
        dragOffsetX = touch.clientX - rect.left;
        dragOffsetY = touch.clientY - rect.top;

        element.classList.add('touch-active')
    }

    // Evento: movimento touch
    function handleTouchMove(e) {
        if (!activeTouch || !draggedElement) return;

        const touch = Array.from(e.touches).find(t => t.identifier === activeTouch.id);
        if (!touch) return;

        e.preventDefault();

        const x = touch.clientX;
        const y = touch.clientY;

        if (!draggedElement.classList.contains('dragging')) {
            const dx = Math.abs(x-activeTouch.startX);
            const dy = Math.abs(y-activeTouch.startY);

            if (dx > 10 || dy > 10) {
                draggedElement.classList.add('dragging');
                draggedElement.style.position = 'fixed';
                draggedElement.style.zIndex = '99999';
                draggedElement.style.pointerEvents = 'none';
                draggedElement.style.transition = 'none'

                draggedElement.style.left = `${x-dragOffsetX}px`;
                draggedElement.style.top = `${y-dragOffsetY}px`;
            }
            return;
        }

        draggedElement.style.left = `${x-dragOffsetX}px`;
        draggedElement.style.top = `${y-dragOffsetY}px`;

        const scrollZoneHeight = 80;
        const scrollSpeed = 8;

        if (y < 2*scrollZoneHeight) {
            window.scrollBy({ top: -scrollSpeed, behavior: 'instant' });
            draggedElement.style.top = `${parseFloat(draggedElement.style.top)-scrollSpeed}px`;
        } else if (y > window.innerHeight - scrollZoneHeight) {
            window.scrollBy({ top: scrollSpeed, behavior: 'instant'});
            draggedElement.style.top = `${parseFloat(draggedElement.style.top)+scrollSpeed}px`;
        }

        updateScrollIndicators(y);

        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('drop-zone');
        });
        const elements = document.elementsFromPoint(x,y);

        for (const el of elements) {
            if (el === draggedElement || el.contains(draggedElement)) continue;
            if (el.classList.contains('tier-content') || el.id === 'imagePool') {
                el.classList.add('drop-zone');
                break;
            }
        }

    }

    // Evento: fine touch
    function handleTouchEnd(e) {
        if (!activeTouch || !draggedElement) return;

        const touch = Array.from(e.changedTouches).find(t => t.identifier === activeTouch.id);
        if (!touch) return;

        const wasDragging = draggedElement.classList.contains('dragging');
        if (wasDragging) {
            const x = touch.clientX;
            const y = touch.clientY;

            const elements = document.elementsFromPoint(x,y);
            let dropZone = null;

            for (const el of elements) {
                if (el === draggedElement || el.contains(draggedElement)) continue;

                if (el.classList.contains('tier-content') || el.id === 'imagePool') {
                    dropZone = el;
                    break;
                }
            }

            // Cleanup
            draggedElement.classList.remove('dragging');
            draggedElement.style.position = '';
            draggedElement.style.left = '';
            draggedElement.style.top = '';
            draggedElement.style.zIndex = '';
            draggedElement.style.pointerEvents = '';
            draggedElement.style.transition = '';
            draggedElement.style.width = '';
            draggedElement.style.height = '';

            if (dropZone) {
                processDrop(dropZone, draggedElement, x);
            }
        }

        draggedElement.classList.remove('touch-active');

        // Reset state
        activeTouch = null;
        draggedElement = null;
        draggedElementSource = null;

        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('drop-zone');
        });

    }

    // Evento: touch cancellato
    function handleTouchCancel(e) {
        if (draggedElement) {
            draggedElement.classList.remove('dragging', 'touch-active');
            draggedElement.style.position = '';
            draggedElement.style.left = '';
            draggedElement.style.top = '';
            draggedElement.style.zIndex = '';
            draggedElement.style.pointerEvents = '';
            draggedElement.style.transition = '';
        }
        
        activeTouch = null;
        draggedElement = null;
        draggedElementSource = null;
        
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.classList.remove('drop-zone');
        });
    }



    // =============== GESTIONE INDICATORI SCROLL MOBILE ===============
    if ('ontouchstart' in window) {
        const scrollZoneTop = document.createElement('div');
        scrollZoneTop.className = 'scroll-zone-indicator scroll-zone-top';
        const scrollZoneBottom = document.createElement('div');
        scrollZoneBottom.className = 'scroll-zone-indicator scroll-zone-bottom';
        
        document.body.appendChild(scrollZoneTop);
        document.body.appendChild(scrollZoneBottom);
    }

    function updateScrollIndicators(y) {
        if (!('ontouchstart' in window)) return;
        
        const scrollZoneHeight = 80;
        const topIndicator = document.querySelector('.scroll-zone-top');
        const bottomIndicator = document.querySelector('.scroll-zone-bottom');
        
        if (topIndicator && bottomIndicator) {
            if (y < 2*scrollZoneHeight) {
                topIndicator.classList.add('scroll-zone-active');
                bottomIndicator.classList.remove('scroll-zone-active');
            } else if (y > window.innerHeight - scrollZoneHeight) {
                topIndicator.classList.remove('scroll-zone-active');
                bottomIndicator.classList.add('scroll-zone-active');
            } else {
                topIndicator.classList.remove('scroll-zone-active');
                bottomIndicator.classList.remove('scroll-zone-active');
            }
        }
    }



    // =============== LOGICA CONDIVISA DESKTOP-MOBILE ===============
    
    // Gestione dell'elemento in cui ho lasciato l'immagine
    function processDrop(dropZone, draggable, clientX) {

        // Rimuovo testo vuoto
        const emptyMessage = dropZone.querySelector('.empty-message');
        if (emptyMessage) emptyMessage.remove();


        // Controllo se la dropzone è imagePool
        const isImagePool = dropZone.id === 'imagePool';

        // Ottengo elemento parent
        const originalParent = draggable.parentElement;
        const originalParentId = originalParent.id;

        // Rilascio in imagePool
        if (isImagePool) {
            dropZone.appendChild(draggable);
            updateImageCount();
        }
        // Rilascio in tiercontent
        else {

            const afterElement = getDragAfterElement(dropZone, clientX);

            if (afterElement == null) {
                dropZone.appendChild(draggable);
            } else {
                dropZone.insertBefore(draggable, afterElement);
            }

            if (originalParentId === 'imagePool') {
                updateImageCount();
            }

        }

        // Eventuale messaggio vuoto
        setTimeout(() => {
            if (originalParent && originalParent.id !== 'imagePool') {
                const children = originalParent.children;
                const isEmpty = children.length === 0;
                const hasOnlyEmptyMessage = children.length === 1 && children[0].classList.contains('empty-message');

                if (isEmpty || hasOnlyEmptyMessage) {
                    originalParent.innerHTML = `
                        <div class="empty-message"></div>
                    `;
                }
            }
        }, 50);


    }

    // Funzione per il drop nel tier
    function getDragAfterElement(container, x) {
        const draggableElements = [...container.querySelectorAll('.draggable-image:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width/2;

            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, {offset: Number.NEGATIVE_INFINITY }).element;
    }

    // Funzione per l'update del numero
    function updateImageCount() {
        const imagePool = document.getElementById('imagePool');
        const imagesInPool = imagePool.querySelectorAll('.draggable-image').length;
        document.getElementById('imageCount').textContent = imagesInPool;
    }


    
    // =============== TASTI PER LE INFORMAZIONI ===============
    function showImageModal(imageElement) {

        // Elementi del DOM
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');

        if (!modal || !modalImage) {
            console.error('Elemento non trovato (modal)');
            return;
        }

        // Ottenimento dati
        const img = imageElement.querySelector('img');
        const label = imageElement.dataset.imageLabel || 'Immagine non disponibile';
        const desc = imageElement.dataset.imageDesc || 'Descrizione non disponibile';

        // Setup
        modalImage.src = img.src;
        modalImage.alt = label;
        modalTitle.textContent = label;
        modalDesc.innerHTML = desc;
        
        // Comparsa
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';

    }

    function closeImageModal() {
        const modal = document.getElementById('imageModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    

    // =============== ESPORTAZIONE ===============
    const desktopExportStyle = document.createElement('style');
    desktopExportStyle.textContent = `
        .desktop-export-mode .tier-row {
            flex-direction: row !important;
            min-height: 110px !important;
        }
        .desktop-export-mode .tier-label {
            width: 80px !important;
            padding: 0 !important;
            font-size: 1.8rem !important;
            min-width: auto !important;
        }
        .desktop-export-mode .tier-content {
            min-height: 110px !important;
        }
        .desktop-export-mode .draggable-image {
            min-height: 90px !important;
            min-width: 90px !important;
        }
        .desktop-export-mode .tierlist-container {
            max-width: 900px !important;
            margin: 0 auto !important;
        }
        .desktop-export-mode {
            overflow: visible !important;
        }
    `;
    document.head.appendChild(desktopExportStyle);

    async function exportAsImage() {
        const exportBtn = document.getElementById('exportBtn');
        const originalText = exportBtn.innerHTML;
        const tierlistContainer = document.querySelector('.tierlist-container')
        const tierlist = document.querySelector('.tiers-section');

        exportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Attendi...';
        exportBtn.disabled = true;

        try {
            const isMobileView = window.innerWidth <= 768;
            let wasDesktopMode = false;

            if (isMobileView) {
                wasDesktopMode = true;
                tierlistContainer.classList.add('desktop-export-mode')
                tierlistContainer.offsetHeight;
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            const canvas = await html2canvas(tierlist, {
                backgroundColor: '#1a1a2e',
                scale: 2,
                useCORS: true,
                logging: false,
                width: 900,
                windowWidth: 900,
                onclone: function(clonedDoc) {
                    const clonedContainer = clonedDoc.querySelector('.tierlist-container');
                    if (clonedContainer && isMobileView) {
                        clonedContainer.classList.add('desktop-export-mode');
                    }
                }
            });

            if (wasDesktopMode) {
                tierlistContainer.classList.remove('desktop-export-mode');
            }

            const link = document.createElement('a');
            const fileName = 'tierlist-santi';
            link.download = `${fileName.replace(/\s+/g, '-')}-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();

            alert('Tierlist esportata e scaricata con successo!')
        } catch (error) {
            console.error('Errore in esportazione: ', error);
            alert('Esportazione non riuscita. Per favore riprova.');

            const tierlistContainer = document.querySelector('.tierlist-container');
            if (tierlistContainer) {
                tierlistContainer.classList.remove('desktop-export-mode');
            }
        } finally {
            exportBtn.innerHTML = originalText;
            exportBtn.disabled = false;
        }
    }



    // =============== RESET ===============
    function resetTierlist() {
        if (confirm('Sicuro di voler resettare?')) {
            initializeTierlist();
        }
    }



    // =============== SETUP EVENTI GLOBALI ===============

    // Desktop Drag
    function setupDesktopEvents() {
        const allDraggables = document.querySelectorAll('.draggable-image');
        const allDropZones = document.querySelectorAll('.tier-content, #imagePool');
    
        allDraggables.forEach(img => {
            img.setAttribute('draggable', 'true');
            img.addEventListener('dragstart', handleDragStart);
            img.addEventListener('dragend', handleDragEnd);
        });

        allDropZones.forEach(zone => {
            zone.addEventListener('dragover', handleDragOver);
            zone.addEventListener('dragleave', handleDragLeave);
            zone.addEventListener('drop', handleDrop);
        })
    }

    // Touch
    function setupMobileEvents() {
        if (!('ontouchstart' in window)) return;
        
        const draggableImages = document.querySelectorAll('.draggable-image');
        
        draggableImages.forEach(img => {
            img.addEventListener('touchstart', handleTouchStart, { passive: false });
        });
        
        // Global touch events
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
        document.addEventListener('touchcancel', handleTouchCancel);
        
        // Also add touch events to drop zones
        const dropZones = document.querySelectorAll('.tier-content, .image-pool');
        dropZones.forEach(zone => {
            zone.addEventListener('touchmove', handleTouchMove, { passive: false });
            zone.addEventListener('touchend', handleTouchEnd);
        });
    }

    // Info
    function setupInfoEvents() {
        const allInfoBtns = document.querySelectorAll('.image-info-btn');

        allInfoBtns.forEach(infoBtn => {
            infoBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                showImageModal(infoBtn.parentElement);
            });
            infoBtn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
            });
            infoBtn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
            });
        });
    }

    // Bottoni export/reset
    document.getElementById('exportBtn').addEventListener('click', exportAsImage);
    document.getElementById('resetBtn').addEventListener('click', resetTierlist);

    // Box informazioni
    document.querySelector('.modal-close').addEventListener('click', closeImageModal);
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeImageModal();
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });

    


    // Primer
    initializeTierlist();
    setupDesktopEvents();
    setupMobileEvents();
    setupInfoEvents();

});




