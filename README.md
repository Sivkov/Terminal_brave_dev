Задача:

Приложение: в работе. Требования: Web приложение - терминал оплаты мобильного телефона. В приложении должен быть главный экран со списком операторов - МТС, Билайн, Мегафон. Список должен быть расширяем. По клику на оператора переходить на экран формы оплаты. Экран с формой оплаты должен содержать выбранного оператора, поле ввода телефона с маской и валидацией, и поле ввода суммы в рублях с маской и валидацией (мин 1 и макс 1000 руб). Кнопка подтверждения, которая ожидает ответа от сервера. После ответа показывается сообщение об успехе или об ошибке. В случае успеха переходим на основной экран.

Стэк: TypeScript (желательно), Next.js (желательно), React и React Hooks, Styled-Components.
Обращение к API должны быть эмулированы. Ответы должны быть успешные или неуспешные в случайном порядке.
Дизайн и верстка на ваше усмотрение, но сделайте красиво и добавьте анимации nail_care
При этом верстка должна быть адаптивной и поддерживать различные размеры экранов, включая мобильные.
Исходный код должен быть выложен на Github.com.
В репозитории должна быть ссылка на демо приложения.

### h3 ИТОГО:
Общий вид экрана на три оператора:
![общий вид](https://github.com/Sivkov/brave_tests/blob/master/t1.png)

Расширение списка получателей через ButtonDisplay.js.
![](https://github.com/Sivkov/brave_tests/blob/master/t4.png)

Анимация через 'animate-css-styled-components'.
Маска 'react-input-mask' валидация js+html.
Эмуляция запроса - через fetch() и POST запрос дополнения в комментариях к файлу.
На экран оплаты добавлена кнопка "назад" для удобства пользователя.
![новая кнопка](https://github.com/Sivkov/brave_tests/blob/master/t3.png)

Основные размеры экранов проверил через devtools.
![другие размеры экранов](https://github.com/Sivkov/brave_tests/blob/master/t5.png)

Ссылка на ДЕМО:
<https://youtu.be/dvZeP_reQvk>

### h3 Жду вашего решения.



