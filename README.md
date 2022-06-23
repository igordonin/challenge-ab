# Full-Stack Developer Challenge

At **[Airbank](https://joinairbank.com/)** we use many tools, technologies and integrations to third-party service providers, but our core application stack is currently based on [Vue](https://vuejs.org/), [Nuxt](https://nuxtjs.org/), [TailwindCSS](https://tailwindcss.com/), [Apollo GraphQL](https://www.apollographql.com/), [Node](https://nodejs.org/), [TypeScript](https://www.typescriptlang.org/), [Prisma](https://www.prisma.io/), and [PostgreSQL](https://www.postgresql.org/).

When it comes to full-stack developers and tech stack, we have two strong beliefs here:
1. Everyone can (and should) be full-stack, writing all the layers of the solution. We are a customer-centrered company, and all users want is access to great, fully-functional features. They don't care about shiny pieces of code in a layer of abstraction they will never see. Yes, good code is a must, but only code that delivers the desired features matters.
2. Developers can't be "married" to their beloved technologies (or to whatever is at the height of fashion right now). Being able to write good vanilla JavaScript is more important than being a big TypeScript evangelist. Writing excellent SQL is more important than knowing all about the latest ORM. We display our current stack, but we target developers that won't complain if (for a hypothetical reason) we decide to change from, say, Vue to native Web Components, or from Node to Deno, or maybe remove Prisma and create our own in-house ORM...

Therefore, this technical challenge for the full-stack developer role is focused on **being able to quickly adapt to our stack** (even if you aren't used to something in it), **being able to offer an end-to-end solution to the problem** (from the interface to the database), and **being able to show good decisions based on attention to details** (after all, software development is a science, but also an art of crafting the best experience possible in each feature you put your hands on).

## TLDR

The challenge is to create a small SPA that exhibits a page with a table of financial transactions, which can be filtered by account and by date range (start month and end month), and a sub page with the transaction details after clicking on a row of the previous table. Use the technologies of our stack as much as you can (preferably all), but TypeScript is expected only for the back-end. A [transactions CSV file](./data/transactions.csv) with a bunch of sample data is attached to this repository.

![Sample Layout for Transactions Page](https://github.com/joinairbank/challenges/raw/main/dev-fullstack/sample-layout.png)

There's no mandatory layout to copy, but we propose to show something simple yet organized in a minimalist way. Take the image as a bare example, not a strict design to follow.

## Technical Details

If you were not lazy enough for stop right on the [TLDR](#tldr), nice! Here is a step-by-step explanation to you.

### Set up the Database

To create the database, the best scenario is if you can follow the schema-first strategy with Prisma, first creating a schema file that describes each entity (with proper normalization in mind), then generating SQL migrations to build the relational DB.

To populate the database, the best scenario is if you can leverage Prisma's seed feature to automatically fill the tables with the sample data we provide as CSV files for [transactions](./data/transactions.csv), [accounts](./data/accounts.csv), and [categories](./data/categories.csv).

### Building the API

To build the API, the best scenario is if you can base yourself on Apollo Server, using a schema-first strategy with GraphQL tags, with every resolver properly TypeScript-typed, and using Prisma features to communicate with the database.

You're free to structure your API architecture following your own decisions about organization, modules, abstraction, reusability... But be prepared to explain your rationale.

### Building the App

To create the SPA, the best scenario is if you use Vue and Nuxt, however you're free to choose between Vue/Nuxt 2, or Vue/Nuxt 3. As already mentioned, TypeScript in the front-end is not required, but if you decide to use, enable all strict enforcements because we don't like to see `any` anywhere.

To visually enhance the pages, the best scenario is if you can do with TailwindCSS 3, but if you want to show incredible raw CSS abilities, feel free to go this way. Remember to be prepared to explain any decisions you've made.

Finally, we are here to see your own abilities on writing code, not on getting others code. We usually don't like to see third-party Vue components in use, it's extremely recommended to write your own components, or just use native browser elements if you can't.

## FAQ

### Where and how do I need to publish the solution?

If you can provide a link to a public GitHub repository with a good `README.md`, all good. No need to deploy it anywhere (unless you really want to do that to show something special). During the meeting we'll arrange with you after the challenge, you will show us the solution by sharing your screen, so the deploy really doesn't matter.

Please, send you challenge results to **jobs@joinairbank.com** or to your person of touch at Airbank Engineering.

### What about the transaction details sub page?

Just decide the best way you think all the data of that transaction should be shown. Of course an end user wouldn't want to see ids, so use the proper entity relations to show only names of foreign entities.

### Do I need to use all that transactions in the CSV file?!

Yes, we crafted with love a batch with `349933` sample transactions. This way, you can show us that you know how to work with large sets of data without compromising performance. It's a super important part of the challenge. 😉

### What is the desired behavior of functionality X?

Anything not explicitly described is open to your decision. But remember that **attention to detail** is a core value being evaluated here. Most of the requirements are documented here.

### I'm not familiar with a certain part of the required stack, is it mandatory to use it?

We love to see people trying to fit to our stack, even without previous experience in it. Remember that **being able to quickly adapt to our stack** is a core value being evaluated here. That being said, you're free to show the best you can, the way you believe you should.

### What is more important, the code structure or the way the pages work?

Both. Period.

### I won't be able to finish the challenge in time, what should I do?

Let us know why you can't. If it's an acceptable reason (and "having too much to do" is not), we'll give you a few more days.

### I'm a super senior developer, why a coding challenge?

In our experience, it's more difficult to find developers who are super experienced in all pieces of technology a company uses than finding oil in your backyard. Here we like to level developers based on their fit to Airbank's needs, not based on other arbitrary metrics like years since graduation. Hence, if you want to be considered for a senior role, prove it!

But of course, we don't want to insult anyone. If you are sure that you are at a unique level of excellence in our entire stack, and you have some good examples of this excellence in public repositories, just send us some links and we will see if we can skip the challenge.

### What is the next step in the hiring process?

After you send us the confirmation of the challenge completion with a link to the repository(ies), we'll arrange a meeting with you shortly afterwards, where you will show us the solution and code by sharing your screen. Anything after that will depend on the results shown. Good luck! 🙂

### I have more questions about this challenge, where do I ask?

Honestly, here you have all information you need. Just follow it with attention to all details and make decisions where you can't find instructions. After all, your capacity to make decisions is an important part of what is being evaluated.