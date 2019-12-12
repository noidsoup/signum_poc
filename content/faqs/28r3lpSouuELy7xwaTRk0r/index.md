---
headless: true
updated: "2019-12-11T04:37:45.122Z"
createdAt: "2019-12-11T04:37:45.122Z"
date: "2019-12-11T04:37:45.122Z"
question: "What exactly are the signals that you deliver?"
answer:
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
        marks:
          - "bold"
        value: "Quote Vector:"
        nodeType: "text"
      - data: {}
        marks: []
        value: " a probability value that the next price will be greater than the current price. Two values are included in each quote event – one for the bid and one for the offer. "
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks:
          - "bold"
        value: "Quote Fuse:"
        nodeType: "text"
      - data: {}
        marks: []
        value: " a probability value that the price will change in less than 50 milliseconds*. Two values are included in each quote event – one for the bid and one for the offer. "
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
        value: " to learn why 50 milliseconds is a good time window for assessing price stability."
        nodeType: "text"
    nodeType: "paragraph"
  - data: {}
    content:
      - data: {}
        marks:
          - "bold"
        value: "Liquidity Lamp:"
        nodeType: "text"
      - data: {}
        marks: []
        value: " a Boolean flag that indicates that a hidden order provides additional liquidity at the displayed price. Two flags are included in each quote event and price book update event – one for the bid and one for the offer."
        nodeType: "text"
    nodeType: "paragraph"
answer_plaintext: "The signals are additional fields that are included in normalized market data update events. The format of each signal field depends on the signal. For the current portfolio of signals, the fields are as follows:  Quote Vector: a probability value that the next price will be greater than the current price. Two values are included in each quote event – one for the bid and one for the offer.  Quote Fuse: a probability value that the price will change in less than 50 milliseconds*. Two values are included in each quote event – one for the bid and one for the offer. *Read our whitepaper to learn why 50 milliseconds is a good time window for assessing price stability. Liquidity Lamp: a Boolean flag that indicates that a hidden order provides additional liquidity at the displayed price. Two flags are included in each quote event and price book update event – one for the bid and one for the offer."
---
