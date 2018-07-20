# Validator

A validator represent a rule that field value's must follow in order for it to be marked as valid.

If a form has any invalid field, the whole form will be marked as invalid

A field (or a field's face )will have a list of validators, and when a validator does not return true, then sub-sequence validators will not be called 

## API

A validator has 2 attributes: `name` and `validate`

### Validator.name : string

Validator's name is what the form keeps track of in case the field is invalid, and through `fv.getError()`, developer will know exactly which validator has failed to validate and give users proper error messages.

### Validator.validate : (fieldValue, formData) => true | false | Promise

Validate method can return true or false to indicate the field value has passed validation.

Validate method can also return a promise indicating an async API call is being made and will resolve to either true or false. During this API time, the field will be marked as invalid, and status is "requesting". After API call is done, it's marked as either valid or invalid based on whether the API resolve to true or not.

This is a sample validator:

!!jsx
```
const largerThan5 = {
    name: "larger-than-5",
    validate: (value) => value > 5,
};

createForm({
    "age": [largerThan5],
});

```