import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, CheckCircle, AlertCircle, Image, Globe } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Admissions = () => {
  useEffect(() => {
    document.title = "Admissions - Yale School of Art";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Admissions
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join the next generation of leading artists and designers
              </p>
              <Button size="lg">Start Your Application</Button>
            </div>
          </div>
        </section>

        {/* Application Deadline Alert */}
        <section className="py-8 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Application Deadline</h3>
                      <p className="text-muted-foreground">
                        The application for academic year 2026-2027 will open in October 2025.
                        Application deadline: <strong>Saturday, January 10, 2026 at 11:59 PM EST</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Entrance Requirements Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Entrance Requirements</h2>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg text-muted-foreground mb-6">
                  Admission to The School of Art requires preparation and lead time. Admission committees are made up
                  of faculty members and facilitated by our admission team. A bachelor's degree from an accredited college
                  or university or a diploma from a four-year accredited art school is standard for admission. In exceptional
                  cases, the admissions committee may waive a degree prerequisite if deemed sufficient equivalents have been
                  achieved by the applicant.
                </p>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl font-bold text-primary mb-2">6%</div>
                    <p className="text-muted-foreground">Acceptance rate for Fall 2024 admission</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Guidelines Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Admission Guidelines</h2>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Admission to Yale's MFA program is for the fall semester only, annually. Preliminary admission decisions
                    and finalist notification will be sent in early February. Offers of admission are sent in early March.
                  </p>

                  <div className="space-y-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        To apply for more than one area of concentration, separate applications and supporting documentation
                        must be submitted. Applying to more than one program does not increase an applicant's chances of selection.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong>Please note:</strong> An offer of admission to Yale is valid only for enrollment the year the
                        application is made. Applicants who are offered admission but choose not to enroll are welcome to
                        reapply to the school in a future cycle.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">October 2025</h3>
                    </div>
                    <p className="text-muted-foreground">Application opens</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">January 10, 2026 at 11:59 PM EST</h3>
                    </div>
                    <p className="text-muted-foreground">Application deadline - take time to prepare, review, and revise materials</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Early February</h3>
                    </div>
                    <p className="text-muted-foreground">Preliminary admission decisions and finalist notifications sent</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Early March</h3>
                    </div>
                    <p className="text-muted-foreground">Offers of admission sent</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions for All Applicants Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Instructions for All Applicants</h2>

              <p className="text-lg text-muted-foreground mb-8">
                An application to the School of Art requires forethought and planning. Follow all instructions carefully
                to ensure that your application is viewed to your best advantage.
              </p>

              <div className="space-y-6">
                {/* Application Form */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">Application Form</h3>
                        <p className="text-muted-foreground mb-3">
                          Open from early October until the early January deadline.
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Please note:</strong> The School of Art is NOT part of the Yale Graduate School of Arts
                            and Sciences, and it is not possible to apply by using application materials found on the Graduate
                            School's website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Application Fee */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Application Fee</h3>
                    <p className="text-muted-foreground mb-3">
                      $100 non-refundable fee. Follow payment instructions at https://apply.art.yale.edu/apply/
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Yale School of Art practices "need blind admission" (candidate financial need or ability is never
                        disclosed to the admission committee during review of MFA applications), as such fee waivers are
                        not available.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Statement */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Statement of Purpose</h3>
                    <p className="text-muted-foreground mb-4">
                      A one-page statement addressing:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Your current practice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Interests, influences, and/or lived experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Subject matter of your work and research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Goals for graduate study</span>
                      </li>
                    </ul>
                    <div className="mt-4 bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note for Painting/Printmaking applicants:</strong> Make reference in your statement to
                        the "representative work" in the portfolio; this is not critical for other programs.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Letters of Recommendation</h3>
                    <p className="text-muted-foreground mb-4">
                      Three letters from references, ideally practicing or teaching in your area of interest. It is
                      recommended to seek letters of support from those familiar with your practice, community values,
                      and potential for growth in Yale's MFA program.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Important:</strong> Ask recommenders for letters with plenty of lead time. The admissions
                        committee reviews applications shortly after the deadline.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Though the submission portal for references will remain open, late submissions risk possible
                        exclusion from the first round of reviews. Applicants can view the receipt status of reference
                        letters and send reminders on the application status page.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Transcripts */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Transcripts</h3>
                    <p className="text-muted-foreground mb-4">
                      An undergraduate academic transcript showing dates of attendance, coursework, and grades from your
                      degree-issuing institution. Junior or community college transcripts are not necessary to include.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          A student/unofficial copy of your transcript may be submitted for preliminary review
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Yale only requires official transcripts from applicants selected as finalists invited to interview
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          The Graduate Record Examination (GRE) scores are NOT required
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Portfolio Overview */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Image className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3">Portfolio of Work</h3>
                        <p className="text-muted-foreground mb-4">
                          Select work that you are most excited about; that indicates the current direction and ideas
                          you're exploring and demonstrates technical/formal skills you've achieved.
                        </p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Include work done within the last year; we recommend at least half the works to be recent
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Image order will default chronologically by year
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Designate one "representative work" which will be the default image for your file cover page
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Do NOT include composite images (multiple images grouped into one layout)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Do NOT include detail photos unless absolutely necessary (such as for 3D pieces)
                            </span>
                          </li>
                        </ul>
                        <p className="text-sm text-muted-foreground italic">
                          Portfolio requirements differ depending upon area of concentration; see program-specific
                          requirements below.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* International Applicants Section */}
        <section id="international-applicants" className="py-16 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Globe className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold">International Applicants</h2>
              </div>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Passport Name Requirement</h3>
                      <p className="text-muted-foreground">
                        International students <strong>MUST</strong> use their passport name on all application materials.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">English Proficiency Requirements</h3>
                  <p className="text-muted-foreground mb-4">
                    In order to undertake graduate study, students for whom English is not their first language must present evidence of competence in the use of the English language. Although we have no official score cut-off, you will have difficulty in the program without a level of language proficiency appropriate for graduate study.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Yale School of Art accepts the following English Proficiency exams to fulfill this requirement:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Test of English as a Foreign Language (TOEFL iBT)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">The International English Language Testing System (IELTS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">The Duolingo English Test</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* TOEFL */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Test of English as a Foreign Language (TOEFL iBT)</h3>
                  <p className="text-muted-foreground mb-4">
                    The TOEFL iBT is administered by the Educational Testing Service. The TOEFL code number for the Yale School of Art is <strong>3982</strong>.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold mb-2">Score Requirements:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Internet-based test (iBT): <strong>at least 100</strong> composite score, with speaking and listening scores of <strong>at least 28</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Computer-based test: <strong>at least 250</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Paper-based test (pbt): <strong>at least 550</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Note:</strong> If the TOEFL iBT is not available in your area, you are required to complete the TOEFL that is available, plus you are required to take the Test of Spoken English (TSE).
                    </p>
                    <a
                      href="https://www.ets.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Visit ETS website →
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* IELTS */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">International English Language Testing System (IELTS)</h3>
                  <p className="text-muted-foreground mb-4">
                    IELTS test scores may be accepted with a <strong>minimum score of 7</strong>. Your ability to listen, read, write and speak in English will be assessed during the test. IELTS is graded on a scale of 1-9.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                      IELTS is jointly owned by the British Council, IDP: IELTS Australia and Cambridge Assessment English.
                    </p>
                    <a
                      href="https://www.ielts.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Visit IELTS website →
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Duolingo */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Duolingo English Test</h3>
                  <p className="text-muted-foreground mb-4">
                    The Duolingo English Test is an online English proficiency test that can be taken online, on-demand, in under an hour. The test is taken via a computer with a camera and includes a proficiency score, video interview, and writing sample, which are shared with Yale when you send your results.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg mb-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Certified results are available within 48 hours of the test session. Students generally receive a score of <strong>120</strong>.
                    </p>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <a
                      href="https://englishtest.duolingo.com/applicants"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Visit Duolingo English Test website →
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Waiver */}
              <Card className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-200">English Proficiency Test Waiver</h3>
                  <p className="text-sm text-blue-900 dark:text-blue-200 mb-2">
                    The English Proficiency Test may be waived if the undergraduate degree has been obtained from a four-year, English-speaking institution.
                  </p>
                  <p className="text-sm text-blue-900 dark:text-blue-200">
                    When completing your application, please submit without confirming your scores. Our faculty reviewers know to verify your language proficiency via transcripts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program-Specific Portfolio Requirements Section */}
        <section id="portfolio-requirements" className="py-16 bg-muted/30 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Program-Specific Portfolio Requirements
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Each program has specific portfolio requirements. Select your program below to view detailed guidelines.
              </p>

              <Accordion type="single" collapsible className="space-y-4">{/* Graphic Design */}
                <AccordionItem value="graphic-design" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    Graphic Design Portfolio Requirements
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">

              {/* Review Process */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Review Process</h3>
                  <p className="text-muted-foreground mb-4">
                    At the start of the review process, each application is assigned to a faculty member on the admissions
                    committee to conduct a comprehensive review of all submitted material (portfolio, résumé, statement,
                    recommendations, academic credentials, and TOEFL scores). A second review is then conducted by the
                    entire admissions committee, as well as current graduate students, who view each portfolio projected
                    onto a screen. Thereafter, a selection of applicants are invited for an interview.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      The Yale School of Art does not operate in a vacuum and is responsive to the strong social, cultural
                      and political currents of this time. The graphic design faculty feel a heightened imperative to embrace
                      inclusivity, diverse ways of making and knowing, and is committed to expanding its pedagogical consciousness
                      and programming to include an array of race, class and gender intersections.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio Contents */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Portfolio Contents</h3>
                  <p className="text-muted-foreground mb-4">
                    Your portfolio should be a collection of visual work, professional, experimental, commissioned, and
                    self-initiated, that demonstrates your experience, skills, and passions in the field of design and related
                    disciplines. Of particular interest is work that is personally-driven and challenges norms of conventional
                    professional practice.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our community is built on values of diversity and dexterity in visual communication and scholarship, and
                    we are seeking individuals with great curiosity, creativity, ambition, and depth of commitment. Your
                    portfolio should represent a well-rounded portrait of who you are, where your interests lie, and communicate
                    a strong sense of how you might develop your practice in this program.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Upload Requirements:</p>
                    <p className="text-sm text-muted-foreground">
                      Up to 20 still images and/or videos (but not only videos) that represent your strongest work, with an
                      emphasis on recent work from the last few years. Please note that the Slate viewer automatically sequences
                      your work from most recent to oldest. There is not the ability to override this function.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Portfolio Formatting */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Portfolio Formatting</h3>
                  <p className="text-muted-foreground mb-4">
                    The portfolio submission interface will prompt you to label each image with a title, date, medium, and a
                    brief description of the work (please do not include your name in the work title or description). Work
                    titles should be limited to 30 characters and descriptions to one concise sentence.
                  </p>

                  <h4 className="font-semibold mb-3">Best Practices:</h4>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Present work large within the frame and in a simple and clear manner
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Single images with one view of a project work best
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Split or composite images make details difficult to appreciate - use sparingly
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        For books/pamphlets: prepare a few representative images or make a short video of spreads
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        For interactive media: stills are helpful, but make a short video capturing user experience
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        For systems/identity projects: highlight just the strongest components in a few images
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        For 3D works: show surrounding context so material and scale relationships are clear
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* File Sizes and Types */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">File Sizes and Types</h3>

                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">Critical Requirements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-red-900 dark:text-red-200">
                            Do NOT format images in presentation programs (PowerPoint, Keynote, PDF)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-red-900 dark:text-red-200">
                            PDFs and presentation formats are not viewable - only first page/slide will display
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-red-900 dark:text-red-200">
                            Do NOT include title or caption in the image file - it decreases viewable area
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Accepted File Types:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm font-semibold mb-2">Video:</p>
                          <p className="text-xs text-muted-foreground">
                            .3g2, .3gp, .avi, .m2v, .m4v, .mkv, .mov, .mpeg, .mpg, .mp4, .mxf, .webm, .wmv
                          </p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm font-semibold mb-2">Audio:</p>
                          <p className="text-xs text-muted-foreground">
                            .aac, .m4a, .mka, .mp3, .oga, .ogg, .wav
                          </p>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm font-semibold mb-2">Images:</p>
                          <p className="text-xs text-muted-foreground">
                            .bmp, .jpg, .jpeg, .png, .tif, .tiff
                          </p>
                          <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                            Avoid .gif files - they don't work well in the system
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">File Size Limits:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Media files: up to 5GB supported (larger files take longer to upload)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Documents (transcripts): maximum 75 pages
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Video files: no longer than 2 minutes (automatically times out at 2 minutes)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Videos count as part of your 20 file uploads - don't use to show additional stills
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            Do NOT include captions, titles, or credits within video files
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        If you wish to submit longer videos, you may post full video files to your own website and provide
                        the link at the end of your statement. Note, however, that the admissions committee will not be in
                        a position to review works of extensive length.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Résumé */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Résumé</h3>
                  <p className="text-muted-foreground mb-4">
                    Both the content and design of your résumé are assessed.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Maximum length: 2 pages
                    </p>
                  </div>
                </CardContent>
              </Card>
                  </AccordionContent>
                </AccordionItem>

                {/* Painting/Printmaking */}
                <AccordionItem value="painting-printmaking" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    Painting/Printmaking Portfolio Requirements
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">

                    {/* File Format */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">File Format</h3>
                        <p className="text-muted-foreground mb-4">
                          Portfolios are submitted online as part of the online application. The portfolio submission
                          interface will allow you to label each image with a title, a date of completion, the materials
                          used, and a brief description of the work.
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Please do not embed your name in the titles of your work
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Limit titles to thirty (30) characters
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Digital files must adhere strictly to the specifications outlined below
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Portfolio Contents */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Portfolio Contents</h3>
                        <p className="text-muted-foreground mb-4">
                          Upload a total of <strong>sixteen (16) still images and/or moving image files</strong>.
                        </p>
                        <ul className="space-y-3 mb-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Only work completed within the last three years should be included
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              At least half (8) should be work made in the last twelve months
                            </span>
                          </li>
                        </ul>

                        <div className="bg-primary/5 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold mb-2">Important Guidelines:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                The admissions committee is concerned with scale and the tactility of the work
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Paintings and drawings must be photographed showing the edge of the work
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                <strong>Do NOT digitally mask paintings and drawings in black to the edges of the work</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Three-dimensional works should show the surrounding space and context
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Do not include detail photos unless absolutely necessary (maximum of 2 detail shots)
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Portfolio Formatting */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Portfolio Formatting</h3>

                        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">Critical Requirements:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-900 dark:text-red-200">
                                Do NOT format images in presentation programs (PowerPoint, Keynote, PDF)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-900 dark:text-red-200">
                                PDFs and presentation formats are not viewable - only first page/slide will display
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-900 dark:text-red-200">
                                Do NOT include title or caption in the image file - it decreases viewable area
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Media files as large as 5GB are supported, but larger files take longer to upload and may
                            stall on wireless connections. Uploaded documents (transcripts) may contain no more than 75 pages.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Works display in chronological order by year in the image data. If you have multiple pieces
                            within a single year, you can arrange them in any order within that group.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Video Requirements */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Video Requirements</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Video files should be no longer than <strong>one minute in length</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Videos longer than one minute will automatically time out at one minute
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Videos are part of your 16 file selection - don't use to show additional still images
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Do NOT include titles or credits within video files
                            </span>
                          </li>
                        </ul>

                        <div className="bg-muted/50 p-4 rounded-lg mt-4">
                          <p className="text-sm text-muted-foreground">
                            If you are primarily a video artist and wish to submit a longer video, you may post the video
                            to your own website and provide the link at the end of your statement. Note, however, that the
                            admissions committee will not be in the position to review works of extensive length.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* File Types */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Accepted File Types</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Video:</p>
                            <p className="text-xs text-muted-foreground">
                              .3g2, .3gp, .avi, .m2v, .m4v, .mkv, .mov, .mpeg, .mpg, .mp4, .mxf, .webm, .wmv
                            </p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Audio:</p>
                            <p className="text-xs text-muted-foreground">
                              .aac, .m4a, .mka, .mp3, .oga, .ogg, .wav
                            </p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Images:</p>
                            <p className="text-xs text-muted-foreground">
                              .bmp, .jpg, .jpeg, .png, .tif, .tiff
                            </p>
                            <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                              Avoid .gif files - they don't work well in the system
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </AccordionContent>
                </AccordionItem>

                {/* Photography */}
                <AccordionItem value="photography" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    Photography Portfolio Requirements
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">

                    {/* Portfolio Contents */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Portfolio Contents</h3>
                        <p className="text-muted-foreground mb-4">
                          Portfolios are submitted online as part of the online application. The portfolio submission
                          interface will allow you to label each image with a title, a date of completion, the materials
                          used, and a brief description of the work.
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg mb-4">
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Please do not embed your name in the titles of your work
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Limit titles to thirty (30) characters
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Digital files must adhere strictly to the specifications outlined below
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-primary/5 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Upload Requirements:</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Upload a total of <strong>twenty (20) still images and/or moving image files</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                A significant number of images should represent work done within the last twelve months
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                <strong>Important:</strong> If presenting both still and moving images, present them in two groups
                                with all still images followed by all moving images
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Within these groups, place all files in chronological order (oldest to most recent)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Chronological order of year is embedded in the system - you will not be able to override it
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Portfolio Format */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Portfolio Format</h3>

                        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">Critical Requirements:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-900 dark:text-red-200">
                                Do NOT format images in presentation programs (PowerPoint, Keynote, PDF)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-900 dark:text-red-200">
                                PDFs and presentation formats are not viewable - only first page/slide will display
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-900 dark:text-red-200">
                                Do NOT include title or caption in the image file - it decreases viewable area
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Media files as large as 5GB are supported, but larger files take longer to upload and may
                            stall on wireless connections. Uploaded documents (transcripts) may be PDF format and contain
                            no more than 75 pages.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Works display in chronological order by year in the image data. This is an embedded feature
                            in the system structure. For example, art #1 made in 2021, art #2 made in 2022, and art #3
                            made in 2024 will appear in that order. However, if you have multiple pieces within a single
                            year, you can arrange them in any order within that group.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Video Requirements */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Video Requirements</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Video files should be no longer than <strong>two minutes in length</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Videos longer than two minutes will automatically time out at two minutes
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Videos are part of your 20 file selection - don't use to show additional still images
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Do NOT include titles or credits within video files
                            </span>
                          </li>
                        </ul>

                        <div className="bg-muted/50 p-4 rounded-lg mt-4">
                          <p className="text-sm text-muted-foreground">
                            If you are primarily a video artist and wish to submit a longer video, you may post the video
                            to your own website and provide the link at the end of your statement. Note, however, that the
                            admissions committee will not be in the position to review works of extensive length.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* File Types */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Accepted File Types</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Video:</p>
                            <p className="text-xs text-muted-foreground">
                              .3g2, .3gp, .avi, .m2v, .m4v, .mkv, .mov, .mpeg, .mpg, .mp4, .mxf, .webm, .wmv
                            </p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Audio:</p>
                            <p className="text-xs text-muted-foreground">
                              .aac, .m4a, .mka, .mp3, .oga, .ogg, .wav
                            </p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Images:</p>
                            <p className="text-xs text-muted-foreground">
                              .bmp, .jpg, .jpeg, .png, .tif, .tiff
                            </p>
                            <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                              Avoid .gif files - they don't work well in the system
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </AccordionContent>
                </AccordionItem>

                {/* Sculpture */}
                <AccordionItem value="sculpture" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    Sculpture Portfolio Requirements
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">

                    {/* Portfolio Contents */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Portfolio Contents</h3>
                        <p className="text-muted-foreground mb-4">
                          Portfolios are submitted online as part of the online application. The portfolio submission
                          interface will allow you to label each image with a title, a date of completion, the materials
                          used, and a brief description of the work.
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg mb-4">
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Please do not embed your name in the titles of your work
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Limit titles to thirty (30) characters
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Digital files must adhere strictly to the specifications outlined below
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-primary/5 p-4 rounded-lg">
                          <h4 className="font-semibold mb-3">Upload Requirements:</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                Upload a total of <strong>twenty (20) still images and/or time-based files</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                A significant number of images should represent work done within the last twelve months
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                <strong>Three-dimensional works should show the surrounding space and context</strong>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Portfolio Format */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Portfolio Format</h3>

                        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">Critical Requirements:</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-900 dark:text-red-200">
                                Each still image file may be no larger than <strong>16 MB</strong>
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-900 dark:text-red-200">
                                Do NOT format images in presentation programs (PowerPoint, Keynote)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-900 dark:text-red-200">
                                Do NOT include composite images (more than one work per file)
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground">
                            Works display in chronological order by year in the image data. This is an embedded feature
                            in the system structure. For example, art #1 made in 2021, art #2 made in 2022, and art #3
                            made in 2024 will appear in that order. However, if you have multiple pieces within a single
                            year, you can arrange them in any order within that group.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Media files as large as 5GB are supported, but larger files take longer to upload and may
                            stall on wireless connections. Uploaded documents (transcripts) may be PDF format and contain
                            no more than 75 pages.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Video Requirements */}
                    <Card className="mb-6">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Video and Time-Based Media Requirements</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Video files should be no longer than <strong>two minutes in length</strong>
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Videos longer than two minutes will automatically time out at two minutes
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Videos are part of your 20 file selection - don't use to show additional still images
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              Do NOT include titles or credits within video files
                            </span>
                          </li>
                        </ul>

                        <div className="bg-muted/50 p-4 rounded-lg mt-4">
                          <p className="text-sm text-muted-foreground mb-2">
                            If you are primarily a <strong>video, performance, or sound artist</strong> and wish to submit
                            a longer video or sound file, you may post the video to your own website and provide the link
                            at the end of your statement.
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Note, however, that the admissions committee will not be in a position to review works of
                            extensive length.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* File Types */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Accepted File Types</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Video:</p>
                            <p className="text-xs text-muted-foreground">
                              .3g2, .3gp, .avi, .m2v, .m4v, .mkv, .mov, .mpeg, .mpg, .mp4, .mxf, .webm, .wmv
                            </p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Audio:</p>
                            <p className="text-xs text-muted-foreground">
                              .aac, .m4a, .mka, .mp3, .oga, .ogg, .wav
                            </p>
                          </div>
                          <div className="bg-muted/50 p-4 rounded-lg">
                            <p className="text-sm font-semibold mb-2">Images:</p>
                            <p className="text-xs text-muted-foreground">
                              .bmp, .jpg, .jpeg, .png, .tif, .tiff
                            </p>
                            <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                              Avoid .gif files - they don't work well in the system
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Take the first step toward your MFA at Yale School of Art
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Application
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Contact Admissions
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;
