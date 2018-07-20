# Tunnel

A tunnel is the way Bee Form parse user's input value into form's storage format, and format form's value back to user's view format.

A tunnel can have either `parse` or `format` methods, or both of them.

A field (or field's face) can have multiple tunnels, when it has more than 1 tunnel, parsing will be applied from first tunnel to last tunnel in list, but formatting will be applied in REVERSED order, from last to first.

A tunnel's `parse` method can throw an exception during parsing, to indicate that user's inputted value can not be parsed into form's expected format. In such case, Bee Form will keep user's input value (so he/she can continue typing/editing it) however, the field will be marked as invalid, and the error name is "@parse", and the whole form will be invalid, so user is acknowledged of the parse error and would not submit form unless he/she fix it. This feature differentiate Bee Form from most form engine out there which may show user error in that field locally, but would let user submit the whole form while error is not solved, thus unwanted value is sent and saved to server.

This is a sample tunnel:

!!jsx
```
const toInt = {
    parse: (strValue) => parseInt(strValue),
    format: (intValue) => "" + intValue,
};

createForm({
    "age": {
        tunnel: [toInt],
    },
});

```