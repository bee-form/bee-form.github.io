# Features

This is a quick introduction of Bee Form's features

## Async validation

Async validation is commonly used in forms today, and Bee Form has native, first-class support for it.

For example, assume we have a mock api:
```
function validateName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name === "Q");
        }, 600);
    });
}
```

Now we wire it up to form's rules:
```
this.form = createForm({
    "name": [required, {name: "async", validate: validateName}],
});
```

And that's it, name will have error and block form's submit unless user type in "Q" for it.

## Debounce before validation

Debounce is also a very common in any place that async validation happens to save round trips to server while user is still typing

To add debounce to your field "name", you will need to first extend it's declaration to the full format (from `[required, {name: ...}], into `{ validators: [required... ], }`), then add debounce value to it:

```
this.form = createForm({
    "name": {
        validators: [required, {name: "async", validate: validateName}],
        debounce: 400,
    },
});
```

## Parse/format value

Another common requirement that often happen to forms is parsing user's input value into form's data. This often happens to date or number values but can also be Json or any server's specific data format (like instead of using date string or timestamp, server wants `{year: 2018, month: ...}`)

This requirement can often leads to a lot of coding problem if it's not natively supported the form engine, for example, if user is still in process of typing in the date value (`11-2`), if form engine does not detect it and block submitting, it can easily leads user to misunderstanding that all his/her inputs are correct and submit the form with unwanted value.

Bee Form natively support parsing/formatting, and use a new term: `tunnel` for it. A tunnel will have both methods for parsing and formatting value. Parsing is used for user's raw input (view) value, and formatting is used to format server sent, or initial form value into user's expected view format.

```
import {intNumber} from "bee-form/basic-tunnels";
```

And configured it into the form: note that the rule for name here is also extended and `tunnel` is declared in place of `debounce` in the previous sample
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

```
this.form = createForm({
    "children[*].name": [required],
});
```

And in render:

```
{ fv.map("children", (childFv, i) => (
    <div key={i}>
        <input {... childFv.bind("name")} />
    </div>
)) }
```

Just that, no need for any extra component. The "childFv" is a version of "fv" (Form View), which is scoped down to handle only the child's data, and any method that you use in "fv" is also available in "childFv" (bind, map, scope, getData, getValue, isValid...) only that invoking them will have effect from the child's data downward.

Scoping down is a common technique used in Bee Form, to provide a powerful yet simple and safe way to handle form controls. Other methods that use "scoping down": `fv.scope("path")` and `fv.withControl("path", (childFv) => (...))`
