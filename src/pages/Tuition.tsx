import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, CheckCircle, AlertCircle } from "lucide-react";

const Tuition = () => {
  useEffect(() => {
    document.title = "Tuition & Financial Aid - Yale School of Art";
  }, []);

  const tuitionData = [
    { item: "Tuition (2024-2025)", amount: "$47,850", covered: "$47,850", note: "100% scholarship for all MFA students" },
    { item: "Student Activities Fee", amount: "$125", covered: "$0", note: "Required for all students" },
    { item: "Student Health Fee", amount: "$325", covered: "$0", note: "Covers student health services" },
    { item: "Graduate Student Assembly Fee", amount: "$45", covered: "$0", note: "Optional but recommended" },
  ];

  const estimatedExpenses = [
    { category: "Housing & Food", amount: "$18,480", note: "Average 12-month estimate" },
    { category: "Books & Supplies", amount: "$2,450", note: "Art supplies, books, materials" },
    { category: "Personal Expenses", amount: "$3,285", note: "Transportation, entertainment, misc." },
    { category: "Health Insurance", amount: "$4,350", note: "Yale Student Health Insurance Plan (required if no coverage)" },
  ];

  const financialAidOptions = [
    {
      title: "Full Tuition Scholarship",
      amount: "$47,850",
      description: "All admitted MFA students automatically receive full tuition scholarships covering the entire two-year program. No separate application required.",
      eligibility: "All admitted students",
    },
    {
      title: "Need-Based Grants",
      amount: "Up to $15,000/year",
      description: "Additional grants available based on demonstrated financial need to help cover living expenses, materials, and other costs not covered by tuition scholarship.",
      eligibility: "Based on FAFSA and CSS Profile",
    },
    {
      title: "Teaching Fellowships",
      amount: "$8,000 - $12,000/year",
      description: "Competitive fellowships for second-year students to teach undergraduate courses or assist faculty with courses and critiques.",
      eligibility: "Second-year students, application required",
    },
    {
      title: "Research Assistantships",
      amount: "$5,000 - $10,000/year",
      description: "Opportunities to work with faculty on research projects, publications, exhibitions, or archival work.",
      eligibility: "All students, by faculty invitation",
    },
    {
      title: "Materials & Supplies Grants",
      amount: "Up to $2,000/year",
      description: "Additional funding for thesis projects, exhibitions, or projects requiring specialized materials or equipment.",
      eligibility: "Application-based, prioritizes thesis work",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Tuition & Financial Aid
              </h1>
              <p className="text-xl text-muted-foreground">
                Transparent cost breakdown and comprehensive financial support
              </p>
            </div>
          </div>
        </section>

        {/* Key Highlight */}
        <section className="py-12 bg-primary/5 border-y border-primary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <DollarSign className="h-12 w-12 text-primary" />
                <div className="text-5xl font-bold text-primary">100%</div>
              </div>
              <h2 className="text-2xl font-semibold mb-3">Full Tuition Scholarship</h2>
              <p className="text-lg text-muted-foreground">
                All admitted MFA students receive full tuition scholarships covering $47,850 per year for the entire two-year program.
                This means you pay $0 for tuition—no loans, no application required.
              </p>
            </div>
          </div>
        </section>

        {/* Tuition & Fees Table */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">2024-2025 Tuition & Fees</h2>

              <Card className="mb-8">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-muted/30">
                          <th className="text-left p-4 font-semibold">Item</th>
                          <th className="text-right p-4 font-semibold">Annual Cost</th>
                          <th className="text-right p-4 font-semibold">Scholarship Coverage</th>
                          <th className="text-right p-4 font-semibold">Your Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tuitionData.map((item, index) => (
                          <tr key={index} className="border-b border-border last:border-0">
                            <td className="p-4">
                              <div className="font-medium">{item.item}</div>
                              <div className="text-sm text-muted-foreground">{item.note}</div>
                            </td>
                            <td className="text-right p-4 font-medium">{item.amount}</td>
                            <td className="text-right p-4 text-green-600 font-medium">
                              {item.covered === "$0" ? "-" : item.covered}
                            </td>
                            <td className="text-right p-4 font-bold">
                              {item.covered === "$0" ? item.amount : "$0"}
                            </td>
                          </tr>
                        ))}
                        <tr className="bg-muted/30 font-bold">
                          <td className="p-4">Total Annual Required Fees</td>
                          <td className="text-right p-4">$48,345</td>
                          <td className="text-right p-4 text-green-600">$47,850</td>
                          <td className="text-right p-4 text-primary">$495</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-900 dark:text-blue-100">
                  <strong>Note:</strong> The full tuition scholarship of $47,850 is automatically awarded to all admitted students.
                  You are only responsible for the mandatory fees totaling $495 per year.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estimated Living Expenses */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Estimated Living Expenses</h2>
              <p className="text-muted-foreground mb-8">
                While tuition is fully covered, students should budget for living expenses. Below is Yale's estimated
                cost of living for graduate students in New Haven for the 12-month academic year:
              </p>

              <Card className="mb-8">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-muted/30">
                          <th className="text-left p-4 font-semibold">Expense Category</th>
                          <th className="text-right p-4 font-semibold">Annual Estimate</th>
                          <th className="text-left p-4 font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {estimatedExpenses.map((expense, index) => (
                          <tr key={index} className="border-b border-border last:border-0">
                            <td className="p-4 font-medium">{expense.category}</td>
                            <td className="text-right p-4 font-medium">{expense.amount}</td>
                            <td className="p-4 text-sm text-muted-foreground">{expense.note}</td>
                          </tr>
                        ))}
                        <tr className="bg-muted/30 font-bold">
                          <td className="p-4">Total Estimated Living Expenses</td>
                          <td className="text-right p-4 text-primary">$28,565</td>
                          <td className="p-4 text-sm text-muted-foreground">Per academic year (12 months)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Total Cost of Attendance</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tuition & Fees</span>
                        <span className="font-medium">$48,345</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Living Expenses</span>
                        <span className="font-medium">$28,565</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Total Annual Cost</span>
                        <span className="text-primary">$76,910</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Your Responsibility</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Mandatory Fees</span>
                        <span className="font-medium">$495</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Living Expenses</span>
                        <span className="font-medium">$28,565</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold">
                        <span>Estimated Out-of-Pocket</span>
                        <span className="text-primary">$29,060</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">
                        *Can be reduced with grants, fellowships, and work opportunities
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Aid Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Additional Financial Aid</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Beyond the full tuition scholarship, Yale School of Art offers multiple forms of financial assistance
                to help students cover living expenses, materials, and other costs.
              </p>

              <div className="space-y-6">
                {financialAidOptions.map((option, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-center">
                            {option.amount}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                          <p className="text-muted-foreground mb-3">{option.description}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">
                              <strong>Eligibility:</strong> {option.eligibility}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply for Aid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">How to Apply for Financial Aid</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">1. Full Tuition Scholarship</h3>
                    <p className="text-muted-foreground mb-3">
                      <strong>No application required.</strong> The full tuition scholarship is automatically awarded
                      to all admitted students with your acceptance letter.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">2. Need-Based Grants</h3>
                    <p className="text-muted-foreground mb-3">
                      To be considered for need-based grants, complete both:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong>FAFSA (Free Application for Federal Student Aid)</strong> - Submit by February 1 for priority consideration
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          <strong>CSS Profile</strong> - Required for institutional aid, submit by February 1
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">3. Fellowships & Assistantships</h3>
                    <p className="text-muted-foreground mb-3">
                      Applications for teaching fellowships and research assistantships are typically announced in the spring semester.
                      Students will receive information from the School of Art and individual departments about available positions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">4. Materials & Supplies Grants</h3>
                    <p className="text-muted-foreground mb-3">
                      Application forms are available through the School of Art Student Services office.
                      Typically awarded twice per year (fall and spring). Priority given to thesis projects.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Payment Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Payment Deadlines</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground"><strong>Fall Term:</strong> August 15</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground"><strong>Spring Term:</strong> January 5</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Payment plans available</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Contact Financial Aid</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><strong>Email:</strong> finaid.art@yale.edu</li>
                      <li><strong>Phone:</strong> (203) 432-2864</li>
                      <li><strong>Office:</strong> 1156 Chapel Street, Room 153</li>
                      <li><strong>Hours:</strong> Mon-Fri, 9am-5pm</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tuition;
