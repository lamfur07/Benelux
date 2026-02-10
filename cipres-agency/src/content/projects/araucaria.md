---
title: "QA Automation Framework"
description: "Create and implement QA automation for a major shipyard"
category: "Enterprise PLM"
image: "/images/QA Automation.png"
link: "https://agustincastets.vercel.app/en"
yearFinished: 2025
timeline: "28 weeks"
tags: ["Selenium", "TestNG", "Zephyr", "Azure DevOps", "CI/CD Pipeline"]
---

## Project Overview
Seaspan’s QA process for enterprise applications has historically relied on manual testing. While effective for smaller scopes, this approach becomes increasingly difficult to scale as systems grow in complexity.
This project focused on creating and implementing a robuts, and dynamic automated QA framework within ARAS PLM. The goal was to reduce repetitive manual testing, improve release confidence, and establish a foundation for scalable QA automation across other enterprise applications.

## Client Challenges
The primary challenge was scalability. Manual regression testing required significant time and effort, especially for complex ARAS workflows involving multiple steps and validations.
Additionally, regression testing was typically reactive, meaning defects were often discovered late in the release cycle. This increased release risk and placed additional pressure on QA resources during critical delivery windows.

## Our Solution
A structured QA automation framework was implemented to address these challenges.
Selenium WebDriver was used to automate end-to-end user workflows within ARAS, while TestNG provided test orchestration, assertions, and reporting. The automation suite was integrated into Azure DevOps, enabling scheduled nightly execution without manual intervention.
This approach transformed regression testing into a continuous, repeatable process rather than a one-time manual effort.

## Key Features
* End-to-end automated execution of ARAS workflows
* Structured test management and reporting using TestNG
* Nightly Azure DevOps pipeline execution as a system health check
* Automated pass/fail evidence and reporting visibility
* Reusable framework designed for future expansion

## Results & Impact
* **Reduced Manual Effort:** 75% of the time was saved with automated testing.
* **Improved Quality Confidence:** Early detection of issues through nightly automated runs.
* **Operational Efficiency:** QA resources freed from repetitive tasks to focus on higher-value testing.
* **Scalable Foundation:** Framework ready to expand into additional ARAS modules and other Seaspan applications.
