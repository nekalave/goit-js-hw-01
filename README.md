
# Критерії прийому

- Створено репозиторій `goit-js-hw-01`
- При здачі домашньої роботи є посилання на вихідні файли в репозиторії
- Кожне завдання виконано в окремому файлі з ім'ям `task-номер_завдання.js`.
  Використовуй `<script type="module">` щоб закрити код завдання в окремій
  області видимості і уникнути конфліктів імен ідентифікаторів.
- Імена змінних зрозумілі, описові
- Код відформатований за допомогою Prettier

# Завдання 1

- Оголоси дві змінні, які зберігають назву та ціну товару: `name` і `price`
- Присвойте змінним наступні характеристики товару (відразу при оголошенні)
  - назва: Генератор захисного поля
  - ціна: 1000
- Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде:
  `'Обрано «Генератор захисного поля», ціна за штуку 1000 кредитів'`.
- Присвой товару нову ціну - 2000
- Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде:
  `'Обрано «Генератор захисного поля», ціна за штуку 2000 кредитів'`.

# Завдання 2

Напиши скрипт перевірки кількості товарів на складі. Є змінні `total` (кількість
товарів на складі) і `ordered` (одиниць товару в замовленні).

Порівняй ці значення і за результатами виведи:

- Якщо в замовленні вказано число, що перевищує кількість товарів на складі, то
  виведи повідомлення `"На складі недостатньо товарів!"`.
- В іншому випадку виводь повідомлення
  `"Замовлення оформлено, з вами зв'яжеться менеджер"`.

Перевір працездатність коду з різними значеннями змінної `ordered`, наприклад
`20`, `80` і `130`.

```js
const total = 100;
const ordered = 50;
```

# Завдання 3

Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.

Є змінна `message` в яку буде записано повідомлення про результат. При
завантаженні сторінки у відвідувача запитується пароль через `prompt`:

- Якщо натиснули `Cancel`, записати в `message` рядок
  `'Скасовано користувачем!'`
- В іншому випадку, якщо введений пароль який збігається зі значенням константи
  `ADMIN_PASSWORD`, записати в `message` рядок `'Ласкаво просимо!'`
- В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в
  `message` рядок `'Доступ заборонений, невірний пароль!'`
- Після всіх перевірок вивести в `alert` значення змінної `message`.

```js
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
```

# Завдання 4

На рахунку користувача є `23580` кредитів, значення зберігається в змінній
`credits` (створи і привласни). Користувач вирішує купити ремонтних дроїд, які
коштують по `3000` кредитів за штуку. Ціна одного дроїда зберігається в змінній
`pricePerDroid` (створи і привласни).

При відвідуванні сторінки, використовуючи `prompt`, необхідно запитати кількість
дроїдів, які користувач хоче купити і зберегти в змінну.

Напиши скрипт який:

- Якщо в `prompt` була натиснута кнопка `Cancel`, виводить в консоль
  повідомлення `'Скасовано користувачем!'`.
- В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній
  `totalPrice`.
- Перевіряє чи зможе користувач оплатити замовлення:
  - якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в
    консоль повідомлення `'Недостатньо коштів на рахунку!'`.
  - в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести
    повідомлення
    `'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'`.

# Завдання 5

Користувач може оформити доставку товару до себе в країну, вказавши її при
відвідуванні сторінки в `prompt`. Врахуй, користувач може ввести ім'я країни не
тільки буквами нижнього регістра, а наприклад `'кИтАЙ'`.

Напиши скрипт який виводить повідомлення про вартість доставки в зазначену
країну. Обов'язково використовуй `switch`. Формат повідомлення:
`'Доставка в [країна] буде коштувати [ціна] кредитів'`.

Але доставка є не скрізь, якщо зазначеної країни немає в списку, то виводь в
`alert` повідомлення `'У вашій країні доставка недоступна'`.

Нижче наведено список країн і вартість доставки.

- Китай - 100 кредитів
- Чилі - 250 кредитів
- Австралія - 170 кредитів
- Індія - 80 кредитів
- Ямайка - 120 кредитів

# Завдання 6

Напиши скрипт який просить відвідувача ввести число в `prompt` до тих пір, поки
відвідувач не натисне `Cancel` і кожен раз додає введене значення до загальної
суми.

- При завантаженні сторінки користувачеві пропонується в `prompt` ввести число.
  Введення додається до значення змінної `total`.
- Операція введення числа триває до тих пір, поки користувач не натисне кнопку
  `Cancel` в `prompt`.
- Після того як користувач припинив введення натиснувши кнопку `Cancel`,
  показати `alert` з рядком `'Загальна сума чисел дорівнює [сума]'`.

> 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір
> символів, не потрібно. Якщо хочеш, в разі некоректного введення, показуй
> `alert` з текстом `'Було написано не число, спробуйте ще раз'`, при цьому
> результат `prompt` плюсувати до загальної суми не потрібно, після чого знову
> користувачеві пропонується ввести число в prompt.

```js
let input;
let total = 0;
```
