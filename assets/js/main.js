var primaryContainer = document.getElementById("primaryContainer");

var isMobile = false; //initiate as false
var screenWidth = screen.width;

// device detection
if(screenWidth < 750) { 
    isMobile = true;
}

const bioCardDeets = [
    {
        bolded: "Interested in",
        regular: "advancing technology solutions to address consumer challenges",
        image: "assets/images/star.png"
    },
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
        position:"Business Technology Analyst | SEMOSS Product Management",
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
        position:"Business Technology Analyst | SEMOSS Back-End Developer",
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
        title:"Breaking Down Blackjack Odds",
        description:"What are your real odds of leaving the casino a winner? Let's see how it varies with different strategies and table rules",
        image:"assets/images/blackjacklogo.png",
        hash: "BlackjackOdds",
        dashboardImage:"assets/images/blackjackdashboard.png",
        imageFooter:"In this dashboard, you can see the incremental benefit of using the optimal strategy, doubling strong hands, splitting pairs, etc. You can also see that the odds of the player winning are greater than 50% given perfect play. Email me for live access to this dashboard and database.",
        date: "Mar. 20, 2020",
        projectParagraphs: [
            {
                sectionheader: "What are our odds of winning in blackjack?",
                paragraph: "Blackjack (also known as 21) is one of the most common casino games, with tables at most casinos and easy to follow rules. If you are unfamiliar with the rules of blackjack, you can find a good summary <a class=\"links\" href=\"https://bicyclecards.com/how-to-play/blackjack/\" target=\"_blank\">here</a>. In essence, there are four possible outcomes of each blackjack game: (1) a regular, non-blackjack win, (2) a blackjack win, (3) a loss to the dealer, and (4) a push (aka tie) with the dealer. Please be aware that table rules can vary between casinos. Some key table rules to look out for are (1) blackjacks paying out 3:2 or better, (2) restrictions of when you can double or split, (3) dealer staying or hitting on a soft 17, and <a class=\"links\" href=\"https://www.888casino.com/blog/blackjack-strategy-guide/scouting-blackjack-tables\" target=\"_blank\">more</a>.<br><br>To break down our odds of winning in blackjack, I created an algorithm that simulates 1,000,000 <i>completed</i> games of blackjack (more to come on this later) to determine win rates (blackjack and regular), push rates, and loss rates. We can also remove certain components of the optimal strategy to see the components that are most critical to achieving the highest possible odds of winning.<br><br>From this analysis, we see that the player has slightly <b>greater than 50% probability of winning in blackjack</b>. Let’s find out how…",
                smallImage: "assets/images/blackjackresultsbarchart.png"
            },
            {
                sectionheader: "What is the \"optimal strategy\"?",
                paragraph: "Blackjack, like most games, is a game of pre-defined probabilities. Therefore, blackjack players have created a strategy of when to properly hit, stand, double down, split pairs, etc. This is known as the <a class=\"links\" href=\"https://www.blackjackapprenticeship.com/blackjack-strategy-charts/\" target=\"_blank\">optimal strategy</a>. As you can see at that link or in the charts above, the strategy is a simple chart that uses the total of your cards vs. the card that the dealer is showing. For example, think about the scenario where the dealer is showing a 5 or 6. It is very likely that the dealer will go past 21 in this scenario and, therefore, we should not take an additional card even when the total of our hand is only 12. Beyond knowing when to hit or stay, this chart provides immense value by telling us when to <b>take advantage of high probability wins by doubling</b> our bet, and when to <b>split our weaker hand into two better hands.</b><br><br>Let's compare this strategy to the dealer's required strategy. In this analysis, we assume the dealer is required to stay anytime their total (soft or hard) is 17 or greater. We will call these the <i>Follow Dealer's Rules</i> strategy. As we'll see in the next section, our odds of winning are only 41.1% if we also follow this strategy. Therefore, using this strategy is paramount to winning in blackjack, as it provides us with the statistically best chance of winning. ",
                smallImage: "assets/images/blackjackoptimalstrategy.png"
            },
            {
                sectionheader: "What percent of our hands will be wins, losses, or pushes?",
                paragraph: "First, let’s talk a bit about the methodology of the simulation. I define a “game” as every time that we bet money. As an example, think about the scenario where we bet $20 to get dealt our cards and we receive a pair of 8's. As the optimal strategy above dictates, we will always split this pair. Therefore, we should bet another $20 and, thus, we have started a second game within the same deal. If we win both of those hands, we just won two games. If we lose both, we have just lost two games, etc. This definition holds for doubles as well. If we bet $20 and receive an 11, then we should always double that bet and bet another $20. If we win that one hand, it is equivalent to winning two games and, therefore, it gets treated as such.<br><br>Now, let’s look at the above table of simulation results. Outside of the <i>Follow Dealer\'s Rules</i> strategy, each of these strategies loosely follows the optimal strategy. As seen in the table, using the optimal strategy without splitting or doubling improves our odds of winning by about 1.5% over the <i>Follow Dealer's Rules</i> strategy. If we add splitting or doubling, then we improve our odds by an additional 0.4% and 1.2% respectively. Finally, the full optimal strategy (<i>Yes Double, Yes Split</i>) includes both of those gains and therefore adds an additional 1.5% towards our odds of winning. As you can see in the above table, we are still only winning 44.2% of hands using the full optimal strategy.",
                smallImage: "assets/images/blackjackresulttable.png"
            },
            {
                sectionheader: "How do we factor pushes into our odds of winning?",
                paragraph: "If you view blackjack in the same way that you view other sports (basketball, football, etc.), then you would expect that a tie would lead to an overtime round. This is how we should be viewing the result of a push. Each push’s “overtime” round is the next deal. This leads us to a new term: a completed game of blackjack. <br><br>A completed game of blackjack begins when the bet is placed and concludes when the player has either (1) made money from the bet or (2) lost the money placed in the bet. For example, let’s say that we bet $20 on a hand of blackjack and get an 18. If the dealer also gets an 18, then we have a push. The game is not over. We have neither won nor lost. We enter the first “overtime” deal and this time we win. Both of those deals together constitute a complete game. <br><br>Let’s see how this affects our simulated results above using our best strategy’s (Yes Double, Yes Split) result. We need to, under these new definitions, play the “overtime” games of these hands. So, 4.2% of those pushes are now blackjack wins, 40.0% are now regular wins, etc. To give a simplified example, let’s ignore when we have multiple pushes in a row (which happens 0.7% of the time): <br><br>New Expected Regular Wins: 40.0% + 40.0% * 8.2% = 43.3%<br><br>New Expected Blackjack Wins: 4.2% + 4.2% * 8.2% = 4.5%<br><br>New Expected Losses: 47.6% + 47.6% * 8.2% = 51.5%<br><br>Another way to perform this analysis, is to totally remove pushes from the count altogether and look only at the completed games. This is exactly how the algorithm calculates the odds, where we find that the new <b>odds of getting a regular win are 43.6% and the odds of getting a blackjack win are 4.6% - for a total of 48.2% of winning each hand. </b>",
                smallImage: "assets/images/blackjackpushovertime.png"
            },
            {
                sectionheader: "What if we factor in player-friendly table rules? Specifically a 3:2 payout on blackjack?",
                paragraph: "<b>Player friendly rules, such as a 3:2 payout on blackjack wins, move our odds of winning from the 48.2% to 50.5%</b>. Let’s reuse our earlier definition of a \"game\" as every time that we bet our money and use the standard blackjack payout of 3:2 in this example. If we bet $20 and win via blackjack, then we will receive $30 in winnings. Therefore, we have essentially won 1.5 games. This allows us to win more than we bet, which is a crucial advantage that is <i> not shared by the dealer</i>. Let’s include that in the equation from the previous section to watch it move greater than 50%. <br><br>New Expected Total Wins: 43.6% + 1.5 * 4.6% = 50.5%<br><br>Therefore, with this one (very important) table rule, <b>we can actually have the edge on the casino </b>by playing the optimal strategy to perfection. Factoring in additional player-friendly table rules can increase these odds slightly further.",
                smallImage: "assets/images/blackjacktotaloddsgauge.png"
            },
            {
                sectionheader: "Conclusion: Players have >50% chance of winning in blackjack with perfect play and friendly rules",
                paragraph: "You’re probably thinking… then why does everyone seem to always lose money when they play blackjack at the casino? That is for one specific reason: they do not play the optimal strategy. This is because either (1) they think they can outsmart the proven strategy (they can’t) or (2) simple mistakes in the heat of a game. At its best, blackjack is a winnable game with a greater than 50% odds. At its worst, blackjack has favorable enough odds to let you last a long time on the table before losing. In either case, I recommend <b>memorizing the optimal strategy and walking into the casino confidently… because you have the edge. </b>",
                smallImage: "assets/images/blackjackdashboard.png"
            }
        ]

    },
    {
        title:"NBA 1st Quarter Leads",
        description:"How critical is it have a strong start in the NBA given today's profilic offenses? Let's see if 10+ point first quarter leads win games",
        image:"assets/images/nbalogo.png",
        hash: "NBALeads",
        dashboardImage:"assets/images/nbaleadhelddashboard.PNG",
        imageFooter:"In this dashboard, you can see that the ability to hold a lead varies among a team's relative offensive vs. defensive reputation. In all cases, however, the lead often plateaus after the first quarter or even shrinks. Email me for live access to this dashboard and database.",
        date: "Feb. 20, 2020",
        projectParagraphs: [
            {
                sectionheader: "Do teams with 10+ point first quarter leads end up winning the game?",
                paragraph: "It seems that with the prolific offenses that we see in the NBA today, that huge early leads are very often lost. So I decided to put this to the test. First, I collected quarter-by-quarter scores of all games in the first half the 2019-2020 season (i.e. until the All-Star Break). Then, I filtered to only games where there was at least a 10 point deficit at the end of the first quarter. This resulted in a sample size of 195 games. Lets start with the obvious question to ask: Did those teams win? Yes, teams with a <b>10+ point first quarter ended up winning the game about 80% of the time</b>.<br><br>It is very inconsistent among different teams, however. League leading teams like the Bucks or the Lakers have held 100% of their 10-point first quarter leads. Other teams such as the Pacers and Warriors have only a 50-50 chance of winning when holding a 10+ point first quarter lead. In either case, however, we find that <b>the early first quarter lead will also probably be the largest lead of the game</b>. This prompts further questions though on how it varies between individual teams and their strengths. Are some teams just built better to hold their leads? ",
                smallImage: "assets/images/nbaleadheldbyteam.PNG"
            },
            {
                sectionheader: "Do offensive or defensive teams do better with a lead?",
                paragraph: "Next, I decided to look into whether the ability to hold a lead varies between teams that prioritize offensive or defensive schemes. So, I federated the previous game data with the Offensive and Defensive ranking of each leading team - with the ranking based on points scored per game and points allowed per game. If a team was in the top half of the league offensively and top half defensively then they are listed as <b>Both</b>. As you might expect, these teams are often the best teams in the league such as the Bucks, Clippers, Celtics, etc. If a team was in the upper half of the league in only one of the offensive or defensive rankings, they are listed as <b>Offensive</b> or <b>Defensive</b>. On the offensive side, a few examples of of teams in this category are the Rockets, Mavericks, and Suns. On the defensive side, a few examples of these teams are the Jazz, Nuggets, and Pacers. Finally, we have the teams in the bottom half offensively and defensively listed as <b>Neither</b> such as the Cavaliers, Warriors, and Knicks.<br><br>When looking at the results, we see that teams with a defensive focus and offensive focus tend to have the same success holding their leads - winning about 75% of the games where they have a first quarter lead. Teams in the Both category see extreme success in holding the leads, with a success of about 92%. And finally, teams in the Neither category hold their lead only 69% of the time. In conclusion, <b>neither offensively and defensively aligned teams hold an advantage over the other. But well-rounded teams hold their leads <u>significantly</u> better than all others</b>. With this, I wondered whether there was a difference in how offensive or defensive held their leads.",
                smallImage: "assets/images/nbaleadheldbytype.PNG"
            },
            {
                sectionheader: "When do teams lose their lead?",
                paragraph: "Lets take this one step further and see if we can predict when teams will start to lose their lead or when we know <i>\"Okay, I'd say this lead is safe\"</i>. This is good to know if you want to make an informed wager with your friends, start to feel secure about your team's success, or know that maybe you still have a chance when you're trailing. By maintaining the same groups as in the previous section (Both, Offensive, Defensive, or Neither), I can now track how teams lose their lead by category. Here is what I found:<br><br> <b>Both</b>: These teams tend to steadily hold this 10 point lead throughout the game. You can bet on these teams holding (but maybe not expanding upon) a large first quarter lead.<br><br><b>Offensive</b>: These teams are volatile when it comes to holding leads. As you can see from the curve in the bottom right of the above dashboard, you can expect this lead to quickly decrease in one quarter, but then quickly reappear in the next.<br><br><b>Defensive</b>: These teams take a much steadier approach to holding their lead, where it (on average) slowly decreases throughout the game. Therefore, if a defensive team is able to hold this lead deep into the second quarter you can feel secure about an ultimate victory. On the other hand, defensive teams seem to let their opponents reduce their lead throughout the game, where their first quarter 10+ point lead will probably be one of the largest leads of the night.<br><br><b>Neither</b>: These teams are unpredictable, with the largest loss of their leads occuring in the 3rd quarter. Tough to discern any major insights from these teams, but I would be skeptical of the security of any early lead with these teams.",
                smallImage: "assets/images/nbaleadchanges.PNG",
            },
            {
                sectionheader: "Conclusion: The ability to hold an early lead varies team to team, and is heavily based on their relative strengths",
                paragraph: "Despite an overall 80% win-rate for teams with a 10+ point first quarter lead, many teams will struggle to (1) build upon that lead or (2) even hold the lead at all. On average, that 10 point lead will be the largest lead of the game. We find that <b>score differentials are not linear, but rather seem to plateau or slowly decrease after the first quarter.</b> So when making a decision on how you feel about an early lead in the NBA, think about the leading team's strengths (offensive vs. defensive) and decide when you feel that the lead has begun to plateau.",
                smallImage: "assets/images/nbaleadhelddashboard.PNG"
            }
        ]
        
    }
];

window.onload = function(){
    if(window.location.hash){
        loadPage();
    } else {
        setHash("Home");
    }
}

function setHash(target){
    window.location.hash = target;
}

function loadPage(){
    if(window.location.hash == "#Test"){
        
    } else if(window.location.hash == "#Home"){
        loadHomePage();
    } else if(window.location.hash == "#Resume"){
        loadResumePage();
    } else if(window.location.hash == "#Projects"){
        loadProjectsPage();
    } else if (window.location.hash.startsWith("#Projects/")){
        urlKey = window.location.hash.split("/")[1];
        loadProjectResultPage(urlKey);
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

    emailMeButton = "<center><div class=\"button emailButton\" id=\"button-4\" data-toggle=\"modal\" data-target=\"#sendEmailModal\"><div id=\"underline\"></div>Email Me</div></center> ";
    if(!isMobile){
        // start cc table
        pageHTML += "<div class=\"contactCardTable\" style=\"overflow-x:auto;\"> ";
        pageHTML += "<table> <tr><th>Specialty</th> <th>Ask Me About</th> </tr> ";
        pageHTML += "<tr> <td>Product Management</td> <td>Sports Analytics</td> </tr> </table></div> ";
        
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
        pageHTML += "<center><h1 class=\"resumeName\">Chris Long</h1></center> <div class=\"resumeBio\"><hr> <h6>Email Address</h5> <p>cml3ta@gmail.com</p> <hr> <h6>Phone Number</h5> <p>(540) 808-3354</p> <hr> <h6>Area of Residence</h5> <p>Washington DC</p><hr> </div>";
        
        // download button
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
    pageHTML += "<br><br><br><br>";

    pageHTML += "<center><a class=\"button\" id=\"button-4\" style=\"width:90%;color: #F0F8FF;background-color:#6f94d9;max-width:50%;\" href=\"assets/Resume_ChrisLong.pdf\" download><div id=\"underline\" style=\"background:#F0F8FF;\"></div>Download Resume</a></center> ";
    

    // wrap it up
    pageHTML += "</div>";

    // return
    primaryContainer.innerHTML = pageHTML;
}

function loadProjectsPage(){
    searchClass = "projectsSearch";

    // load top page
    pageHTML = "";
    pageHTML += "<div class = \"topHomePage\">";
    pageHTML += "<h1 class=\"projectsTitleText display-3\">Projects</h1>";
    pageHTML += "<h5 class=\"projectsHeaderText\">I bring an analytical and fact-focused approach to all my stances when it comes to sports, movies, and everything else. Here are a few of my projects so far, but I'm always looking for more ideas. Feel free to email me your ideas!</h5></div>";
    pageHTML += "</div>";

    // start bottom of page
    pageHTML += "<div class = \"bottomHomePage\">";
    pageHTML += "<br>";

    // make search bar
    pageHTML += "<form class=\"form-inline \">";
    if(isMobile){
        searchClass += "_mobile";
    }

    pageHTML += "<input class=\"form-control mr-sm-2 " + searchClass + "\" id=\"searchQuery\" type=\"search\" placeholder=\"Search for a Project\" onkeyup=\"loadProjectCards()\" autocomplete=\"off\">";
    pageHTML += "</form>";

    // load project cards
    pageHTML += "<div class=\"container-fluid\" id=\"projectCardList\">";
    pageHTML += loadProjectCards("return");

    // wrap the whole thing up
    pageHTML += "</div>";
    pageHTML += "</div>";

    // return
    primaryContainer.innerHTML = pageHTML;
}

function loadProjectCards(type){
    pageHTML = "";

    // default to 4 cards per row
    numCards = 4;

    //if mobile, make it 2
    if(isMobile){
        numCards = 2;
    }

    cardTwelfth = 12/numCards;
    
    searchQuery = document.getElementById('searchQuery');
    if(searchQuery != null){
        searchQuery = searchQuery.value.toUpperCase();
    }

    for(var i = 0; i < projects.length; i++){
        // check if starting a new row
        if(i % numCards == 0){
            pageHTML += "<div class=\"row\">"
        }

        titleCaps = projects[i]['title'].toUpperCase();
        if(searchQuery == null || titleCaps.includes(searchQuery)){
            // otherwise loop through the cards
            pageHTML += "<div class=\"col-" + cardTwelfth + " text-center projectCard\" onclick=\"setHash('Projects/" + projects[i]['hash'] + "')\">"
            pageHTML += "<img class=\"projectCardImage\" src=\""+ projects[i]['image'] + "\">";
            pageHTML += "<h3><b>" + projects[i]['title'] + "</b></h3>";

            // only show description if desktop
            if(!isMobile){
                pageHTML += "<p class=\"projectCardText\">" + projects[i]['description'] + "</p>";
            }
            pageHTML += "</div>";
        }
        // close up the new row if you have to
        if(i % numCards == 3 || i == (projects.length-1)){
            pageHTML += "</div>";
        }

    }

    if(type == "return"){
        return pageHTML;
    } else{
        projectCardContainer = document.getElementById("projectCardList");
        projectCardContainer.innerHTML = pageHTML;
    }


    
}

function loadProjectResultPage(urlKey){
    // make sure there is actually a key
    if(urlKey == undefined || urlKey == null || urlKey == ""){
        setHash("Projects");
    }
    
    var index = -1;
    // get the index of the result based on url key:
    for(var i =0; i < projects.length; i++){
        if(urlKey == projects[i]['hash']){
            index = i;
        }
    }

    // make sure the index changed
    if(index == -1){
        setHash("Projects");
    }

    projectParagraphs = projects[index]['projectParagraphs']

    projectResultsContainer = "projectResultsContainer";
    smallImage = "smallImage"
    if(isMobile){
        projectResultsContainer += "_mobile";
        smallImage = "dashboard";
    }

    // load top page
    pageHTML = "";
    pageHTML += "<div class = \"" + projectResultsContainer + " shadow-sm\">";
    pageHTML += "<h1 class=\"projectsTitleTextResult\">" + projects[index]['title'] + "</h1>";
    pageHTML += "<div class=\"projectResultDate\"> Chris Long | ";
    pageHTML += "<span class=\"pointer\" onclick=\"sendEmail()\">cml3ta@gmail.com</span>";
    pageHTML += " | " + projects[index]['date'] + "</div>";

    if(isMobile){
        pageHTML += "<br>"
    }
    // lets load the dashboard if desktop, otherwise image
    pageHTML += "<br>"
    pageHTML += "<div class=\"dashboardContainer\">"
    pageHTML += "<img class=\"dashboardFrame\" src=\""+ projects[index]['dashboardImage'] + "\">";
    pageHTML += "</div>"
    pageHTML += "<div class=\"dashImageFooter\">" + projects[index]['imageFooter'] + "</div>";
    
    // load the rest of the paragraphs
    for(var i = 0; i < projectParagraphs.length; i++){
        pageHTML += "<hr class=\"paragraphDivider\"></hr>";
        pageHTML += "<h5 class=\"projectResults_secHeader\">" + projectParagraphs[i]['sectionheader'] + "</h5>";
        pageHTML += "<br>";
        pageHTML += "<div class=\"" + smallImage + "Container\">"
        pageHTML += "<img class=\"" + smallImage + "Frame\" src=\""+ projectParagraphs[i]['smallImage'] + "\">";
        pageHTML += "</div>"
        pageHTML += "<p class=\"projectResults_paragraph\">" + projectParagraphs[i]['paragraph'] + "</p> ";
    }

    pageHTML += "<br><br>";

    // wrap the whole thing up
    pageHTML += "</div>";

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


/*
// table for blackjack results table:
<center><table><tr><th>Strategy</th> <th>Regular Wins</th> <th>Blackjack Wins</th> <th>Losses</th> <th>Pushes</th> </tr><tr> <td>Follow Dealer Rules</td> <td>36.6%</td> <td>4.5%</td> <td>49.1%</td> <td>9.7%</td> </tr> <tr> <td>No Double, No Split</td> <td>38.2%</td> <td>4.5%</td> <td>48.9%</td> <td>8.5%</td> </tr> <tr> <td>Yes Double, No Split</td> <td>39.9%</td> <td>4.0%</td> <td>47.9%</td> <td>8.2%</td> </tr> <tr> <td>No Double, Yes Split</td> <td>38.3%</td> <td>4.8%</td> <td>48.4%</td> <td>8.5%</td> </tr> <tr> <td>Yes Double, Yes Split</td> <td>40.0%</td> <td>4.2%</td> <td>47.6%</td> <td>8.2%</td> </tr> </table></center><br>
*/