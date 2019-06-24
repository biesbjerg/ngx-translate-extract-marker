## Mark strings for extraction using a marker function
If, for some reason, you want to extract strings not passed directly to `TranslateService`'s `get()` or `instant()` methods, you can wrap them in a custom marker function to let `ngx-translate-extract` know you want to extract them.

Install marker function:
`npm install @biesbjerg/ngx-translate-extract-marker`

```ts
import { extract } from '@biesbjerg/ngx-translate-extract-marker';

extract('Extract me');
```

Add the `marker` argument when running the extract script:

`ngx-translate-extract ... -m extract`

You can alias the marker function if needed:

```ts
import { extract as _ } from '@biesbjerg/ngx-translate-extract-marker';

_('Extract me');
```

`ngx-translate-extract ... -m _`
