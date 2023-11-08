const Faq = () => {
  return (
    <div>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our works and what can do
                for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How do I submit an assignment on the platform?
                  </summary>

                  <span>
                    Provide clear instructions on how users can submit their
                    assignments through your website, including any file format
                    requirements or submission deadlines.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    What should I do if I encounter technical issues while
                    submitting an assignment?
                  </summary>

                  <span>
                    Offer guidance on troubleshooting common technical problems,
                    such as file upload issues, browser compatibility, or login
                    difficulties.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I check the status of my submitted assignments?
                  </summary>

                  <span>
                    Explain the process for tracking the progress and status of
                    submitted assignments, such as whether they are under
                    review, graded, or returned with feedback.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is the grading and feedback process for assignments?
                  </summary>

                  <span className="px-4 py-2">
                    Describe how assignments are graded and when students can
                    expect to receive feedback. Mention if there is a specific
                    grading rubric or criteria.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Can I request an extension for an assignment deadline?
                  </summary>

                  <span className="px-4 py-2">
                    Clarify your policy on assignment deadline extensions and
                    provide information on how students can request them.
                    Include any necessary documentation or procedures.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How do I contact support or instructors for
                    assignment-related questions?
                  </summary>

                  <span className="px-4 py-2">
                    Provide contact details and instructions on how students can
                    reach out for assistance, whether it is for technical
                    support, clarification on assignment instructions, or
                    general inquiries.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
