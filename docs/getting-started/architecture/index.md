## Architecture

From inside, Bee Form is powered by the powerful "Event Bus" architecture and a Flux like data flow

### What is Event bus architecture

The Event Bus architecture keeps track of all future events that may or may not happen to the form's state, and allows for those asynchronous changes to be deprecated and cancelled based on future condition.

For example, when an async validation happen, an api is launched, and scheduled that when come back, will help determine the validation status of a given field value, however, when the api is still in the air, user changed the input, and that api call should be deprecated. Event bus will help cancel the http api, however, in case it can not be cancelled, event bus will make sure that when the response come, it will not make any impact on the form state, or we can say, it's rejected.

The event bus architecture allows for safe async event control, as only certain events are deprecated and cancelled given a state change is invoked.

### What is the Flux like data flow

In Bee Form, 
