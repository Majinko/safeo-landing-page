# Safeo ID – landing page

Statická stránka (HTML + SCSS), nasadená na Vercel.

## Dve verzie dizajnu

| Verzia | URL | Súbory |
|---|---|---|
| Pôvodný dizajn (predvolený) | `https://safeoid.sk/` | `index.html`, `assets/app.js`, `assets/styles.scss` → `assets/dist/` |
| Nový dizajn (test) | `https://safeoid.sk/?redizajn` → `/v2/` | `v2/index.html`, `assets/v2/` |

`/?redizajn` presmeruje na `/v2/` (redirect vo `vercel.json`, záložne JS v `index.html`).
Nová verzia má `noindex`, aby ju Google neindexoval ako duplicitu. Obe verzie posielajú do `dataLayer`
`design_version` (`v1` / `v2`), takže konverzie sa dajú v GA4 porovnať.

**Spustenie nového dizajnu naostro:** skopírovať `v2/index.html` do `index.html`, zmeniť cesty
`/assets/v2/…` podľa potreby, nastaviť `robots` na `index,follow` a odstrániť redirect z `vercel.json`.
Celý redizajn je aj v branchi `redesign-landing`.

## Build štýlov

```bash
# pôvodný dizajn
sass assets/styles.scss assets/dist/styles.css
# nový dizajn
sass --style=compressed assets/v2/styles.scss assets/v2/styles.min.css
```

Po zmene CSS/JS zvýšte `?v=` v príslušnom HTML.

## Meranie konverzií (GTM `GTM-PTM7WQD6`)

Nový dizajn (`assets/v2/app.js`) posiela do `dataLayer` tieto udalosti. V GTM stačí trigger typu **Custom Event** a GA4 event tag.

| Udalosť | Kedy | Parametre |
|---|---|---|
| `cta_click` | klik na „Vyskúšať“ / „Mám záujem…“ | `cta_location`, `cta_text`, `plan` |
| `login_click` | klik na „Prihlásiť sa“ (app.safeoid.sk) | `cta_location` |
| `phone_click` | klik na telefónne číslo | `cta_location` |
| `how_step_view` | prepnutie kroku v „Ako to funguje“ | `step` |
| `video_play`, `video_complete` | promo video | `video_title` |
| `form_start` | prvá interakcia s formulárom | `form_id` |
| `generate_lead` | úspešné odoslanie formulára (**hlavná konverzia**) | `form_id`, `lead_type` |
| `form_error` | chyba pri odosielaní | `form_id`, `error` |

Odporúčaný lievik v GA4: `page_view` → `cta_click` → `form_start` → `generate_lead`.
Pri kliknutí na balík v cenníku sa do skrytého poľa `message` doplní „Záujem o Safeo ID – balík …“.

## Referencie

V novom dizajne (`v2/index.html`) je v sekcii `#o-nas` je zakomentovaná šablóna pre referencie a prípadové štúdie – odkomentujte ju až s reálnymi údajmi a súhlasom zákazníka.
