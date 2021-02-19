const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

const storageType = cookieStorage;
const consentName = "cookieConsent";

/*
Hvis navnet ikke eksisterer skal den visen en popup,
ellers skal den ikke gore noget
 */
const shouldShowPopUp = () => !storageType.getItem(consentName);
/*
"Function" til at gemme navnet og om brugen gav en lov til at bruge cookies
sa nar man kalder saveToStorages saetter den navn og true.
 */
const saveToStorages = () => storageType.setItem(consentName, "true");

window.onload = () => {
    //Hvis shouldShowPopUp kore vil den vise dig denne del af koden
    if(shouldShowPopUp()){
        const  consent = confirm('We use cookies to remember your user settings and to remember what you have search for, if you don\'t won\'t to enable cookies, hit Disable cookies?');
        //hvis der bliver givet consent klader den saveToStorages som sa gemmer den i localStorages, men hvis brugen siger nej er det = false
        if(consent){
            saveToStorages();
        }else{
            storageType.setItem(consentName, "false");
            $("#dark").remove();
            $("#historyButton").remove();
        }
    }
}
