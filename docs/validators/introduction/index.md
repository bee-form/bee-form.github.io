# Validators

Although writing a custom validator is easy with Bee Form, the package "bee-form-validators" does include a number of basic validators for your convenience

## Validator: required

Name: "required"

This validator makes sure the field's value can not be null or empty

!!code: sample-required.jsx #content
!!demo: sample-required.jsx

## Validator: email

Name: "email"

This validator makes sure the field's value is of email format. Note that it will accept null or empty values (actually all validators except for required validator will accept null/empty values unless stated other wise)

!!code: sample-email.jsx #content
!!demo: sample-email.jsx


## Validator: phone

Name: "phone"

This validator makes sure the field's value is of phone format.

!!code: sample-phone.jsx #content
!!demo: sample-phone.jsx


## Validator: humanName

Name: "humanName"

This validator makes sure the field's value is of human name format.

!!code: sample-humanName.jsx #content
!!demo: sample-humanName.jsx


## Validator: maxLength

Name: "maxLength"

This validator makes sure the field's value will not exceed given length.

!!code: sample-maxLength.jsx #content
!!demo: sample-maxLength.jsx


## Validator: either

Name: "either"

This validator makes sure the field's value will be either of given values.

!!code: sample-either.jsx #content
!!demo: sample-either.jsx

