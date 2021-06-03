import axios from "axios"

export const sendCallbackNumber = (phone_number) => {
  axios
    .post("https://0fdb29daefbe.ngrok.io/api/orders/kkm/", { phone_number })
    .catch((error) => {
      console.log(error)
    })
}

export const sendEquipmentForm = (data) => {
  axios
    .post(
      "https://167e9816d61a.ngrok.io/api/orders/kkm/",
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .catch((error) => {
      console.log(error)
    })
}
