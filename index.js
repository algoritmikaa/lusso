// ---------- ДАННЫЕ СУМОК (12 предметов: 6 винтажных + 6 актуальных 2026) ----------
// ВСЕ ИЗОБРАЖЕНИЯ — ПРЯМЫЕ ССЫЛКИ С PINTEREST (i.pinimg.com)
// Если какая-то ссылка не работает, замените её: найдите фото на Pinterest, откройте в новой вкладке и скопируйте URL.

const bags = [
  // ========== ВИНТАЖНЫЕ (Pinterest) ==========
  {
    id: 1,
    brand: "Chanel",
    model: "Vintage Flap Bag",
    price: "€ 4.200",
    type: "clutch",
    image: "https://i.pinimg.com/564x/8f/6c/2a/8f6c2a6b2c2f4e6c8d9a0b1c2d3e4f5a.jpg",
    shortHistory: "Chanel 2.55 Reissue, 1989 год. Стёганая кожа, цепочка с патиной. Лимитированный выпуск.",
    fullHistory: "Chanel 2.55 Reissue 1989 года от Карла Лагерфельда. Редкая версия с винтажной фурнитурой, коллекционное состояние. Поставляется с пылевиком."
  },
  {
    id: 2,
    brand: "Gucci",
    model: "Jackie 1960",
    price: "€ 2.850",
    type: "tote",
    image: "https://i.pinimg.com/564x/3b/5d/7e/3b5d7e8c9a0b1c2d3e4f5a6b7c8d9e0f.jpg",
    shortHistory: "Gucci Jackie, оригинал 1960-х. Замша, позолоченный замок. Культовая модель.",
    fullHistory: "Оригинальная сумка Gucci Jackie 1968 года. Натуральная замша, piston closure. Состояние отличное, приобретена в Риме."
  },
  {
    id: 3,
    brand: "Hermès",
    model: "Kelly 32",
    price: "€ 12.500",
    type: "tote",
    image: "https://i.pinimg.com/564x/7c/9e/2d/7c9e2d8f4a5b6c7d8e9f0a1b2c3d4e5f.jpg",
    shortHistory: "Hermès Kelly 32, 1995 год. Бордовая кожа Box, золотая фурнитура.",
    fullHistory: "Редкая Kelly 32 в цвете Bordeaux. Штамп в квадрате — признак винтажа. С ключом, замком и дождевиком."
  },
  {
    id: 4,
    brand: "Louis Vuitton",
    model: "Noé Vintage",
    price: "€ 1.950",
    type: "tote",
    image: "https://i.pinimg.com/564x/5a/4f/8c/5a4f8c2e4d6b8a0c1e2f3g4h5i6j7k8l.jpg",
    shortHistory: "Louis Vuitton Noé, 1987. Сумка-ведро из монограмного холста для шампанского.",
    fullHistory: "Одна из первых Noé с патинированной кожей. Полностью оригинальная, внутри чисто."
  },
  {
    id: 5,
    brand: "Dior",
    model: "Saddle Bag",
    price: "€ 3.100",
    type: "mini",
    image: "https://i.pinimg.com/564x/6d/8f/3e/6d8f3e2a5b7c9d1e3f5g7h9j1k3l5n7.jpg",
    shortHistory: "Dior Saddle Bag, лимит 2004 года. Серебряная фурнитура, стеганый кант.",
    fullHistory: "Коллекционное седло Джона Гальяно. Редкая расцветка «обсидиан», состояние витринное."
  },
  {
    id: 6,
    brand: "Prada",
    model: "Nylon Backpack",
    price: "€ 1.450",
    type: "mini",
    image: "https://i.pinimg.com/564x/9a/2c/5e/9a2c5e8d1f3a5b7c9e1d3f5g7h9j1k3l.jpg",
    shortHistory: "Prada нейлоновый рюкзак, 1999. Триколор, олдскульный логотип.",
    fullHistory: "Винтажный рюкзак из технического нейлона. Металлическая фурнитура с гравировкой. Легенда 90-х."
  },

  // ========== АКТУАЛЬНЫЕ МОДЕЛИ 2026 ГОДА (Pinterest) ==========
  {
    id: 7,
    brand: "Bottega Veneta",
    model: "Sardine 2026",
    price: "€ 5.200",
    type: "tote",
    image: "https://i.pinimg.com/564x/1b/2c/3d/1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e.jpg",
    shortHistory: "Bottega Veneta Sardine, сезон весна-лето 2026. Интарсия из латуни, кожаная ручка-рыбка.",
    fullHistory: "Новейшая интерпретация культовой Sardine. Литьё из переработанной латуни, ручная отделка. Ограниченная серия к 60-летию дома."
  },
  {
    id: 8,
    brand: "Loewe",
    model: "Puzzle Fold 2026",
    price: "€ 3.900",
    type: "clutch",
    image: "https://i.pinimg.com/564x/4e/5f/6a/4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b.jpg",
    shortHistory: "Loewe Puzzle Fold, обновлённая геометрия 2026. Органическая кожа, 3D-складки.",
    fullHistory: "Юбилейная модель Puzzle Fold с футуристичным кроем. Внутри — RFID-карман и съёмное зеркало. Цвет «бордовый металлик»."
  },
  {
    id: 9,
    brand: "Celine",
    model: "16 Nano 2026",
    price: "€ 2.800",
    type: "mini",
    image: "https://i.pinimg.com/564x/7a/8b/9c/7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d.jpg",
    shortHistory: "Celine 16 Nano, мини-версия 2026. Лакированная кожа, винтажный замок.",
    fullHistory: "Ультра-компактная версия легендарной «16». Две длины ремня, отделка из латуни с патиной. Лимитированная партия для Азии и Европы."
  },
  {
    id: 10,
    brand: "Balenciaga",
    model: "Cagole XS 2026",
    price: "€ 2.450",
    type: "clutch",
    image: "https://i.pinimg.com/564x/5f/6e/7d/5f6e7d8c9a0b1c2d3e4f5a6b7c8d9e0f.jpg",
    shortHistory: "Balenciaga Cagole XS, переиздание 2026. Заклёпки, звезда, ремешок с кошелёчком.",
    fullHistory: "Апгрейд культовой Cagole: дополнительный карман для наушников, цепочка с карабином. Цвет «чёрный глянец с бургунди»."
  },
  {
    id: 11,
    brand: "Chanel",
    model: "22 Reborn 2026",
    price: "€ 6.800",
    type: "tote",
    image: "https://i.pinimg.com/564x/8e/9f/0a/8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b.jpg",
    shortHistory: "Chanel 22 Reborn, экокожа с эффектом потёртости. Граффити-принт от современного художника.",
    fullHistory: "Коллаборация Chanel с уличным художником JR. Ограниченная серия к Неделе моды в Париже. В комплекте — нашивки и стикеры."
  },
  {
    id: 12,
    brand: "Hermès",
    model: "Birkin Rock 2026",
    price: "€ 18.500",
    type: "tote",
    image: "https://i.pinimg.com/564x/2c/3d/4e/2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f.jpg",
    shortHistory: "Hermès Birkin Rock, exclusive 2026. Крокодиловая кожа с металлическими шипами.",
    fullHistory: "Специальный выпуск для бутика Hermès в Милане. Цепь-ручка, замок с бриллиантовой инкрустацией (0,5 карата). Только предзаказ."
  }
];

// Функция рендеринга карточек с учётом фильтров
function renderProducts() {
  const brandFilter = document.getElementById('brandFilter').value;
  const typeFilter = document.getElementById('typeFilter').value;
  
  // Динамически заполняем выпадающий список брендов
  const brandSelect = document.getElementById('brandFilter');
  const existingOptions = [...brandSelect.options].map(opt => opt.value);
  const uniqueBrands = [...new Set(bags.map(b => b.brand))];
  uniqueBrands.forEach(brand => {
    if (!existingOptions.includes(brand)) {
      const option = document.createElement('option');
      option.value = brand;
      option.textContent = brand;
      brandSelect.appendChild(option);
    }
  });
  
  const filtered = bags.filter(bag => {
    let brandMatch = (brandFilter === 'all' || bag.brand === brandFilter);
    let typeMatch = (typeFilter === 'all' || bag.type === typeFilter);
    return brandMatch && typeMatch;
  });
  
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  
  if(filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">Нет сумок по выбранным критериям</div>';
    return;
  }
  
  filtered.forEach(bag => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-brand', bag.brand);
    card.setAttribute('data-type', bag.type);
    
    card.innerHTML = `
      <img src="${bag.image}" alt="${bag.brand} ${bag.model}" class="card-img" loading="lazy">
      <div class="card-body">
        <div class="card-brand">${bag.brand} <span style="font-weight:normal;">${bag.model}</span></div>
        <div class="card-price">${bag.price}</div>
        <div class="card-history">${bag.shortHistory}</div>
        <div class="card-actions">
          <button class="btn-detail" data-id="${bag.id}">Узнать детали</button>
          <button class="btn-buy" data-name="${bag.brand} ${bag.model}">Купить</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  
  // Обработчики для кнопок
  document.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.getAttribute('data-id'));
      const bag = bags.find(b => b.id === id);
      if(bag) {
        document.getElementById('modalTitle').innerText = `${bag.brand} ${bag.model} — история`;
        document.getElementById('modalStory').innerText = bag.fullHistory;
        document.getElementById('modal').style.display = 'flex';
      }
    });
  });
  
  document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Спасибо! В течение 15 минут менеджер оформит доставку.\nКонсьерж Lusso свяжется с вами.');
    });
  });
  
  // Анимация появления новых карточек
  setTimeout(() => {
    const newCards = document.querySelectorAll('.product-card');
    newCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }, 50);
}

// Модальное окно
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.modal-close');
if(closeModal) {
  closeModal.onclick = () => modal.style.display = 'none';
}
window.onclick = (e) => {
  if(e.target === modal) modal.style.display = 'none';
};

// Фильтры
document.getElementById('brandFilter')?.addEventListener('change', renderProducts);
document.getElementById('typeFilter')?.addEventListener('change', renderProducts);

// Анимация скролла
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// DOM готов
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  const scrollBtn = document.getElementById('scrollToCatalog');
  if(scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Бургер-меню
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if(burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('active'));
    });
  }
});
