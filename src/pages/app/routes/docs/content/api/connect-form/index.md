# connectForm()

`connectForm()` is a convenient method, using HoC to provide form view into React component. This resembles Redux's `connect()` method.

!!jsx
```
const formConfig = {
    "name": [required],
};

const Component = ({fv}) => (
    <input {... fv.bind("name")} />
);

export default connectForm(Component, formConfig);
```

This approach is used in "Examples", however you can always use `createForm()` if you don't like HoC.

### API: connectForm(ReactComponent, formConfig, initData)

Please check the "Examples" page for samples of `connectForm()`