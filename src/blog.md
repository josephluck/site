# Joseph Luck

##### josephreubenluck@gmail.com

---

## Type-safe generic React components

#### Saturday 1st December 2018

A colleague of mine showed me a neat little unknown feature of Typescript in combination with React that makes it a delight to achieve type-safe generic React components.

### Generic React components

When I say "generic", I mean React components that take in a [generic data shape](https://www.typescriptlang.org/docs/handbook/generics.html) and expose props that operate upon that data shape. I.e. a carousel component that takes in an array of a data and exposes a [render-prop](https://reactjs.org/docs/render-props.html) to render each slide within the carousel. For example:

```
// slider.tsx
import React from 'react'

interface Props {
  slides: any[]
  renderSlide: (slide: any): React.ReactNode
}

export function Slider(props: Props) {
  return (
    <SliderContainer>
      <LeftArrow />
      {props.slides.map((slide, i) => (
        <SlideContainer key={i}>
          {props.renderSlide(slide)}
        </SlideContainer>
      ))}
      <RightArrow />
    </SliderContainer>
  )
}

// app.tsx
interface Cat {
  name: string,
  image: string
}

const cats: Cat[] = [
  { name: 'Cute cat', image: 'cure-cat.png' },
  { name: 'Evil cat', image: 'evil-cat.png }
]

export default () {
  return (
    <Slider
      slides={cats}
      renderSlide={cat => (
        <div>
          <img src={cat.image} />
          <h2>{cat.name}</h2>
        </div>
      )}
    />
  )
}
```

> Slider implementation details have been left out for brevity

The example above is perfectly fine however, you'll notice that the component's `slides` and `renderSlide` props are typed using `any`. This means that when using the component, there will be no inferred type in the render prop `renderSlide` even though we know ahead of time what the data shape of `slides` is. However, we can do better!

### Adding type safety

It's clear that our `<Slider />` component is designed to be flexible enough to work with varying data shapes in it's `slides` prop, however it does not provide any mechanism for ensuring that `renderSlide` is type-safe in combination with it's `slides` prop. For those who are well versed with Typescript, you'll know that [generics](https://www.typescriptlang.org/docs/handbook/generics.html) are the missing ingredient. For those who don't know, generics allow us to pass around information about the type of data a function, class, or in this case, component is dealing with.

We can change our `<Slider />` component to take a generic type argument:

```
// slider.tsx
import React from 'react'

interface Props<T> {
  slides: T[]
  renderSlide: (slide: T): React.ReactNode
}

export function Slider<T>(props: Props<T>) {
  return (
    <SliderContainer>
      <LeftArrow />
      {props.slides.map((slide, i) => (
        <SlideContainer key={i}>
          {props.renderSlide(slide)}
        </SlideContainer>
      ))}
      <RightArrow />
    </SliderContainer>
  )
}
```

> Adding a generic type argument `<T>` and passing it to the `Props` interface allows the data shape to be passed around

Now it's set up, let's explore how this can be used in our app.

### A nieve approach

```
// app.tsx
interface Cat {
  name: string,
  image: string
}

const cats: Cat[] = [
  { name: 'Cute cat', image: 'cure-cat.png' },
  { name: 'Evil cat', image: 'evil-cat.png }
]

const CatSlider = Slider<Cat>

export default () {
  return (
    <CatSlider
      slides={cats}
      renderSlide={cat => (
        <div>
          <img src={cat.image} />
          <h2>{cat.name}</h2>
        </div>
      )}
    />
  )
}
```

By assigning a new constant, `const CatSlider = Slider<Cat>`, we've passed the `Cat` interface to the `T` generic, and as a result, `renderSlide` is correctly typed as a `Cat` and immediately the application has become more type-safe. However, it feels a little hacky to assign a new constant to achieve this.

### A neat little trick

Wouldn't it be nicer if we didn't have to use an intermediary constant just to enable type-safety on our `CatSlider`? Well, a little known feature of Typescript with React allows us to pass generic type arguments directly in to React components:

```
// app.tsx
interface Cat {
  name: string,
  image: string
}

const cats: Cat[] = [
  { name: 'Cute cat', image: 'cure-cat.png' },
  { name: 'Evil cat', image: 'evil-cat.png }
]

const CatSlider = Slider<Cat>

export default () {
  return (
    <Slider<Cat>
      slides={cats}
      renderSlide={cat => (
        <div>
          <img src={cat.image} />
          <h2>{cat.name}</h2>
        </div>
      )}
    />
  )
}
```

By passing the generic inside the TSX via `<Slider<Cat> />` we can omit the intermediary constant. It looks a little weird but works a charm!

---

## Productivity

##### Tuesday 30th October 2018

Read about how our small engineering achieves productivity whilst working on multiple products at the same time.

### Language and tooling

We're using [React](https://reactjs.org/), [Next.js](https://nextjs.org/) and [Styled Components](https://www.styled-components.com/) all written in [Typescript](https://www.typescriptlang.org/).

Out of all the tools we're using, I would say that Typescript brings the biggest productivity boost since it allows engineers to write code iteratively with the ability to safely refactor and improve later. Both React and Styled Components work very well out of the box with Typescript. As a bonus, [Visual Studio Code](https://code.visualstudio.com/) has fantastic built-in Typescript support.

### Project set up

Fantastec has several web products built on top of the same technology stack. As a result, we've been able to share a fair amount of project boilerplate, configuration, UI components and utilities between projects.

To facilitate the sharing of code safely and easily, we're using [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) to manage packages of code between products.

### Communicating with the back-end

One of the biggest sources of lost productivity I have seen in engineering teams is due to a poor contract between front-end and back-end engineers when it comes to HTTP communication. The problem is two-fold. First, API [data transfer objects](https://stackoverflow.com/questions/1051182/what-is-data-transfer-object) are often agreed on informally (on slack, in the office etc) but are rarely enforced in the code leading to inconsistencies over time or [defensive programming](https://medium.com/web-engineering-vox/the-art-of-defensive-programming-6789a9743ed4). Second, front-end engineers are often blocked when they build a new feature, having to wait for the back-end team to finish the APIs that are required to power the feature.

At Fantastec, we've attempted to tackle both of these issues with one approach: defining data transfer objects in Typescript on the front-end and transpiling them in to C# view models for the back-end to use. From these DTOs the front-end also creates a simple mock-server using a combination of [JSON server](https://github.com/typicode/json-server) and [Faker](https://github.com/marak/Faker.js/). The result is a fully autonomous front-end team that can finish features as if the real API exists.

### Working with designers

Working with designers is a topic that warrants it's own series of mini posts, however I wanted to share one particular aspect of the process that Fantastec has iterated upon: "treat everything as a component". Designs are completed in [Sketch](https://www.sketchapp.com/) and presented via [Invision](https://www.invisionapp.com). Front-end engineers pick up the designs and implement them using React and Styled Components inside a [Storybook](https://storybook.js.org/) in isolation from the main application. Once the components are finished, they are placed inside the application and tweaked with designers during a sign-off process.

The key point here is that we're building our UI components inside Storybook in isolation from the main application. The Storybook is published to a public URL for the purpose of documenting existing components when working on new interfaces.

### Effective planning

As with any productive team, planning is as important as execution and tooling.

Since I started Fantastec, the product team has grown four fold and continues to grow at a rapid pace. Consequently, we've had to invest time in our process. We've settled on two week "focussed" sprints where each sprint has a consistent theme. This helps everyone stay in the same context and encourages collaboration and pair-programming.
