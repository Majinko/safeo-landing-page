# Safeo ID – landing page

Statická stránka (HTML + SCSS), nasadená na Vercel.

## Štruktúra

| Stránka | Súbor |
|---|---|
| `https://safeoid.sk/` (SK) | `index.html` |
| `https://safeoid.sk/en/`, `/de/` | `en/index.html`, `de/index.html` |
| Spoločné štýly a skripty | `assets/v2/` |

Starý dizajn bol odstránený 2. 11. 2026 (je v git histórii). Staré adresy `/v2/…` presmerúva `vercel.json` na `/`.
V `dataLayer` ostáva `design_version: 'v2'` kvôli porovnaniu s obdobím pred spustením.

## Build štýlov

```bash
sass --style=compressed assets/v2/styles.scss assets/v2/styles.min.css
```

Po zmene CSS/JS zvýšte `?v=` vo všetkých troch HTML (SK, EN, DE).

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

V `index.html` je v sekcii `#o-nas` zakomentovaná šablóna pre referencie a prípadové štúdie – odkomentujte ju až s reálnymi údajmi a súhlasom zákazníka.
