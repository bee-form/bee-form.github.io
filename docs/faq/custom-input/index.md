### Can I use custom input (like react select, date-time picker) with Bee Form's bind?

Yes you can... actually no. `fv.bind()` is shortcut method for use with React's input controls (input, select, textarea...). You can always opt it out and use full version of it, which is:

!!jsx
```
<ReactSelect
    value={fv.getValue()}
    onChange={(newValue) => fv.pushValue(newValue)}
/>
```
