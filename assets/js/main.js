var primaryContainer = document.getElementById("primaryContainer");
var navContainer = document.getElementById("navContainer");
var modalsContainer = document.getElementById("modalsContainer");

var isMobile = false; //initiate as false
var screenWidth = screen.width;

window.historyInitiated = true;

// device detection
if(screenWidth < 750) { 
    isMobile = true;
}

const bioCardDeets = [
    {
        bolded: "Interested in",
        regular: "advancing technology solutions to address consumer challenges",
        image: "./../assets/images/star.png"
    },
    {
        bolded: "Studied at",
        regular: "The University of Virginia",
        image: "./../assets/images/capandgown.png"
    },
    {
        bolded: "Degree in",
        regular: "Commerce (Finance and Business Analytics) and Computer Science",
        image: "./../assets/images/books.png"
    },
    {
        bolded: "Work as",
        regular: "Businenss Technology Analyst at Deloitte Consulting LLP",
        image: "./../assets/images/briefcase.png"
    },
    {
        bolded: "Proficient in",
        regular: "Java, JavaScript, HTML/CSS, R, SQL, Tableau, C++, VBA",
        image: "./../assets/images/skills.png"
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
        title:"Oscar for Best Picture",
        description:"What does it take to win the covetted award for Best Picture at the Oscars? A big budget? High critic ratings? Let's find out",
        image:"/assets/images/oscarlogo.png",
        hash: "oscarbestpicture",
        date: "Apr. 13, 2020",
        projectParagraphs: [
            {
                sectionheader: "What factors can predict the Best Picture winner?",
                paragraph: "The Award for Best Picture at the <a class=\"links\" href=\"https://oscar.go.com/\" target=\"_blank\">Oscars</a> is an award that has been presented annually since the awards debuted in 1929. This is one of the biggest nights in Hollywood, where movie fans around the world tune in to see how their favorite movies fare. For this project, I will look to see if there is a way to predict which nominated movie ultimately wins the prize. The table above shows a statistical overview of some of the factors that I included in this analysis. These factors include:<br><br><b>Financial (Box Office Sales, Budget)</b>: Financial performance of the movie adjusted for inflation<br><br><b>Diversity (Female Stars, Non-White Stars)</b>: The number of <a class=\"links\" href=\"https://www.imdb.com/?ref_=nv_home\" target=\"_blank\">IMDB</a> \"Stars\" in each movie that are either female or non-white according to <a class=\"links\" href=\"https://www.census.gov/quickfacts/fact/table/US/PST045218\" target=\"_blank\">US Census</a> demographic groups<br><br><b>Movie Ratings (Google Users, <a class=\"links\" href=\"https://www.imdb.com/?ref_=nv_home\" target=\"_blank\">IMDB</a>, <a class=\"links\" href=\"https://www.metacritic.com/\" target=\"_blank\">Metacritic</a>, <a class=\"links\" href=\"https://www.rottentomatoes.com/\" target=\"_blank\">Rotten Tomatoes</a>)</b>: Miscellaneous ctitic and fan reviews<br><br><b>Academy Nominations (Total Nominations)</b>: Total Oscar nominations in addition to Best Picture<br><br>Each of these categories are important predictors of Oscar success. The data includes information on Oscar Best Picture nominated movies from the last 10 years (88 movies total). I will break down each of these factors in the rest of this anlaysis. To summarize, I ultimately find that <b>movies with very small budgets, small box office results, many Oscar nominations, and a more diverse cast ultimately lead to award success.</b>",
                smallImage: "./../../assets/images/oscarsfactortable.png"
            },
            {
                sectionheader: "How Oscar Voting Works",
                paragraph: "The Oscar Academy Awards employ what is called an instant run-off voting system, or a preferential voting system. In 2017, <a class=\"links\" href=\"https://www.vox.com/2016/1/14/10767930/oscar-nominations-voting\" target=\"_blank\">Vox</a> created a very compelling <a class=\"links\" href=\"https://www.imdb.com/title/tt1663202/?ref_=nv_sr_srsg_0\" target=\"_blank\">video</a> about how this system heavily benefits mediocre, non-daring movies. Here is a brief explanation of how the system works:<br><br>1. Each Academy member ranks the movies from first to last place<br><br>2. The votes for the movie with the fewest first place votes now move to the voter's second choice<br><br>3. This process continues until a movie has at least 50% of the total votes<br><br>For example, refer to the image above. In this scenario, there are 11 voters that have ranked Movie 1, Movie 2, and Movie 3 from first to last place. Initially, Movie 2 received five first place votes, Movie 1 received four first place votes, and Movie 3 received only two first place votes. Since Movie 3 has the fewest first place votes, those votes now move to the voters' second choice movie: Movie 1.  Movie 1 now combines its original four first place votes with the two newly gained second place votes from Movie 3. Movie 1 now has six total votes compared to the five total votes for Movie 2. Since Movie 1 now has greater than 50% of the voter share (55%), Movie 1 is now the official winner of the award.<br><br>This runoff system greatly benefits movies with many 2nd choice or 3rd choice votes, as they gradually accumulate enough votes to beat movies that originally had many more 1st choice votes. One can quickly reason that polarizing movies do poorly in this system. Although they may receive many first place votes from their supporters, it is unlikely that they will have many 2nd or 3rd choice votes. Therefore, <b>this system ultimately benefits the movies that are universally <i>liked</i>, but not <i>loved</i>.</b> This observation is seen in the results of this project, as niche movies with small budgets routinely outperform the year's controversial movie.",
                smallImage: "./../../assets/images/oscarsrunoffvotingsimple.png"
            },
            {
                sectionheader: "Impact of Movie Financials",
                paragraph: "In short, box office revenue and movie budget are two of the most important factors to determine whether or not a movie will win Best Picture. The correlation of both of these variables is significant at the 0.1 level (0.05 and 0.06, respectively) and have strong negative correlations with winning the award. In fact, the above scatterplot shows that <b>there has not been a Best Picture winner in the last 10 years with a movie budget greater than $55M or a box office revenue of $550M.</b><br><br>This cutoff is significant, removing 25 of the 88 movies in the sample size (28%) from contention. It even removed odds-on favorites to win the award such as <a class=\"links\" href=\"https://www.imdb.com/title/tt1663202/?ref_=nv_sr_srsg_0\" target=\"_blank\">The Revenant</a> in 2016 and <a class=\"links\" href=\"https://www.imdb.com/title/tt8579674/\" target=\"_blank\">1917</a> just this last year. If I remove the movie <a class=\"links\" href=\"https://www.imdb.com/title/tt1024648/?ref_=nv_sr_srsg_0\" target=\"_blank\">Argo</a>  (2013) or  <a class=\"links\" href=\"https://www.imdb.com/title/tt1504320/?ref_=nv_sr_srsg_3\" target=\"_blank\">The King's Speech</a> (2011), then this financial window gets even tighter. <br><br>I only have to go one year further back to see <a class=\"links\" href=\"https://www.imdb.com/title/tt0499549/?ref_=nv_sr_srsg_3\" target=\"_blank\">Avatar</a>, a movie with a $240M budget and $2.8B in box office revenue, lose the award to a movie with 6% of the budget and 2% of the revenue in <a class=\"links\" href=\"https://www.imdb.com/title/tt0887912/?ref_=nv_sr_srsg_0\" target=\"_blank\">The Hurt Locker</a>. This is such a strong rule of thumb for movies, that I will <b>filter the data to only the remaining 63 movies within this <i>Financially Viable Window</i> </b>for the rest of the project.",
                smallImage: "./../../assets/images/oscarsfinancialscatter.png"
            },
            {
                sectionheader: "Impact of Award Nominations",
                paragraph: "It makes logical sense that movies nominated for many awards would have a likelihood of winning the overall award for Best Picture. When filtered to the aforementioned financially viable window, the above bar chart shows that the <b>movie with the most or second-most total nominations wins in all but one of the previous ten years</b>. The exception to this rule occurred in 2018 when <a class=\"links\" href=\"https://www.imdb.com/title/tt6966692/?ref_=nv_sr_srsg_3\" target=\"_blank\">Green Book</a> won the award while receiving significantly fewer total nominations than the other movies in the financially viable window.<br><br>In short, I can immediately <b>narrow the list of movies that have a chance of winning the award to the 2-3 movies with the most award nominations in the financially viable window</b>. Although these are simply rules of thumb, you certainly have a strong chance of picking the ultimate winner following them (9 of the last 10 years).",
                smallImage: "./../../assets/images/oscarstotalnominations.png"
            },
            {
                sectionheader: "Other Miscellaneous Impacts",
                paragraph: "There are many other factors that are significant predictors of whether a movie will win the award. First, the data suggests that award winning movies have a higher proportion of ethnically diverse actors and actresses. This can be seen in the left chart above. In 2015, there were 0 non-caucasian actors and actresses in any of the 8 nominated movies. This caused significant <a class=\"links\" href=\"https://www.latimes.com/entertainment/movies/la-et-mn-oscar-nominations-diversity-20150116-story.html\" target=\"_blank\">controversy</a> when it occurred. <b>Since 2016, every winning movie has had at least one of their three lead actors/actresses belong to a U.S. ethnic minority</b>. Movies like <a class=\"links\" href=\"https://www.imdb.com/title/tt7131622/?ref_=nv_sr_srsg_0\" target=\"_blank\">Once Upon a Time in Hollywood</a>, <a class=\"links\" href=\"https://www.imdb.com/title/tt5013056/?ref_=nv_sr_srsg_0\" target=\"_blank\">Dunkirk</a>, and other possible award winners fail in this criteria.<br><br>Another important set of factors are the critic reviews of the movie. Metacritic and Rotten Tomatoes seem to correlate most directly with award winning movies. In fact, the above chart on the right shows that <b>9 of the 10 winners have a Rotten Tomatoes score of at least 90 and a Metacritic score of at least 85</b>. The exception to this rule, again, is Green Book.",
                smallImage: "./../../assets/images/oscarotherimpacts.png"
            },
            {
                sectionheader: "Regression Model to Predict Winner",
                paragraph: "Using the factors mentioned, I created a simple regression model to estimate a <i>score</i> for each movie. The average movie in this dataset has a score of 0.11, whereas the average winning movie in this dataset has a score of 0.34. The three key differentiators between the average movie vs. the average <i>winning</i> movie are: (1) Total Nominations, (2) Budget, and a (3) Diverse Cast. <br><br>This model accurately predicted 8 of the last 10 winners, incorrectly predicting the winner in only 2018 and 2012. This model certainly has some shortcomings though. First, it is created using the testing data, so it is unclear if it will continue to succeed in future years. Second, the dataset only uses 10 years of data, or 88 movies. There is still work to be done, but this model certainly aligns with the insights that we saw earlier and will be fun to reuse in future years.",
                smallImage: "./../../assets/images/oscarsregressionresults.png"
            },
            {
                sectionheader: "Great Cinematography is King, and it's Predictable (...kind of)",
                paragraph: "Data over the last ten years makes a few things clear: movies with smaller budgets, more award nominations, higher critics ratings, and a more diverse cast have a greater chance of winning the Oscar for Best Picture. Many of these things are to be expected, but I think the gravity of their importance is significant. Through a few simple filters and deliberate thought, I can fairly quickly reduce the nominated movies into the two or three movies that have a realistic chance of winning.<br><br>So do the Oscars reward mediocre, non-polarizing movies? I don't think so. I think the Oscars rewards movies that made deliberate cinematic choices to create a cost-effective movie. To be the <i>Best</i> Picture of the year, directors don't need to use CGI, only hire celebrity actors and actresses, or spend millions of dollars in marketing. I think it levels the playing field for all nominated movies and truly rewards movies that provide a great experience to all.<br><br>Even with all this analysis, there is certainly still lots of unpredictability. Think about the exception to all our rules: Green Book. Although we can make an informed prediction about which movies will <i>probably</i> win the Oscar, we will continue to tune in every year and might just be surprised.",
                smallImage: "./../../assets/images/oscarsdashboard.png"
            }
        ]
    },
    {
        title:"Blackjack Casino Odds",
        description:"What are your real odds of leaving the casino a winner? Let's see how it varies with different strategies and table rules",
        image:"/assets/images/blackjacklogo.png",
        hash: "blackjackodds",
        date: "Mar. 20, 2020",
        projectParagraphs: [
            {
                sectionheader: "What are our odds of winning in blackjack?",
                paragraph: "<a class=\"links\" href=\"https://bicyclecards.com/how-to-play/blackjack/\" target=\"_blank\">Blackjack</a> (also known as 21) is one of the most common casino games, with tables at most casinos and easy-to-follow rules. <a class=\"links\" href=\"https://www.888casino.com/blog/blackjack-strategy-guide/scouting-blackjack-tables\" target=\"_blank\">Table rules</a>, however, can vary by casino or even vary by table within a casino. Some key table rules to look out for are the payout for a blackjack win, restrictions of when you can <a class=\"links\" href=\"https://www.casino.org/blog/double-down-blackjack/\" target=\"_blank\">double</a> or <a class=\"links\" href=\"https://www.wikihow.com/Know-when-to-Split-Pairs-in-Blackjack\" target=\"_blank\">split</a>, or whether the dealer must stay or hit on a soft 17. Regardless of the table rules, there are four possible outcomes of each blackjack game:<br><br><b>A Blackjack Win:</b> A winning hand that consists of only two cards that sum to 21<br><br><b>A Regular Win: </b>A hand that is superior to the dealer's hand, but is not a blackjack<br><br><b>A Loss to the Dealer: </b>A hand that is inferior to the dealer's hand<br><br><b>A Push:</b> A hand that has an equivalent value to the hand of the dealer.<br><br>For this project, I will look to see the relative importance of each component of the <a class=\"links\" href=\"https://www.blackjackapprenticeship.com/blackjack-strategy-charts/\" target=\"_blank\">basic strategy</a> and whether player friendly table rules (ex. 3:2 payout on a blackjack win) can push our odds of winning to 50%. In this pursuit, I created an algorithm that simulates 1,000,000 <i>completed</i> games of blackjack (more to come on this later) to determine the probability of each of the above four outcomes occurring. This simulation also remove certain components of the basic strategy to determine which are the most critical to achieving the highest possible odds of winning. Ultimately, I find that <b> effectively doubling down on hands and a 3:2 payout for a blackjack win are the most critical components of winning in blackjack</b>. In fact, I find that perfect use of the basic strategy plus favorable table rules push our odds of winning close-to or even above 50%.",
                smallImage: "./../../assets/images/blackjackresultsbarchart.PNG"
            },
            {
                sectionheader: "What is the \"Basic Strategy\"",
                paragraph: "Blackjack, like most games, is a game of pre-defined probabilities. Therefore, blackjack players have created a strategy of when to properly hit, stand, double down, split pairs, etc. This is known as the <a class=\"links\" href=\"https://www.blackjackapprenticeship.com/blackjack-strategy-charts/\" target=\"_blank\">basic strategy</a>. As you can see in the charts above, this strategy is a simple table that uses the sum of your cards vs. the card that the dealer is showing. For example, think about the scenario where the dealer is showing a 5 or 6. It is very likely that the dealer will go past 21 in this scenario and, therefore, we should not take an additional card even when the total of our hand is only 12. Beyond knowing when to hit or stay, this chart provides immense value by telling us when to <b>take advantage of high probability wins by doubling</b> our bet, and when to <b>split our weaker hand into two better hands.</b><br><br>In this project, we will compare the basic strategy to that of the dealer's required strategy. We will assume the table rule that the dealer is required to stay anytime their total (soft or hard) is 17 or greater. We will call this the <i>Follow Dealer's Rules</i> strategy. As we'll see in the next section, <b>our odds of winning are only 41.1% if we also follow this strategy. But if we use the optimal strategy, out odds of winning increase all the way to 44.2%.</b> Therefore, using this strategy is paramount to winning in blackjack, as it provides us with the statistically best chance of winning. ",
                smallImage: "./../../assets/images/blackjackoptimalstrategy.png"
            },
            {
                sectionheader: "Rate of Wins, Losses, and Pushes by Strategy",
                paragraph: "To conduct this simulation, I created a program that uses 8 shuffled decks, one player, and a dealer. For each of the 1,000,000 games that are simulated, the cards are dealt in the same order as they would be at a real blackjack table: player, dealer, player, dealer. Then, the player makes their \"decision\" based on the sum of their hand and the value of the second card dealt to the dealer (i.e. the \"Dealer's Up Card\"). This decision may vary between each of the above strategies. For example, the player may decide to double in one strategy but only hit in a different strategy. <b>These varying strategies show us the impact of each individual component of the complete basic strategy</b>. <br><br>The simulation defines a \"game\" as every time that we bet money. As an example, think about the scenario where we bet $20 to get dealt our cards and we receive a pair of 8's. As the basic strategy above dictates, we will always split this pair. Therefore, we should bet another $20 and, thus, we have started a second game within the same deal. If we win both of those hands, it is the equivalent of winning two $20 games. If we lose both, we have just lost those two games. This definition holds for doubles as well. If we bet $20 and receive an 11, then we should always double that bet and bet another $20. If we win that one hand, it is equivalent to winning two games and, therefore, it gets treated as such.<br><br>We see that <b>using the basic strategy without splitting or doubling improves our odds of winning by about 1.5% over the <i>Follow Dealer's Rules</i> strategy. If we add splitting or doubling, then we improve our odds by an additional 0.4% and 1.2% respectively.</b> Finally, the full basic strategy (<i>Yes Double, Yes Split</i>) includes both of those gains and therefore adds an additional 1.5% towards our odds of winning. As you can see in the above table, we are still only winning 44.2% of hands using the full basic strategy.",
                smallImage: "./../../assets/images/blackjackresulttable.PNG"
            },
            {
                sectionheader: "Impact of Factoring in Pushes",
                paragraph: "If you view blackjack in the same way that you view other sports (basketball, football, etc.), then you would expect that a tie would lead to an overtime round. This is how we should be viewing the result of a push. <b>Each push’s \"overtime\" round is the next deal</b>. This leads us to a new term: a completed game of blackjack. <br><br>A completed game of blackjack begins when the bet is placed and concludes when the player has either made money from the bet or lost the money placed in the bet. For example, let’s say that we bet $20 on a hand of blackjack and get an 18. If the dealer also gets an 18, then we have a push. The game is not over. We have neither won nor lost. We enter the first \"overtime\" deal and this time we win. Both of those deals together constitute a complete game. <br><br>Applying this new defintion to the results of our best strategy’s (Yes Double, Yes Split) result, we now need to play the \"overtime\" games of these hands. So, <b>4.2% of those pushes are now blackjack wins, 40.0% are now regular wins, etc</b>. To give a simplified example, let’s ignore when we have multiple pushes in a row: <br><br>New Expected Regular Wins: 40.0% + 40.0% * 8.2% = 43.3%<br><br>New Expected Blackjack Wins: 4.2% + 4.2% * 8.2% = 4.5%<br><br>New Expected Losses: 47.6% + 47.6% * 8.2% = 51.5%<br><br>Another way to perform this analysis, is to totally remove pushes from the count altogether and look only at the completed games. This is exactly how the simulation calculates the odds, where we find that the new <b>odds of getting a regular win are 43.6% and the odds of getting a blackjack win are 4.6% - for a total of 48.2% of winning each hand. </b>",
                smallImage: "./../../assets/images/blackjackpushovertime.png"
            },
            {
                sectionheader: "Impact of Player Friendly Table Rules",
                paragraph: "<b>Player friendly rules, such as a 3:2 payout on blackjack wins, move our odds of winning from the 48.2% to 50%</b>. Blackjack wins paying out at 3:2 is a common example of a player friendly table rule. For example, a $20 bet that results in a blackjack win would return $30. Using our earlier definition of a \"game\", we have essentially won 1.5 games. This rule allows us to win more games than what we bet, a crucial advantage that is <i> not shared by the dealer</i>. If we include that 1.5x payout for blackjack wins in the previous equation, we can actually calculate our odds of winning to be greater than 50%. <br><br>New Expected Total Wins: 43.6% + 1.5 * 4.6% = 50.5%<br><br>Therefore, with this one (very important) table rule, <b>we can actually have a 50% chance of winning at the casino</b> by playing the basic strategy to perfection and taking advantage of player friendly rules. Any deviation from the basic strategy or variation in table rules, however, can quickly bring those odds of winning back down.",
                smallImage: "./../../assets/images/blackjacktotaloddsgauge.png"
            },
            {
                sectionheader: "Players have 50% Chance of Winning in Blackjack with Perfect Play and Friendly Rules",
                paragraph: "Simulating 1,000,000 hands of blackjack shows that playing the blackjack basic strategy to perfection and capitalizing on player friendly rules provides blackjack players with a 50% chance of winning money at the table. The two most essential components of realizing these odds are clear: capitalize on doubling opportunities and search for a high payout on blackjack hands.<br><br>Then why does everyone seem to always lose money when they play blackjack at the casino? That is for one specific reason: they do not play the basic strategy. This is because either they think they can outsmart the proven basic strategy or simple mistakes in the heat of a game. It is certainly not easy to play the basic strategy to perfection every time, but the simulated results show that it is a absolutely critical skill in order to win at the casino. In either case, blackjack absolutely presents the opportunity to realize a nearly 50% win rate. Blackjack has favorable enough odds to let you last a long time on the table before losing and, thus, should be an entertaining experience. In either case, I recommend <b>memorizing the basic strategy, looking for player friendly table rules, and walking into the casino confidently </b> because you have great odds... if you are prepared. </b>",
                smallImage: "./../../assets/images/blackjackdashboard.png"
            }
        ]
    },
    {
        title:"NBA 1st Quarter Leads",
        description:"How critical is it have a strong start in the NBA given today's profilic offenses? Let's see if 10+ point first quarter leads win games",
        image:"/assets/images/nbalogo.png",
        hash: "nbaleads",
        date: "Feb. 20, 2020",
        projectParagraphs: [
            {
                sectionheader: "Do teams with 10+ point first quarter leads end up winning the game?",
                paragraph: "It seems that with the prolific offenses that we see in the <a class=\"links\" href=\"https://www.nba.com\" target=\"_blank\">NBA</a> today that huge early leads are very easily lost. I decided to put this to the test. I collected <a class=\"links\" href=\"https://www.scoreboard.com/nba/results/\" target=\"_blank\">quarter-by-quarter scores</a> of all games in the first half the 2019-2020 season (i.e. until the <a class=\"links\" href=\"https://www.nba.com/allstar\" target=\"_blank\">All-Star Break</a>) and filtered only to those games where there was at least a 10 point deficit at the end of the first quarter. This resulted in a sample size of 195 games. Let's start with the obvious question: Did those teams win? Teams with a <b>10+ point first quarter lead ended up only winning the game about 80% of the time</b>.<br><br>The ability to hold a 10+ point lead varies greatly among different teams. League leading teams like the <a class=\"links\" href=\"https://www.nba.com/bucks/\" target=\"_blank\">Milwaukee Bucks</a> or the <a class=\"links\" href=\"https://www.nba.com/lakers/\" target=\"_blank\">LA Lakers</a> have held all of their 10+ point first quarter leads. Other teams such as the <a class=\"links\" href=\"https://www.nba.com/pacers/\" target=\"_blank\">Indiana Pacers</a> and <a class=\"links\" href=\"https://www.nba.com/warriors/\" target=\"_blank\">Golden State Warriors</a> have held only 50% of their 10+ point first quarter leads. I ultimately find that <b>the early first quarter lead will likely be the largest lead of the game and the means of holding the lead varies greatly between offensive and defensive teams</b>. ",
                smallImage: "./../../assets/images/nbaleadheldbyteam.PNG"
            },
            {
                sectionheader: "Offensive vs. Defensive Teams",
                paragraph: "I combined the previous game data with the <a class=\"links\" href=\"https://stats.nba.com/teams/traditional/?sort=PTS&dir=-1\" target=\"_blank\">offensive</a> and <a class=\"links\" href=\"https://stats.nba.com/teams/opponent/?sort=OPP_PTS&dir=-1\" target=\"_blank\">defensive</a> ranking of each leading team to determine whether teams that prioritize offensive or defensive schemes hold their lead more effectively.<br><br>If a team was in the top half of the league offensively and top half defensively then they are listed as <b>Both</b>. As you might expect, these teams are often the best teams in the league such as the Milwaukee Bucks, <a class=\"links\" href=\"https://www.nba.com/clippers/\" target=\"_blank\">LA Clippers</a>, and <a class=\"links\" href=\"https://www.nba.com/celtics/\" target=\"_blank\">Boston Celtics</a>. If a team was in the top half of the league in only one of the offensive or defensive rankings, they are listed as <b>Offensive</b> or <b>Defensive</b>. On the offensive side, a few examples of teams in this category are the <a class=\"links\" href=\"https://www.nba.com/rockets/\" target=\"_blank\">Houston Rockets</a>, <a class=\"links\" href=\"https://www.nba.com/mavericks/\" target=\"_blank\">Dallas Mavericks</a>, and <a class=\"links\" href=\"https://www.nba.com/suns/\" target=\"_blank\">Phoenix Suns</a>. On the defensive side, a few examples of these teams are the <a class=\"links\" href=\"https://www.nba.com/jazz/\" target=\"_blank\">Utah Jazz</a>, <a class=\"links\" href=\"https://www.nba.com/nuggets/\" target=\"_blank\">Denver Nuggets</a>, and Indiana Pacers. Finally, there are the teams in the bottom half offensively and defensively listed as <b>Neither</b> such as the <a class=\"links\" href=\"https://www.nba.com/cavaliers/\" target=\"_blank\">Cleveland Cavaliers</a>, Golden State Warriors, and  <a class=\"links\" href=\"https://www.nba.com/knicks/\" target=\"_blank\">New York Knicks</a>.",
                smallImage: "./../../assets/images/nbatypescatter.png"
            },
            {
                sectionheader: "Impact of Offensive vs. Defensive Focus",
                paragraph: "As you can see in the above chart, there is very little difference between offensive and defensive teams when it comes to successfully holding their 10+ point first quarter lead. Both categories of teams win about 75% of such games. Teams in the Both category see extreme success in holding their leads, with a win rate of about 92%. And finally, teams in the Neither category hold their 10+ point first quarter lead only 69% of the time. In conclusion, <b>neither offensively or defensively aligned teams hold an advantage over the other. But well-rounded teams hold their leads <u>significantly</u> better than all others</b>. The difference between offensive and defensive teams, however, may lie in <i>how</i> they hold their lead. ",
                smallImage: "./../../assets/images/nbaleadheldbytype.PNG"
            },
            {
                sectionheader: "How Teams Hold Leads",
                paragraph: "Taking this one step further, we see that offensive and defensive teams hold their leads very differently. By maintaining the same groups (Both, Offensive, Defensive, or Neither) as before, we can now track how teams lose their lead by category. As seen in the above chart, here is what we can determine:<br><br><b>Both</b>: These teams tend to steadily hold their lead throughout the game. You can bet on these teams holding (but maybe not expanding upon) a large first quarter lead.<br><br><b>Offensive</b>: These teams are volatile when it comes to holding leads. As you can see, an offensive team's lead may quickly decrease in one quarter, but then quickly reappear in the next quarter. <br><br><b>Defensive</b>: These teams take a much steadier approach to holding their lead. As you can see, a defensive team may let their opponents reduce their lead throughout the game before ultimately winning. Their first quarter 10+ point lead will probably be one of the largest leads of the night.<br><br><b>Neither</b>: These teams are unpredictable, with the largest loss of their leads occurring in the 3rd quarter. It is tough to discern any major insights from these teams, but I would be skeptical of the security of any early lead with these teams.<br><br>Aside from the top-tier teams in the league, all teams struggle to build upon that early lead. Often, the first quarter lead is their largest lead of the entire game. <b>Defensively aligned teams in particular seem to not have the volatility to have another dominant quarter and, therefore, their first quarter lead will often decrease </b>despite ultimately winning the game. Offensively aligned teams, on the other hand, do have that volatility; they may lose much of their lead in one quarter but then gain it all back the next quarter.",
                smallImage: "./../../assets/images/nbaleadchanges.PNG",
            },
            {
                sectionheader: "Offensive and Defensive Teams Both Hold Leads, the Difference is How",
                paragraph: "When it comes to holding a large first quarter lead, it is clear that offensive and defensive teams hold their lead differently. Defensive teams employ a \"Bend, Don't Break\" strategy where their lead will decrease by a few points each quarter, but they will ultimately win the game. Conversely, offensive teams employ a strategy of volatility to either lose or build upon their lead. Both are equally effective strategies in the aggregate. In both strategies, however, teams will struggle to build upon an early lead. On average, that early 10+ point lead will be the largest lead of the game. We find that <b>score differentials of large first quarter leads seem to plateau or slowly decrease after the first quarter.</b> <br><br>So when making a decision on how you feel about an early lead in the NBA, think about the leading team's strengths (offensive vs. defensive) and decide when you feel that the lead has begun to plateau.",
                smallImage: "./../../assets/images/nbaleadhelddashboard.PNG"
            }
        ]
    },
    {
        title:"4th Down Expected Value",
        description:"When does the data say you have a positive expected value when going for it on 4th down? Does that vary by team? Let's find out",
        image:"/assets/images/nfllogocomingsoon.png",
        imageFooter:"",
        date: "",
        projectParagraphs: [
            {
                sectionheader: "",
                paragraph: "",
                smallImage: ""
            }
        ]
    },
    {
        title:"Tax Money Allocation",
        description:"Let's look at where our tax money is allocated and see whether or not it deviates from public perception. Is it even close?",
        image:"/assets/images/taxtransparencylogocomingsoon.png",
        dashboardImage:"",
        imageFooter:"",
        date: "",
        projectParagraphs: [
            {
                sectionheader: "",
                paragraph: "",
                smallImage: ""
            }
        ]
    }
];

// for when the page loads
window.onload = function(){
    targetUrl = getTargetUrl();
    if(urlBits.length > 3){
        loadPage();
    } else {    
        changePage("");
    }
}

// for when we use back or forward button
window.onpopstate = function(){
    this.loadPage();
};

//  changing the page
function changePage(target){
    if(target==""){
        window.history.pushState("", "", "/");
    } else{
        window.history.pushState("", "", "/" + target + "/");
    }
    loadPage();
}

function getBaseUrl(){
    fullUrl = window.location.href;
    urlBits = fullUrl.split("/");
    // (0-2) unuseful, 3: page, 4:project(optional)

    return urlBits[0] + "/" +urlBits[1] + "/" + urlBits[2];
}

function getTargetUrl(){
    fullUrl = window.location.href;
    urlBits = fullUrl.split("/");
    // (0-2) unuseful, 3: page, 4:project(optional)

    if(urlBits.length == 3){
        return "";
    } else if(urlBits.length == 4){
        return urlBits[3];
    } else if(urlBits.length == 5){
        return urlBits[3] + "/" + urlBits[4]; 
    } else if(urlBits.length == 6){
        return urlBits[3] + "/" + urlBits[4] + "/" + urlBits[5]; 
    } else{
        return "";
    }
}

// page navigation
function loadPage(){
    // get the page to load
    urlTarget = getTargetUrl();

    // always load the nav bar
    loadNavBar(urlTarget);
    
    // catch the page
    if(urlTarget == "" ){
        loadHomePage();
    } else if(urlTarget.startsWith("resume")){
        loadResumePage();
    } else if(urlTarget == "projects/"){
        loadProjectsPage();
    } else if (urlTarget.startsWith("projects/")){
        urlKey = urlTarget.split("/")[1];
        loadProjectResultPage(urlKey);
    } else {
        changePage("")
    }

    // always load modals
    loadModals();

    // always start loaded at the top
    primaryContainer.scrollTop = 0;
}

function loadNavBar(urlTarget){
    extraFolderBack = "";
    if(urlTarget.split("/").length > 1){
        extraFolderBack = "../";
    }


    // start the container
    navHTML = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\">";

    // load the home page icon
    navHTML += "<a class=\"nav-link\" onclick=\"changePage('')\"><img class=\"navImage pointer\"";
    navHTML += "src=\"./../" + extraFolderBack + "assets/images/logo.png\" alt=\"Christopher Long\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\"></a>";
    
    // load the collapsible container
    navHTML += "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">";
    navHTML += "<span class=\"navbar-toggler-icon\"></span>";
    navHTML += "</button>";

    // load the collapsed content
    navHTML += "<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">";
    navHTML += "<ul class=\"navbar-nav mr-auto\">";

    // load the nav items
    navHTML += "<li class=\"nav-item\"> <div class=\"nav-link pointer\" onclick=\"changePage('resume')\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">Resume</div></li>";

    navHTML += "<li class=\"nav-item\"> <div class=\"nav-link pointer\"  onclick=\"changePage('projects')\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">Projects</div></li>";

    navHTML += "<li class=\"nav-item\"> <a class=\"nav-link\" href=\"https://www.linkedin.com/in/christopher-long-039b77b6/\" target=\"_blank\">LinkedIn</a> </li>";

    // close up  list
    navHTML += "</ul>";

    // add contact me
    navHTML += "<div class=\"contactInfoText nav-link\" data-toggle=\"modal\" data-target=\"#contactInfoModal\">Contact Me At...</div>";
    
    // close up container
    navHTML += "</div></nav>";

    // return
    navContainer.innerHTML = navHTML;

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
    pageHTML += "<img class = \"contactCardHeadshot\" src=\"./../assets/images/chris_headshot_square.jpg\"> ";
    pageHTML += "<img class = \"contactCardImage\" src=\"./../assets/images/bg.jpg\"> ";

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
        pageHTML += "<img class=\"resumeHeadshot\" src=\"./../assets/images/chris_headshot.jpg\" alt=\"Chris Long\"><br>";
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
    // help with source
    if(type=="append"){
        imageSrc = "./../..";

        // remove the projects without a hash
        var projectsToLoop = [];
        curHash = getTargetUrl();
        curHash = curHash.split("/")[1];

        for(var i = 0; i < projects.length; i++){
            if(projects[i]['hash'] != null && projects[i]['hash'] != curHash){
                projectsToLoop.push(projects[i]);
            }
        }

    } else {
        imageSrc = "./..";
        projectsToLoop = projects;
    }

    pageHTML = "";

    // default to 6 cards per row
    numCards = 6;

    //if mobile, make it 2
    if(isMobile){
        numCards = 2;
    }

    cardTwelfth = 12/numCards;
    
    searchQuery = document.getElementById('searchQuery');
    if(searchQuery != null){
        searchQuery = searchQuery.value.toUpperCase();
    }

    for(var i = 0; i < projectsToLoop.length; i++){
        // check if starting a new row
        if(i % numCards == 0){
            pageHTML += "<div class=\"row\">"
        }

        titleCaps = projectsToLoop[i]['title'].toUpperCase();
        if(searchQuery == null || titleCaps.includes(searchQuery)){
            // otherwise loop through the cards
            pageHTML += "<div class=\"col-" + cardTwelfth + " text-center projectCard\" onclick=\"changePage('projects/" + projectsToLoop[i]['hash'] + "')\">"
            pageHTML += "<img class=\"projectCardImage\" src=\"" + imageSrc +  projectsToLoop[i]['image'] + "\">";
            pageHTML += "<h3><b>" + projectsToLoop[i]['title'] + "</b></h3>";

            // dont show description if mobile or append
            if(!isMobile){
                if(type != "append"){
                    pageHTML += "<p class=\"projectCardText\">" + projectsToLoop[i]['description'] + "</p>";
                }
            }
            pageHTML += "</div>";
        }
        // close up the new row if you have to
        if(i % numCards == (numCards-1) || i == (projectsToLoop.length-1)){
            pageHTML += "</div>";
        }

    }

    if(type == "return" || type=="append"){
        return pageHTML;
    } else{
        projectCardContainer = document.getElementById("projectCardList");
        projectCardContainer.innerHTML = pageHTML;
    }


    
}

function loadProjectResultPage(urlKey){
    // make sure there is actually a key
    if(urlKey == undefined || urlKey == null || urlKey == ""){
        changePage("projects");
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
        changePage("projects");
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

    // load the rest of the paragraphs
    for(var i = 0; i < projectParagraphs.length; i++){
        if( i != 0 ){
            pageHTML += "<hr class=\"paragraphDivider\"></hr>";
        }
        pageHTML += "<h5 class=\"projectResults_secHeader\">" + projectParagraphs[i]['sectionheader'] + "</h5>";
        pageHTML += "<br>";
        pageHTML += "<div class=\"" + smallImage + "Container\">"
        pageHTML += "<img class=\"" + smallImage + "Frame\" src=\""+ projectParagraphs[i]['smallImage'] + "\">";
        pageHTML += "</div>"
        pageHTML += "<p class=\"projectResults_paragraph\">" + projectParagraphs[i]['paragraph'] + "</p> ";
    }

    // give a read more list of projects
    pageHTML += "<hr class=\"paragraphDivider\"></hr>";
    pageHTML += "<h5 class=\"projectResults_secHeader\">Interested in Another Project?</h5>";
    pageHTML += "<center><div style=\"width:80%\">";
    pageHTML += loadProjectCards("append");
    pageHTML += "</center>";

    // wrap the whole thing up
    pageHTML += "<br><br>";
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

function loadModals(){
    // contact me modal
    // start the modal container
    modalHTML = "<div class=\"modal fade\" id=\"contactInfoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"contactInfoModalLabel\" aria-hidden=\"true\">";

    // put in the header and closing details
    modalHTML += "<div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\">";
    modalHTML += "<div class=\"modal-header\">";
    modalHTML += "<h3 class=\"modal-title\" id=\"contactInfoModalLabel\">Contact Information</h5>";
    modalHTML += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>";
    modalHTML += "</div>";
    
    // body
    modalHTML += "<div class=\"modal-body\">";
    modalHTML += "<h5>Email Address</h5>";
    modalHTML += "<p class=\"links pointer\" onclick=\"sendEmail()\">cml3ta@gmail.com</p>";
    modalHTML += "<br>";
    modalHTML += "<h5>Phone Number</h5>";
    modalHTML += "<p>(540) 808-3354</p>";
    modalHTML += "<br>";
    modalHTML += "<h5>Area of Residence</h5>";
    modalHTML += "<p>Washington DC</p>";
    modalHTML += "</div></div></div></div>";

    // email me modal
    // header
    modalHTML += "<div class=\"modal fade bd-example-modal-lg\" id=\"sendEmailModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"sendEmailModalLabel\" aria-hidden=\"true\">";
    modalHTML += "<div class=\"modal-dialog modal-lg\"> <div class=\"modal-content\"> <div class=\"modal-header\">";
    modalHTML += "<h3 class=\"modal-title\" id=\"sendEmailModalLabel\">";
    modalHTML += "Email Me</h5>";
    modalHTML += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>";
    modalHTML += "</div>";

    // body
    modalHTML += "<div class=\"modal-body\">";
    modalHTML += "<label for=\"subject\">To:</label>";
    modalHTML += "<input class=\"form-control\" type=\"text\" placeholder=\"cml3ta@gmail.com\" readonly>";
    modalHTML += "<br>";
    modalHTML += "<label for=\"subject\">Subject:</label>";
    modalHTML += "<input class=\"form-control\" id=\"subject\" type=\"text\" placeholder=\"Subject\">";
    modalHTML += "<br>";
    modalHTML += "<label for=\"emailBody\">Message:</label>";
    modalHTML += "<textarea class=\"form-control\" id=\"emailBody\" rows=\"10\" placeholder=\"Message\"></textarea>";
    modalHTML += "</div>";
    modalHTML += "<div class=\"modal-footer\">";
    modalHTML += "<div class=\"button\" id=\"button-4\" onclick=\"sendEmail()\"><div id=\"underline\"></div>Send</div>";
    modalHTML += "</div> </div> </div> </div>";

    modalsContainer.innerHTML = modalHTML;
}

window.addEventListener("hashchange",loadPage,false);

