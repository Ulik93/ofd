import React, { useEffect } from "react"
import "./Equipments.sass"
import Aos from "aos"
import "aos/dist/aos.css"
import Modal from "react-modal"
import { useState } from "react"
import useForm from "./useForm"
import validateInfo from "./validate"
import Button from "@material-ui/core/Button"

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
  const [productName, setProductName] = useState(null)
  const {
    handleChange,
    handleImageChange,
    values,
    handleFormSubmit,
    errors,
  } = useForm(productName, validateInfo, closeModal)
  const {
    phone,
    email,
    address,
    first_name,
    company,
    registration_certificate_image,
    subject_photo,
    technical_passport,
    profile_images,
  } = errors

  var subtitle
  function openModal(name) {
    setIsOpen(true)
    setProductName(name)
  }

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
            <form onSubmit={handleFormSubmit}>
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
                type="text"
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
              <label>Email:</label>
              <input
                className="modal__equipment-input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
              />
              {email ? (
                <p className="modal__eqipment-error">{email}</p>
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

              <label>registration_certificate_image:</label>
              <input
                type="file"
                accept="image/*"
                name="registration_certificate_image"
                onChange={handleImageChange}
              />
              {registration_certificate_image ? (
                <p className="modal__eqipment-error">
                  {registration_certificate_image}
                </p>
              ) : (
                <br />
              )}
              <label>subject_photo:</label>
              <input
                type="file"
                accept="image/*"
                name="subject_photo"
                onChange={handleImageChange}
              />
              {subject_photo ? (
                <p className="modal__eqipment-error">{subject_photo}</p>
              ) : (
                <br />
              )}
              <label>technical_passport:</label>
              <input
                type="file"
                accept="image/*"
                name="technical_passport"
                onChange={handleImageChange}
              />
              {technical_passport ? (
                <p className="modal__eqipment-error">{technical_passport}</p>
              ) : (
                <br />
              )}
              <label>profile_images:</label>
              <input
                type="file"
                accept="image/*"
                name="profile_images"
                onChange={handleImageChange}
              />
              {profile_images ? (
                <p className="modal__eqipment-error">{profile_images}</p>
              ) : (
                <br />
              )}
              <div>
                Оборудование:
                <span className="modal__equipment-name">{productName}</span>
              </div>
              <button className="about_btn modal__equipment-btn" type="submit">
                Отправить
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  )
}
