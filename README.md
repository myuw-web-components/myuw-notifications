# myuw-notifications

**`myuw-notifications` is not currently maintained.**

## Try it out

Clone this repository.

Run

`npm run start`

from the root of this repository.

Node will build the project, start a demo server, and open your web browser to
a demo page. Then you can use the buttons and form on the page to demo how
notifications present.

## Using myuw-notifications in a website or web application

### Importing the component into the page

Import the latest version of the component:

```html
<!-- import the module -->
<script type="module" src="https://unpkg.com//@myuw-web-components/myuw-notifications@latest/dist/myuw-notifications.min.mjs"></script>

<!-- fallback for browsers without ES2015 module support -->
<script nomodule src="https://unpkg.com/@myuw-web-components/myuw-notifications@latest/dist/myuw-notifications.min.js"></script>
```

### Using the component

And then use the component:

```html
<myuw-notifications
  slot="myuw-notifications"
  limit="3"
  see-all-url="/"
>
  <span slot="myuw-notifications-empty">All caught up!</span>
</myuw-notifications>
```

### Displaying notifications

The component listens for the "`myuw-has-notifications`" custom event to tell it when there are notifications ready to display. You can use this event after fetching all notifications from a URL or to add a single notification to the list. Dispatch the event like so:

```js
document.dispatchEvent(new CustomEvent('myuw-has-notifications', {
  bubbles: true,
  detail: {
    notifications: [yourNotificationsArray]
  }
}));
```

*Note: The component includes a CustomEvent polyfill for browsers that don't already support them*

#### Minimum required properties

A single "notification" object must contain the following properties:

```js
{
  "id": "",
  "title": "",
  "actionButton": {
    "label": "",
    "url": ""
  }
}
```

*Notes:*
- *The object corresponding to the `notifications` property **MUST** be an array, even if you're only displaying a single notification*
- *The component expects a data model similar to the one currently used in MyUW. Efforts to make this more generic or to allow adopters to establish their own data models are in progress.*

### Dismissing notifications

Users are able to remove notifications from the list by clicking a notification's "X" dismiss button. Removal from the DOM and from the component's list is handled automatically, but if you need to hook into the event for your own purposes (e.g. to trigger an analytics event), you can listen for the `myuw-notification-dismissed` event, like so:

```js
document.addEventListener('myuw-notification-dismissed', (event) => {
  // The event passes a detail object with a single
  // property: "notificationId", which is the "id" value of
  // the dismissed notification
  var dismissedNotificationId = event.detail.notificationId;
  // Do what you want with this information!
}, false);
```

In addition, notifications can be dimissed by dispatching a `myuw-notification-dismissed` event with the field `event.detail.dismissedFromOutside` set to `true`, and `event.detail.notificationId` set to id of the notification you want to dismiss.

### Configurable attributes

- **see-all-url**: If this optional attribute is provided, the component will display a "See all" link in the title row of the notifications list.
- **limit**: Limits the number of notifications displayed. If unset, notifications that exceed the height limit of the menu can be seen via scrolling.

### Slots

- **myuw-notifications-empty**: Use this slot to insert markup you would like your users to see when there are no new notifications to view.

### CSS Variables

Check out the [source HTML files](src/myuw-notifications.html) to see all the CSS variables you can override.

## Using in production

The evergreen "latest" version is convenient for development,
but for stability in production settings instead use specific
[release versions](https://www.npmjs.com/package/@myuw-web-components/myuw-notifications?activeTab=versions)
and upgrade intentionally.

Instead, import a specific version:

```html
<!-- import the module -->
<script type="module" src="https://unpkg.com//@myuw-web-components/myuw-notifications@1.3.4/dist/myuw-notifications.min.mjs"></script>

<!-- fallback for browsers without ES2015 module support -->
<script nomodule src="https://unpkg.com/@myuw-web-components/myuw-notifications@1.3.4/dist/myuw-notifications.min.js"></script>
```
