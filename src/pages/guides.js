import React from 'react'
import { Box, Typography, Link, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import BaseContainer from '../components/base-container'

const headerSizes = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
];

function nextHeaderSize(headerSize) {
  return headerSizes[Math.min(headerSizes.indexOf(headerSize) + 1, headerSizes.length - 1)];
}

function Guide(props) {
  return <div>
    <Box mt={4} ml={(props.padding) + 'px'}>
      <Typography variant={props.headerSize}>{props.title}</Typography>
      {props.content ? <Box mb={2}><Typography variant='body1'>{props.content}</Typography></Box> : null}
    </Box>
    {props.questions ? props.questions.map(question => 
      <Accordion key={question.title}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h6'>{question.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1' component={'span'}>
            {question.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ) : null}
    {props.subsections ? props.subsections.map(subsections => 
      <Guide key={subsections.title} {...subsections} headerSize={nextHeaderSize(props.headerSize)} padding={props.padding + 16}></Guide>
    ) : null}
  </div>
}

const GuideLink = (props) => <Link color='secondary' target='_blank' rel='noreferrer' {...props}>{props.children}</Link>;

function GuidesPage() {
  const guides = [
    {
      title: 'Academics',
      questions: [
        {
          title: 'Programme Structure',
          content:
            <div>
              You may refer <GuideLink href='https://www.comp.nus.edu.sg/cug'>here</GuideLink> for your degree requirements. Simply click on your major under "Degree Requirements per Cohort"
              and choose the year you were admitted from the panel on the right. Do note that not all modules are offered every semester.
            </div>,
        },
        {
          title: 'Past Year Exam Papers',
          content: <div>
            You may search and download past year examination papers <GuideLink href='https://libportal.nus.edu.sg/frontend/exam-papers'>here</GuideLink>. This is a repository of all past year final examination
            papers from every faculty that the school has uploaded into the system. However, do note that some papers will not be available
            should the module coordinator of that semester chooses not to upload his/her paper. Only the question paper, and not the answers,
            are provided on this platform.
          </div>,
        }
      ],
      subsections: [
        {
          title: 'S/U Options',
          questions: [
            {
              title: 'Rules',
              content:
              <div>
                JC students can S/U up to 32 MCs (or 8 modules) and Polytechnic students can S/U up to 20 MCs (or 5 modules) in their first year.
                Any unused S/Us can be carried forward to their remaining years subject to a maximum of 12 MCs (or 3 modules).
                <br/>
                <br/>
                Students can S/U only level 1000 modules and level 2000 modules with no prerequisites. All other modules cannot be S/U-ed.
                <br/>
                <br/>
                Many guides have included a rule of thumb such as "Keep all A, A- and B", "S/U all B- and below" etc.
                Our guide, however, approaches this issue from another perspective, as the decision to S/U or not is very much dependent on each individual.
              </div>
            },
            {
              title: 'To S/U or not?',
              content:
              <div>
                There are a few things to consider when deciding whether to S/U a module or not — your targeted class of honours,
                your confidence of reaching it, all your other grades relative to the grade in question, the number of S/Us left,
                and the number of S/U-able modules left.
                
                <br/>
                <br/>
                You should know the class you aim to achieve upon graduation, and a sensing of where you stand (at least you will
                know after 1 or 2 semesters from your grades). Most of the time, you will either be rather certain of attaining a
                certain class, or uncertain and hovering between 2 adjacent classes (e.g. 1st class and 2nd upper or 2nd upper and
                2nd lower). The purpose of S/U is then to maximize your CAP and help attain the honours class you want.
      
                <br/>
                <br/>
                Before analysing and deciding, you first need to know roughly where you stand. A good indication will be your CA
                before S/U-ing any modules, assuming you worked hard and will continue working equally hard for subsequent
                semesters. This will help form a realistic class to aim for, and help you decide which of the following
                2 scenarios you fall into. For example, if you get 4 B, 3 B+, and 3 A- (CAP 3.95 before S/U), you more
                or less can tell you'll either get a Distinction or Merit. This is because most of the modules are
                bell curved — putting in the same effort and being bell curved against your same peers will likely
                get you similar grades in future years. Of course, unless you can and decide to work much harder.
      
                <br/>
                <br/>
                <b>1st scenario.</b> Let's assume you're aiming a Distinction (&lt; 4.50 and &gt; 4.00). If you are confident of hitting that upon graduation
                (i.e. your grades are quite stable, or you are confident that it will be), simply S/U anything that is B+ and below
                as these will only pull your CAP down. Of course, ensure that you have sufficient S/Us to use it on grades lower
                than B+ first before S/U-ing those B+.
        
                <br/>
                <br/>
                <b>2nd scenario.</b> Now let's again assume that you're aiming for a Distinction (&lt; 4.50 and &gt; 4.00) — you're not
                confident of hitting it, but certain that you will get at least a Merit (&lt; 4.00 and &gt; 3.50). Since you're unsure,
                your B+ could either pull your CAP up, or down, depending on what class you eventually fall into. Further,
                your B+ will not hurt your chances of attaining a Distinction (neither will it improve). In this case, you
                should keep your B+ and S/U only all those grades lower than B+ (B, B-, C+, etc.) as these will hurt your
                chances of getting a Distinction.

                <br/>
                <br/>
                In both scenarios, you should have roughly enough S/Us to S/U the determined undesirable grades. However, you should
                still always count them. For example, if you have 1 S/U left and unsure whether to S/U a B+, count all your modules
                that can still be S/U-ed and evaluate your ability in scoring in each of the modules (you can get clues by asking
                around, checking if it is a qualitative, quantitative or coding mode, and if it is your strength). If it is likely
                that you will score all B+/A- and above, then just S/U the B+, but if there is significant uncertainty or if
                there is a module in the area that you know you are weak at and will likely score below B+, then save your S/U for it.


                <br/>
                <br/>
                You should have sufficient S/U if your goal is realistic and attainable. Let's look at a counter example. Assume the
                same 2nd scenario that you are aiming for a Distinction, and hence will S/U anything below B+. If your 1st year grades
                are A-, B+, B, B, B, B, B-, B-, B- C+, and C+, you will want to S/U the lower 8 grades. If you're from JC, this will
                leave you with no S/Us left and if you're from Polytechnic, you will be short of 3. In this scenario, perhaps a Distinction
                Honours Class will not be a realistic goal if you've already been giving your best. Consider then aiming for a Merit Honours
                Class, and correspondingly S/U-ing the lower 5 grades of B- and C+.

                <br/>
                <br/>
                <Typography variant='h6'>Exception 1</Typography>
                If you feel totally uncertain about your future grades and hence your class, you will want to S/U your lowest 8 or 5 modules,
                depending on whether you're from JC or Polytechnic. In this case, you can extrapolate your results thus far to decide on how
                many you want to S/U. For example, assume you get 1 A-, 2 B+ and 2 B (CAP 3.9) in your 1st semester, and you're from JC.
                Extrapolating will get you 2 A-, 4 B+, and 4 B in your 1st year. You will likely S/U your Bs.
                Whether you want to S/U your B+ will again depend on how confident you are of doing better in future.
                If you've already worked very hard and continue to do so, chances are you will get around the same CAP in future.

                <br/>
                <br/>
                It boils down to this: if you don't S/U the B+, and your graduating CAP is above 4, your final CAP will suffer a little at most, it will not affect your class from Distinction to Merit. However, if you choose to S/U, and you lack S/Us to use it on another module with a lower grade, this can actually affect your class from Distinction to Merit. In this case, it will be good to keep your B+ and save your S/U.

                <br/>
                <br/>
                <Typography variant='h6'>Exception 2</Typography>
                Some of you might have gotten bad grades due to playing your entire semester and barely put in any effort. In this case, try to evaluate how much your grades will potentially improve based on the effort you are intending to put in for your remaining semesters and S/U those, even all of them, below your projected ones.

              </div>
            }
          ]
        }
      ],
    },
    {
      title: 'Platforms',
      questions: [
        {
          title: 'NUS Email',
          content: <div>
            <GuideLink href='https://outlook.com/u.nus.edu'>
              This
            </GuideLink> is where you access your official NUS Email. All school related activities, events, internship opportunities, examination circulars, announcements, etc will be sent here.
          </div>,
        },
        {
          title: 'myEduRec',
          content: <div>
            <GuideLink href='https://myedurec.nus.edu.sg/'>
              Education Records System (EduRec)
            </GuideLink> is a platform for the platform where you access and settle all your administrative matters. You can view your exam schedule and results, view your transcript, apply to map your SEP modules, etc. You would also be able to change your credit debit (where NUS puts and deducts money respectively) bank account details. Click on ‘Academics’ or ‘Financials’ to access these features. ModReg@EduRec is the University’s consolidated module registration platform for all NUS students. It is used for module registration and selection of tutorial/lab slots. Selection of Modules and tutorial/lab slots would only be available during module registration (Academics -&gt; Module Registration).
          </div>,
        },
        {
          title: 'LumiNUS',
          content: <div>
            <GuideLink href='http://luminus.nus.edu.sg/'>
              LumiNUS
            </GuideLink> is the academic platform you access most often during your semester. After your module is locked in, you will be able to find announcements by your Professors, watch the module's webcasts, view grades for continual assessment, upload assignments and download the module's contents (lecture slides, tutorial sheets, etc.) your Professors upload.
            </div>
        },
        {
          title: 'NUSMods',
          content: 
          <div>
            <GuideLink href='https://nusmods.com/'>
            	NUSMods
            </GuideLink> is the single module planning website that almost all undergraduates use to plan their modules, created by our very own SoC alumni. It is linked with NUS official database, so the information should be up to date and accurate (if you want to be sure, do cross check with NUS official websites). Here, you can plan your timetable, search for module information (the semester it is being offered, its prerequisites and preclusions, its reviews, etc.), get a link to share your timetable, and even find venues from the timetable!
          </div>
        },
        {
          title: 'NUSync',
          content: <div>
            <GuideLink href='https://orgsync.com/login/national-university-of-singapore'>
              NUSync
            </GuideLink> is the portal NUS is attempting to slowly migrate to. Various announcements will be posted there, but most of the time, it will also be sent to your email. At present, we use it mainly for the Exam Welfare Pack Survey at the end of every semester.
          </div>
        },
        {
          title: 'Facilities Booking',
          content: <div>
            You can book various venues around NUS through <GuideLink href='https://libportal.nus.edu.sg/frontend/web/bookdiscussionroom'>
              this platform
            </GuideLink>, for example, discussion rooms to study or for project discussions. If you’re in NUS and using NUS Wi-Fi, simply go to the Facility Booking System. Else, follow the steps provided and install NUS VPN first before booking.
          </div>
        },
      ]
    },
    {
      title: 'Special Programmes',
      questions: [
        {
          title: 'Special Programmes',
          content: <div>
            Visit <GuideLink href='http://www.comp.nus.edu.sg/programmes/sp/'>
              here
            </GuideLink> for more information about the selections of special programmes in SoC.
          </div>,
        },
      ],
      subsections: [
        {
          title: 'Double Degree Programme FAQs',
          questions: [
            {
              title: 'How many modules must I take as a DDP student?',
              content: 'This depends on what DDP you take. For example, a DDP in Computer Science and Accountancy will require approximately 230 to 240 MCs in total, while a DDP in Computer Science and Mathematics will require less as there are more modules that overlap. Look at both your degree requirements, eliminate the overlap, and count all the unique modules that are required — this will be the total modules you need to take.'
            },
            {
              title: 'What is the workload like for a DDP student?',
              content: 'This depends on the total number of modules you need to take, your capability, and your other commitments. It is flexible. The norm is for students to take 6 modules per semester and graduate in 5 years. However, you have the flexibility to take 7 or even 8 modules and graduate in 4 years or choose a slower pace and take a longer time to graduate.',
            },
            {
              title: 'How long will it take to complete a DDP?',
              content: 'The typical duration is 5 years. It could be less or more, depending how fast the individual clears his/her modules.',
            },
            {
              title: 'Can I still do a DDP halfway during my studies?',
              content: 'Yes, you may still apply a DDP after your first year of studies. Do strive for good grades in your first 2 semesters if you are aiming to do so.',
            },
            {
              title: 'Is there any minimum requirement to continue my DDP?',
              content: 'Yes, you will need to maintain a minimum CAP of 3.75 for your primary degree and a minimum CAP of 3.25 for your secondary degree to continue. Else, you will be asked to drop your secondary degree.',
            },
            {
              title: 'What is the difference between a primary and secondary degree?',
              content: 'Your primary degree is the degree from your home faculty. If you continue the DDP until graduation, there is absolutely no difference — you get a separate degree certificate for each degree. However, if you choose to drop one degree, you may only drop your secondary degree. You are encouraged to take more modules from your primary degree in the first year so that in the event you drop your secondary degree, you will not be lagging too far behind your peers in your primary degree.',
            },
            {
              title: 'What is the difference between my home faculty and secondary faculty?',
              content: `There is virtually no difference other than the fact that you pay the school fees of your home faculty, and that some faculties might not allow students who has another separate home faculty to apply for SEP through that faculty. Otherwise, you are still a student of both faculties. You are eligible for dean's list and awards from both faculties.`,
            },
            {
              title: 'How is my CAP computed as a DDP student?',
              content: 'Since you will be awarded 2 separate degrees upon graduation, you will have 2 separate CAPs computed.',
            },
            {
              title: 'What happens if I drop my DDP?',
              content: 'You may only drop your secondary degree. If you wish to drop your primary degree, you will first have to apply to change faculty (subject to approval) before dropping your secondary degree post faculty change. Your both CAPs will then be combined into 1.',
            },
            {
              title: 'Can I still go for SEP as a DDP student?',
              content: 'Yes, you may go for SEP through your home faculty. Going for SEP through your secondary faculty depends on whether your secondary faculty allows for that. Depending on the number of modules you manage to map in SEP, you might or might not need to extend your candidature. If you are planning to go for SEP, it might be good to plan which modules are easily mapped and refrain from taking them in NUS.',
            },
            {
              title: 'Can I still go for NOC as a DDP student?',
              content: 'Yes, you may go for either the 6-months or 1-year NOC. NOC is a programme where you work and study overseas. However, the modules you take during NOC are typically entrepreneurship modules and do not count towards either degree requirements. Hence, it is like you will have to extend your candidature or take even more modules in your other semesters should you decide to go for NOC.',
            },
          ],
        },
      ],
    },
    {
      title: 'Overseas Opportunities',
      questions: [
        {
          title: 'NUS Overseas Colleges (NOC)',
          content: <div>
            NUS Overseas College is a 6-month or 1-year programme where you intern at an overseas/local company and take entrepreneurship modules at the same time. The selection process consist of 3 rounds of interview, but you may proceed straight to the second round if you completed at least a Project Gemini for Orbital (Year 1 summer project, information will be make known to you in due time). While a good CAP will be beneficial, it does not play as heavy a weightage as your interview or portfolio.
            <br/>
            <br/>
            Find out more about NUS Overseas Colleges <GuideLink href='https://enterprise.nus.edu.sg/educate/nus-overseas-colleges'>
              here
            </GuideLink>.
          </div>,
        },
        {
          title: 'Student Exchange Programmes (SEP)',
          content: <div>
            Student Exchange Programme is a programme where instead of studying in NUS, you study in another
            overseas/local partner University for 1 Semester. If you are able to map the modules you took in
            the partner University, it will be considered as you have fulfilled the module that you mapped onto.
            If you are planning to go for SEP, it might be good to plan which modules are easily mapped and refrain
            from taking them in NUS. Modules taken and mapped will only be graded on a pass-fail basis and will not
            affect your CAP. You may find out all available pre-approved modules <GuideLink href='https://www.comp.nus.edu.sg/programmes/ug/beyond/sep/sepnoc-public'>
              here
            </GuideLink>.
            <br/>
            <br/>
            In the SEP selection process, your CAP plays a vital role. So, if you’re aiming to go SEP through computing, it will be good to strive for a good CAP. That said, with the newly implemented SoC Student Award System (last tab of guides), participating in various other student life events also entitles you to different tiers of this award, which in turns boosts your SEP chances. You will be informed through email when calls for application for SEP starts.
            <br/>
            <br/>
            Find out more about Student Exchange Programmes <GuideLink href='https://www.comp.nus.edu.sg/programmes/ug/beyond/sep'>
              here
            </GuideLink>.
          </div>,
        },
        {
          title: 'Summer and Winter Programmes',
          content: <div>
            Summer and Winter Programme consists of taking additional classes and modules during your summer or winter holidays. It is a good opportunity for clearing additional modules.

            <br/>
            <br/>
            Find out more about Summer and Winter Programmes <GuideLink href='https://www.comp.nus.edu.sg/programmes/ug/beyond/summerwinter'>
              here
            </GuideLink>.
          </div>,
        },
      ],
    },
    {
      title: 'SoC Student Award',
      questions: [
        {
          title: 'About the Award',
          content: <div>
            This is a new initiative to recognise non-academic achievements and contributions of our students. Drawing inspiration from the International Baccalaureate system of Creativity Activity Services, this system hopes to create a similar system to incentivise leadership while providing all-rounded enrichment beyond academics.
            <br/>
            <br/>
            Submission of your achievements will also help the school to identify students whom they may nominate for other Awards such as the SCS IT Youth Leader Award, or NUS Student Achievement Awards.
          </div>,
        },
        {
          title: 'Application',
          content: 
            <div>
              Submit your application <GuideLink href='https://mysurvey.nus.edu.sg/EFM/se/543BE5C26867C2A1'>
                here
              </GuideLink>.

              <br/>
              <br/>
              The system is currently unable to accept document uploads, so please send your supporting documents
              to the school via email to <GuideLink href='mailto:socfamily@comp.nus.edu.sg'>
                socfamily@comp.nus.edu.sg
              </GuideLink>.
              Include your names in the file names and state "SoC Student Award" in the subject title.

              <br/>
              <br/>
              The application period for each cycle is 1 August to 31 July in the following year.
            </div>
        }
      ],
      subsections: [
        {
          title: 'Pillars',
          content: 'The student award system falls around 4 pillars.',
          questions: [
            {
              title: 'Leadership (L)',
              content: <div>
                Roles or designation that involves leadership within Club or Interest Groups under NUS SoC.
                <Box mt={2}>
                  <ul>
                    <li>
                      Management Committee of NUS Students' Computing Club
                    </li>
                    <li>
                      Core Team members of NUS Hackers
                    </li>
                    <li>
                      Project Director of major events such as GameCraft
                    </li>
                  </ul>
                </Box>
                </div>
            },
            {
              title: 'Accomplishment (A)',
              content: <div>
                Students who attain a certain level of achievement while representing NUS SoC, NUS, or Singapore in a competition.

                <Box mt={2}>
                  <ul>
                    <li>
                      Winning in Hackathon
                    </li>
                    <li>
                      Getting medal in NUS Inter-Faculty Games
                    </li>
                  </ul>
                </Box>
              </div>
            },
            {
              title: 'Service (S)',
              content: <div>
                Any experience that involves unpaid voluntary work under the name of NUS SoC that benefits the community in NUS or otherwise.

                <Box mt={2}>
                  <ul>
                    <li>NUS Flag Day</li>
                    <li>Beneficiary Engagement Day</li>
                    <li>NUS SoC Code for Community</li>
                    <li>Community Involvement Programme (CIP)</li>
                    <li>Helpers for FOP, and other similar type events</li>
                  </ul>
                </Box>
              </div>
            },
            {
              title: 'Involvement (I)',
              content: <div>
                Any involvement in school based events or competitions that required active training or participation.

                <Box py={2}>
                  <ul>
                    <li>Representing SoC in IFG</li>
                    <li>Orientation Group Leaders for Freshmen Orientation Week</li>
                    <li>House Head for Orientation Camps</li>
                    <li>Committee for Freshmen Orientation Projects</li>
                  </ul>
                </Box>
                In order to achieve the SoC Student Awards students have to achieve points in the various Pillars and attendance in Enrichment Programmes.
              </div>
            },
          ],
        },
      ],
    }
  ]
  return <BaseContainer title='Student Guides'>
    <Typography variant='h3'>
      Student Guides
    </Typography>
    <Typography variant='body1'>
      Listed below are guides, links to various platforms and FAQs which will be useful at different stages of your undergraduate life. Feel free to explore!
    </Typography>
    {guides.map((guide, index) =>
      <Box mt={index !== 0 ? 16 : 8} key={index}>
        <Guide {...guide} headerSize='h4' padding='0'></Guide>
      </Box>
    )}
  </BaseContainer>
}

export default GuidesPage