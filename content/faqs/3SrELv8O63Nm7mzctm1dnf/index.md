---
headless: true
updated: "2019-12-11T04:46:22.265Z"
createdAt: "2019-12-11T04:46:22.265Z"
date: "2019-12-11T04:46:22.265Z"
question: "How do you manage updating or retraining signals once they are in use?"
answer:
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Our first step is to design the signals to minimize the need for updates or retraining. In part, we do this by developing machine learning models that generalize well. (The rest is secret sauce.) When our data science team develops optimizations to signals, we deploy those updates with the same discipline and process employed for updates to our real-time market data appliances. Signal libraries are versioned (just like feed handler libraries). We deploy new signal versions to customer test environments. Using a mutual scheduling and approval process via our web portal, we deploy updates to signals into production."
        nodeType: "text"
    nodeType: "paragraph"
answer_plaintext: "Our first step is to design the signals to minimize the need for updates or retraining. In part, we do this by developing machine learning models that generalize well. (The rest is secret sauce.) When our data science team develops optimizations to signals, we deploy those updates with the same discipline and process employed for updates to our real-time market data appliances. Signal libraries are versioned (just like feed handler libraries). We deploy new signal versions to customer test environments. Using a mutual scheduling and approval process via our web portal, we deploy updates to signals into production."
---
