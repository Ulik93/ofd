import "./Qes.css"
import QesInfo from "../../components/QesInfo/qesInfo"
import QesPrice from "../../components/QesPrice/QesPrice"
import QesUsing from "../../components/QesUsing/QesUsing"

const Qes = () => {
    return (
        <div className="">
            <QesInfo />
            <QesPrice />
            <QesUsing />
        </div>
    )
}

export default Qes