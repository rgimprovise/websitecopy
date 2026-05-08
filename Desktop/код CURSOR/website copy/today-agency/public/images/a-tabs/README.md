# A-TABS — скриншоты для страницы /a-tabs/

Сюда нужно положить 6 PNG (или JPG, если переименуете расширения вместе со
ссылками в `src/lib/atabs.ts`) с такими именами:

| Файл | Подпись на странице | Что на скриншоте |
| --- | --- | --- |
| `easy-saving.png` | Easy saving your tabs into clean collections | рабочий стол «Личное», группы BASIS / AI & TOOLS, надпись «EASY SAVING YOUR TABS INTO CLEAN COLLECTIONS» |
| `smart-search.png` | Smart search by your saved tabs | поиск «git» в шапке, найден GitHub, надпись «SMART SEARCH» |
| `group-links.png` | Group links by project, topic, or task | открыта группа Google со вложенными вкладками gmail / drive / docs, надпись «GROUP LINKS BY PROJECT, TOPIC, OR TASK» |
| `local-storage.png` | Local storage — no account required | панель «Открытые вкладки» сбоку, контент рабочего стола приглушён, надпись «LOCAL STORAGE — NO ACCOUNT REQUIRED» |
| `reusable-workspace.png` | Turn open tabs into a reusable workspace | панель Spaces с рабочими столами «Личное» / «Склад», надпись «TURN OPEN TABS INTO A REUSABLE WORKSPACE» |
| `marquee-tile.png` | A-TABS — local links organizer with mobile icons | промо-плитка A-TABS: логотип, заголовок «A-TABS LOCAL LINKS ORGANIZER WITH MOBILE ICONS», подпись «SAVE TABS / REDUCE CLUTTER / STAY FOCUSED» |

После того, как все 6 файлов окажутся в этой папке:

```bash
cd '~/Desktop/код CURSOR/website copy/today-agency'
npm run build
```

Файлы попадут в статический экспорт по адресам:

- https://alarcev.n8nrgimprovise.space/images/a-tabs/easy-saving.png
- https://alarcev.n8nrgimprovise.space/images/a-tabs/smart-search.png
- https://alarcev.n8nrgimprovise.space/images/a-tabs/group-links.png
- https://alarcev.n8nrgimprovise.space/images/a-tabs/local-storage.png
- https://alarcev.n8nrgimprovise.space/images/a-tabs/reusable-workspace.png
- https://alarcev.n8nrgimprovise.space/images/a-tabs/marquee-tile.png

Если захотите переименовать файлы или поменять подписи — это делается в одном месте:
`src/lib/atabs.ts`, поле `slides`.
