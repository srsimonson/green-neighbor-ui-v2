# Green Neighbor Web Tool UI V2

Yes, we're reduxing this. Due to developer discontent with the original version of this project, it's getting a ground up rewrite, with some changes. *This README was written by David in a short period of time, his ideas are very fallable, please question them*.

First of all, I'd like to try at least moderate domain driven design in this project. The project is organized around features, which should connect 1-to-1 with sets of endpoints in the API project. Things such as reducers, actions, and even remotely custom styling should stay as close to the components that actually rely on them as possible.
