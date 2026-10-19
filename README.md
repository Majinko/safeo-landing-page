# Safeo ID – landing page

Statická stránka (`index.html` + SCSS), nasadená na Vercel.

## Build štýlov

```bash
sass assets/styles.scss assets/dist/styles.css
sass --style=compressed assets/styles.scss assets/dist/styles.min.css
```

Stránka načítava `assets/dist/styles.min.css`. Po zmene CSS/JS zvýšte `?v=` v `index.html`.

## Meranie konverzií (GTM `GTM-PTM7WQD6`)

`assets/app.js` posiela do `dataLayer` tieto udalosti. V GTM stačí trigger typu **Custom Event** a GA4 event tag.

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

V sekcii `#o-nas` je zakomentovaná šablóna pre referencie a prípadové štúdie – odkomentujte ju až s reálnymi údajmi a súhlasom zákazníka.
