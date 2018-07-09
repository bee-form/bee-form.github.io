# Form View

Often named as `fv`

Note that all values in form view are "View Value", which will be under effect of `tunnel`'s parse and format functions, more explanation is at `fv.getValue([path])` and `fv.pushValue([path], newValue)` definitions.

## Methods

#### fv.getValue([path])

`path` is the path string to the field that we need to get value, or empty/null/undefined to get full form data (in case this is root form view, not scoped down)

Note that the value returned is "view value", which means if this path has any tunnel configured, then the tunnel's `format` method will be called upon the real data first, and the formatted result will be returned by `getValue` method.

#### fv.getData()

Equals to `fv.getValue()` (without `path`).

Note that this is also "view value", so if you configure a tunnel at data root (which you should not), then the formatted data will be returned .

#### fv.pushValue([path], newValue)
 
`path` is the path string to the field that we need to change value, or empty/null/undefined to change full form data (in case this is root form view, not scoped down)
 
`newValue` is new value for path, in case path is undefined, newValue will replace full form data (with root form view)

Note that the newValue here is "view value", which means if this path has any tunnel configured, then the tunnel's `parse` method will be called upon this view value first, then only parsed data will be applied to the field at given `path`.

#### fv.bind([path])

`bind` method is the convenient method for React's inputs (value, onChange...) that internally invoke `fv.getValue([path])` and `fv.pushValue([path])`. The returned object should be similar to this:

```
{
    value: getValue(path),
    onChange: (e) => pushValue(path, e.target.value),
}
```

#### fv.changeValue([path], reducer)

The `changeValue` method is a convenient method which does 3 things:
 1. Get the current `path`'s value (view value). 
 2. Apply `reducer` function to the value.
 3. Set (`pushValue`) the changed value back to `path`'s field.
  
#### fv.hasError([path])

Return true if field at `path` or any field below it error. For example `fv.hasError("student")` will return true if student's name, or email, or age has error.

If `path` is omitted, then the whole form is checked for error (in case of root form view).

#### fv.isValid([path])

Does the opposite of `hasError` method

#### fv.getError([path])

Get the name of the error at `path`, or `undefined` if no error is found.

#### fv.scope([path])

Return a scoped down version of this form view, associated with data from `path` downward.

For example:

```
fv.bind("student[0].name")
```

will be equal to

```
fv.scope("student[0]").bind("name")
```

or

```
fv.scope("student[0].name").bind()
```

#### fv.map([path], fn)

This method gets value (view value) at the `path`, and expects the value to be an array. Then with each item of that array, form view will create a scoped down version of itself associated with that item, then call `fn` with that scoped down form view.


#### fv.withControl([path], fn)

This is a convenient method, which does:

 1. Create a scoped down version of form view associated with `path`.
 2. Call `fn` with that scoped down form view
 3. Return the result of fn.
 
Basically, it is the same to: `fn(fv.scope(path))`, but provides a cleaner looking invocation sequence.

For example:

```
{fv.withControl("name", ({bind}) => (
    <input {...bind()} />
)}
```

Instead of:
```
(({bind}) => (
    <input {...bind()} />
))(fv.scope("name"))
```

#### fv.isPristine([path])

Check if field at `path` is not touched by user (not focused or changed value)

#### fv.isDirty([path])

Check if field at `path` is not edited/changed value by user

