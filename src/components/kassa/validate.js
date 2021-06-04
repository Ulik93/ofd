export default function validateInfo(values) {
  const errors = {}

  if (!values.first_name) {
    errors.first_name = "Обязательное поле"
  }

  if (!values.phone) {
    errors.phone = "Обязательное поле"
  }

  if (!values.email) {
    errors.email = "Обязательное поле"
  }

  if (!values.company) {
    errors.company = "Обязательное поле"
  }

  if (!values.address) {
    errors.address = "Обязательное поле"
  }

  // IMAGES VALIDATES
  if (!values.registration_certificate_image) {
    errors.registration_certificate_image = "Обязательное поле"
  }

  if (!values.subject_photo) {
    errors.subject_photo = "Обязательное поле"
  }

  if (!values.technical_passport) {
    errors.technical_passport = "Обязательное поле"
  }

  if (!values.profile_images) {
    errors.profile_images = "Обязательное поле"
  }

  return errors
}
