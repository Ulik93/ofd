import React from 'react'
import './tarif.css'

const Tarif = () => {
  return (
    <div className="tarifMain">
      <div className="tarif">
        <div className="tarifTittle">Фиксированные тарифные планы</div>
        <div className="tittleList">
          <div className="listItems"> — Мониторинг выбытия маркированных товаров</div>
          <div className="listItems">
            — Проверка корректности каждого кода маркировки в чеках, полученных от ККТ пользователя
          </div>
          <div className="listItems"> — Отображение статуса передачи данных в ЦРПТ</div>
          <div className="listItems">— Получение выписки с чеками, содержащими коды маркировки</div>
          <div className="listItems">— Инструмент для проверки кода товара (тег 1162)</div>
          <div className="listItems">— Аналитика в разделе Бизнес</div>
        </div>

        <div className="tarifList">
          <a href="#" className="tarifLink">
          <div className="tarifListItem">
            <div className="tarifListTittle">1 месяц</div>
            <div className="tarifText">298 ₽</div>
            <div className="tarifText2">9.93 ₽/день</div>
          </div></a>
          <a href="#" className="tarifLink">
          <div className="tarifListItem">
            <div className="tarifListTittle">3 месяца</div>
            <div className="tarifText">890 ₽</div>
            <div className="tarifText2">9.89 ₽/день</div>
          </div></a>
          <a href="#" className="tarifLink">
          <div className="tarifListItem">
            <div className="tarifListTittle">6 месяцев</div>
            <div className="tarifText">1 634 ₽</div>
            <div className="tarifText2">9.08 ₽/день</div>
          </div></a>
          <a href="#" className="tarifLink">
          <div className="tarifListItem">
            <div className="tarifListTittle">12 месяцев</div>
            <div className="tarifText">2 995 ₽</div>
            <div className="tarifText2">8.20 ₽/день</div>
          </div></a>
          <a href="#" className="tarifLink">
          <div className="tarifListItem">
            <div className="tarifListTittle">15 месяцев</div>
            <div className="tarifText">3 700 ₽</div>
            <div className="tarifText2">8.09 ₽/день</div>
          </div></a>
          <a href="#" className="tarifLink">
            <div className="tarifListItem">
              <div className="tarifListTittle">36 месяцев</div>
              <div className="tarifText">6 881 ₽</div>
              <div className="tarifText2">6.28 ₽/день</div>
            </div></a>
        </div>
      </div>
    </div>
  )
}

export default Tarif
