import { Collapse } from "../../common"
import "./QesUsing.css"
import img1 from "./img/img1.svg"

let collapseData =[
    {title:"", text:"",img:{img1}},
    {title:"", text:"",img:{img1}},
    {title:"", text:"",img:{img1}},
    {title:"", text:"",img:{img1}},
    {title:"", text:"",img:{img1}},
]


const QesUsing = () => {

    return (
        <div className="qesUsing">
            <div className="container">
                <div className="qes__title">Все сферы применения</div>
                <div className="qesUsing__contant">
                    <Collapse title="Работа с маркировкой" text="При покупке/продаже лекарств, обуви или меха контрагенты обязаны подписать электронной подписью и отправить в «Честный знак» данные по каждой сделке, в том числе и розничной."
                    img={img1} />
                    <Collapse />
                    <Collapse />
                    <Collapse />
                </div>
            </div>
        </div>
    )
}

export default QesUsing