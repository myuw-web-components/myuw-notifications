var tpl = "<style> :host([hidden]) {\n  display: none;\n}\n\n#wrapper {\n  position: var( --myuw-menu-wrapper-position, relative );\n  display: var( --myuw-menu-wrapper-display, inline-block );\n  margin: var( --myuw-menu-wrapper-margin, 0 6px );\n}\n\n#wrapper.hidden {\n  display: none;\n}\n\n#bell-button {\n  display: flex;\n  justify-content: var( --myuw-icon-button-justify, center );\n  align-content: var( --myuw-icon-button-align-content, center );\n  align-items: var( --myuw-icon-button-align-items, center );\n  position: relative;\n  cursor: pointer;\n  min-height: var( --myuw-icon-button-height, 42px );\n  min-width: var( --myuw-icon-button-width, 42px );\n  height: var( --myuw-icon-button-height, 42px );\n  width: var( --myuw-icon-button-width, 42px );\n  user-select: none;\n  outline: none;\n  padding: var( --myuw-icon-button-padding, 0 );\n  margin: var( --myuw-icon-button-padding, 0 6px );\n  border: var( --myuw-icon-button-border, 0 );\n  border-radius: var( --myuw-icon-border-radius, 50% );\n  background-color: var( --myuw-icon-button-bg, transparent );\n  -webkit-transition: var( --myuw-icon-button-transition, background-color .3s cubic-bezier(.35,0,.25,1) );\n  transition: var( --myuw-icon-button-transition, background-color .3s cubic-bezier(.35,0,.25,1) );\n}\n\n#bell-button:hover {\n  background-color: var( --myuw-icon-button-hover-bg, rgba(0,0,0,0.2) );\n}\n\n#bell-icon {\n  color: var(--myuw-primary-color, #fff);\n  fill: var(--myuw-primary-color, #fff);\n  height: var( --myuw-icon-button-icon-height, 30px );\n  width: var( --myuw-icon-button-icon-width, 30px );\n}\n\n#list {\n  position: var( --myuw-menu-position, absolute );\n  top: var( --myuw-menu-position-top, 45px );\n  right: var( --myuw-menu-position-right, 0 );\n  min-width: var( --myuw-menu-width, 320px );\n  list-style: var( --myuw-menu-list-style, none );\n  margin: var( --myuw-menu-margin, 0 );\n  padding: var( --myuw-menu-padding, 0 );\n  font-size: var( --myuw-font-size, 14px );\n  z-index: var( --myuw-menu-depth, 101 ); \n  max-height: var( --myuw-menu-height, 400px );\n  overflow-y: scroll;\n\n  transform-origin: var( --myuw-transform-origin, top right );\n  transform: var( --myuw-menu-transform, scale(0) );\n  opacity: var( --myuw-menu-opacity, 0 );\n  visibility: var( --myuw-menu-visibility, hidden );\n  transition: var( --myuw-menu-transition, visibility 0s, opacity .25s cubic-bezier(0.0, 0.0, 0.2, 1), transform .25s cubic-bezier(0.0, 0.0, 0.2, 1)  );\n\n  -webkit-box-shadow: var( --myuw-menu-shadow,  0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12) );\n  -moz-box-shadow:    var( --myuw-menu-shadow,  0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12) );\n  box-shadow:         var( --myuw-menu-shadow,  0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12) );\n}\n\n#list.visible {\n  transform: scale(1);\n  opacity: 1;\n  visibility: visible;\n}\n\n#list #see-all {\n  display: flex;\n  font-size: 16px;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: space-between;\n  -webkit-align-items: center;\n  align-items: center;\n  background-color: rgb(255,255,255);\n  border-bottom: none;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  flex-direction: row;\n  min-height: var( --myuw-menu-item-min-height, 48px );\n  height: var( --myuw-menu-item-height, auto );\n  color: #222;\n  padding: 0 16px;\n}\n\n#list #see-all h1 {\n  font-size: 16px;\n  margin: 0;\n  font-weight: 400;\n}\n\n#list #see-all.hidden {\n  display: none;\n}\n\n#list #see-all:hover {\n  background-color: rgb(255,255,255);\n}\n\n#list #empty-state {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  min-height: 140px;\n  color: #696969;\n  background-color: #ececec;\n}\n\n#list #empty-state.hidden {\n  display: none;\n}\n\n@media all and (min-width: 841px) {\n  #list {\n    width: 525px;\n  }\n} </style> <div id=\"wrapper\"> <button id=\"bell-button\" aria-label=\"notifications list\" aria-haspopup=\"true\" aria-controls=\"list\" aria-expanded=\"false\"> <!-- bell svg --> <svg id=\"bell-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z\"/></svg> <span id=\"count\" class=\"hidden\"></span> </button> <ul id=\"list\" role=\"menu\" tabindex=\"-1\" aria-labelledby=\"bell-button\"> <div id=\"see-all\"> <h1>Notifications</h1> </div> <!-- empty state --> <li id=\"empty-state\"> <slot name=\"myuw-notifications-empty\"></slot> </li> </ul> </div> ";

class MyUWNotifications extends HTMLElement {
    constructor() {
        super();

        // Create a shadowroot for this element
        this.attachShadow({mode: 'open'});

        // Append the custom HTML to the shadowroot
        this.shadowRoot.appendChild(MyUWNotifications.template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return [];
    }

    /* Currently unused except for demo/code generation purposes
       as there is no obvious need for the see-all-url to ever change while a user
       is interacting with the component
    */
    attributeChangedCallback(name, oldValue, newValue) {
        // Update the attribute internally
        this[name] = newValue;
    }

    connectedCallback() {
        // Get all attributes
        this['see-all-url']       = this.getAttribute('see-all-url');
        this['limit']             = this.getAttribute('limit') || 999;

        // Element variables
        this.$list                = this.shadowRoot.getElementById('list');
        this.$bell                = this.shadowRoot.getElementById('bell-button');
        this.$itemSlot            = this.shadowRoot.querySelector('slot[name="myuw-notification-items"]');
        this.$count               = this.shadowRoot.getElementById('count');
        this.$wrapper             = this.shadowRoot.getElementById('wrapper');
        this.$seeAllWrapper       = this.shadowRoot.getElementById('see-all');
        this.$seeAllLink          = document.createElement('a');
        this.$emptyState          = this.shadowRoot.getElementById('empty-state');
        this.$notificationIds     = [];
        this.$notificationsCount  = this.$notificationIds.length;

        // Display "see all" only if URL attribute was provided
        if (this['see-all-url']) {
          this.$seeAllLink.setAttribute('href', this['see-all-url']);
          this.$seeAllLink.innerText = "See all";
          this.$seeAllWrapper.appendChild(this.$seeAllLink);
        }

        /**
         * Listen for custom event to indicate there are notifications ready to display
         * @param {CustomEvent} event Event that should pass notification information to display
         */
        document.addEventListener('myuw-has-notifications', (event) => {
          // Process data passed with event
          if (event.detail.notifications) {
            this.componentReady(event.detail.notifications);
          } else {
            this.componentReady();
          }
        }, false);

        /**
         * Listen for custom event from child component(s) indicating that a notification's 
         * "dismiss" button was clicked. Remove the notification with received ID from 
         * internal list.
         */
        document.addEventListener('myuw-notification-dismissed', (event) => {
          // Process data passed with event
          if (event.detail.notificationId) {
            // Remove notification
            var index = this.$notificationIds.indexOf(event.detail.notificationId);
            this.$notificationIds.splice(index, 1);
            // Update for empty state
            if (this.$notificationIds.length <= 0) {
              this.$emptyState.classList.remove('hidden');
            }
          }
        }, false);

        /*
            Add an on-click event to the window.
            This allows us to close the menu if the user
            clicks anywhere but on the menu.
        */
        window.addEventListener('click', e => {
            if (this.$list.classList.contains('visible')) {
                this.$list.classList.remove('visible');
                this.$bell.setAttribute('aria-expanded', 'false');
                this.$list.setAttribute('tabindex', '-1');
            }
        });

        /*
            Add an on-click event to the notifications menu.
            We need to do this in order to stop the propagation
            of click events on the menu specifically.

            If a user clicks on the list menu, the window on click
            event will not fire, and it will not close the menu
        */
        this.$list.addEventListener('click', e => {
            e.stopPropagation();
        });

        /*
            Add an on-click event to the bell button

            We need to make sure that we stop propagation on
            this event or else the window on click will always fire
            and the menu will never open.
        */
        this.$bell.addEventListener('click', e => {
            e.stopPropagation();
            this.$list.classList.toggle('visible');

            // Focus the menu upon opening, blur on close
            if (this.$list.classList.contains('visible')) {
                this.$list.focus();
                this.$list.removeAttribute('tabindex');
                this.$bell.setAttribute('aria-expanded', 'true');
            } else {
                this.$list.blur();
                this.$list.setAttribute('tabindex', '-1');
                this.$bell.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    /**
     * TODO: 
     *   - Update DOM in response to internal list changes, instead of directly translating
     *     received data into DOM elements
     * 
     * Runs after component detects the 'myuw-has-notifications' event and receives
     * the required parameter
     * @param {*} notifications 
     */
    componentReady(notifications) {
      // Check for notifications
      if (typeof notifications === 'object' && notifications.length > 0) {

        var notificationItem;
        var limitIncrement = 0;
        var limit = this['limit']; 

        // Console log wrapper so debug message is safely posted 
        // if the browser doesn't have a console
        var log = Function.prototype.bind.call(console.debug, console);

        // create html structure for each notification
        for (var i in notifications) {
          // Abort if id not present or if we have reached the display limit
          if (!notifications[i].id) { return; }

          // If new unique id, add to internal list and DOM, or log a message and return
          if (this.$notificationIds.indexOf(notifications[i].id) === -1) {
            this.$notificationIds.push(notifications[i].id);
          } else { 
            // QUESTION: Is there a use case for instead broadcasting an event so the client 
            // can respond to it (e.g. if new notifications are being added via GUI by a non-
            // expert)?
            log.apply(console, ['Received duplicate notification id']);
            return; 
          }

          /* Create elements that don't depend on data model for information */
          notificationItem = document.createElement('myuw-notification');
          notificationItem.setAttribute('myuw-notification-id', notifications[i].id);
          notificationItem.setAttribute('slot', 'myuw-notification-items');

          /* 
            Set notification body
          */
          if (notifications[i].title) {
            notificationItem.setAttribute('body', notifications[i].title);
          }

          /* 
            Assemble action buttons row 
          */ 
          if (notifications[i].actionButton) {
            notificationItem.setAttribute('action-button-url', notifications[i].actionButton.url);
            notificationItem.setAttribute('action-button-label', notifications[i].actionButton.label);
          }

          if (notifications[i].moreInfoButton) {
            notificationItem.setAttribute('info-button-url', notifications[i].moreInfoButton.url);
            notificationItem.setAttribute('info-button-label', notifications[i].moreInfoButton.label);
          }

          if (notifications[i].confirmButton) {
            notificationItem.setAttribute('confirm-button-url', notifications[i].confirmButton.url);
            notificationItem.setAttribute('confirm-button-label', notifications[i].confirmButton.label);
          }
          
          if (limitIncrement < limit) { 
            this.$list.appendChild(notificationItem);
            limitIncrement += 1;
          }
        }

        // Update to non-empty
        this.$bell.innerHTML = `
          <svg id="bell-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
          </svg>`;

        // Hide empty state
        this.$emptyState.classList.add('hidden');
      }
    }

}
MyUWNotifications.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

/**
 * Polyfill for supporting the CustomEvent constructor in IE9+
 * From: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
 */
(function () {
  if (typeof window.CustomEvent === 'function') {
    return false;
  }
  
  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

window.customElements.define('myuw-notifications', MyUWNotifications);

var tpl$1 = "<style> :host([hidden]) {\n    display: none;\n  }\n\n  #notification {\n    transition: var( --myuw-menu-item-transition, all .3s ease );\n    position: relative;\n    font-size: var( --myuw-menu-item-font-size, 15px );\n    font-family: var( --myuw-profile-font, var(--myuw-font, 'Montserrat', 'Roboto', Arial, sans-serif) );\n    padding: var( --myuw-menu-item-padding, 3px 16px );\n    color: var(--myuw-menu-color, rgba(0,0,0,0.87));\n    text-decoration: none;\n    background-color: var(--myuw-menu-item-bg-color, #f5f5f5 );\n    border-bottom: var(--myuw-menu-item-divider, 1px solid #e5e5e5 );\n    user-select: none;\n    outline: none;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    min-height: var( --myuw-menu-item-height, 48px );\n    height: var( --myuw-menu-item-height, auto   );\n    -webkit-align-content: center;\n    align-content: center;\n    -webkit-align-items: center;\n    align-items: center;\n    -webkit-justify-content: space-between;\n    justify-content: space-between;\n  }\n\n  #notification:hover,\n  #notification:focus {\n    background-color: var( --myuw-menu-item-hover-bg, #ececec );\n  }\n\n  #content {\n    width: var( --myuw-notification-content-width, 80% );\n    max-width: var( --myuw-notification-content-width, 80% );\n    -webkit-flex-direction: var( --myuw-notification-content-flex-direction, column );\n    flex-direction: var( --myuw-notification-content-flex-direction, column );\n  }\n\n  #body {\n    font-size: var( --myuw-notification-body-font-size, 15px );\n    margin-bottom: 6px;\n  }\n\n  #actions a {\n    /* general material button css */\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    text-align: center;\n    border-radius: 3px;\n    border: 0;\n    padding: 0 6px;\n    margin: 6px 8px;\n    background: transparent;\n    white-space: nowrap;\n    overflow: hidden;\n    text-decoration: none;\n    -webkit-transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n    transition: box-shadow .4s cubic-bezier(.25,.8,.25,1),background-color .4s cubic-bezier(.25,.8,.25,1);\n    /* notifications-specific css */\n    line-height: 28px;\n    min-width: 60px;\n    min-height: 28px;\n    font-size: 12px;\n    font-weight: 500;\n    margin-left: 0;\n  }\n\n  #actions a[hidden] {\n    display: none;\n  }\n\n  #actions #action {\n    color: var( --myuw-accent-button-color, #fafafa );\n    background-color: var( --myuw-accent-button-bg, #0479a8 );\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  }\n\n  #actions #action:hover {\n    background-color: var( --myuw-accent-button-hover-bg, rgb(3,78,108) );\n  }\n\n  #actions #moreInfo,\n  #actions #confirm {\n    color: #222;\n  }\n\n  #actions #moreInfo:hover,\n  #actions #confirm:hover {\n    background-color: #0000001c;\n  }\n\n  #dismiss {\n    display: flex;\n    justify-content: var( --myuw-icon-button-justify, center );\n    align-content: var( --myuw-icon-button-align-content, center );\n    align-items: var( --myuw-icon-button-align-items, center );\n    position: relative;\n    cursor: pointer;\n    min-height: var( --myuw-icon-button-height, 42px );\n    min-width: var( --myuw-icon-button-width, 42px );\n    height: var( --myuw-icon-button-height, 42px );\n    width: var( --myuw-icon-button-width, 42px );\n    max-width: var( --myuw-notification-dismiss-width, 20% );\n    user-select: none;\n    outline: none;\n    padding: var( --myuw-icon-button-padding, 0 );\n    margin: var( --myuw-icon-button-padding, 0 6px );\n    border: var( --myuw-icon-button-border, 0 );\n    background-color: var( --myuw-icon-button-bg, transparent );\n  }\n\n  #dismiss svg {\n    fill: var( --myuw-notification-dismiss-color, rgba(0,0,0,0.54) );\n    -webkit-transition: color .3s cubic-bezier(.35,0,.25,1);\n    transition: color .3s cubic-bezier(.35,0,.25,1);\n  }\n\n  #dismiss svg:hover {\n    fill: var( --myuw-notification-dismiss-hover-color, #333 );\n  } </style> <li role=\"menuitem\" id=\"notification\"> <div id=\"content\"> <p id=\"body\"></p> <div id=\"actions\"> <a id=\"action\" target=\"_blank\" rel=\"noopener noreferrer\" hidden></a> <a id=\"moreInfo\" target=\"_blank\" rel=\"noopener noreferrer\" hidden></a> <a id=\"confirm\" target=\"_blank\" rel=\"noopener noreferrer\" hidden></a> </div> </div> <button id=\"dismiss\" aria-label=\"dismiss notification\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> </svg> </button> </li>";

class MyUWNotification extends HTMLElement {
  constructor() {
    super();

    this.connected = false;

    // Create a shadow-root for this element.
    this.attachShadow({ mode: 'open' });

    // Append the custom HTML template to the shadow-root.
    this.shadowRoot.appendChild(MyUWNotification.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [];
  }

  /**
   * Web component lifecycle hook to updated changed properties.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if(oldValue !== newValue){
      this[name] = newValue;
      this.updateComponent(name, newValue);
    }
  }

  /**
   * When the component is first attached to the DOM, get its defined
   * attributes and listen for scrolling.
   */
  connectedCallback() {
    this.notificationId = this.getAttribute('myuw-notification-id') || null;
    this.body = this.getAttribute('body') || null;
    this.actionUrl = this.getAttribute('action-button-url') || null;
    this.actionLabel = this.getAttribute('action-button-label') || null;
    this.infoUrl = this.getAttribute('info-button-url') || null;
    this.infoLabel = this.getAttribute('info-button-label') || null;
    this.confirmUrl = this.getAttribute('confirm-button-url') || null;
    this.confirmLabel = this.getAttribute('confirm-button-label') || null;

    this.$dismissButton   = this.shadowRoot.getElementById('dismiss');
    this.$body            = this.shadowRoot.querySelector('p#body');
    this.$actionButton    = this.shadowRoot.querySelector('a#action');
    this.$infoButton      = this.shadowRoot.querySelector('a#moreInfo');
    this.$confirmButton   = this.shadowRoot.querySelector('a#confirm');

    this.$body.innerText = this.body;

    if (this.actionUrl && this.actionLabel) {
      this.$actionButton.innerText = this.actionLabel;
      this.$actionButton.setAttribute('href', this.actionUrl);
      this.$actionButton.hidden = false;
    }

    if (this.infoUrl && this.infoLabel) {
      this.$infoButton.innerText = this.infoLabel;
      this.$infoButton.setAttribute('href', this.infoUrl);
      this.$infoButton.hidden = false;
    }

    if (this.confirmUrl && this.confirmLabel) {
      this.$confirmButton.innerText = this.confirmLabel;
      this.$confirmButton.setAttribute('href', this.confirmUrl);
      this.$confirmButton.hidden = false;
    }

    // Bind dismiss event using the notification's id value
    this.$dismissButton.addEventListener('click', this.dismissNotification.bind(this, this.notificationId));

    this.connected = true;
  }

  /**
   * Clean-up listeners if the component is removed from the DOM.
   */
  disconnectedCallback() {
    // ...
  }

  /**
   * Update the component state depending on changed properties and/or
   * font loading.
   */
  updateComponent(prop, value) {
    if( !this.connected ){ return; }
  }

  /**
   * 
   * TODO:
   *     - Animate removal from DOM
   * @param {String} id 
   */
  dismissNotification(id) {
    // Remove self from DOM
    this.parentNode.removeChild(this);

    // Dispatch custom event notifying client that a notification was dismissed
    // so it can be tracked in the parent list
    var dismissalEvent = new CustomEvent('myuw-notification-dismissed', {
      bubbles: true,
      detail: {
        notificationId: id
      }
    });
    document.dispatchEvent(dismissalEvent);
  }
}

MyUWNotification.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl$1);

window.customElements.define('myuw-notification', MyUWNotification);

export { MyUWNotification, MyUWNotifications };
