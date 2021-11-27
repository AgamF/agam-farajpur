let isTranslated=false;
let buttonContainer=document.querySelector("button-container");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let translateButton=document.getElementById("button1");
let contactButton=document.getElementById("button2");
let vidEditingParagraph=document.getElementById("vidEditingParagraph");
let aboutMeParagraph=document.getElementById("aboutMeParagraph");
let aboutMeTitle=document.getElementById("aboutMeTitle");
let home=document.getElementById("home");
let drawing=document.getElementById("drawingParagraph");
let expertiseParagraph=document.getElementById("expertiseParagraph");
let emailLable=document.getElementById("email");
let phonenumberLable=document.getElementById("phonenumber");
let mainContainer=document.getElementById("main");
let emailSubmitButton=document.getElementById("email-submit");
const translation=()=>{
    if(isTranslated === false){
        h1.innerHTML="אגם פרג'פור";
        h3.innerHTML=".אני מפתח ומעצב אתרי אינטרנט בן 17";
        vidEditingParagraph.innerHTML="יש לי ניסיון בעריכת וידאו עם Priemere Pro, נהגתי לערוך בעיקר מונטאז'ים של משחקי וידאו, בעיקר כששיחקתי. כשסיימתי לערוך, העליתי כל עריכה לערוץ היוטיוב שלי ולעתים קרובות הצגתי אותה בפני החברים והמשפחה שלי.";
        aboutMeParagraph.innerHTML="היי! שמי אגם ואני אוהב מחשבים. אני בן 17 ואני גר בישראל. בזמני הפנוי אני מתעסק ביצירת דפי אינטרנט אינטראקטיביים ויישומי קוד ותוכניות. רמת ההשכלה הנוכחית שלי היא בתיכון, אני לומד עיתונאות ופילוסופיה יהודית בנוסף לניצול הזמן הפנוי שלי לקוד!";
        aboutMeTitle.innerHTML="קצת עליי";
        home.innerHTML="בית";
        about.innerHTML="קצת עליי";
        relevant.innerHTML="פרויקטים רלוונטיים";
        expert.innerHTML="מומחיות";
        drawing.innerHTML="אני גם מצייר מדי פעם. בעיקר אנימה ודמויות בדיוניות שאני אוהב. למעשה, כל הקיר שלי שנמצא בחדר שלי מכוסה בציורים יפים";
        expertiseParagraph.innerHTML="אני שולט בכמעט 4 שפות מחשב ותכנות, כמו Javascript, Python, HTML ו-CSS. אני יודע להפעיל כמה טכנולוגיות אחרות כמו Git bash, node.js ו-react.js אני מכיר ספריות פיתוח אתרים כמו Bootstrap ו-Jquery, וסביבות פיתוח משולבות כמו Visual studio, PyCharm IDE ו-Sublime text.";
        emailLable.innerHTML="agam123theking@gmail.com :כתובת האימייל שלי";
        phonenumberLable.innerHTML="972+ 052-292-9215 :או מספר הטלפון שלי";
        translateButton.innerHTML="Back to English";
        isTranslated=true;
    }else{
        isTranslated=false;
        h1.innerHTML="Agam Farajpur";
        h3.innerHTML="I'm a 17 year old web developer & designer.";
        vidEditingParagraph.innerHTML="I have experience at video editing with Priemere Pro, i used to mainly edit video game montages, mostly when i was playing. When i was done editing i uploaded each edit to my youtube channel and ever so often showcase it to my friends and family.";
        aboutMeParagraph.innerHTML="Hi! My name's Agam and i love computers. I'm 17 years old and i live in Israel. During my free time i mess around with making interactive webpages and code applications and programs. My current education level is senior year highschool, i study journalism and jewish philosophy on top of using my free time to code!";
        aboutMeTitle.innerHTML="About me";
        home.innerHTML="Home";
        about.innerHTML="About me";
        relevant.innerHTML="Relevant projects";
        expert.innerHTML="Expertise";
        drawing.innerHTML="I also occasionally draw. Mostly anime & fictional characters that i like. In fact, my entire wall that's in my room is covered with beautiful drawings.";
        expertiseParagraph.innerHTML="I am fluent in nearly 4 computer and programming languages, such as Javascript, Python, HTML and CSS. <br><br> i know how to operate several other technologies such as Git bash, node.js, and react.js <br><br> i'm familiar with web development libraries such as Bootstrap and Jquery, and Integrated development environments such as Visual studio, PyCharm IDE and Sublime text.";
        phonenumberLable.innerHTML="Or my phone number: 972+ 052-292-9215";
        emailLable.innerHTML="My Email: agam123theking@gmail.com";
        translateButton.innerHTML="Translate to Hebrew";
    }
}
const submitEmailReq=()=>{
    translateButton.remove();
    contactButton.remove();
    h3.remove();
    h1.innerHTML="Your Email message has been successfully sent!";
    let backToHome=document.createElement("button");
    backToHome.innerHTML="Back to home page";
    mainContainer.appendChild(backToHome);
    window.scrollTo(0,0);
    const returnToHome=()=>{location.reload();}
    backToHome.addEventListener("click",returnToHome);
}
function s(){window.scrollTo(0, 3290);}
translateButton.addEventListener("click",translation);
contactButton.addEventListener("click",s);
emailSubmitButton.addEventListener("click",submitEmailReq);