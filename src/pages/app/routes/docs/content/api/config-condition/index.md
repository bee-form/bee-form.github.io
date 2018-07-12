# Config condition

In case your form has multiple sections, and some of them is may be disabled and need not to be validated at all, then Bee Form's config condition can help.

For example:

```
import {createForm, condition, ...} from "bee-form-react";

createForm([
    {
        "sex": [either("male", "female")],
    },
    condition((data) => data.sex === "female", {
        "pregnant": [required, either(true, false)],
    })
])
```

With this sample, there are a few changes to original form config:

 1. We need to import `condition` from "bee-form-react"
 2. While createForm, we no longer pass form config as a map any more, instead, it should be an array.
 3. First item of the array is normal form config that we had seen, second item, is the section that has condition applied, with the condition itself defined first, then the section's configuration which is of the same format as form configuration that we see in other samples.
 
While running this sample, we will see that the field "pregnant" will only be validated (with `required` and `either`) when "sex" is set to "female". If "sex" is set to "male", "pregnant" field is irrelevant, no validation will be run against it.


