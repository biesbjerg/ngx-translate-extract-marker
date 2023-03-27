## Mark strings for extraction using a marker function

If, for some reason, you want to extract strings not passed directly to `TranslateService`'s `get()` or `instant()` methods, you can wrap them in a custom marker function to let `ngx-translate-extract` know you want to extract them.

Install marker function:
`npm install @tonybolanyo/ngx-translate-extract-marker`

```ts
import { marker } from '@tonybolanyo/ngx-translate-extract-marker';

marker('Extract me');
```

Add the `marker` argument when running the extract script:

`ngx-translate-extract ... --marker marker`

You can alias the marker function if needed:

```ts
import { marker as _ } from '@tonybolanyo/ngx-translate-extract-marker';

_('Extract me');
```

`ngx-translate-extract ... --marker _`

## Credits

Forked from <https://github.com/biesbjerg/ngx-translate-extract-marker> and
changes from <https://github.com/Celtian/ngx-translate-extract-marker>.

All credits go for them.
