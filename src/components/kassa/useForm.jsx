import { useState, useEffect } from "react"
import { sendEquipmentForm } from "../api/callbackAPI"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"

toast.configure()

const useForm = (title, validate, closeModal) => {
  const [values, setValue] = useState({
      first_name: "",
      phone: "",
      email: "",
      company: "",
      address: "",
      product: title,
      registration_certificate_image: null,
      profile_images: null,
      subject_photo: null,
      technical_passport: null,
    }),
    [errors, setErrors] = useState({}),
    [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
      const { name, value } = e.target
      setValue({
        ...values,
        [name]: value,
      })
    },
    handleImageChange = (e) => {
      const { name, files } = e.target
      setValue({
        ...values,
        [name]: files[0],
      })
    },
    handleFormSubmit = (e) => {
      e.preventDefault()
      setErrors(validate(values))
      setIsSubmitting(true)
    },
    notify = () => {
      toast.success("Ваша форма успешно отправлена", {
        position: toast.POSITION.BOTTOM_LEFT,
      })
    }

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      const form = new FormData()
      for (let key in values) {
        form.append(key, values[key])
      }

      sendEquipmentForm(form)
      setValue({
        first_name: "",
        phone: "",
        company: "",
        address: "",
        product: title,
        registration_certificate_image: null,
        profile_images: null,
        subject_photo: null,
        technical_passport: null,
      })
      closeModal()
      notify()
    }
  }, [errors])

  useEffect(() => {
    setValue({
      ...values,
      product: title,
    })
  }, [title])

  return { handleChange, handleImageChange, values, handleFormSubmit, errors }
}

export default useForm
