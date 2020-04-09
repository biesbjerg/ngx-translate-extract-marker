## Mark strings for extraction using a marker function
If, for some reason, you want to extract strings not passed directly to `TranslateService`'s `get()` or `instant()` methods, you can wrap them in a custom marker function to let `ngx-translate-extract` know you want to extract them.

Install marker function:
`npm install @shavenzov/ngx-translate-extract-marker`

```ts
import { marker } from '@shavenzov/ngx-translate-extract-marker';

marker('Extract me');
```

Add the `marker` argument when running the extract script:

`ngx-translate-extract ... --marker marker`

You can alias the marker function if needed:

```ts
import { marker as $ } from '@shavenzov/ngx-translate-extract-marker';

$('Extract me');

//Extract string with specific content and comment to translator
$('Extract me', 'context', 'comment');
```

`ngx-translate-extract ... --marker $`
