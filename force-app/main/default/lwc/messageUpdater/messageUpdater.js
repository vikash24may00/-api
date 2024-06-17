// import { LightningElement,  } from 'lwc';

// export default class MessageUpdater extends LightningElement {
  
// }

import { LightningElement, track } from 'lwc';

export default class MessageUpdater extends LightningElement {
    @track parentMessage = 'Hello from Parent';
    @track inputMessage = '';

    handleInputChange(event) {
        this.inputMessage = event.target.value;
    }

    handleButtonClick() {
        this.parentMessage = this.inputMessage;
    }
}
