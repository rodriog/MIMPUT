# MIMPUT
Peach Untold Tale

PLEASE READ!!!
For now, the files are related to XML (i18n), that is, translation of the game assets.
- ENGLISH already done! Its here in case people want to improve it. The game already has ENGLISH as default inside the engine. 
- RUSSIAN: 1%
- GERMAN: 2%
- SPANISH: 4%
- FRENCH : 12%
- PORTUGUESE (EUROPE): 80% (precisa ser adaptado do brasileiro)
- PORTUGUESE (BR): 100%
- (put your XML language here): 0%

upcomming website:
[here](https://ivanaedler.github.io/MIMPUT/)

Version 0.5! This work was one of the BIGGEST of the game! You can finally translate it! We surely should be proud of this control! But due to Mario and other fonts, characters like 'ã¡¢ à¡§' are not supported! 

Although too early, it already covers up 99% of the game (more than 5,000 lines!), and ALL creature scenes (well, perhaps some exceptions might appear)! Certain screens, scene names in the gallery and buttons are NOT in the XML yet.
UPDATE: DESCRIPTION (tale) texts of the achievements and diary items ARE now in the XML!

=> You are encouraged to make pull requests of updated files you are translating!

=> You are also encounraged to test your changes in the game! You just click in CHANGE LANGUAGE, then put your XML and check if the text you changed is aligned well (not cutted out) in the screens,  dialogues, etc.

- NEW! ACCENTS (tilde, acute, grave...) for French, Portuguese, German, and Cyrilic (Russian) characters is now supported!
- Version 0.5! This work was one of the BIGGEST of the game! You can finally translate it! We surely should be proud of this control! 
- Although too early, it already covers up 99% of the game (more than 5,000 lines!), and ALL creature scenes (well, perhaps some exceptions might appear)! Certain screens, scene names in the gallery are NOT in the XML yet.
- You should use a good XML editor. Notepad++ is great because it will be colored differently, easing your work.
- You DONT need to translate text inside <!-  ->
- Please BE CAREFUL about not closing tags or other misses. Incomplete or errors in XML will give a'XML load error' message or give unexpected behavior in the game!
- Its not possible to change some text, like Princess and Creature names (e.g. if you want to call Peach as 'Pêssego' or Goomba as 'Gumpa', you won\'t be able to do so). This is due to XML and the game limitations. If I figure it out in the future, I can implement it.
- \\u or \u is UNICODE character. THIS IS NOT SUPPORTED here. Just paste the character directly like the 'heart' icon! Dont use other 'strange'/'not so used' UTF8 chars because it might NOT appear in Mario font!
- Please translate observing the placement of \n. Its the line breaker. I use them many times just to adjust (centralize) text better. If you translate a given phrase and you see the text is trespassing the balloon, you can force its break by adding a \n. Dont use &lt;br&gt;/!
You can live without \n, but certain balloons will be 'very empty' without them, or the first line might trespass it a bit because of the curve of the balloon.
- I use 'loop="1a", "1b"', etc (that is, variations) to give ALTERNATIVE words according to the logic inside the scene, like if Peach is a nymph or if her...asshole is swollen.
- There are scenes with same messages. This can occur. You can also make them different, if you want more variety.
- Please DONT change variables (those inside { } ), or the game will malfunction!
- If any errors (or something in the game that doesn't have a tag here to be able to translate, or a text that trespasses buttons/boundaries), please contact me on Legend of Krystal site (ivanaedler). 

Thank you!
