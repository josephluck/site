# Joseph Luck

##### josephreubenluck@gmail.com

I worked at Goodlord between November 2016 and April 2018 in the core engineering team as a software engineer focussing on the front-end.

## Baby steps

At the time I joined, Goodlord was a small but headstrong London startup with ambitions of transforming the property rental space. If you've ever rented a property in the UK, you'll feel the very pain that Goodlord was designed to solve; endless paperwork, countless in-person trips to an estate agent, constant confusion and anxiety over what's going on and frustration with the lack of trust in those you're dealing with. I was thrilled to be joining a startup with a solid mission of bringing simplicity, clarity and technology to such a broken industry.

I was interviewed by what was (at the time) the entire engineering team of 4 people. I made a good impression, and was quickly offered a position as a software engineer. After I joined, it became apparent that I was the only engineer with any real experience in the frontend, and I naturally took a lead position architecting and building what was effectively a rebuild of the existing customer-facing product in Scala and ES6 + Vue.js. We worked in sprints, slowly but surely rebuilding the legacy platform using modern technology.

## Learning, building, learning, building

It became apparent after a few months that Goodlord needed to ramp up it's engineering effort if the rewrite was ever to succeed. The business was fully invested in the project, and we brought a bunch of contractors in to help us short-term whilst we interviewed for full-time candidates.

At this point, we took a much needed retrospective over what we were building and it became fairly clear, at least on the front-end, that we were building a carbon copy of the existing platform without making much improvement in terms of user experience. We hired a contract designer to help us improve the quality of the product and took the opportunity to reassess the technologies we had invested in.

The bulk of the Goodlord platform consists of complex webforms with fairly complex conditional fields and validation requirements - we kept this at the front of our minds when evaluating new technologies to use. We considered React with Redux, however I had my reservations over it's effectiveness for quickly building reliable interfaces considering my previous experience building a web-form heavy internal system for [Commusoft](./resume). The rest of the engineering team were heavily invested in statically-typed functional scala, and this was something that we wanted to replicate on the front-end. With help from the team, I authored [Helix](https://josephluck.gitbooks.io/helix/) to provide a functional state management framework around React using Typescript for safety. This solid functional, type-safe framework allowed us to quickly build interfaces that our contract designer provided. By using React, we were able to author re-usable components, using modern CSS practices inspired by [Tachyons](https://tachyons.io/) and created an extensive component library. We were able to leverage a range of functional programming principles from our back-end colleagues such as referential transparency, currying and monads (particularly either, and option) to help us build the complex forms, the result was an easy to reason about application that had amazing developer experience and (by virtue of Typescript), was pretty much bug free.

Goodlord were pushing for series A funding after proving success with the production application. However, we still needed to hire a dream team of engineers. Ahead of the funding announcement, I built a dedicated hiring micro-site from bespoke designs in just two days. This proved a huge success and we were able to hire a slew of fantastic permanent back-end and full-stack software engineers through it. I helped train a few of these engineers, bringing them up to speed with our highly modern approach to front-end.

## Dream team

The team grew to around 20 engineers with 3 product managers, a head of engineering and a CTO; a solid team to built a world-class platform. At this point, there were too many engineers to be effective in one big team; we split the team in 3, came up with kick-ass names and made sure there was at least a senior engineer, product manager and a even split across the front-end and back-end in each cross-functional squad.

Instead of team-wide retrospectives, we held individual squad retrospectives and worked solidly on one work stream for several months. We achieved an amazing cadence of delivery and momentum during this time and quickly got our first customer on to the new platform, just in time for our series B funding round.

## Let's get real

Restructure and refocus of the company post-series B funding failure
Product re-write was a bad idea, let's deliver value where our customers are
PHP monolith with jQuery, built with duct-tape (link to article about tech-debt from hn)
Explaining approach to working on adding to the platform safely
Plans for future stability of the front-end introducing React and component-driven design
Adding production error tracking using Sentry (omg the amount of errors)
Introducing metrics using Mixpanel
Improving the look and the feel of the platform, modernising it ready for new features

## Leaving on a high

Lessons learnt, friends made
