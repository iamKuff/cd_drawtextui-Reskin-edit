# cd_drawtextui-Edit
The update introduces a new UI design with dynamic animations and improved functionality for opening and closing the UI, creating a more engaging and visually appealing user experience.

**Video**
**__Click On Video__**


[![Video Title](https://i9.ytimg.com/vi_webp/ZSQ89qYbnA4/mq2.webp?sqp=CJT-8aUG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgZyg6MA8=&rs=AOn4CLAP972_UsBrtcrwTw6QRPpuPNlqOg)](https://www.youtube.com/watch?v=ZSQ89qYbnA4)


**Changes in CSS:**

- Added a new keyframe animation called "fadeInOut" to create a fade-in and fade-out effect with partial opacity.
- Added a new keyframe animation called "wavy" to create a wavy animation effect by rotating and translating the container.
- Added a new keyframe animation called "glowing" to create a glowing effect with box-shadow.
- Modified the styles for the #container:
- Added "display: none;" to initially hide the container.
- Changed the width to "200px" and "max-width" to "80%" to adjust the container's size.
- Added "border-radius: 20px;" for rounded corners.
- Changed the background color to "rgba(34, 34, 34, 0.8)" for a semi-transparent dark background.
- Added "box-shadow" to create a shadow effect for the container.
- Removed the "top: 50%;" and replaced it with "transform: translateY(-50%) rotate(0);" to handle vertical centering and rotation.
- Added "color: #fff;" to set the text color to white.
- Added "animation: wavy 4s ease infinite, glowing 1.5s ease infinite;" to apply the "wavy" and "glowing" animations to the container.
- Modified the styles for the #box:
- Added "padding: 10px;" to provide some padding inside the box.
- Changed the "border-radius" to "20px" to match the container's rounded corners.
- Modified the styles for #text:
- Changed the "font-size" to "14px" and added "line-height: 1.4;" for better text appearance.
- Added a new class ".greenFlash" to create a green flash effect. This class is used to add the "fadeInOut" animation for a short duration when the stash is opened.

**Changes in JavaScript:**

- Added three new variables: "stashOpen", "hideTimer", and "greenFlashTimer". These variables are used to keep track of the stash/inventory status and manage timers for hiding the UI and removing the green flash effect.
- Modified the event listener to handle "show" and "hide" actions with additional functionality:
- Clean up the incoming text content by removing any HTML tags before setting it in the UI.
- If the stash is not already open, set the container's display to "block" and add the "fadeIn" class to display the container with the "fadeIn" animation.
- If the incoming data contains "isStash" set to true, add the "greenFlash" class to trigger the green flash effect and set a timer to remove the class after 1500ms.
- Set a timer to hide the UI after 17000ms if not opening the stash.
- Added an example event handler called "receiveMessageFromFiveM" to receive messages from FiveM. This event handler dispatches the message to the existing "message" event listener for handling the "show" and "hide" actions.
- Added an event listener for the custom event "messageFromFiveM" to listen to messages coming from FiveM and call the "receiveMessageFromFiveM" function to handle the messages.

