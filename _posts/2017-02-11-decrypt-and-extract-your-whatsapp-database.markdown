---
title: Decrypt and extract your whatsapp database
description: Instructions on how to extract your WhatsApp data from the stored encrypted backup.
tags: [data, social, hack]
ads: true
og_image: "posts/decrypt-and-extract-your-whatsapp-database/whatsapp-promo.jpg"
---

{% include image.html path="posts/decrypt-and-extract-your-whatsapp-database/whatsapp-promo.jpg" path-detail="posts/decrypt-and-extract-your-whatsapp-database/whatsapp-promo@2x.jpg" alt="Whatsapp" %}

{% if page.amp %}{% if page.ads %}
<amp-auto-ads type="adsense" data-ad-client="{{ site.adsense_client_id }}"></amp-auto-ads>
{% endif %}{% endif %}

Steps to get your whatsapp data in decrypted form-
<br>
1. Download the _Crypt Key Extractor_ &nbsp;from [WhatCrypt](http://whatcrypt.com/){:target="_blank" rel="noopener noreferrer"} homepage or you can download it from their [github repository](https://github.com/EliteAndroidApps/WhatsApp-Key-DB-Extractor/archive/master.zip){:target="_blank" rel="noopener noreferrer"} directly.
<br>
Prerequisites-
    1. O/S: Windows Vista, Windows 7, Windows 8, Windows 10, Mac OS X or Linux
    2. Java - If not installed: [https://www.java.com/en/download/](https://www.java.com/en/download/){:target="_blank" rel="noopener noreferrer"}
    3. ADB (Android Debug Bridge) Drivers: [_Check out my post_]({% post_url 2017-02-08-install-adb-drivers-on-your-system %}){:target="_blank"}
    4. Android device with Android 4.0 or higher.
    5. USB Debugging must be enabled on the target device.
        <br>
        `Settings` -> `Developer Options` -> (Debugging) `USB debugging`
        <br>
        If you cannot find `Developer Options` then please go to:
        <br>
        `Settings` -> `About phone/device` and tap the Build number multiple times until you’re finally declared a developer.
2. Extract `WhatsApp-Key-DB-Extractor-master.zip` maintaining the directory structure.
3. Click on `WhatsAppKeyDBExtract.bat` (Windows) or `WhatsAppKeyDBExtract.sh` (Mac OS X / Linux).
<br>Or go to the extracted folder via terminal and run the file as
<br>
`sh WhatsAppKeyDBExtract.sh`
<br>
Some things to keep in mind for this step-
    - This step uses the internet to download a legacy version of WhatsApp (2.11) to install on your phone. So make sure your PC is connected to the internet before running it.
    - Make sure there is no overlay active on your phone like `Twilight` or `Blue Light Filter`, as these will not allow you to click on `Back up my data`.
4. Connect your device via USB, change the mode from `charging` to `media`, unlock your screen and wait for `Full backup` to appear.
5. Enter your backup password or leave blank (if none set) and tap on `Back up my data`. This step takes some time depending on the size of your data. So be patient.
6. Confirm backup password in your command console and then check your `extracted` folder. You will find many files there- `axolotl.db`, `chatsettings.db`, `msgstore.db`, `wa.db`, `whatsapp.cryptkey`.
7. All these `.db` files are [__Sqlite__](https://www.sqlite.org){:target="_blank" rel="noopener noreferrer"} databases in unencrypted form. Use a database viewer like [DB Browser for SQLite](http://sqlitebrowser.org/){:target="_blank" rel="noopener noreferrer"} to see the data.



---
<br>

##### References
[WhatCrypt](http://whatcrypt.com/){:target="_blank" rel="noopener noreferrer"}
<br>
[EliteAndroidApps/WhatsApp-Key-DB-Extractor - Github](https://github.com/EliteAndroidApps/WhatsApp-Key-DB-Extractor){:target="_blank" rel="noopener noreferrer"}
<br>
[DB Browser for SQLite](http://sqlitebrowser.org/){:target="_blank" rel="noopener noreferrer"}


