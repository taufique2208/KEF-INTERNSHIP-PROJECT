const puppeteer = require('puppeteer');
// const fs = require('fs/promises')
// const {username,password}= require('./credentials.js')
const {
    loginbutton, verifybutton, KEFNext, KEFbutton, KotakKanya, KotakKanyaNext, Aboutmentoring, Menubutton, Reportbutton,
    CallingHistory, CallingHistoryfdata, CallingHistoryddata,

    QuizResult, QuizResultfdata, QuizResultddata,

    SessionReport, SessionReportfdata, SessionReportddata,

    ReviewersFeedback, ReviewersFeedbackfdata, ReviewersFeedbackddata,

    MenteeFeedback, MenteeFeedbackfdata, MenteeFeedbackddata,

    OthersReport, OthersReportfdata, OthersReportddata, CallingHistoryDownload, QuizResultDownload, SessionReportDownload, ReviewersFeedbackDownload, MenteeFeedbackDownload, OthersReportDownload
} = require('./selector.js');
const https = require('https');
const fs = require('fs');
const path = require('path');

const username = 'yogesh.sahani@kotakeducationfoundation.org';
const password = 'india@123';

function downloadFile(url){
    const filename = path.basename(url);
    const foldername=`C:\Reports`;
    let pathurl = path.join(foldername , 'file.xls')
    const filestream = fs.createWriteStream(pathurl);

    
        const request = http.get(url,function(response){
            response.pipe(filestream);
            filename.on("finish",()=>{
                filename.close();
                console.log('download completed')

            })
        })
        // await new Promise((resolve,reject)=>{
        //     res.pipe(filestream);
        //     res.on("error",reject);
        //     filestream.on("finish",resolve);
        // })
   
}

function loadtable(scholarshipname) {
    let tablebody = document.querySelector('#tablebody');
    let dataHTML = '';
    for (let value in scholarshipname) {
        if (value == 0) {
            continue;
        }
        dataHTML += `<br><tr><td><b> ${scholarshipname[value]}</td>
        <td>from:<input  type="date" placeholder="dd-mm-yyyy" id="${value}00"></input><br>to---:<input type="date" class="date"  id="${value}01"></input></td>
        <td>from:<input type="date" placeholder="dd-mm-yyyy" id="${value}10a"></input><br>to---:<input type="date" class="date"  id="${value}11a"></input></td>
        <td>from:<input type="date" placeholder="dd-mm-yyyy" id="${value}10b"></input><br>to---:<input type="date" class="date"  id="${value}11b"></input></td>
        <td>from:<input type="date" placeholder="dd-mm-yyyy" id="${value}20a"></input><br>to---:<input type="date" class="date" id="${value}21a"></input></td>
        <td>from:<input type="date" placeholder="dd-mm-yyyy" id="${value}20b"></input><br>to---:<input type="date" class="date" id="${value}21b"></input></td>
        <td>from:<input type="date" placeholder="dd-mm-yyyy" id="${value}30"></input><br>to---:<input type="date" class="date" id="${value}31"></input></td>
        <td>from:<input type="date" placeholder="dd-mm-yyyy" id="${value}40"></input><br>to---:<input type="date" class="date" id="${value}41"></input></td>
        <td>from:<input type="date" placeholder="dd-mm-yyyy" id="${value}50"></input><br>to---:<input type="date" class="date" id="${value}51"></input></td>
        </td></tr><br><hr>`;

    }
    tablebody.innerHTML = dataHTML;
}

function dateformat(date) {
    return date.value = date.split('-').reverse().join('-');
}


document.addEventListener('DOMContentLoaded', async () => {

    const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));


    let verify = document.querySelector('#verify');

    let n1 = document.querySelector('#otp1').value;
    let n2 = document.querySelector('#otp2').value;
    let n3 = document.querySelector('#otp3').value;
    let n4 = document.querySelector('#otp4').value;
    let n5 = document.querySelector('#otp5').value;
    let n6 = document.querySelector('#otp6').value;

    let progress = document.querySelector('#progress');

    // console.log(username)
    // console.log(password)
    // console.log('hello')


    const browser = await puppeteer.launch({
        headless: false,
    })
    const page = await browser.newPage();

    try {
        await page.goto('https://sms.buddy4study.com/login');
        await page.type('#username', username);
        await page.type('#password', password);
        // await page.click('#__next > section.chakra-stack.login_loginTheme__1Ujbk.css-3waq5q > article > article.css-1j99di2 > form > article.css-ukeh4l > article > article')
        await page.waitForSelector(loginbutton);
        await page.click(loginbutton);
    } catch (e) {
        await page.goto('https://sms.buddy4study.com/login');
        await page.type('#username', username);
        await page.type('#password', password);
        // await page.click('#__next > section.chakra-stack.login_loginTheme__1Ujbk.css-3waq5q > article > article.css-1j99di2 > form > article.css-ukeh4l > article > article')
        await page.waitForSelector(loginbutton);
        await page.click(loginbutton);
    }
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

    progress.innerHTML = `<p style="background-color: rgb(157, 255, 157); color: black;">OTP sent successfully at ${hour}:${minute} IST!</p>`;

    verify.addEventListener('click', async () => {
        verify.disabled = true;

        progress.innerHTML = `<p style=" background-color: rgb(159, 159, 255); color: black;">Please wait while we verify OTP...</p>`;



        await page.waitForSelector('#__next > article > article > article.css-9jtr4b > button');
        await page.waitForSelector('#__next > article > article > div > div > div:nth-child(1) > input[type=tel]');

        if (!n1) {
            n1 = document.querySelector('#otp1').value;
        }
        if (!n2) {
            n2 = document.querySelector('#otp2').value;
        }
        if (!n3) {
            n3 = document.querySelector('#otp3').value;
        }
        if (!n4) {
            n4 = document.querySelector('#otp4').value;
        }
        if (!n5) {
            n5 = document.querySelector('#otp5').value;
        }
        if (!n6) {
            n6 = document.querySelector('#otp6').value;
        }

        try {
            await page.type(`#__next > article > article > div > div > div:nth-child(1) > input[type=tel]`, n1);
            await page.type(`#__next > article > article > div > div > div:nth-child(2) > input[type=tel]`, n2);
            await page.type(`#__next > article > article > div > div > div:nth-child(3) > input[type=tel]`, n3);
            await page.type(`#__next > article > article > div > div > div:nth-child(4) > input[type=tel]`, n4);
            await page.type(`#__next > article > article > div > div > div:nth-child(5) > input[type=tel]`, n5);
            await page.type(`#__next > article > article > div > div > div:nth-child(6) > input[type=tel]`, n6);

            await page.waitForSelector(verifybutton);
            await page.click(verifybutton);
            await page.waitForNavigation();
        }
        catch (e) {
            verify.disabled = false;
            progress.innerHTML = `<div style="background-color: grey, color : black">Wrong OTP entered. Sending a new OTP</div>`;
            delay(5000)

            document.querySelector('#otp1').value = '';
            document.querySelector('#otp2').value = '';
            document.querySelector('#otp3').value = '';
            document.querySelector('#otp4').value = '';
            document.querySelector('#otp5').value = '';
            document.querySelector('#otp6').value = '';

            await page.goto('https://sms.buddy4study.com/login');
            await page.type('#username', username);
            await page.type('#password', password);
            // await page.click('#__next > section.chakra-stack.login_loginTheme__1Ujbk.css-3waq5q > article > article.css-1j99di2 > form > article.css-ukeh4l > article > article')
            await page.waitForSelector(loginbutton);
            await page.click(loginbutton);
            var date = new Date();
            var hour = date.getHours();
            var minute = date.getMinutes();

            progress.innerHTML = `<p style="background-color: rgb(157, 255, 157); color: black;">OTP sent successfully at ${hour}:${minute} IST!</p>`;
            verify.addEventListener('click', async () => {

                n1 = n2 = n3 = n4 = n5 = n6 = "";

                if (!n1) {
                    n1 = document.querySelector('#otp1').value;
                }
                if (!n2) {
                    n2 = document.querySelector('#otp2').value;
                }
                if (!n3) {
                    n3 = document.querySelector('#otp3').value;
                }
                if (!n4) {
                    n4 = document.querySelector('#otp4').value;
                }
                if (!n5) {
                    n5 = document.querySelector('#otp5').value;
                }
                if (!n6) {
                    n6 = document.querySelector('#otp6').value;
                }

                await page.type(`#__next > article > article > div > div > div:nth-child(1) > input[type=tel]`, n1);
                await page.type(`#__next > article > article > div > div > div:nth-child(2) > input[type=tel]`, n2);
                await page.type(`#__next > article > article > div > div > div:nth-child(3) > input[type=tel]`, n3);
                await page.type(`#__next > article > article > div > div > div:nth-child(4) > input[type=tel]`, n4);
                await page.type(`#__next > article > article > div > div > div:nth-child(5) > input[type=tel]`, n5);
                await page.type(`#__next > article > article > div > div > div:nth-child(6) > input[type=tel]`, n6);

                await page.waitForSelector(verifybutton);
                await page.click(verifybutton);
                await page.waitForNavigation();

            })
        }
        //#__next > section.chakra-stack.organization_organizationTheme___L8vU.css-3waq5q > article > article.css-1j99di2 > form > div > article > article > article > label > dd

        await delay(3000);
        await page.waitForSelector(KEFbutton);
        await page.click(KEFbutton);
        //clickin on next
        await page.waitForSelector(KEFNext);
        await page.click(KEFNext);
        await page.waitForNavigation();

        //click on kotak kanya scholarship
        await page.waitForSelector(KotakKanya);
        await page.click(KotakKanya);

        //clicking on next
        await page.waitForSelector(KotakKanyaNext);
        await page.click(KotakKanyaNext);
        await page.waitForNavigation();

        //clicking on about mentoring in dashboard
        await page.waitForSelector(Aboutmentoring);
        await page.click(Aboutmentoring);

        //getting all scholarship values

        await page.waitForSelector('#project-list');
        await page.click('#project-list');

        await delay(3000);
        //All scholarship names
        const scholarshipname = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('#project-list > option')).map(x => x.textContent);
        })
        // await fs.writeFile('scholarshipname.txt',scholarshipname.join("\r\n"))
        //All scholarship values
        const scholarshipvalue = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('#project-list > option')).map(x => x.getAttribute('value'));
        })
        // await fs.writeFile('scholarshipvalue.txt',scholarshipvalue.join("\r\n"))

        let header = document.querySelector('#header');
        header.innerHTML = `<p></p>`;

        loadtable(scholarshipname);





        let button = document.getElementById('button');

        button.addEventListener('click', async () => {
            window.scrollTo(0, 0);
            header.innerHTML = `<div style="background-color: rgb(157, 255, 157); color: black; font-size: 20px;">Please wait while we download your files...</div>`;
            for (svalue in scholarshipname) {

                if (svalue == 0) {
                    continue;
                }

                let fdata1 = '';
                let ddata1 = '';
                let fdata2a = '';
                let ddata2a = '';
                let fdata2b = '';
                let ddata2b = '';
                let fdata3a = '';
                let ddata3a = '';
                let fdata3b = '';
                let ddata3b = '';
                let fdata4 = '';
                let ddata4 = '';
                let fdata5 = '';
                let ddata5 = '';
                let fdata6 = '';
                let ddata6 = '';


                fdata1 = document.getElementById(`${svalue}00`).value;
                ddata1 = document.getElementById(`${svalue}01`).value;
                fdata2a = document.getElementById(`${svalue}10a`).value;
                ddata2a = document.getElementById(`${svalue}11a`).value;
                fdata2b = document.getElementById(`${svalue}10b`).value;
                ddata2b = document.getElementById(`${svalue}11b`).value;
                fdata3a = document.getElementById(`${svalue}20a`).value;
                ddata3a = document.getElementById(`${svalue}21a`).value;
                fdata3b = document.getElementById(`${svalue}20b`).value;
                ddata3b = document.getElementById(`${svalue}21b`).value;
                fdata4 = document.getElementById(`${svalue}30`).value;
                ddata4 = document.getElementById(`${svalue}31`).value;
                fdata5 = document.getElementById(`${svalue}40`).value;
                ddata5 = document.getElementById(`${svalue}41`).value;
                fdata6 = document.getElementById(`${svalue}50`).value;
                ddata6 = document.getElementById(`${svalue}51`).value;


                try {

                    await page.goto('https://mentorship.buddy4study.com/hr/dashboard?org=4686#');
                    await page.waitForSelector('#project-list');
                    await page.click('#project-list');
                    await delay(5000);

                    await page.select('#project-list', scholarshipvalue[svalue]);

                    //clicking on menu

                    await page.waitForSelector(Menubutton);
                    const menu = await page.$(Menubutton);
                    await page.evaluate(menu => menu.click(), menu);

                    await delay(5000);
                    //selecting report
                    await page.waitForSelector(Reportbutton);
                    const report = await page.$(Reportbutton);
                    await page.evaluate(report => report.click(), report);
                    await page.waitForNavigation();
                } catch (e) {
                    await page.goto('https://mentorship.buddy4study.com/hr/dashboard?org=4686#');
                    await page.waitForSelector('#project-list');
                    await page.click('#project-list');
                    delay(2000);
                    await page.select('#project-list', scholarshipvalue[svalue]);

                    //clicking on menu

                    await page.waitForSelector(Menubutton);
                    const menu = await page.$(Menubutton);
                    await page.evaluate(menu => menu.click(), menu);

                    await delay(5000);
                    //selecting report
                    await page.waitForSelector(Reportbutton);
                    const report = await page.$(Reportbutton);
                    await page.evaluate(report => report.click(), report);
                    await page.waitForNavigation();
                }
                //CALLING HISTORY

                if (fdata1 == '') {
                    fdata1 = document.getElementById(`${svalue}00`).value;
                }
                if (ddata1 == '') {
                    ddata1 = document.getElementById(`${svalue}01`).value;
                }

                if (!(fdata1 == "" && ddata1 == "")) {
                
                    await page.focus(CallingHistoryfdata);
                    await page.type(CallingHistoryfdata, dateformat(fdata1));
                    await page.focus(CallingHistoryddata);
                    await page.type(CallingHistoryddata, dateformat(ddata1));
                    await page.waitForSelector(CallingHistoryDownload);
                    await page.click(CallingHistoryDownload);
                    await delay(1000);
                    let url1=`https://mentorship.buddy4study.com/hr/${scholarshipvalue[svalue]}/reports/calling-history?project_id=${scholarshipvalue[svalue]}&mentee=&mentor=&from_date=${fdata1}&to_date=${ddata1}&download=1`
                    downloadFile(url1)


                }
                //END OF CALLING HISTORY

                //QUIZ RESULT
                if (fdata2a == '') {
                    fdata2a = document.getElementById(`${svalue}10a`).value;
                }
                if (ddata2a == '') {
                    ddata2a = document.getElementById(`${svalue}11a`).value;
                }
                if (fdata2b == '') {
                    fdata2b = document.getElementById(`${svalue}10b`).value;
                }
                if (ddata2b == '') {
                    ddata2b = document.getElementById(`${svalue}11b`).value;
                }

                if (!(fdata2a == "" && ddata2a == "")) {
                    await page.waitForSelector(QuizResult);
                    await page.click(QuizResult);
                    await page.focus(QuizResultfdata);
                    await page.type(QuizResultfdata, dateformat(fdata2a));
                    await page.focus(QuizResultddata);
                    await page.type(QuizResultddata, dateformat(ddata2a));
                    await page.waitForSelector(QuizResultDownload);
                    await page.click(QuizResultDownload);
                    await delay(1000);

                }

                if (!(fdata2b == "" && ddata2b == "")) {
                    try {
                        await page.waitForSelector(QuizResult);
                        await page.click(QuizResult);
                        await page.focus(QuizResultfdata);
                        await page.type(QuizResultfdata, dateformat(fdata2b));
                        await page.focus(QuizResultddata);
                        await page.type(QuizResultddata, dateformat(ddata2b));
                        await page.waitForSelector(QuizResultDownload);
                        await page.click(QuizResultDownload);
                        await delay(1000);
                        await page.waitForSelector(QuizResult);
                        await page.click(QuizResult);
                    } catch (e) {
                        await page.focus(QuizResultfdata);
                        await page.type(QuizResultfdata, dateformat(fdata2b));
                        await page.focus(QuizResultddata);
                        await page.type(QuizResultddata, dateformat(ddata2b));
                        await page.waitForSelector(QuizResultDownload);
                        await page.click(QuizResultDownload);
                        await delay(1000);
                    }

                }

                //END OF QUIZ RESULT

                //SESSION REPORT

                if (fdata3a == '') {
                    fdata3a = document.getElementById(`${svalue}20a`).value;
                }
                if (ddata3a == '') {
                    ddata3a = document.getElementById(`${svalue}21a`).value;
                }
                if (fdata3b == '') {
                    fdata3b = document.getElementById(`${svalue}20b`).value;
                }
                if (ddata3b == '') {
                    ddata3b = document.getElementById(`${svalue}21b`).value;
                }

                if (!(fdata3a == "" && ddata3a == "")) {
                    await page.waitForSelector(SessionReport);
                    await page.click(SessionReport);
                    await page.focus(SessionReportfdata);
                    await page.type(SessionReportfdata, dateformat(fdata3a));
                    await page.focus(SessionReportddata);
                    await page.type(SessionReportddata, dateformat(ddata3a));
                    await page.waitForSelector(SessionReportDownload);
                    await page.click(SessionReportDownload);
                    await delay(1000);
                }


                if (!(fdata3b == "" && ddata3b == "")) {
                    try {
                        await page.waitForSelector(SessionReport);
                        await page.click(SessionReport);
                        await page.focus(SessionReportfdata);
                        await page.type(SessionReportfdata, dateformat(fdata3b));
                        await page.focus(SessionReportddata);
                        await page.type(SessionReportddata, dateformat(ddata3b));
                        await page.waitForSelector(SessionReportDownload);
                        await page.click(SessionReportDownload);
                        await delay(1000);

                    } catch (e) {
                        await page.focus(SessionReportfdata);
                        await page.type(SessionReportfdata, dateformat(fdata3b));
                        await page.focus(SessionReportddata);
                        await page.type(SessionReportddata, dateformat(ddata3b));
                        await page.waitForSelector(SessionReportDownload);
                        await page.click(SessionReportDownload);
                        await delay(1000);


                    }

                    //END OF SESSION REPORT

                    //REWIEWERS FEEDBACK

                    if (fdata4 == '') {
                        fdata4 = document.getElementById(`${svalue}30`).value;
                    }
                    if (ddata4 == '') {
                        ddata4 = document.getElementById(`${svalue}31`).value;
                    }

                    if (!(fdata4 == "" && ddata4 == "")) {
                        await page.waitForSelector(ReviewersFeedback);
                        await page.click(ReviewersFeedback);
                        await page.focus(ReviewersFeedbackfdata);
                        await page.type(ReviewersFeedbackfdata, dateformat(fdata4));
                        await page.focus(ReviewersFeedbackddata);
                        await page.type(ReviewersFeedbackddata, dateformat(ddata4));
                        await page.waitForSelector(ReviewersFeedbackDownload);
                        await page.click(ReviewersFeedbackDownload);
                        await delay(1000);

                    }

                    //END OF REWEIVERS FEEDBACK

                    //MENTEE FEEDBACK

                    if (fdata5 == '') {
                        fdata5 = document.getElementById(`${svalue}40`).value;
                    }
                    if (ddata5 == '') {
                        ddata5 = document.getElementById(`${svalue}41`).value;
                    }

                    if (!(fdata5 == "" && ddata5 == "")) {
                        await page.waitForSelector(MenteeFeedback);
                        await page.click(MenteeFeedback);
                        await page.focus(MenteeFeedbackfdata);
                        await page.type(MenteeFeedbackfdata, dateformat(fdata5));
                        await page.focus(MenteeFeedbackddata);
                        await page.type(MenteeFeedbackddata, dateformat(ddata5));
                        await page.waitForSelector(MenteeFeedbackDownload);
                        await page.click(MenteeFeedbackDownload);
                        await delay(1000);

                    }

                    //END OF MENTEE FEEDBACK

                    //OTHER REPORTS


                    if (fdata6 == '') {
                        fdata6 = document.getElementById(`${svalue}50`).value;
                    }
                    if (ddata6 == '') {
                        ddata6 = document.getElementById(`${svalue}51`).value;
                    }

                    if (!(fdata6 == "" && ddata6 == "")) {
                        await page.waitForSelector(OthersReport);
                        await page.click(OthersReport);
                        await page.focus(OthersReportfdata);
                        await page.type(OthersReportfdata, dateformat(fdata6));
                        await page.focus(OthersReportddata);
                        await page.type(OthersReportddata, dateformat(ddata6));
                        await page.waitForSelector(OthersReportDownload);
                        await page.click(OthersReportDownload);
                        await delay(1000);

                    }




                }
            }

            header.innerHTML = `<div style="background-color: rgb(157, 255, 157); color: green; font-size: 20px;">Just few more seconds left</div>`;

            delay(60000);
            header.innerHTML = `<div style="background-color: rgb(157, 255, 157); color: green; font-size: 20px;">Download Completed</div>`;




        })
    })
})






