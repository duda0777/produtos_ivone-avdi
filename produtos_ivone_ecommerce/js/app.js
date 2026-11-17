/* ==========================================================================
   PRODUTOS IVONE - LÓGICA DO E-COMMERCE, CARRINHO, CHECKOUT E ACESSIBILIDADE
   ========================================================================== */

// Ilustrações Vetoriais (SVG) de Alta Definição dos Produtos Ivone
function getProductArtSVG(type, variant = 0) {
    const accents = ['#641E32', '#8B344B', '#292326'];
    const bodyColor = accents[variant % accents.length];

    const arts = {
        perfume: `
            <svg width="170" height="170" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="75" y="18" width="50" height="24" rx="5" fill="#D6B77A"/>
                <rect x="88" y="42" width="24" height="16" fill="#292326"/>
                <rect x="48" y="58" width="104" height="122" rx="18" fill="${bodyColor}" stroke="#D6B77A" stroke-width="4"/>
                <rect x="66" y="84" width="68" height="68" rx="8" fill="#F7F1E8"/>
                <text x="100" y="112" text-anchor="middle" font-family="serif" font-weight="bold" font-size="14" fill="#641E32">IVONE</text>
                <text x="100" y="130" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#8B344B">EAU DE LUXE</text>
            </svg>`,
        batom: `
            <svg width="170" height="170" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M84 62 L116 42 L116 90 L84 90 Z" fill="${bodyColor}"/>
                <rect x="78" y="90" width="44" height="28" rx="3" fill="#D6B77A"/>
                <rect x="74" y="118" width="52" height="64" rx="6" fill="#292326" stroke="#D6B77A" stroke-width="3"/>
                <text x="100" y="154" text-anchor="middle" font-family="serif" font-weight="bold" font-size="12" fill="#D6B77A">IVONE</text>
            </svg>`,
        creme: `
            <svg width="170" height="170" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="44" y="55" width="112" height="24" rx="8" fill="#D6B77A"/>
                <rect x="40" y="79" width="120" height="92" rx="16" fill="${bodyColor}" stroke="#D6B77A" stroke-width="3"/>
                <circle cx="100" cy="125" r="32" fill="#F7F1E8"/>
                <text x="100" y="123" text-anchor="middle" font-family="serif" font-weight="bold" font-size="12" fill="#641E32">IVONE</text>
                <text x="100" y="137" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#292326">ELIXIR GOLD</text>
            </svg>`,
        cabelo: `
            <svg width="170" height="170" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="85" y="16" width="30" height="22" rx="4" fill="#292326"/>
                <path d="M72 38 L128 38 L138 180 L62 180 Z" fill="${bodyColor}" stroke="#D6B77A" stroke-width="3"/>
                <rect x="76" y="76" width="48" height="64" rx="6" fill="#F7F1E8"/>
                <text x="100" y="105" text-anchor="middle" font-family="serif" font-weight="bold" font-size="12" fill="#641E32">IVONE</text>
                <text x="100" y="121" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#8B344B">SILK HAIR</text>
            </svg>`,
        paleta: `
            <svg width="170" height="170" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="52" width="140" height="96" rx="12" fill="#292326" stroke="#D6B77A" stroke-width="4"/>
                <circle cx="62" cy="84" r="14" fill="#641E32"/>
                <circle cx="100" cy="84" r="14" fill="#D6B77A"/>
                <circle cx="138" cy="84" r="14" fill="#8B344B"/>
                <circle cx="62" cy="118" r="14" fill="#E8D9CC"/>
                <circle cx="100" cy="118" r="14" fill="#A6445E"/>
                <circle cx="138" cy="118" r="14" fill="#B88A44"/>
            </svg>`
    };
    return arts[type] || arts.perfume;
}

// Catálogo Oficial Produtos Ivone (Campanha Black Friday)
const PRODUCTS = [
    {
        id: 1,
        name: "Perfume Ivone Nuit de Bed-Stuy 100ml",
        category: "perfumaria",
        categoryLabel: "Perfumaria Fina",
        artType: "perfume",
        oldPrice: 249.90,
        price: 89.90,
        discount: 64,
        blackFriday: true,
        rating: 4.9,
        reviews: 312,
        description: "Notas envolventes de baunilha de Madagascar, amora negra e âmbar dourado. Fixação de 12 horas para você chegar chegando em qualquer festa do Brooklyn."
    },
    {
        id: 2,
        name: "Batom Líquido Matte Bafo Vinho Bordô",
        category: "maquiagem",
        categoryLabel: "Maquiagem",
        artType: "batom",
        oldPrice: 69.90,
        price: 24.90,
        discount: 64,
        blackFriday: true,
        rating: 4.8,
        reviews: 218,
        description: "Alta cobertura na primeira camada, enriquecido com ácido hialurônico e manteiga de karité. Não transfere nem quando você briga com o Julius por causa de 2 centavos."
    },
    {
        id: 3,
        name: "Creme Facial Anti-Estresse da Rochelle 60g",
        category: "skincare",
        categoryLabel: "Skincare & Corpo",
        artType: "creme",
        oldPrice: 159.90,
        price: 59.90,
        discount: 63,
        blackFriday: true,
        rating: 5.0,
        reviews: 405,
        description: "Fórmula revitalizante com Niacinamida 10% e Ouro Coloidal. Devolve o viço imediato mesmo depois de cuidar de três filhos e dois empregos."
    },
    {
        id: 4,
        name: "Elixir Capilar Brilho de Salão Ivone Silk",
        category: "cabelos",
        categoryLabel: "Cabelos & Tranças",
        artType: "cabelo",
        oldPrice: 119.90,
        price: 44.90,
        discount: 62,
        blackFriday: true,
        rating: 4.9,
        reviews: 189,
        description: "Óleo reparador antifrizz com blend de argan, ojon e biotina. Ideal para finalização de tranças, cachos definidos e escova modelada."
    },
    {
        id: 5,
        name: "Paleta de Sombras Diva Dourada 6 Cores",
        category: "maquiagem",
        categoryLabel: "Maquiagem",
        artType: "paleta",
        oldPrice: 139.90,
        price: 49.90,
        discount: 64,
        blackFriday: true,
        rating: 4.7,
        reviews: 142,
        description: "Pigmentos ultrafinos acetinados e opacos nos tons clássicos bordô, champanhe e bronze. Esfuma com facilidade profissional."
    },
    {
        id: 6,
        name: "Body Splash Framboesa & Champanhe 200ml",
        category: "perfumaria",
        categoryLabel: "Perfumaria Fina",
        artType: "perfume",
        oldPrice: 89.90,
        price: 39.90,
        discount: 56,
        blackFriday: false,
        rating: 4.8,
        reviews: 97,
        description: "Refrescância sofisticada pós-banho com toque frutado adocicado e fundo amadeirado suave."
    },
    {
        id: 7,
        name: "Máscara Reconstrutora Tranças & Cachos 300g",
        category: "cabelos",
        categoryLabel: "Cabelos & Tranças",
        artType: "creme",
        oldPrice: 99.90,
        price: 37.90,
        discount: 62,
        blackFriday: true,
        rating: 4.9,
        reviews: 264,
        description: "Hidratação profunda em 3 minutos com queratina vegetal e óleo de rícino."
    },
    {
        id: 8,
        name: "Sérum Iluminador Corpo & Colo Ouro Rosé",
        category: "skincare",
        categoryLabel: "Skincare & Corpo",
        artType: "cabelo",
        oldPrice: 129.90,
        price: 54.90,
        discount: 58,
        blackFriday: false,
        rating: 4.8,
        reviews: 115,
        description: "Partículas peroladas sutis que hidratam a pele e deixam um glow elegante sem sensação oleosa."
    }
];

// Estado Global da Aplicação
const state = {
    category: 'todos',
    searchQuery: '',
    sortBy: 'featured',
    cart: [],
    appliedCoupon: null,
    activeProduct: null,
    shippingCost: 14.90,
    shippingMethodLabel: 'Entrega Econômica',
    paymentMethod: 'pix',
    fontSize: 16
};

// Formatador de Moeda BRL
const formatBRL = (val) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Toast Visual Acessível (Notifica visualmente na tela para todos + surdos/mudos)
function showVisualToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'visual-toast';
    toast.textContent = `✦ ${message}`;
    container.appendChild(toast);

    // Atualiza legenda de Libras se ativa
    const librasText = document.getElementById('libras-caption-text');
    if (librasText) librasText.textContent = message;

    setTimeout(() => {
        toast.remove();
    }, 3400);
}

// ==========================================================================
// RENDERIZAÇÃO DA VITRINE DE PRODUTOS
// ==========================================================================
function renderProducts() {
    const grid = document.getElementById('products-grid');
    let filtered = PRODUCTS.filter(p => {
        const matchCat =
            state.category === 'todos' ||
            (state.category === 'blackfriday' && p.blackFriday) ||
            p.category === state.category;
        const matchSearch =
            p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    if (state.sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (state.sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    if (state.sortBy === 'discount') filtered.sort((a, b) => b.discount - a.discount);

    document.getElementById('catalog-count').textContent =
        `Exibindo ${filtered.length} produto(s) exclusivo(s) com desconto Black Friday`;

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 40px;">Nenhum produto encontrado para a busca atual.</p>`;
        return;
    }

    grid.innerHTML = filtered.map(prod => `
        <article class="product-card" data-id="${prod.id}">
            <div class="product-img-wrap" onclick="openProductModal(${prod.id})" role="button" tabindex="0" aria-label="Ver foto em evidência de ${prod.name}">
                <span class="bf-discount-pill">-${prod.discount}% OFF</span>
                ${getProductArtSVG(prod.artType, 0)}
                <span class="quick-view-hint">🔍 Clique para foto em evidência</span>
            </div>
            <div class="product-body">
                <span class="product-cat">${prod.categoryLabel}</span>
                <h3 class="product-title" onclick="openProductModal(${prod.id})">${prod.name}</h3>
                <div class="product-pricing">
                    <div class="old-price">De <del>${formatBRL(prod.oldPrice)}</del></div>
                    <div class="new-price">${formatBRL(prod.price)}</div>
                    <div class="installment-text">ou 6x de ${formatBRL(prod.price / 6)} sem juros</div>
                    <div class="card-actions">
                        <button type="button" class="btn-card-buy" onclick="addToCart(${prod.id}, 1)">+ Sacola</button>
                        <button type="button" class="btn-card-detail" onclick="openProductModal(${prod.id})" title="Ampliar Foto">👁️</button>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

// ==========================================================================
// MODAL DO PRODUTO COM FOTO EM EVIDÊNCIA (ZOOM & ÂNGULOS)
// ==========================================================================
window.openProductModal = function(productId) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;
    state.activeProduct = prod;

    document.getElementById('modal-discount-badge').textContent = `-${prod.discount}% BLACK FRIDAY`;
    document.getElementById('modal-prod-category').textContent = prod.categoryLabel.toUpperCase();
    document.getElementById('modal-prod-title').textContent = prod.name;
    document.getElementById('modal-prod-reviews').textContent = `(${prod.reviews} avaliações verificadas)`;
    document.getElementById('modal-prod-desc').textContent = prod.description;
    document.getElementById('modal-old-price').textContent = formatBRL(prod.oldPrice);
    document.getElementById('modal-new-price').textContent = formatBRL(prod.price);
    document.getElementById('modal-installments').textContent = `ou 6x de ${formatBRL(prod.price / 6)} sem juros no cartão`;
    document.getElementById('modal-qty-input').value = 1;
    document.getElementById('modal-cep-result').textContent = '';

    const stage = document.getElementById('featured-image-stage');
    stage.classList.remove('zoomed');
    document.getElementById('modal-main-image').innerHTML = getProductArtSVG(prod.artType, 0);

    // Miniaturas de visualização em evidência
    const labels = ['Frasco Principal', 'Edição Bordô', 'Edição Ouro'];
    const thumbsEl = document.getElementById('modal-thumbnails');
    thumbsEl.innerHTML = labels.map((lbl, idx) => `
        <button type="button" class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchFeaturedVariant(${idx}, this)">
            ${lbl}
        </button>
    `).join('');

    document.getElementById('product-modal').hidden = false;
    showVisualToast(`Exibindo ${prod.name} em evidência`);
};

window.switchFeaturedVariant = function(idx, btnEl) {
    if (!state.activeProduct) return;
    document.getElementById('modal-main-image').innerHTML = getProductArtSVG(state.activeProduct.artType, idx);
    document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
};

// ==========================================================================
// CARRINHO DE COMPRAS (SACOLA)
// ==========================================================================
window.addToCart = function(productId, qty = 1) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        state.cart.push({ ...prod, qty });
    }

    updateCartUI();
    showVisualToast(`${prod.name} adicionado à sacola!`);
};

window.changeCartQty = function(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        state.cart = state.cart.filter(i => i.id !== productId);
    }
    updateCartUI();
};

function getCartTotals() {
    const originalSubtotal = state.cart.reduce((acc, item) => acc + item.oldPrice * item.qty, 0);
    const subtotal = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const couponDiscount = state.appliedCoupon ? subtotal * state.appliedCoupon.rate : 0;
    const finalProductsTotal = Math.max(0, subtotal - couponDiscount);
    const totalSavings = (originalSubtotal - subtotal) + couponDiscount;

    return { originalSubtotal, subtotal, couponDiscount, finalProductsTotal, totalSavings };
}

function updateCartUI() {
    const totalItems = state.cart.reduce((acc, item) => acc + item.qty, 0);
    document.getElementById('cart-count').textContent = totalItems;
    document.getElementById('drawer-item-count').textContent = totalItems;

    const listEl = document.getElementById('cart-items-list');
    const footerEl = document.getElementById('cart-footer');

    if (state.cart.length === 0) {
        listEl.innerHTML = `<div style="text-align:center; padding: 48px 16px;">
            <p style="font-size: 2.2rem;">🛍️</p>
            <strong>Sua sacola está vazia</strong>
            <p style="font-size: 0.88rem; margin-top: 6px;">Aproveite os descontos de até 70% OFF da Black Friday Ivone!</p>
        </div>`;
        footerEl.style.display = 'none';
    } else {
        footerEl.style.display = 'block';
        listEl.innerHTML = state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-thumb">${getProductArtSVG(item.artType, 0).replace('width="170" height="170"', 'width="48" height="48"')}</div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">${formatBRL(item.price * item.qty)}</div>
                    <div class="cart-item-controls">
                        <button type="button" class="mini-qty-btn" onclick="changeCartQty(${item.id}, -1)">−</button>
                        <span>${item.qty}</span>
                        <button type="button" class="mini-qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
                        <button type="button" class="remove-item-btn" onclick="changeCartQty(${item.id}, -999)">Remover</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    const { originalSubtotal, finalProductsTotal, totalSavings } = getCartTotals();

    // Barra de Frete Grátis acima de R$ 99
    const freeThreshold = 99;
    const pct = Math.min(100, (finalProductsTotal / freeThreshold) * 100);
    document.getElementById('free-shipping-progress').style.width = `${pct}%`;
    if (finalProductsTotal >= freeThreshold) {
        document.getElementById('free-shipping-msg').innerHTML = `🎉 Parabéns! Você ganhou <strong>FRETE GRÁTIS</strong> na entrega econômica!`;
    } else {
        const diff = freeThreshold - finalProductsTotal;
        document.getElementById('free-shipping-msg').innerHTML = `Faltam <strong>${formatBRL(diff)}</strong> para ganhar <strong>FRETE GRÁTIS</strong>!`;
    }

    document.getElementById('cart-original-subtotal').textContent = formatBRL(originalSubtotal);
    document.getElementById('cart-total-savings').textContent = `- ${formatBRL(totalSavings)}`;
    document.getElementById('cart-subtotal').textContent = formatBRL(finalProductsTotal);
}

// ==========================================================================
// CHECKOUT COMPLETO (CADASTRO, ENTREGA E PAGAMENTO)
// ==========================================================================
function openCheckoutModal() {
    if (state.cart.length === 0) {
        showVisualToast("Adicione pelo menos 1 produto à sacola primeiro.");
        return;
    }
    document.getElementById('cart-drawer').hidden = true;
    document.getElementById('cart-drawer-backdrop').hidden = true;
    document.getElementById('checkout-modal').hidden = false;
    setCheckoutStep(1);
    updateCheckoutSummary();
}

function setCheckoutStep(stepNum) {
    [1, 2, 3, 4].forEach(n => {
        document.getElementById(`checkout-step-${n}`).hidden = (n !== stepNum);
        const ind = document.getElementById(`step-indicator-${n}`);
        if (n <= stepNum) ind.classList.add('active');
        else ind.classList.remove('active');
    });
}

function updateCheckoutSummary() {
    const { finalProductsTotal } = getCartTotals();

    // Verifica se entrega econômica tem frete grátis (>= R$ 99)
    const ecoPrice = finalProductsTotal >= 99 ? 0 : 14.90;
    const ecoRadio = document.querySelector('input[name="shippingMethod"][value="economico"]');
    if (ecoRadio) {
        ecoRadio.dataset.price = ecoPrice;
        document.getElementById('price-ship-economico').textContent = ecoPrice === 0 ? 'GRÁTIS' : formatBRL(ecoPrice);
    }

    const selectedShip = document.querySelector('input[name="shippingMethod"]:checked');
    state.shippingCost = selectedShip ? parseFloat(selectedShip.dataset.price) : ecoPrice;

    const pixDiscount = state.paymentMethod === 'pix' ? finalProductsTotal * 0.10 : 0;
    const grandTotal = finalProductsTotal + state.shippingCost - pixDiscount;

    document.getElementById('checkout-items-mini').innerHTML = state.cart.map(i => `
        <div class="mini-chk-row">
            <span>${i.qty}x ${i.name}</span>
            <strong>${formatBRL(i.price * i.qty)}</strong>
        </div>
    `).join('');

    document.getElementById('chk-subtotal').textContent = formatBRL(finalProductsTotal);
    document.getElementById('chk-shipping').textContent = state.shippingCost === 0 ? 'GRÁTIS' : formatBRL(state.shippingCost);
    document.getElementById('chk-pix-discount-row').style.display = pixDiscount > 0 ? 'flex' : 'none';
    document.getElementById('chk-pix-discount').textContent = `- ${formatBRL(pixDiscount)}`;
    document.getElementById('chk-grand-total').textContent = formatBRL(grandTotal);

    // Atualiza opções de parcelamento no cartão
    const instSelect = document.getElementById('cc-installments');
    if (instSelect) {
        const totalNoPix = finalProductsTotal + state.shippingCost;
        instSelect.innerHTML = [1, 2, 3, 4, 6, 10].map(p =>
            `<option value="${p}">${p}x de ${formatBRL(totalNoPix / p)} sem juros</option>`
        ).join('');
    }
}

// ==========================================================================
// INICIALIZAÇÃO DE EVENTOS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza arte do Hero e Catálogo
    document.getElementById('hero-svg-art').innerHTML = getProductArtSVG('perfume', 0);
    renderProducts();
    updateCartUI();

    // Contagem regressiva Black Friday
    let secondsLeft = 4 * 3600 + 32 * 60 + 19;
    setInterval(() => {
        if (secondsLeft > 0) secondsLeft--;
        const h = String(Math.floor(secondsLeft / 3600)).padStart(2, '0');
        const m = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0');
        const s = String(secondsLeft % 60).padStart(2, '0');
        document.getElementById('bf-countdown').textContent = `${h}h : ${m}m : ${s}s`;
    }, 1000);

    // Filtros de Categoria
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.category = btn.dataset.category;
            renderProducts();
        });
    });

    // Busca e Ordenação
    document.getElementById('search-input').addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderProducts();
    });

    document.getElementById('sort-select').addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
    });

    // Propaganda Parceira (Copiar Cupom Mercadinho do Doc)
    document.getElementById('copy-partner-coupon').addEventListener('click', (e) => {
        const code = e.target.dataset.coupon;
        navigator.clipboard?.writeText(code);
        document.getElementById('coupon-feedback').textContent = `✓ Cupom ${code} copiado!`;
        showVisualToast(`Cupom ${code} do Mercadinho do Doc copiado!`);
    });

    // Modo Claro / Escuro
    document.getElementById('theme-toggle').addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        document.getElementById('theme-label').textContent = isDark ? 'Escuro' : 'Claro';
        showVisualToast(`Modo ${isDark ? 'Claro' : 'Escuro'} ativado`);
    });

    // Painel de Acessibilidade (Daltonismo, Surdos e Mudos)
    const a11yPanel = document.getElementById('a11y-panel');
    document.getElementById('a11y-toggle').addEventListener('click', () => {
        a11yPanel.hidden = !a11yPanel.hidden;
    });
    document.getElementById('close-a11y-panel').addEventListener('click', () => {
        a11yPanel.hidden = true;
    });

    document.querySelectorAll('.cb-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cb-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.documentElement.setAttribute('data-colorblind', btn.dataset.cb);
            showVisualToast(`Filtro visual: ${btn.textContent}`);
        });
    });

    document.getElementById('libras-widget-toggle').addEventListener('change', (e) => {
        document.getElementById('libras-floating-box').hidden = !e.target.checked;
    });
    document.getElementById('close-libras-box').addEventListener('click', () => {
        document.getElementById('libras-floating-box').hidden = true;
        document.getElementById('libras-widget-toggle').checked = false;
    });

    // Chat Silencioso (Surdos e Mudos)
    const chatBox = document.getElementById('silent-chat-box');
    document.getElementById('open-silent-chat-btn').addEventListener('click', () => {
        chatBox.hidden = false;
        a11yPanel.hidden = true;
    });
    document.getElementById('open-virtual-consultant').addEventListener('click', () => {
        chatBox.hidden = false;
    });
    document.getElementById('close-silent-chat').addEventListener('click', () => {
        chatBox.hidden = true;
    });

    function sendSilentMessage(text) {
        const msgs = document.getElementById('chat-messages');
        msgs.innerHTML += `<div class="msg user">${text}</div>`;
        let reply = "Nossa equipe recebeu sua mensagem escrita! Você pode acompanhar todo o pedido visualmente pelo código enviado no e-mail.";
        if (text.toLowerCase().includes('prazo')) reply = "Entrega Expressa em 1 a 2 dias úteis ou Econômica em até 5 dias úteis (Grátis acima de R$ 99!).";
        if (text.toLowerCase().includes('black friday')) reply = "Todos os produtos já estão com até 70% OFF + 10% extra no PIX!";
        setTimeout(() => {
            msgs.innerHTML += `<div class="msg bot">${reply}</div>`;
            msgs.scrollTop = msgs.scrollHeight;
        }, 400);
    }

    document.getElementById('silent-chat-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const inp = document.getElementById('silent-chat-input');
        if (!inp.value.trim()) return;
        sendSilentMessage(inp.value.trim());
        inp.value = '';
    });

    document.querySelectorAll('.quick-q').forEach(btn => {
        btn.addEventListener('click', () => sendSilentMessage(btn.dataset.q));
    });

    // Controle de Fonte
    document.getElementById('font-increase').addEventListener('click', () => {
        state.fontSize = Math.min(20, state.fontSize + 1);
        document.documentElement.style.setProperty('--base-font-size', `${state.fontSize}px`);
    });
    document.getElementById('font-decrease').addEventListener('click', () => {
        state.fontSize = Math.max(13, state.fontSize - 1);
        document.documentElement.style.setProperty('--base-font-size', `${state.fontSize}px`);
    });
    document.getElementById('font-reset').addEventListener('click', () => {
        state.fontSize = 16;
        document.documentElement.style.setProperty('--base-font-size', '16px');
    });

    // Modal de Produto (Zoom, Quantidade, Comprar e Frete)
    document.getElementById('close-product-modal').addEventListener('click', () => {
        document.getElementById('product-modal').hidden = true;
    });
    document.getElementById('toggle-zoom-btn').addEventListener('click', () => {
        document.getElementById('featured-image-stage').classList.toggle('zoomed');
    });
    document.getElementById('featured-image-stage').addEventListener('click', (e) => {
        if (e.target.id !== 'toggle-zoom-btn') {
            document.getElementById('featured-image-stage').classList.toggle('zoomed');
        }
    });
    document.getElementById('modal-qty-minus').addEventListener('click', () => {
        const inp = document.getElementById('modal-qty-input');
        inp.value = Math.max(1, parseInt(inp.value) - 1);
    });
    document.getElementById('modal-qty-plus').addEventListener('click', () => {
        const inp = document.getElementById('modal-qty-input');
        inp.value = Math.min(20, parseInt(inp.value) + 1);
    });
    document.getElementById('modal-add-cart-btn').addEventListener('click', () => {
        if (!state.activeProduct) return;
        const qty = parseInt(document.getElementById('modal-qty-input').value) || 1;
        addToCart(state.activeProduct.id, qty);
        document.getElementById('product-modal').hidden = true;
    });
    document.getElementById('modal-buy-now-btn').addEventListener('click', () => {
        if (!state.activeProduct) return;
        const qty = parseInt(document.getElementById('modal-qty-input').value) || 1;
        addToCart(state.activeProduct.id, qty);
        document.getElementById('product-modal').hidden = true;
        openCheckoutModal();
    });
    document.getElementById('modal-calc-cep-btn').addEventListener('click', () => {
        const cep = document.getElementById('modal-cep-input').value.trim();
        if (cep.length < 8) {
            document.getElementById('modal-cep-result').textContent = "Digite um CEP válido com 8 dígitos.";
            return;
        }
        document.getElementById('modal-cep-result').innerHTML =
            `🚚 Entrega Econômica: <strong>R$ 14,90</strong> (até 5 dias úteis) | Expressa: <strong>R$ 26,50</strong> (2 dias úteis)`;
    });

    // Abrir/Fechar Carrinho
    document.getElementById('cart-toggle').addEventListener('click', () => {
        document.getElementById('cart-drawer').hidden = false;
        document.getElementById('cart-drawer-backdrop').hidden = false;
    });
    const closeCart = () => {
        document.getElementById('cart-drawer').hidden = true;
        document.getElementById('cart-drawer-backdrop').hidden = true;
    };
    document.getElementById('close-cart-drawer').addEventListener('click', closeCart);
    document.getElementById('cart-drawer-backdrop').addEventListener('click', closeCart);

    // Aplicar Cupom no Carrinho
    document.getElementById('apply-coupon-btn').addEventListener('click', () => {
        const code = document.getElementById('cart-coupon-input').value.trim().toUpperCase();
        const statusEl = document.getElementById('cart-coupon-status');
        if (code === 'IVONE10') {
            state.appliedCoupon = { code, rate: 0.10 };
            statusEl.textContent = "✓ Cupom IVONE10 aplicado (10% OFF extra)!";
            updateCartUI();
        } else if (code === 'DOC5OFF') {
            state.appliedCoupon = { code, rate: 0.05 };
            statusEl.textContent = "✓ Cupom parceiro DOC5OFF aplicado (5% OFF extra)!";
            updateCartUI();
        } else {
            statusEl.textContent = "Cupom inválido. Tente IVONE10 ou DOC5OFF.";
        }
    });

    // Fluxo de Checkout
    document.getElementById('proceed-to-checkout-btn').addEventListener('click', openCheckoutModal);
    document.getElementById('close-checkout-modal').addEventListener('click', () => {
        document.getElementById('checkout-modal').hidden = true;
    });

    document.getElementById('checkout-step-1').addEventListener('submit', (e) => {
        e.preventDefault();
        const street = document.getElementById('addr-street').value;
        const num = document.getElementById('addr-number').value;
        const city = document.getElementById('addr-city').value;
        document.getElementById('shipping-dest-preview').textContent = `${street}, ${num} - ${city}`;
        updateCheckoutSummary();
        setCheckoutStep(2);
    });

    document.querySelectorAll('input[name="shippingMethod"]').forEach(radio => {
        radio.addEventListener('change', updateCheckoutSummary);
    });

    document.getElementById('back-to-step-1').addEventListener('click', () => setCheckoutStep(1));
    document.getElementById('go-to-step-3').addEventListener('click', () => setCheckoutStep(3));
    document.getElementById('back-to-step-2').addEventListener('click', () => setCheckoutStep(2));

    document.querySelectorAll('.pay-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.paymentMethod = tab.dataset.pay;
            document.querySelectorAll('.pay-content').forEach(p => p.hidden = true);
            document.getElementById(`pay-panel-${state.paymentMethod}`).hidden = false;
            updateCheckoutSummary();
        });
    });

    document.getElementById('confirm-order-btn').addEventListener('click', () => {
        const orderCode = `#IVN-${Math.floor(100000 + Math.random() * 900000)}`;
        document.getElementById('final-order-id').textContent = orderCode;
        setCheckoutStep(4);
        showVisualToast(`Pedido ${orderCode} confirmado com sucesso!`);
    });

    document.getElementById('finish-and-reset-btn').addEventListener('click', () => {
        state.cart = [];
        state.appliedCoupon = null;
        updateCartUI();
        document.getElementById('checkout-modal').hidden = true;
    });
});
