export type FaqItem = {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What’s your typical process for a new project?",
    answer:
      'We begin with a discovery session to understand your business goals, technical environment, and growth plans. From there, we define a structured roadmap and execution strategy.',
  },
  {
    question: "What industries does TNI work with?",
    answer:
      'We’ve worked with clients across local school districts (K-12), healthcare, manufacturing, fintech, e-commerce, and more. Our team’s diverse experience allows us to adapt our approach to fit the unique needs of each industry.',
  },
  {
    question: 'Do you build custom software or work with existing systems?',
    answer:
      'We build custom software tailored to your specific needs, but we also integrate with existing systems when appropriate. Our team is experienced in both approaches and will recommend the best path based on your goals.',
  },
  {
    question: "Do you provide ERP software?",
    answer:
      "We do not sell proprietary ERP software. We provide ERP consulting, implementation, customization, integration, and optimization services using leading enterprise platforms."
  },
  {
    question: "What makes your QA automation approach different?",
    answer:
      'We focus on scalable, enterprise-grade automation frameworks integrated with CI/CD pipelines. Our goal is not just test coverage, but continuous quality validation with real release confidence.',
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'Project timeline varies depending on scope, content readiness, and feedback cycles. After discovery, we’ll share a clear timeline with milestones so you always know what’s next.',
  },
  {
    question: 'Can you work with our existing dev or marketing team?',
    answer:
      'Yes. We often collaborate with in-house teams, agencies, or freelancers. We can plug into your existing workflow and ship work that’s easy to maintain.',
  }
]
