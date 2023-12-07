function updateMaxLength() {
  var shadowHost = document.querySelector('#b_sydConvCont > cib-serp');
  if (!shadowHost) {
    console.log('Shadow host not found.');
    return;
  }
  var shadowRoot1 = shadowHost.shadowRoot;
  var actionBarMain = shadowRoot1.querySelector('#cib-action-bar-main');
  if (!actionBarMain) {
    console.log('Action bar main not found.');
    return;
  }
  var shadowRoot2 = actionBarMain.shadowRoot;
  var textInput = shadowRoot2.querySelector('div > div.main-container > div > div.input-row > cib-text-input');
  if (!textInput) {
    console.log('Text input not found.');
    return;
  }
  var shadowRoot3 = textInput.shadowRoot;
  var textarea = shadowRoot3.querySelector('#searchbox');
  if (!textarea) {
    console.log('Textarea not found.');
    return;
  }
  textarea.setAttribute('maxlength', '-1');
  console.log('The maxlength attribute has been updated to -1.');
}
updateMaxLength();
