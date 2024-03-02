document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products');

    const products = [
        {"image": "Used/AICourse.png", "title": "Введение в Искусственный Интеллект с Python для Начинающих", "details_url": "https://stepik.org/course/193579/promo", "buy_url": "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KVR7Y9BWP4U2N&currency_code=RUB"},
        {"image": "Used/TransformersCourse.png", "title": "Поколение ИИ: Большие Языковые Модели для Работы с Текстом", "details_url": "https://stepik.org/course/175490/promo", "buy_url": "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YWH5YZSYM9FVS&currency_code=RUB"},
        // Include the rest of your products here
        {"image": "Used/DeepLearningCourse.png", "title": "Поколение ИИ: Практическое Глубокое Обучение с Pytorch", "details_url": "#"},
        {"image": "Used/LogicCourse.png", "title": "Логика и Теория Игр для ИИ, Аналитики Данных и Data Science", "details_url": "#"},
        {"image": "Used/ComputerVisionCourse.png", "title": "Компьютерное Зрение: Большой, Практический Курс", "details_url": "#", "buy_url": "#"},
        {"image": "Used/MathForMLCourse.png", "title": "Математика для Машинного Обучения и Data Science", "details_url": "#", "buy_url": "#"},
        {"image": "Used/StatsCourse.png", "title": "Статистика и ТерВер: Большой Практический Курс с Нуля", "details_url": "#", "buy_url": "#"},
        {"image": "Used/ReinforcementLearningCourse.png", "title": "Обучение с Подкреплением: ИИ для Компьютерных Игр и Роботов", "details_url": "#", "buy_url": "#"},
        {"image": "Used/DiffusionCourse.png", "title": "Поколение ИИ: Нейросети-Диффузеры. Большой Практический Курс.", "details_url": "#", "buy_url": "#"},
    ];

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const image = document.createElement('img');
        image.src = product.image;
        productElement.appendChild(image);

        const title = document.createElement('p');
        title.textContent = product.title;
        productElement.appendChild(title);

        // Create a container for links and the buy button
        const actionsContainer = document.createElement('div');
        actionsContainer.style.display = 'flex';
        actionsContainer.style.justifyContent = 'space-between';
        actionsContainer.style.alignItems = 'center';

        // Add details link if available
        if (product.details_url && product.details_url !== "#") {
            const detailsLink = document.createElement('a');
            detailsLink.href = product.details_url;
            detailsLink.textContent = 'Подробнее';
            detailsLink.style.marginRight = '10px'; // Ensure some spacing if both are present
            actionsContainer.appendChild(detailsLink);
        }

        // Add buy form if available
        if (product.buy_url && product.buy_url !== "#") {
            const buyButton = document.createElement('div'); // Using div to wrap the form
            buyButton.innerHTML = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="${product.buy_url.split("hosted_button_id=")[1].split("&")[0]}" />
                <input type="hidden" name="currency_code" value="RUB" />
                <input type="image" src="https://www.paypalobjects.com/ru_RU/i/btn/btn_buynow_SM.gif" border="0" name="submit" title="PayPal — это безопасный и быстрый способ оплаты через интернет!" alt="Купить сейчас" />
            </form>`;
            actionsContainer.appendChild(buyButton);
        }

        productElement.appendChild(actionsContainer);
        productsContainer.appendChild(productElement);
    });
});
