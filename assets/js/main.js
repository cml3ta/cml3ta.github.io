var primaryContainer = document.getElementById("primaryContainer");

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

const bioCardDeets = [
    {
        bolded: "Studied at",
        regular: "The University of Virginia",
        image: "assets/images/capandgown.png"
    },
    {
        bolded: "Degree in",
        regular: "Commerce (Finance and Business Analytics) and Computer Science",
        image: "assets/images/books.png"
    },
    {
        bolded: "Work as",
        regular: "Businenss Technology Analyst at Deloitte Consulting LLP",
        image: "assets/images/briefcase.png"
    },
    {
        bolded: "Proficient in",
        regular: "Java, JavaScript, HTML/CSS, R, SQL, Tableau, C++, VBA",
        image: "assets/images/skills.png"
    },
    
]

const homePageParagraphs = [
    {
        sectionheader: "Mission Statement",
        paragraph: "I am passionate about using the intersection of technology and business to improve the lives of all people. I use my technical proficiencies and business studies at UVA to serve as a liason between the users and development team. I have worked as a Back End Software Developer, have led the delivery of client applications, have advanced the growth of an analytics playform called SEMOSS (<a class=\"links\" href=\"https://play.semoss.org\" target=\"_blank\">Try it out!</a>) from a product management perspective, and even developed this website from ground-up! Ultimately, I hope to use my strong client management skills, technology fluency, and business instincts to advance consumer facing products and applications."
    },
    {
        sectionheader: "Background",
        paragraph: "I chose to attend the University of Virginia (UVA) to study Computer Science, but quickly found myself much more passionate about using technology to solve problems, rather than developing the technology itself. Therefore, I pursued a business degree from the McIntire School of Commerce with concentrations in Finance and Information Technology, with a focus in Business Analytics. Upon graduation, I began working as a Business Technology Analyst at Deloitte Consulting LLP to continue pushing the envelope of technology and business. At Deloitte, I have been heavily involved with an end-to-end data analytics platform called Semantic Open Source Software (SEMOSS). I have performed 50+ external SEMOSS demos, attended multiple national conferences such as the Strata O'Reilly Data and AI Conference, and even was chosen to represent SEMOSS in a Deloitte-Wide video promoting its innovative capabilities. Along with these product management efforts, I have also used my finance and programming backgrounds to lead the development of an award-winning financial model in R, SQL, and SEMOSS to calculate and visualize the cost savings associated with retiring legacy IT systems."
    },
    {
        sectionheader: "Get to Know Me",
        paragraph: "Analytical, Hard-Working, and Always Smiling. I enjoy watching the NFL (Go Bills!), staying up to date with the latest movies, and going for long runs. I love talking and meeting new people, so feel free to contact me and I would love to discuss anything from the latest tech trend to whether Coco is the best Disney movie of all time. Looking forward to talking!"
    }
]

const workExpItems = [
    {
        employer:"Deloitte Consulting LLP",
        position:"Business Technology Analyst | Primary Client: Public Healthcare Provider",
        date:"July 2018 – Pres.",
        bullets:[
            "Develop analyses and custom visualizations within an end-to-end data analytics platform called Semantic Open Source Software (SEMOSS) that helps the provider's leadership and 250+ users drive decision making surrounding the transition to a new electronic health record",
            "Lead the development of an internally award-winning financial model in R, SQL, and SEMOSS to calculate and visualize the cost savings associated with retiring legacy IT systems, resulting in the discovery of $500M+ in savings which was directly inputted into the provider’s 5-year budget",
            "Designed and developed user-friendly website showing an “Executive View” of all SEMOSS reports to ensure high traffic, page views, and user experience",
            "Awarded an Applause Award and Outstanding Performance Award for my individual contribution"
        ]
    },
    {
        employer:"",
        position:"Business Technology Analyst | Primary Client: Internal SEMOSS Product Management",
        date:"",
        bullets:[
            "Accelerated the business development and product growth of SEMOSS by performing to 50+ product demos to a range of potential clients, including federal agencies, non-profit organizations, and commercial businesses",
            "Lead the development of marketing content, having produced 10+ user videos with over 1500+ views on YouTube, standardized style guides for videos, presentations, and documentation",
            "Advance usability of SEMOSS by holding feature ideation discussions with frequent product users, guiding UI design with front end developers, and establishing user tracking analytics to refine the user experience",
            "Selected to represent SEMOSS on at three national conferences including the Strata O’Reilly Data & AI Conference in New York in September 2019"
        ]
    },
    {
        employer:"",
        position:"Business Technology Analyst | Primary Client: Internal SEMOSS Back-End Developer",
        date:"",
        bullets:[
            "Develop Back-End algorithms for SEMOSS in R and Java to solve client needs, accelerate project performance and SEMOSS product advancement such as Document Summarization, Sentiment Analysis, and more",
            "Led the development of Natural Language Database Querying which allows users to query databases in plain text rather than SQL (Ex. “What movies are dramas?”), which greatly reduced query time for multi-database queries"
        ]
    }
];

const addProjectsItems = [
    {
        employer:"GeekOut Technology Training at Deloitte",
        position:"Firm Initiative Lead",
        date:"Feb. 2019 – Pres.",
        bullets:[
            "Lead a team of 4 in a firm initiative sponsored by the Deloitte Consulting CTO of the Government and Public Sector (GPS)",
            "Plan and execute five series of training events each year for 40+ fellow Deloitte practitioners to provide with hands-on training on emerging technologies such as Blockchain, IoT, AR/VR etc"
        ]
    },
    {
        employer:"Proposal Analytics Initiative at Deloitte",
        position:"Founder and Lead Data Visualization",
        date:"Sep. 2018 – Pres.",
        bullets:[
            "Founded a data analytics and visualization effort that analyzes the performance of past proposal efforts to (1) discover drivers of successful proposals and (2) diagnose financial variance between expected and actual project results",
            "Received internal sponsorship from Deloitte Leadership and briefed findings to the Consulting Chief Operating and Chief Financial Officers of the GPS Sector of Deloitte Consulting"
        ]
    },
    {
        employer:"Bodega Dante Robino",
        position:"Tech. Consultant for Winery in Argentina",
        date:"Dec. 2016 – Jan. 2017",
        bullets:[
            "Developed in JavaScript to link Google Calendar to Google Sheets, thus minimizing double data entry and generating consistent information within Bodega Dante Robino’s tourism reservation platform",
            "Created an enhanced spreadsheet tool that automatically generates profitability analyses and customer demographic analyses"
        ]
    }
];

const projects = [
    {
        title:"More to Come",
        text:"These are my projects so far, but I'm always looking for more ideas. If you have a cool idea of what I could be working on, contact me via email!",
        image:"assets/images/comingsoon.png"
    }
];

window.onload = function(){
    if(window.location.hash){
        loadPage();
    } else {
        loadHomePage();
    }
}

function setHash(target){
    window.location.hash = target;
}

function loadPage(){
    if(window.location.hash == "#Home"){
        loadHomePage();
    } else if(window.location.hash == "#Resume"){
        loadResumePage();
    } else if(window.location.hash == "#Projects"){
        loadProjectsPage();
    } else {
        loadHomePage();
    }
}

function loadHomePage(){
    // use this to pass around proper class names
    leftClass = "";
    rightClass = "";
    addDisplay = "";

    // start top page
    pageHTML = " <div class = \"topHomePage\">";

    if(!isMobile){
        leftClass = "homepageCol_left shadow-sm";
        rightClass = "homepageCol_right";
        addDisplay = "display-3";
    }

    // start contact card
    pageHTML += "<div class=\"" + leftClass + "\">";
    pageHTML += "<img class = \"contactCardHeadshot\" src=\"./assets/images/chris_headshot_square.jpg\"> ";
    pageHTML += "<img class = \"contactCardImage\" src=\"./assets/images/bg.jpg\"> ";

    emailMeButton = "</div> <center><div class=\"button emailButton\" id=\"button-4\" data-toggle=\"modal\" data-target=\"#sendEmailModal\"><div id=\"underline\"></div>Email Me</div></center> ";
    if(!isMobile){
        // start cc table
        pageHTML += "<div class=\"contactCardTable\" style=\"overflow-x:auto;\"> ";
        pageHTML += "<table> <tr> <th>Age</th> <th>Area of Specialty</th> <th>Ask Me About</th> </tr> ";
        pageHTML += "<tr> <td>24</td> <td>Product Management</td> <td>Sports Analytics</td> </tr> </table>";
        
        // email me button
        pageHTML += emailMeButton;
    }
    
    // wrap up top left side
    pageHTML += "</div>";

    // top right side
    pageHTML += "<div class=\"" + rightClass + "\"> ";
    pageHTML += "<h1 class=\"nameText "+ addDisplay + "\">Hi, I'm Chris.</h1>";
    pageHTML += " <h5 class=\"titleText\"><b>Business Analyst</b> | Deloitte Consulting LLP</h5> </div> ";

    if(isMobile){
         // email me button
         pageHTML += emailMeButton;
    }

    // wrap up top
    pageHTML += "</div> ";

    // start bottom home page
    pageHTML += "<div class = \"bottomHomePage\"> ";

    // start paragraph content
    pageHTML += "<div class=\"" + rightClass + "\"> ";
    for(var i = 0; i < homePageParagraphs.length; i++){
        pageHTML += "<h5 class=\"homepage_secHeader\">" + homePageParagraphs[i]['sectionheader'] + "</h5>";

        pageHTML += "<p class=\"homepage_paragraph\">" + homePageParagraphs[i]['paragraph'] + "</p> ";
    }
    pageHTML += "</div>"; 

    // start bio card
    pageHTML += "<div class=\""+ leftClass +"\" style=\"background-color: white;\">";

    // bio card list
    pageHTML += " <ul class=\"list-group\"> ";
    if(!isMobile){
        pageHTML += "<li class=\" list-group-item\" style=\"border:none;\"><p class=\"quote\">\"If I had asked people what they wanted, they would have said faster horses.\"</p><p class=\"quote\">- Henry Ford</p></li>";
    }

    for (var i = 0; i < bioCardDeets.length; i++){
        pageHTML += "<li class=\" list-group-item\" style=\"border:none;\"> <div><img class=\"cardIcons\" src=\"" + bioCardDeets[i]['image'] +"\"> <b>" + bioCardDeets[i]['bolded'] + "</b> " + bioCardDeets[i]['regular'] + "</div> </li> ";
    }

    pageHTML += "</ul><br></div>"; 

    primaryContainer.innerHTML = pageHTML;
}

function sendEmail(){
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("emailBody").value;
    var updatedBody = body.replace(/\r\n|\r|\n/g, "%0D%0A");


    window.open('mailto:cml3ta@gmail.com?subject=' + subject + '&body=' + updatedBody + '');
}

function loadResumePage(){
    // if its not mobile, then show left side
    if(!isMobile){
        // get the left column html
        pageHTML = "<div class=\"leftCol_resume\">";
        pageHTML += "<img class=\"resumeHeadshot\" src=\"assets/images/chris_headshot.jpg\" alt=\"Italian Trulli\" style=\"width:100%;\"> <br> ";
        pageHTML += "<center><h3 class=\"resumeName\">Chris Long</h3></center> <div class=\"resumeBio\"><hr> <h6>Email Address</h5> <p>cml3ta@gmail.com</p> <hr> <h6>Phone Number</h5> <p>(540) 808-3354</p> <hr> <h6>Area of Residence</h5> <p>Washington DC</p><hr> </div>";
        
        // download button
        pageHTML += "<center><a class=\"button\" id=\"button-4\" style=\"width:90%;color: #F0F8FF;background-color:#6f94d9;\" href=\"assets/Resume_ChrisLong.pdf\" download><div id=\"underline\" style=\"background:#F0F8FF;\"></div>Download Resume</a></center> ";
        pageHTML += "</div>";

        // start the right column html
        pageHTML += "<div class=\"rightCol_resume shadow-lg\">"; 
    } else {
        // start the resume html
        pageHTML = "<div class=\"rightCol_resume_mobile shadow-lg\">"; 
    }
    

    // education
    pageHTML += "<div class=\"sectionHeader\">EDUCATION</div>";
    pageHTML += "<div class=\"resumeEmployer\">University of Virginia, McIntire School of Commerce<span class=\"resumeDates\">May 2018</span></div>";
    pageHTML += "<div class=\"resumePosition\">B.S. in Commerce: Finance and Information Technology | Track: Business Analytics</div>";
    pageHTML += "<div class=\"resumePosition\" style=\"padding-bottom:15px;\">Minor in Computer Science</div>";

    // work experiences
    pageHTML += "<div class=\"sectionHeader\">WORK EXPERIENCE</div>";
    pageHTML += getStandardResumeSec("workExp")

    // additional projects
    pageHTML += "<div class=\"sectionHeader\">ADDITIONAL PROJECTS</div>"
    pageHTML += getStandardResumeSec("addProjects")

    // skills and interests
    pageHTML += "<div class=\"sectionHeader\">SKILLS AND INTERESTS</div>";
    pageHTML += "<div class=\"resumeEmployer\">Development Skills: ";
    pageHTML += "<span class=\"resumeSkillDeets\">Java, JavaScript, HTML/CSS, R, SQL, Tableau, C++, VBA</span></div>";
    pageHTML += "<div class=\"resumeEmployer\">Security Clearance: ";
    pageHTML += "<span class=\"resumeSkillDeets\">Department of Defense Public Trust Clearance</span></div>";
    pageHTML += "<div class=\"resumeEmployer\">Interests: ";
    pageHTML += "<span class=\"resumeSkillDeets\">Golf, Running, Data Analytics (esp. Sports Analytics), UI/UX, Data Visualization, Product Demos</span>";


    // wrap it up
    pageHTML += "</div><br><br><br><br>";

    // return
    primaryContainer.innerHTML = pageHTML;
}

function loadProjectsPage(){
    // load top page
    pageHTML = "";
    pageHTML += "<div class = \"topHomePage\">";
    pageHTML += "<h1 class=\"nameText display-3\">Projects</h1>";
    pageHTML += "<h5 class=\"projectsHeaderText\">I bring an analytical and fact-focused approach to all my stances when it comes to sports, movies, and everything else. Here are a few of my projects that I have developed that look deeper into those topics.</h5></div>";
    pageHTML += "</div>";

    // load project cards
    pageHTML += "<div class=\"container-fluid grey full-height\">";
    for(var i = 0; i < projects.length; i++){
        // check if starting a new row
        if(i % 4 == 0){
            pageHTML += "<div class=\"row\">"
        }

        // otherwise loop through the cards
        pageHTML += "<div class=\"col-md-3 text-center projectCard\">"
        pageHTML += "<img class=\"projectCardImage\" src=\""+ projects[i]['image'] + "\" style=\"width:80%\">";
        pageHTML += "<h3><b>" + projects[i]['title'] + "</b></h3>";
        pageHTML += "<p class=\"projectCardText\">" + projects[i]['text'] + "</p>";
        pageHTML += "</div>";

        // close up the new row if you have to
        if(i % 4 == 3 || i == (projects.length-1)){
            pageHTML += "</div>";
        }

    }
    
    
    // wrap the whole thing up
    pageHTML += "</div>";

    // return
    primaryContainer.innerHTML = pageHTML;
}

function getStandardResumeSec(section){
    var retHTML = "";
    if(section == "workExp"){
        listToLoop = workExpItems;
    } else if (section == "addProjects"){
        listToLoop = addProjectsItems;
    }
    
    for (var i = 0; i < listToLoop.length; i++){
        // get the headers and such
        retHTML += "<div class=\"resumeEmployer\">" + listToLoop[i]['employer'];
        retHTML += "<span class=\"resumeDates\">" + listToLoop[i]['date'] + "</span></div>";
        retHTML += "<div class=\"resumePosition\">" + listToLoop[i]['position'] + "</div>";

        // loop through to get all the bullett points
        retHTML += "<ul>";
        for(var j = 0; j < listToLoop[i]['bullets'].length; j++){
            retHTML += "<li class=\"bulletPoints\">" + listToLoop[i]['bullets'][j] + "</li>";
        }
        retHTML += "</ul>";
    }

    return retHTML;
}

window.addEventListener("hashchange",loadPage,false);