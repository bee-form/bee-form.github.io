# Features

This is a quick introduction of Bee Form's features

## Async validation

Async validation is commonly used in forms today, and Bee Form has native, first-class support for it.

For example, assume we have a mock api:
!!jsx
```
function validateName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name === "bee");
        }, 600);
    });
}
```

Now we wire it up to form's rules:
!!jsx
```
const formConfig = {
    "name": [required, {name: "async", validate: validateName}],
};
```

And that's it, name will have error and block form's submit unless user type in "bee" for it.

!!demo-collapsed: sample_async.jsx

## Debounce before validation

Debounce is also a very common in any place that async validation happens to save round trips to server while user is still typing

To add debounce to your field "name", you will need to first extend it's declaration to the full format (from `[required, {name: ...}]`, into `{ validators: [required... ], }`), then add debounce value to it:
!!jsx
```
this.form = createForm({
    "name": {
        validators: [required, {name: "async", validate: validateName}],
        debounce: 400,
    },
});
```

!!demo-collapsed: sample_async_debounce.jsx

Note that if you change focus (blur the input), debounced value will be applied immediately.

## Parse/format value

Another common requirement that often happen to forms is parsing user's input value into form's data. This often happens to date or number values but can also be Json or any server's specific data format (like instead of using date string or timestamp, server wants `{year: 2018, month: ...}`)

This requirement can often leads to a lot of coding problem if it's not natively supported the form engine, for example, if user is still in process of typing in the date value (`11-2`), if form engine does not detect it and does not block submitting, it can easily leads user to misunderstand that all his/her inputs are correct and submit the form with unwanted values.

Bee Form natively support parsing/formatting, when a field has parsing error, form will be marked as invalid and user will have to fix it before submitting. Bee Form uses a new term: `tunnel` for parsing/formatting. A tunnel will have both methods for parsing and formatting value. Parsing is used to convert user's raw input (view) value into data's format, and formatting is used to format data into user's expected view format.

To add parsing/formatting to your form's field, add this import (a sample tunnel to parse/format number values):
!!jsx
```
import {intNumber} from "bee-form-tunnels";
```

And configured it into the form: note that the rule for name here is also extended and `tunnel` is declared in place of `debounce` in the previous sample
!!jsx
```
this.form = createForm({
    "age": {
        validators: [required],
        tunnel: [intNumber],
    },
});
```

Please also note that Bee Form has support for mapping 2 user's input into 1 form's value, like in case of date input and time input. This is done with the "Faces" feature, and has an example for using both Tunnel and Faces in the [Examples section](https://bee-form.github.io/bee-form-react-demo/)

## Handle lists

Lists is also a very common requirement in forms these days. In Bee Form, we are proud to provide a very intuitive and simple API to handle lists

!!jsx
```
this.form = createForm({
    "children[*].name": [required],
});
```

And in render:

!!jsx
```
{ fv.map("children", (childFv, i) => (
    <div key={i}>
        <input {... childFv.bind("name")} />
    </div>
)) }
```

Just that, no need for any extra component. The "childFv" is a version of "fv" (Form View), which is scoped down to handle only the child's data, and any method that you use in "fv" is also available in "childFv" (bind, map, scope, getData, getValue, isValid...) only that invoking them will have effect from the child's data downward.

Scoping down is a common technique used in Bee Form, to provide a powerful yet simple and safe way to handle form controls. Other methods that use "scoping down": `fv.scope("path")` and `fv.withControl("path", (childFv) => (...))`

// TODO cascading rule

## Scoping (sub-form/form sections)

Bee form's form view object is a recursive data structure, if you data is : `{user: {name}, billing: {card}}`, you can call `fv.scope("user")` and will have an identical form view structure, the only difference is it's pointing to `user` property instead of the root data. The scoping mechanism in Bee form is very powerful, things like validation will be relevance to the scoped-down data only, which mean your scoped down form view may be valid even when the whole form is invalid (it has error in other part of the form).

## Field faces

Faces is an important feature of Bee form, to put it simple: a form has multiple fields, a field has multiple faces, each face has its own configuration of debounce and tunnel (not validations, as validations are bounded to the whole field).

Why faces feature is important? Let's imagine you have a timestamp field, and you will have to separate it into 2 input tags, 1 for date (mm/dd/yyyy) and 1 for time (hh:mm), each of those inputs works independently but is mapped to the same data, each of them will need to have a separated set of tunnel config (to parse/format date or time), that's why we have 2 faces for the same data field

Here is the sample:

// TODO

For more details, please look at this page
