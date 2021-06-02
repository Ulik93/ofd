import { useState, useEffect } from "react"
import { sendEquipmentForm } from "../api/callbackAPI"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"

toast.configure()

const useForm = (title, validate, closeModal) => {
  const [values, setValue] = useState({
      first_name: "",
      phone: "",
      company: "",
      address: "",
      product: title,
      profile_images: [],
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
    handleFormSubmit = (e) => {
      e.preventDefault()
      setErrors(validate(values))
      setIsSubmitting(true)
    },
    uploadImage = (e) => {
      // const files = e.target.files[0]
      // let reader = new FileReader()
      // reader.readAsDataURL(files)
      // data.append("file", files[0])
      // console.log(typeof reader.result)
      const formData = new FormData()

      formData.append("myFile", e.target.files[0], e.target.files[0].name)
      console.log(e.target.files, typeof e.target.files)
      setValue({
        ...values,
        profile_images: e.target.files[0],
        subject_photo: e.target.files[0],
        technical_passport: e.target.files[0],
      })
    },
    notify = () => {
      toast.success("Ваша форма успешно отправлена", {
        position: toast.POSITION.BOTTOM_LEFT,
      })
    }

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      sendEquipmentForm(values)
      setValue({
        first_name: "",
        phone: "",
        company: "",
        address: "",
        product: title,
        profile_images: [],
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

  return { handleChange, values, handleFormSubmit, errors, uploadImage }
}

export default useForm
