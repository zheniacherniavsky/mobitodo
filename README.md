# Mobitodo notes

## react-intl

`$ npm run extract-msgs`

After this command, the en.json file should appear in the ./locales folder, which contains all the information about locales. But this file is not the actual translation file. Then you need to run this command:

`$ npm run compile-msgs`

This command will create a translation file, en.json, which is located here: ./src/assets/lang.