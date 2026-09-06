# Photos

img/car/        web copies of the Vellfire (used on index.html)
img/customers/  customer handover photos, faces pixelated, web size

Originals (img/VF *.jpeg and img/Customer Photo/) are git-ignored and never published.
To add a new customer photo: drop it in img/Customer Photo/ and ask Claude to re-run the blur script.

Number plates: painted flat black on the published copies by tools/plates.py (coordinates per file inside the script). After re-running tools/blur.py, run `python tools/plates.py apply` again.
