---
headless: true
updated: "2019-12-03T23:54:31.219Z"
createdAt: "2019-12-03T23:54:31.219Z"
date: "2019-12-03T23:54:31.219Z"
title: "FAQ Questions"
centerAlignText: false
biggerParagraphText: false
columns: "Two"
column1Content:
  - data: {}
    content:
      - data: {}
        marks: []
        value: "What do you mean by real-time signals?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "We mean that the signals are delivered synchronously with normalized market data. For example, when you receive a quote event with an update to the best bid and offer prices and sizes, you also receive predictions on when those prices will change (Quote Fuse), what direction the prices will move when they change (Quote Vector), and whether or not there is additional hidden liquidity at the displayed price (Liquidity Lamp). New signal values are delivered with EVERY market data update event."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "What exactly are the signals that you deliver?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "The signals are additional fields that are included in normalized market data update events. The format of each signal field depends on the signal. For the current portfolio of signals, the fields are as follows: "
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        content:
          - data: {}
            content:
              - data: {}
                marks: []
                value: ""
                nodeType: "text"
              - data:
                  uri: "/quote-vector"
                content:
                  - data: {}
                    marks:
                      - "bold"
                    value: "Quote Vector"
                    nodeType: "text"
                nodeType: "hyperlink"
              - data: {}
                marks: []
                value: ": a probability value that the next price will be greater than the current price. Two values are included in each quote event – one for the bid and one for the offer. "
                nodeType: "text"
            nodeType: "paragraph"
        nodeType: "list-item"
      - data: {}
        content:
          - data: {}
            content:
              - data: {}
                marks: []
                value: ""
                nodeType: "text"
              - data:
                  uri: "/quote-fuse"
                content:
                  - data: {}
                    marks:
                      - "bold"
                    value: "Quote Fuse"
                    nodeType: "text"
                nodeType: "hyperlink"
              - data: {}
                marks: []
                value: ": a probability value that the price will change in less than 50 milliseconds*. Two values are included in each quote event – one for the bid and one for the offer. "
                nodeType: "text"
              - data: {}
                marks:
                  - "italic"
                value: "*"
                nodeType: "text"
              - data:
                  uri: "/whitepapers-signup"
                content:
                  - data: {}
                    marks:
                      - "italic"
                    value: "Read our whitepaper"
                    nodeType: "text"
                nodeType: "hyperlink"
              - data: {}
                marks:
                  - "italic"
                value: " to learn why 50 milliseconds is a good time window for assessing price stability. "
                nodeType: "text"
            nodeType: "paragraph"
        nodeType: "list-item"
      - data: {}
        content:
          - data: {}
            content:
              - data: {}
                marks:
                  - "bold"
                value: ""
                nodeType: "text"
              - data:
                  uri: "/liquidity-lamp"
                content:
                  - data: {}
                    marks:
                      - "bold"
                    value: "Liquidity Lamp"
                    nodeType: "text"
                nodeType: "hyperlink"
              - data: {}
                marks: []
                value: ": a Boolean flag that indicates that a hidden order provides additional liquidity at the displayed price. Two flags are included in each quote event and price book update event – one for the bid and one for the offer."
                nodeType: "text"
            nodeType: "paragraph"
        nodeType: "list-item"
    nodeType: "unordered-list"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "How are the signals delivered?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Signals are delivered via the Exegy Client API (XCAPI) as additional fields in normalized market data update events. XCAPI allows trading applications to dynamically subscribe to real-time market data updates for a user-specified list of symbols. For each subscription request, an application receives a current snapshot of market data values, as well as current Signum signal values, followed by incremental update events that include new signal values. More information on the Exegy Client API is available here."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Can I download sample data for a demo?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Absolutely! We have 10 day samples of our signals in comma-separated values (CSV) format for easy evaluation. Just "
        nodeType: "text"
      - data:
          uri: "/demo-signup"
        content:
          - data: {}
            marks: []
            value: "click here"
            nodeType: "text"
        nodeType: "hyperlink"
      - data: {}
        marks: []
        value: ", provide us with your contact info, and we will get the data to you via download or cloud transfer."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Can I evaluate Signum in real-time?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Yes! Please contact us to discuss connectivity options ranging from Internet connectivity to data center cross connection to deployment of an Exegy appliance in your test environment."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Why should we use Signum when we are already developing signals in house?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "We view the Signum portfolio of signals as foundational. Our intention is to deliver useful signals (as a service) that can be integrated into novel and more profitable trading strategies. We expect Signum to be attractive to firms who are already investing in signal development, including machine learning and artificial intelligence. Signum offers an opportunity to accelerate the progress of those efforts by integrating proven signals and focusing internal teams on new signals targeted to specific trading strategies. If you are focused on the same types of signals as those that are already in the Signum portfolio, we invite you to compare the quality of our signals. Our hope is that you find ours just as good (or better) and choose to focus your efforts on novel ways of using Signum signals."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "How do you ensure the signals maintain their accuracy?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Our vision for Signals-as-a-Service includes continuous monitoring of signal performance and on-demand access to signal performance metrics. We have integrated Signum signal performance monitoring into Exegy’s global managed services infrastructure. Our expert team continuously monitors all Signum-enabled Exegy appliances to ensure real-time signal delivery is functioning properly every moment of every trading day. We also deliver on-demand access to signal performance metrics via our web portal. Register for access today to use interactive analytics on each signal in the Signum portfolio. The Signum team uses these same analytics tools as part of their ongoing efforts to maintain and improve signal quality."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Can I use Signum if I’m a broker that must disclose order handling information?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "We have designed Signum with order handling disclosures in mind. In short, we know the math behind our models. Please contact us to discuss integrating Signum into your regulatory compliance regime."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Who can I speak with about my other questions?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Please contact us to learn more about Signum. We are happy to loop in members of our data science and engineering team to get all of your questions answered quickly."
        nodeType: "text"
    nodeType: "paragraph"
column1Content_plaintext: "What do you mean by real-time signals? We mean that the signals are delivered synchronously with normalized market data. For example, when you receive a quote event with an update to the best bid and offer prices and sizes, you also receive predictions on when those prices will change (Quote Fuse), what direction the prices will move when they change (Quote Vector), and whether or not there is additional hidden liquidity at the displayed price (Liquidity Lamp). New signal values are delivered with EVERY market data update event. What exactly are the signals that you deliver? The signals are additional fields that are included in normalized market data update events. The format of each signal field depends on the signal. For the current portfolio of signals, the fields are as follows:  Quote Vector: a probability value that the next price will be greater than the current price. Two values are included in each quote event – one for the bid and one for the offer.  Quote Fuse: a probability value that the price will change in less than 50 milliseconds*. Two values are included in each quote event – one for the bid and one for the offer. *Read our whitepaper to learn why 50 milliseconds is a good time window for assessing price stability.  Liquidity Lamp: a Boolean flag that indicates that a hidden order provides additional liquidity at the displayed price. Two flags are included in each quote event and price book update event – one for the bid and one for the offer. How are the signals delivered? Signals are delivered via the Exegy Client API (XCAPI) as additional fields in normalized market data update events. XCAPI allows trading applications to dynamically subscribe to real-time market data updates for a user-specified list of symbols. For each subscription request, an application receives a current snapshot of market data values, as well as current Signum signal values, followed by incremental update events that include new signal values. More information on the Exegy Client API is available here. Can I download sample data for a demo? Absolutely! We have 10 day samples of our signals in comma-separated values (CSV) format for easy evaluation. Just click here, provide us with your contact info, and we will get the data to you via download or cloud transfer. Can I evaluate Signum in real-time? Yes! Please contact us to discuss connectivity options ranging from Internet connectivity to data center cross connection to deployment of an Exegy appliance in your test environment. Why should we use Signum when we are already developing signals in house? We view the Signum portfolio of signals as foundational. Our intention is to deliver useful signals (as a service) that can be integrated into novel and more profitable trading strategies. We expect Signum to be attractive to firms who are already investing in signal development, including machine learning and artificial intelligence. Signum offers an opportunity to accelerate the progress of those efforts by integrating proven signals and focusing internal teams on new signals targeted to specific trading strategies. If you are focused on the same types of signals as those that are already in the Signum portfolio, we invite you to compare the quality of our signals. Our hope is that you find ours just as good (or better) and choose to focus your efforts on novel ways of using Signum signals. How do you ensure the signals maintain their accuracy? Our vision for Signals-as-a-Service includes continuous monitoring of signal performance and on-demand access to signal performance metrics. We have integrated Signum signal performance monitoring into Exegy’s global managed services infrastructure. Our expert team continuously monitors all Signum-enabled Exegy appliances to ensure real-time signal delivery is functioning properly every moment of every trading day. We also deliver on-demand access to signal performance metrics via our web portal. Register for access today to use interactive analytics on each signal in the Signum portfolio. The Signum team uses these same analytics tools as part of their ongoing efforts to maintain and improve signal quality. Can I use Signum if I’m a broker that must disclose order handling information? We have designed Signum with order handling disclosures in mind. In short, we know the math behind our models. Please contact us to discuss integrating Signum into your regulatory compliance regime. Who can I speak with about my other questions? Please contact us to learn more about Signum. We are happy to loop in members of our data science and engineering team to get all of your questions answered quickly."
column2Content:
  - data: {}
    content:
      - data: {}
        marks: []
        value: "What is the signal generation latency of Signum?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Signum signal generators are embedded in Exegy hardware-accelerated appliances. These appliances are purpose-built for low latency processing of market data. The additional latency imposed by adding Signum signals to each market data update event is approximately one microsecond. As always, Exegy engineers and data scientists are striving to optimize our signal models to drive the latency as close to zero as possible. Incremental performance improvements are delivered as part of our managed service."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "How many signals will I receive?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Your trading application will receive new signal values with every normalized market data event. So the number of signals delivered is equal to the number of market data events. In aggregate, the NBBO prices of US equities update hundreds of millions of times per trading day. For the most liquid names, the number of signals per day could be well over a million. For on-demand data on the update rates of market data feeds, check out our MarketDataPeaks service."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "What if I don’t use Exegy for real-time market data today?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Signum can be used in conjunction with other sources of real-time market data. The normalized market data values included in update events can be used to synchronize more easily with other sources of market data. Have other integration questions? Please contact us. We are committed to making Signum as user-friendly as possible."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Do you have two years of historical data for a full backtest?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "You betcha. We strive to make Signum easy to evaluate for data buyers with mature data procurement and backtesting processes. Please contact us to coordinate access to our full Signum history. Please keep in mind that Signum delivers signal updates on every market data event, therefore the historical data set is approximately the same size than complete market data archives for the same time period."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "How much does Signum cost?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Our goal is to make Signum such a compelling value that it becomes a “no brainer” purchase. Signum subscribers pay a flat monthly fee for each asset class and region of use. We have priced Signum to cost approximately 10x less than it would cost you to develop yourself. (We would also point out that Signum is available NOW – saving you over two years of development work and risk that you may not achieve the same results.) We keep the Signum subscription fee fixed regardless of how many applications use the signal or where those applications are located. Our goal is to make Signum such a compelling value that it becomes a “no brainer” purchase."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Can I modify parameters that affect the accuracy of the signal?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Signum is designed to allow each trading application to choose signal parameters on a per symbol basis. Specifically, applications choose the probability values (or “accuracy thresholds”) upon which to take action. This allows applications to tune signal accuracy and triggering frequencies to meet specific trading goals. Registered users gain access to interactive charts that report accuracy, triggering frequency, and other signal performance metrics for selectable accuracy threshold values. "
        nodeType: "text"
      - data:
          uri: "/demo-signup"
        content:
          - data: {}
            marks: []
            value: "Sign up now →"
            nodeType: "text"
        nodeType: "hyperlink"
      - data: {}
        marks: []
        value: ""
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "How do you manage updating or retraining signals once they are in use?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Our first step is to design the signals to minimize the need for updates or retraining. In part, we do this by developing machine learning models that generalize well. (The rest is secret sauce.) When our data science team develops optimizations to signals, we deploy those updates with the same discipline and process employed for updates to our real-time market data appliances. Signal libraries are versioned (just like feed handler libraries). We deploy new signal versions to customer test environments. Using a mutual scheduling and approval process via our web portal, we deploy updates to signals into production."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "From where does Signum source its data?"
        nodeType: "text"
    nodeType: "heading-3"
  - data: {}
    content:
      - data: {}
        marks: []
        value: "Signum uses real-time market data feeds – both direct feeds from trading venues (exchanges) as well as consolidated tape feeds (e.g. the Security Information Processor feeds). By deploying a Signum-enabled appliance into your trading infrastructure, you profoundly enrich the real-time market data that you use today. Talk to us about the most cost effective way to deploy Signum in your current front office trading infrastructure."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: ""
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks: []
        value: ""
        nodeType: "text"
    nodeType: "paragraph"
column2Content_plaintext: "What is the signal generation latency of Signum? Signum signal generators are embedded in Exegy hardware-accelerated appliances. These appliances are purpose-built for low latency processing of market data. The additional latency imposed by adding Signum signals to each market data update event is approximately one microsecond. As always, Exegy engineers and data scientists are striving to optimize our signal models to drive the latency as close to zero as possible. Incremental performance improvements are delivered as part of our managed service. How many signals will I receive? Your trading application will receive new signal values with every normalized market data event. So the number of signals delivered is equal to the number of market data events. In aggregate, the NBBO prices of US equities update hundreds of millions of times per trading day. For the most liquid names, the number of signals per day could be well over a million. For on-demand data on the update rates of market data feeds, check out our MarketDataPeaks service. What if I don’t use Exegy for real-time market data today? Signum can be used in conjunction with other sources of real-time market data. The normalized market data values included in update events can be used to synchronize more easily with other sources of market data. Have other integration questions? Please contact us. We are committed to making Signum as user-friendly as possible. Do you have two years of historical data for a full backtest? You betcha. We strive to make Signum easy to evaluate for data buyers with mature data procurement and backtesting processes. Please contact us to coordinate access to our full Signum history. Please keep in mind that Signum delivers signal updates on every market data event, therefore the historical data set is approximately the same size than complete market data archives for the same time period. How much does Signum cost? Our goal is to make Signum such a compelling value that it becomes a “no brainer” purchase. Signum subscribers pay a flat monthly fee for each asset class and region of use. We have priced Signum to cost approximately 10x less than it would cost you to develop yourself. (We would also point out that Signum is available NOW – saving you over two years of development work and risk that you may not achieve the same results.) We keep the Signum subscription fee fixed regardless of how many applications use the signal or where those applications are located. Our goal is to make Signum such a compelling value that it becomes a “no brainer” purchase. Can I modify parameters that affect the accuracy of the signal? Signum is designed to allow each trading application to choose signal parameters on a per symbol basis. Specifically, applications choose the probability values (or “accuracy thresholds”) upon which to take action. This allows applications to tune signal accuracy and triggering frequencies to meet specific trading goals. Registered users gain access to interactive charts that report accuracy, triggering frequency, and other signal performance metrics for selectable accuracy threshold values. Sign up now → How do you manage updating or retraining signals once they are in use? Our first step is to design the signals to minimize the need for updates or retraining. In part, we do this by developing machine learning models that generalize well. (The rest is secret sauce.) When our data science team develops optimizations to signals, we deploy those updates with the same discipline and process employed for updates to our real-time market data appliances. Signal libraries are versioned (just like feed handler libraries). We deploy new signal versions to customer test environments. Using a mutual scheduling and approval process via our web portal, we deploy updates to signals into production. From where does Signum source its data? Signum uses real-time market data feeds – both direct feeds from trading venues (exchanges) as well as consolidated tape feeds (e.g. the Security Information Processor feeds). By deploying a Signum-enabled appliance into your trading infrastructure, you profoundly enrich the real-time market data that you use today. Talk to us about the most cost effective way to deploy Signum in your current front office trading infrastructure. "
---
