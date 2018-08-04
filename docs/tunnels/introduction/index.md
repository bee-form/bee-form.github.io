# Tunnels

Like validators, it is easy to write custom tunnels with Bee Form, however, the package "bee-form-tunnels" does include a number of basic tunnels for your convenience

Notice: Unlike other form libraries which also support parsing/formatting, Bee form does support parse errors, which means, when user input un-parsable values, like : "1a" for a number field we will have:

 - The field will be marked as has error, and the error name will be "@parse"
 - Form will be marked as invalid, and user will be blocked from submitting
 - Field value will be kept as "1a", so user will be able to continue changing it until it's correct. For example, is user is in middle of typing in a date string: "11/" (i.e. full string is "11/02/2018") then although we can not parse the value, we should still let user continue to type until he finishes.

### JSON

!!code: sample_json.jsx #config
!!code: sample_json.jsx #render
!!demo: sample_json.jsx

### Integer number

!!code: sample_int.jsx #config
!!code: sample_int.jsx #render
!!demo: sample_int.jsx

### Trim

!!code: sample_trim.jsx #config
!!code: sample_trim.jsx #render
!!demo: sample_trim.jsx

