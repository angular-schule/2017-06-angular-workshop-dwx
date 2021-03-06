<img src="http://assets.angular.schule/logo-angular-power-workshop.png">
<img src="http://assets.angular.schule/DeveloperWeek2017.png" width="250" align="right">

#### **von Ferdinand Malcher & Johannes Hoppe**

<hr>

Schön, dass Du dabei bist!  
Merke dir schon einmal dieses Repository: https://github.com/angular-schule/2017-06-angular-workshop-dwx  
Damit wir gleich durchstarten können, solltest du ein paar Vorbereitungen treffen.


## Benötigte Software

1. Node.js **6.9** oder höher: [https://nodejs.org](https://nodejs.org)
2. Visual Studio Code **1.10** oder höher: [https://code.visualstudio.com](https://code.visualstudio.com)
   * [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack) für Visual Studio Code 
3. Google Chrome: [https://www.google.com/chrome/](https://www.google.com/chrome/)
4. OPTIONAL: ~~Git (und ggf. ein Client wie GitExtensions: [https://gitextensions.github.io](https://gitextensions.github.io))~~


## Pakete installieren

Alle Windows-User sollten vor Beginn des Kurses die `windows-build-tools` installieren.  
Warnungen von NPM können ignoriert werden.  
Nach der Installation musst du eine neue Konsole starten!

```
npm install -g windows-build-tools
```

Danach bitte folgenden Befehl ausführen. Warnungen von NPM können ignoriert werden. 

```
npm install -g @angular/cli@1.1.3
```

...bitte anschließend die Versionen überprüfen:

```
node -v
> Erwartet: v6.9.x oder höher

npm -v
> Erwartet: 3.x oder höher

ng -v
> Erwartet: 1.1.3

```

## Startprojekt erzeugen

Bitte lege das Übungsprojekt vor Beginn des Workshops an.  
Wechsel dazu in dein Arbeitsverzeichnis und führe aus:  

```
ng new book-rating --routing
cd book-rating
ng serve -o
```

Achtung! Die Installation kann bei langsamen Internet sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "Welcome to app!!" erscheinen!
Wenn bei allen Teilnehmern "Welcome to app!!" erscheint, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](http://assets.angular.schule/chrome_cli_welcome.png)

<img src="http://assets.angular.schule/angularjungs.jpg" height="230" align="right" style="margin-top: -120px">

### Wir freuen uns schon! :smile: 

Bei Fragen wende dich einfach direkt an das Angular-Schule Team:  
team@angular.schule

<hr>

### &copy; 2017 http://angular.schule, Stand: 26.06.2017


