## Features

#### Async validation?

Mock api:
```
function validateName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name === "Q");
        }, 600);
    });
}
```

And wire it up:
```
this.form = createForm({
    "name": [required, {name: "async", validate: validateName}],
});
```

#### Debounce before validation?

```
this.form = createForm({
    "name": {
        validators: [required, {name: "async", validate: validateName}],
        debounce: 400,
    },
});
```

#### Parse/format value?

```
import {intNumber} from "bee-form/basic-tunnels";
```

And
```
this.form = createForm({
    "age": {
        validators: [required],
        tunnel: [intNumber],
    },
});
```

#### A list?

```
this.form = createForm({
    "children[*].name": [required],
});
```
