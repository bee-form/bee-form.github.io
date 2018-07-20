# createForm() 

## API:

```
createForm(formConfig, [initialData]) : Form
```

This is a sample configuration to create a register form

```
createForm({
    "name": [required, nameFormat],
    "email": {
        validators: [required, emailFormat, emailNotExist],
        debounce: 400,
    },
    "password": [required, minLength(6)],
    "confirm-password": [required, equals("password")],
});
```

A form rule consists of paths to each field and rules applied to that field.

Not every field needs a rule. For fields that don't have rule configured, user can still use that field, just that no rule will be applied to it, so there will be no validator check, no debounce, or parsing/formatting

Each field rule consists of "validators", "debounce", and "faces" ( for example `{"!date": [dateStrTunnel]}` )

Paths can contain wild card character (*), for example a school class form:

```
createForm({
    "className" : [required],
    "pupils": [colNotEmpty],
    "pupils[*].name": [required],
})
```

The `pupils[*].name` path will let rules applied to name of all pupils in class.

Or example of a "multi-names" super agent:

```
createForm({
    "realName" : [required],
    "otherNames[*]": [required],
})
```

Now, either no `otherNames` is inputted, or if any `otherNames` is added, each of them should be a string, with `length > 0`, or form will not be valid.

## Form

### form.onChange(listener)

`listener` is a function, and it will be invoked any time form's state is changed. React component should add this line to observe form's changes: `form.onChange(() => this.forceUpdate()` and re-render accordingly.

### form.createView()

Returns a FormView object which associate itself with current form's state. Future state changes will not affect this form view.

### form.getData()

Get the current data

### form.setData(newData)

Set data to new version


 