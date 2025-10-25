In the web file, the architecture is split into three main files:
index.html: The structure and content of the web page, introducing the bot's logic.
style.css: The visual presentation and design of the html.
main.js: The core application logic, including the card game simulation.

Client-Server interaction Architecture
```mermaid
flowchart LR;
A(["Discord User"])
A-->B{"Discord Server/Discord API"}
B-->C{"Our Discord bot code"}
B-->D{"Our bot server running on PC"}
```

Code architecture
```mermaid
graph TD
	A[Discord API] --> B[app.js]
	B --> C[commands.js]
	C --> D[game.js]
	D --> E[Deck.js]
	D --> F[card.js]
	B --> G[web/main.js]
	G --> H[index.html/style.css]
	D --> I[utils.js]
```