import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, CheckCircle, AlertCircle, Image } from "lucide-react";

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

        {/* Graphic Design Portfolio Requirements Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Graphic Design Portfolio Requirements
              </h2>

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
