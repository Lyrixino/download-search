//API KEY for Google Custom Search
const API_KEY = 'AIzaSyB6gJMsL-eVACDGeI6ARuXSgIV5OkSPugc';
const CX = '850af4e74ea6c4076';

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const search = document.querySelector('input');
    const format = document.querySelector('select');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const query = search.value;
        const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}&num=10`;
        const response = await fetch(url);
        const data = await response.json();
        const results = data.items;

        // Create text output out of JSON with only title and link
        let output = '';
        results.forEach((result, index) => {
            output += `${index + 1}. ${result.title}\n${result.snippet}\n${result.link}\n\n`;
        });

        // Create a blob with the output
        const blob = new Blob([output], { type: 'application/octetstream' });

        // Create a link and download the blob
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `search-results-${query}.${format.value}`;
        link.click();
        URL.revokeObjectURL(link.href);
    });
});

// {
//     "kind": "customsearch#search",
//     "url": {
//         "type": "application/json",
//         "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
//     },
//     "queries": {
//         "request": [
//             {
//                 "title": "Google Custom Search - auto",
//                 "totalResults": "12170000000",
//                 "searchTerms": "auto",
//                 "count": 10,
//                 "startIndex": 1,
//                 "inputEncoding": "utf8",
//                 "outputEncoding": "utf8",
//                 "safe": "off",
//                 "cx": "850af4e74ea6c4076"
//             }
//         ],
//         "nextPage": [
//             {
//                 "title": "Google Custom Search - auto",
//                 "totalResults": "12170000000",
//                 "searchTerms": "auto",
//                 "count": 10,
//                 "startIndex": 11,
//                 "inputEncoding": "utf8",
//                 "outputEncoding": "utf8",
//                 "safe": "off",
//                 "cx": "850af4e74ea6c4076"
//             }
//         ]
//     },
//     "context": {
//         "title": "download-search"
//     },
//     "searchInformation": {
//         "searchTime": 0.484116,
//         "formattedSearchTime": "0.48",
//         "totalResults": "12170000000",
//         "formattedTotalResults": "12,170,000,000"
//     },
//     "items": [
//         {
//             "kind": "customsearch#result",
//             "title": "Auto Definition & Meaning - Merriam-Webster",
//             "htmlTitle": "<b>Auto</b> Definition &amp; Meaning - Merriam-Webster",
//             "link": "https://www.merriam-webster.com/dictionary/auto",
//             "displayLink": "www.merriam-webster.com",
//             "snippet": "Jun 15, 2024 ... The meaning of AUTO is automobile. How to use auto in a sentence.",
//             "htmlSnippet": "Jun 15, 2024 <b>...</b> The meaning of <b>AUTO</b> is automobile. How to use <b>auto</b> in a sentence.",
//             "formattedUrl": "https://www.merriam-webster.com/dictionary/auto",
//             "htmlFormattedUrl": "https://www.merriam-webster.com/dictionary/<b>auto</b>",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKksTSKYwpW8It403nrjw5t1_a8pLO2PI6ImEG7uvFrNfacgiziPZgG-_O&s",
//                         "width": "225",
//                         "height": "225"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "msapplication-tilecolor": "#2b5797",
//                         "og:image": "https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png",
//                         "twitter:title": "Definition of AUTO",
//                         "twitter:card": "summary",
//                         "theme-color": "#ffffff",
//                         "twitter:url": "https://www.merriam-webster.com/dictionary/auto",
//                         "og:title": "Definition of AUTO",
//                         "twitter:aria-text": "Share the Definition of auto on Twitter",
//                         "og:aria-text": "Post the Definition of auto to Facebook",
//                         "og:description": "automobile… See the full definition",
//                         "twitter:image": "https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png",
//                         "referrer": "unsafe-url",
//                         "fb:app_id": "178450008855735",
//                         "twitter:site": "@MerriamWebster",
//                         "viewport": "width=device-width, initial-scale=1.0",
//                         "twitter:description": "automobile… See the full definition",
//                         "og:url": "https://www.merriam-webster.com/dictionary/auto"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Auto Parts at AutoZone - Batteries, Brakes, Accessories, and More",
//             "htmlTitle": "<b>Auto</b> Parts at AutoZone - Batteries, Brakes, Accessories, and More",
//             "link": "https://www.autozone.com/",
//             "displayLink": "www.autozone.com",
//             "snippet": "Shop top-quality auto parts at AutoZone. Your go-to source for car and truck parts, DIY repair advice, and Free Next Day Delivery.",
//             "htmlSnippet": "Shop top-quality <b>auto</b> parts at AutoZone. Your go-to source for car and truck parts, DIY repair advice, and Free Next Day Delivery.",
//             "formattedUrl": "https://www.autozone.com/",
//             "htmlFormattedUrl": "https://www.<b>auto</b>zone.com/",
//             "pagemap": {
//                 "metatags": [
//                     {
//                         "msapplication-tilecolor": "#da532c",
//                         "next-head-count": "15",
//                         "theme-color": "#ffffff",
//                         "og:site_name": "AutoZone.com",
//                         "viewport": "width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0",
//                         "msvalidate.01": "C7DDB6FC1019065BBB00BBF38C6A1580",
//                         "og:title": "Auto Parts at AutoZone - Batteries, Brakes, Accessories, and More",
//                         "msapplication-tileimage": "/mstile.png"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Android Auto | Android",
//             "htmlTitle": "Android <b>Auto</b> | Android",
//             "link": "https://www.android.com/auto/",
//             "displayLink": "www.android.com",
//             "snippet": "1. Step 1. Check your car. Make sure your car or aftermarket stereo is compatible with Android Auto. Check compatibility · 2. Step 2. Check your phone. If you ...",
//             "htmlSnippet": "1. Step 1. Check your car. Make sure your car or aftermarket stereo is compatible with Android <b>Auto</b>. Check compatibility &middot; 2. Step 2. Check your phone. If you&nbsp;...",
//             "formattedUrl": "https://www.android.com/auto/",
//             "htmlFormattedUrl": "https://www.android.com/<b>auto</b>/",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GqSy1B1ymR3tIbxWv3WFDu9sKM7jldAVRFLGb2T1JYpwDKIc5_aVgno&s",
//                         "width": "310",
//                         "height": "163"
//                     }
//                 ],
//                 "howtodirection": [
//                     {
//                         "text": "Make sure your car or aftermarket stereo is compatible with Android Auto."
//                     },
//                     {
//                         "text": "If you have Android 9 or below, get the Android Auto app on your phone. With Android 10, Android Auto is built in—so you don’t need the app to get started."
//                     },
//                     {
//                         "text": "Connect your phone to your car with a USB cable and see Android Auto on your car display. Some phones and cars can connect wirelessly - check this compatible phone list, and check with your..."
//                     }
//                 ],
//                 "howto": [
//                     {
//                         "name": "How to use Android Auto."
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "og:image": "https://lh3.googleusercontent.com/VZL-y73NTiWY1zGp4mOdWZ1Q993uN3BhbhdvXs4See0tcmRc0xSU1ccvjb0BT-0wo8h_E4W7rIZflZy2U3sSaOVgsJz00Iy5MRR4q1fh830eEipmin0",
//                         "og:type": "website",
//                         "twitter:card": "summary_large_image",
//                         "og:site_name": "Android",
//                         "twitter:site": "@android",
//                         "viewport": "initial-scale=1, minimum-scale=1, width=device-width",
//                         "og:title": "Android Auto | Android",
//                         "og:locale": "en_US",
//                         "og:url": "https://www.android.com/auto/",
//                         "title": "Android Auto | Android",
//                         "og:description": "Experience the best features of your Android device when driving with Android Auto. Just tap your car display or get hands-free help with your Google Assistant. So you can focus on the road."
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://lh3.googleusercontent.com/VZL-y73NTiWY1zGp4mOdWZ1Q993uN3BhbhdvXs4See0tcmRc0xSU1ccvjb0BT-0wo8h_E4W7rIZflZy2U3sSaOVgsJz00Iy5MRR4q1fh830eEipmin0"
//                     }
//                 ],
//                 "howtostep": [
//                     {
//                         "name": "Check your car.",
//                         "position": "1"
//                     },
//                     {
//                         "name": "Check your phone.",
//                         "position": "2"
//                     },
//                     {
//                         "name": "Connect and go.",
//                         "position": "3"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Autotrader: Cars for Sale - Used Cars, New Cars, SUVs, and Trucks",
//             "htmlTitle": "Autotrader: Cars for Sale - Used Cars, New Cars, SUVs, and Trucks",
//             "link": "https://www.autotrader.com/",
//             "displayLink": "www.autotrader.com",
//             "snippet": "Used Cars with Android Auto · Best Used Truck Deals · Best Deals on Electric Vehicles · Best New Car Deals · Cheap Trucks for Sale · Cars Under $10,000 · Cheap ...",
//             "htmlSnippet": "Used Cars with Android <b>Auto</b> &middot; Best Used Truck Deals &middot; Best Deals on Electric Vehicles &middot; Best New Car Deals &middot; Cheap Trucks for Sale &middot; Cars Under $10,000 &middot; Cheap&nbsp;...",
//             "formattedUrl": "https://www.autotrader.com/",
//             "htmlFormattedUrl": "https://www.<b>auto</b>trader.com/",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9Le4XwQz-c5P7l1Dwaesp1RCwFHrRF9tR08TCwAQZAvkzAv-5CjSxYA&s",
//                         "width": "200",
//                         "height": "251"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "og:image": "//content.autotrader.com/content/dam/autotrader/collections/collections-og-image.png",
//                         "og:type": "website",
//                         "og:site_name": "Autotrader",
//                         "viewport": "width=device-width, initial-scale=1",
//                         "og:title": "Cars for Sale - Used Cars, New Cars, SUVs, and Trucks - Autotrader",
//                         "og:url": "https://www.autotrader.com/",
//                         "og:description": "Explore new and used cars, trucks and SUVs with confidence. Autotrader is the one-stop shop for everything you need in your car buying experience including expert advice, instant cash offers, an affordability calculator, and quality car news and reviews."
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://www.kbb.com/cs-camp/wp-content/uploads/2024/06/SH_OEM_MY24_GMC_AcadiaDenali_Lifestyle_375x470_AT_v2.png"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Auto-Owners Insurance: Home",
//             "htmlTitle": "<b>Auto</b>-Owners Insurance: Home",
//             "link": "https://www.auto-owners.com/",
//             "displayLink": "www.auto-owners.com",
//             "snippet": "Auto-Owners Insurance is among the top insurance providers in the U.S., offering a wide variety of discounts and coverages to meet your needs.",
//             "htmlSnippet": "<b>Auto</b>-Owners Insurance is among the top insurance providers in the U.S., offering a wide variety of discounts and coverages to meet your needs.",
//             "formattedUrl": "https://www.auto-owners.com/",
//             "htmlFormattedUrl": "https://www.<b>auto</b>-owners.com/",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEogrRe8jEKzN7SoWFSMgJ1Anjts_uobkdvcFAB9JJp1hRbLBbZKoVLzA&s",
//                         "width": "225",
//                         "height": "225"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "og:image": "https://www.aoins.com/aoenv/public/aocms/808631/A-O_Social_Media_Share_Compressed.jpg",
//                         "viewport": "initial-scale=1.0, width=device-width"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://www.auto-owners.com/documents/36532/40052/life.png.svg/c19e279e-a6ed-7ab1-abd5-5dc419137d0d?t=1631736337771"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Investors Overview | Li Auto Inc.",
//             "htmlTitle": "Investors Overview | Li <b>Auto</b> Inc.",
//             "link": "https://ir.lixiang.com/",
//             "displayLink": "ir.lixiang.com",
//             "snippet": "Li Auto Inc. is a leader in China's new energy vehicle market. The Company designs, develops, manufactures, and sells premium smart electric vehicles. Its ...",
//             "htmlSnippet": "Li <b>Auto</b> Inc. is a leader in China&#39;s new energy vehicle market. The Company designs, develops, manufactures, and sells premium smart electric vehicles. Its&nbsp;...",
//             "formattedUrl": "https://ir.lixiang.com/",
//             "htmlFormattedUrl": "https://ir.lixiang.com/",
//             "pagemap": {
//                 "metatags": [
//                     {
//                         "referrer": "no-referrer",
//                         "og:type": "website",
//                         "og:site_name": "Li Auto Inc.",
//                         "handheldfriendly": "true",
//                         "viewport": "width=device-width, initial-scale=1.0",
//                         "og:title": "Investors Overview | Li Auto Inc.",
//                         "mobileoptimized": "width",
//                         "og:url": "https://ir.lixiang.com/investors",
//                         "og:description": "The Investor Relations website contains information about Li Auto Inc.'s business for stockholders, potential investors, and financial analysts."
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Auto-Align: The Automatic Phase Alignment Plug-in | Sound Radix",
//             "htmlTitle": "<b>Auto</b>-Align: The Automatic Phase Alignment Plug-in | Sound Radix",
//             "link": "https://www.soundradix.com/products/auto-align/",
//             "displayLink": "www.soundradix.com",
//             "snippet": "Auto-Align 2 takes your audio to the next level with its cutting-edge algorithm. This feature automatically detects and corrects time and phase issues between ...",
//             "htmlSnippet": "<b>Auto</b>-Align 2 takes your audio to the next level with its cutting-edge algorithm. This feature automatically detects and corrects time and phase issues between&nbsp;...",
//             "formattedUrl": "https://www.soundradix.com/products/auto-align/",
//             "htmlFormattedUrl": "https://www.soundradix.com/products/<b>auto</b>-align/",
//             "pagemap": {
//                 "offer": [
//                     {
//                         "pricecurrency": "USD",
//                         "acceptedpaymentmethod": "http://purl.org/goodrelations/v1#PayPal",
//                         "price": "199",
//                         "availability": "http://schema.org/InStock"
//                     }
//                 ],
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdEXBuR74TlQvq-JseSqpJobwRFiL5HUQpt4J3azrR4UCi_U9F2NbtYNY&s",
//                         "width": "321",
//                         "height": "157"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "msapplication-tilecolor": "#333333",
//                         "og:image": "https://ik.imagekit.io/soundradix/backend-production/AA2.2_Screenshot_fzVcsQ7.png",
//                         "theme-color": "#333333",
//                         "twitter:card": "summary_large_image",
//                         "twitter:title": "Auto-Align: The Automatic Phase Alignment Plug-in | Sound Radix",
//                         "viewport": "width=device-width, initial-scale=1.0",
//                         "twitter:description": "Take the guesswork out of phase alignment. Auto-Align is an automatic microphone alignment and phase correction audio plug-in. Download a free trial.",
//                         "og:title": "Auto-Align: The Automatic Phase Alignment Plug-in | Sound Radix",
//                         "og:url": "https://www.soundradix.com/products/auto-align/",
//                         "og:description": "Take the guesswork out of phase alignment. Auto-Align is an automatic microphone alignment and phase correction audio plug-in. Download a free trial.",
//                         "twitter:image": "https://ik.imagekit.io/soundradix/backend-production/AA2.2_Screenshot_fzVcsQ7.png"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://ik.imagekit.io/soundradix/backend-production/AA2.2_Screenshot_fzVcsQ7.png"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Home | Automobile Industry Analysis & Advocacy | Auto Care",
//             "htmlTitle": "Home | Automobile Industry Analysis &amp; Advocacy | <b>Auto</b> Care",
//             "link": "https://www.autocare.org/",
//             "displayLink": "www.autocare.org",
//             "snippet": "The auto care industry keeps vehicles moving, and the Auto Care Association is dedicated to helping every one of those vehicles last longer, perform more ...",
//             "htmlSnippet": "The <b>auto</b> care industry keeps vehicles moving, and the <b>Auto</b> Care Association is dedicated to helping every one of those vehicles last longer, perform more&nbsp;...",
//             "formattedUrl": "https://www.autocare.org/",
//             "htmlFormattedUrl": "https://www.<b>auto</b>care.org/",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1W31-7hC2gCLCs_Z_tXO9Fd9hfOmwRwSj4H2O9D5hbq5loIdNC1NwBsV&s",
//                         "width": "318",
//                         "height": "159"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "og:image": "https://www.autocare.org/images/default-source/logos/autocare-logo.jpg?sfvrsn=a42fcf3d_4",
//                         "og:type": "website",
//                         "og:site_name": "Auto Care",
//                         "viewport": "width=device-width, initial-scale=1",
//                         "og:title": "Auto Care Association - Automobile Industry Analysis & Advocacy",
//                         "og:url": "https://www.autocare.org",
//                         "og:description": "Independence drives us: our global member companies manufacture, distribute, and sell vehicle parts and components as well as perform services, maintenance, and repairs on every class of vehicle on the road."
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://www.autocare.org/images/default-source/logos/autocare-logo.jpg?sfvrsn=a42fcf3d_4"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Android Auto - Apps on Google Play",
//             "htmlTitle": "Android <b>Auto</b> - Apps on Google Play",
//             "link": "https://play.google.com/store/apps/details?id=com.google.android.projection.gearhead&hl=en_US",
//             "displayLink": "play.google.com",
//             "snippet": "To use Android Auto, you'll need a phone running Android 6.0 or higher and an active data connection. Over 400 car models now support Android Auto! To find out ...",
//             "htmlSnippet": "To use Android <b>Auto</b>, you&#39;ll need a phone running Android 6.0 or higher and an active data connection. Over 400 car models now support Android <b>Auto</b>! To find out&nbsp;...",
//             "formattedUrl": "https://play.google.com/store/apps/details?id=com.google.android...",
//             "htmlFormattedUrl": "https://play.google.com/store/apps/details?id=com.google.android...",
//             "pagemap": {
//                 "offer": [
//                     {
//                         "price": "0",
//                         "url": "https://play.google.com/store/apps/details?id=com.google.android.projection.gearhead&rdid=com.google.android.projection.gearhead&feature=md&offerId"
//                     }
//                 ],
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtg5qWhrv2t9PfrD1et1QSZWSz7dTMMbdnhAfp7VHOoFNEqARSBzQFQWIn&s",
//                         "width": "225",
//                         "height": "225"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "og:image": "https://play-lh.googleusercontent.com/drnkC46hMwqPTdRLLLufhKgy_dRhA7uNTN14-tq2NxtI3deDakYOAR_4zeHcqbGg4Q",
//                         "og:type": "website",
//                         "twitter:card": "summary_large_image",
//                         "twitter:title": "Android Auto - Apps on Google Play",
//                         "twitter:url": "https://play.google.com/store/apps/details?id=com.google.android.projection.gearhead&hl=en_US",
//                         "appstore:developer_url": "http://www.android.com/auto",
//                         "og:title": "Android Auto - Apps on Google Play",
//                         "twitter:image": "https://play-lh.googleusercontent.com/drnkC46hMwqPTdRLLLufhKgy_dRhA7uNTN14-tq2NxtI3deDakYOAR_4zeHcqbGg4Q=w600-h300-pc0xffffff-pd",
//                         "appstore:bundle_id": "com.google.android.projection.gearhead",
//                         "referrer": "origin",
//                         "twitter:site": "@GooglePlay",
//                         "appstore:store_id": "com.google.android.projection.gearhead",
//                         "viewport": "width=device-width, initial-scale=1",
//                         "apple-mobile-web-app-capable": "yes",
//                         "twitter:description": "Control maps, media and messaging, with the Google Assistant while you drive",
//                         "mobile-web-app-capable": "yes",
//                         "og:url": "https://play.google.com/store/apps/details?id=com.google.android.projection.gearhead&hl=en_US"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://play-lh.googleusercontent.com/drnkC46hMwqPTdRLLLufhKgy_dRhA7uNTN14-tq2NxtI3deDakYOAR_4zeHcqbGg4Q"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Autometer: Home",
//             "htmlTitle": "Autometer: Home",
//             "link": "https://www.autometer.com/",
//             "displayLink": "www.autometer.com",
//             "snippet": "Gauges by. Auto Meter. Seamlessly plug-n-play from your FiTech EFI or Trans Controller system directly into AutoMeter CAN gauges. Now ...",
//             "htmlSnippet": "Gauges by. <b>Auto</b> Meter. Seamlessly plug-n-play from your FiTech EFI or Trans Controller system directly into AutoMeter CAN gauges. Now&nbsp;...",
//             "formattedUrl": "https://www.autometer.com/",
//             "htmlFormattedUrl": "https://www.<b>auto</b>meter.com/",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ELs-HBE0x9nSP7oXtolnUvL20i0vDVhtguJ04T8HPfD_2nZOO2ITXw&s",
//                         "width": "204",
//                         "height": "81"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "og:type": "website",
//                         "twitter:card": "summary_large_image",
//                         "og:site_name": "Autometer",
//                         "article:modified_time": "2024-06-22T05:25:39+00:00",
//                         "viewport": "width=device-width, initial-scale=1",
//                         "og:title": "Home - Autometer",
//                         "og:locale": "en_US",
//                         "og:url": "https://www.autometer.com/",
//                         "msapplication-tileimage": "https://www.autometer.com/wp/content/uploads/2020/04/favicon.ico"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://www.autometer.com/wp/content/themes/asap_s/assets/images/custom-shop.png"
//                     }
//                 ]
//             }
//         }
//     ]
// }