import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, DollarSign, GraduationCap, Briefcase, Users } from "lucide-react";

const Tuition = () => {
  useEffect(() => {
    document.title = "Tuition & Financial Aid - Yale School of Art";
  }, []);

  const costBreakdown = [
    { item: "Tuition", amount: "$48,500" },
    { item: "Books & Supplies", amount: "$5,796" },
    { item: "Living Expenses (9 months)", amount: "$22,896", detail: "~$2,544/month" },
    { item: "Yale Health Plan", amount: "$3,422", detail: "Included in living expenses" },
    { item: "Total Cost of Attendance", amount: "$77,192", highlight: true },
  ];

  const fees = [
    { name: "Hospitalization Insurance", amount: "$3,422", required: true, note: "Single student, calculated as part of living expense budget" },
    { name: "Facilities Access/User Fee (Undergraduate art majors)", amount: "$200 per term", required: true, note: "Not applicable to MFA students" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <DollarSign className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Tuition & Financial Aid
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Comprehensive information about costs, fees, and financial assistance for Yale School of Art MFA programs
              </p>
            </div>
          </div>
        </section>

        {/* Tuition & Cost of Attendance */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Tuition, Fees & Cost of Attendance</h2>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">2025-2026 Academic Year</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-primary">
                          <th className="text-left py-3 pr-4 font-semibold">Cost Item</th>
                          <th className="text-right py-3 px-4 font-semibold">Amount</th>
                          <th className="text-left py-3 pl-4 font-semibold">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {costBreakdown.map((item, index) => (
                          <tr
                            key={index}
                            className={\`border-b \${
                              item.highlight
                                ? "bg-primary/10 font-bold text-lg"
                                : "hover:bg-muted/50"
                            }\`}
                          >
                            <td className="py-4 pr-4">{item.item}</td>
                            <td className="text-right py-4 px-4 font-mono">{item.amount}</td>
                            <td className="text-sm text-muted-foreground py-4 pl-4">
                              {item.detail || ""}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> The Corporation of Yale University reserves the right to revise tuition rates as necessary.
                      Books and supplies costs can vary based on the program, year, and students needs for class books and/or materials & equipment needed throughout the year for school-related purchases.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Living Expenses Note */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About Living Expenses</h3>
                  <p className="text-muted-foreground mb-4">
                    The living expense budget for the 2025-2026 academic year (September - May) is $22,896. In other words,
                    it is assumed that students at Yale School of Art can cover the cost of housing, utilities, food, health services,
                    clothing and laundry, miscellaneous items, and in-school travel within a total budget of approximately $2,544 per month.
                  </p>
                  <p className="text-muted-foreground">
                    It is expected that you will spend the greater part of your time in academic work; therefore, it is assumed that
                    your lifestyle will be appropriate for a full-time student. To this end, you should be prepared to economize during your time here.
                  </p>
                </CardContent>
              </Card>

              {/* Fees */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Mandatory Fees</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    The following fees are charged each year to the Student Financial Services bill for use of and/or access to special facilities.
                    This is a uniform mandatory fee that is refundable only upon withdrawal from the program, according to the tuition rebate schedule.
                  </p>
                  <div className="space-y-4">
                    {fees.map((fee, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{fee.name}</h4>
                          <span className="font-mono text-primary">{fee.amount}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{fee.note}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      In addition, certain undergraduate courses bear materials fees, and graduate art students enrolled in them will be billed.
                      Refunds on course fees will not be made after the second week of classes each term. No partial refunds will be made on course fees.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Types of Financial Aid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Types of Financial Aid</h2>

              <div className="grid grid-cols-1 gap-6">
                {/* Scholarships */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Scholarships</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Grant or gift aid that does not have to be repaid
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      When the total amount of the student contribution, parent contribution, and loan and work-study offers does not
                      meet an admitted student's full financial need, scholarship funds are awarded. Scholarships are also known as grant or
                      gift aid and, unlike loans, do not have to be repaid.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      If your financial aid applications are received by the School's deadline and you have calculated need, the School makes
                      every effort to award a scholarship to admitted students with scholarship eligibility. Scholarship availability is based
                      on the number of students with calculated financial need within the School and the amount of funds available.
                    </p>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm font-semibold text-primary">
                        The maximum scholarship for first-year students does not exceed tuition costs.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Loans */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <DollarSign className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Loans</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Federal, Yale, and private loan options
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Admitted students with financial aid eligibility will have a portion of their financial need met with a loan offer.
                    </p>
                    <div className="space-y-4">
                      <div className="p-4 border-l-4 border-primary bg-muted/50 rounded">
                        <h4 className="font-semibold mb-2">Federal Direct Unsubsidized Loan</h4>
                        <p className="text-sm text-muted-foreground">
                          Available to U.S. citizens and permanent residents
                        </p>
                      </div>
                      <div className="p-4 border-l-4 border-primary bg-muted/50 rounded">
                        <h4 className="font-semibold mb-2">Yale Student Loan</h4>
                        <p className="text-sm text-muted-foreground">
                          Available to non-U.S. citizens and non-permanent residents
                        </p>
                      </div>
                      <div className="p-4 border-l-4 border-primary bg-muted/50 rounded">
                        <h4 className="font-semibold mb-2">Private Loans</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Available through private lenders, such as banks, online lenders, and credit unions. Creditworthy U.S. citizens
                          may apply for private loans without a co-signer, and international students typically need a creditworthy
                          U.S. Citizen/Permanent Resident co-signer to apply.
                        </p>
                        <a
                          href="https://www.elmselect.com/v4/school/156/program/5/program-detail"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          View private loan options at ELM Select →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Work-Study */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Work-Study & Part-Time Employment</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          On-campus employment opportunities
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Work-study as part of your financial aid award indicates eligibility for a job within Yale. There are a number of jobs
                      within the School of Art (admissions, labs, studio crews, etc.). If you are awarded a job within the School, you will be
                      notified by the supervisor.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          4-6 hours per week during regular academic year
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          Students are paid directly
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">
                        Work-study positions available within the School of Art may be limited, and not all MFA students will necessarily be
                        assigned a job within the School. So it is suggested you examine the Yale Student Employment Office (246 Church Street)
                        online student job search. This job search engine lists campus, community service (Federal Work Study), and other
                        categories of employment for which you can apply online.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Teaching Assistant Positions */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Users className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">Teaching Assistant Positions</h3>
                        <p className="text-sm text-primary font-semibold mb-4">
                          Returning/Second-year students ONLY
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      School of Art faculty select Teaching Assistants each year from the second-year class. Pay is a flat rate for the term
                      and is determined by the class's number of hours and sections.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      At the time they are assigned, Teaching Assistantships are not determined through financial need; however, the amount a
                      student earns is considered a term-time earning and may reduce a student's total need insofar as the financial award is concerned.
                    </p>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm font-semibold">
                        Teaching Assistants normally receive an appointment for one term.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Student Accounts & Billing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Student Accounts, Billing and Payment</h2>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    Student accounts, billing, and related services are administered through the <strong>Office of Student Financial Services</strong>,
                    which is located at <strong>246 Church Street</strong>.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Electronic Billing: YalePay</h3>
                      <p className="text-muted-foreground mb-2">
                        Yale University's official means of communicating monthly financial account information is through the University's
                        Internet-based system for electronic billing and payment, YalePay. Yale does not mail paper bills.
                      </p>
                      <a
                        href="https://student-accounts.yale.edu/understanding-your-bill/your-student-account"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Learn more about your student account →
                      </a>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Payment Options</h3>
                      <p className="text-muted-foreground mb-2">
                        Multiple payment options are available, including the Yale Payment Plan for those who need to spread payments over a period of months.
                      </p>
                      <div className="space-y-1">
                        <a
                          href="https://student-accounts.yale.edu/understanding-your-bill/tuition-due-dates"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-primary hover:underline"
                        >
                          View term fee due dates and late fees →
                        </a>
                        <a
                          href="https://student-accounts.yale.edu/paying-your-bill/payment-options"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-primary hover:underline"
                        >
                          Explore payment options →
                        </a>
                        <a
                          href="https://student-accounts.yale.edu/paying-your-bill/yale-payment-plan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-primary hover:underline"
                        >
                          Learn about the Yale Payment Plan →
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-900 dark:text-red-200">Important Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-red-900 dark:text-red-200">
                        No degrees will be conferred, and no transcripts will be furnished until all fees due the University are paid in full.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-red-900 dark:text-red-200">
                        Transcripts will not be furnished to any student or former student who is in default on the payment of a student loan.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-red-900 dark:text-red-200">
                        The University may withhold registration and certain University privileges from students who have not paid their term fees
                        or made satisfactory payment arrangements by the day of registration.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tuition;
