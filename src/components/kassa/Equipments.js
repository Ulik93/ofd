import React, { useEffect } from "react"
import "./Equipments.sass"
import Aos from "aos"
import "aos/dist/aos.css"
import Modal from "react-modal"
import { useState } from "react"
import useForm from "./useForm"
import validateInfo from "./validate"
import Button from "@material-ui/core/Button"
import axios from "axios"

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "53%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#root")

export default function Equipments(props) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState(null)
  const { handleChange, values, handleFormSubmit, errors } = useForm(
    title,
    validateInfo,
    closeModal
  )
  const { phone, address, first_name, company } = errors

  const uploadImage = async (e) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    reader.onload = () => {
      console.log(e.target.result)

      if (reader.readyState === 2) {
        axios
          .post(
            "https://49763609aa90.ngrok.io/api/orders/kkm/",
            {
              first_name: "asdasdasd",
              company: "sd",
              phone: "+996500",
              address: "bishkek",
              product: "weqwe",
              email: "xekite2735@shzsedu.com",
              // subject_photo: "/media/OrdersKKM/subject_photo/hover5_1.jpeg",
              // technical_passport: "/media/OrdersKKM/technical_passport/hover5_1.jpeg",
              // registration_certificate_image: "/media/OrdersKKM/registration_certificate/hover5_2.jpg",
              // profile_images: "/media/OrdersKKM/profile_images/hover5_3.jpg",
              registration_certificate_image: reader.result,
              profile_images: reader.result,
              subject_photo: reader.result,
              technical_passport: reader.result,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => console.log(res))
        console.log(reader.result)
      }
    }
  }

  var subtitle
  function openModal(title) {
    setIsOpen(true)
    setTitle(title)
  }
  console.log(title)
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000"
  }

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="equipments">
      <div className="equipments_wrapper">
        <div className="equipments_row">
          {props.data.map((item) => (
            <div
              key={item.title}
              data-aos="fade-up"
              className="staffs_cards_item"
            >
              <div className="staffs_cards_item_img">
                <img src={item.image} alt="image" />
              </div>
              <div className="staffs_cards_item_description">
                <div className="staffs_cards_item_title">{item.title}</div>
                <div className="staffs_cards_item_desc">{item.desc}</div>
              </div>
              <div className="staffs_cards_item_btn">
                <Button
                  color="red"
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  className="about_btn staff_card_button"
                  onClick={() => openModal(item.title)}
                >
                  Заказать
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modalContent">
            {/* <img
                className="modal_x"
                src="https://timebuild.com.ua/wp-content/themes/profremont/img/no.png"
                alt=""
              /> */}
            <span className="modal_x" onClick={closeModal}>
              &times;
            </span>
            <div className="modal__header-container">
              <h2
                className="modal__title"
                ref={(_subtitle) => (subtitle = _subtitle)}
              >
                Заполните форму и мы свяжемся с Вами
              </h2>
            </div>
            <form>
              <label>Имя:</label>
              <input
                className="modal__equipment-input"
                type="text"
                name="first_name"
                placeholder="Имя"
                onChange={handleChange}
                value={values.first_name}
              />
              {first_name ? (
                <p className="modal__eqipment-error">{first_name}</p>
              ) : (
                <br />
              )}
              <label>Номер телефона:</label>
              <input
                className="modal__equipment-input"
                type="number"
                name="phone"
                placeholder="Номер телефона"
                onChange={handleChange}
                value={values.phone}
              />
              {phone ? (
                <p className="modal__eqipment-error">{phone}</p>
              ) : (
                <br />
              )}
              <label>Название компании:</label>
              <input
                className="modal__equipment-input"
                type="text"
                name="company"
                placeholder="Название компании"
                onChange={handleChange}
                value={values.company}
              />
              <label>Файлы:</label>
              <input
                multiple
                className="modal__equipment-input"
                type="file"
                accept="image/*"
                name="file"
                placeholder="Название компании"
                onChange={uploadImage}
              />
              {company ? (
                <p className="modal__eqipment-error">{company}</p>
              ) : (
                <br />
              )}
              <label>Адрес:</label>
              <input
                className="modal__equipment-input"
                type="text"
                name="address"
                placeholder="Адрес"
                onChange={handleChange}
                value={values.address}
              />
              {address ? (
                <p className="modal__eqipment-error">{address}</p>
              ) : (
                <br />
              )}
              <div>
                Оборудование:
                <span className="modal__equipment-name">{title}</span>
              </div>
              <button
                className="about_btn modal__equipment-btn"
                type="submit"
                onClick={handleFormSubmit}
              >
                Отправить
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  )
}
