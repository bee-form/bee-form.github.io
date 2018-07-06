# Introduction

Bee Form is a sophisticated forming system, capable of handling the most complicated form requirements. However, on top 
of that, is a very simple, un-opinionated and non-intrusive API.


## Install

```
npm i --save bee-form-react
```

## First Bee Form : Hello World

To start using Bee Form, you don't have to change any code outside of the component that host your form.

Add this code to your constructor, it declares form's rules and form's initial data:

```
this.form = createForm({
    "name": [required],
}, {name: "World"});

this.form.onChange(() => this.forceUpdate());
```

And this to your render method:
```
const fv = this.form.createView();
```

And that's done.

You don't need to clean form's memory, the form will stay inside your component, and will be destroyed and cleaned when 
your component is unmounted.

Here is the full source code:

```
import React, {Component} from 'react';
import {createForm, basicValidators: {required}} from "bee-form-react";

export default class HelloWorld extends Component {

    constructor(props, context) {
        super(props, context);

        this.form = createForm({
            "name": [required],
        }, {name: "World"});

        this.form.onChange(() => this.forceUpdate());
    }

    render() {
        const fv = this.form.createView();

        return (
            <div className="first-bee-form">

                <div className="">
                    <input
                        {... fv.bind("name")}
                    />
                </div>

                <div className="">
                    Hello {fv.getValue("name")}
                </div>
            </div>
        );
    }
}

```
