chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		let isAddFriendAvailable = false;

		function checkAddFriend() {
			var addFriendMatchText = 'Add Friend';
			var addFriendMatchText2 = 'Add friend';
			var buttons = document.getElementsByTagName("div");
			for (var counter = 0, length = buttons.length; counter < length; counter++) {
				var target = buttons[counter];
					var ariaLabel = target.getAttribute("aria-label");
					if (ariaLabel) {
						var text = ariaLabel.trim();
						if (text === addFriendMatchText || text === addFriendMatchText2) {
							isAddFriendAvailable = true
							break
						}
					}
			}
		}
		checkAddFriend()

		function addFriends() {
			var addFriendMatchText = 'Add Friend';
			var addFriendMatchText2 = 'Add friend';
			var buttons = document.getElementsByTagName("div");
			for (var counter = 0, length = buttons.length; counter < length; counter++) {
				var target = buttons[counter];
					var ariaLabel = target.getAttribute("aria-label");
					if (ariaLabel) {
						var text = ariaLabel.trim();
						if (text === addFriendMatchText || text === addFriendMatchText2) {
							target.click();
							break
						}
					}
			}
		}

		function sendTextMessage() {
			var matchText = 'Message';
			var buttons = document.getElementsByTagName("div");
			for (var counter = 0, length = buttons.length; counter < length; counter++) {
				var target = buttons[counter];
					var ariaLabel = target.getAttribute("aria-label");
					if (ariaLabel) {
						var text = ariaLabel.trim();
						if (text === matchText) {
							// target.click();
							// break
						}
						console.log("button: ", text)
					}
			}
		}

		sendTextMessage()

		addFriends()


		var o = document.getElementsByClassName("uiTextareaNoResize uiTextareaAutogrow _1rv");

		// set the chat textbox
		var chatTextBox = o[0];

		// set the message value
		chatTextBox.value = "Hello";

		// create a keydown event    
		var e = new Event("keydown");

		// it has to simulate the Enter press (key code is 13)
		e.keyCode = 13;

		// trigger it
		chatTextBox.dispatchEvent(e);
	}
	}, 10);
});


// Minimize chat
// Message

// First Post comment box; 
var o = document.getElementsByClassName("notranslate _5rpu");

// set the chat textbox
var chatTextBox = o[0]; 
console.log("Chat Text: ", chatTextBox);



var count = 100; 
var loop = setInterval(function(){ 
	var message = "Hi"; 
    var input = document.getElementsByName("comment_text")[0]; 
    var submit = document.querySelector('button[type="submit"]'); 
    submit.disabled = false; 
    input.value = message; 
    submit.click(); 
    count -= 1; 
    if(count == 0) 
    { 
        clearInterval(loop); 
    } 
}, 10000);


<div aria-label="Comment on post" class="notranslate _5rpu" contenteditable="true" role="textbox" spellcheck="true" style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;">
	<div data-contents="true">
		<div class="" data-block="true" data-editor="8uqg4" data-offset-key="4535t-0-0">
			<div data-offset-key="4535t-0-0" class="_1mf _1mj">
				<span data-offset-key="4535t-0-0">'
					<br data-text="true">
				</span>
			</div>
		</div>
	</div>
</div>

<div aria-label="Comment on post" class="notranslate _5rpu" contenteditable="true" role="textbox" spellcheck="true" style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;">
	<div data-contents="true">
		<div class="" data-block="true" data-editor="fv4tg" data-offset-key="2ncck-0-0">
			<div data-offset-key="2ncck-0-0" class="_1mf _1mj">
				<span data-offset-key="2ncck-0-0">
					<br data-text="true">
						</span>
						</div>
						</div></div></div>