## Features

- Zweck der App ist, Geschenkideen zu bekommen nachdem man einige Informationen über eine Person eingibt.
- In der Startseite ist zunächst ein button zu sehen der den Vorgang startet in dem der User befragt wird.
  Also in welcher Beziehung steht der User zur Person, wie alt ist die Person, männlich oder weiblich, Interessen, aktuelle Lage usw.
- Der User kann die Fragen beantworten, überspringen oder den ganzen Prozess jederzeit beenden.
- Am Ende bekommt der User Geschenke mit Bildern, infos und ein Amazon Buy Link vorgeschlagen. Bedeutet du musst die API von OpenAI mit einer Amazon API oder ähnlicher kombinieren
- OpenAI gibt dir die Vorschläge, also die Geschenke, und du musst dann mit der Amazon API nach den Vorschlägen suchen bzw. Daten über die Geschenke/Produkte bekommen.

## Logic/Tech

- Es wird über eine Array gerendert und für jede Frage eine Komponente gerendert
- Jede Komponente enthält die Frage, ein input feld und weitere infos
- Ein state in einem global context sammelt alle inputs und macht daraus einen finalen string der an ein endpoint geschickt wird.
- Ein Server handelt diesen endpoint und macht einen fetch call an die OpenAI API und vielleicht auch an eine Amazon Products Api und sendet die response an das frontend zurück.
- Darin sind informationen zu den Gift recommendations enthalten (bild, preis, titel usw.)
- Das frontend iteriert über die response und rendert Komponenten mit all den Informationen
- Ein weiterer state trackt die aktuelle frage die der User vor sicht hat.

## Designs
