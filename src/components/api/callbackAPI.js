import axios from "axios"

export const sendCallbackNumber = (phone_number) => {
  axios
    .post("https://362042fbde60.ngrok.io/api/orders/kkm/", { phone_number })
    .catch((error) => {
      console.log(error)
    })
}

export const sendEquipmentForm = (data) => {
  axios
    .post("https://362042fbde60.ngrok.io/api/orders/kkm/", {
      ...data,
    })
    .catch((error) => {
      console.log(error)
    })
}