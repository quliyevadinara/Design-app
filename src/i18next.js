import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        blogs: "Blogs",
        login: "Login",
        register: "Register",
        profile: "Profile",
      },
      home: {
        hometext: "Design Your Home, Your Way",
        hometext2:
          "Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.",
        button: "View more",
        projecttext: "Build Gre​at Products",
      },
      footer: {
        contactText: "Contacts",
        secondText:
          "Use our contact form for all information requests or contact us directly using the contact information below.",
        thirdText: "Feel free to get in touch with us via email or phone",
        signupText: "Sign up for the newsletter",
        secondSignupText:
          "Want to be the first to read our news? Subscribe to the newsletter to keep abreast of all events.",
        button: "Submit",
        locationText: "Our Office Location",
        secondLocationText:
          "The Interior Design Studio Company The Courtyard, ​Al Quoz 1,​ Colorado, ​ USA",
        phoneText: "Phone (Landline)",
      },
      about: {
        imageText: "475 onuncu prospekti",
        imageText2: "BIG SKY RESIDENCE",
        imageText3: "HOTEL SINGAPORE",
        imageText4: "Home Office",
        imageText5: "APARTMENT AREA",
        imageText6: "APARTMENT NEOCLASSIC",
        imageText7: "APARTMENT 34",
        imageText8: "LUXURY HOUSE",
        aboutText: "Complete Interior Design Service",
        imageText: "475 TENTH AVENUE",
        secondImageText: "Sample Headline",
      },
      login: {
        loginText: "Login",
        username: "Username",
        password: "Password",
        secondLoginText: "Create an account",
      },
      register: {
        registerText: "Register",
        email: "Email",
        secondRegText: " I am already a member",
      },
      dashboard: {
        text: "Welcome User!",
      },
      profile: {
        text: "Welcome",
        button: "Sign out",
      },
    },
  },
  az: {
    translation: {
      navbar: {
        home: "Ana Səhifə",
        about: "Haqqımızda",
        blogs: "Bloqlar",
        login: "Daxil ol",
        register: "Qetdiyyatdan Keç",
        profile: "Profil",
      },
      home: {
        hometext: "Evinizi, Yolunuzu Dizayn Edin",
        hometext2:
          "Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut tellus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.Semper auctor neque vitae tempus quam pellentesque nec nam aliquam.",
        button: "Daha çoxuna bax",
        projecttext: "Möhtəşəm Məhsullar Yaradın",
      },
      footer: {
        contactText: "Əlaqə",
        secondText:
          "Bütün məlumat sorğuları üçün əlaqə formamızdan istifadə edin və ya aşağıdakı əlaqə məlumatlarından istifadə edərək birbaşa bizimlə əlaqə saxlayın.",
        thirdText:
          "E-poçt və ya telefon vasitəsilə bizimlə əlaqə saxlamaqdan çəkinməyin",
        signupText: "Xəbər bülleteni üçün qeydiyyatdan keçin",
        secondSignupText:
          "Xəbərlərimizi ilk oxuyan olmaq istəyirsiniz? Bütün hadisələrdən xəbərdar olmaq üçün bülletenə abunə olun.",
        button: "Təqdim edin",
        locationText: "Ofis Yerimiz",
        secondLocationText:
          "İnteryer Dizayn Studiya Şirkəti The Courtyard, Al Quoz 1, Kolorado, ABŞ",
        phoneText: "Telefon (Sabit telefon)",
      },
      about: {
        aboutText: "Tam İnteryer Dizayn Xidməti",
        imageText: "475 onuncu prospekti",
        imageText2: "BÖYÜK SKY RESIDENCE",
        imageText3: "HOTEL SİNQAPUR",
        imageText4: "Ev Ofis",
        imageText5: "MƏNZİL SAHƏSİ",
        imageText6: "MƏNZİL NEOKLASSİK",
        imageText7: "MƏNZİL 34",
        imageText8: "LÜKS EV",
        secondImageText: "Sample Headline",
      },
      login: {
        loginText: "Daxil ol",
        username: "İstifadəçi adı",
        password: "Şifrə",
        secondLoginText: "Hesab yarat",
      },
      register: {
        registerText: "Qeydiyyatdan keçin",
        email: "Email",
        secondRegText: " Mən artıq üzvəm",
      },
      dashboard: {
        text: "Xoş gəlmisiniz İstifadəçi!",
      },
      profile: {
        text: "Xoş gəldiniz",
        button: "Çıxış",
      },
      dashboard: {
        text: "Istifadəçi",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fellbackLng: "az",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
