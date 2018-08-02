# Introduction

Bee Form is a sophisticated forming system, capable of handling the most complicated form requirements. On top 
of that, is a very simple, light-weight, function based API.


## Install

```
npm i --save bee-form-react
```

Source code: [https://github.com/bee-form/bee-form-react](https://github.com/bee-form/bee-form-react)


## First Bee Form : Hello World

To start using Bee Form, you don't have to change any code outside of the component that host your form.

Add this code to your constructor, it declares form's rules and form's initial data:

!!jsx
```
this.form = createForm({
    "name": [required],
}, {name: "World"});

this.form.onChange(() => this.forceUpdate());
```

And this to your render method:

!!jsx
```
const fv = this.form.createView();
```

And that's done.

You don't need to clean form's memory, the form will stay inside your component, and will be destroyed and cleaned when 
your component is unmounted.

Here is the full source code:

!!code: sample_helloworld.jsx
!!demo: sample_helloworld.jsx

This sample shows the most basic and native way to create and use Bee Form, however there are 2 other ways which are more "high-level" and you may find the more preferable: using `connectForm(Component, formConfig, initData)` function (similar to Redux `connect()`) or `Form` react component (props: `config` and `initData` ) 

All the samples in the "Examples" page use the `connectForm` approach to create and connect form.