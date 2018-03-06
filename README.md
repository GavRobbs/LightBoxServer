# LightBoxServer
A node/express server for the LightBox app. Check out my blog at www.gavinrobinson.net.

A simple express server which can be uploaded to heroku or another hosting service to communicate with the LightBoxApp. It returns responses as plaintext instead of JSON because my sketch was getting too big to add ArduinoJSON. 

It's fairly straightforward, the only exception being the use of the cors module, as the Ionic hybrid app won't connect without it.
