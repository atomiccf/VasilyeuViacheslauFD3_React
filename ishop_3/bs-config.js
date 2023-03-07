// lite-server под капотом использует BrowserSync
// отключаем по-максимуму любые авто-освежения
// т.к. страница будет освежаться и когда проект ещё не собран
// освежать страницу будем сами
module.exports = {
    "notify": false, // не показывать в браузере чёрное окошко BrowserSync
    "ui": false, // не открывать отдельный порт для управления BrowserSync
    "files": "*.none",// следить за изменением таких файлов, то есть никаких
    "browser": "chrome"
};
