import React from "react";
import "./knowledgebase.css";
import CloudIcon from "@material-ui/icons/Cloud";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import SearchIcon from "@material-ui/icons/Search";

const Knowledgebase = () => {
  let text = [
    {
      text: "Оператор фискальных данных",
      icon: <CloudIcon style={{ color: "hsl(230deg 59% 85%)" }} />,
    },
    {
      text: "Законодательство кыргызской республики",
      icon: <AssignmentIcon style={{ color: "hsl(230deg 59% 85%)" }} />,
    },
    {
      text: "Кантрольно-кассовая машина (ККМ)",
      icon: (
        <SettingsInputAntennaIcon style={{ color: "hsl(230deg 59% 85%)" }} />
      ),
    },
    {
      text: "фискальный регистратор",
      icon: "",
    },
    {
      text: "    Проверка чека",
      id: 2,
    },
  ];

  return (
    <div className="knowledgebase">
      <div className="knowledgebase__wrapper">
        <div className="knowledgebase__wrapper2">
          {/* <div className="header__logo">
            <img src={logo} alt="" />
          </div> */}
          <h1 className="knowledgebase__tittle"> База знаний</h1>
          <div className="knowledgebase-search">
            <input
              className="knowledgebase-search-input"
              type="search"
              id="mySearch"
              placeholder="Поиск по базе знаний"
            />
            <SearchIcon
              className="search-item"
              style={{ border: "3px solid #002046", borderLeft: "none" }}
            />
          </div>
        </div>
        <div className="knowledgebase__container knowledgebase__input">
          {text.map((text) => {
            return (
              <div className="knowledgebase__container-box">
                <div className="knowledgebase__container-logo">{text.icon}</div>
                <div className="knowledgebase__container-content">
                  <p>{text.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Knowledgebase;
