import axios from "axios"

export const sendCallbackNumber = (phone_number) => {
  axios
    .post("http://185.29.184.52:3000/api/orders/phone/", { phone_number })
    .catch((error) => {
      console.log(error)
    })
}

export const sendEquipmentForm = (data) => {
  axios
    .post("http://185.29.184.52:3000/api/orders/safe_order_and_send_email/", {
      ...data,
    })
    .catch((error) => {
      console.log(error)
    })
}